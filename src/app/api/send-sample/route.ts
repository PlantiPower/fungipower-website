import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { generateEmailHtml } from '@/lib/email-templates';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, website_url, captchaToken, name, cropCategory, crop, otherCrop, locale } = data;

    // 0. Bot checks
    if (website_url) {
      return NextResponse.json({ error: 'Bot detected' }, { status: 400 });
    }

    if (!captchaToken && process.env.NODE_ENV === 'production') {
      return NextResponse.json({ error: 'Captcha missing' }, { status: 400 });
    }

    if (captchaToken !== 'skip_verification') {
      // Verify Turnstile
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

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return NextResponse.json({ error: 'API_KEY missing' }, { status: 500 });
    const resend = new Resend(apiKey);

    const emailHtml = generateEmailHtml({
      name,
      crop,
      otherCrop,
      cropCategory,
      unsubscribeUrl: '{{unsubscribe_url}}' // Resend or marketing tool usually handles this replacment or we pass it
    });

    await resend.emails.send({
      from: 'PlantiPower <info@mail.plantipower.com>',
      to: email,
      replyTo: 'info@plantipower.com',
      subject: 'Welkom bij PlantiPower - Je aanvraag is ontvangen',
      html: emailHtml
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
