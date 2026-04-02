
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sprout, Zap } from 'lucide-react';
import ClientLayout from '@/components/ClientLayout';
import { Metadata, ResolvingMetadata } from 'next';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { getPath } from '@/utils/navigation';

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
        title: isDE ? 'FungiPower Produkte' : isNL ? 'FungiPower Producten' : 'FungiPower Products',
        description: isDE
            ? 'Entdecken Sie FungiPower Start und Boost — biologische Lösungen für maximalen Ertrag in der Pilzzucht.'
            : isNL
                ? 'Ontdek FungiPower Start en Boost — biologische oplossingen voor maximale opbrengst in de champignonteelt.'
                : 'Discover FungiPower Start and Boost — biological solutions for maximum yield in mushroom cultivation.',
    }
}

export default async function ProductsOverview({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const isNL = lang === 'nl';
    const isDE = lang === 'de';

    const content = {
        badge: isDE ? 'PRODUKTLINIE' : isNL ? 'PRODUCTLIJN' : 'PRODUCT LINE',
        title: isDE
            ? <><span className="text-white">ONZE</span><br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">PRODUCTEN</span></>
            : isNL
                ? <><span className="text-white">ONZE</span><br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">PRODUCTEN</span></>
                : <><span className="text-white">OUR</span><br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">PRODUCTS</span></>,
        subtitle: isDE
            ? 'Zwei komplementäre Produkte — abgestimmt auf jede Phase des Myzelzyklus.'
            : isNL
                ? 'Twee complementaire producten — afgestemd op elke fase van de groeicyclus van het mycelium.'
                : 'Two complementary products — tailored to every phase of the mycelium growth cycle.',
        startPhase: isDE ? 'Kolonisierungsphase' : isNL ? 'Kolonisatiefase' : 'Colonisation Phase',
        startTitle: 'FUNGIPOWER START',
        startDesc: isDE
            ? 'FungiPower Start stimuliert die frühe Myzel-Entwicklung und sorgt für eine gleichmäßige, starke Kolonisierung des Substrats — die Grundlage jeder erfolgreichen Ernte.'
            : isNL
                ? 'FungiPower Start stimuleert de vroege myceliumontwikkeling en zorgt voor een gelijkmatige, sterke kolonisatie van het substraat — de basis van elke succesvolle vlucht.'
                : 'FungiPower Start stimulates early mycelium development and ensures uniform, strong substrate colonisation — the foundation of every successful flush.',
        startFeatures: isDE
            ? ['Gleichmäßige Kolonisierung', 'Weniger schwache Stellen', 'Kürzere Kolonisierungszeit', '100% biologisch']
            : isNL
                ? ['Gelijkmatige kolonisatie', 'Minder zwakke plekken', 'Kortere kolonisatietijd', '100% biologisch']
                : ['Uniform colonisation', 'Fewer weak spots', 'Shorter colonisation time', '100% biological'],
        startCta: isDE ? 'MEHR ZU START' : isNL ? 'MEER OVER START' : 'MORE ABOUT START',
        boostPhase: isDE ? 'Fruchtungsphase' : isNL ? 'Vluchtfase' : 'Flush Phase',
        boostTitle: 'FUNGIPOWER BOOST',
        boostDesc: isDE
            ? 'FungiPower Boost aktiviert das Myzel in der entscheidenden Fruchtungsphase. Das Ergebnis: gleichmäßigere Vluchten, höhere Erträge und bessere Qualität pro Ernte.'
            : isNL
                ? 'FungiPower Boost activeert het mycelium in de beslissende vluchtfase. Het resultaat: gelijkmatigere vluchten, hogere opbrengsten en betere kwaliteit per oogst.'
                : 'FungiPower Boost activates mycelium during the decisive flush phase. The result: more uniform flushes, higher yields and better quality per harvest.',
        boostFeatures: isDE
            ? ['Mehr Pilze pro Vlucht', 'Gleichmäßige Fruchtbildung', 'Bessere Festigkeit & Farbe', '100% biologisch']
            : isNL
                ? ['Meer champignons per vlucht', 'Gelijkmatige vruchtvorming', 'Betere stevigheid & kleur', '100% biologisch']
                : ['More mushrooms per flush', 'Uniform fruiting', 'Better firmness & colour', '100% biological'],
        boostCta: isDE ? 'MEHR ZU BOOST' : isNL ? 'MEER OVER BOOST' : 'MORE ABOUT BOOST',
        composition: isDE ? 'Zusammensetzung' : isNL ? 'Samenstelling' : 'Composition',
        compositionValue: '5% Humuszuren + 3% Fulvozuren',
        together: isDE ? 'ZUSAMMEN STÄRKER' : isNL ? 'SAMEN STERKER' : 'STRONGER TOGETHER',
        togetherDesc: isDE
            ? 'Start und Boost sind als komplementäres System entwickelt worden. Eingesetzt in Kombination maximieren sie das Potenzial jeder Produktionsrunde.'
            : isNL
                ? 'Start en Boost zijn ontwikkeld als complementair systeem. Samen ingezet maximaliseren ze het potentieel van elke productieronde.'
                : 'Start and Boost are developed as a complementary system. Used together, they maximise the potential of every production round.',
    };

    return (
        <ClientLayout dict={dict} lang={lang}>
            <main className="min-h-screen bg-[#080a0a] text-white">

                {/* HERO */}
                <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-orange-950/20 via-transparent to-transparent pointer-events-none" />
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <span className="inline-block text-[10px] font-bold tracking-[0.4em] text-orange-400 uppercase mb-6 border border-orange-400/30 px-4 py-2 rounded-full">
                            {content.badge}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight mb-6">
                            {content.title}
                        </h1>
                        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            {content.subtitle}
                        </p>
                    </div>
                </section>

                {/* PRODUCT CARDS */}
                <section className="px-6 pb-16">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

                        {/* START CARD */}
                        <div className="group relative bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500/40 transition-all duration-500 hover:bg-white/[0.05] flex flex-col">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="p-8 md:p-10 flex flex-col flex-1 relative z-10">
                                {/* Badge + icon */}
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-[10px] font-bold tracking-[0.3em] text-orange-400/80 uppercase border border-orange-400/20 px-3 py-1.5 rounded-full">
                                        {content.startPhase}
                                    </span>
                                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                                        <Sprout className="w-5 h-5 text-orange-400" />
                                    </div>
                                </div>

                                {/* Title */}
                                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                                    <span className="text-white">FUNGIPOWER </span>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">START</span>
                                </h2>

                                {/* Description */}
                                <p className="text-white/50 text-base leading-relaxed mb-8">
                                    {content.startDesc}
                                </p>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {content.startFeatures.map((f, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                {/* Composition pill */}
                                <div className="text-[10px] font-bold tracking-[0.2em] text-orange-300/60 uppercase mb-8">
                                    {content.composition}: <span className="text-orange-300/80">{content.compositionValue}</span>
                                </div>

                                {/* CTA */}
                                <div className="mt-auto">
                                    <Link
                                        href={getPath('products/start', lang)}
                                        className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-orange-950 font-bold text-sm tracking-[0.15em] uppercase px-6 py-3.5 rounded-xl transition-all duration-300 group/btn"
                                    >
                                        {content.startCta}
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* BOOST CARD */}
                        <div className="group relative bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/40 transition-all duration-500 hover:bg-white/[0.05] flex flex-col">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="p-8 md:p-10 flex flex-col flex-1 relative z-10">
                                {/* Badge + icon */}
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-[10px] font-bold tracking-[0.3em] text-blue-400/80 uppercase border border-blue-400/20 px-3 py-1.5 rounded-full">
                                        {content.boostPhase}
                                    </span>
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-blue-400" />
                                    </div>
                                </div>

                                {/* Title */}
                                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                                    <span className="text-white">FUNGIPOWER </span>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">BOOST</span>
                                </h2>

                                {/* Description */}
                                <p className="text-white/50 text-base leading-relaxed mb-8">
                                    {content.boostDesc}
                                </p>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {content.boostFeatures.map((f, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                {/* Composition pill */}
                                <div className="text-[10px] font-bold tracking-[0.2em] text-blue-300/60 uppercase mb-8">
                                    {content.composition}: <span className="text-blue-300/80">{content.compositionValue}</span>
                                </div>

                                {/* CTA */}
                                <div className="mt-auto">
                                    <Link
                                        href={getPath('products/boost', lang)}
                                        className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-400 text-white font-bold text-sm tracking-[0.15em] uppercase px-6 py-3.5 rounded-xl transition-all duration-300 group/btn"
                                    >
                                        {content.boostCta}
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TOGETHER BANNER */}
                <section className="px-6 pb-24">
                    <div className="max-w-6xl mx-auto">
                        <div className="relative bg-gradient-to-r from-orange-950/40 via-white/[0.03] to-blue-950/40 border border-white/10 rounded-3xl p-10 md:p-14 text-center overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.08)_0%,transparent_60%)] pointer-events-none" />
                            <div className="relative z-10">
                                <span className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase block mb-4">
                                    {content.together}
                                </span>
                                <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
                                    {content.togetherDesc}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </ClientLayout>
    );
}
