import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { generateEmailHtml } from '@/lib/email-templates';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, website_url, captchaToken, name, cropCategory, crop, otherCrop } = data;

    if (website_url) return NextResponse.json({ error: 'Bot detected' }, { status: 400 });

    const apiKey = process.env.RESEND_API_KEY;
    const resend = apiKey ? new Resend(apiKey) : null;

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
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
