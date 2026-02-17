import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-01-27' as any,
});

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const {
            email, name, company, phone, address, city,
            cropCategory, crop, otherCrop, comments, locale
        } = data;

        const origin = request.headers.get('origin');

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card', 'ideal'],
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
        console.error('Stripe error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
