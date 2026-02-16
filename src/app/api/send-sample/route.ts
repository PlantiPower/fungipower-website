import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const emailStyles = {
  container: 'background-color: #011410; color: #ffffff; font-family: "Outfit", Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; border-radius: 0; border: none; overflow: hidden;',
  tag: 'display: inline-block; background-color: #84cc16; color: #011410; font-size: 10px; font-weight: 900; padding: 5px 12px; border-radius: 4px; text-transform: uppercase; margin-bottom: 15px; letter-spacing: 2px;',
  heroTitle: 'font-size: 42px; font-weight: 900; line-height: 0.95; margin-bottom: 0; text-transform: uppercase; letter-spacing: -2px;',
  heroAccent: 'color: #84cc16;',
  profileSection: 'padding: 60px 40px; background-color: #011410; border-bottom: 1px solid rgba(255,255,255,0.05);',
  profilePic: 'width: 85px; height: 85px; border-radius: 50%; object-fit: cover;',
  quoteText: 'font-size: 18px; font-weight: 800; text-transform: uppercase; letter-spacing: -0.2px; line-height: 1.3; color: #ffffff; margin-bottom: 12px;',
  founderLabel: 'font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; color: #84cc16;',
  bodyArea: 'padding: 40px 40px; background-color: #011410;',
  greeting: 'font-size: 16px; font-weight: 400; line-height: 1.8; margin-bottom: 10px; color: rgba(255,255,255,0.7);',
  bodyText: 'color: rgba(255,255,255,0.7); font-size: 16px; line-height: 1.8; margin-bottom: 20px;',
  sectionTitle: 'display: block; font-size: 20px; font-weight: 900; color: #ffffff; text-transform: uppercase; letter-spacing: -0.5px; margin-bottom: 25px; margin-top: 20px;',
  productCard: 'background: rgba(255,255,255,0.02); border-radius: 32px; border: 1px solid rgba(255,255,255,0.06); padding: 30px; text-align: center;',
  reviewCard: 'border-left: 2px solid #84cc16; padding-left: 15px; margin-bottom: 15px;',
};

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const headerImage = 'https://plantipower-new.vercel.app/images/email/header.jpg';

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return NextResponse.json({ error: 'API_KEY missing' }, { status: 500 });
    const resend = new Resend(apiKey);

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
                
                <div style="position: absolute; top: 30px; right: 40px; text-align: right;">
                    <div style="font-size: 10px; font-weight: 900; color: #84cc16; text-transform: uppercase; letter-spacing: 2px;">Phase 01</div>
                    <div style="font-size: 13px; font-weight: 300; color: #ffffff; opacity: 0.5;">Mail 1 van 3</div>
                </div>

                <div style="position: absolute; bottom: 40px; left: 40px; right: 40px;">
                  <div style="${emailStyles.tag}">Welcome Partner</div>
                  <div style="${emailStyles.heroTitle}">WIJ GAAN JE <br /><span style="${emailStyles.heroAccent}">PROEFPAKKET</span> KLAARMAKEN.</div>
                </div>
              </div>

              <!-- PREMIUM FOUNDER SECTION - CIRCLE -->
              <div style="${emailStyles.profileSection}">
                <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                        <td width="85" valign="top">
                            <div style="width: 85px; height: 85px;">
                                <img src="https://plantipower.com/images/email/John.jpeg" style="${emailStyles.profilePic}" />
                            </div>
                        </td>
                        <td valign="middle" style="padding-left: 25px;">
                            <div style="font-size: 40px; color: #84cc16; opacity: 0.1; line-height: 1; margin-bottom: -15px; font-family: Georgia, serif;">"</div>
                            <div style="${emailStyles.quoteText}">De perfecte oogst begint bij een gezonde bodem.</div>
                            <table cellpadding="0" cellspacing="0">
                                <tr>
                                    <td width="20" style="border-bottom: 2px solid #84cc16;">&nbsp;</td>
                                    <td style="padding-left: 10px;">
                                        <div style="${emailStyles.founderLabel}">John Geenen — Founder</div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
              </div>

              <div style="${emailStyles.bodyArea}; padding-bottom: 0;">
                <div style="${emailStyles.greeting}">Beste teler,</div>
                <div style="${emailStyles.bodyText}">
                  Bedankt dat je ervoor kiest om PlantiPower zelf te ervaren.<br /><br />
                  Wij vinden dat een samenwerking begint bij resultaat. Eerst zien wat het doet in jouw teelt. Geen verkooppraat, maar meetbaar verschil in wortelontwikkeling, opname en gewasreactie.<br /><br />
                  We zijn benieuwd naar de resultaten in jouw gewas.
                </div>
                
                <div style="margin-top: 30px;">
                  <img src="https://plantipower.com/images/email/handtekening_john_scribble_white.png" style="height: 85px; margin-bottom: 5px;" />
                  <div style="font-size: 16px; font-weight: 900; color: #ffffff; text-transform: uppercase;">John Geenen</div>
                </div>
              </div>

              <div style="${emailStyles.bodyArea}">
                <span style="${emailStyles.sectionTitle}">Je proefpakket <span style="color:#84cc16;">bestaat uit:</span></span>
                <div style="text-align: center; font-size: 0;">
                  <div style="display: inline-block; width: 250px; vertical-align: top; margin-bottom: 20px; text-align: left;">
                    <div style="${emailStyles.productCard}; border: 1px solid rgba(132, 204, 22, 0.2); margin-right: 10px;">
                        <div style="color:#ffffff; font-size:10px; font-weight:900; margin-bottom:0px; text-transform:uppercase; line-height: 1;">PlantiPower</div>
                        <div style="font-size:28px; font-weight:900; margin-bottom:20px; color: #84cc16; line-height: 1;">ALL12</div>
                        <img src="https://plantipower.com/images/products/plantipower-all12-transparant.png" style="width: 100px; height: auto; margin-bottom: 20px;" />
                        <div style="color:rgba(255,255,255,0.5); font-size:12px; line-height:1.5;">
                            Optimaliseert nutriëntenstroom en verbetert opnamecapaciteit.
                        </div>
                    </div>
                  </div>
                  <div style="display: inline-block; width: 250px; vertical-align: top; margin-bottom: 20px; text-align: left;">
                    <div style="${emailStyles.productCard}; border: 1px solid rgba(56, 189, 248, 0.2); margin-left: 10px;">
                        <div style="color:#ffffff; font-size:10px; font-weight:900; margin-bottom:0px; text-transform:uppercase; line-height: 1;">PlantiPower</div>
                        <div style="font-size:28px; font-weight:900; margin-bottom:20px; color: #38bdf8; line-height: 1;">SHIELD</div>
                        <img src="https://plantipower.com/images/products/plantipower-shield-transparant.png" style="width: 100px; height: auto; margin-bottom: 20px;" />
                        <div style="color:rgba(255,255,255,0.5); font-size:12px; line-height:1.5;">
                            Versterkt natuurlijke weerbaarheid en celstructuur.
                        </div>
                    </div>
                  </div>
                </div>

                <span style="${emailStyles.sectionTitle}">Ervaring van <span style="color:#84cc16;">kwekers:</span></span>
                <div style="${emailStyles.reviewCard}">
                    <div style="color: rgba(255,255,255,0.6); font-size: 13px; font-style: italic;">"Egalere wortels en betere opname."</div>
                </div>
                <div style="${emailStyles.reviewCard}; border-left-color: #38bdf8;">
                    <div style="color: rgba(255,255,255,0.6); font-size: 13px; font-style: italic;">"Absoluut minder gewasstress."</div>
                </div>
              </div>

              <!-- TRACKER -->
              <div style="background-color: #011d17; padding: 60px 30px; border-top: 1px solid rgba(255,255,255,0.05);">
                <div style="text-align: center; margin-bottom: 40px;">
                  <h3 style="font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 3px; color: #84cc16; margin-bottom: 10px;">PACKAGE JOURNEY</h3>
                  <div style="font-size: 18px; font-weight: 900; color: #ffffff;">Live status: <span style="color: #84cc16;">In voorbereiding</span></div>
                </div>

                <div style="position: relative; padding: 20px 0;">
                  <div style="position: absolute; top: 34px; left: 45px; right: 45px; height: 1px; background-color: rgba(255,255,255,0.1); z-index: 1;"></div>
                  <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed; position: relative; z-index: 5;">
                    <tr>
                      <td align="center">
                        <div style="width: 28px; height: 28px; border-radius: 14px; background-color: #84cc16; display: inline-block; border: 4px solid #011d17;">
                           <img src="https://img.icons8.com/material-rounded/24/011410/checkmark--v1.png" style="width: 14px; margin-top: 7px;" />
                        </div>
                        <div style="font-size: 8px; font-weight: 900; text-transform: uppercase; color: #84cc16; margin-top: 10px;">Ontvangen</div>
                      </td>
                      <td align="center">
                        <div style="width: 28px; height: 28px; border-radius: 14px; background-color: #84cc16; display: inline-block; border: 4px solid #011d17; box-shadow: 0 0 15px rgba(132, 204, 22, 0.3);">
                           <div style="width: 6px; height: 6px; border-radius: 3px; background-color: #011410; display: inline-block; margin-top: 11px;"></div>
                        </div>
                        <div style="font-size: 8px; font-weight: 900; text-transform: uppercase; color: #ffffff; margin-top: 10px;">Klaarmaken</div>
                      </td>
                      <td align="center">
                        <div style="width: 28px; height: 28px; border-radius: 14px; background-color: #011d17; display: inline-block; border: 1px solid rgba(255,255,255,0.1);">
                           <div style="width: 4px; height: 4px; border-radius: 2px; background-color: rgba(255,255,255,0.1); display: inline-block; margin-top: 12px;"></div>
                        </div>
                        <div style="font-size: 8px; font-weight: 900; text-transform: uppercase; color: rgba(255,255,255,0.2); margin-top: 10px;">Ingepakt</div>
                      </td>
                      <td align="center">
                        <div style="width: 28px; height: 28px; border-radius: 14px; background-color: #011d17; display: inline-block; border: 1px solid rgba(255,255,255,0.1);">
                           <div style="width: 4px; height: 4px; border-radius: 2px; background-color: rgba(255,255,255,0.1); display: inline-block; margin-top: 12px;"></div>
                        </div>
                        <div style="font-size: 8px; font-weight: 900; text-transform: uppercase; color: rgba(255,255,255,0.2); margin-top: 10px;">Onderweg</div>
                      </td>
                      <td align="center">
                        <div style="width: 28px; height: 28px; border-radius: 14px; background-color: #011d17; display: inline-block; border: 1px solid rgba(255,255,255,0.1);">
                           <div style="width: 4px; height: 4px; border-radius: 2px; background-color: rgba(255,255,255,0.1); display: inline-block; margin-top: 12px;"></div>
                        </div>
                        <div style="font-size: 8px; font-weight: 900; text-transform: uppercase; color: rgba(255,255,255,0.2); margin-top: 10px;">Afgeleverd</div>
                      </td>
                    </tr>
                  </table>
                  <div style="position: absolute; top: 34px; left: 45px; width: 25%; height: 1px; background-color: #84cc16; z-index: 3;"></div>
                </div>
              </div>

              <div style="padding: 0 40px 40px 40px; background-color: #011410;">
                  <div style="padding: 25px; border: 1px dashed rgba(255,255,255,0.1); border-radius: 24px; text-align: center;">
                      <div style="color: rgba(255,255,255,0.5); font-size: 14px; line-height: 1.6;">
                          In de volgende update van ons vertellen we meer over ons bedrijf en wie de kweker was die ons inspireerde.
                      </div>
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
