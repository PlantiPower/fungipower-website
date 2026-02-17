"use client";

import React from 'react';
import { Mail, ArrowRight, Settings, CheckCircle2, User, Sprout, Send, Database, FileText, Layers, Target, Zap } from 'lucide-react';

export default function AutomationOverviewPage() {
    const categories = [
        {
            id: 'groente',
            title: 'Groente',
            crops: 'Tomaat, Komkommer, Paprika, Aubergine, Sla, Spinazie',
            color: '#84cc16',
            highlights: ['Actievere wortels', 'Balans groei/productie']
        },
        {
            id: 'fruit',
            title: 'Fruit',
            crops: 'Aardbei, Blauwebes, Framboos, Bramen, Appels, Peren',
            color: '#ef4444',
            highlights: ['Stabielere opname', 'Minder dip bij weersomslag']
        },
        {
            id: 'akkerbouw',
            title: 'Akkerbouw',
            crops: 'Aardappelen, Suikerbieten, Mais, Granen, Uien, Wortelen',
            color: '#f59e0b',
            highlights: ['Uniformiteit', 'Betere nutriënten benutting']
        },
        {
            id: 'sierteelt',
            title: 'Sierteelt',
            crops: 'Potplanten, Perkplanten, Snijbloemen, Rozen, Orchideeën, Chrysanten',
            color: '#ec4899',
            highlights: ['Gelijkmatige groei', 'Vitaler gewas / uitstraling']
        },
        {
            id: 'boomteelt',
            title: 'Boomteelt',
            crops: 'Laanbomen, Sierheesters, Vaste planten, Fruitbomen, Coniferen',
            color: '#10b981',
            highlights: ['Sterker wortelgestel', 'Betere aanslag/hergroei']
        },
        {
            id: 'opkweek',
            title: 'Opkweek & Jonge Planten',
            crops: 'Groenteplanten, Sierteeltstekken, Boomkwekerijmateriaal',
            color: '#6366f1',
            highlights: ['Snellere worteling', 'Gelijkmatige start']
        },
        {
            id: 'anders',
            title: 'Anders / Maatwerk',
            crops: 'Alle overige specifieke gewassen (handmatige invoer)',
            color: '#64748b',
            highlights: ['Algemene ondersteuning', 'Wortelactiviteit']
        },
    ];

    return (
        <div className="min-h-screen bg-[#011410] text-white p-6 md:p-12 font-outfit print:bg-white print:text-black print:p-0">
            {/* Header */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-white/10 pb-12 print:border-black/20 print:mb-8 print:pb-8">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="bg-[#84cc16]/10 text-[#84cc16] px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-[#84cc16]/20 print:border-black/20 print:text-black">Project: PlantiPower Automation</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight italic uppercase print:text-black">
                        Systeem <span className="text-[#84cc16] print:text-[#4d7c0f]">Architectuur</span>
                    </h1>
                    <p className="mt-2 text-white/40 font-medium tracking-wide flex items-center gap-2 print:text-black/60">
                        <Target size={14} className="text-[#84cc16] print:text-[#4d7c0f]" /> Phase 01: Welcome Experience & Routing Logic
                    </p>
                </div>
                <div className="flex gap-4 print:hidden">
                    <button onClick={() => window.print()} className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] transition-all flex items-center gap-3 active:scale-95">
                        <FileText size={18} /> Download als PDF
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto space-y-12 print:space-y-8">

                {/* SECTION 1: THE INPUT SOURCE */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center print:block">
                    <div className="lg:col-span-4 bg-white/5 border border-white/10 p-10 rounded-[40px] relative overflow-hidden h-full print:bg-white print:border-black/20 print:p-6 print:mb-6">
                        <div className="absolute top-0 right-0 p-8 opacity-5 print:hidden">
                            <User size={120} />
                        </div>
                        <div className="w-12 h-12 bg-[#84cc16] rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(132,204,22,0.4)] print:bg-black print:shadow-none">
                            <Zap className="text-[#011410] print:text-white" size={24} fill="currentColor" />
                        </div>
                        <h2 className="text-4xl font-black mb-6 italic tracking-tighter print:text-black print:text-2xl print:mb-4">01. DE TRIGGER</h2>
                        <div className="space-y-6 print:space-y-4">
                            <div>
                                <div className="text-[10px] font-black uppercase text-[#84cc16] tracking-widest mb-2 print:text-black">Input Bron</div>
                                <p className="text-white/60 leading-relaxed font-medium print:text-black/80">Aanvraag Sample Modaal op de website.</p>
                            </div>
                            <div className="space-y-3 print:space-y-2">
                                {['Naam Klant', 'E-mailadres', 'Branche / Branche', 'Specifiek Gewas'].map(f => (
                                    <div key={f} className="flex items-center gap-3 bg-black/40 p-3 rounded-2xl border border-white/5 font-bold text-sm print:bg-white print:border-black/10 print:text-black">
                                        <CheckCircle2 size={16} className="text-[#84cc16] print:text-black" /> {f}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* SECTION 2: THE BRAIN / ROUTING MATRIX */}
                    <div className="lg:col-span-8 bg-white/5 border border-white/10 p-10 rounded-[40px] relative print:bg-white print:border-black/20 print:p-6 print:mb-6">
                        <div className="flex items-center gap-4 mb-10 print:mb-6">
                            <div className="w-10 h-10 bg-[#84cc16]/10 rounded-xl flex items-center justify-center border border-[#84cc16]/30 print:border-black/20">
                                <Layers className="text-[#84cc16] print:text-black" size={20} />
                            </div>
                            <h2 className="text-2xl font-black italic uppercase tracking-tight print:text-black print:text-xl">02. ROUTING MATRIX</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2">
                            {categories.map((cat) => (
                                <div key={cat.id} className="flex flex-col bg-black/30 p-5 rounded-[28px] border border-white/10 border-l-4" style={{ borderLeftColor: cat.color }}>
                                    <div className="flex justify-between items-start mb-4 print:mb-2">
                                        <div className="font-black uppercase tracking-widest text-[13px] print:text-black">{cat.title}</div>
                                        <div className="text-[10px] font-medium opacity-30 italic print:text-black/40">Template: {cat.id}</div>
                                    </div>
                                    <div className="text-[11px] text-white/40 mb-4 line-clamp-2 print:text-black/60 print:mb-2">
                                        {cat.crops}
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {cat.highlights.map(h => (
                                            <span key={h} className="text-[9px] font-black uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10 text-white/70 print:bg-black/5 print:border-black/10 print:text-black/80">{h}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div className="flex flex-col bg-[#84cc16] p-6 rounded-[28px] text-[#011410] justify-center text-center print:bg-black print:text-white print:p-4">
                                <Settings size={32} className="mx-auto mb-4 animate-spin-slow print:hidden" />
                                <div className="font-black text-xl uppercase tracking-tighter italic print:text-lg">Dynamic Engine</div>
                                <div className="text-xs font-bold opacity-70">Schakelt direct op Branche</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECTION 3: THE OUTPUT (EMAIL PREVIEW) */}
                <div className="bg-white/5 border border-white/10 p-12 rounded-[50px] relative overflow-hidden group print:bg-white print:border-black/20 print:p-6 print:rounded-none">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 print:mb-6">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-[#84cc16] rounded-[24px] flex items-center justify-center shadow-[0_0_40px_rgba(132,204,22,0.4)] print:bg-black print:shadow-none">
                                <Mail className="text-[#011410] print:text-white" size={32} fill="currentColor" />
                            </div>
                            <div>
                                <h2 className="text-4xl font-black italic uppercase tracking-tighter print:text-black print:text-2xl">03. OUTPUT: WELKOMSTMAIL</h2>
                                <div className="text-[#84cc16] font-black text-xs uppercase tracking-[0.3em] mt-2 print:text-black/60">Gepersonaliseerde Experience</div>
                            </div>
                        </div>
                        <div className="p-6 bg-black/40 rounded-3xl border border-white/10 border-l-4 border-l-[#84cc16] print:bg-white print:border-black/10 print:p-4">
                            <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1 print:text-black/40">Status Phase 1</div>
                            <div className="text-xl font-black italic print:text-black">ACTIVE & LIVE</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 print:block">
                        <div className="space-y-12 py-8 print:py-0 print:space-y-6">
                            <div className="space-y-8 print:space-y-4">
                                <div>
                                    <h4 className="text-xs font-black uppercase tracking-widest text-[#84cc16] mb-4 print:text-black">PERSONALIZATIE LOGICA</h4>
                                    <div className="space-y-4 print:space-y-2">
                                        <div className="flex items-center gap-4 group">
                                            <div className="w-2 h-2 rounded-full bg-[#84cc16] print:bg-black"></div>
                                            <span className="text-sm font-bold text-white/80 shrink-0 w-40 print:text-black">Aanhef</span>
                                            <div className="h-px flex-1 bg-white/10 print:bg-black/10"></div>
                                            <span className="text-xs font-mono text-white/40 print:text-black/40">Beste [Voornaam]</span>
                                        </div>
                                        <div className="flex items-center gap-4 group text-[#84cc16] print:text-black">
                                            <div className="w-2 h-2 rounded-full bg-[#84cc16] print:bg-black"></div>
                                            <span className="text-sm font-bold shrink-0 w-40">Branche-Specifiek</span>
                                            <div className="h-px flex-1 bg-[#84cc16]/20 print:bg-black/10"></div>
                                            <span className="text-xs font-mono">Dynamic Body</span>
                                        </div>
                                        <div className="flex items-center gap-4 group">
                                            <div className="w-2 h-2 rounded-full bg-[#84cc16]"></div>
                                            <span className="text-sm font-bold text-white/80 shrink-0 w-40">Gewas Dynamisch</span>
                                            <div className="h-px flex-1 bg-white/10"></div>
                                            <span className="text-xs font-mono text-white/40">{'{{'}gewas{'}}'} Meervoud</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-black uppercase tracking-widest text-[#84cc16] mb-4 print:text-black">DESIGN ELEMENTEN</h4>
                                    <div className="grid grid-cols-2 gap-4 text-xs font-bold text-white/60 print:grid-cols-2 print:text-black/80">
                                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 print:bg-white print:p-2 print:border-none">✓ Welkom! tag</div>
                                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 print:bg-white print:p-2 print:border-none">✓ John G. Mede-oprichter</div>
                                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 print:bg-white print:p-2 print:border-none">✓ Clean Design</div>
                                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 print:bg-white print:p-2 print:border-none">✓ Package Tracker</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-black/60 p-8 rounded-[40px] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] print:bg-white print:border-none print:p-0 print:pt-4">
                                <div className="flex items-center justify-between mb-6 print:hidden">
                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-30">Email Header Preview</span>
                                </div>
                                <div className="bg-[#011410] rounded-2xl overflow-hidden border border-white/10 print:border-black/10">
                                    <div className="relative h-48 print:h-32">
                                        <img src="https://plantipower-new.vercel.app/images/email/header.jpg" className="w-full h-full object-cover opacity-60 print:opacity-100" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#011410] to-transparent print:hidden" />
                                        <div className="absolute bottom-6 left-6 print:bottom-2 print:left-2">
                                            <div className="inline-block bg-[#84cc16] px-3 py-1 rounded text-[8px] font-black text-[#011410] uppercase mb-2 print:bg-black print:text-white">Welkom en bedankt!</div>
                                            <div className="text-xl font-black italic tracking-tighter uppercase leading-none print:text-white print:text-sm">WIJ GAAN JE <br /> <span className="text-[#84cc16] print:text-white">PROEFPAKKET</span> <br /> KLAARMAKEN.</div>
                                        </div>
                                    </div>
                                    <div className="p-8 space-y-4">
                                        <div className="h-2 w-20 bg-white/20 rounded-full" />
                                        <div className="h-2 w-full bg-white/5 rounded-full" />
                                        <div className="h-2 w-5/6 bg-white/5 rounded-full" />
                                        <div className="h-2 w-full bg-white/5 rounded-full" />
                                        <div className="h-10 w-full bg-[#84cc16]/5 rounded-xl border border-[#84cc16]/20 flex items-center justify-center italic text-[#84cc16] text-[10px] font-bold">"Wat PlantiPower bij jou laat zien, is bepalend."</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className="max-w-7xl mx-auto mt-24 text-center pb-20 print:mt-12 print:pb-10">
                <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-4 print:text-black/40">PlantiPower Internal Systems</div>
                <div className="w-12 h-1 bg-white/10 mx-auto rounded-full print:bg-black/10" />
            </div>

            <style jsx global>{`
        @media print {
            @page { margin: 1cm; size: auto; }
            body {
                background-color: white !important;
                color: black !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
            .print\\:hidden { display: none !important; }
            * { transition: none !important; animation: none !important; }
        }
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 12s linear infinite;
        }
      `}</style>
        </div>
    );
}
