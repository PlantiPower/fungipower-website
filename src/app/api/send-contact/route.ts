import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { name, company, email, message, website_url } = await request.json();

    if (website_url) return NextResponse.json({ error: 'Bot detected' }, { status: 400 });

    const apiKey = process.env.RESEND_API_KEY;
    const resend = apiKey ? new Resend(apiKey) : null;

    if (resend) {
      await resend.emails.send({
        from: 'PlantiPower HQ <info@mail.plantipower.com>',
        to: 'info@plantipower.com',
        replyTo: email,
        subject: `Nieuw Contactbericht: ${company || name}`,
        html: `<h3>Bericht van ${name}</h3><p>${message}</p>`
      });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
