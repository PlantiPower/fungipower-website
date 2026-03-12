import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import ClientLayout from '@/components/ClientLayout'
import ContactForm from '@/components/ContactForm'
import { Metadata, ResolvingMetadata } from 'next'
import {
    TrendingUp,
    Sprout,
    Target,
    Quote
} from 'lucide-react';

import InteractiveCucumberHero from '@/components/InteractiveCucumberHero'

export async function generateMetadata(
    { params }: { params: Promise<{ lang: Locale }> }
): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang)
    const t = dict.Cucumbers;

    return {
        title: t.metaTitle,
        description: t.metaDesc,
        robots: {
            index: false,
            follow: false,
            nocache: true,
            googleBot: {
                index: false,
                follow: false,
            },
        },
    }
}

export default async function CucumberPage({
    params,
}: {
    params: Promise<{ lang: Locale }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang)
    const t = dict.Cucumbers;

    const statIcons = [TrendingUp, Sprout, Target];

    return (
        <ClientLayout dict={dict} lang={lang}>
            <main className="bg-[#011410] relative min-h-screen snap-y snap-mandatory overflow-x-hidden">

                {/* HERO SECTION - Now with Interactive Infographic */}
                <section className="relative pt-32 md:pt-40 pb-12 md:pb-20 overflow-hidden min-h-screen flex flex-col justify-center snap-start snap-always">
                    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-16">
                        <div className="animate-reveal">
                            <div className="section-badge mb-8 mx-auto">{t.heroBadge}</div>
                            <h1 className="font-outfit font-black uppercase text-[42px] md:text-[64px] lg:text-[80px] tracking-[0.02em] leading-[0.95] text-white mb-8">
                                {t.heroTitle}<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">
                                    {t.heroTitleAccent}
                                </span>
                            </h1>
                            <p className="text-xl text-emerald-100/70 leading-relaxed font-medium max-w-2xl mx-auto">
                                {t.heroDesc}
                            </p>
                        </div>
                    </div>

                    {/* INTERACTIVE INFOGRAPHIC */}
                    <div className="relative animate-reveal [animation-delay:200ms]">
                        <InteractiveCucumberHero dict={dict} />
                    </div>
                </section>

                {/* RESULTS STATS SECTION */}
                <section id="results-section" className="py-24 relative min-h-screen flex items-center snap-start snap-always">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="section-title text-white">
                                {t.resultsTitle} <span className="text-lime-400">{t.resultsTitleAccent}</span>
                            </h2>
                            <p className="text-lg text-emerald-100/60 max-w-2xl mx-auto italic">
                                {t.resultsDesc}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {t.stats.map((stat: any, idx: number) => {
                                const Icon = statIcons[idx % statIcons.length];
                                return (
                                    <div key={idx} className="glass-panel p-10 rounded-[2.5rem] border-white/5 bg-white/[0.03] group hover:bg-white/[0.05] transition-all duration-500">
                                        <div className="w-14 h-14 rounded-2xl bg-lime-500/10 flex items-center justify-center text-lime-400 mb-8 border border-lime-500/10 group-hover:scale-110 group-hover:bg-lime-500/20 transition-all">
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <div className="flex items-baseline gap-2 mb-2">
                                            <span className="text-5xl font-black text-white font-outfit">{stat.value}</span>
                                            <span className="text-xl font-bold text-lime-400 uppercase tracking-widest">{stat.unit}</span>
                                        </div>
                                        <div className="text-lg font-bold text-emerald-50/90 uppercase tracking-tight mb-3">{stat.label}</div>
                                        <p className="text-emerald-100/50 leading-relaxed font-medium">{stat.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* TESTIMONIAL HIGHLIGHT */}
                <section className="py-32 relative overflow-hidden bg-white/[0.01]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(132,204,22,0.05)_0%,transparent_50%)]"></div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                        <Quote className="w-16 h-16 text-lime-500/20 mx-auto mb-10" />
                        <blockquote className="text-3xl md:text-4xl font-light text-white leading-tight italic mb-12">
                            {t.testimonialText}
                        </blockquote>
                        <div className="flex flex-col items-center">
                            <div className="h-px w-20 bg-lime-500/30 mb-6"></div>
                            <cite className="not-italic">
                                <span className="block text-xl font-bold text-white uppercase tracking-widest">{t.testimonialAuthor}</span>
                                <span className="text-lime-500/60 font-medium uppercase tracking-[0.2em] text-sm mt-1 block">{t.testimonialLocation}</span>
                            </cite>
                        </div>
                    </div>
                </section>

                {/* CLOSING CONTACT */}
                <ContactForm dict={dict} lang={lang} />

            </main>
        </ClientLayout>
    );
}
