import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import { generateEmailHtml } from '@/lib/email-templates';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    // Initialize inside handler to avoid build-time errors
    const stripeSecret = process.env.STRIPE_SECRET_KEY;
    const stripe = new Stripe(stripeSecret || '', {
        apiVersion: '2025-01-27' as any,
    });

    const apiKey = process.env.RESEND_API_KEY;
    const resend = apiKey ? new Resend(apiKey) : null;

    const body = await request.text();
    const sig = request.headers.get('stripe-signature')!;

    let event: Stripe.Event;

    try {
        const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
        if (webhookSecret && sig) {
            event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
        } else {
            event = JSON.parse(body);
        }
    } catch (err: any) {
        console.error('Webhook Error:', err.message);
        return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session;
        const metadata = session.metadata;

        if (metadata) {
            try {
                const { email, name, crop, otherCrop, cropCategory } = metadata;

                const emailHtml = generateEmailHtml({
                    name,
                    crop: crop || '',
                    otherCrop: otherCrop || '',
                    cropCategory: cropCategory || 'algemeen',
                });

                if (resend && email) {
                    await resend.emails.send({
                        from: 'PlantiPower <info@mail.plantipower.com>',
                        to: email,
                        replyTo: 'info@plantipower.com',
                        subject: 'Welkom bij PlantiPower - Je aanvraag is ontvangen',
                        html: emailHtml
                    });
                    console.log(`Email sent successfully to ${email} after payment.`);
                } else {
                    console.log('Skipping email send: Resend not initialized or email missing.', { hasResend: !!resend, email });
                }
            } catch (error) {
                console.error('Error sending email after webhook:', error);
            }
        }
    }

    return NextResponse.json({ received: true });
}
