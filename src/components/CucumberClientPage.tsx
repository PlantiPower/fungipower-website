'use client'


import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import InteractiveCucumberHero from '@/components/InteractiveCucumberHero'
import ContactForm from '@/components/ContactForm'
import ClientLayout from '@/components/ClientLayout'
import { Locale } from '@/i18n-config'

function ScrollButton({ targetId, bottom = 'bottom-28' }: { targetId: string, bottom?: string }) {
    return (
        <button
            onClick={() => {
                document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
            }}
            className={`absolute ${bottom} left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity z-50 group cursor-pointer`}
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
    const drainContainerRef = useRef<HTMLDivElement>(null)
    const ironCardRef = useRef<HTMLDivElement>(null)
    const zincCardRef = useRef<HTMLDivElement>(null)
    const [drainLines, setDrainLines] = useState<{
        iron: { x1: number; y1: number; x2: number; y2: number } | null
        zinc: { x1: number; y1: number; x2: number; y2: number } | null
    }>({ iron: null, zinc: null })

    useEffect(() => {
        const update = () => {
            const container = drainContainerRef.current
            const iron = ironCardRef.current
            const zinc = zincCardRef.current
            if (!container || !iron || !zinc) return

            const cr = container.getBoundingClientRect()
            const ir = iron.getBoundingClientRect()
            const zr = zinc.getBoundingClientRect()

            // dot 1: standing water in tray at 73% x, 60% y of image container
            const dot1x = cr.width * 0.73
            const dot1y = cr.height * 0.60
            // dot 2: outflow cascade at 83% x, 68% y of image container
            const dot2x = cr.width * 0.83
            const dot2y = cr.height * 0.68

            setDrainLines({
                iron: {
                    x1: ir.right - cr.left,
                    y1: ir.top + ir.height / 2 - cr.top,
                    x2: dot1x,
                    y2: dot1y,
                },
                zinc: {
                    x1: zr.left - cr.left,
                    y1: zr.top + zr.height / 2 - cr.top,
                    x2: dot2x,
                    y2: dot2y,
                },
            })
        }

        // direct + na layout + na image load (cached images fire geen onLoad)
        update()
        const t1 = setTimeout(update, 100)
        const t2 = setTimeout(update, 600)
        window.addEventListener('resize', update)
        return () => {
            clearTimeout(t1)
            clearTimeout(t2)
            window.removeEventListener('resize', update)
        }
    }, [])

    return (
        <ClientLayout dict={dict} lang={lang}>
            <main className="bg-black relative scroll-smooth snap-y snap-mandatory overflow-y-auto overflow-x-hidden h-[100dvh]">

                {/* SECTION 1: HEADER */}
                <section id="s1" className="relative h-[100dvh] snap-start snap-always overflow-hidden bg-black" style={{ background: 'linear-gradient(to bottom, #080a0a 0%, #000000 100%)' }}>
                    {/* Plant vult altijd de volledige sectie */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <InteractiveCucumberHero dict={dict} mode="header" />
                    </div>

                    {/* Gradient: top donker voor leesbaarheid, fade naar transparant */}
                    <div className="absolute inset-0 z-10 pointer-events-none"
                        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 25%, rgba(0,0,0,0.3) 50%, transparent 70%)' }}
                    />

                    {/* Tekst zweeft bovenop — neemt nooit plantruimte af */}
                    <div className="relative z-20 flex flex-col items-center text-center w-full max-w-5xl mx-auto px-6 pt-[8vh] md:pt-[18vh]">
                        {/* Validatie strip */}
                        <div className="inline-flex items-center gap-3 md:gap-5 px-4 md:px-7 py-1 bg-white/5 border border-white/15 rounded-sm mb-4 md:mb-6">
                            <img src="/images/eurofins_WHITE_nobg.png" alt="Eurofins Agro"
                                className="h-6 md:h-8 w-auto object-contain brightness-0 invert opacity-80" />
                            <div className="w-px h-5 bg-white/20" />
                            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.25em] text-white/60 uppercase">65 laboratoriummetingen</span>
                            <div className="w-px h-5 bg-white/20" />
                            <img src="/images/vangog-logo.png" alt="Van Gog Kwekerijen"
                                className="h-4 md:h-5 w-auto object-contain brightness-0 invert opacity-65" />
                        </div>

                        <h1 className="font-outfit font-black uppercase text-[28px] md:text-[48px] lg:text-[58px] tracking-tight leading-[0.95] text-white mb-3 md:mb-6">
                            {t.sections?.s1?.title}<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">
                                {t.sections?.s1?.titleAccent}
                            </span>
                        </h1>

                        <p className="text-sm md:text-lg text-emerald-100/70 leading-relaxed font-medium max-w-2xl mx-auto italic mb-16">
                            {t.sections?.s1?.desc}
                        </p>

                    </div>

                    <ScrollButton targetId="s2" bottom="bottom-[50px]" />

                    {/* Bronvermelding — volle breedte, bodem sectie 1 */}
                    <div className="absolute bottom-0 inset-x-0 z-30 border-t border-white/10 py-2 px-6">
                        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-0.5 text-[8px] md:text-[9px] text-white/70 uppercase tracking-[0.2em] font-medium">
                            <span>Eurofins Agro Wageningen</span>
                            <span className="text-white/30">|</span>
                            <span>65 onafhankelijke laboratoriummetingen</span>
                            <span className="text-white/30">|</span>
                            <span>sept 2025 – feb 2026</span>
                            <span className="text-white/30">|</span>
                            <span>Van Gog Kwekerijen</span>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: PLANT (NODES) */}
                <section id="s2" className="relative h-[100dvh] snap-start snap-always overflow-hidden" style={{ background: 'linear-gradient(160deg, #040d06 0%, #000000 60%)' }}>
                    <div className="w-full h-full relative z-10 flex flex-col items-center justify-center">
                        <InteractiveCucumberHero dict={dict} mode="plant" sectionData={t.sections?.s2} />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter hidden md:block">
                        Plant Results
                    </div>
                    <ScrollButton targetId="s3" />
                </section>

                {/* SECTION 3: ROOTS (NODES) */}
                <section id="s3" className="relative h-[100dvh] snap-start snap-always overflow-hidden select-none" style={{ background: 'linear-gradient(160deg, #000000 0%, #03080a 60%)' }}>
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none hidden md:block" />
                    <div className="w-full h-full relative z-10 flex flex-col items-center justify-center">
                        <InteractiveCucumberHero dict={dict} mode="roots" sectionData={t.sections?.s3} />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter hidden md:block">
                        Root System
                    </div>
                    <ScrollButton targetId="s4" />
                </section>

                {/* SECTION 4: DRAIN */}
                <section id="s4" className="relative h-[100dvh] snap-start snap-always overflow-hidden select-none" style={{ background: 'linear-gradient(160deg, #030d04 0%, #000a03 60%)' }}>
                    {/* Water shimmer — groen */}
                    <div className="absolute inset-0 pointer-events-none z-0">
                        <motion.div
                            animate={{ x: ['-5%', '5%', '-5%'], opacity: [0.0, 0.04, 0.0] }}
                            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute inset-0"
                            style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 55px, rgba(80,220,120,0.05) 55px, rgba(80,220,120,0.05) 57px)' }}
                        />
                        <motion.div
                            animate={{ y: ['0%', '6%', '0%'], opacity: [0.0, 0.03, 0.0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                            className="absolute inset-0"
                            style={{ background: 'repeating-linear-gradient(90deg, transparent, transparent 70px, rgba(60,200,100,0.04) 70px, rgba(60,200,100,0.04) 72px)' }}
                        />
                    </div>
                    <div className="w-full h-full relative z-10 flex flex-col items-center justify-center">
                        {/* Spotlight — groen */}
                        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                            <div style={{
                                width: '60%', height: '60%',
                                background: 'radial-gradient(ellipse at 50% 55%, rgba(60,200,100,0.15) 0%, rgba(20,120,60,0.07) 40%, transparent 70%)',
                                filter: 'blur(30px)',
                            }} />
                        </div>

                        {/* Gecentreerd beeld + nodes */}
                        <div className="relative flex items-center justify-center">
                            <motion.div
                                ref={drainContainerRef}
                                initial={{ opacity: 0, scale: 0.95, y: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                animate={{ y: [0, -3, 0] }}
                                transition={{
                                    opacity: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
                                    scale: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
                                    y: { duration: 6, repeat: Infinity, ease: 'easeInOut', repeatType: 'loop' },
                                }}
                                className="relative"
                            >
                                <img
                                    src="/images/drain1_nobg.png"
                                    alt="PlantiPower drainmeting"
                                    onLoad={() => {
                                        // recalculate lines once image is fully rendered
                                        const container = drainContainerRef.current
                                        const iron = ironCardRef.current
                                        const zinc = zincCardRef.current
                                        if (!container || !iron || !zinc) return
                                        const cr = container.getBoundingClientRect()
                                        const ir = iron.getBoundingClientRect()
                                        const zr = zinc.getBoundingClientRect()
                                        setDrainLines({
                                            iron: { x1: ir.right - cr.left, y1: ir.top + ir.height / 2 - cr.top, x2: cr.width * 0.73, y2: cr.height * 0.60 },
                                            zinc: { x1: zr.left - cr.left, y1: zr.top + zr.height / 2 - cr.top, x2: cr.width * 0.83, y2: cr.height * 0.68 },
                                        })
                                    }}
                                    style={{
                                        maxHeight: 'calc(60dvh)',
                                        maxWidth: '75vw',
                                        width: 'auto',
                                        filter: 'drop-shadow(0 20px 60px rgba(40,180,80,0.2))',
                                    }}
                                />
                                {/* Ambient shadow — lifts rockwool block from background */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
                                    style={{ width: '80%', height: '40px', background: 'radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)', filter: 'blur(14px)' }}
                                />
                                <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 pointer-events-none"
                                    style={{ width: '50%', height: '16px', background: 'radial-gradient(ellipse at 50% 100%, rgba(40,180,80,0.08) 0%, transparent 100%)', filter: 'blur(8px)' }}
                                />

                                {/* Meetpunt 1: stilstaand water in goot (73% x, 60% y) */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                                    style={{ left: '73%', top: '60%' }}
                                >
                                    {/* Pulse ring — 3s interval */}
                                    <div style={{
                                        position: 'absolute',
                                        width: 20, height: 20,
                                        borderRadius: '50%',
                                        background: 'rgba(163,230,53,0.15)',
                                        transform: 'translate(-50%,-50%)',
                                        animation: 'drainPulse 3s ease-out infinite',
                                    }} />
                                    {/* Core dot */}
                                    <div style={{
                                        width: 7, height: 7,
                                        borderRadius: '50%',
                                        background: '#a3e635',
                                        boxShadow: '0 0 0 1.5px rgba(163,230,53,0.3), 0 0 8px 3px rgba(163,230,53,0.35)',
                                    }} />
                                </motion.div>

                                {/* Meetpunt 2: uitstromend water (83% x, 68% y) */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 2.0, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                                    style={{ left: '83%', top: '68%' }}
                                >
                                    <div style={{
                                        position: 'absolute',
                                        width: 20, height: 20,
                                        borderRadius: '50%',
                                        background: 'rgba(163,230,53,0.15)',
                                        transform: 'translate(-50%,-50%)',
                                        animation: 'drainPulse 3s ease-out 1.5s infinite',
                                    }} />
                                    <div style={{
                                        width: 7, height: 7,
                                        borderRadius: '50%',
                                        background: '#a3e635',
                                        boxShadow: '0 0 0 1.5px rgba(163,230,53,0.3), 0 0 8px 3px rgba(163,230,53,0.35)',
                                    }} />
                                </motion.div>

                                {/* CSS keyframe voor pulse */}
                                <style>{`
                                    @keyframes drainPulse {
                                        0%   { transform: translate(-50%,-50%) scale(1); opacity: 0.6; }
                                        70%  { transform: translate(-50%,-50%) scale(2.8); opacity: 0; }
                                        100% { transform: translate(-50%,-50%) scale(2.8); opacity: 0; }
                                    }
                                `}</style>

                                {/* SVG: pixel-exacte bezier curves, fade naar kaart */}
                                {(drainLines.iron || drainLines.zinc) && (
                                    <svg
                                        className="absolute inset-0 pointer-events-none z-10"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'visible' }}
                                    >
                                        <defs>
                                            {drainLines.iron && (
                                                <linearGradient id="ironGrad" gradientUnits="userSpaceOnUse"
                                                    x1={drainLines.iron.x2} y1={drainLines.iron.y2}
                                                    x2={drainLines.iron.x1} y2={drainLines.iron.y1}>
                                                    <stop offset="0%" stopColor="#a3e635" stopOpacity="0.7" />
                                                    <stop offset="100%" stopColor="#a3e635" stopOpacity="0.08" />
                                                </linearGradient>
                                            )}
                                            {drainLines.zinc && (
                                                <linearGradient id="zincGrad" gradientUnits="userSpaceOnUse"
                                                    x1={drainLines.zinc.x2} y1={drainLines.zinc.y2}
                                                    x2={drainLines.zinc.x1} y2={drainLines.zinc.y1}>
                                                    <stop offset="0%" stopColor="#a3e635" stopOpacity="0.7" />
                                                    <stop offset="100%" stopColor="#a3e635" stopOpacity="0.08" />
                                                </linearGradient>
                                            )}
                                        </defs>
                                        {drainLines.iron && (() => {
                                            const { x1, y1, x2, y2 } = drainLines.iron
                                            const dx = x2 - x1
                                            // Cubic bezier: exit card horizontally, arrive at dot from slight left-above
                                            const d = `M ${x1} ${y1} C ${x1 + dx * 0.55} ${y1}, ${x2 - dx * 0.25} ${y2 - 18}, ${x2} ${y2}`
                                            return (
                                                <path d={d} stroke="url(#ironGrad)" strokeWidth="1" fill="none"
                                                    strokeDasharray="5 3.5" strokeLinecap="round" />
                                            )
                                        })()}
                                        {drainLines.zinc && (() => {
                                            const { x1, y1, x2, y2 } = drainLines.zinc
                                            const dx = x1 - x2
                                            // Cubic bezier: exit card to the left, curve down to outflow dot
                                            const d = `M ${x1} ${y1} C ${x1 - dx * 0.4} ${y1 + 10}, ${x2 + dx * 0.2} ${y2 - 20}, ${x2} ${y2}`
                                            return (
                                                <path d={d} stroke="url(#zincGrad)" strokeWidth="1" fill="none"
                                                    strokeDasharray="5 3.5" strokeLinecap="round" />
                                            )
                                        })()}
                                    </svg>
                                )}

                                {/* Node: ijzer — links */}
                                <motion.div
                                    ref={ironCardRef}
                                    initial={{ opacity: 0, x: -16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                    className="absolute top-[22%] left-[-10px] md:left-[-105px] w-[170px] md:w-[200px] px-5 py-4 rounded-2xl bg-black/95 backdrop-blur-xl border border-lime-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-30"
                                >
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                                        <div className="text-lime-400 text-[9px] font-black uppercase tracking-[0.2em] font-outfit">Validated Node</div>
                                    </div>
                                    <div className="text-white text-base font-black leading-tight uppercase tracking-tight font-outfit mb-1.5">
                                        {t.sections?.s4?.nodes?.iron?.label}
                                    </div>
                                    <div className="text-emerald-100/60 text-xs font-medium leading-relaxed">
                                        {t.sections?.s4?.nodes?.iron?.desc}
                                    </div>
                                    <div className="flex absolute top-1/2 -translate-y-1/2 -right-[14px] text-lime-400">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="rotate-180">
                                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </motion.div>

                                {/* Node: zink — rechts */}
                                <motion.div
                                    ref={zincCardRef}
                                    initial={{ opacity: 0, x: 16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.3, duration: 0.6 }}
                                    className="absolute top-[54%] right-[-10px] md:right-[-105px] w-[170px] md:w-[200px] px-5 py-4 rounded-2xl bg-black/95 backdrop-blur-xl border border-lime-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-30"
                                >
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                                        <div className="text-lime-400 text-[9px] font-black uppercase tracking-[0.2em] font-outfit">Validated Node</div>
                                    </div>
                                    <div className="text-white text-base font-black leading-tight uppercase tracking-tight font-outfit mb-1.5">
                                        {t.sections?.s4?.nodes?.zinc?.label}
                                    </div>
                                    <div className="text-emerald-100/60 text-xs font-medium leading-relaxed">
                                        {t.sections?.s4?.nodes?.zinc?.desc}
                                    </div>
                                    <div className="flex absolute top-1/2 -translate-y-1/2 -left-[14px] text-lime-400">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                    <ScrollButton targetId="s5" />
                </section>

                {/* SECTION 5: CUCUMBER (NODES) */}
                <section id="s5" className="relative h-[100dvh] snap-start snap-always overflow-hidden select-none" style={{ background: 'linear-gradient(160deg, #03080a 0%, #000000 60%)' }}>
                    <div className="w-full h-full relative z-10 flex flex-col items-center justify-center">
                        <InteractiveCucumberHero dict={dict} mode="cucumber" sectionData={t.sections?.s5} />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter hidden md:block">
                        Fruit Data
                    </div>
                    <ScrollButton targetId="s-rapport" />
                </section>

                {/* SECTION RAPPORT: VELDONDERZOEK SAMENVATTING */}
                <section id="s-rapport" className="relative h-[100dvh] snap-start snap-always flex flex-col items-center justify-center overflow-y-auto overflow-x-hidden" style={{ background: 'linear-gradient(160deg, #020608 0%, #000000 60%)' }}>
                    {/* Subtle grid background */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
                        backgroundImage: 'linear-gradient(rgba(132,204,22,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(132,204,22,0.8) 1px, transparent 1px)',
                        backgroundSize: '60px 60px'
                    }} />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(52,255,122,0.04)_0%,transparent_70%)] pointer-events-none" />

                    <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Source label */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px w-8 bg-lime-400/40" />
                                <span className="text-lime-400/60 text-[10px] font-black uppercase tracking-[0.3em] font-outfit">Van Gog Kwekerijen CV · Helmond · 2025–2026</span>
                                <div className="h-px flex-1 bg-lime-400/10" />
                            </div>

                            {/* Title */}
                            <h2 className="font-outfit font-black uppercase text-[34px] md:text-[52px] tracking-tight leading-none text-white mb-3">
                                Praktijk<span className="text-lime-400">resultaten</span>
                            </h2>
                            <p className="text-emerald-100/50 text-sm md:text-base font-light mb-8 max-w-2xl leading-relaxed">
                                65 onafhankelijke laboratoriummetingen · september 2025 – februari 2026 · before/after vergelijking (Kas 3, switch 12 december 2025)
                            </p>

                            {/* 6 Kernresultaten */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                                {[
                                    {
                                        num: '48% → 94%',
                                        label: 'Silicium opname verdubbeld',
                                        sub: 'gietwater stabiel',
                                        color: 'rgba(132,204,22,0.15)',
                                        border: 'rgba(132,204,22,0.3)',
                                        accent: '#84cc16',
                                    },
                                    {
                                        num: '11% → 86%',
                                        label: 'Fosfor opname',
                                        sub: 'bij 45% hogere P-gift via gietwater',
                                        color: 'rgba(52,211,153,0.08)',
                                        border: 'rgba(52,211,153,0.25)',
                                        accent: '#34d399',
                                    },
                                    {
                                        num: '+88%',
                                        label: 'Molybdeen in oud plantsap',
                                        sub: 'direct bewijs ALL12® · bij lagere Mo-gift',
                                        color: 'rgba(52,211,153,0.08)',
                                        border: 'rgba(52,211,153,0.25)',
                                        accent: '#34d399',
                                    },
                                    {
                                        num: '+243%',
                                        label: 'IJzer beschikbaarheid in drain',
                                        sub: '+17% in jong plantsap',
                                        color: 'rgba(132,204,22,0.08)',
                                        border: 'rgba(132,204,22,0.2)',
                                        accent: '#84cc16',
                                    },
                                    {
                                        num: '+46%',
                                        label: 'Zink beschikbaarheid',
                                        sub: '+46% in drain · +46% in oud plantsap',
                                        color: 'rgba(132,204,22,0.08)',
                                        border: 'rgba(132,204,22,0.2)',
                                        accent: '#84cc16',
                                    },
                                    {
                                        num: '−42% / −46%',
                                        label: 'Selectieve ionen-exclusie',
                                        sub: 'Na −42% · Cl −46% in jong blad',
                                        color: 'rgba(99,102,241,0.08)',
                                        border: 'rgba(99,102,241,0.25)',
                                        accent: '#818cf8',
                                    },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
                                        className="rounded-2xl px-5 py-4 flex flex-col gap-1.5"
                                        style={{ background: item.color, border: `1px solid ${item.border}` }}
                                    >
                                        <div className="font-mono font-black text-[22px] md:text-[28px] leading-none" style={{ color: item.accent }}>
                                            {item.num}
                                        </div>
                                        <div className="text-white/85 text-xs md:text-sm font-bold leading-snug">{item.label}</div>
                                        <div className="text-white/35 text-[10px] md:text-xs leading-relaxed">{item.sub}</div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Conclusion quote */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, duration: 0.8 }}
                                className="border-l-2 border-lime-400/40 pl-5 mb-6"
                            >
                                <p className="text-emerald-100/65 text-sm md:text-base leading-relaxed italic">
                                    "De dataset van Van Gog Kwekerijen biedt overtuigend bewijs dat PlantiPower's ALL12® Technology de nutriëntopname van komkommerplanten meetbaar verbetert. De zes kernbevindingen zijn consistent met vier jaar WUR-onderzoek."
                                </p>
                            </motion.div>

                            {/* Methodology footer */}
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] text-white/25 uppercase tracking-[0.15em] font-mono">
                                <span>Methodologie: opname-efficiëntie = (gietwater − drain) / gietwater × 100%</span>
                                <span>·</span>
                                <span>1 meting uitgesloten (9 feb 2026, apparaatstoring)</span>
                                <span>·</span>
                                <span>Sterkste bewijs: Si, Zn, Cu (gietwater stabiel)</span>
                            </div>
                        </motion.div>
                    </div>
                    <ScrollButton targetId="s6" />
                </section>

                {/* SECTION 6: ALL12® TECHNOLOGY */}
                <section id="s6" className="relative h-[100dvh] snap-start snap-always flex flex-col items-center justify-center py-8 overflow-y-auto overflow-x-hidden" style={{ background: 'linear-gradient(160deg, #040d06 0%, #000000 70%)' }}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,255,122,0.05)_0%,transparent_70%)] opacity-50" />

                    <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className="font-outfit font-black uppercase text-[42px] md:text-[64px] tracking-tight leading-none text-white mb-8">
                                {t.sections?.s6?.title}<br />
                                <span className="text-lime-400 italic">{t.sections?.s6?.titleAccent}</span>
                            </h2>
                            <p className="text-lg md:text-xl text-emerald-100/60 leading-relaxed font-light max-w-3xl mx-auto mb-12">
                                {t.sections?.s6?.desc}
                            </p>

                            {/* Nutrients grid */}
                            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-13 gap-3 mb-10">
                                {[...(t.sections?.s6?.nutrients || []), "Si"].map((nutrient: string, i: number) => (
                                    <motion.div
                                        key={nutrient}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="aspect-square flex items-center justify-center rounded-xl transition-all duration-300"
                                        style={{
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid rgba(255,255,255,0.14)',
                                        }}
                                    >
                                        <span className="text-lg font-black text-white/75">{nutrient}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex flex-col items-center gap-8">
                                <a
                                    href={`/${lang}/contact`}
                                    className="px-10 py-5 bg-[#84cc16] text-[#0c0f0f] font-black uppercase tracking-widest text-sm rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105"
                                >
                                    Vraag het volledige rapport aan →
                                </a>
                            </div>
                        </motion.div>
                    </div>
                    <ScrollButton targetId="s7" />
                </section>

                {/* SECTION 7: PRODUCT CTA */}
                <section id="s7" className="relative h-[100dvh] snap-start snap-always flex flex-col items-center justify-center bg-black overflow-hidden">

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
                            {t.sections?.s7?.title}<br />
                            <span className="text-lime-400 italic">{t.sections?.s7?.titleAccent}</span>
                        </h2>
                        <p className="text-base text-emerald-100/55 leading-relaxed font-light mb-8">
                            {t.sections?.s7?.desc}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <a
                                href={`/${lang}/plantipower-all12`}
                                className="px-9 py-4 bg-lime-400 text-black font-black uppercase tracking-widest text-sm rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105"
                            >
                                {t.sections?.s7?.btnProduct}
                            </a>
                            <a
                                href={`/${lang}/contact`}
                                className="px-9 py-4 bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-sm rounded-full hover:border-lime-400 hover:text-lime-400 transition-all duration-300 transform hover:scale-105"
                            >
                                {t.sections?.s7?.btnSample}
                            </a>
                        </div>
                    </motion.div>
                </section>

                <ContactForm dict={dict} lang={lang} />
            </main>
        </ClientLayout>
    );
}
