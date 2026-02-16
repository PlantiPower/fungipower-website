'use client'

import React, { useState } from 'react';
import { X, Check, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface SampleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SampleModal: React.FC<SampleModalProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const isNL = pathname?.startsWith('/nl') ?? false;

  const [formData, setFormData] = useState({
    products: ['all12', 'shield'],
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
    guidance: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const categories = isNL ? [
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
    groente: isNL
      ? [{ v: 'tomaat', l: 'Tomaat' }, { v: 'komkommer', l: 'Komkommer' }, { v: 'paprika', l: 'Paprika' }, { v: 'aubergine', l: 'Aubergine' }, { v: 'sla', l: 'Sla' }, { v: 'spinazie', l: 'Spinazie' }, { v: 'anders', l: 'Anders...' }]
      : [{ v: 'tomato', l: 'Tomato' }, { v: 'cucumber', l: 'Cucumber' }, { v: 'pepper', l: 'Pepper' }, { v: 'eggplant', l: 'Eggplant' }, { v: 'lettuce', l: 'Lettuce' }, { v: 'spinach', l: 'Spinach' }, { v: 'anders', l: 'Other...' }],
    fruit: isNL
      ? [{ v: 'aardbei', l: 'Aardbei' }, { v: 'blauwebes', l: 'Blauwe bes' }, { v: 'framboos', l: 'Framboos' }, { v: 'bramen', l: 'Bramen' }, { v: 'appels', l: 'Appels' }, { v: 'peren', l: 'Peren' }, { v: 'anders', l: 'Anders...' }]
      : [{ v: 'strawberry', l: 'Strawberry' }, { v: 'blueberry', l: 'Blueberry' }, { v: 'raspberry', l: 'Raspberry' }, { v: 'blackberry', l: 'Blackberry' }, { v: 'apples', l: 'Apples' }, { v: 'pears', l: 'Pears' }, { v: 'anders', l: 'Other...' }],
    sierteelt: isNL
      ? [{ v: 'potplanten', l: 'Potplanten' }, { v: 'perkplanten', l: 'Perkplanten' }, { v: 'snijbloemen', l: 'Snijbloemen' }, { v: 'rozen', l: 'Rozen' }, { v: 'orchideeen', l: 'Orchideeën' }, { v: 'chrysanten', l: 'Chrysanten' }, { v: 'anders', l: 'Anders...' }]
      : [{ v: 'potted_plants', l: 'Potted Plants' }, { v: 'bedding_plants', l: 'Bedding Plants' }, { v: 'cut_flowers', l: 'Cut Flowers' }, { v: 'roses', l: 'Roses' }, { v: 'orchids', l: 'Orchids' }, { v: 'chrysanthemums', l: 'Chrysanthemums' }, { v: 'anders', l: 'Other...' }],
    akkerbouw: isNL
      ? [{ v: 'aardappelen', l: 'Aardappelen' }, { v: 'suikerbieten', l: 'Suikerbieten' }, { v: 'mais', l: 'Mais' }, { v: 'granen', l: 'Granen' }, { v: 'uien', l: 'Uien' }, { v: 'wortelen', l: 'Wortelen' }, { v: 'anders', l: 'Anders...' }]
      : [{ v: 'potatoes', l: 'Potatoes' }, { v: 'sugar_beets', l: 'Sugar Beets' }, { v: 'corn', l: 'Corn' }, { v: 'grains', l: 'Grains' }, { v: 'onions', l: 'Onions' }, { v: 'carrots', l: 'Carrots' }, { v: 'anders', l: 'Other...' }],
    boomteelt: isNL
      ? [{ v: 'laanbomen', l: 'Laanbomen' }, { v: 'sierheesters', l: 'Sierheesters' }, { v: 'vasteplanten', l: 'Vaste planten' }, { v: 'fruitbomen', l: 'Fruitbomen' }, { v: 'coniferen', l: 'Coniferen' }, { v: 'anders', l: 'Anders...' }]
      : [{ v: 'avenue_trees', l: 'Avenue Trees' }, { v: 'ornamental_shrubs', l: 'Ornamental Shrubs' }, { v: 'perennials', l: 'Perennials' }, { v: 'fruit_trees', l: 'Fruit Trees' }, { v: 'conifers', l: 'Conifers' }, { v: 'anders', l: 'Other...' }],
    opkweek: isNL
      ? [{ v: 'groenteplanten', l: 'Groenteplanten' }, { v: 'sierteeltstekken', l: 'Sierteeltstekken' }, { v: 'boomkwekerijmateriaal', l: 'Boomkwekerijmateriaal' }, { v: 'anders', l: 'Anders...' }]
      : [{ v: 'vegetable_plants', l: 'Vegetable Plants' }, { v: 'ornamental_cuttings', l: 'Ornamental Cuttings' }, { v: 'nursery_stock', l: 'Nursery Stock' }, { v: 'anders', l: 'Other...' }]
  };

  const content = {
    title: isNL ? "BESTEL HIER JE PROEFPAKKET" : "ORDER YOUR SAMPLE PACK HERE",
    subtitle: isNL
      ? "Je ontvangt 1x 1 liter PlantiPower All12 en 1x 60ml PlantiPower Shield voor €29,95 inclusief verzendkosten."
      : "You receive 1x 1 liter PlantiPower All12 and 1x 60ml PlantiPower Shield for €29.95 including shipping.",
    product1: {
      name: "PlantiPower All12 (1L)",
      sub: isNL ? "VOEDING TRANSPORTEREN" : "TRANSPORT NUTRIENTS",
    },
    product2: {
      name: "PlantiPower Shield (60ml)",
      sub: isNL ? "BETERE WEERBAARHEID" : "BETTER RESILIENCE",
    },
    bundleTitle: isNL ? "GESELECTEERDE TEST" : "SELECTED TEST",
    bundleSub: isNL ? "2X PRODUCTEN (ALL12 + SHIELD)" : "2X PRODUCTS (ALL12 + SHIELD)",
    price: "€29,95",
    shipping: isNL ? "INCL. VERZENDKOSTEN" : "INCL. SHIPPING",

    labelCompany: isNL ? "BEDRIJFSNAAM" : "COMPANY NAME",
    placeholderCompany: isNL ? "Je Kwekerij" : "Your Nursery",
    labelName: isNL ? "CONTACTPERSOON" : "CONTACT PERSON",
    placeholderName: isNL ? "Naam" : "Name",
    labelEmail: isNL ? "EMAIL ADRES" : "EMAIL ADDRESS",
    placeholderEmail: "info@voorbeeld.nl",
    labelPhone: isNL ? "TELEFOONNUMMER" : "PHONE NUMBER",
    placeholderPhone: "+31 6 ...",
    labelAddress: isNL ? "STRAAT + HUISNUMMER" : "STREET + NUMBER",
    placeholderAddress: isNL ? "Straatnaam 123" : "Streetname 123",
    labelCity: isNL ? "POSTCODE + PLAATS" : "ZIP + CITY",
    placeholderCity: isNL ? "1234 AB Plaatsnaam" : "1234 AB City",

    labelCategory: isNL ? "TEELT / TYPE KWEKERIJ" : "CROP / NURSERY TYPE",
    subtextCategory: isNL ? "Kies de hoofdcategorie van je teelt." : "Choose the main category of your crop.",
    labelSpecificCrop: isNL ? "Specifiek gewas" : "Specific crop",
    subtextSpecificCrop: isNL ? "Kies je gewas uit de lijst." : "Choose your crop from the list.",

    labelOtherCrop: isNL ? "Geef je gewas op" : "Specify your crop",
    subtextOtherCrop: isNL ? "Vermeld het gewas waarop je de proef wilt toepassen." : "Mention the crop you want to apply the test to.",

    labelComments: isNL ? "OPMERKINGEN OF SPECIFIEKE VRAGEN" : "COMMENTS OR SPECIFIC QUESTIONS",
    placeholderComments: isNL ? "Heb je specifieke uitdagingen?" : "Do you have specific challenges?",

    btnSubmit: isNL ? "Aanvragen" : "Request",
    footerNote: isNL ? "Factuur volgt na levering. Levertijd 1-2 werkdagen." : "Invoice follows delivery. Delivery 1-2 working days.",
    thankYou: isNL ? "Bedankt!" : "Thank You!",
    successMsg: isNL ? "Je aanvraag is succesvol verzonden." : "Your request has been successfully sent."
  };

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-sample', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
          setFormData({
            ...formData,
            company: '',
            name: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            cropCategory: '',
            crop: '',
            otherCrop: '',
            comments: ''
          });
        }, 3000);
      } else {
        const errorData = await response.json();
        alert(isNL ? `Er is iets misgegaan: ${errorData.error}` : `Something went wrong: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert(isNL ? 'Er is een fout opgetreden bij het verzenden.' : 'An error occurred while sending.');
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
            <div className="w-20 h-20 bg-lime-500 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-lime-500/20">
              <Check className="w-10 h-10 text-[#011410]" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-tighter">{content.thankYou}</h2>
            <p className="text-xl text-emerald-100/70 max-w-md mx-auto leading-relaxed">{content.successMsg}</p>
          </div>
        ) : (
          <div className="overflow-y-auto custom-scrollbar pt-20 pb-10 px-6 md:px-12">
            <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 rounded-md bg-[#0d2b24] border border-lime-500/30 text-lime-500 text-[10px] font-bold uppercase tracking-wider mb-4">
                  {isNL ? "Proefpakket" : "Sample Pack"}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight mb-3">
                  {content.title}
                </h2>
                <p className="text-base text-emerald-100/60 font-medium leading-relaxed max-w-sm">
                  {content.subtitle}
                </p>
              </div>

              {/* COMPACT BOTTLES VISUAL */}
              <div className="flex items-center -space-x-4 pr-4">
                <div className="relative z-10 filter drop-shadow(0 10px 20px rgba(0,0,0,0.4))">
                  <img src="/images/products/plantipower-all12-transparant.png" alt="All12" className="h-24 md:h-32 object-contain" />
                </div>
                <div className="relative filter drop-shadow(0 10px 20px rgba(0,0,0,0.4))">
                  <img src="/images/products/plantipower-shield-transparant.png" alt="Shield" className="h-24 md:h-32 object-contain" />
                </div>
              </div>
            </div>

            {/* Price section - Subtle */}
            <div className="bg-[#021814] rounded-xl p-4 border border-white/5 flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
                <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">{isNL ? "PROEFPAKKET BUNDEL: OP VOORRAAD" : "SAMPLE PACK BUNDLE: IN STOCK"}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-xl font-bold text-white leading-none">{content.price}</div>
                  <div className="text-[9px] text-emerald-100/30 font-bold uppercase tracking-wider mt-1">{content.shipping}</div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-emerald-100/50 uppercase tracking-widest ml-1">{content.labelCompany}</label>
                  <input type="text" className="w-full bg-[#0d2b24] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-500/50 transition-all font-medium" placeholder={content.placeholderCompany} value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-emerald-100/50 uppercase tracking-widest ml-1">{content.labelName}</label>
                  <input type="text" className="w-full bg-[#0d2b24] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-500/50 transition-all font-medium" placeholder={content.placeholderName} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-emerald-100/50 uppercase tracking-widest ml-1">{content.labelEmail}</label>
                  <input type="email" className="w-full bg-[#0d2b24] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-500/50 transition-all font-medium" placeholder={content.placeholderEmail} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-emerald-100/50 uppercase tracking-widest ml-1">{content.labelPhone}</label>
                  <input type="tel" className="w-full bg-[#0d2b24] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-500/50 transition-all font-medium" placeholder={content.placeholderPhone} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                </div>
              </div>

              {/* TWO DROPDOWNS FOR CROP SELECTION */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Category Dropdown */}
                <div className="space-y-3">
                  <div className="ml-1">
                    <label className="text-[10px] font-bold text-emerald-100/50 uppercase tracking-widest block">{content.labelCategory}</label>
                    <span className="text-[10px] text-emerald-100/30 block mt-1">{content.subtextCategory}</span>
                  </div>
                  <div className="relative">
                    <select
                      className="w-full bg-[#0d2b24] border border-white/5 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-lime-500/50 transition-all cursor-pointer font-medium pr-10"
                      value={formData.cropCategory}
                      onChange={(e) => setFormData(prev => ({ ...prev, cropCategory: e.target.value, crop: '', otherCrop: '' }))}
                      required
                    >
                      <option value="">{isNL ? "Maak een keuze..." : "Make a choice..."}</option>
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.label}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-100/30 pointer-events-none" />
                  </div>
                </div>

                {/* Specific Crop Dropdown */}
                <div className={`space-y-3 transition-all duration-300 ${!formData.cropCategory || !cropsByCategory[formData.cropCategory] ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
                  <div className="ml-1">
                    <label className="text-[10px] font-bold text-emerald-100/50 uppercase tracking-widest block">{content.labelSpecificCrop}</label>
                    <span className="text-[10px] text-emerald-100/30 block mt-1">{content.subtextSpecificCrop}</span>
                  </div>
                  <div className="relative">
                    <select
                      className="w-full bg-[#0d2b24] border border-white/5 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-lime-500/50 transition-all cursor-pointer font-medium pr-10"
                      value={formData.crop}
                      onChange={(e) => setFormData({ ...formData, crop: e.target.value })}
                      required={!!(formData.cropCategory && cropsByCategory[formData.cropCategory])}
                      disabled={!formData.cropCategory || !cropsByCategory[formData.cropCategory]}
                    >
                      <option value="">{isNL ? "Maak een keuze..." : "Make a choice..."}</option>
                      {formData.cropCategory && cropsByCategory[formData.cropCategory]?.map(c => (
                        <option key={c.v} value={c.v}>{c.l}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-100/30 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Conditional "Anders" Field */}
              {(formData.cropCategory === 'anders' || formData.crop === 'anders') && (
                <div className="space-y-3 animate-in fade-in duration-300">
                  <div className="ml-1">
                    <label className="text-[10px] font-bold text-emerald-100/50 uppercase tracking-widest block">{content.labelOtherCrop}</label>
                    <span className="text-[10px] text-emerald-100/30 block mt-1">{content.subtextOtherCrop}</span>
                  </div>
                  <input
                    type="text"
                    required
                    placeholder={isNL ? "Vul je gewas in..." : "Enter your crop..."}
                    className="w-full bg-[#0d2b24] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-500/50 transition-all font-medium"
                    value={formData.otherCrop}
                    onChange={(e) => setFormData({ ...formData, otherCrop: e.target.value })}
                  />
                </div>
              )}

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-emerald-100/50 uppercase tracking-widest ml-1">{content.labelComments}</label>
                <textarea className="w-full bg-[#0d2b24] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-500/50 transition-all h-24 resize-none font-medium" placeholder={content.placeholderComments} value={formData.comments} onChange={(e) => setFormData({ ...formData, comments: e.target.value })} />
              </div>

              <div className="pt-4">
                <button type="submit" disabled={isSubmitting} className="w-full bg-lime-500 hover:bg-lime-400 text-emerald-950 font-black py-4 rounded-xl uppercase tracking-widest text-sm transition-all shadow-lg shadow-lime-500/20 active:scale-[0.98]">
                  {isSubmitting ? "..." : content.btnSubmit}
                </button>
                <p className="text-center mt-4 text-[10px] text-emerald-100/30 uppercase tracking-widest font-bold">{content.footerNote}</p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SampleModal;
