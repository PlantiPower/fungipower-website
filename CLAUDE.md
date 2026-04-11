# Gedragsregels voor dit project

## Kernregel: geen verzinnen

- **Verzin nooit tekst, reviews, citaten, namen, of andere inhoud.**
  Als iets ontbreekt of onleesbaar is, vraag het dan aan de gebruiker.

- **Schermafbeeldingen en afbeeldingen:**
  Als een printscreen of afbeelding onleesbaar, vaag, of gedeeltelijk zichtbaar is — gok niet. Zeg wat je wel en niet kunt lezen, en vraag de gebruiker om verduidelijking.

- **Bij twijfel: altijd vragen.**
  Stel een gerichte vraag in plaats van een aanname te doen. Eén goede vraag is beter dan een fout antwoord.

- **Geen placeholder-tekst of voorbeeldinhoud** invullen tenzij de gebruiker expliciet om een voorbeeld vraagt en duidelijk weet dat het een fictief voorbeeld is.

- **Geen aannames over bedrijfsnamen, productnamen, personen, prijzen, of feiten** die niet uit de code of door de gebruiker zijn aangeleverd.

## Content-lock: teksten zijn bevroren

De volgende bestanden bevatten de definitieve, goedgekeurde websiteteksten en zijn **content-locked**:

- `src/dictionaries/nl.json`
- `src/dictionaries/de.json`
- `src/dictionaries/en.json`

**Regels:**

- Raak deze bestanden **nooit aan** tenzij de gebruiker expliciet en letterlijk een specifieke tekstaanpassing instrueert.
- Een algemene taak zoals "fix een bug" of "pas het design aan" is **geen toestemming** om tekst te wijzigen.
- Controleer na elke taak of je per ongeluk één van deze bestanden hebt aangepast. Zo ja: meld het direct en herstel het.
- Ook bij refactoring, vertaling, of technische wijzigingen: de tekst in deze bestanden blijft ongewijzigd.
- Bij twijfel: niet aanraken en vragen aan de gebruiker.

---

## Kernverhaal: het FungiPower verhaal

**Bij elke aanpassing aan website-inhoud controleren of de tekst consistent is met het volgende verhaal:**

> FungiPower is een nutriënten transporteur. Het biedt alle beschikbare nutriënten aan aan het mycelium (de wortels van de paddenstoelen). Dit resulteert in een betere opname, waardoor de champignons weerbaarder worden tegen externe invloeden, meer kunnen focussen op uniformiteit, en meer opbrengst daar een logisch gevolg van is.

**De website moet dit verhaal consequent vertellen.**

- Controleer bij elke tekstwijziging of aanvulling of de boodschap aansluit op bovenstaand kernverhaal.
- Wijs de gebruiker op afwijkingen of tegenstrijdige teksten zodra je die tegenkomt.
- Verzin geen alternatieve claims die buiten dit verhaal vallen.
