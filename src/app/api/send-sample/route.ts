import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const emailStyles = {
  container: 'background-color: #011410; color: #ffffff; font-family: "Outfit", Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; border-radius: 0; border: none; overflow: hidden;',
  tag: 'display: inline-block; background-color: #84cc16; color: #011410; font-size: 10px; font-weight: 900; padding: 5px 12px; border-radius: 4px; text-transform: uppercase; margin-bottom: 15px; letter-spacing: 2px;',
  heroTitle: 'font-size: 42px; font-weight: 900; line-height: 0.95; margin-bottom: 0; text-transform: uppercase; letter-spacing: -2px;',
  heroAccent: 'color: #84cc16;',
  profileSection: 'padding: 30px 40px; display: flex; align-items: center; gap: 20px; background-color: #011410;',
  profilePic: 'width: 56px; height: 56px; border-radius: 28px; object-fit: cover; border: 1.5px solid #84cc16;',
  quoteBar: 'width: 2px; height: 30px; background-color: #84cc16; opacity: 0.5;',
  quoteText: 'font-size: 16px; font-weight: 800; text-transform: uppercase; letter-spacing: -0.3px; lineHeight: 1.2; color: #ffffff; flex: 1;',
  bodyArea: 'padding: 40px 40px; background-color: #011410;',
  greeting: 'font-size: 16px; font-weight: 400; line-height: 1.8; margin-bottom: 10px; color: rgba(255,255,255,0.7);',
  bodyText: 'color: rgba(255,255,255,0.7); font-size: 16px; line-height: 1.8; margin-bottom: 20px;',
  sectionTitle: 'display: block; font-size: 20px; font-weight: 900; color: #ffffff; text-transform: uppercase; letter-spacing: -0.5px; margin-bottom: 25px; margin-top: 40px;',
  productCard: 'background: rgba(255,255,255,0.02); border-radius: 24px; border: 1px solid rgba(255,255,255,0.05); margin-bottom: 15px; overflow: hidden;',
};

