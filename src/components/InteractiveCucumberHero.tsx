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

interface SectionAssets {
    image: string;
    hotspots: Hotspot[];
    maxWidth: string;
    imgHeight: string;
    objectFit?: 'contain' | 'cover';
    mask: string;
    gradientTop?: string;
    gradientBottom?: string;
    captionText?: string;
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

    const getSectionAssets = (): SectionAssets => {
        switch (mode) {
            case 'header':
                return {
                    image: "/images/komkommer_hero2_nobg.png",
                    hotspots: [],
                    maxWidth: "max-w-[1400px]",
                    imgHeight: '100%',
                    objectFit: 'contain',
                    mask: 'none',
                    gradientTop: '0%',
                    gradientBottom: '0%',
                };
            case 'plant':
                return {
                    image: "/images/komkommers10_nobg.png",
                    maxWidth: "max-w-[1600px]",
                    imgHeight: 'calc(100dvh - 120px)',
                    mask: 'none',
                    gradientTop: '0%',
                    gradientBottom: '0%',
                    hotspots: [
                        { id: 'silicon',     x: 52, y: 14, label: sectionData?.nodes?.silicon?.label,     desc: sectionData?.nodes?.silicon?.desc,     align: 'left',  delay: 0.8 },
                        { id: 'siliconLeaf', x: 62, y: 28, label: sectionData?.nodes?.siliconLeaf?.label, desc: sectionData?.nodes?.siliconLeaf?.desc, align: 'right', delay: 1.5 },
                        { id: 'molybdenum',  x: 50, y: 55, label: sectionData?.nodes?.molybdenum?.label,  desc: sectionData?.nodes?.molybdenum?.desc,  align: 'left',  delay: 2.2 },
                        { id: 'phosphorus',  x: 56, y: 71, label: sectionData?.nodes?.phosphorus?.label,  desc: sectionData?.nodes?.phosphorus?.desc,  align: 'right', delay: 2.9 },
                        { id: 'zincOld',     x: 38, y: 65, label: sectionData?.nodes?.zincOld?.label,     desc: sectionData?.nodes?.zincOld?.desc,     align: 'left',  delay: 3.6 },
                        { id: 'molyOld',     x: 62, y: 70, label: sectionData?.nodes?.molyOld?.label,     desc: sectionData?.nodes?.molyOld?.desc,     align: 'right', delay: 4.3 },
                    ]
                };
            case 'roots':
                return {
                    image: "/images/komkommers10_roots.png",
                    maxWidth: "max-w-[700px]",
                    imgHeight: 'calc(70dvh - 40px)',
                    mask: 'linear-gradient(to bottom, transparent 0%, black 15%, black 90%, transparent 100%)',
                    gradientTop: '0%',
                    gradientBottom: '0%',
                    hotspots: [
                        { id: 'iron',         x: 42, y: 55, label: sectionData?.nodes?.iron?.label,         desc: sectionData?.nodes?.iron?.desc,         align: 'left',  delay: 0.8 },
                        { id: 'zinc',         x: 60, y: 50, label: sectionData?.nodes?.zinc?.label,         desc: sectionData?.nodes?.zinc?.desc,          align: 'right', delay: 1.5 },
                        { id: 'mobilization', x: 55, y: 72, label: sectionData?.nodes?.mobilization?.label, desc: sectionData?.nodes?.mobilization?.desc, align: 'right', delay: 2.2 },
                    ],
                };
            case 'cucumber':
                return {
                    image: "/komkommer los.png",
                    maxWidth: "max-w-[900px]",
                    imgHeight: 'calc(75dvh - 80px)',
                    mask: 'radial-gradient(ellipse 80% 70% at center 40%, black 50%, transparent 100%)',
                    gradientTop: '0%',
                    gradientBottom: '0%',
                    captionText: 'PlantiPower helpt de plant niet alleen voedingsstoffen efficiënter op te nemen, maar ook weerbaarder te worden tegen zoutstress.',
                    hotspots: [
                        { id: 'brix',      x: 44, y: 46, label: sectionData?.nodes?.brix?.label,      desc: sectionData?.nodes?.brix?.desc,      align: 'left',  delay: 0.8 },
                        { id: 'exclusion', x: 68, y: 42, label: sectionData?.nodes?.exclusion?.label, desc: sectionData?.nodes?.exclusion?.desc, align: 'right', delay: 1.5 },
                    ]
                };
            default:
                return { image: "/cucumber-plant-provided.png", hotspots: [], maxWidth: "max-w-[700px]", imgHeight: '50vh', mask: 'none' };
        }
    };

