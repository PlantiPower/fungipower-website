import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const emailStyles = {
  container: 'background-color: #011410; color: #ffffff; font-family: "Outfit", Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; border-radius: 0; border: none; overflow: hidden;',
  topBar: 'background-color: #ffffff; color: #011410; padding: 10px 40px; text-align: right; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;',
  heroSection: 'position: relative; width: 100%; height: 480px; overflow: hidden;',
  logoSquare: 'position: absolute; top: 0; left: 40px; background-color: #012b24; padding: 20px; width: 80px; height: 80px; display: flex; align-items: center; justify-content: center; z-index: 10;',
  tag: 'display: inline-block; background-color: #84cc16; color: #011410; font-size: 11px; font-weight: 900; padding: 6px 14px; border-radius: 0; text-transform: uppercase; margin-bottom: 25px; letter-spacing: 1px;',
  heroTitle: 'font-size: 56px; font-weight: 900; line-height: 0.95; margin-bottom: 0; text-transform: uppercase; letter-spacing: -3px;',
  heroAccent: 'color: #84cc16;',
  profileSection: 'padding: 60px 40px 40px 40px; display: flex; align-items: center; gap: 30px;',
  profilePic: 'width: 80px; height: 80px; border-radius: 50%; object-fit: cover;',
  quoteBar: 'width: 6px; height: 40px; background-color: #84cc16; border-radius: 2px;',
  quoteText: 'font-size: 20px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.5px; line-height: 1.2; flex: 1;',
  bodyArea: 'padding: 0 40px 60px 40px;',
  greeting: 'font-size: 16px; font-weight: 400; line-height: 1.8; margin-bottom: 20px; color: rgba(255,255,255,0.7);',
  bodyText: 'color: rgba(255,255,255,0.7); font-size: 16px; line-height: 1.8; margin-bottom: 30px;',
  sectionTitle: 'display: block; font-size: 12px; font-weight: 900; color: #84cc16; text-transform: uppercase; letter-spacing: 3px; margin: 60px 0 30px 0;',
  productCard: 'background: linear-gradient(135deg, rgba(13, 43, 36, 0.8) 0%, rgba(1, 20, 16, 1) 100%); border-radius: 24px; border: 1px solid rgba(132, 204, 22, 0.1); margin-bottom: 24px; overflow: hidden;',
  productContent: 'padding: 35px;',
  signatureArea: 'margin-top: 50px;',
  signatureImg: 'height: 60px; margin-bottom: 10px;',
  signatureName: 'font-size: 18px; font-weight: 900; color: #ffffff; text-transform: uppercase;',
  reviewCard: 'background: rgba(255,255,255,0.03); border-radius: 20px; padding: 25px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);',
};

const cropImages: Record<string, string> = {
  groente: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800',
  default: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800'
};

