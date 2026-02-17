import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import { generateEmailHtml } from '@/lib/email-templates';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    // Initialize inside handler to avoid build-time errors
    const stripeSecret = process.env.STRIPE_SECRET_KEY;
    const stripe = new Stripe(stripeSecret || '');

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
                    // 1. Send Welcome Email to Customer
                    await resend.emails.send({
                        from: 'PlantiPower <info@mail.plantipower.com>',
                        to: email,
                        replyTo: 'info@plantipower.com',
                        subject: 'Welkom bij PlantiPower - Je aanvraag is ontvangen',
                        html: emailHtml
                    });
                    console.log(`Email sent successfully to customer: ${email}`);

                    // 2. Send Notification to Internal Team
                    await resend.emails.send({
                        from: 'PlantiPower Orders <info@mail.plantipower.com>',
                        to: 'info@plantipower.com',
                        replyTo: email,
                        subject: `🎉 Nieuwe Proefpakket Bestelling: ${metadata.company || metadata.name}`,
                        html: `
                            <h2>Nieuwe bestelling ontvangen!</h2>
                            <p><strong>Naam:</strong> ${metadata.name}</p>
                            <p><strong>Bedrijf:</strong> ${metadata.company || 'N/A'}</p>
                            <p><strong>Email:</strong> ${metadata.email}</p>
                            <p><strong>Telefoon:</strong> ${metadata.phone}</p>
                            <p><strong>Adres:</strong> ${metadata.address}, ${metadata.city}</p>
                            <hr />
                            <p><strong>Categorie:</strong> ${metadata.cropCategory}</p>
                            <p><strong>Gewas:</strong> ${metadata.crop} ${metadata.otherCrop ? `(${metadata.otherCrop})` : ''}</p>
                            <p><strong>Opmerkingen:</strong> ${metadata.comments || 'Geen'}</p>
                            <p><strong>Taal:</strong> ${metadata.locale}</p>
                            <hr />
                            <p>Deze bestelling is succesvol betaald via Stripe.</p>
                        `
                    });
                    console.log(`Notification sent successfully to info@plantipower.com`);
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
