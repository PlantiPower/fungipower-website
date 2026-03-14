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
            className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity z-50 group cursor-pointer"
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
            <main className="bg-black relative scroll-smooth md:snap-y md:snap-mandatory overflow-y-auto overflow-x-hidden md:h-[100dvh]">

                {/* SECTION 1: HEADER */}
                <section id="s1" className="relative md:h-[100dvh] h-auto min-h-[100dvh] flex flex-col items-center md:snap-start md:snap-always overflow-hidden bg-black" style={{ background: 'linear-gradient(to bottom, #080a0a 0%, #000000 100%)' }}>
                    {/* Tekst bovenaan */}
                    <div className="z-20 flex flex-col items-center text-center w-full max-w-5xl px-6 pt-12 pb-4 flex-none">
                        <h1 className="font-outfit font-black uppercase text-[32px] md:text-[48px] lg:text-[58px] tracking-tight leading-[0.95] text-white mb-6">
                            {t.sections?.s1?.title}<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">
                                {t.sections?.s1?.titleAccent}
                            </span>
                        </h1>

                        {/* Validatie strip */}
                        <div className="inline-flex items-center gap-5 px-7 py-1 bg-white/5 border border-white/15 rounded-sm mb-5">
                            <img src="/images/eurofins_WHITE_nobg.png" alt="Eurofins Agro"
                                className="h-8 w-auto object-contain brightness-0 invert opacity-80" />
                            <div className="w-px h-5 bg-white/20" />
                            <span className="text-[10px] font-bold tracking-[0.25em] text-white/60 uppercase">65 laboratoriummetingen</span>
                            <div className="w-px h-5 bg-white/20" />
                            <img src="/images/vangog-logo.png" alt="Van Gog Kwekerijen"
                                className="h-5 w-auto object-contain brightness-0 invert opacity-65" />
                        </div>

                        <p className="text-base md:text-lg text-emerald-100/70 leading-relaxed font-medium max-w-2xl mx-auto italic">
                            {t.sections?.s1?.desc}
                        </p>
                    </div>

                    {/* Plant — inline below text, fills remaining height */}
                    <div className="relative z-10 flex-1 w-full min-h-[40vh] md:min-h-0">
                        <InteractiveCucumberHero dict={dict} mode="header" />
                    </div>

                    <ScrollButton targetId="s2" />
                </section>

                {/* SECTION 2: PLANT (NODES) */}
                <section id="s2" className="relative md:h-[100dvh] h-auto flex flex-col items-center md:justify-center md:snap-start md:snap-always" style={{ background: 'linear-gradient(160deg, #040d06 0%, #000000 60%)' }}>
                    {/* Mobile sectie-header */}
                    <div className="md:hidden w-full px-6 pt-8 pb-2 flex items-center gap-3">
                        <span className="text-lime-400/40 text-[10px] font-black uppercase tracking-[0.3em]">02</span>
                        <div className="h-px flex-1 bg-lime-400/10" />
                        <span className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">Plant</span>
                    </div>
                    <div className="w-full md:h-full relative z-10 flex flex-col items-center justify-center">
                        <InteractiveCucumberHero dict={dict} mode="plant" sectionData={t.sections?.s2} />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter hidden md:block">
                        Plant Results
                    </div>
                    <ScrollButton targetId="s3" />
                </section>

                {/* SECTION 3: ROOTS (NODES) */}
                <section id="s3" className="relative md:h-[100dvh] h-auto flex flex-col items-center md:justify-center md:snap-start md:snap-always select-none" style={{ background: 'linear-gradient(160deg, #000000 0%, #03080a 60%)' }}>
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none hidden md:block" />
                    {/* Mobile sectie-header */}
                    <div className="md:hidden w-full px-6 pt-8 pb-2 flex items-center gap-3">
                        <span className="text-lime-400/40 text-[10px] font-black uppercase tracking-[0.3em]">03</span>
                        <div className="h-px flex-1 bg-lime-400/10" />
                        <span className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">Wortels</span>
                    </div>
                    <div className="w-full md:h-full relative z-10">
                        <InteractiveCucumberHero dict={dict} mode="roots" sectionData={t.sections?.s3} />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter hidden md:block">
                        Root System
                    </div>
                    <ScrollButton targetId="s4" />
                </section>

                {/* SECTION 4: CUCUMBER (NODES) */}
                <section id="s4" className="relative md:h-[100dvh] h-auto flex flex-col items-center md:justify-center md:snap-start md:snap-always select-none" style={{ background: 'linear-gradient(160deg, #03080a 0%, #000000 60%)' }}>
                    {/* Mobile sectie-header */}
                    <div className="md:hidden w-full px-6 pt-8 pb-2 flex items-center gap-3">
                        <span className="text-lime-400/40 text-[10px] font-black uppercase tracking-[0.3em]">04</span>
                        <div className="h-px flex-1 bg-lime-400/10" />
                        <span className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">Komkommer</span>
                    </div>
                    <div className="w-full md:h-full relative z-10 flex flex-col items-center justify-center">
                        <InteractiveCucumberHero dict={dict} mode="cucumber" sectionData={t.sections?.s4} />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter hidden md:block">
                        Fruit Data
                    </div>
                    <ScrollButton targetId="s5" />
                </section>

                {/* SECTION 5: ALL12® TECHNOLOGY */}
                <section id="s5" className="relative md:h-[100dvh] h-auto flex flex-col items-center justify-center md:snap-start md:snap-always py-12 overflow-hidden" style={{ background: 'linear-gradient(160deg, #040d06 0%, #000000 70%)' }}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,255,122,0.05)_0%,transparent_70%)] opacity-50" />

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
                                        className="aspect-square flex items-center justify-center rounded-xl transition-all duration-300"
                                        style={{ background: '#1cff7a', boxShadow: '0 0 10px #1cff7a44' }}
                                    >
                                        <span className="text-xl font-black text-[#0c0f0f]">{nutrient}</span>
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

                {/* SECTION 6: PRODUCT CTA */}
                <section id="s6" className="relative md:h-[100dvh] h-auto min-h-screen flex flex-col items-center justify-center md:snap-start md:snap-always bg-black overflow-hidden">

                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,rgba(132,204,22,0.10)_0%,transparent_70%)]" />
                    </div>

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
