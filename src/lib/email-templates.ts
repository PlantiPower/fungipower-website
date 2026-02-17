
export const emailStyles = {
  container: 'background-color: #011410; color: #ffffff; font-family: "Outfit", Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; border-radius: 0; border: none; overflow: hidden;',
  tag: 'display: inline-block; background-color: #84cc16; color: #011410; font-size: 10px; font-weight: 900; padding: 5px 12px; border-radius: 4px; text-transform: uppercase; margin-bottom: 15px; letter-spacing: 2px;',
  heroTitle: 'font-size: 42px; font-weight: 900; line-height: 0.95; margin-bottom: 0; text-transform: uppercase; letter-spacing: -2px;',
  heroAccent: 'color: #84cc16;',
  profileSection: 'padding: 35px 40px; background-color: #011410; border-bottom: 1px solid rgba(255,255,255,0.05);',
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

export const cropPlurals: Record<string, string> = {
  // Groente
  'tomaat': 'tomaten',
  'komkommer': 'komkommers',
  'paprika': 'paprika\'s',
  'aubergine': 'aubergines',
  'sla': 'sla',
  'spinazie': 'spinazie',
  // Fruit
  'aardbei': 'aardbeien',
  'blauwebes': 'blauwe bessen',
  'framboos': 'frambozen',
  'bramen': 'bramen',
  'appels': 'appels',
  'peren': 'peren',
  // Sierteelt
  'potplanten': 'potplanten',
  'perkplanten': 'perkplanten',
  'snijbloemen': 'snijbloemen',
  'rozen': 'rozen',
  'orchideeen': 'orchideeën',
  'chrysanten': 'chrysanten',
  // Boomteelt
  'laanbomen': 'laanbomen',
  'sierheesters': 'sierheesters',
  'vasteplanten': 'vaste planten',
  'fruitbomen': 'fruitbomen',
  'coniferen': 'coniferen',
  // Akkerbouw
  'aardappelen': 'aardappelen',
  'suikerbieten': 'suikerbieten',
  'mais': 'mais',
  'granen': 'granen',
  'uien': 'uien',
  'wortelen': 'wortelen',
  // Opkweek
  'groenteplanten': 'groenteplanten',
  'sierteeltstekken': 'sierteeltstekken',
  'boomkwekerijmateriaal': 'boomkwekerijmateriaal',
};

export const templates: Record<string, string> = {
  'groente': `Bedankt dat je PlantiPower gaat testen in je teelt van {{gewas_meervoud}}.<br/><br/>ALL12 is waar het voor ons mee begon. De basis van PlantiPower. Ontwikkeld om wortelactiviteit en opname te ondersteunen, zodat {{gewas_meervoud}} stabieler kunnen presteren onder wisselende omstandigheden.<br/><br/>Bij telers van {{gewas_meervoud}} die ALL12 gebruiken, zien we vaak:<br/><br/>– actievere en wittere wortels<br/>– constantere opname bij wisselende lichtdagen<br/>– meer balans tussen groei en productie<br/>– een rustiger gewas bij stressmomenten<br/><br/>Maar uiteindelijk telt niet wat wij zien, en ook niet wat andere telers ervaren.<br/>Het gaat om wat jij terugziet in jouw {{gewas_meervoud}}.<br/><br/>Wat ALL12 bij jou laat zien, is bepalend. Daarom begint alles bij jouw eigen waarneming in de teelt.<br/><br/>Wil je het effect goed beoordelen, zorg dan voor een zuivere vergelijking. Werk met twee gelijke situaties onder dezelfde omstandigheden, waarbij de enige variabele de toevoeging van PlantiPower ALL12 is.<br/><br/>Zo zie je precies wat PlantiPower ALL12 met jouw {{gewas_meervoud}} doet.<br/><br/>Over SHIELD ontvang je binnenkort een aparte mail met meer uitleg en toepassing.<br/><br/>Heb jij voor nu nog vragen, of is alles duidelijk voor je?`,

  'fruit': `Bedankt dat je PlantiPower gaat testen in je teelt van {{gewas_meervoud}}.<br/><br/>ALL12 ondersteunt wortelactiviteit en opname, zodat {{gewas_meervoud}} stabiel blijven presteren tijdens vruchtbelasting en wisselende weersomstandigheden.<br/><br/>Bij telers van {{gewas_meervoud}} zien we vaak:<br/><br/>– sterker wortelvolume<br/>– stabielere opname tijdens piekbelasting<br/>– minder dipmomenten bij weersomslag<br/>– constantere productie<br/><br/>Uiteindelijk telt wat jij terugziet in jouw {{gewas_meervoud}}.<br/><br/>Wat ALL12 bij jou laat zien, wordt zichtbaar in je eigen teelt. Dat is wat telt.<br/><br/>Test onder gelijke omstandigheden met ALL12 als enige variabele.<br/><br/>Zo zie je precies wat PlantiPower ALL12 met jouw {{gewas_meervoud}} doet.<br/><br/>Over SHIELD ontvang je binnenkort een aparte mail met meer uitleg en toepassing.<br/><br/>Heb jij voor nu nog vragen, of is alles duidelijk voor je?`,

  'akkerbouw': `Bedankt dat je PlantiPower gaat testen in je teelt van {{gewas_meervoud}}.<br/><br/>ALL12 is ontwikkeld om wortelontwikkeling en nutriëntenopname te versterken, wat direct invloed heeft op uniformiteit en groei.<br/><br/>Bij telers van {{gewas_meervoud}} zien we vaak:<br/><br/>– krachtigere wortelontwikkeling<br/>– betere benutting van aanwezige voeding<br/>– gelijkmatigere stand<br/>– meer weerbaarheid bij stress<br/><br/>Maar uiteindelijk telt wat jij terugziet in jouw {{gewas_meervoud}}.<br/><br/>Wat ALL12 bij jou doet, zie je terug in je gewas.<br/><br/>Voer de proef zuiver uit met ALL12 als enige variabele.<br/><br/>Zo zie je precies wat PlantiPower ALL12 met jouw {{gewas_meervoud}} doet.<br/><br/>Over SHIELD ontvang je binnenkort een aparte mail met meer uitleg en toepassing.<br/><br/>Heb jij voor nu nog vragen, of is alles duidelijk voor je?`,

  'sierteelt': `Bedankt dat je PlantiPower gaat testen in je teelt van {{gewas_meervoud}}.<br/><br/>In de sierteelt draait het om uniformiteit en uitstraling. ALL12 ondersteunt beworteling en opname, wat direct zichtbaar wordt in vitaliteit.<br/><br/>Bij telers van {{gewas_meervoud}} zien we vaak:<br/><br/>– sterkere beworteling<br/>– gelijkmatigere groei<br/>– vitaler gewas<br/>– minder terugval bij stress<br/><br/>Uiteindelijk telt wat jij terugziet in jouw {{gewas_meervoud}}.<br/><br/>Wat ALL12 bij jou laat zien, zie je in je eigen partij terug.<br/><br/>Werk met een zuivere vergelijking.<br/><br/>Zo zie je precies wat PlantiPower ALL12 met jouw {{gewas_meervoud}} doet.<br/><br/>Over SHIELD ontvang je binnenkort een aparte mail met meer uitleg en toepassing.<br/><br/>Heb jij voor nu nog vragen, of is alles duidelijk voor je?`,

  'boomteelt': `Bedankt dat je PlantiPower gaat testen in je teelt van {{gewas_meervoud}}.<br/><br/>In boomgewassen is wortelontwikkeling de basis voor verdere groei en kwaliteit. ALL12 ondersteunt opname en wortelactiviteit in elke fase.<br/><br/>Bij telers van {{gewas_meervoud}} zien we vaak:<br/><br/>– sterker wortelgestel<br/>– betere aanslag en hergroei<br/>– constantere ontwikkeling<br/>– meer stabiliteit<br/><br/>Maar uiteindelijk telt wat jij terugziet in jouw {{gewas_meervoud}}.<br/><br/>Wat ALL12 bij jou doet, zie je terug in de ontwikkeling van je gewas.<br/><br/>Test onder gelijke omstandigheden met ALL12 als enige variabele.<br/><br/>Zo zie je precies wat PlantiPower ALL12 met jouw {{gewas_meervoud}} doet.<br/><br/>Over SHIELD ontvang je binnenkort een aparte mail met meer uitleg en toepassing.<br/><br/>Heb jij voor nu nog vragen, of is alles duidelijk voor je?`,

  'opkweek': `Bedankt dat je PlantiPower gaat testen in de opkweek van {{gewas_meervoud}}.<br/><br/>In de opstartfase is wortelactiviteit bepalend voor de rest van de teelt. ALL12 ondersteunt opname en ontwikkeling vanaf het begin.<br/><br/>Bij telers van {{gewas_meervoud}} zien we vaak:<br/><br/>– snellere wortelontwikkeling<br/>– gelijkmatigere start<br/>– sterkere jonge planten<br/>– betere overgang naar de volgende fase<br/><br/>Maar uiteindelijk telt wat jij terugziet in jouw {{gewas_meervoud}}.<br/><br/>Wat ALL12 bij jou laat zien, zie je terug in de basis van je teelt.<br/><br/>Werk met een zuivere vergelijking waarbij ALL12 de enige variabele is.<br/><br/>Zo zie je precies wat PlantiPower ALL12 met jouw {{gewas_meervoud}} doet.<br/><br/>Over SHIELD ontvang je binnenkort een aparte mail met meer uitleg en toepassing.<br/><br/>Heb jij voor nu nog vragen, of is alles duidelijk voor je?`,

  'anders': `Bedankt dat je PlantiPower gaat testen in je teelt van {{gewas_meervoud}}.<br/><br/>ALL12 ondersteunt wortelontwikkeling en opname, ongeacht type teelt.<br/><br/>Bij telers van {{gewas_meervoud}} zien we vaak:<br/><br/>– actiever wortelstelsel<br/>– efficiëntere benutting van voeding<br/>– stabielere groei<br/>– meer weerbaarheid bij stress<br/><br/>Maar uiteindelijk telt wat jij terugziet in jouw {{gewas_meervoud}}.<br/><br/>Wat ALL12 bij jou doet, zie je terug in je eigen gewas.<br/><br/>Test onder gelijke omstandigheden met ALL12 als enige variabele.<br/><br/>Zo zie je precies wat PlantiPower ALL12 met jouw {{gewas_meervoud}} doet.<br/><br/>Over SHIELD ontvang je binnenkort een aparte mail met meer uitleg en toepassing.<br/><br/>Heb jij voor nu nog vragen, of is alles duidelijk voor je?`,

  'algemeen': `Bedankt dat je PlantiPower gaat testen in je teelt van {{gewas_meervoud}}.<br/><br/>ALL12 is ontwikkeld om wortelactiviteit en opname te ondersteunen, zodat {{gewas_meervoud}} stabieler kunnen presteren onder wisselende omstandigheden.<br/><br/>Wat we in de praktijk vaak zien:<br/><br/>– sterker wortelstelsel<br/>– betere benutting van voeding<br/>– meer balans in groei<br/>– stabieler gewas bij stress<br/><br/>Maar uiteindelijk telt wat jij terugziet in jouw {{gewas_meervoud}}.<br/><br/>Werk met een zuivere vergelijking waarbij ALL12 de enige variabele is.<br/><br/>Zo zie je precies wat PlantiPower ALL12 met jouw {{gewas_meervoud}} doet.<br/><br/>Over SHIELD ontvang je binnenkort een aparte mail met meer uitleg en toepassing.<br/><br/>Heb jij voor nu nog vragen, of is alles duidelijk voor je?`
};

export function getFirstName(fullName: string) {
  return fullName.split(' ')[0] || 'Teler';
}

export function getPluralCrop(crop: string, otherCrop: string, category: string) {
  if (category === 'anders' || crop === 'anders') {
    return otherCrop || 'je gewas';
  }
  return cropPlurals[crop] || crop || 'je gewas';
}

export function generateEmailHtml({ name, crop, otherCrop, cropCategory, unsubscribeUrl }: { name: string, crop: string, otherCrop: string, cropCategory: string, unsubscribeUrl?: string }) {
  const quote = "Wat PlantiPower bij jou laat zien, is bepalend.";
  const firstName = getFirstName(name);
  const pluralCrop = getPluralCrop(crop, otherCrop, cropCategory).toLowerCase();

  const headerImage = 'https://plantipower-new.vercel.app/images/email/header.jpg';

  let selectedTemplate = templates['algemeen'];
  if (templates[cropCategory]) {
    selectedTemplate = templates[cropCategory];
  } else if (cropCategory === 'anders') {
    selectedTemplate = templates['anders'];
  }

  const bodyContent = selectedTemplate
    .replace(/{{voornaam}}/g, firstName)
    .replace(/{{gewas_meervoud}}/g, pluralCrop);

  return `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          @media only screen and (max-width: 480px) {
            .mobile-container { width: 100% !important; min-width: 100% !important; }
            .hero-section { height: 420px !important; }
            .hero-title { font-size: 32px !important; line-height: 1.0 !important; }
            .body-area { padding: 35px 25px !important; }
            .profile-section { padding: 30px 25px !important; }
            .quote-text { font-size: 17px !important; }
            .signature-img { height: 80px !important; width: auto !important; max-width: 200px !important; }
            .product-col { 
              display: block !important; 
              width: 100% !important; 
              margin: 0 0 20px 0 !important;
            }
            .product-card {
              margin: 0 !important;
              padding: 25px !important;
              border-radius: 28px !important;
            }
            .product-image {
              width: 90px !important;
              height: auto !important;
            }
            .section-title { font-size: 19px !important; margin-bottom: 20px !important; }
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0; background-color: #000;">
        <div class="mobile-container" style="${emailStyles.container}">
          
          <div class="hero-section" style="position: relative; width: 100%; height: 480px; background-color: #011410; overflow: hidden;">
            <img src="${headerImage}" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(180deg, rgba(1,20,16,0) 0%, rgba(1,20,16,1) 95%); z-index: 1;"></div>
            
            <div style="position: absolute; top: 30px; right: 40px; text-align: right; z-index: 10;">
                <div style="font-size: 10px; font-weight: 900; color: #84cc16; text-transform: uppercase; letter-spacing: 2px;">Phase 01</div>
                <div style="font-size: 13px; font-weight: 300; color: #ffffff; opacity: 0.5;">Mail 1 van 3</div>
            </div>

            <div style="position: absolute; bottom: 40px; left: 40px; right: 40px; z-index: 10;">
              <div style="${emailStyles.tag}">Welkom en bedankt!</div>
              <div class="hero-title" style="${emailStyles.heroTitle}">WIJ GAAN JE <br /><span style="${emailStyles.heroAccent}">PROEFPAKKET</span> KLAARMAKEN.</div>
            </div>
          </div>

           <!-- PREMIUM FOUNDER SECTION - CIRCLE -->
          <div class="profile-section" style="${emailStyles.profileSection}">
            <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                    <td width="85" valign="top">
                        <div style="width: 85px; height: 85px;">
                            <img src="https://plantipower.com/images/email/John.jpeg" style="${emailStyles.profilePic}" />
                        </div>
                    </td>
                    <td valign="top" style="padding-left: 25px;">
                        <div style="font-size: 40px; color: #84cc16; opacity: 0.1; line-height: 1; margin-top: -10px; margin-bottom: -20px; font-family: Georgia, serif;">"</div>
                        <div style="${emailStyles.quoteText}" class="quote-text">${quote}</div>
                        <div style="${emailStyles.founderLabel}">John Geenen, mede-oprichter</div>
                    </td>
                </tr>
            </table>
          </div>

          <!-- MAIN BRIEF SECTION -->
          <div class="body-area" style="${emailStyles.bodyArea}; padding-bottom: 20px;">
            <div style="${emailStyles.greeting}">Beste ${firstName},</div>
            <div style="${emailStyles.bodyText}">
              ${bodyContent}
            </div>
            
            <!-- SIGNATURE BLOCK -->
            <div style="margin-top: 30px; margin-bottom: 40px;">
              <div style="font-size: 16px; font-weight: 400; line-height: 1.8; color: rgba(255,255,255,0.7); margin-bottom: 10px;">Groet,</div>
              <img src="https://plantipower.com/images/email/handtekening_john_scribble_white.png" class="signature-img" style="height: 85px; width: auto; max-width: 220px; object-fit: contain; margin-bottom: 5px;" />
              <div style="font-size: 14px; font-weight: 600; color: #ffffff; text-transform: uppercase; letter-spacing: 1px;">John Geenen</div>
            </div>
          </div>

          <!-- PROEFPAKKET HIGHLIGHT -->
          <div class="body-area" style="${emailStyles.bodyArea}; padding-top: 0;">
            <span class="section-title" style="${emailStyles.sectionTitle}; margin-bottom: 25px !important;">Je proefpakket <span style="color:#84cc16;">bestaat uit:</span></span>
            <div style="height: 40px;">&nbsp;</div>
            <div style="text-align: center; font-size: 0;">
              <div class="product-col" style="display: inline-block; width: 250px; vertical-align: top; margin-bottom: 20px; text-align: left;">
                <div class="product-card" style="${emailStyles.productCard}; border: 1px solid rgba(132, 204, 22, 0.2); margin-right: 10px;">
                    <div style="color:#ffffff; font-size:10px; font-weight:900; margin-bottom:0px; text-transform:uppercase; line-height: 1;">PlantiPower</div>
                    <div style="font-size:28px; font-weight:900; margin-bottom:20px; color: #84cc16; line-height: 1;">ALL12</div>
                    <img src="https://plantipower.com/images/products/plantipower-all12-transparant.png" class="product-image" style="width: 100px; height: auto; margin-bottom: 20px;" />
                    <div style="color:rgba(255,255,255,0.5); font-size:13px; line-height:1.5;">
                        Optimaliseert nutriëntenstroom en verbetert opnamecapaciteit.
                    </div>
                </div>
              </div>
              <div class="product-col" style="display: inline-block; width: 250px; vertical-align: top; margin-bottom: 20px; text-align: left;">
                <div class="product-card" style="${emailStyles.productCard}; border: 1px solid rgba(56, 189, 248, 0.2); margin-left: 10px;">
                    <div style="color:#ffffff; font-size:10px; font-weight:900; margin-bottom:0px; text-transform:uppercase; line-height: 1;">PlantiPower</div>
                    <div style="font-size:28px; font-weight:900; margin-bottom:20px; color: #38bdf8; line-height: 1;">SHIELD</div>
                    <img src="https://plantipower.com/images/products/plantipower-shield-transparant.png" class="product-image" style="width: 100px; height: auto; margin-bottom: 20px;" />
                    <div style="color:rgba(255,255,255,0.5); font-size:13px; line-height:1.5;">
                        Versterkt natuurlijke weerbaarheid en celstructuur.
                    </div>
                </div>
              </div>
            </div>
          </div>

          <!-- REVIEWS -->
          <div class="body-area" style="${emailStyles.bodyArea}; padding-top: 0;">
            <span class="section-title" style="${emailStyles.sectionTitle}">Ervaring van <span style="color:#84cc16;">kwekers:</span></span>
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
            <div style="color: rgba(255,255,255,0.2); font-size: 9px; font-weight: 800; text-transform: uppercase; margin-bottom: 20px;">Venlo, Nederland  |  PLANTIPOWER.COM</div>
            <div style="color: rgba(255,255,255,0.3); font-size: 11px; line-height: 1.6;">
              Liever geen updates van ons ontvangen?<br />
              <a href="${unsubscribeUrl || '#'}" style="color: #84cc16; text-decoration: underline;">Klik hier om je af te melden.</a>
            </div>
          </div>

        </div>
      </body>
    </html>
  `;
}
