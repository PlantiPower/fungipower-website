import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const {
            email, name, company, phone, address, city,
            cropCategory, crop, otherCrop, comments, locale
        } = data;

        const stripeSecret = process.env.STRIPE_SECRET_KEY;
        if (!stripeSecret) {
            console.error('STRIPE_SECRET_KEY is missing');
            return NextResponse.json({ error: 'Stripe configuration missing' }, { status: 500 });
        }

        const stripe = new Stripe(stripeSecret);

        const origin = request.headers.get('origin') || 'https://www.fungipower.com';

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card', 'ideal'],
            billing_address_collection: 'required',
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: locale === 'de' ? 'FungiPower Probepaket' : locale === 'nl' ? 'FungiPower Proefpakket' : 'FungiPower Sample Pack',
                            description: locale === 'de'
                                ? '1x 1L Start + 1x 60ml Boost (inkl. Versandkosten)'
                                : locale === 'nl'
                                    ? '1x 1L Start + 1x 60ml Boost (incl. verzendkosten)'
                                    : '1x 1L Start + 1x 60ml Boost (incl. shipping)',
                        },
                        unit_amount: 2995, // €29.95
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            automatic_tax: { enabled: true },
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
