# FungiPower Website – Voortgang Feedback v3
Datum: 11 april 2026 | Werksessie Ramzi + Claude

---

## Algemeen (alle pagina's)

| # | Punt (origineel) | Status | Wat gedaan |
|---|---|---|---|
| 1 | Titel tag: "Efficiënte plantengroei & hogere opbrengst" → FungiPower \| Nutriënten Transporteur voor de champignonteelt | ✅ | NL/DE/EN title + description aangepast in `src/app/[lang]/page.tsx`. "plantengroei" → "champignonteelt", "biostimulant" → "nutriënten transporteur" in meta descriptions. |
| 2 | Middenstreepjes om zinnen op te delen (meerdere pagina's) → vervangen door punten in lopende tekst | ✅ | nl.json r121: `Jan Klerken — een diep begrip` → punt. Boost page r70: `uniformiteit — dat betekent` → punt. Quote-attributies (— Jan Klerken) intact gelaten. |
| 3 | Terminologie wisselt: biostimulant, biologische versterking, mycelium-activatie → overal vervangen door "nutriënten transporteur" | ✅ | nl.json: "BIOLOGISCHE VERSTERKING" → "NUTRIËNTEN TRANSPORTEUR" (hero USP). 5x "biostimulant" vervangen door "nutriënten transporteur" of "productontwikkeling". FAQ-antwoorden (volledige herschrijving) bewaard voor FAQ-sectie. |

---

## 1. Homepage (/nl)

### Hero sectie
| # | Punt (origineel) | Status | Wat gedaan |
|---|---|---|---|
| 4 | Titel-animatie: "Snellere oogst, Meer opbrengst, Uniformere groei" → Hogere opbrengst. (oranje) Uniformere groei. Langer productief substraat. | ✅ | nl.json: titleLine1/2/3 herschreven. Oranje gradient staat al op titleLine2. |
| 5 | Foto jerrycan toont PlantiPower → vervangen door FungiPower Start & Boost jerrycans | ❌ | Afbeelding ontbreekt. Aanleveren door gebruiker. |
| 6 | Hero beschrijvingstekst (sporenelementen/snellere oogst) → nieuwe tekst nutriënten transporteur | ✅ | nl.json description Hero: volledig herschreven conform feedbackdoc. |
| 7 | Labels: "BIOLOGISCHE VERSTERKING \| MEER OPBRENGST \| GETEST IN COMMERCIËLE TEELT" → "NUTRIËNTEN TRANSPORTEUR \| MEER OPBRENGST \| GEVALIDEERD IN 20 PRAKTIJKPROEVEN" | ✅ | uspsPart1 al gedaan (Algemeen). uspsPart3: "GETEST" → "GEVALIDEERD IN 20 PRAKTIJKPROEVEN". |

### De Filosofie sectie
| # | Punt (origineel) | Status | Wat gedaan |
|---|---|---|---|
| 8 | "biologische ondersteuning voor stabiele myceliumontwikkeling" → nieuwe tekst | ✅ | nl.json GrowerFocus description: "biologische ondersteuning" → "maakt aanwezige nutriënten beter beschikbaar". |
| 9 | "Direct zichtbaar resultaat. Een vitaler mycelium betekent uniformere vruchtlichamen en een snellere flush." → nieuwe tekst | ✅ | nl.json usps[1].desc: "snellere flush" → "hogere opbrengst per flush". |
| 10 | "Jouw methode van telen blijft leidend..." → behouden | ✅ | Geen aanpassing nodig |
| 11 | "Versterkt de biologische cyclus op de achtergrond" → "optimaliseert de nutriëntenbeschikbaarheid op de achtergrond" | ✅ | nl.json usps[2].desc aangepast. |

### De Uitdaging sectie
| # | Punt (origineel) | Status | Wat gedaan |
|---|---|---|---|
| 12 | Quote Jan Klerken → behouden | ✅ | Geen aanpassing nodig |
| 13 | "Door de biologische cyclus van het mycelium te versterken" → "Door de nutriëntenopname van het mycelium te verbeteren" | ✅ | nl.json ProblemSection closing aangepast. |

### Het Resultaat sectie
| # | Punt (origineel) | Status | Wat gedaan |
|---|---|---|---|
| 14 | "maximaliseert de opnamecapaciteit" → "verbetert de nutriëntenopname... gemiddeld 14% meer opbrengst" | ✅ | nl.json CropResults description aangepast. |
| 15 | "geoptimaliseerde myceliumactiviteit" → "verbeterde nutriëntenopname" | ✅ | nl.json crops[0].stats_0_desc aangepast. |
| 16 | "Kortere cyclustijd. Snellere primordiumvorming..." → "Langer productief substraat. 100% positief resultaat op de 3e vlucht." | ✅ | nl.json crops[0].stats_1_title + desc volledig herschreven. |
| 17 | "Hogere opbrengst per m²..." → toevoegen 14% + 20 praktijkproeven | ✅ | nl.json crops[1].stats_0_desc: 14% + 20 proeven toegevoegd. |
| 18 | "Minder uitval. Uniformere kolonisatie..." → "Minder variatie. Doordat het mycelium alle nutriënten beter opneemt..." | ✅ | nl.json crops[1].stats_1_title + desc aangepast. |

### Industriële Uitmuntendheid sectie
| # | Punt (origineel) | Status | Wat gedaan |
|---|---|---|---|
| 19 | "Klaar voor Export" / "Wereldwijde Logistiek" → "Gereed voor opschaling" / "Beschikbaar voor de Europese markt" | ✅ | nl.json GlobalStandard exportReady + logistics aangepast. |

---

## 2. Over Ons (/nl/over-ons)

| # | Punt (origineel) | Status | Wat gedaan |
|---|---|---|---|
| 20 | Quote John Geenen (2x) → Jan Klerken (1x bovenaan bij foto) | ⏳ | |
| 21 | Link PlantiPower.com ontbreekt → toevoegen naast OurCelia link | ⏳ | |
| 22 | "biostimulant ontwikkeld" → "nutriënten transporteur ontwikkeld" | ⏳ | |
| 23 | "Onderbouwd door wetenschap" → "Onderbouwd door uitgebreide praktijkproeven" | ⏳ | |
| 24 | "Data & Biologie: wetenschappelijke validatie" → "Data & Praktijk: validatie door 20 praktijkproeven..." | ⏳ | |
| 25 | Onderaan missie-quote John Geenen (dubbel) → verwijderen of vervangen | ⏳ | |

---

## 3. FungiPower Start (/nl/fungipower-start)

| # | Punt (origineel) | Status | Wat gedaan |
|---|---|---|---|
| 26 | "stimuleert de vroege myceliumontwikkeling" → nieuwe tekst nutriëntenbeschikbaarheid | ⏳ | |
| 27 | "Mycelium-activatie. FungiPower Start levert essentiële micronutriënten..." → "Nutriëntenbeschikbaarheid. FungiPower Start maakt aanwezige nutriënten beschikbaar..." | ⏳ | |
| 28 | "Substraat-conditioning. Door biologische processen te activeren..." → "Substraat-optimalisatie..." | ⏳ | |
| 29 | "Kortere kolonisatietijd" → verwijderen, vervangen door "Sterkere basis voor hogere opbrengst" | ⏳ | |
| 30 | "De biostimulanten ondersteunen het mycelium..." → "De nutriënten transporteur ondersteunt het mycelium..." | ⏳ | |
| 31 | Stap 03: herhaling na 7 dagen → eenmalig dag 1, 5 ml/L/m² | ⏳ | |
| 32 | "Expertentips" → "Tips van Experts" + correcte inhoud | ⏳ | |
| 33 | SDS link werkt niet → werkend PDF uploaden en linken | ⏳ | |

---

## 4. FungiPower Boost (/nl/fungipower-boost)

| # | Punt (origineel) | Status | Wat gedaan |
|---|---|---|---|
| 34 | "activeert het mycelium in de beslissende vluchtfase" → nieuwe tekst | ⏳ | |
| 35 | "Gelijkmatige vluchten. stimuleert synchrone vruchtvorming..." → nieuwe tekst zonder middenstreepje | ⏳ | |
| 36 | "Hogere opbrengsten. Door het mycelium gericht te voorzien van biobeschikbare micronutriënten..." → nieuwe tekst + 14% + 20 proeven | ⏳ | |
| 37 | "Betere kwaliteit. stevigheid, kleur en gewicht..." → nieuwe tekst zonder stevigheid/kleur | ⏳ | |
| 38 | Voordelen: "Stevigheid en kleur" → verwijderen, "100% biologisch" → "100% natuurlijk en residu-vrij" | ⏳ | |
| 39 | Stap 02: "Na de 1e & 2e vlucht" → "direct na het oogsten van elke vlucht" | ⏳ | |
| 40 | Stap 03: "voor elke vlucht" → "na elke vlucht" | ⏳ | |
| 41 | "Expertentips" → "Tips van Experts" + correcte inhoud | ⏳ | |
| 42 | Geen KPI's op pagina → resultaten-sectie toevoegen | ⏳ | |
| 43 | SDS link werkt niet → werkend PDF uploaden en linken | ⏳ | |

---

## 5. FAQ (/nl/faq)

| # | Punt (origineel) | Status | Wat gedaan |
|---|---|---|---|
| 44 | "Wat is FungiPower? biostimulant / sporenelementen / snellere vluchten" → volledige nieuwe tekst | ⏳ | |
| 45 | "Hoe werkt FungiPower? versterkt de activiteit..." → nieuwe tekst | ⏳ | |
| 46 | "Is FungiPower een meststof? biostimulant en transportmiddel" → "nutriënten transporteur" | ⏳ | |
| 47 | "Verpakkingen: Start 1L, 10L, 1000L. Boost 1L, 5L" → alleen 10L en 1000L | ⏳ | |
| 48 | "Via bewateringssysteem" → correcte dosering per product | ⏳ | |
| 49 | "Voordelen: snellere vluchten" → verwijderen, toevoegen 14% / 3e vlucht score | ⏳ | |
| 50 | "Wat maakt FungiPower uniek? biologische cyclus" → "nutriënten transporteur" + proeven | ⏳ | |

---

## 6. Sample Aanvragen (popup)

| # | Punt (origineel) | Status | Wat gedaan |
|---|---|---|---|
| 51 | Prijs: €29,95 → €49,95 (excl. BTW) incl. verzendkosten + verpakkingsformaat invullen | ⏳ | |
| 52 | Stripe betaalkoppeling nog niet actief → activeren op FungiPower account | ⏳ | |

---

## 7. Contact (/nl/contact)

| # | Punt (origineel) | Status | Wat gedaan |
|---|---|---|---|
| 53 | "Wil je partner worden?" → "Heb je vragen over onze producten of wil je een proef op jouw bedrijf?" | ⏳ | |
| 54 | Contactgegevens → behouden | ✅ | Geen aanpassing nodig |

---

## 8. Duitse versie (/de)

| # | Punt (origineel) | Status | Wat gedaan |
|---|---|---|---|
| 55 | Heading overlapt afbeelding → layout-bug fixen | ⏳ | |
| 56 | Alle NL-correcties doorvoeren in DE-versie | ⏳ | Na afronding NL |

---

*Legenda: ✅ Gedaan | ❌ Niet gedaan / bewuste keuze | ⏳ Nog te doen*
