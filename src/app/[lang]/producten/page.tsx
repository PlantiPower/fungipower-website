
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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
            ? 'Entdecken Sie FungiPower Start und Boost. Biologische Lösungen für maximalen Ertrag in der Pilzzucht.'
            : isNL
                ? 'Ontdek FungiPower Start en Boost. Biologische oplossingen voor maximale opbrengst in de champignonteelt.'
                : 'Discover FungiPower Start and Boost. Biological solutions for maximum yield in mushroom cultivation.',
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
        badge: isDE ? 'Unsere Produkte' : isNL ? 'Onze producten' : 'Our products',
        title: isDE
            ? <><span className="text-white">ZUSAMMEN </span><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">STARK</span></>
            : isNL
                ? <><span className="text-white">SAMEN </span><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">STERK</span></>
                : <><span className="text-white">STRONGER </span><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">TOGETHER</span></>,
        subtitle: isDE
            ? 'Unsere Produkte sind einzeln einsetzbar, aber zusammen stärker.'
            : isNL
                ? 'Onze producten zijn individueel te gebruiken maar samen sterker.'
                : 'Our products can be used individually but are stronger together.',
        startPhase: isDE ? 'Kolonisierungsphase • Nährstofftransporter • 100% natürlich' : isNL ? 'Kolonisatiefase • Nutriënten transporteur • 100% natuurlijk' : 'Colonisation phase • Nutrient transporter • 100% natural',
        startTitle: 'FUNGIPOWER START',
        startDesc: isDE
            ? 'FungiPower Start macht alle verfügbaren Nährstoffe im Substrat direkt für das Myzel verfügbar. Dies legt die Grundlage für eine gleichmäßige, starke Kolonisierung und jeden erfolgreichen Schub.'
            : isNL
                ? 'FungiPower Start maakt alle beschikbare nutriënten in het substraat direct beschikbaar voor het mycelium. Dit legt de basis voor een gelijkmatige, sterke kolonisatie en elke succesvolle vlucht.'
                : 'FungiPower Start makes all available nutrients in the substrate directly available to the mycelium. This lays the foundation for uniform, strong colonisation and every successful flush.',
        startFeatures: isDE
            ? ['Gleichmäßige Kolonisierung', 'Weniger schwache Stellen im Substrat', 'Stärkere Basis für höheren Ertrag', '100% natürlich und rückstandsfrei']
            : isNL
                ? ['Gelijkmatige kolonisatie', 'Minder zwakke plekken in het substraat', 'Sterkere basis voor hogere opbrengst', '100% natuurlijk en residu-vrij']
                : ['Uniform colonisation', 'Fewer weak spots in the substrate', 'Stronger foundation for higher yield', '100% natural and residue-free'],
        startCta: isDE ? 'MEHR ZU START' : isNL ? 'MEER OVER START' : 'MORE ABOUT START',
        boostPhase: isDE ? 'Fruchtungsphase • Nährstofftransporter • 100% natürlich' : isNL ? 'Vluchtfase • Nutriënten transporteur • 100% natuurlijk' : 'Flush phase • Nutrient transporter • 100% natural',
        boostTitle: 'FUNGIPOWER BOOST',
        boostDesc: isDE
            ? 'FungiPower Boost macht alle verfügbaren Nährstoffe im Substrat während der Fruchtungsphase optimal für das Myzel verfügbar. Das Ergebnis: gleichmäßigere Vluchten und höhere Erträge pro Ernte.'
            : isNL
                ? 'FungiPower Boost maakt alle beschikbare nutriënten in het substraat optimaal beschikbaar voor het mycelium tijdens de vluchtfase. Het resultaat: uniformere vluchten en hogere opbrengsten per oogst.'
                : 'FungiPower Boost makes all available nutrients in the substrate optimally available to the mycelium during the flush phase. The result: more uniform flushes and higher yields per harvest.',
        boostFeatures: isDE
            ? ['Mehr Pilze pro Vlucht', 'Gleichmäßigere Fruchtbildung', '100% Score auf der 3. Vlucht', '100% natürlich und rückstandsfrei']
            : isNL
                ? ['Meer champignons per vlucht', 'Gelijkmatigere vruchtvorming', '100% score op de 3e vlucht', '100% natuurlijk en residu-vrij']
                : ['More mushrooms per flush', 'More uniform fruiting', '100% score on the 3rd flush', '100% natural and residue-free'],
        boostCta: isDE ? 'MEHR ZU BOOST' : isNL ? 'MEER OVER BOOST' : 'MORE ABOUT BOOST',
        together: isDE ? 'ZUSAMMEN STÄRKER' : isNL ? 'SAMEN STERKER' : 'STRONGER TOGETHER',
        togetherDesc: isDE
            ? 'Unsere Produkte sind einzeln einsetzbar, aber zusammen stärker.'
            : isNL
                ? 'Onze producten zijn individueel te gebruiken, maar samen sterker.'
                : 'Our products can be used individually, but are stronger together.',
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
                                {/* Badge */}
                                <div className="mb-8">
                                    <span className="text-[10px] font-bold tracking-[0.3em] text-orange-400/80 uppercase border border-orange-400/20 px-3 py-1.5 rounded-full">
                                        {content.startPhase}
                                    </span>
                                </div>

                                {/* Title */}
                                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                                    <span className="text-white">FUNGIPOWER </span>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">START</span>
                                </h2>

                                {/* Description */}
                                <p className="text-white/60 text-lg leading-relaxed mb-8">
                                    {content.startDesc}
                                </p>

                                {/* Features */}
                                <ul className="space-y-3.5 mb-8">
                                    {content.startFeatures.map((f, i) => (
                                        <li key={i} className="flex items-center gap-3 text-base text-white/80">
                                            <span className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

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
                                {/* Badge */}
                                <div className="mb-8">
                                    <span className="text-[10px] font-bold tracking-[0.3em] text-blue-400/80 uppercase border border-blue-400/20 px-3 py-1.5 rounded-full">
                                        {content.boostPhase}
                                    </span>
                                </div>

                                {/* Title */}
                                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                                    <span className="text-white">FUNGIPOWER </span>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">BOOST</span>
                                </h2>

                                {/* Description */}
                                <p className="text-white/60 text-lg leading-relaxed mb-8">
                                    {content.boostDesc}
                                </p>

                                {/* Features */}
                                <ul className="space-y-3.5 mb-8">
                                    {content.boostFeatures.map((f, i) => (
                                        <li key={i} className="flex items-center gap-3 text-base text-white/80">
                                            <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

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
