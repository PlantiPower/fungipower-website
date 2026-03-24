'use client'

import React, { useState } from 'react';
import { X, Check, ChevronDown } from 'lucide-react';

interface SampleModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: string;
}

const SampleModal: React.FC<SampleModalProps> = ({ isOpen, onClose, lang }) => {
  const isNL = lang === 'nl';
  const isDE = lang === 'de';

  const [formData, setFormData] = useState({
    products: ['start', 'boost'],
    company: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    cropCategory: '',
    crop: '',
    otherCrop: '',
    comments: '',
    guidance: false,
    website_url: '' // Honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('success') === 'true') {
        setIsSuccess(true);
        // Clean up URL
        const newUrl = window.location.pathname;
        window.history.replaceState({}, '', newUrl);
      }
    }
  }, []);

  const categories = isDE ? [
    { id: 'groente', label: 'Gemüse' },
    { id: 'fruit', label: 'Obst' },
    { id: 'sierteelt', label: 'Zierpflanzen' },
    { id: 'boomteelt', label: 'Baumschule' },
    { id: 'akkerbouw', label: 'Ackerbau' },
    { id: 'opkweek', label: 'Aufzucht / Jungpflanzen' },
    { id: 'anders', label: 'Andere' }
  ] : isNL ? [
    { id: 'groente', label: 'Groenten' },
    { id: 'fruit', label: 'Fruit' },
    { id: 'sierteelt', label: 'Sierteelt' },
    { id: 'boomteelt', label: 'Boomteelt' },
    { id: 'akkerbouw', label: 'Akkerbouw' },
    { id: 'opkweek', label: 'Opkweek / Jonge planten' },
    { id: 'anders', label: 'Anders' }
  ] : [
    { id: 'groente', label: 'Vegetables' },
    { id: 'fruit', label: 'Fruit' },
    { id: 'sierteelt', label: 'Ornamentals' },
    { id: 'boomteelt', label: 'Arboriculture' },
    { id: 'akkerbouw', label: 'Arable Farming' },
    { id: 'opkweek', label: 'Young Plants / Propagation' },
    { id: 'anders', label: 'Other' }
  ];

  const cropsByCategory: Record<string, { v: string, l: string }[]> = {
    groente: isDE
      ? [{ v: 'tomaat', l: 'Tomate' }, { v: 'komkommer', l: 'Gurke' }, { v: 'paprika', l: 'Paprika' }, { v: 'aubergine', l: 'Aubergine' }, { v: 'sla', l: 'Salat' }, { v: 'spinazie', l: 'Spinat' }, { v: 'anders', l: 'Andere...' }]
      : isNL
        ? [{ v: 'tomaat', l: 'Tomaat' }, { v: 'komkommer', l: 'Komkommer' }, { v: 'paprika', l: 'Paprika' }, { v: 'aubergine', l: 'Aubergine' }, { v: 'sla', l: 'Sla' }, { v: 'spinazie', l: 'Spinazie' }, { v: 'anders', l: 'Anders...' }]
        : [{ v: 'tomato', l: 'Tomato' }, { v: 'cucumber', l: 'Cucumber' }, { v: 'pepper', l: 'Pepper' }, { v: 'eggplant', l: 'Eggplant' }, { v: 'lettuce', l: 'Lettuce' }, { v: 'spinach', l: 'Spinach' }, { v: 'anders', l: 'Other...' }],
    fruit: isDE
      ? [{ v: 'aardbei', l: 'Erdbeere' }, { v: 'blauwebes', l: 'Blaubeere' }, { v: 'framboos', l: 'Himbeere' }, { v: 'bramen', l: 'Brombeere' }, { v: 'appels', l: 'Äpfel' }, { v: 'peren', l: 'Birnen' }, { v: 'anders', l: 'Andere...' }]
      : isNL
        ? [{ v: 'aardbei', l: 'Aardbei' }, { v: 'blauwebes', l: 'Blauwe bes' }, { v: 'framboos', l: 'Framboos' }, { v: 'bramen', l: 'Bramen' }, { v: 'appels', l: 'Appels' }, { v: 'peren', l: 'Peren' }, { v: 'anders', l: 'Anders...' }]
        : [{ v: 'strawberry', l: 'Strawberry' }, { v: 'blueberry', l: 'Blueberry' }, { v: 'raspberry', l: 'Raspberry' }, { v: 'blackberry', l: 'Blackberry' }, { v: 'apples', l: 'Apples' }, { v: 'pears', l: 'Pears' }, { v: 'anders', l: 'Other...' }],
    sierteelt: isDE
      ? [{ v: 'potplanten', l: 'Topfpflanzen' }, { v: 'perkplanten', l: 'Beetpflanzen' }, { v: 'snijbloemen', l: 'Schnittblumen' }, { v: 'rozen', l: 'Rosen' }, { v: 'orchideeen', l: 'Orchideen' }, { v: 'chrysanten', l: 'Chrysanthemen' }, { v: 'anders', l: 'Andere...' }]
      : isNL
        ? [{ v: 'potplanten', l: 'Potplanten' }, { v: 'perkplanten', l: 'Perkplanten' }, { v: 'snijbloemen', l: 'Snijbloemen' }, { v: 'rozen', l: 'Rozen' }, { v: 'orchideeen', l: 'Orchideeën' }, { v: 'chrysanten', l: 'Chrysanten' }, { v: 'anders', l: 'Anders...' }]
        : [{ v: 'potted_plants', l: 'Potted Plants' }, { v: 'bedding_plants', l: 'Bedding Plants' }, { v: 'cut_flowers', l: 'Cut Flowers' }, { v: 'roses', l: 'Roses' }, { v: 'orchids', l: 'Orchids' }, { v: 'chrysanthemums', l: 'Chrysanthemums' }, { v: 'anders', l: 'Other...' }],
    akkerbouw: isDE
      ? [{ v: 'aardappelen', l: 'Kartoffeln' }, { v: 'suikerbieten', l: 'Zuckerrüben' }, { v: 'mais', l: 'Mais' }, { v: 'granen', l: 'Getreide' }, { v: 'uien', l: 'Zwiebeln' }, { v: 'wortelen', l: 'Karotten' }, { v: 'anders', l: 'Andere...' }]
      : isNL
        ? [{ v: 'aardappelen', l: 'Aardappelen' }, { v: 'suikerbieten', l: 'Suikerbieten' }, { v: 'mais', l: 'Mais' }, { v: 'granen', l: 'Granen' }, { v: 'uien', l: 'Uien' }, { v: 'wortelen', l: 'Wortelen' }, { v: 'anders', l: 'Anders...' }]
        : [{ v: 'potatoes', l: 'Potatoes' }, { v: 'sugar_beets', l: 'Sugar Beets' }, { v: 'corn', l: 'Corn' }, { v: 'grains', l: 'Grains' }, { v: 'onions', l: 'Onions' }, { v: 'carrots', l: 'Carrots' }, { v: 'anders', l: 'Other...' }],
    boomteelt: isDE
      ? [{ v: 'laanbomen', l: 'Alleebäume' }, { v: 'sierheesters', l: 'Ziersträucher' }, { v: 'vasteplanten', l: 'Stauden' }, { v: 'fruitbomen', l: 'Obstbäume' }, { v: 'coniferen', l: 'Koniferen' }, { v: 'anders', l: 'Andere...' }]
      : isNL
        ? [{ v: 'laanbomen', l: 'Laanbomen' }, { v: 'sierheesters', l: 'Sierheesters' }, { v: 'vasteplanten', l: 'Vaste planten' }, { v: 'fruitbomen', l: 'Fruitbomen' }, { v: 'coniferen', l: 'Coniferen' }, { v: 'anders', l: 'Anders...' }]
        : [{ v: 'avenue_trees', l: 'Avenue Trees' }, { v: 'ornamental_shrubs', l: 'Ornamental Shrubs' }, { v: 'perennials', l: 'Perennials' }, { v: 'fruit_trees', l: 'Fruit Trees' }, { v: 'conifers', l: 'Conifers' }, { v: 'anders', l: 'Other...' }],
    opkweek: isDE
      ? [{ v: 'groenteplanten', l: 'Gemüsepflanzen' }, { v: 'sierteeltstekken', l: 'Zierpflanzenstecklinge' }, { v: 'boomkwekerijmateriaal', l: 'Baumschulmaterial' }, { v: 'anders', l: 'Andere...' }]
      : isNL
        ? [{ v: 'groenteplanten', l: 'Groenteplanten' }, { v: 'sierteeltstekken', l: 'Sierteeltstekken' }, { v: 'boomkwekerijmateriaal', l: 'Boomkwekerijmateriaal' }, { v: 'anders', l: 'Anders...' }]
        : [{ v: 'vegetable_plants', l: 'Vegetable Plants' }, { v: 'ornamental_cuttings', l: 'Ornamental Cuttings' }, { v: 'nursery_stock', l: 'Nursery Stock' }, { v: 'anders', l: 'Other...' }]
  };

  const content = isDE ? {
    title: "PROBEPAKET BESTELLEN",
    subtitle: "Sie erhalten 1x 1 Liter FungiPower All12 und 1x 60ml FungiPower Shield für €29,95 (zzgl. MwSt.) inklusive Versandkosten.",
    product1: { name: "FungiPower All12 (1L)", sub: "NÄHRSTOFFTRANSPORT" },
    product2: { name: "FungiPower Shield (60ml)", sub: "BESSERE WIDERSTANDSKRAFT" },
    bundleTitle: "AUSGEWÄHLTER TEST",
    bundleSub: "2X PRODUKTE (ALL12 + SHIELD)",
    price: "€29,95",
    shipping: "INKL. VERSAND | ZZGL. MWST",
    labelCompany: "UNTERNEHMENSNAME",
    placeholderCompany: "Ihre Gärtnerei",
    labelName: "KONTAKTPERSON",
    placeholderName: "Name",
    labelEmail: "E-MAIL ADRESSE",
    placeholderEmail: "info@beispiel.de",
    labelPhone: "TELEFONNUMMER",
    placeholderPhone: "+49 ...",
    labelAddress: "STRASSE + HAUSNUMMER",
    placeholderAddress: "Musterstraße 123",
    labelCity: "PLZ + ORT",
    placeholderCity: "12345 Stadt",
    labelCategory: "KULTUR / TYP DER GÄRTNEREI",
    subtextCategory: "Wählen Sie die Hauptkategorie Ihrer Kultur.",
    labelSpecificCrop: "Spezifische Kultur",
    subtextSpecificCrop: "Wählen Sie Ihre Kultur aus der Liste.",
    labelOtherCrop: "Geben Sie Ihre Kultur an",
    subtextOtherCrop: "Nennen Sie die Kultur, auf die Sie den Test anwenden möchten.",
    labelComments: "ANMERKUNGEN ODER SPEZIFISCHE FRAGEN",
    placeholderComments: "Haben Sie spezifische Herausforderungen?",
    btnSubmit: "Bestellen & Bezahlen",
    footerNote: "Sichere Zahlung über Stripe.",
    thankYou: "Vielen Dank!",
    successMsg: "Ihre Anfrage wurde erfolgreich versendet."
  } : isNL ? {
    title: "BESTEL HIER JE PROEFPAKKET",
    subtitle: "Je ontvangt 1x 1 liter FungiPower All12 en 1x 60ml FungiPower Shield voor €29,95 (excl. BTW) inclusief verzendkosten.",
    product1: { name: "FungiPower All12 (1L)", sub: "VOEDING TRANSPORTEREN" },
    product2: { name: "FungiPower Shield (60ml)", sub: "BETERE WEERBAARHEID" },
    bundleTitle: "GESELECTEERDE TEST",
    bundleSub: "2X PRODUCTEN (ALL12 + SHIELD)",
    price: "€29,95",
    shipping: "INCL. VERZENDING | EXCL. BTW",
    labelCompany: "BEDRIJFSNAAM",
    placeholderCompany: "Je Kwekerij",
    labelName: "CONTACTPERSOON",
    placeholderName: "Naam",
    labelEmail: "E-MAIL ADRES",
    placeholderEmail: "info@voorbeeld.nl",
    labelPhone: "TELEFOONNUMMER",
    placeholderPhone: "+31 6 ...",
    labelAddress: "STRAAT + HUISNUMMER",
    placeholderAddress: "Straatnaam 123",
    labelCity: "POSTCODE + PLAATS",
    placeholderCity: "1234 AB Plaatsnaam",
    labelCategory: "TEELT / TYPE KWEKERIJ",
    subtextCategory: "Kies de hoofdcategorie van je teelt.",
    labelSpecificCrop: "Specifiek gewas",
    subtextSpecificCrop: "Kies je gewas uit de lijst.",
    labelOtherCrop: "Geef je gewas op",
    subtextOtherCrop: "Vermeld het gewas waarop je de proef wilt toepassen.",
    labelComments: "OPMERKINGEN ODER SPECIFIEKE VRAGEN",
    placeholderComments: "Heb je specifieke uitdagingen?",
    btnSubmit: "Bestellen & Betalen",
    footerNote: "Veilige betaling via Stripe.",
    thankYou: "Bedankt!",
    successMsg: "Je aanvraag is succesvol verzonden."
  } : {
    title: "ORDER YOUR SAMPLE PACK HERE",
    subtitle: "You receive 1x 1 liter FungiPower All12 and 1x 60ml FungiPower Shield for €29.95 (excl. VAT) including shipping.",
    product1: { name: "FungiPower All12 (1L)", sub: "TRANSPORT NUTRIENTS" },
    product2: { name: "FungiPower Shield (60ml)", sub: "BETERE RESILIENCE" },
    bundleTitle: "SELECTED TEST",
    bundleSub: "2X PRODUCTS (ALL12 + SHIELD)",
    price: "€29.95",
    shipping: "INCL. SHIPPING | EXCL. VAT",
    labelCompany: "COMPANY NAME",
    placeholderCompany: "Your Nursery",
    labelName: "CONTACT PERSON",
    placeholderName: "Name",
    labelEmail: "EMAIL ADDRESS",
    placeholderEmail: "info@example.com",
    labelPhone: "PHONE NUMBER",
    placeholderPhone: "+ ...",
    labelAddress: "STREET + NUMBER",
    placeholderAddress: "Streetname 123",
    labelCity: "ZIP + CITY",
    placeholderCity: "1234 AB City",
    labelCategory: "CROP / NURSERY TYPE",
    subtextCategory: "Choose the main category of your crop.",
    labelSpecificCrop: "Specific crop",
    subtextSpecificCrop: "Choose your crop from the list.",
    labelOtherCrop: "Specify your crop",
    subtextOtherCrop: "Mention the crop you want to apply the test to.",
    labelComments: "COMMENTS OR SPECIFIC QUESTIONS",
    placeholderComments: "Do you have specific challenges?",
    btnSubmit: "Order & Pay",
    footerNote: "Secure payment via Stripe.",
    thankYou: "Thank You!",
    successMsg: "Your request has been successfully sent."
  };

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, locale: lang }),
      });

      const data = await response.json();

      if (response.ok && data.url) {
        window.location.href = data.url;
      } else {
        alert(isDE ? `Etwas ist schief gelaufen: ${data.error || 'Keine URL erhalten'}` : isNL ? `Er is iets misgegaan: ${data.error || 'Er is geen URL ontvangen'}` : `Something went wrong: ${data.error || 'No URL received'}`);
      }
    } catch (error: any) {
      alert(isDE ? `Ein Fehler ist aufgetreten: ${error.message}` : isNL ? `Er is een fout opgetreden: ${error.message}` : `An error occurred: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 overflow-y-auto font-outfit">
      <div className="absolute inset-0 bg-[#011a14]/95 backdrop-blur-md transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#011410] rounded-[30px] shadow-2xl flex flex-col max-h-[90vh] md:max-h-[85vh] border border-[#0d2b24] my-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-[110] w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white backdrop-blur-xl border border-white/10 transition-all active:scale-90"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-10 md:p-20 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-orange-500/20">
              <Check className="w-10 h-10 text-[#011410]" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-tighter">{content.thankYou}</h2>
            <p className="text-xl text-orange-100/70 max-w-md mx-auto leading-relaxed">{content.successMsg}</p>
          </div>
        ) : (
          <div className="overflow-y-auto custom-scrollbar pt-20 pb-10 px-6 md:px-12">
            <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 rounded-md bg-[#0d2b24] border border-orange-500/30 text-orange-500 text-[10px] font-bold uppercase tracking-wider mb-4">
                  {isDE ? "Probepaket" : isNL ? "Proefpakket" : "Sample Pack"}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight mb-3">
                  {content.title}
                </h2>
                <p className="text-base text-orange-100/60 font-medium leading-relaxed max-w-sm">
                  {content.subtitle}
                </p>
              </div>

              <div className="flex items-center -space-x-4 pr-4">
                <div className="relative z-10 filter drop-shadow(0 10px 20px rgba(0,0,0,0.4))">
                  <img src="/images/products/fungipower-start.png" alt="All12" className="h-24 md:h-32 object-contain" />
                </div>
                <div className="relative filter drop-shadow(0 10px 20px rgba(0,0,0,0.4))">
                  <img src="/images/products/fungipower-shield-transparant.png" alt="Shield" className="h-24 md:h-32 object-contain" />
                </div>
              </div>
            </div>

            <div className="bg-[#021814] rounded-xl p-4 border border-white/5 flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">{isDE ? "PROBEPAKET BUNDEL: AUF LAGER" : isNL ? "PROEFPAKKET BUNDEL: OP VOORRAAD" : "SAMPLE PACK BUNDLE: IN STOCK"}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-xl font-bold text-white leading-none">{content.price}</div>
                  <div className="text-[9px] text-orange-100/30 font-bold uppercase tracking-wider mt-1">{content.shipping}</div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-orange-100/50 uppercase tracking-widest ml-1">{content.labelCompany}</label>
                  <input type="text" className="w-full bg-[#0d2b24] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 transition-all font-medium" placeholder={content.placeholderCompany} value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-orange-100/50 uppercase tracking-widest ml-1">{content.labelName}</label>
                  <input type="text" className="w-full bg-[#0d2b24] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 transition-all font-medium" placeholder={content.placeholderName} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-orange-100/50 uppercase tracking-widest ml-1">{content.labelEmail}</label>
                  <input type="email" className="w-full bg-[#0d2b24] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 transition-all font-medium" placeholder={content.placeholderEmail} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-orange-100/50 uppercase tracking-widest ml-1">{content.labelPhone}</label>
                  <input type="tel" className="w-full bg-[#0d2b24] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 transition-all font-medium" placeholder={content.placeholderPhone} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="ml-1">
                    <label className="text-[10px] font-bold text-orange-100/50 uppercase tracking-widest block">{content.labelCategory}</label>
                    <span className="text-[10px] text-orange-100/30 block mt-1">{content.subtextCategory}</span>
                  </div>
                  <div className="relative">
                    <select
                      className="w-full bg-[#0d2b24] border border-white/5 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-orange-500/50 transition-all cursor-pointer font-medium pr-10"
                      value={formData.cropCategory}
                      onChange={(e) => setFormData(prev => ({ ...prev, cropCategory: e.target.value, crop: '', otherCrop: '' }))}
                      required
                    >
                      <option value="">{isDE ? "Wählen Sie..." : isNL ? "Maak een keuze..." : "Make a choice..."}</option>
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.label}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-100/30 pointer-events-none" />
                  </div>
                </div>

                <div className={`space-y-3 transition-all duration-300 ${!formData.cropCategory || !cropsByCategory[formData.cropCategory] ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
                  <div className="ml-1">
                    <label className="text-[10px] font-bold text-orange-100/50 uppercase tracking-widest block">{content.labelSpecificCrop}</label>
                    <span className="text-[10px] text-orange-100/30 block mt-1">{content.subtextSpecificCrop}</span>
                  </div>
                  <div className="relative">
                    <select
                      className="w-full bg-[#0d2b24] border border-white/5 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-orange-500/50 transition-all cursor-pointer font-medium pr-10"
                      value={formData.crop}
                      onChange={(e) => setFormData({ ...formData, crop: e.target.value })}
                      required={!!(formData.cropCategory && cropsByCategory[formData.cropCategory])}
                      disabled={!formData.cropCategory || !cropsByCategory[formData.cropCategory]}
                    >
                      <option value="">{isDE ? "Wählen Sie..." : isNL ? "Maak een keuze..." : "Make a choice..."}</option>
                      {formData.cropCategory && cropsByCategory[formData.cropCategory]?.map(c => (
                        <option key={c.v} value={c.v}>{c.l}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-100/30 pointer-events-none" />
                  </div>
                </div>
              </div>

              {(formData.cropCategory === 'anders' || formData.crop === 'anders') && (
                <div className="space-y-3 animate-in fade-in duration-300">
                  <div className="ml-1">
                    <label className="text-[10px] font-bold text-orange-100/50 uppercase tracking-widest block">{content.labelOtherCrop}</label>
                    <span className="text-[10px] text-orange-100/30 block mt-1">{content.subtextOtherCrop}</span>
                  </div>
                  <input
                    type="text"
                    required
                    placeholder={isDE ? "Geben Sie Ihre Kultur ein..." : isNL ? "Vul je gewas in..." : "Enter your crop..."}
                    className="w-full bg-[#0d2b24] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 transition-all font-medium"
                    value={formData.otherCrop}
                    onChange={(e) => setFormData({ ...formData, otherCrop: e.target.value })}
                  />
                </div>
              )}

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-orange-100/50 uppercase tracking-widest ml-1">{content.labelComments}</label>
                <textarea className="w-full bg-[#0d2b24] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 transition-all h-24 resize-none font-medium" placeholder={content.placeholderComments} value={formData.comments} onChange={(e) => setFormData({ ...formData, comments: e.target.value })} />
              </div>

              <div style={{ display: 'none' }} aria-hidden="true">
                <input
                  type="text"
                  name="website_url"
                  tabIndex={-1}
                  autoComplete="off"
                  onChange={(e) => setFormData({ ...formData, website_url: e.target.value } as any)}
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-400 text-orange-950 font-black py-4 rounded-xl uppercase tracking-widest text-sm transition-all shadow-lg shadow-orange-500/20 active:scale-[0.98] disabled:opacity-50 disabled:grayscale"
                >
                  {isSubmitting ? "..." : content.btnSubmit}
                </button>
                <p className="text-center mt-4 text-[10px] text-orange-100/30 uppercase tracking-widest font-bold">{content.footerNote}</p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SampleModal;
