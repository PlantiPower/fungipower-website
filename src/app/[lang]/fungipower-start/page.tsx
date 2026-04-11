
import React from 'react';
import {
    CheckCircle2,
    FileText,
    ArrowRight,
    Download,
    Zap,
    Shield,
    Leaf,
    Sprout,
    Cpu
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
        title: isDE ? 'FungiPower Start | Optimale Kolonisierung' : isNL ? 'FungiPower Start | Optimale Kolonisatie' : 'FungiPower Start | Optimal Colonisation',
        description: isDE ? 'FungiPower Start unterstützt das Myzel bei der Kolonisierung und schafft die Grundlage für eine starke und gesunde Ernte.' : isNL ? 'FungiPower Start ondersteunt het mycelium bij de kolonisatie en legt de basis voor een sterke, gezonde vlucht.' : 'FungiPower Start supports mycelium during colonisation and lays the foundation for a strong, healthy flush.',
    }
}

export default async function ProductStart({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const isNL = lang === 'nl';
    const isDE = lang === 'de';

    const content = {
        heroBadge: isDE ? 'Kolonisierungsphase' : isNL ? 'Kolonisatiefase' : 'Colonisation Phase',
        heroTitle: isDE
            ? <><span className="text-white">FUNGIPOWER</span><br /><span className="text-white">START</span><br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">KOLONISATIE</span></>
            : isNL
                ? <><span className="text-white">FUNGIPOWER</span><br /><span className="text-white">START</span><br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">KOLONISATIE</span></>
                : <><span className="text-white">FUNGIPOWER</span><br /><span className="text-white">START</span><br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">COLONISATION</span></>,
        heroDesc: isDE
            ? 'FungiPower Start sorgt dafür, dass das Myzel ab Tag 1 alle verfügbaren Nährstoffe im Substrat optimal nutzen kann. Dies legt die Grundlage für eine gleichmäßige, starke Kolonisierung.'
            : isNL
                ? 'FungiPower Start zorgt ervoor dat het mycelium vanaf dag 1 alle beschikbare nutriënten in het substraat optimaal kan benutten. Dit legt de basis voor een gelijkmatige, sterke kolonisatie.'
                : 'FungiPower Start ensures that the mycelium can optimally utilise all available nutrients in the substrate from day 1. This lays the foundation for uniform, strong colonisation.',
        ctaDiscover: isDE ? 'MEHR ERFAHREN' : isNL ? 'MEER ONTDEKKEN' : 'DISCOVER MORE',
        validated: isDE ? 'VALIDIERT' : isNL ? 'GEVALIDEERD' : 'VALIDATED',
        coreSystem: isDE ? 'KERNSYSTEM' : isNL ? 'KERNSYSTEEM' : 'CORE SYSTEM',
        efficiencyTitle: isDE ? <>Stärkere <span className="text-orange-400">Kolonisierung</span></> : isNL ? <>Sterkere <span className="text-orange-400">kolonisatie</span></> : <>Stronger <span className="text-orange-400">colonisation</span></>,
        cards: [
            {
                title: isDE ? 'Nährstoffverfügbarkeit' : isNL ? 'Nutriëntenbeschikbaarheid' : 'Nutrient Availability',
                desc: isDE
                    ? 'FungiPower Start macht die im Substrat vorhandenen Nährstoffe direkt für das Myzel verfügbar, damit es schnell und gleichmäßig durch das Substrat wachsen kann.'
                    : isNL
                        ? 'FungiPower Start maakt de aanwezige nutriënten in het substraat direct beschikbaar voor het mycelium, zodat het snel en gelijkmatig door het substraat kan groeien.'
                        : 'FungiPower Start makes the nutrients present in the substrate directly available to the mycelium, so it can grow quickly and evenly through the substrate.'
            },
            {
                title: isDE ? 'Substrat-Optimierung' : isNL ? 'Substraat-optimalisatie' : 'Substrate Optimisation',
                desc: isDE
                    ? 'Durch die Verbesserung der Nährstoffverfügbarkeit im Substrat schafft FungiPower Start optimale Bedingungen für eine homogene Myzel-Durchdringung.'
                    : isNL
                        ? 'Door de nutriëntenbeschikbaarheid in het substraat te verbeteren, creëert FungiPower Start optimale omstandigheden voor homogene myceliumdoorgroei.'
                        : 'By improving nutrient availability in the substrate, FungiPower Start creates optimal conditions for homogeneous mycelium penetration.'
            },
            {
                title: isDE ? 'Fundament für Ertrag' : isNL ? 'Basis voor opbrengst' : 'Foundation for Yield',
                desc: isDE
                    ? 'Eine starke Kolonisierung ist der Schlüssel zu einer gleichmäßigen und ertragreichen Ernte. FungiPower Start legt dieses Fundament zuverlässig und reproduzierbar.'
                    : isNL
                        ? 'Een sterke kolonisatie is de sleutel tot een gelijkmatige en opbrengstrijke vlucht. FungiPower Start legt dit fundament betrouwbaar en reproduceerbaar.'
                        : 'Strong colonisation is the key to a uniform and productive flush. FungiPower Start lays this foundation reliably and reproducibly.'
            }
        ],
        advantageBadge: isDE ? 'VORTEILE' : isNL ? 'VOORDELEN' : 'ADVANTAGES',
        advantageTitle: isDE ? <>Optimale <br /><span className="text-orange-500">Startbedingungen</span></> : isNL ? <>Optimale <br /><span className="text-orange-500">startcondities</span></> : <>Optimal <br /><span className="text-orange-500">start conditions</span></>,
        advantageDesc: isDE
            ? 'FungiPower Start ist speziell für die Kolonisierungsphase entwickelt. Der Nährstofftransporter unterstützt das Myzel dabei, alle verfügbaren Nährstoffe aus dem Substrat aufzunehmen und eine robuste Basis für die Fruchtbildung zu schaffen.'
            : isNL
                ? 'FungiPower Start is speciaal ontwikkeld voor de kolonisatiefase. De nutriënten transporteur ondersteunt het mycelium bij het opnemen van alle beschikbare voedingsstoffen uit het substraat en het vormen van een robuuste basis voor de vruchtvorming.'
                : 'FungiPower Start is specially developed for the colonisation phase. The nutrient transporter supports mycelium in absorbing all available nutrients from the substrate and forming a robust base for fruiting.',
        usps: isDE
            ? ['Gleichmäßige Myzel-Durchdringung', 'Weniger Schwachstellen im Substrat', 'Stärkere Basis für höheren Ertrag', '100% natürlich und rückstandsfrei']
            : isNL
                ? ['Gelijkmatige myceliumdoorgroei', 'Minder zwakke plekken in het substraat', 'Sterkere basis voor hogere opbrengst', '100% natuurlijk en residu-vrij']
                : ['Uniform mycelium penetration', 'Fewer weak spots in the substrate', 'Stronger foundation for higher yield', '100% natural and residue-free'],
        compositionTitle: isDE ? 'Zusammensetzung' : isNL ? 'Samenstelling' : 'Composition',
        humus: isDE ? 'Huminsäuren' : isNL ? 'Humuszuren' : 'Humic Acids',
        humusDesc: isDE ? '5% Aktivextrakt' : isNL ? '5% Actief extract' : '5% Active extract',
        fulvic: isDE ? 'Fulvinsäuren' : isNL ? 'Fulvinezuren' : 'Fulvic Acids',
        fulvicDesc: isDE ? '3% Konzentriert' : isNL ? '3% Geconcentreerd' : '3% Concentrated',
        tags: isDE ? 'Kolonisierungsphase • Nährstofftransporter • 100% natürlich' : isNL ? 'Kolonisatiefase • Nutriënten transporteur • 100% natuurlijk' : 'Colonisation phase • Nutrient transporter • 100% natural',
        guideBadge: isDE ? 'Anwendungsguide' : isNL ? 'Toepassingsgids' : 'Application Guide',
        guideTitle: isDE ? <>Einfache <br /><span className="text-orange-500">Anwendung</span></> : isNL ? <>Eenvoudige <br /><span className="text-orange-500">toepassing</span></> : <>Simple <br /><span className="text-orange-500">application</span></>,
        steps: [
            {
                step: '01',
                title: isDE ? 'Gut schütteln' : isNL ? 'Goed schudden' : 'Shake well',
                desc: isDE ? 'Vor Gebrauch gut schütteln.' : isNL ? 'Schud goed voor gebruik.' : 'Shake well before use.'
            },
            {
                step: '02',
                title: isDE ? 'Dosierung' : isNL ? 'Dosering' : 'Dosage',
                desc: isDE ? 'Verwenden Sie 5 ml FungiPower Start pro 1 Liter Wasser pro 1 m².' : isNL ? 'Gebruik 5 ml FungiPower Start per 1 liter water per 1 m².' : 'Use 5 ml of FungiPower Start per 1 liter of water per 1 m².'
            },
            {
                step: '03',
                title: isDE ? 'Anwendung Tag 1' : isNL ? 'Toepassing dag 1' : 'Application day 1',
                desc: isDE ? 'FungiPower Start einmalig am Tag 1 des Anbau-Zyklus auf das Substrat auftragen. Dosierung: 5 ml pro Liter Wasser pro m² Substrat.' : isNL ? 'Pas FungiPower Start eenmalig toe op dag 1 van de teeltcyclus. Dosering: 5 ml per liter water per m² substraat.' : 'Apply FungiPower Start once on day 1 of the cultivation cycle. Dosage: 5 ml per litre of water per m² of substrate.'
            }
        ],
        expertAdvice: isDE ? 'Tipps von Experten' : isNL ? 'Tips van Experts' : 'Expert Tips',
        expertItems: [
            {
                label: isDE ? 'Timing' : isNL ? 'Timing' : 'Timing',
                text: isDE ? 'FungiPower Start einmalig am Tag 1 des Anbau-Zyklus anwenden. Eine einmalige Anwendung ist ausreichend.' : isNL ? 'Pas FungiPower Start toe op dag 1 bij de start van de teeltcyclus. Eénmalige toepassing is voldoende.' : 'Apply FungiPower Start on day 1 at the start of the cultivation cycle. A single application is sufficient.'
            },
            {
                label: isDE ? 'Kombination' : isNL ? 'Combinatie' : 'Combination',
                text: isDE ? 'FungiPower Start mit FungiPower Boost kombinieren für maximale Ergebnisse. Start am Tag 1 für die Kolonisierung, Boost nach jeder Ernte für höheren Ertrag.' : isNL ? 'Combineer FungiPower Start met FungiPower Boost voor maximale resultaten. Start op dag 1 voor de kolonisatie, Boost na elke vlucht voor hogere opbrengst.' : 'Combine FungiPower Start with FungiPower Boost for maximum results. Start on day 1 for colonisation, Boost after each flush for higher yield.'
            },
            {
                label: isDE ? 'Aufbewahrung' : isNL ? 'Bewaaradvies' : 'Storage',
                text: isDE ? 'An einem kühlen Ort ohne direkte Sonneneinstrahlung lagern.' : isNL ? 'Bewaar op een koele plek buiten direct zonlicht.' : 'Store in a cool place out of direct sunlight.'
            }
        ],
        disclaimer: isDE
            ? 'FungiPower Start ist als nicht gefährlich eingestuft und bei korrektem Gebrauch in professionellen Champignonbetrieben zu 100% sicher.'
            : isNL
                ? 'FungiPower Start is geclassificeerd als niet-gevaarlijk en is 100% veilig bij correct gebruik in professionele champignonbedrijven.'
                : 'FungiPower Start is classified as non-hazardous and is 100% safe when used correctly in professional mushroom cultivation.',
        technicalTitle: isDE ? 'Technische Daten' : isNL ? 'Technische gegevens' : 'Technical Data',
        technicalDesc: isDE ? 'Zugang zur offiziellen Dokumentation von FungiPower Start.' : isNL ? 'Toegang tot de officiële documentatie van FungiPower Start.' : 'Access to official FungiPower Start documentation.',
        sdsLabel: isDE ? 'Sicherheitsdatenblatt' : isNL ? 'Veiligheidsblad' : 'Safety Data Sheet',
        sdsMeta: isDE ? 'SDS DE • pdf' : isNL ? 'SDS NL • pdf' : 'SDS EN • pdf',
        sdsLink: isDE ? '/docs/fungipower-start-sds-de.pdf' : isNL ? '/docs/fungipower-start-sds-nl.pdf' : '/docs/fungipower-start-sds-en.pdf',
        heroImage: '/images/products/fungipower-start.svg',
    };

    return (
        <ClientLayout dict={dict} lang={lang}>
            <div className="bg-[#011410] text-orange-50 font-sans selection:bg-orange-500/30">
                {/* HERO */}
                <div className="relative pt-24 md:pt-32 pb-16">
                    <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(249,115,22,0.1)_0%,transparent_70%)] blur-[120px] pointer-events-none"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="lg:pt-6">
                                <div className="mb-8">
                                    <div className="inline-flex items-center px-4 py-2 bg-[#0d1f12] border border-orange-900/50 rounded-sm">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 mr-3 animate-pulse"></div>
                                        <span className="text-[11px] font-black uppercase tracking-[0.25em] text-orange-500 font-outfit">{content.heroBadge}</span>
                                    </div>
                                </div>
                                <h1 className="font-outfit font-bold uppercase text-[42px] md:text-[56px] lg:text-[68px] tracking-tight leading-[0.9] text-white text-left mb-6">
                                    {content.heroTitle}
                                </h1>
                                <p className="text-lg md:text-xl text-orange-100/60 leading-relaxed max-w-xl font-light mb-8">
                                    {content.heroDesc}
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <a href="#guide" className="h-14 px-8 bg-orange-500 hover:bg-orange-400 text-[#011a14] font-black tracking-widest uppercase text-xs rounded-sm transition-all flex items-center justify-center gap-2 group min-w-[180px]">
                                        {content.ctaDiscover}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                    <div className="h-14 px-8 border border-white/10 rounded-sm bg-[#061a12] flex items-center justify-center gap-3 min-w-[180px]">
                                        <Shield className="w-4 h-4 text-orange-400" />
                                        <span className="text-white font-bold text-xs tracking-widest uppercase">{content.validated}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex items-center justify-center">
                                <div className="absolute inset-0 bg-orange-500/15 blur-[120px] rounded-full opacity-40"></div>
                                <img
                                    src={content.heroImage}
                                    alt="FungiPower Start"
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
                            <div className="text-orange-400 font-black text-[10px] uppercase tracking-[0.4em] mb-4">{content.coreSystem}</div>
                            <h2 className="section-title !text-4xl md:!text-5xl font-outfit">{content.efficiencyTitle}</h2>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-8">
                            {content.cards.map((item, i) => (
                                <div key={i} className="group glass-panel px-8 py-12 rounded-[2rem] hover-lift border-white/5 bg-white/[0.02] transition-all duration-500 hover:bg-white/[0.05]">
                                    <div className="mb-10 w-16 h-16 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 group-hover:scale-110 transition-all duration-500">
                                        {i === 0 ? <Sprout className="w-8 h-8 text-orange-400" /> : i === 1 ? <Cpu className="w-8 h-8 text-orange-400" /> : <Leaf className="w-8 h-8 text-orange-400" />}
                                    </div>
                                    <h3 className="section-title !text-2xl mb-6 tracking-tight font-outfit text-white">{item.title}</h3>
                                    <p className="text-orange-100/50 leading-relaxed font-light group-hover:text-orange-100/70 transition-colors">{item.desc}</p>
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
                                <div className="bg-orange-500/10 text-orange-400 px-4 py-1.5 rounded-sm text-[10px] font-black uppercase tracking-[0.4em] inline-block mb-8 border border-orange-500/20">
                                    {content.advantageBadge}
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 font-outfit leading-tight">{content.advantageTitle}</h2>
                                <p className="text-orange-100/60 text-lg font-light leading-relaxed mb-12">{content.advantageDesc}</p>
                                <div className="space-y-6">
                                    {content.usps.map((item, i) => (
                                        <div key={i} className="flex items-center gap-5 group">
                                            <div className="w-8 h-8 rounded-full border border-orange-500/30 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all">
                                                <CheckCircle2 className="w-4 h-4 text-orange-400 group-hover:text-orange-950" />
                                            </div>
                                            <span className="text-lg text-white font-medium tracking-tight">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="glass-panel rounded-[2rem] p-10 bg-white/[0.02] border-white/5">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-orange-500/10 rounded-lg border border-orange-500/20 text-orange-400">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight font-outfit">{content.compositionTitle}</h3>
                                </div>
                                <div className="space-y-6">
                                    <div className="p-5 rounded-xl bg-orange-900/30 border border-orange-500/10 hover:border-orange-500/30 transition-colors">
                                        <div className="text-orange-400 text-xs font-black uppercase tracking-widest mb-1">{content.humus}</div>
                                        <p className="text-white font-medium text-lg">{content.humusDesc}</p>
                                    </div>
                                    <div className="p-5 rounded-xl bg-orange-900/30 border border-orange-500/10 hover:border-orange-500/30 transition-colors">
                                        <div className="text-orange-400 text-xs font-black uppercase tracking-widest mb-1">{content.fulvic}</div>
                                        <p className="text-white font-medium text-lg">{content.fulvicDesc}</p>
                                    </div>
                                </div>
                                <div className="pt-6 mt-6 border-t border-white/5">
                                    <div className="text-orange-100/40 text-sm italic font-medium">{content.tags}</div>
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
                                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[80px] rounded-full"></div>
                                <div className="relative z-10">
                                    <div className="mb-10">
                                        <div className="bg-orange-900/50 text-orange-200 px-3 py-1 rounded text-sm font-bold uppercase tracking-widest inline-block mb-6 border border-white/10">
                                            {content.guideBadge}
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-black text-white font-outfit leading-tight">{content.guideTitle}</h2>
                                    </div>
                                    <div className="space-y-10">
                                        {content.steps.map((item, i) => (
                                            <div key={i} className="flex gap-6">
                                                <div className="text-4xl font-black text-orange-500 font-outfit">0{i + 1}</div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                                    <p className="text-orange-100/60 text-base leading-relaxed font-medium">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className="glass-panel p-10 rounded-[2rem] bg-orange-900/10 border-orange-500/20 flex-grow">
                                    <h3 className="text-2xl font-bold text-white mb-8 font-outfit">{content.expertAdvice}</h3>
                                    <div className="space-y-6">
                                        {content.expertItems.map((item, i) => (
                                            <div key={i} className="flex gap-4 items-start">
                                                <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0 mt-1">
                                                    <span className="text-orange-400 text-xs font-bold">!</span>
                                                </div>
                                                <p className="text-orange-100/70 text-base leading-relaxed">
                                                    <strong className="text-white">{item.label}:</strong> {item.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="glass-panel p-8 rounded-[2rem] bg-white/[0.02] border-white/5">
                                    <p className="text-orange-100/40 text-base leading-relaxed italic">"{content.disclaimer}"</p>
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
                                <p className="text-orange-100/50 text-lg font-light leading-relaxed">{content.technicalDesc}</p>
                            </div>
                            <a
                                href={content.sdsLink}
                                className="group glass-panel p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-orange-500/40 transition-all duration-500 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-orange-900/40 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                                        <FileText className="text-orange-400 w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors font-outfit uppercase tracking-tight">{content.sdsLabel}</h4>
                                        <p className="text-xs text-orange-500/50 font-black tracking-widest uppercase mt-1">{content.sdsMeta}</p>
                                    </div>
                                </div>
                                <Download className="w-6 h-6 text-orange-100/20 group-hover:text-orange-400 transition-all transform group-hover:-translate-y-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </ClientLayout>
    );
};