    const assets = getSectionAssets();

    if (!mounted) return null;

    // ─── HEADER MODE ─────────────────────────────────────────────────────────────
    if (mode === 'header') {
        return (
            <div className="w-full h-full flex items-end justify-center relative">
                {/* Groene spotlight achter de plant */}
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 85%, rgba(100,220,60,0.22) 0%, rgba(60,180,40,0.12) 40%, transparent 75%)' }}
                />
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse 40% 40% at 50% 90%, rgba(140,255,80,0.15) 0%, transparent 60%)' }}
                />
                {/* Grondreflectie / schaduw */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
                    style={{
                        width: '60%',
                        height: '80px',
                        background: 'radial-gradient(ellipse at 50% 100%, rgba(80,200,40,0.18) 0%, rgba(40,120,20,0.08) 50%, transparent 100%)',
                        filter: 'blur(12px)',
                    }}
                />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
                    style={{
                        width: '35%',
                        height: '30px',
                        background: 'radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.7) 0%, transparent 100%)',
                        filter: 'blur(8px)',
                    }}
                />
                <img
                    src={assets.image}
                    alt="Komkommer hero"
                    style={{
                        height: '100%',
                        width: 'auto',
                        objectFit: 'contain',
                        position: 'relative',
                        zIndex: 1,
                    }}
                />
            </div>
        );
    }

    // ─── MOBILE LAYOUT ───────────────────────────────────────────────────────────
    if (isMobile && assets.hotspots.length > 0) {
        return (
            <div ref={containerRef} className="w-full flex flex-col items-center pb-8">
                {/* Image */}
                <div className="w-full flex items-center justify-center">
                    <img
                        src={assets.image}
                        alt="Technical Analysis"
                        style={{ maxHeight: '50vh', width: 'auto', objectFit: 'contain' }}
                    />
                </div>

                {/* Cards stacked below — full width, no dots/lines */}
                <div className="w-full px-4 flex flex-col gap-3 mt-4">
                    {assets.hotspots.map((spot, i) => (
                        <motion.div
                            key={spot.id}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                            className="w-full px-4 py-3 rounded-2xl bg-black/95 backdrop-blur-xl border border-lime-500/40"
                        >

                            <div className="flex items-center gap-1.5 mb-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-lime-400 flex-none" />
                                <div className="text-lime-400 text-[9px] font-black uppercase tracking-widest font-outfit">Validated Node</div>
                            </div>
                            <div className="text-white text-sm font-black leading-tight uppercase tracking-tight font-outfit mb-1">
                                {spot.label}
                            </div>
                            <div className="text-white/65 text-xs leading-relaxed">
                                {spot.desc}
                            </div>
                        </motion.div>
                    ))}
                    {assets.captionText && (
                        <p className="text-center text-xs text-emerald-100/45 leading-relaxed italic px-2 mt-2">
                            {assets.captionText}
                        </p>
                    )}
                </div>
            </div>
        );
    }

    // ─── DESKTOP LAYOUT ──────────────────────────────────────────────────────────
    return (
        <div
            ref={containerRef}
            className="relative w-full h-full flex flex-col items-center justify-center overflow-visible select-none"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={`relative z-10 w-full ${assets.maxWidth}`}
            >
                {/* Outer div = positioning context for hotspots */}
                <div
                    className="relative"
                    style={mode === 'plant' ? { height: '100dvh' } : {}}
                >
                    {/* Image container */}
                    <div style={mode === 'plant'
                        ? { position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '80px' }
                        : { position: 'relative' }
                    }>
                        {(mode === 'plant' || mode === 'roots') && (
                            <div className="absolute inset-0 pointer-events-none" style={{
                                background: 'radial-gradient(ellipse 55% 70% at 50% 45%, rgba(120,220,80,0.12) 0%, rgba(60,180,60,0.06) 40%, transparent 70%)',
                            }} />
                        )}
                        {mode === 'cucumber' && (
                            <>
                                <div className="absolute inset-0 pointer-events-none" style={{
                                    background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(163,230,53,0.18) 0%, rgba(74,222,128,0.08) 50%, transparent 70%)',
                                }} />
                                <div className="absolute inset-0 pointer-events-none" style={{
                                    background: 'radial-gradient(ellipse 40% 50% at 50% 0%, rgba(200,255,150,0.10) 0%, transparent 60%)',
                                }} />
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[20px] pointer-events-none" style={{
                                    background: 'radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.6) 0%, transparent 100%)',
                                    filter: 'blur(8px)',
                                }} />
                            </>
                        )}
                        <img
                            src={assets.image}
                            alt="Technical Analysis"
                            className="w-full mx-auto"
                            style={{
                                objectFit: assets.objectFit ?? 'contain',
                                maskImage: assets.mask,
                                WebkitMaskImage: assets.mask,
                                height: assets.imgHeight,
                                mixBlendMode: (mode === 'plant' || mode === 'roots' || mode === 'cucumber') ? 'normal' : 'screen',
                            }}
                        />
                        <div className="absolute inset-y-0 left-0 w-[22%] bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
                        <div className="absolute inset-y-0 right-0 w-[22%] bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
                        <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"
                            style={{ height: assets.gradientTop ?? '25%' }} />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"
                            style={{ height: assets.gradientBottom ?? '25%' }} />
                    </div>

                    {/* Hotspots */}
                    {assets.hotspots.map((spot) => (
                        <div
                            key={spot.id}
                            className="absolute z-20"
                            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                        >
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: spot.delay, duration: 0.5 }}
                                className="relative flex items-center justify-center"
                            >
                                <div className="absolute w-8 h-8 rounded-full bg-white/25 animate-ping" />
                                <div className="absolute w-4 h-4 rounded-full bg-white shadow-[0_0_15px_white]" />
                            </motion.div>


                            <motion.div
                                initial={{ opacity: 0, x: spot.align === 'left' ? -16 : 16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: spot.delay + 0.6, duration: 0.6 }}
                                className={`
                                    absolute top-1/2 -translate-y-1/2
                                    ${spot.align === 'left' ? 'right-full mr-6' : 'left-full ml-6'}
                                    px-5 py-4 rounded-2xl bg-black/95 backdrop-blur-xl border border-lime-500/40
                                    shadow-[0_20px_50px_rgba(0,0,0,0.8)]
                                    w-[200px] xl:w-[240px] z-30
                                `}
                            >
                                <div className="flex items-center gap-2 mb-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                                    <div className="text-lime-400 text-[9px] font-black uppercase tracking-[0.2em] font-outfit">Validated Node</div>
                                </div>
                                <div className="text-white text-base lg:text-lg font-black leading-tight uppercase tracking-tight font-outfit">
                                    {spot.label}
                                </div>
                                <div className="text-emerald-100/60 text-xs mt-2 font-medium leading-relaxed">
                                    {spot.desc}
                                </div>
                                <div className={`flex absolute top-1/2 -translate-y-1/2 ${spot.align === 'right' ? '-left-3' : '-right-3'} text-lime-400`}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={spot.align === 'right' ? '' : 'rotate-180'}>
                                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </motion.div>
                        </div>
                    ))}

                    {/* Caption text — cucumber section */}
                    {assets.captionText && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-xl text-center px-6 z-30">
                            <p className="text-sm text-emerald-100/45 leading-relaxed italic">
                                {assets.captionText}
                            </p>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default InteractiveCucumberHero;
