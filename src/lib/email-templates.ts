
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
  'groente': `Bedankt dat je FungiPower gaat testen in je teelt van {{gewas_meervoud}}.<br/><br/>ALL12 is waar het voor ons mee begon. De basis van FungiPower. Ontwikkeld om wortelactiviteit en opname te ondersteunen, zodat {{gewas_meervoud}} stabieler kunnen presteren onder wisselende omstandigheden.<br/><br/>Bij telers van {{gewas_meervoud}} die ALL12 gebruiken, zien we vaak:<br/><br/>– actievere en wittere wortels<br/>– constantere opname bij wisselende lichtdagen<br/>– meer balans tussen groei en productie<br/>– een rustiger gewas bij stressmomenten<br/><br/>Maar uiteindelijk telt niet wat wij zien, en ook niet wat andere telers ervaren.<br/>Het gaat om wat jij terugziet in jouw {{gewas_meervoud}}.<br/><br/>Wat ALL12 bij jou laat zien, is bepalend. Daarom begint alles bij jouw eigen waarneming in de teelt.<br/><br/>Wil je het effect goed beoordelen, zorg dan voor een zuivere vergelijking. Werk met twee gelijke situaties onder dezelfde omstandigheden, waarbij de enige variabele de toevoeging van FungiPower ALL12 is.<br/><br/>Zo zie je precies wat FungiPower ALL12 met jouw {{gewas_meervoud}} doet.<br/><br/>Over SHIELD ontvang je binnenkort een aparte mail met meer uitleg en toepassing.<br/><br/>Heb jij voor nu nog vragen, of is alles duidelijk voor je?`,

  'fruit': `Bedankt dat je FungiPower gaat testen in je teelt van {{gewas_meervoud}}.<br/><br/>ALL12 ondersteunt wortelactiviteit en opname, zodat {{gewas_meervoud}} stabiel blijven presteren tijdens vruchtbelasting en wisselende weersomstandigheden.<br/><br/>Bij telers van {{gewas_meervoud}} zien we vaak:<br/><br/>– sterker wortelvolume<br/>– stabielere opname tijdens piekbelasting<br/>– minder dipmomenten bij weersomslag<br/>– constantere productie<br/><br/>Uiteindelijk telt wat jij terugziet in jouw {{gewas_meervoud}}.<br/><br/>Wat ALL12 bij jou laat zien, wordt zichtbaar in je eigen teelt. Dat is wat telt.<br/><br/>Test onder gelijke omstandigheden met ALL12 als enige variabele.<br/><br/>Zo zie je precies wat FungiPower ALL12 met jouw {{gewas_meervoud}} doet.<br/><br/>Over SHIELD ontvang je binnenkort een aparte mail met meer uitleg en toepassing.<br/><br/>Heb jij voor nu nog vragen, of is alles duidelijk voor je?`,

  'akkerbouw': `Bedankt dat je FungiPower gaat testen in je teelt van {{gewas_meervoud}}.<br/><br/>ALL12 is ontwikkeld om wortelontwikkeling en nutriëntenopname te versterken, wat direct invloed heeft op uniformiteit en groei.<br/><br/>Bij telers van {{gewas_meervoud}} zien we vaak:<br/><br/>– krachtigere wortelontwikkeling<br/>– betere benutting van aanwezige voeding<br/>– gelijkmatigere stand<br/>– meer weerbaarheid bij stress<br/><br/>Maar uiteindelijk telt wat jij terugziet in jouw {{gewas_meervoud}}.<br/><br/>Wat ALL12 bij jou doet, zie je terug in je gewas.<br/><br/>Voer de proef zuiver uit met ALL12 als enige variabele.<br/><br/>Zo zie je precies wat FungiPower ALL12 met jouw {{gewas_meervoud}} doet.<br/><br/>Over SHIELD ontvang je binnenkort een aparte mail met meer uitleg en toepassing.<br/><br/>Heb jij voor nu nog vragen, of is alles duidelijk voor je?`,

  'sierteelt': `Bedankt dat je FungiPower gaat testen in je teelt van {{gewas_meervoud}}.<br/><br/>In de sierteelt draait het om uniformiteit en uitstraling. ALL12 ondersteunt beworteling en opname, wat direct zichtbaar wordt in vitaliteit.<br/><br/>Bij telers van {{gewas_meervoud}} zien we vaak:<br/><br/>– sterkere beworteling<br/>– gelijkmatigere groei<br/>– vitaler gewas<br/>– minder terugval bij stress<br/><br/>Uiteindelijk telt wat jij terugziet in jouw {{gewas_meervoud}}.<br/><br/>Wat ALL12 bij jou laat zien, zie je in je eigen partij terug.<br/><br/>Werk met een zuivere vergelijking.<br/><br/>Zo zie je precies wat FungiPower ALL12 met jouw {{gewas_meervoud}} doet.<br/><br/>Over SHIELD ontvang je binnenkort een aparte mail met meer uitleg en toepassing.<br/><br/>Heb jij voor nu nog vragen, of is alles duidelijk voor je?`,

  'boomteelt': `Bedankt dat je FungiPower gaat testen in je teelt van {{gewas_meervoud}}.<br/><br/>In boomgewassen is wortelontwikkeling de basis voor verdere groei en kwaliteit. ALL12 ondersteunt opname en wortelactiviteit in elke fase.<br/><br/>Bij telers van {{gewas_meervoud}} zien we vaak:<br/><br/>– sterker wortelgestel<br/>– betere aanslag en hergroei<br/>– constantere ontwikkeling<br/>– meer stabiliteit<br/><br/>Maar uiteindelijk telt wat jij terugziet in jouw {{gewas_meervoud}}.<br/><br/>Wat ALL12 bij jou doet, zie je terug in de ontwikkeling van je gewas.<br/><br/>Test onder gelijke omstandigheden met ALL12 als enige variabele.<br/><br/>Zo zie je precies wat FungiPower ALL12 met jouw {{gewas_meervoud}} doet.<br/><br/>Over SHIELD ontvang je binnenkort een aparte mail met meer uitleg en toepassing.<br/><br/>Heb jij voor nu nog vragen, of is alles duidelijk voor je?`,

  'opkweek': `Bedankt dat je FungiPower gaat testen in de opkweek van {{gewas_meervoud}}.<br/><br/>In de opstartfase is wortelactiviteit bepalend voor de rest van de teelt. ALL12 ondersteunt opname en ontwikkeling vanaf het begin.<br/><br/>Bij telers van {{gewas_meervoud}} zien we vaak:<br/><br/>– snellere wortelontwikkeling<br/>– gelijkmatigere start<br/>– sterkere jonge planten<br/>– betere overgang naar de volgende fase<br/><br/>Maar uiteindelijk telt wat jij terugziet in jouw {{gewas_meervoud}}.<br/><br/>Wat ALL12 bij jou laat zien, zie je terug in de basis van je teelt.<br/><br/>Werk met een zuivere vergelijking waarbij ALL12 de enige variabele is.<br/><br/>Zo zie je precies wat FungiPower ALL12 met jouw {{gewas_meervoud}} doet.<br/><br/>Over SHIELD ontvang je binnenkort een aparte mail met meer uitleg en toepassing.<br/><br/>Heb jij voor nu nog vragen, of is alles duidelijk voor je?`,

  'anders': `Bedankt dat je FungiPower gaat testen in je teelt van {{gewas_meervoud}}.<br/><br/>ALL12 ondersteunt wortelontwikkeling en opname, ongeacht type teelt.<br/><br/>Bij telers van {{gewas_meervoud}} zien we vaak:<br/><br/>– actiever wortelstelsel<br/>– efficiëntere benutting van voeding<br/>– stabielere groei<br/>– meer weerbaarheid bij stress<br/><br/>Maar uiteindelijk telt wat jij terugziet in jouw {{gewas_meervoud}}.<br/><br/>Wat ALL12 bij jou doet, zie je terug in je eigen gewas.<br/><br/>Test onder gelijke omstandigheden met ALL12 als enige variabele.<br/><br/>Zo zie je precies wat FungiPower ALL12 met jouw {{gewas_meervoud}} doet.<br/><br/>Over SHIELD ontvang je binnenkort een aparte mail met meer uitleg en toepassing.<br/><br/>Heb jij voor nu nog vragen, of is alles duidelijk voor je?`,

  'algemeen': `Bedankt dat je FungiPower gaat testen in je teelt van {{gewas_meervoud}}.<br/><br/>ALL12 is ontwikkeld om wortelactiviteit en opname te ondersteunen, zodat {{gewas_meervoud}} stabieler kunnen presteren onder wisselende omstandigheden.<br/><br/>Wat we in de praktijk vaak zien:<br/><br/>– sterker wortelstelsel<br/>– betere benutting van voeding<br/>– meer balans in groei<br/>– stabieler gewas bij stress<br/><br/>Maar uiteindelijk telt wat jij terugziet in jouw {{gewas_meervoud}}.<br/><br/>Werk met een zuivere vergelijking waarbij ALL12 de enige variabele is.<br/><br/>Zo zie je precies wat FungiPower ALL12 met jouw {{gewas_meervoud}} doet.<br/><br/>Over SHIELD ontvang je binnenkort een aparte mail met meer uitleg en toepassing.<br/><br/>Heb jij voor nu nog vragen, of is alles duidelijk voor je?`
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

