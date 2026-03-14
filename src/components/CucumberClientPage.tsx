'use client'


import { motion } from 'framer-motion'
import InteractiveCucumberHero from '@/components/InteractiveCucumberHero'
import ContactForm from '@/components/ContactForm'
import ClientLayout from '@/components/ClientLayout'
import { Locale } from '@/i18n-config'

function ScrollButton({ targetId }: { targetId: string }) {
    return (
        <button
            onClick={() => {
                document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity z-50 group cursor-pointer"
            aria-label="Volgende sectie"
        >
            <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="flex flex-col items-center gap-1"
            >
                <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-outfit font-bold">Verder</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-lime-400/70">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </motion.div>
        </button>
    )
}

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
            <main className="bg-black relative min-h-[100dvh] scroll-smooth snap-y snap-mandatory overflow-y-auto overflow-x-hidden h-[100dvh]">

                {/* SECTION 1: HEADER */}
                <section id="s1" className="relative h-[100dvh] flex flex-col items-center snap-start snap-always overflow-hidden bg-black" style={{ background: 'linear-gradient(to bottom, #080a0a 0%, #000000 100%)' }}>
                    {/* Tekst bovenaan */}
                    <div className="z-20 flex flex-col items-center text-center w-full max-w-5xl px-6 pt-10 pb-2 flex-none">
                        <div className="section-badge mb-5 mx-auto">{t.sections?.s1?.badge}</div>
                        <h1 className="font-outfit font-black uppercase text-[32px] md:text-[48px] lg:text-[58px] tracking-tight leading-[0.95] text-white mb-6">
                            {t.sections?.s1?.title}<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">
                                {t.sections?.s1?.titleAccent}
                            </span>
                        </h1>

                        {/* Validatie strip — zelfde stijl als section-badge maar wit */}
                        <div className="inline-flex items-center gap-5 px-8 py-3 bg-white/5 border border-white/20 rounded-sm mb-5">
                            <img src="/images/eurofins_WHITE_nobg.png" alt="Eurofins Agro"
                                className="h-7 w-auto object-contain brightness-0 invert opacity-90" />
                            <div className="w-px h-6 bg-white/25" />
                            <span className="text-xs font-bold tracking-[0.3em] text-white/80 uppercase">65 laboratoriummetingen</span>
                            <div className="w-px h-6 bg-white/25" />
                            <img src="/images/vangog-logo.png" alt="Van Gog Kwekerijen"
                                className="h-7 w-auto object-contain brightness-0 invert opacity-80" />
                        </div>

                        <p className="text-base md:text-lg text-emerald-100/70 leading-relaxed font-medium max-w-2xl mx-auto italic">
                            {t.sections?.s1?.desc}
                        </p>
                    </div>
                    {/* Plant afbeelding — absolute fill van de sectie zodat mask over volle breedte werkt */}
                    <div className="absolute inset-0 bottom-[72px] z-10">
                        <InteractiveCucumberHero dict={dict} mode="header" />
                    </div>

                    <ScrollButton targetId="s2" />
                </section>

                {/* SECTION 2: PLANT (NODES) */}
                <section id="s2" className="relative h-[100dvh] flex flex-col items-center justify-center snap-start snap-always bg-black">
                    <div className="w-full h-full relative z-10 flex flex-col items-center justify-center">
                        <InteractiveCucumberHero dict={dict} mode="plant" sectionData={t.sections?.s2} />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter">
                        Plant Results
                    </div>
                    <ScrollButton targetId="s3" />
                </section>

                {/* SECTION 3: ROOTS (NODES) */}
                <section id="s3" className="relative h-[100dvh] flex flex-col items-center justify-center snap-start snap-always bg-black select-none">
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none"></div>
                    <div className="w-full h-full relative z-10">
                        <InteractiveCucumberHero dict={dict} mode="roots" sectionData={t.sections?.s3} />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter">
                        Root System
                    </div>
                    <ScrollButton targetId="s4" />
                </section>

                {/* SECTION 4: CUCUMBER (NODES) */}
                <section id="s4" className="relative h-[100dvh] flex flex-col items-center justify-center snap-start snap-always bg-black select-none">
                    <div className="w-full h-full relative z-10 flex flex-col items-center justify-center">
                        <InteractiveCucumberHero dict={dict} mode="cucumber" sectionData={t.sections?.s4} />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter">
                        Fruit Data
                    </div>
                    <ScrollButton targetId="s5" />
                </section>

                {/* SECTION 5: ALL12® TECHNOLOGY */}
                <section id="s5" className="relative h-[100dvh] flex flex-col items-center justify-center snap-start snap-always py-12 bg-black overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,255,122,0.05)_0%,transparent_70%)] opacity-50"></div>

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
                            <p className="text-lg md:text-xl text-emerald-100/60 leading-relaxed font-light max-w-3xl mx-auto mb-12">
                                {t.sections?.s5?.desc}
                            </p>

                            {/* Nutrients grid */}
                            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-13 gap-3 mb-10">
                                {[...(t.sections?.s5?.nutrients || []), "Si"].map((nutrient: string, i: number) => (
                                    <motion.div
                                        key={nutrient}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="aspect-square flex items-center justify-center rounded-xl bg-lime-400/10 border border-lime-400/25 transition-all duration-300"
                                    >
                                        <span className="text-xl font-black text-lime-400">{nutrient}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex flex-col items-center gap-8">
                                <div className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.2em] font-medium max-w-xl">
                                    Bron: Eurofins Agro Wageningen · 65 onafhankelijke laboratoriummetingen · sept 2025 – feb 2026
                                </div>
                                <a
                                    href={`/${lang}/contact`}
                                    className="px-10 py-5 bg-[#84cc16] text-[#0c0f0f] font-black uppercase tracking-widest text-sm rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105"
                                >
                                    Vraag het volledige rapport aan →
                                </a>
                            </div>
                        </motion.div>
                    </div>
                    <ScrollButton targetId="s6" />
                </section>

                {/* SECTION 6: PRODUCT CTA — gecentreerd */}
                <section id="s6" className="relative h-[100dvh] flex flex-col items-center justify-center snap-start snap-always bg-black overflow-hidden">

                    {/* Spotlight centered */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,rgba(132,204,22,0.10)_0%,transparent_70%)]" />
                    </div>

                    {/* Jerrycan */}
                    <div className="relative z-20 flex items-center justify-center mb-8">
                        <div className="relative">
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-16 bg-lime-400/10 blur-2xl rounded-full" />
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="relative"
                            >
                                <img
                                    src="/images/all12-jerrycan-nl-nobg.png"
                                    alt="PlantiPower ALL12"
                                    className="h-[220px] md:h-[300px] w-auto object-contain drop-shadow-[0_0_60px_rgba(132,204,22,0.3)]"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Tekst gecentreerd */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-20 flex flex-col items-center text-center px-6 max-w-2xl"
                    >
                        <div className="text-lime-400/60 text-[10px] uppercase tracking-[0.3em] font-bold mb-3">PlantiPower ALL12®</div>
                        <h2 className="font-outfit font-black uppercase text-[36px] md:text-[52px] tracking-tight leading-none text-white mb-4">
                            {t.sections?.s6?.title}<br />
                            <span className="text-lime-400 italic">{t.sections?.s6?.titleAccent}</span>
                        </h2>
                        <p className="text-base text-emerald-100/55 leading-relaxed font-light mb-8">
                            {t.sections?.s6?.desc}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <a
                                href={`/${lang}/plantipower-all12`}
                                className="px-9 py-4 bg-lime-400 text-black font-black uppercase tracking-widest text-sm rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105"
                            >
                                {t.sections?.s6?.btnProduct}
                            </a>
                            <a
                                href={`/${lang}/contact`}
                                className="px-9 py-4 bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-sm rounded-full hover:border-lime-400 hover:text-lime-400 transition-all duration-300 transform hover:scale-105"
                            >
                                {t.sections?.s6?.btnSample}
                            </a>
                        </div>
                    </motion.div>
                </section>

                <ContactForm dict={dict} lang={lang} />
            </main>
        </ClientLayout>
    );
}
