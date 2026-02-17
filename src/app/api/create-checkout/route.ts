import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const {
            email, name, company, phone, address, city,
            cropCategory, crop, otherCrop, comments, locale, captchaToken
        } = data;

        // 1. Verify Turnstile Captcha
        if (!captchaToken && process.env.NODE_ENV === 'production') {
            return NextResponse.json({ error: 'Captcha missing' }, { status: 400 });
        }

        if (captchaToken && captchaToken !== 'skip_verification') {
            const turnstileResult = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    secret: process.env.TURNSTILE_SECRET_KEY,
                    response: captchaToken,
                }),
            });

            const turnstileData = await turnstileResult.json();
            if (!turnstileData.success && process.env.NODE_ENV === 'production') {
                return NextResponse.json({ error: 'Captcha verification failed' }, { status: 400 });
            }
        }

        const stripeSecret = process.env.STRIPE_SECRET_KEY;
        if (!stripeSecret) {
            console.error('STRIPE_SECRET_KEY is missing');
            return NextResponse.json({ error: 'Stripe configuration missing' }, { status: 500 });
        }

        const stripe = new Stripe(stripeSecret, {
            apiVersion: '2025-01-27' as any,
        });

        const origin = request.headers.get('origin') || 'https://www.plantipower.com';

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card', 'ideal'],
            billing_address_collection: 'required',
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: locale === 'nl' ? 'PlantiPower Proefpakket' : 'PlantiPower Sample Pack',
                            description: locale === 'nl'
                                ? '1x 1L All12 + 1x 60ml Shield (incl. verzendkosten)'
                                : '1x 1L All12 + 1x 60ml Shield (incl. shipping)',
                        },
                        unit_amount: 2995, // €29.95
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            automatic_tax: { enabled: true },
            customer_update: { address: 'auto' },
            success_url: `${origin}/${locale}/?success=true`,
            cancel_url: `${origin}/${locale}/?canceled=true`,
            customer_email: email,
            metadata: {
                name,
                company,
                email,
                phone,
                address,
                city,
                cropCategory,
                crop,
                otherCrop,
                comments,
                locale
            },
        });

        return NextResponse.json({ url: session.url });
    } catch (err: any) {
        console.error('Stripe route error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