export async function POST(request: Request) {
  try {
    const { name, company, email, phone, address, city, crop, comments } = await request.json();
    const headerImage = cropImages[crop] || cropImages.default;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return NextResponse.json({ error: 'API_KEY missing' }, { status: 500 });
    const resend = new Resend(apiKey);

    // 1. Premium HQ Notification
    await resend.emails.send({
      from: 'PlantiPower HQ <info@mail.plantipower.com>',
      to: 'info@plantipower.com',
      replyTo: email,
      subject: `PROEFPAKKET AANVRAAG: ${company}`,
      html: `
        <div style="background-color: #011410; color: #ffffff; font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; border-radius: 40px; border: 1px solid rgba(255,255,255,0.05);">
          <div style="text-align: center; margin-bottom: 40px;">
            <img src="https://irp.cdn-website.com/480e14da/dms3rep/multi/Planti-Power-Logo-.png" alt="PlantiPower" style="height: 40px;" />
          </div>
          
          <div style="text-align: center; margin-bottom: 40px;">
             <div style="color: #84cc16; font-size: 24px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px;">Nieuwe Aanvraag</div>
             <div style="color: rgba(255,255,255,0.6); font-size: 14px;">Er is een nieuw proefpakket aangevraagd via de website.</div>
          </div>
          
          <div style="background: rgba(13, 43, 36, 0.5); padding: 30px; border-radius: 24px; border: 1px solid rgba(132, 204, 22, 0.2);">
            <div style="display: grid; gap: 20px;">
              <div>
                <div style="color: #84cc16; font-size: 10px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 4px;">Contactpersoon</div>
                <div style="color: #ffffff; font-size: 16px; font-weight: 600;">${name}</div>
              </div>
              <div style="margin-top: 15px;">
                <div style="color: #84cc16; font-size: 10px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 4px;">Bedrijf</div>
                <div style="color: #ffffff; font-size: 16px; font-weight: 600;">${company}</div>
              </div>
              <div style="margin-top: 15px;">
                <div style="color: #84cc16; font-size: 10px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 4px;">E-mail & Telefoon</div>
                <div style="color: #ffffff; font-size: 16px; font-weight: 600;">${email} <br/> ${phone}</div>
              </div>
              <div style="margin-top: 15px;">
                <div style="color: #84cc16; font-size: 10px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 4px;">Locatie</div>
                <div style="color: #ffffff; font-size: 16px; font-weight: 600;">${address}, ${city}</div>
              </div>
              <div style="margin-top: 15px;">
                <div style="color: #84cc16; font-size: 10px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 4px;">Gewas / Teelt</div>
                <div style="color: #ffffff; font-size: 16px; font-weight: 600; color: #84cc16;">${crop}</div>
              </div>
              <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.05);">
                <div style="color: #84cc16; font-size: 10px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 4px;">Opmerkingen</div>
                <div style="color: rgba(255,255,255,0.7); font-size: 14px; line-height: 1.6;">${comments || 'Geen opmerkingen opgegeven.'}</div>
              </div>
            </div>
          </div>
          
          <div style="margin-top: 40px; text-align: center; color: rgba(255,255,255,0.3); font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">
            PlantiPower HQ Portal
          </div>
        </div>
      `
    });

    // 2. ULTIMATE DESIGNER CONFIRMATION
    await resend.emails.send({
      from: 'PlantiPower <info@mail.plantipower.com>',
      to: email,
      replyTo: 'info@plantipower.com',
      subject: 'Welkom bij PlantiPower - Je aanvraag is ontvangen',
      html: `
        <html>
          <head>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet">
          </head>
          <body style="margin: 0; padding: 0; background-color: #000;">
            <div style="${emailStyles.container}">
              
              <!-- Top Bar -->
              <div style="${emailStyles.topBar}">
                Mail 1 van 3 | Welkom bij PlantiPower
              </div>

              <!-- Hero Section -->
              <div style="${emailStyles.heroSection}">
                <div style="${emailStyles.logoSquare}">
                  <img src="https://irp.cdn-website.com/480e14da/dms3rep/multi/Planti-Power-Logo-.png" style="width: 100%;" />
                </div>
                <img src="https://images.unsplash.com/photo-1449300079323-02e209d9d02d?auto=format&fit=crop&q=80&w=800" style="width: 100%; height: 100%; object-fit: cover;" />
                <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(0deg, #011410 0%, transparent 100%); padding: 40px;">
                  <div style="${emailStyles.tag}">Product Update</div>
                  <div style="${emailStyles.heroTitle}">Wij gaan je<br/>proefpakket <span style="${emailStyles.heroAccent}">klaarmaken.</span></div>
                </div>
              </div>

              <!-- Profile & Quote -->
              <div style="${emailStyles.profileSection}">
                <img src="https://plantipower.com/images/email/John.jpeg" style="${emailStyles.profilePic}" />
                <div style="${emailStyles.quoteBar}"></div>
                <div style="${emailStyles.quoteText}">"De perfecte oogst begint bij een gezonde bodem."</div>
              </div>

              <!-- Content Area -->
              <div style="${emailStyles.bodyArea}">
                <div style="${emailStyles.greeting}">Beste partner in groei,</div>
                
                <div style="${emailStyles.bodyText}">
                  Goed dat je ervoor kiest om PlantiPower zelf te ervaren.<br/><br/>
                  Wij vinden dat een samenwerking begint bij resultaat. Eerst zien wat het doet in jouw teelt, onder jouw omstandigheden. Geen verkooppraat, maar meetbaar verschil in wortelontwikkeling, opname en gewasreactie binnen de sierteelt.<br/><br/>
                  Wij veranderen niets aan jouw vakmanschap, wij geven je enkel de tools om het nog beter te laten renderen.
                </div>

                <!-- Signature -->
                <div style="${emailStyles.signatureArea}">
                  <div style="color: rgba(255,255,255,0.5); font-size: 14px; margin-bottom: 15px;">Met vriendelijke groet,</div>
                  <img src="https://plantipower.com/images/email/handtekening.webp" style="${emailStyles.signatureImg}" />
                  <div style="${emailStyles.signatureName}">John Geenen</div>
                </div>

                <!-- Product Extras - COMPACT -->
                <span style="${emailStyles.sectionTitle}">Je proefpakket bestaat uit:</span>

                <!-- ALL12 -->
                <div style="${emailStyles.productCard}">
                  <div style="display: flex; align-items: center; padding: 25px;">
                    <div style="flex: 1.5; padding-right: 20px;">
                      <div style="color:#84cc16; font-size:10px; font-weight:900; margin-bottom:8px; text-transform:uppercase;">Kern Systeem</div>
                      <div style="font-size:24px; font-weight:900; margin-bottom:8px;">ALL12</div>
                      <div style="color:rgba(255,255,255,0.5); font-size:14px; line-height:1.5;">Optimaliseert het transport van alle 12 essentiële nutriënten naar de wortel voor maximale groei.</div>
                    </div>
                    <div style="flex: 1; text-align: right;">
                      <img src="https://plantipower.com/images/products/plantipower-all12-transparant.png" style="width: 80px; height: auto;" />
                    </div>
                  </div>
                </div>

                <!-- SHIELD -->
                <div style="${emailStyles.productCard}">
                  <div style="display: flex; align-items: center; padding: 25px;">
                    <div style="flex: 1.5; padding-right: 20px;">
                      <div style="color:#84cc16; font-size:10px; font-weight:900; margin-bottom:8px; text-transform:uppercase;">Weerbaarheid</div>
                      <div style="font-size:24px; font-weight:900; margin-bottom:8px;">SHIELD</div>
                      <div style="color:rgba(255,255,255,0.5); font-size:14px; line-height:1.5;">Versterkt de natuurlijke weerstand tegen stress en invloeden van buitenaf.</div>
                    </div>
                    <div style="flex: 1; text-align: right;">
                      <img src="https://plantipower.com/images/products/plantipower-shield-transparant.png" style="width: 80px; height: auto;" />
                    </div>
                  </div>
                </div>

                <span style="${emailStyles.sectionTitle}">Pakket Status</span>
                <div style="background:#84cc16; padding:30px; border-radius:24px; text-align:center;">
                  <div style="color:#011410; font-weight:900; text-transform:uppercase; font-size:13px; letter-spacing:1px;">In voorbereiding</div>
                  <div style="color:#011410; font-size:15px; margin-top:5px;">Je proefpakket (€29,95) wordt binnen 1-2 werkdagen geleverd.</div>
                </div>

              </div>

              <!-- Footer -->
              <div style="background: rgba(0,0,0,0.3); padding: 50px 40px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05);">
                <div style="color: rgba(255,255,255,0.2); font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px;">
                  Venlo, Nederland  |  <a href="https://plantipower.com" style="color: #84cc16; text-decoration: none; font-weight: 900;">PLANTIPOWER.COM</a>
                </div>
              </div>

            </div>
          </body>
        </html>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
