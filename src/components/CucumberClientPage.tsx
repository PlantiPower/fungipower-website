'use client'

import { motion } from 'framer-motion'
import InteractiveCucumberHero from '@/components/InteractiveCucumberHero'
import ContactForm from '@/components/ContactForm'
import ClientLayout from '@/components/ClientLayout'
import { Locale } from '@/i18n-config'

export default function CucumberClientPage({ 
    dict, 
    lang, 
    t 
}: { 
    dict: any, 
    lang: Locale, 
    t: any 
}) {
    return (
        <ClientLayout dict={dict} lang={lang}>
            <main className="bg-black relative min-h-screen snap-y snap-mandatory overflow-y-auto overflow-x-hidden h-screen">

                {/* SECTION 1: HEADER (CLEAN PLANT) */}
                <section className="relative h-screen flex flex-col items-center justify-start snap-start snap-always pt-24 md:pt-32" style={{ background: 'linear-gradient(to bottom, #080a0a 0%, #000000 100%)' }}>
                    <div className="max-w-4xl mx-auto px-6 relative z-20 text-center mb-0">
                        <div className="animate-reveal">
                            <div className="section-badge mb-6 mx-auto">{t.sections?.s1?.badge}</div>
                            <h1 className="font-outfit font-black uppercase text-[36px] md:text-[52px] lg:text-[62px] tracking-tight leading-[0.95] text-white mb-6">
                                {t.sections?.s1?.title}<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">
                                    {t.sections?.s1?.titleAccent}
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-emerald-100/70 leading-relaxed font-medium max-w-2xl mx-auto mb-4 italic">
                                {t.sections?.s1?.desc}
                            </p>
                            {t.sections?.s1?.footer && (
                                <div className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">
                                    {t.sections.s1.footer}
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <div className="w-full relative mt-[-100px] md:mt-[-150px] z-10">
                        <InteractiveCucumberHero dict={dict} mode="header" />
                    </div>
                </section>

                {/* SECTION 2: PLANT (NODES) */}
                <section className="relative h-screen flex flex-col items-center justify-center snap-start snap-always bg-black">
                    <div className="w-full h-full relative z-10">
                        <InteractiveCucumberHero dict={dict} mode="plant" sectionData={t.sections?.s2} />
                    </div>
                    {/* Background label */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter">
                        Plant Results
                    </div>
                </section>

                {/* SECTION 3: ROOTS (NODES) */}
                <section className="relative h-screen flex flex-col items-center justify-center snap-start snap-always bg-black">
                    <div className="w-full h-full relative z-10">
                        <InteractiveCucumberHero dict={dict} mode="roots" sectionData={t.sections?.s3} />
                    </div>
                    {/* Background label */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter">
                        Root System
                    </div>
                </section>

                {/* SECTION 4: CUCUMBER (NODES) */}
                <section className="relative h-screen flex flex-col items-center justify-center snap-start snap-always bg-black">
                    <div className="w-full h-full relative z-10">
                        <InteractiveCucumberHero dict={dict} mode="cucumber" sectionData={t.sections?.s4} />
                    </div>
                    {/* Background label */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter">
                        Fruit Data
                    </div>
                </section>

                {/* SECTION 5: ALL12® TECHNOLOGY */}
                <section className="relative h-screen flex flex-col items-center justify-center snap-start snap-always py-32 bg-black overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.05)_0%,transparent_70%)] opacity-50"></div>
                    
                    <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className="font-outfit font-black uppercase text-[42px] md:text-[64px] tracking-tight leading-none text-white mb-8">
                                {t.sections?.s5?.title}<br />
                                <span className="text-lime-400 italic">{t.sections?.s5?.titleAccent}</span>
                            </h2>
                            <p className="text-lg md:text-xl text-emerald-100/60 leading-relaxed font-light max-w-3xl mx-auto mb-16">
                                {t.sections?.s5?.desc}
                            </p>

                            {/* Nutrients Table / Grid */}
                            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 mb-16">
                                {t.sections?.s5?.nutrients?.map((nutrient: string, i: number) => (
                                    <motion.div
                                        key={nutrient}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="aspect-square flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 hover:border-lime-500/50 hover:bg-lime-500/10 transition-all duration-300 group"
                                    >
                                        <span className="text-xl font-black text-emerald-50/40 group-hover:text-lime-400 transition-colors">{nutrient}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex flex-col items-center gap-4">
                                <div className="h-px w-24 bg-gradient-to-r from-transparent via-lime-500/30 to-transparent"></div>
                                <div className="text-[12px] text-white/30 uppercase tracking-[0.4em] font-black">
                                    {t.sections?.s5?.footer}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <ContactForm dict={dict} lang={lang} />
            </main>
        </ClientLayout>
    );
}
