'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Hotspot {
    id: string;
    x: number;
    y: number;
    label: string;
    desc: string;
    align: 'left' | 'right';
    delay: number;
}

interface InteractiveCucumberHeroProps {
    dict: any;
    mode: 'header' | 'plant' | 'roots' | 'cucumber';
    sectionData?: any;
}

const InteractiveCucumberHero: React.FC<InteractiveCucumberHeroProps> = ({ mode, sectionData }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const getSectionAssets = () => {
        switch (mode) {
            case 'header':
                return {
                    image: "/images/komkommer_hero2.png",
                    hotspots: [] as Hotspot[],
                    maxWidth: "max-w-[1400px]",
                    imgHeight: '100%',
                    objectFit: 'cover' as const,
                    // Strong fade on all edges — image blends into black background
                    mask: 'radial-gradient(ellipse 80% 78% at center 45%, black 20%, transparent 100%)',
                    gradientTop: '18%',
                    gradientBottom: '22%',
                };
            case 'plant':
                return {
                    image: "/cucumber-plant-provided.png",
                    maxWidth: "max-w-[1600px]",
                    imgHeight: '107vh',
                    // Wide ellipse — edges fade softly into black
                    mask: 'radial-gradient(ellipse 85% 90% at center, black 55%, transparent 100%)',
                    // Smaller top/bottom gradients so top leaf stays visible after crop
                    gradientTop: '8%',
                    gradientBottom: '18%',
                    hotspots: [
                        // Bovenste blad → silicium in celwand van blad
                        { id: 'silicon', x: 46, y: 8, label: sectionData?.nodes?.silicon?.label, desc: sectionData?.nodes?.silicon?.desc, align: 'left' as const, delay: 0.8 },
                        // Jong blad halverwege rechts → +38% silicium
                        { id: 'siliconLeaf', x: 60, y: 30, label: sectionData?.nodes?.siliconLeaf?.label, desc: sectionData?.nodes?.siliconLeaf?.desc, align: 'right' as const, delay: 1.5 },
                        // Stengel midden → molybdeen (vaatbundels)
                        { id: 'molybdenum', x: 43, y: 52, label: sectionData?.nodes?.molybdenum?.label, desc: sectionData?.nodes?.molybdenum?.desc, align: 'left' as const, delay: 2.2 },
                        // Onderstengel/wortelzone → fosfor opname
                        { id: 'phosphorus', x: 56, y: 71, label: sectionData?.nodes?.phosphorus?.label, desc: sectionData?.nodes?.phosphorus?.desc, align: 'right' as const, delay: 2.9 },
                    ]
                };
            case 'roots':
                return {
                    image: "/wortels1.png",
                    maxWidth: "max-w-[950px]",
                    imgHeight: '75vh',
                    mask: 'radial-gradient(ellipse 80% 75% at center, black 50%, transparent 100%)',
                    overlay: true,
                    hotspots: [
                        { id: 'iron', x: 40, y: 42, label: sectionData?.nodes?.iron?.label, desc: sectionData?.nodes?.iron?.desc, align: 'left' as const, delay: 0.8 },
                        { id: 'zinc', x: 62, y: 52, label: sectionData?.nodes?.zinc?.label, desc: sectionData?.nodes?.zinc?.desc, align: 'right' as const, delay: 1.5 },
                        { id: 'mobilization', x: 50, y: 70, label: sectionData?.nodes?.mobilization?.label, desc: sectionData?.nodes?.mobilization?.desc, align: 'left' as const, delay: 2.2 },
                    ],
                };
            case 'cucumber':
                return {
                    image: "/komkommer los.png",
                    maxWidth: "max-w-[900px]",
                    imgHeight: '62vh',
                    mask: 'radial-gradient(ellipse 80% 70% at center 40%, black 50%, transparent 100%)',
                    hotspots: [
                        // Brix — links bovenaan (kwaliteit vrucht, tip komkommer)
                        { id: 'brix',      x: 34, y: 22, label: sectionData?.nodes?.brix?.label,      desc: sectionData?.nodes?.brix?.desc,      align: 'left' as const,  delay: 0.8 },
                        // Ionen-exclusie — rechts bovenaan (plant-niveau, niet vrucht)
                        { id: 'exclusion', x: 66, y: 30, label: sectionData?.nodes?.exclusion?.label,  desc: sectionData?.nodes?.exclusion?.desc,  align: 'right' as const, delay: 1.5 },
                        // Zink oud blad — links onderaan
                        { id: 'zincOld',   x: 34, y: 68, label: sectionData?.nodes?.zincOld?.label,   desc: sectionData?.nodes?.zincOld?.desc,   align: 'left' as const,  delay: 2.2 },
                        // Molybdeen — rechts onderaan
                        { id: 'molyOld',   x: 66, y: 76, label: sectionData?.nodes?.molyOld?.label,   desc: sectionData?.nodes?.molyOld?.desc,   align: 'right' as const, delay: 2.9 },
                    ]
                };
            default:
                return { image: "/cucumber-plant-provided.png", hotspots: [] as Hotspot[], maxWidth: "max-w-[700px]", imgHeight: '50vh', mask: 'none' };
        }
    };

    const assets = getSectionAssets();

    if (!mounted) return (
        <div className={`relative w-full ${mode === 'header' ? 'h-auto py-8' : 'h-full'} flex items-center justify-center`}>
            <img
                src={assets.image}
                alt=""
                className="w-full object-contain mx-auto"
                style={{
                    maskImage: assets.mask,
                    WebkitMaskImage: assets.mask,
                    height: assets.imgHeight,
                    mixBlendMode: 'screen',
                }}
            />
        </div>
    );

    // ─── MOBILE LAYOUT ───────────────────────────────────────────────────────────
    // 2 cards top + image (flex-1) + 2 cards bottom — sandwich layout
    if (isMobile && mode !== 'header' && assets.hotspots.length > 0) {
        const topSpots = assets.hotspots.slice(0, 2);
        const bottomSpots = assets.hotspots.slice(2, 4);

        const renderCard = (spot: Hotspot, i: number, fromBottom: boolean) => (
            <motion.div
                key={spot.id}
                initial={{ opacity: 0, y: fromBottom ? 12 : -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                className="px-3 py-2.5 rounded-2xl bg-black/95 backdrop-blur-xl border border-lime-500/40 flex flex-col"
            >
                {/* Connector line toward image */}
                {fromBottom && (
                    <div className="flex justify-center mb-2">
                        <div className="w-[2px] h-4 rounded-full bg-lime-400/60"></div>
                    </div>
                )}
                <div className="flex items-center gap-1.5 mb-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-lime-400 flex-none"></div>
                    <div className="text-lime-400 text-[9px] font-black uppercase tracking-widest font-outfit">Validated Node</div>
                </div>
                <div className="text-white text-[12px] font-black leading-tight uppercase tracking-tight font-outfit mb-1">
                    {spot.label}
                </div>
                <div className="text-white/65 text-[10px] leading-relaxed">
                    {spot.desc}
                </div>
                {/* Connector line toward image */}
                {!fromBottom && (
                    <div className="flex justify-center mt-2">
                        <div className="w-[2px] h-4 rounded-full bg-lime-400/60"></div>
                    </div>
                )}
            </motion.div>
        );

        return (
            <div ref={containerRef} className="relative w-full flex flex-col overflow-hidden" style={{ height: 'calc(100svh - 7rem)' }}>

                {/* Top 2 cards */}
                <div className="flex-none px-3 pt-3 pb-1 grid grid-cols-2 gap-2">
                    {topSpots.map((spot, i) => renderCard(spot, i, false))}
                </div>

                {/* Image — fills remaining space */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex-1 min-h-0 w-full"
                >
                    {/* Absolute fill — img + overlay + dots all share the same coordinate space */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <img
                            src={assets.image}
                            alt="Technical Analysis"
                            style={{
                                height: '100%',
                                width: 'auto',
                                maskImage: assets.mask,
                                WebkitMaskImage: assets.mask,
                                mixBlendMode: 'screen' as const,
                            }}
                        />
                        {(assets as any).overlay && (
                            <div
                                className="absolute inset-x-0 bottom-0 h-[30%] pointer-events-none z-20"
                                style={{ background: 'linear-gradient(to top, #0c0f0f 0%, transparent 100%)' }}
                            />
                        )}
                        {/* Dots */}
                        {assets.hotspots.map((spot) => (
                            <motion.div
                                key={spot.id}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: spot.delay, duration: 0.4 }}
                                className="absolute z-20"
                                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                            >
                                <div className="absolute w-5 h-5 rounded-full bg-white/25 animate-ping -translate-x-1/2 -translate-y-1/2"></div>
                                <div className="absolute w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_white] -translate-x-1/2 -translate-y-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom 2 cards */}
                <div className="flex-none px-3 pt-1 pb-3 grid grid-cols-2 gap-2">
                    {bottomSpots.map((spot, i) => renderCard(spot, i, true))}
                </div>
            </div>
        );
    }

    // ─── DESKTOP / HEADER LAYOUT ─────────────────────────────────────────────────
    return (
        <div
            ref={containerRef}
            className={`relative w-full ${mode === 'header' ? 'h-full' : 'h-full'} flex flex-col items-center justify-center overflow-visible select-none`}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={true ?{ opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={`relative z-10 w-full ${assets.maxWidth} ${mode === 'header' ? 'h-full' : ''}`}
            >
                {/* Outer div = positioning context for hotspots */}
                <div
                    className="relative"
                    style={mode === 'plant' ? { height: '100vh' } : mode === 'header' ? { height: '100%' } : {}}
                >
                    {/* Image container */}
                    <div style={mode === 'plant'
                        ? { position: 'absolute', inset: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }
                        : mode === 'header'
                        ? { position: 'absolute', inset: 0, overflow: 'hidden' }
                        : { position: 'relative' }
                    }>
                        <img
                            src={assets.image}
                            alt="Technical Analysis"
                            className="w-full mx-auto"
                            style={{
                                objectFit: (assets as any).objectFit ?? 'contain',
                                maskImage: assets.mask,
                                WebkitMaskImage: assets.mask,
                                height: assets.imgHeight,
                                mixBlendMode: 'screen',
                            }}
                        />
                        {/* Gradient overlays — hide photo edges on all sides */}
                        <div className="absolute inset-y-0 left-0 w-[22%] bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
                        <div className="absolute inset-y-0 right-0 w-[22%] bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
                        <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"
                            style={{ height: (assets as any).gradientTop ?? '25%' }} />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"
                            style={{ height: (assets as any).gradientBottom ?? '25%' }} />

                        {/* Bottom gradient overlay (roots only) */}
                        {(assets as any).overlay && (
                            <div
                                className="absolute inset-x-0 bottom-0 h-[28%] pointer-events-none z-20"
                                style={{ background: 'linear-gradient(to top, #0c0f0f 0%, transparent 100%)' }}
                            />
                        )}
                    </div>

                    {/* Hotspots — desktop only */}
                    {assets.hotspots.map((spot) => (
                        <div
                            key={spot.id}
                            className="absolute z-20"
                            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                        >
                            {/* Pulse dot */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={true ?{ scale: 1, opacity: 1 } : {}}
                                transition={{ delay: spot.delay, duration: 0.5 }}
                                className="relative flex items-center justify-center"
                            >
                                <div className="absolute w-8 h-8 rounded-full bg-white/25 animate-ping"></div>
                                <div className="absolute w-4 h-4 rounded-full bg-white shadow-[0_0_15px_white]"></div>
                            </motion.div>

                            {/* Connecting line */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={true ?{ width: 220 } : { width: 0 }}
                                transition={{ delay: spot.delay + 0.3, duration: 0.7 }}
                                className={`
                                    absolute top-1/2 h-[1px]
                                    ${spot.align === 'left'
                                        ? 'right-full bg-gradient-to-l from-white/50 to-lime-400/30'
                                        : 'left-full bg-gradient-to-r from-white/50 to-lime-400/30'}
                                `}
                            />

                            {/* Info card */}
                            <motion.div
                                initial={{ opacity: 0, x: spot.align === 'left' ? -16 : 16 }}
                                animate={true ?{ opacity: 1, x: 0 } : {}}
                                transition={{ delay: spot.delay + 0.6, duration: 0.6 }}
                                className={`
                                    absolute top-1/2 -translate-y-1/2
                                    ${spot.align === 'left' ? 'right-full mr-[232px]' : 'left-full ml-[232px]'}
                                    px-5 py-4 rounded-2xl bg-black/95 backdrop-blur-xl border border-lime-500/40
                                    shadow-[0_20px_50px_rgba(0,0,0,0.8)]
                                    w-[300px] xl:w-[360px]
                                    z-30
                                `}
                            >
                                <div className="flex items-center gap-2 mb-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-lime-400"></div>
                                    <div className="text-lime-400 text-[9px] font-black uppercase tracking-[0.2em] font-outfit">Validated Node</div>
                                </div>
                                <div className="text-white text-base lg:text-lg font-black leading-tight uppercase tracking-tight font-outfit">
                                    {spot.label}
                                </div>
                                <div className="text-emerald-100/60 text-xs mt-2 font-medium leading-relaxed">
                                    {spot.desc}
                                </div>

                                {/* Arrow chevron pointing toward hotspot */}
                                <div className={`flex absolute top-1/2 -translate-y-1/2 ${spot.align === 'right' ? '-left-3' : '-right-3'} text-lime-400`}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={spot.align === 'right' ? '' : 'rotate-180'}>
                                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>{/* end outer positioning div */}
            </motion.div>
        </div>
    );
};

export default InteractiveCucumberHero;
