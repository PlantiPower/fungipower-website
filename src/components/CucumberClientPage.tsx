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
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity z-30 group cursor-pointer"
            aria-label="Volgende sectie"
        >
            <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="flex flex-col items-center gap-1"
            >
                <span className="text-xl">🥒</span>
                <div className="w-[1px] h-4 bg-gradient-to-b from-lime-500/60 to-transparent"></div>
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
            <main className="bg-black relative min-h-screen scroll-smooth snap-y snap-mandatory overflow-y-auto overflow-x-hidden h-screen">

                {/* SECTION 1: HEADER */}
                <section id="s1" className="relative h-screen flex flex-col items-center snap-start snap-always overflow-hidden bg-black" style={{ background: 'linear-gradient(to bottom, #080a0a 0%, #000000 100%)' }}>
                    {/* Tekst bovenaan */}
                    <div className="z-20 flex flex-col items-center text-center w-full max-w-5xl px-6 pt-10 pb-2 flex-none">
                        <div className="section-badge mb-5 mx-auto">{t.sections?.s1?.badge}</div>
                        <h1 className="font-outfit font-black uppercase text-[32px] md:text-[48px] lg:text-[58px] tracking-tight leading-[0.95] text-white mb-4">
                            {t.sections?.s1?.title}<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">
                                {t.sections?.s1?.titleAccent}
                            </span>
                        </h1>
                        <p className="text-base md:text-lg text-emerald-100/70 leading-relaxed font-medium max-w-2xl mx-auto italic">
                            {t.sections?.s1?.desc}
                        </p>
                    </div>
                    {/* Plant afbeelding — vult zo groot mogelijk, bijna tot de tekst */}
                    <div className="w-full flex-1 relative z-10 flex items-center justify-center overflow-hidden">
                        <InteractiveCucumberHero dict={dict} mode="header" />
                    </div>
                    <ScrollButton targetId="s2" />
                </section>

                {/* SECTION 2: PLANT (NODES) */}
                <section id="s2" className="relative h-screen flex flex-col items-center justify-center snap-start snap-always bg-black">
                    <div className="w-full h-full relative z-10 flex flex-col items-center justify-center">
                        <InteractiveCucumberHero dict={dict} mode="plant" sectionData={t.sections?.s2} />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter">
                        Plant Results
                    </div>
                    <ScrollButton targetId="s3" />
                </section>

                {/* SECTION 3: ROOTS (NODES) */}
                <section id="s3" className="relative h-screen flex flex-col items-center justify-center snap-start snap-always bg-black select-none">
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
                <section id="s4" className="relative h-screen flex flex-col items-center justify-center snap-start snap-always bg-black select-none">
                    <div className="w-full h-full relative z-10 flex flex-col items-center justify-center">
                        <InteractiveCucumberHero dict={dict} mode="cucumber" sectionData={t.sections?.s4} />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter">
                        Fruit Data
                    </div>
                    <ScrollButton targetId="s5" />
                </section>

                {/* SECTION 5: ALL12® TECHNOLOGY */}
                <section id="s5" className="relative h-screen flex flex-col items-center justify-center snap-start snap-always py-12 bg-black overflow-hidden">
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
                                        className="aspect-square flex items-center justify-center rounded-xl bg-[#1cff7a] shadow-[0_0_10px_rgba(28,255,122,0.27)] transition-all duration-300"
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

                {/* SECTION 6: PRODUCT CTA — Apple-stijl met zijlicht */}
                <section id="s6" className="relative h-screen flex flex-col md:flex-row items-center justify-center snap-start snap-always bg-black overflow-hidden">

                    {/* Spotlight van links — lime groen zijlicht */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute left-0 top-0 w-2/3 h-full bg-[radial-gradient(ellipse_at_left_center,rgba(132,204,22,0.18)_0%,transparent_65%)]" />
                        <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(132,204,22,0.10)_0%,transparent_70%)] blur-2xl" />
                    </div>

                    {/* Linker kolom — jerrycan */}
                    <div className="relative z-20 flex-1 flex items-center justify-center md:justify-end pr-0 md:pr-12">
                        <div className="relative">
                            {/* Vloer reflectie */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-20 bg-lime-400/10 blur-2xl rounded-full" />

                            {/* Jerrycan met floating animatie */}
                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="relative"
                            >
                                <img
                                    src="/images/all12-transparent.png"
                                    alt="PlantiPower ALL12"
                                    className="h-[280px] md:h-[420px] lg:h-[500px] w-auto object-contain drop-shadow-[0_0_60px_rgba(132,204,22,0.25)]"
                                />
                                {/* Reflectie eronder */}
                                <img
                                    src="/images/all12-transparent.png"
                                    alt=""
                                    aria-hidden
                                    className="h-[280px] md:h-[420px] lg:h-[500px] w-auto object-contain absolute top-full left-0 opacity-10 scale-y-[-1] blur-sm"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Rechter kolom — tekst */}
                    <div className="relative z-20 flex-1 flex flex-col items-center md:items-start justify-center px-8 md:pl-12 text-center md:text-left max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="text-lime-400/60 text-[10px] uppercase tracking-[0.3em] font-bold mb-4">PlantiPower ALL12®</div>
                            <h2 className="font-outfit font-black uppercase text-[38px] md:text-[52px] lg:text-[62px] tracking-tight leading-none text-white mb-4">
                                {t.sections?.s6?.title}<br />
                                <span className="text-lime-400 italic">{t.sections?.s6?.titleAccent}</span>
                            </h2>
                            <p className="text-base md:text-lg text-emerald-100/55 leading-relaxed font-light max-w-lg mb-10">
                                {t.sections?.s6?.desc}
                            </p>
                            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
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
                    </div>
                </section>

                <ContactForm dict={dict} lang={lang} />
            </main>
        </ClientLayout>
    );
}
