import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import ClientLayout from '@/components/ClientLayout'
import ContactForm from '@/components/ContactForm'
import { Metadata, ResolvingMetadata } from 'next'
import {
    Leaf,
    CheckCircle2,
    Target,
    Microscope,
    ShieldCheck,
    Zap
} from 'lucide-react';

// Client component for the visual parts to avoid passing too many props and keeping interactivity
// But the page is static mostly. Let's keep it server component for datafetching and use a Client Component for the render part if needed.
// Actually, since we need to map icons (functions) which are not serializable, we should probably do the icon mapping here or in a client component.
// Let's create a Client Component 'AboutContent' that takes dict and renders everything, similar to ClientLayout but for the page content.
// Or just inline it here if we don't need interactions.
// Wait, we have animations in the original About page?
// Original used `animate-reveal` css class but no framer-motion explicitly in the code I saw, except `MobileMenu`.
// Ah, `About.tsx` used `react-helmet-async` etc. 
// Just regular className animations. 

// To allow dynamic icon mapping based on string in json, we need to map string to component.
const iconMap: { [key: string]: any } = {
    Leaf,
    Zap,
    Target,
    ShieldCheck
};

export async function generateMetadata(
    props: { params: Promise<{ lang: Locale }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const params = await props.params;
    const lang = params.lang
    const dict = await getDictionary(lang)

    return {
        title: dict.About.metaTitle,
        description: dict.About.metaDesc,
    }
}

export async function generateStaticParams() {
    return [{ lang: 'nl' }]
}

export default async function AboutPage({
    params,
}: {
    params: Promise<{ lang: Locale }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang)
    const t = dict.About;

    return (
        <ClientLayout dict={dict} lang={lang}>
            <main className="bg-[#011410] relative">

                {/* HERO SECTION */}
                <div className="relative pt-32 md:pt-40 pb-16 md:pb-20">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-radial from-orange-500/10 to-transparent opacity-50"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="section-badge mb-6 font-bold tracking-[0.2em]">{t.heroBadge}</div>
                        <h1 className="font-outfit font-bold uppercase text-[42px] md:text-[56px] lg:text-[72px] tracking-[0.03em] leading-[1.02] text-white mb-0">
                            {t.heroTitle}<br />
                            <span className="text-white">{t.heroTitleAccent}</span>
                        </h1>
                    </div>
                </div>

                {/* Founder Section */}
                <section className="pb-24 pt-0 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                            {/* Jan Klerken foto kaart */}
                            <div className="relative">
                                <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4]">
                                    <img
                                        src="/images/jan-klerken.jpg"
                                        alt="Jan Klerken – Co-Founder FungiPower"
                                        className="w-full h-full object-cover object-top"
                                    />
                                    {/* Naam overlay onderaan */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8 pt-20">
                                        <p className="text-white font-black text-2xl font-outfit">Jan Klerken</p>
                                        <p className="text-orange-400 text-xs font-bold uppercase tracking-[0.25em] mt-1">Co-Founder FungiPower</p>
                                        <blockquote className="mt-4 text-orange-100/80 text-sm leading-relaxed italic border-l-2 border-orange-500 pl-4">
                                            {t.missionDesc}
                                        </blockquote>
                                    </div>
                                </div>
                            </div>

                            {/* Tekst rechts */}
                            <div className="flex flex-col justify-center space-y-8 pt-4 lg:pt-12">
                                <p className="text-xl text-white font-semibold leading-relaxed">
                                    {t.heroDesc}
                                </p>
                                <p className="text-lg text-orange-100/70 leading-relaxed">
                                    {t.visionDesc}
                                </p>
                                <div className="pt-4 border-t border-white/10">
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tight font-outfit mb-4">{t.coreTitle}</h3>
                                    <p className="text-lg text-orange-100/70 leading-relaxed">{t.coreDesc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Philosophy Section - REDESIGNED */}
                <section className="pb-32 pt-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_bottom,rgba(132,204,22,0.04)_0%,transparent_50%)]"></div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10">

                        <div className="grid md:grid-cols-1 gap-8 lg:gap-12 items-stretch mb-20">
                            <div className="glass-panel p-10 md:p-12 rounded-[3rem] border-white/5 bg-white/[0.02] flex flex-col h-full">
                                <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight font-outfit">{t.approachTitle}</h3>
                                <p className="text-lg text-orange-100/70 leading-relaxed">
                                    {t.approachDesc}
                                </p>
                                <div className="flex flex-wrap gap-6 mt-6">
                                    <a
                                        href="https://www.ourcelia.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-orange-400 font-bold text-sm uppercase tracking-widest hover:text-orange-300 transition-colors"
                                    >
                                        Bezoek OurCelia.com →
                                    </a>
                                    <a
                                        href="https://www.plantipower.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-orange-400 font-bold text-sm uppercase tracking-widest hover:text-orange-300 transition-colors"
                                    >
                                        Bezoek PlantiPower.com →
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {t.values.map((item: any, idx: number) => {
                                const Icon = iconMap[item.icon] || Leaf;
                                return (
                                    <div key={idx} className="glass-panel p-10 rounded-3xl hover-lift border-white/5 bg-white/[0.03] flex flex-col items-center text-center group">
                                        <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-8 border border-orange-500/10 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all duration-500">
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight font-outfit">{item.title}</h3>
                                        <p className="text-orange-100/50 text-base leading-relaxed">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-20 pt-16 border-t border-white/5 text-center">
                            <div className="max-w-3xl mx-auto">
                                <h2 className="section-title">
                                    {t.whoWeAreTitle} <span className="text-orange-400">{t.whoWeAreAccent}</span>
                                </h2>
                                <p className="text-2xl text-orange-100/70 font-light leading-relaxed italic">
                                    {t.whoWeAreDesc}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Production Section */}
                <section className="py-24 relative overflow-hidden bg-white/[0.01]">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center mb-20">
                            <div className="section-badge mb-6 font-bold tracking-[0.2em]">{t.productionBadge}</div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                                {t.productionTitle}
                            </h2>
                            <p className="text-xl text-orange-100/70 leading-relaxed">
                                {t.productionDesc}
                            </p>
                        </div>

                        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
                            {t.productionPoints.map((text: string, idx: number) => (
                                <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <CheckCircle2 className="w-6 h-6 text-orange-400 shrink-0 mt-1" />
                                    <span className="text-white font-medium text-lg leading-snug">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Form Integration */}
                <ContactForm dict={dict} lang={lang} />

            </main >
        </ClientLayout>
    )
}