export async function POST(request: Request) {
  try {
    const { name, company, email, phone, address, city, crop, comments } = await request.json();
    const headerImage = 'https://plantipower-new.vercel.app/images/email/header.jpg';

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return NextResponse.json({ error: 'API_KEY missing' }, { status: 500 });
    const resend = new Resend(apiKey);

    // Customer Confirmation with FLOWING TRACKER
    await resend.emails.send({
      from: 'PlantiPower <info@mail.plantipower.com>',
      to: email,
      replyTo: 'info@plantipower.com',
      subject: 'Welkom bij PlantiPower - Je aanvraag is ontvangen',
      html: `
        <html>
          <body style="margin: 0; padding: 0; background-color: #000;">
            <div style="${emailStyles.container}">
              
              <div style="position: relative; width: 100%; height: 480px; background-color: #011410; overflow: hidden;">
                <img src="${headerImage}" style="width: 100%; height: 100%; object-fit: cover;" />
                <div style="position: absolute; bottom: 40px; left: 40px; right: 40px;">
                  <div style="${emailStyles.tag}">Welcome Partner</div>
                  <div style="${emailStyles.heroTitle}">WIJ GAAN JE <br /><span style="${emailStyles.heroAccent}">PROEFPAKKET</span> KLAARMAKEN.</div>
                </div>
              </div>

              <div style="${emailStyles.profileSection}">
                <img src="https://plantipower.com/images/email/John.jpeg" style="${emailStyles.profilePic}" />
                <div style="${emailStyles.quoteBar}"></div>
                <div style="${emailStyles.quoteText}">"De perfecte oogst begint bij een gezonde bodem."</div>
              </div>

              <div style="${emailStyles.bodyArea}; padding-bottom: 0;">
                <div style="${emailStyles.greeting}">Beste teler,</div>
                <div style="${emailStyles.bodyText}">
                  Goed dat je ervoor kiest om PlantiPower zelf te ervaren.<br /><br />
                  Wij vinden dat een samenwerking begint bij resultaat. Eerst zien wat het doet in jouw teelt. Geen verkooppraat, maar meetbaar verschil in wortelontwikkeling, opname en gewasreactie.<br /><br />
                  We zijn benieuwd naar de resultaten in jouw gewas.
                </div>
                
                <div style="margin-top: 30px;">
                  <img src="https://plantipower.com/images/email/handtekening_john_scribble_white.png" style="height: 60px; margin-bottom: 5px;" />
                  <div style="font-size: 16px; font-weight: 900; color: #ffffff; text-transform: uppercase;">John Geenen</div>
                </div>
              </div>

              <div style="${emailStyles.bodyArea}">
                <span style="${emailStyles.sectionTitle}">Je proefpakket <span style="color:#84cc16;">bestaat uit:</span></span>

                <!-- ALL12 -->
                <div style="${emailStyles.productCard}; border: 1px solid rgba(132, 204, 22, 0.2); padding: 25px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <div style="color:#84cc16; font-size:10px; font-weight:900; margin-bottom:4px; text-transform:uppercase;">PlantiPower</div>
                        <div style="font-size:26px; font-weight:900; margin-bottom:4px; color: #84cc16;">ALL12</div>
                        <div style="color:rgba(255,255,255,0.5); font-size:13px; line-height:1.4;">Optimaliseert transport naar de wortel.</div>
                      </td>
                      <td width="70" align="right">
                        <img src="https://plantipower.com/images/products/plantipower-all12-transparant.png" style="width: 60px; height: auto;" />
                      </td>
                    </tr>
                  </table>
                </div>

                <!-- SHIELD -->
                <div style="${emailStyles.productCard}; border: 1px solid rgba(56, 189, 248, 0.2); padding: 25px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <div style="color:#38bdf8; font-size:10px; font-weight:900; margin-bottom:4px; text-transform:uppercase;">PlantiPower</div>
                        <div style="font-size:26px; font-weight:900; margin-bottom:4px; color: #38bdf8;">SHIELD</div>
                        <div style="color:rgba(255,255,255,0.5); font-size:13px; line-height:1.4;">Versterkt natuurlijke weerstand.</div>
                      </td>
                      <td width="70" align="right">
                        <img src="https://plantipower.com/images/products/plantipower-shield-transparant.png" style="width: 60px; height: auto;" />
                      </td>
                    </tr>
                  </table>
                </div>
              </div>

              <!-- REFINED PACKAGE JOURNEY (NO BREAKS) -->
              <div style="background-color: #011d17; padding: 60px 30px; border-top: 1px solid rgba(255,255,255,0.05);">
                <div style="text-align: center; margin-bottom: 40px;">
                  <h3 style="font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 3px; color: #84cc16; margin-bottom: 10px;">PACKAGE JOURNEY</h3>
                  <div style="font-size: 18px; font-weight: 900; color: #ffffff;">Live status: <span style="color: #84cc16;">In voorbereiding</span></div>
                </div>

                <div style="position: relative; padding: 20px 0;">
                  <!-- Technical Background Line (Full length) -->
                  <div style="position: absolute; top: 34px; left: 10%; right: 10%; height: 1px; background-color: rgba(255,255,255,0.1); z-index: 1;"></div>
                  
                  <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed; position: relative; z-index: 5;">
                    <tr>
                      <td align="center">
                        <div style="width: 28px; height: 28px; border-radius: 14px; background-color: #84cc16; display: inline-block;">
                           <img src="https://img.icons8.com/material-rounded/24/011410/checkmark--v1.png" style="width: 14px; margin-top: 7px;" />
                        </div>
                        <div style="font-size: 8px; font-weight: 900; text-transform: uppercase; color: #84cc16; margin-top: 10px; letter-spacing: 0.5px;">Aanvraag</div>
                      </td>
                      <td align="center">
                        <div style="width: 28px; height: 28px; border-radius: 14px; background-color: #011410; display: inline-block; border: 1px solid #84cc16; box-shadow: 0 0 15px rgba(132, 204, 22, 0.3);">
                           <div style="width: 6px; height: 6px; border-radius: 3px; background-color: #84cc16; display: inline-block; margin-top: 11px;"></div>
                        </div>
                        <div style="font-size: 8px; font-weight: 900; text-transform: uppercase; color: #ffffff; margin-top: 10px; letter-spacing: 0.5px;">Klaarmaken</div>
                      </td>
                      <td align="center">
                        <div style="width: 28px; height: 28px; border-radius: 14px; background-color: #011d17; display: inline-block; border: 1px solid rgba(255,255,255,0.1);">
                           <div style="width: 4px; height: 4px; border-radius: 2px; background-color: rgba(255,255,255,0.1); display: inline-block; margin-top: 12px;"></div>
                        </div>
                        <div style="font-size: 8px; font-weight: 900; text-transform: uppercase; color: rgba(255,255,255,0.2); margin-top: 10px; letter-spacing: 0.5px;">Ingepakt</div>
                      </td>
                      <td align="center">
                        <div style="width: 28px; height: 28px; border-radius: 14px; background-color: #011d17; display: inline-block; border: 1px solid rgba(255,255,255,0.1);">
                           <div style="width: 4px; height: 4px; border-radius: 2px; background-color: rgba(255,255,255,0.1); display: inline-block; margin-top: 12px;"></div>
                        </div>
                        <div style="font-size: 8px; font-weight: 900; text-transform: uppercase; color: rgba(255,255,255,0.2); margin-top: 10px; letter-spacing: 0.5px;">Vervoeren</div>
                      </td>
                      <td align="center">
                        <div style="width: 28px; height: 28px; border-radius: 14px; background-color: #011d17; display: inline-block; border: 1px solid rgba(255,255,255,0.1);">
                           <div style="width: 4px; height: 4px; border-radius: 2px; background-color: rgba(255,255,255,0.1); display: inline-block; margin-top: 12px;"></div>
                        </div>
                        <div style="font-size: 8px; font-weight: 900; text-transform: uppercase; color: rgba(255,255,255,0.2); margin-top: 10px; letter-spacing: 0.5px;">Afleveren</div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>

              <div style="background: #000; padding: 40px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05);">
                <div style="color: rgba(255,255,255,0.2); font-size: 9px; font-weight: 800; text-transform: uppercase;">Venlo, Nederland  |  PLANTIPOWER.COM</div>
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
