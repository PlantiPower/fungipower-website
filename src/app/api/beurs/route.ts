import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { name, company, email, phone, message, website_url } = await request.json();

    if (website_url) return NextResponse.json({ error: 'Bot detected' }, { status: 400 });

    const apiKey = process.env.RESEND_API_KEY;
    const resend = apiKey ? new Resend(apiKey) : null;

    if (resend) {
      await resend.emails.send({
        from: 'FungiPower HQ <info@mail.fungipower.com>',
        to: 'info@fungipower.com',
        replyTo: email,
        subject: `Champignon Beurs Den Bosch — ${company || name}`,
        html: `
          <h2>Nieuwe aanmelding — Champignon Beurs Den Bosch</h2>
          <p><strong>Naam:</strong> ${name}</p>
          <p><strong>Bedrijf:</strong> ${company || '—'}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefoon:</strong> ${phone || '—'}</p>
          ${message ? `<p><strong>Bericht:</strong> ${message}</p>` : ''}
        `
      });

      // Confirmation to visitor
      await resend.emails.send({
        from: 'FungiPower HQ <info@mail.fungipower.com>',
        to: email,
        subject: 'Thanks for connecting — FungiPower',
        html: `
          <div style="font-family: sans-serif; background: #011410; color: #fff; padding: 40px; border-radius: 12px; max-width: 560px;">
            <img src="https://fungipower.bio/images/fungipower-logo.png" alt="FungiPower" style="height: 40px; margin-bottom: 32px;" />
            <h2 style="color: #f97316; font-size: 24px; margin-bottom: 16px;">Great to meet you, ${name.split(' ')[0]}!</h2>
            <p style="color: rgba(255,255,255,0.7); line-height: 1.7;">We'll make sure your extra sample gets to you. In the meantime, feel free to reach out if you have any questions.</p>
            <p style="color: rgba(255,255,255,0.7); line-height: 1.7; margin-top: 16px;">We'll be in touch soon.</p>
            <p style="color: rgba(255,255,255,0.5); margin-top: 32px; font-size: 13px;">— The FungiPower Team</p>
          </div>
        `
      });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