export function generateEmailHtml({ name, unsubscribeUrl }: { name: string, crop?: string, otherCrop?: string, cropCategory?: string, unsubscribeUrl?: string }) {
  const firstName = getFirstName(name);

  return `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          @media only screen and (max-width: 480px) {
            .mobile-container { width: 100% !important; }
            .body-area { padding: 30px 20px !important; }
            .product-col { display: block !important; width: 100% !important; margin: 0 0 16px 0 !important; }
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0; background-color: #000;">
        <div class="mobile-container" style="${emailStyles.container}">
          
          <!-- HEADER -->
          <div style="background-color: #011410; padding: 40px 40px 30px 40px;">
            <div style="font-size: 11px; font-weight: 900; color: #f97316; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 16px;">Proefpakket bevestiging</div>
            <div style="font-size: 32px; font-weight: 900; color: #ffffff; line-height: 1.1; text-transform: uppercase; letter-spacing: -1px;">Je bestelling is<br/><span style="color: #f97316;">ontvangen.</span></div>
          </div>

          <!-- BODY -->
          <div class="body-area" style="${emailStyles.bodyArea}">
            <div style="${emailStyles.greeting}">Beste ${firstName},</div>
            <div style="${emailStyles.bodyText}">
              Bedankt voor je bestelling van het FungiPower proefpakket. We gaan het voor je klaarmaken. De factuur ontvang je per e-mail.
            </div>

            <!-- PRODUCTEN -->
            <div style="font-size: 13px; font-weight: 900; color: #ffffff; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px;">Je proefpakket bestaat uit:</div>
            <div style="font-size: 0;">
              <div class="product-col" style="display: inline-block; width: 48%; vertical-align: top; margin-right: 2%; margin-bottom: 16px;">
                <div style="${emailStyles.productCard}; border: 1px solid rgba(249,115,22,0.3);">
                  <div style="font-size: 10px; font-weight: 900; color: #ffffff; text-transform: uppercase; letter-spacing: 1px;">FungiPower</div>
                  <div style="font-size: 22px; font-weight: 900; color: #f97316; line-height: 1.1; margin-bottom: 12px;">START</div>
                  <div style="color: rgba(255,255,255,0.5); font-size: 13px; line-height: 1.5;">Ondersteunt het mycelium bij de kolonisatie en legt de basis voor een sterke, gezonde vlucht.</div>
                </div>
              </div>
              <div class="product-col" style="display: inline-block; width: 48%; vertical-align: top; margin-bottom: 16px;">
                <div style="${emailStyles.productCard}; border: 1px solid rgba(249,115,22,0.3);">
                  <div style="font-size: 10px; font-weight: 900; color: #ffffff; text-transform: uppercase; letter-spacing: 1px;">FungiPower</div>
                  <div style="font-size: 22px; font-weight: 900; color: #f97316; line-height: 1.1; margin-bottom: 12px;">BOOST</div>
                  <div style="color: rgba(255,255,255,0.5); font-size: 13px; line-height: 1.5;">Verbetert de nutriëntenopname van het mycelium in de vluchtfase voor gelijkmatigere vluchten en hogere opbrengst.</div>
                </div>
              </div>
            </div>

            <!-- SIGNATURE -->
            <div style="margin-top: 32px;">
              <div style="font-size: 15px; color: rgba(255,255,255,0.7); margin-bottom: 6px;">Met vriendelijke groet,</div>
              <div style="font-size: 15px; font-weight: 700; color: #ffffff;">Eric</div>
              <div style="font-size: 12px; color: rgba(255,255,255,0.4); margin-top: 2px;">FungiPower</div>
            </div>
          </div>

          <!-- FOOTER -->
          <div style="background: #000; padding: 30px 40px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05);">
            <div style="color: rgba(255,255,255,0.2); font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px;">Venlo, Nederland · fungipower.bio</div>
          </div>

        </div>
      </body>
    </html>
  `;
}
