import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { generateEmailHtml } from '@/lib/email-templates';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const {
            email, name, company, phone, address, city,
            cropCategory, crop, otherCrop, comments, locale, website_url
        } = data;

        // Simple honeypot
        if (website_url) {
            return NextResponse.json({ error: 'Bot detected' }, { status: 400 });
        }

        const apiKey = process.env.RESEND_API_KEY;
        const resend = apiKey ? new Resend(apiKey) : null;

        if (!resend) {
            console.error('RESEND_API_KEY is missing');
            return NextResponse.json({ error: 'Email configuration missing' }, { status: 500 });
        }

        // 1. Generate Email HTML for Customer
        const emailHtml = generateEmailHtml({
            name,
            crop: crop || '',
            otherCrop: otherCrop || '',
            cropCategory: cropCategory || 'algemeen',
        });

        // 2. Send Welcome Email to Customer
        await resend.emails.send({
            from: 'FungiPower <info@mail.fungipower.com>',
            to: email,
            replyTo: 'info@fungipower.bio',
            subject: locale === 'de' 
                ? 'Willkommen bei FungiPower - Ihre Bestellung ist eingegangen' 
                : locale === 'nl' 
                    ? 'Welkom bij FungiPower - Je bestelling is ontvangen' 
                    : 'Welcome to FungiPower - Your order has been received',
            html: emailHtml
        });

        // 3. Send Notification to Internal Team (Owner)
        await resend.emails.send({
            from: 'FungiPower Orders <info@mail.fungipower.com>',
            to: 'info@fungipower.bio',
            replyTo: email,
            subject: `🎉 Nieuwe Proefpakket Bestelling (FACTUUR): ${company || name}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #f97316;">Nieuwe bestelling ontvangen!</h2>
                    <p>Er is zojuist een bestelling geplaatst voor een proefpakket via factuur.</p>
                    
                    <h3 style="border-bottom: 2px solid #eee; padding-bottom: 5px;">Klantgegevens</h3>
                    <p><strong>Naam:</strong> ${name}</p>
                    <p><strong>Bedrijf:</strong> ${company || 'N/A'}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Telefoon:</strong> ${phone || 'N/A'}</p>
                    
                    <h3 style="border-bottom: 2px solid #eee; padding-bottom: 5px;">Adresgegevens</h3>
                    <p><strong>Adres:</strong> ${address}</p>
                    <p><strong>Plaats:</strong> ${city}</p>
                    
                    <h3 style="border-bottom: 2px solid #eee; padding-bottom: 5px;">Product & Teelt</h3>
                    <p><strong>Order:</strong> FungiPower Proefpakket (€49,95 incl BTW, ex verzendkosten)</p>
                    <p><strong>Betaalmethode:</strong> Factuur (sturen na bestelling)</p>
                    <p><strong>Categorie:</strong> ${cropCategory}</p>
                    <p><strong>Specifiek Gewas:</strong> ${crop} ${otherCrop ? `(${otherCrop})` : ''}</p>
                    <p><strong>Opmerkingen:</strong> ${comments || 'Geen'}</p>
                    
                    <h3 style="border-bottom: 2px solid #eee; padding-bottom: 5px;">Systeem Details</h3>
                    <p><strong>Taal:</strong> ${locale}</p>
                    
                    <hr style="border: none; border-top: 1px solid #eee; margin-top: 20px;" />
                    <p style="font-size: 12px; color: #999;">Gezonden via FungiPower Automation</p>
                </div>
            `
        });

        return NextResponse.json({ success: true });
    } catch (err: any) {
        console.error('Order route error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
