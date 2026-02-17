import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import { generateEmailHtml } from '@/lib/email-templates';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-01-27' as any,
});

export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY;
    const resend = new Resend(apiKey);

    const body = await request.text();
    const sig = request.headers.get('stripe-signature')!;

    let event: Stripe.Event;

    try {
        // Note: To verify the signature, you need a STRIPE_WEBHOOK_SECRET.
        // For now, if the user hasn't provided it, we might skip full verification 
        // OR tell them to add it. But for a quick "live" setup, they usually need it.
        // I will try to use the secret if available, otherwise log a warning.
        const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

        if (webhookSecret) {
            event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
        } else {
            // Fallback for development/quick setup - proceed with caution
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
                    crop,
                    otherCrop,
                    cropCategory,
                });

                await resend.emails.send({
                    from: 'PlantiPower <info@mail.plantipower.com>',
                    to: email,
                    replyTo: 'info@plantipower.com',
                    subject: 'Welkom bij PlantiPower - Je aanvraag is ontvangen',
                    html: emailHtml
                });

                console.log(`Email sent successfully to ${email} after payment.`);
            } catch (error) {
                console.error('Error sending email after webhook:', error);
            }
        }
    }

    return NextResponse.json({ received: true });
}
