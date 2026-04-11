
import React from 'react';
import {
    CheckCircle2,
    FileText,
    ArrowRight,
    Download,
    Zap,
    Shield,
    TrendingUp,
    Sparkles,
    BarChart3
} from 'lucide-react';
import ClientLayout from '@/components/ClientLayout';
import { Metadata, ResolvingMetadata } from 'next';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'nl' }, { lang: 'de' }]
}

export async function generateMetadata(
    props: { params: Promise<{ lang: Locale }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const params = await props.params;
    const lang = params.lang;
    const isNL = lang === 'nl';
    const isDE = lang === 'de';

    return {
        title: isDE ? 'FungiPower Boost | Maximaler Ertrag' : isNL ? 'FungiPower Boost | Maximale Opbrengst' : 'FungiPower Boost | Maximum Yield',
        description: isDE ? 'FungiPower Boost verbessert die Nährstoffaufnahme des Myzels in der Fruchtphase für gleichmäßigere Vluchten und höheren Ertrag.' : isNL ? 'FungiPower Boost verbetert de nutriëntenopname van het mycelium in de vluchtfase voor gelijkmatigere vluchten en hogere opbrengst.' : 'FungiPower Boost improves mycelium nutrient uptake during the flush phase for more uniform flushes and higher yield.',
    }
}

export default async function ProductBoost({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const isNL = lang === 'nl';
    const isDE = lang === 'de';

    const content = {
        heroBadge: isDE ? 'Fruchtungsphase' : isNL ? 'Vluchtfase' : 'Flush Phase',
        heroTitle: isDE
            ? <><span className="text-white">FUNGIPOWER</span><br /><span className="text-white">BOOST</span><br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">MAXIMUM</span> <span className="text-white">ERTRAG</span></>
            : isNL
                ? <><span className="text-white">FUNGIPOWER</span><br /><span className="text-white">BOOST</span><br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">MAXIMALE</span> <span className="text-white">OPBRENGST</span></>
                : <><span className="text-white">FUNGIPOWER</span><br /><span className="text-white">BOOST</span><br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">MAXIMUM</span> <span className="text-white">YIELD</span></>,
        heroDesc: isDE
            ? 'FungiPower Boost macht alle verfügbaren Nährstoffe im Substrat optimal verfügbar für das Myzel während der Fruchtungsphase. Das Ergebnis: gleichmäßigere Vluchten und höhere Erträge.'
            : isNL
                ? 'FungiPower Boost maakt alle beschikbare nutriënten in het substraat optimaal beschikbaar voor het mycelium tijdens de vluchtfase. Het resultaat: gelijkmatigere vluchten en hogere opbrengsten.'
                : 'FungiPower Boost makes all available nutrients in the substrate optimally available to mycelium during the flush phase. The result: more uniform flushes and higher yields.',
        ctaDiscover: isDE ? 'MEHR ERFAHREN' : isNL ? 'MEER ONTDEKKEN' : 'DISCOVER MORE',
        validated: isDE ? 'VALIDIERT' : isNL ? 'GEVALIDEERD' : 'VALIDATED',
        coreSystem: isDE ? 'KERNSYSTEM' : isNL ? 'KERNSYSTEEM' : 'CORE SYSTEM',
        efficiencyTitle: isDE ? <>Maximaler <span className="text-blue-400">Ertrag</span></> : isNL ? <>Maximale <span className="text-blue-400">opbrengst</span></> : <>Maximum <span className="text-blue-400">yield</span></>,
        cards: [
            {
                title: isDE ? 'Gleichmäßige Vluchten' : isNL ? 'Gelijkmatige vluchten' : 'Uniform Flushes',
                desc: isDE
                    ? 'Durch verbesserte Nährstoffaufnahme wächst das Myzel gleichmäßiger über das gesamte Substrat. Weniger Ausreißer, mehr Gleichmäßigkeit. Das bedeutet effizienter ernten und bessere Ergebnisse.'
                    : isNL
                        ? 'Door verbeterde nutriëntenopname groeit het mycelium uniformer over het gehele substraat. Minder uitschieters, meer uniformiteit. Dat betekent efficiënter oogsten en betere resultaten.'
                        : 'Through improved nutrient uptake, mycelium grows more uniformly across the entire substrate. Less variation, more uniformity. That means more efficient harvesting and better results.'
            },
            {
                title: isDE ? 'Höhere Erträge' : isNL ? 'Hogere opbrengsten' : 'Higher Yields',
                desc: isDE
                    ? 'Weil das Myzel alle vorhandenen Nährstoffe im Substrat besser aufnehmen kann, steigt der Ertrag pro Vlucht messbar. Durchschnittlich 14% mehr Ertrag, bewiesen in 20 Praxisversuchen.'
                    : isNL
                        ? 'Doordat het mycelium alle aanwezige nutriënten in het substraat beter kan opnemen, stijgt de opbrengst per vlucht meetbaar. Gemiddeld 14% meer opbrengst, bewezen in 20 praktijkproeven.'
                        : 'Because mycelium can better absorb all available nutrients in the substrate, yield per flush increases measurably. Average 14% higher yield, proven in 20 field trials.'
            },
            {
                title: isDE ? 'Bessere Qualität' : isNL ? 'Betere kwaliteit' : 'Better Quality',
                desc: isDE
                    ? 'Durch verbesserte Nährstoffaufnahme werden Pilze gleichmäßiger in Format und Gewicht. Das kommt der Vermarktbarkeit Ihrer Ernte zugute.'
                    : isNL
                        ? 'Door verbeterde nutriëntenopname worden champignons uniformer in formaat en gewicht. Dit komt de vermarktbaarheid van uw oogst ten goede.'
                        : 'Through improved nutrient uptake, mushrooms become more uniform in size and weight. This benefits the marketability of your harvest.'
            }
        ],
        advantageBadge: isDE ? 'VORTEILE' : isNL ? 'VOORDELEN' : 'ADVANTAGES',
        advantageTitle: isDE ? <>Mehr aus jeder <br /><span className="text-blue-400/80">Vlucht</span></> : isNL ? <>Meer uit elke <br /><span className="text-blue-400/80">vlucht</span></> : <>More from every <br /><span className="text-blue-400/80">flush</span></>,
        advantageDesc: isDE
            ? 'FungiPower Boost ist speziell für die Fruchtungsphase entwickelt. Der Nährstofftransporter verbessert die Aufnahme der vorhandenen Nährstoffe im Substrat durch das Myzel. Das Resultat sind mehr Pilze pro Vlucht, höhere Uniformität und bessere Vermarktbarkeit.'
            : isNL
                ? 'FungiPower Boost is speciaal ontwikkeld voor de vluchtfase. De nutriënten transporteur verbetert de opname van de aanwezige nutriënten in het substraat door het mycelium. Het resultaat: meer champignons per vlucht, hogere uniformiteit en betere vermarktbaarheid.'
                : 'FungiPower Boost is specially developed for the flush phase. The nutrient transporter improves the uptake of existing nutrients in the substrate by the mycelium. The result: more mushrooms per flush, higher uniformity and better marketability.',
        usps: isDE
            ? ['Mehr Pilze per Vlucht', 'Gleichmäßigere Fruchtbildung', '100% Score auf der 3. Vlucht', '100% natürlich und rückstandsfrei']
            : isNL
                ? ['Meer champignons per vlucht', 'Gelijkmatigere vruchtvorming', '100% score op de 3e vlucht', '100% natuurlijk en residu-vrij']
                : ['More mushrooms per flush', 'More uniform fruiting', '100% score on the 3rd flush', '100% natural and residue-free'],
        compositionTitle: isDE ? 'Zusammensetzung' : isNL ? 'Samenstelling' : 'Composition',
        humus: isDE ? 'Huminsäuren' : isNL ? 'Humuszuren' : 'Humic Acids',
        humusDesc: isDE ? '5% Aktivextrakt' : isNL ? '5% Actief extract' : '5% Active extract',
        fulvic: isDE ? 'Fulvinsäuren' : isNL ? 'Fulvinezuren' : 'Fulvic Acids',
        fulvicDesc: isDE ? '3% Konzentriert' : isNL ? '3% Geconcentreerd' : '3% Concentrated',
        tags: isDE ? 'Fruchtungsphase • Nährstofftransporter • 100% natürlich' : isNL ? 'Vluchtfase • Nutriënten transporteur • 100% natuurlijk' : 'Flush phase • Nutrient transporter • 100% natural',
        guideBadge: isDE ? 'Anwendungsguide' : isNL ? 'Toepassingsgids' : 'Application Guide',
        guideTitle: isDE ? <>Einfache <br /><span className="text-blue-400/80">Anwendung</span></> : isNL ? <>Eenvoudige <br /><span className="text-blue-400/80">toepassing</span></> : <>Simple <br /><span className="text-blue-400/80">application</span></>,
        steps: [
            {
                step: '01',
                title: isDE ? 'Gut schütteln' : isNL ? 'Goed schudden' : 'Shake well',
                desc: isDE ? 'Vor Gebrauch gut schütteln.' : isNL ? 'Schud goed voor gebruik.' : 'Shake well before use.'
            },
            {
                step: '02',
                title: isDE ? 'Dosierung nach der Vlucht' : isNL ? 'Dosering na de vlucht' : 'Dosage after flush',
                desc: isDE ? 'Geben Sie 3 ml FungiPower Boost pro 1 Liter Wasser pro 1 m² hinzu. Gleichmäßig auf das Substrat auftragen direkt nach der Ernte jeder Vlucht.' : isNL ? 'Voeg 3 ml FungiPower Boost per 1 liter water per 1 m² toe. Breng aan op het substraat direct na het oogsten van elke vlucht.' : 'Add 3 ml of FungiPower Boost per 1 litre of water per 1 m². Apply evenly to the substrate directly after harvesting each flush.'
            },
            {
                step: '03',
                title: isDE ? 'Na jeder Vlucht wiederholen' : isNL ? 'Herhaal na elke vlucht' : 'Repeat after each flush',
                desc: isDE ? 'Nach der Ernte jeder Vlucht wiederholen für maximalen Ertrag über den gesamten Erntezyklus.' : isNL ? 'Herhaal na het oogsten van elke vlucht voor maximale opbrengst gedurende de gehele teeltcyclus.' : 'Repeat after harvesting each flush for maximum yield throughout the entire cultivation cycle.'
            }
        ],
        expertAdvice: isDE ? 'Tipps von Experten' : isNL ? 'Tips van Experts' : 'Expert Tips',
        expertItems: [
            {
                label: isDE ? 'Timing' : isNL ? 'Timing' : 'Timing',
                text: isDE ? 'FungiPower Boost direkt nach der Ernte jeder Vlucht auftragen. Gleichmäßig über das Substrat verteilen.' : isNL ? 'Pas FungiPower Boost toe direct na het oogsten van elke vlucht. Verdeel de oplossing gelijkmatig over het substraat.' : 'Apply FungiPower Boost directly after harvesting each flush. Distribute the solution evenly over the substrate.'
            },
            {
                label: isDE ? 'Kombination' : isNL ? 'Combinatie' : 'Combination',
                text: isDE ? 'FungiPower Boost arbeitet optimal zusammen mit FungiPower Start. Start am Tag 1 für die Kolonisierung, Boost nach jeder Vlucht für maximalen Ertrag.' : isNL ? 'FungiPower Boost werkt optimaal samen met FungiPower Start. Start op dag 1 voor de kolonisatie, Boost na elke vlucht voor maximale opbrengst.' : 'FungiPower Boost works optimally together with FungiPower Start. Start on day 1 for colonisation, Boost after each flush for maximum yield.'
            },
            {
                label: isDE ? 'Aufbewahrung' : isNL ? 'Bewaaradvies' : 'Storage',
                text: isDE ? 'An einem kühlen Ort ohne direkte Sonneneinstrahlung lagern.' : isNL ? 'Bewaar op een koele plek buiten direct zonlicht.' : 'Store in a cool place out of direct sunlight.'
            }
        ],
        disclaimer: isDE
            ? 'FungiPower Boost ist als nicht gefährlich eingestuft und bei korrektem Gebrauch in professionellen Champignonbetrieben zu 100% sicher.'
            : isNL
                ? 'FungiPower Boost is geclassificeerd als niet-gevaarlijk en is 100% veilig bij correct gebruik in professionele champignonbedrijven.'
                : 'FungiPower Boost is classified as non-hazardous and is 100% safe when used correctly in professional mushroom cultivation.',
        technicalTitle: isDE ? 'Technische Daten' : isNL ? 'Technische gegevens' : 'Technical Data',
        technicalDesc: isDE ? 'Zugang zur offiziellen Dokumentation von FungiPower Boost.' : isNL ? 'Toegang tot de officiële documentatie van FungiPower Boost.' : 'Access to official FungiPower Boost documentation.',
        sdsLabel: isDE ? 'Sicherheitsdatenblatt' : isNL ? 'Veiligheidsblad' : 'Safety Data Sheet',
        sdsMeta: isDE ? 'SDS DE • pdf' : isNL ? 'SDS NL • pdf' : 'SDS EN • pdf',
        sdsLink: isDE ? '/docs/fungipower-boost-sds-de.pdf' : isNL ? '/docs/fungipower-boost-sds-nl.pdf' : '/docs/fungipower-boost-sds-en.pdf',
        heroImage: '/images/products/fungipower-boost.svg',
    };

    return (
        <ClientLayout dict={dict} lang={lang}>
            <div className="bg-[#011410] text-blue-50 font-sans selection:bg-blue-500/30">
                {/* HERO */}
                <div className="relative pt-24 md:pt-32 pb-16">
                    <div className="absolute top-0 right-1/4 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(249,115,22,0.1)_0%,transparent_70%)] blur-[120px] pointer-events-none"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="lg:pt-6">
                                <div className="mb-8">
                                    <div className="inline-flex items-center px-4 py-2 bg-[#0d1f12] border border-blue-900/50 rounded-sm">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-3 animate-pulse"></div>
                                        <span className="text-[11px] font-black uppercase tracking-[0.25em] text-blue-400/80 font-outfit">{content.heroBadge}</span>
                                    </div>
                                </div>
                                <h1 className="font-outfit font-bold uppercase text-[42px] md:text-[56px] lg:text-[68px] tracking-tight leading-[0.9] text-white text-left mb-6">
                                    {content.heroTitle}
                                </h1>
                                <p className="text-lg md:text-xl text-blue-100/60 leading-relaxed max-w-xl font-light mb-8">
                                    {content.heroDesc}
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <a href="#guide" className="h-14 px-8 bg-blue-500 hover:bg-blue-400 text-[#011a14] font-black tracking-widest uppercase text-xs rounded-sm transition-all flex items-center justify-center gap-2 group min-w-[180px]">
                                        {content.ctaDiscover}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                    <div className="h-14 px-8 border border-white/10 rounded-sm bg-[#061a12] flex items-center justify-center gap-3 min-w-[180px]">
                                        <Shield className="w-4 h-4 text-blue-400" />
                                        <span className="text-white font-bold text-xs tracking-widest uppercase">{content.validated}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex items-center justify-center">
                                <div className="absolute inset-0 bg-blue-500/15 blur-[120px] rounded-full opacity-40"></div>
                                <img
                                    src={content.heroImage}
                                    alt="FungiPower Boost"
                                    className="relative z-10 w-full h-auto object-contain max-h-[600px] drop-shadow-[0_40px_80px_rgba(249,115,22,0.3)]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CORE SYSTEM */}
                <div className="py-24 bg-[#011410] relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="mb-16 max-w-2xl">
                            <div className="text-blue-400 font-black text-[10px] uppercase tracking-[0.4em] mb-4">{content.coreSystem}</div>
                            <h2 className="section-title !text-4xl md:!text-5xl font-outfit">{content.efficiencyTitle}</h2>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-8">
                            {content.cards.map((item, i) => (
                                <div key={i} className="group glass-panel px-8 py-12 rounded-[2rem] hover-lift border-white/5 bg-white/[0.02] transition-all duration-500 hover:bg-white/[0.05]">
                                    <div className="mb-10 w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-all duration-500">
                                        {i === 0 ? <BarChart3 className="w-8 h-8 text-blue-400" /> : i === 1 ? <TrendingUp className="w-8 h-8 text-blue-400" /> : <Sparkles className="w-8 h-8 text-blue-400" />}
                                    </div>
                                    <h3 className="section-title !text-2xl mb-6 tracking-tight font-outfit text-white">{item.title}</h3>
                                    <p className="text-blue-100/50 leading-relaxed font-light group-hover:text-blue-100/70 transition-colors">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ADVANTAGE & COMPOSITION */}
                <div className="relative py-20 border-y border-white/5 bg-[#011a14]">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-24 items-start">
                            <div>
                                <div className="bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-sm text-[10px] font-black uppercase tracking-[0.4em] inline-block mb-8 border border-blue-500/20">
                                    {content.advantageBadge}
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 font-outfit leading-tight">{content.advantageTitle}</h2>
                                <p className="text-blue-100/60 text-lg font-light leading-relaxed mb-12">{content.advantageDesc}</p>
                                <div className="space-y-6">
                                    {content.usps.map((item, i) => (
                                        <div key={i} className="flex items-center gap-5 group">
                                            <div className="w-8 h-8 rounded-full border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">
                                                <CheckCircle2 className="w-4 h-4 text-blue-400 group-hover:text-blue-950" />
                                            </div>
                                            <span className="text-lg text-white font-medium tracking-tight">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="glass-panel rounded-[2rem] p-10 bg-white/[0.02] border-white/5">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 text-blue-400">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight font-outfit">{content.compositionTitle}</h3>
                                </div>
                                <div className="space-y-6">
                                    <div className="p-5 rounded-xl bg-blue-900/30 border border-blue-500/10 hover:border-blue-500/30 transition-colors">
                                        <div className="text-blue-400 text-xs font-black uppercase tracking-widest mb-1">{content.humus}</div>
                                        <p className="text-white font-medium text-lg">{content.humusDesc}</p>
                                    </div>
                                    <div className="p-5 rounded-xl bg-blue-900/30 border border-blue-500/10 hover:border-blue-500/30 transition-colors">
                                        <div className="text-blue-400 text-xs font-black uppercase tracking-widest mb-1">{content.fulvic}</div>
                                        <p className="text-white font-medium text-lg">{content.fulvicDesc}</p>
                                    </div>
                                </div>
                                <div className="pt-6 mt-6 border-t border-white/5">
                                    <div className="text-blue-100/40 text-sm italic font-medium">{content.tags}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* GUIDE & EXPERT ADVICE */}
                <div id="guide" className="py-24 bg-[#011a14] relative">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
                            <div className="glass-panel p-12 rounded-[3rem] bg-white/[0.02] border-white/5 overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full"></div>
                                <div className="relative z-10">
                                    <div className="mb-10">
                                        <div className="bg-blue-900/50 text-blue-200 px-3 py-1 rounded text-sm font-bold uppercase tracking-widest inline-block mb-6 border border-white/10">
                                            {content.guideBadge}
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-black text-white font-outfit leading-tight">{content.guideTitle}</h2>
                                    </div>
                                    <div className="space-y-10">
                                        {content.steps.map((item, i) => (
                                            <div key={i} className="flex gap-6">
                                                <div className="text-4xl font-black text-blue-400/80 font-outfit">0{i + 1}</div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                                    <p className="text-blue-100/60 text-base leading-relaxed font-medium">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className="glass-panel p-10 rounded-[2rem] bg-blue-900/10 border-blue-500/20 flex-grow">
                                    <h3 className="text-2xl font-bold text-white mb-8 font-outfit">{content.expertAdvice}</h3>
                                    <div className="space-y-6">
                                        {content.expertItems.map((item, i) => (
                                            <div key={i} className="flex gap-4 items-start">
                                                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                                                    <span className="text-blue-400 text-xs font-bold">!</span>
                                                </div>
                                                <p className="text-blue-100/70 text-base leading-relaxed">
                                                    <strong className="text-white">{item.label}:</strong> {item.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="glass-panel p-8 rounded-[2rem] bg-white/[0.02] border-white/5">
                                    <p className="text-blue-100/40 text-base leading-relaxed italic">"{content.disclaimer}"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DOWNLOADS */}
                <div id="downloads" className="py-20 bg-[#011410] border-t border-white/5">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="max-w-3xl mx-auto">
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-4 font-outfit">{content.technicalTitle}</h2>
                                <p className="text-blue-100/50 text-lg font-light leading-relaxed">{content.technicalDesc}</p>
                            </div>
                            <a
                                href={content.sdsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group glass-panel p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-blue-500/40 transition-all duration-500 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-blue-900/40 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                                        <FileText className="text-blue-400 w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors font-outfit uppercase tracking-tight">{content.sdsLabel}</h4>
                                        <p className="text-xs text-blue-400/80/50 font-black tracking-widest uppercase mt-1">{content.sdsMeta}</p>
                                    </div>
                                </div>
                                <Download className="w-6 h-6 text-blue-100/20 group-hover:text-blue-400 transition-all transform group-hover:-translate-y-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </ClientLayout>
    );
};
