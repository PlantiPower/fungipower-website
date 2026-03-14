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
    gap?: 'default' | 'wide';
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
    const [expandedCard, setExpandedCard] = useState<string | null>(null);

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
                    image: "/images/komkommer_final.png",
                    maxWidth: "max-w-[1800px]",
                    imgHeight: 'calc(94dvh - 40px)',
                    mask: 'none',
                    gradientTop: '0%',
                    gradientBottom: '0%',
                    hotspots: [
                        { id: 'silicon',     x: 44, y: 24, label: sectionData?.nodes?.silicon?.label,     desc: sectionData?.nodes?.silicon?.desc,     align: 'left',  delay: 0.8, gap: 'wide' },
                        { id: 'siliconLeaf', x: 62, y: 28, label: sectionData?.nodes?.siliconLeaf?.label, desc: sectionData?.nodes?.siliconLeaf?.desc, align: 'right', delay: 1.5 },
                        { id: 'molybdenum',  x: 50, y: 45, label: sectionData?.nodes?.molybdenum?.label,  desc: sectionData?.nodes?.molybdenum?.desc,  align: 'left',  delay: 2.2 },
                        { id: 'phosphorus',  x: 56, y: 62, label: sectionData?.nodes?.phosphorus?.label,  desc: sectionData?.nodes?.phosphorus?.desc,  align: 'right', delay: 2.9 },
                        { id: 'zincOld',     x: 38, y: 68, label: sectionData?.nodes?.zincOld?.label,     desc: sectionData?.nodes?.zincOld?.desc,     align: 'left',  delay: 3.6 },
                        { id: 'molyOld',     x: 62, y: 79, label: sectionData?.nodes?.molyOld?.label,     desc: sectionData?.nodes?.molyOld?.desc,     align: 'right', delay: 4.3 },
                    ]
                };
            case 'roots':
                return {
                    image: "/images/wortels_final.png",
                    maxWidth: "max-w-[1600px]",
                    imgHeight: 'calc(94dvh - 40px)',
                    mask: 'radial-gradient(ellipse 62% 62% at 50% 58%, black 20%, transparent 100%)',
                    gradientTop: '38%',
                    gradientBottom: '22%',
                    hotspots: [
                        { id: 'mobilization', x: 48, y: 52, label: sectionData?.nodes?.mobilization?.label, desc: sectionData?.nodes?.mobilization?.desc, align: 'left',  delay: 0.8 },
                        { id: 'uptake',       x: 58, y: 38, label: sectionData?.nodes?.uptake?.label,       desc: sectionData?.nodes?.uptake?.desc,       align: 'right', delay: 1.5 },
                        { id: 'rhizosphere',  x: 52, y: 70, label: sectionData?.nodes?.rhizosphere?.label,  desc: sectionData?.nodes?.rhizosphere?.desc,  align: 'right', delay: 2.2 },
                    ],
                };
            case 'cucumber':
                return {
                    image: "/komkommer los.png",
                    maxWidth: "max-w-[900px]",
                    imgHeight: 'calc(75dvh - 80px)',
                    mask: 'radial-gradient(ellipse 90% 80% at center 38%, black 35%, rgba(0,0,0,0.6) 65%, transparent 90%)',
                    gradientTop: '0%',
                    gradientBottom: '22%',
                    captionText: 'PlantiPower helpt de plant niet alleen voedingsstoffen efficiënter op te nemen, maar ook weerbaarder te worden tegen zoutstress.',
                    hotspots: [
                        { id: 'brix',      x: 44, y: 46, label: sectionData?.nodes?.brix?.label,      desc: sectionData?.nodes?.brix?.desc,      align: 'left',  delay: 0.8 },
                        { id: 'exclusion', x: 68, y: 60, label: sectionData?.nodes?.exclusion?.label, desc: sectionData?.nodes?.exclusion?.desc, align: 'right', delay: 1.5 },
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
            <div className="w-full h-full flex items-end justify-center relative pb-[12px]">
                {/* Groene spotlight achter de plant */}
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 85%, rgba(100,220,60,0.22) 0%, rgba(60,180,40,0.12) 40%, transparent 75%)' }}
                />
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse 40% 40% at 50% 90%, rgba(140,255,80,0.15) 0%, transparent 60%)' }}
                />
                {/* Mirror reflection — flipped plant fading into the floor */}
                <img
                    src={assets.image}
                    alt=""
                    aria-hidden="true"
                    style={{
                        position: 'absolute',
                        bottom: '12px',
                        left: '50%',
                        transform: 'translateX(-50%) scaleY(-1)',
                        height: '62%',
                        width: 'auto',
                        objectFit: 'contain',
                        opacity: 0.28,
                        maskImage: 'linear-gradient(to bottom, black 0%, transparent 22%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 22%)',
                        filter: 'blur(3px)',
                        zIndex: 0,
                        pointerEvents: 'none',
                    }}
                />
                {/* Floor sheen — bright line where plant meets ground */}
                <div className="absolute pointer-events-none" style={{
                    bottom: '12px',
                    left: '10%',
                    right: '10%',
                    height: '2px',
                    background: 'linear-gradient(to right, transparent, rgba(140,255,100,0.28) 20%, rgba(200,255,160,0.55) 50%, rgba(140,255,100,0.28) 80%, transparent)',
                    zIndex: 2,
                }} />
                {/* Contact shadow — dark ellipse at base */}
                <div className="absolute pointer-events-none" style={{
                    bottom: '8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '38%',
                    height: '24px',
                    background: 'radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.90) 0%, transparent 100%)',
                    filter: 'blur(8px)',
                    zIndex: 3,
                }} />
                {/* Green ambient glow at base */}
                <div className="absolute pointer-events-none" style={{
                    bottom: '0px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '70%',
                    height: '90px',
                    background: 'radial-gradient(ellipse at 50% 100%, rgba(80,200,40,0.30) 0%, rgba(40,120,20,0.12) 55%, transparent 100%)',
                    filter: 'blur(16px)',
                    zIndex: 1,
                }} />
                <img
                    src={assets.image}
                    alt="Komkommer hero"
                    style={{
                        height: '62%',
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
        // Split hotspots: top half vs bottom half of image, sorted left-to-right
        const topSpots = assets.hotspots.filter(s => s.y < 50).sort((a, b) => a.x - b.x)
        const bottomSpots = assets.hotspots.filter(s => s.y >= 50).sort((a, b) => a.x - b.x)

        const renderCard = (spot: Hotspot, dir: 'down' | 'up', i: number) => (
            <motion.div
                key={spot.id}
                initial={{ opacity: 0, y: dir === 'down' ? -8 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.45 }}
                className="flex-1 relative px-2.5 py-2 rounded-xl bg-black/95 border border-lime-500/40 active:border-lime-400/70 cursor-pointer"
                style={{ minWidth: 0 }}
                onClick={() => setExpandedCard(spot.id)}
            >
                <div className="flex items-center gap-1 mb-0.5">
                    <div className="w-1 h-1 rounded-full bg-lime-400 flex-none" />
                    <span className="text-lime-400 text-[7px] font-black uppercase tracking-wider font-outfit">Node</span>
                </div>
                <div className="text-white text-[10px] font-black leading-snug uppercase tracking-tight font-outfit mb-0.5 line-clamp-2">
                    {spot.label}
                </div>
                <div className="text-white/55 text-[9px] leading-relaxed line-clamp-2">
                    {spot.desc}
                </div>
                {/* Tap hint */}
                <div className="absolute top-1.5 right-2 text-lime-400/40">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M4 1v6M1 4h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                </div>
                {/* Chevron pointing toward plant */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 text-lime-400/60"
                    style={{ [dir === 'down' ? 'bottom' : 'top']: '-14px' }}
                >
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none"
                        style={{ transform: dir === 'up' ? 'rotate(180deg)' : undefined }}>
                        <path d="M1 1L6 7L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </motion.div>
        )

        return (
            <div ref={containerRef} className="w-full h-full flex flex-col overflow-hidden select-none">

                {/* TOP CARDS */}
                {topSpots.length > 0 && (
                    <div className="flex gap-1.5 px-3 pt-3 flex-none">
                        {topSpots.map((spot, i) => renderCard(spot, 'down', i))}
                    </div>
                )}

                {/* CONNECTOR: top cards → plant */}
                {topSpots.length > 0 && (
                    <div className="flex gap-1.5 px-3 flex-none h-5">
                        {topSpots.map(spot => (
                            <div key={spot.id} className="flex-1 flex justify-center items-stretch">
                                <div style={{ width: '1px', background: 'rgba(163,230,53,0.35)' }} />
                            </div>
                        ))}
                    </div>
                )}

                {/* PLANT IMAGE with hotspot dots */}
                <div className="flex-1 relative flex items-center justify-center min-h-0 overflow-hidden">
                    {(mode === 'plant' || mode === 'roots') && (
                        <div className="absolute inset-0 pointer-events-none" style={{
                            background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(100,220,80,0.09) 0%, transparent 70%)',
                        }} />
                    )}
                    <div className="relative h-full flex items-center justify-center">
                        <img
                            src={assets.image}
                            alt="Technical Analysis"
                            style={{
                                height: 'auto',
                                maxHeight: '100%',
                                width: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                                mixBlendMode: 'screen',
                            }}
                        />
                        {/* Roots: zacht verloop bovenaan naar donker */}
                        {mode === 'roots' && (
                            <div className="absolute inset-x-0 top-0 pointer-events-none z-10"
                                style={{ height: '35%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 45%, transparent 100%)' }}
                            />
                        )}
                        {/* Hotspot dots on plant */}
                        {assets.hotspots.map(spot => (
                            <div
                                key={`dot-${spot.id}`}
                                className="absolute z-10"
                                style={{
                                    left: `${spot.x}%`,
                                    top: `${spot.y}%`,
                                    transform: 'translate(-50%, -50%)',
                                }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    width: 20, height: 20,
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.18)',
                                    top: '50%', left: '50%',
                                    transform: 'translate(-50%,-50%)',
                                    animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite',
                                }} />
                                <div style={{
                                    width: 10, height: 10,
                                    borderRadius: '50%',
                                    background: 'white',
                                    boxShadow: '0 0 8px 2px rgba(255,255,255,0.55)',
                                    position: 'relative', zIndex: 1,
                                }} />
                            </div>
                        ))}
                        {/* Bottom gradient */}
                        {assets.gradientBottom && assets.gradientBottom !== '0%' && (
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent pointer-events-none"
                                style={{ height: assets.gradientBottom }} />
                        )}
                    </div>
                </div>

                {/* CONNECTOR: plant → bottom cards */}
                {bottomSpots.length > 0 && (
                    <div className="flex gap-1.5 px-3 flex-none h-5">
                        {bottomSpots.map(spot => (
                            <div key={spot.id} className="flex-1 flex justify-center items-stretch">
                                <div style={{ width: '1px', background: 'rgba(163,230,53,0.35)' }} />
                            </div>
                        ))}
                    </div>
                )}

                {/* BOTTOM CARDS */}
                {bottomSpots.length > 0 && (
                    <div className="flex gap-1.5 px-3 pb-3 flex-none">
                        {bottomSpots.map((spot, i) => renderCard(spot, 'up', i))}
                    </div>
                )}

                {/* EXPANDED CARD BOTTOM SHEET */}
                {expandedCard && (() => {
                    const spot = assets.hotspots.find(s => s.id === expandedCard)
                    if (!spot) return null
                    return (
                        <div
                            className="fixed inset-0 z-50 flex items-end"
                            onClick={() => setExpandedCard(null)}
                        >
                            <div className="absolute inset-0 bg-black/65" />
                            <motion.div
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                className="relative w-full bg-[#090e09] border-t border-lime-500/40 px-6 pt-5 rounded-t-2xl"
                                style={{ paddingBottom: 'max(2.5rem, env(safe-area-inset-bottom))' }}
                                onClick={e => e.stopPropagation()}
                            >
                                <div className="w-8 h-0.5 bg-white/20 rounded-full mx-auto mb-5" />
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                                    <span className="text-lime-400 text-[9px] font-black uppercase tracking-[0.2em] font-outfit">Validated Node</span>
                                </div>
                                <div className="text-white text-lg font-black uppercase tracking-tight font-outfit mb-3">
                                    {spot.label}
                                </div>
                                <div className="text-white/65 text-sm leading-relaxed">
                                    {spot.desc}
                                </div>
                                <button
                                    onClick={() => setExpandedCard(null)}
                                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/30 active:text-white/70"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </button>
                            </motion.div>
                        </div>
                    )
                })()}

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
                        {mode === 'plant' && (<>
                            {/* Vloer-spotlight: warm groen van onderaf, plant staat erin */}
                            <div className="absolute inset-0 pointer-events-none" style={{
                                background: 'radial-gradient(ellipse 70% 55% at 50% 92%, rgba(120,230,60,0.28) 0%, rgba(60,180,40,0.14) 40%, transparent 70%)',
                            }} />
                            {/* Zachte bovenlicht: koel groen-blauw vanuit top */}
                            <div className="absolute inset-0 pointer-events-none" style={{
                                background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(80,200,120,0.18) 0%, rgba(40,140,80,0.06) 55%, transparent 80%)',
                            }} />
                            {/* Middenglow: kern van de plant */}
                            <div className="absolute inset-0 pointer-events-none" style={{
                                background: 'radial-gradient(ellipse 35% 50% at 50% 50%, rgba(140,240,80,0.10) 0%, transparent 65%)',
                                filter: 'blur(18px)',
                            }} />
                        </>)}
                        {mode === 'roots' && (<>
                            {/* Aardwarmte: amber van onderuit, zoals bodemgloed */}
                            <div className="absolute inset-0 pointer-events-none" style={{
                                background: 'radial-gradient(ellipse 75% 50% at 50% 100%, rgba(180,130,40,0.22) 0%, rgba(100,80,20,0.10) 45%, transparent 70%)',
                            }} />
                            {/* Bioglow: groene levensenergie in de wortels */}
                            <div className="absolute inset-0 pointer-events-none" style={{
                                background: 'radial-gradient(ellipse 55% 60% at 50% 62%, rgba(60,200,80,0.16) 0%, rgba(30,120,50,0.06) 50%, transparent 75%)',
                                filter: 'blur(12px)',
                            }} />
                            {/* Bovenlicht: koele duisternis naar donker */}
                            <div className="absolute inset-0 pointer-events-none" style={{
                                background: 'radial-gradient(ellipse 80% 35% at 50% 0%, rgba(0,30,10,0.55) 0%, transparent 70%)',
                            }} />
                        </>)}
                        {mode === 'cucumber' && (
                            <>
                                <div className="absolute inset-0 pointer-events-none" style={{
                                    background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(163,230,53,0.18) 0%, rgba(74,222,128,0.08) 50%, transparent 70%)',
                                }} />
                                <div className="absolute inset-0 pointer-events-none" style={{
                                    background: 'radial-gradient(ellipse 40% 50% at 50% 0%, rgba(200,255,150,0.10) 0%, transparent 60%)',
                                }} />
                                {/* Rim light — separates cucumber from dark bg */}
                                <div className="absolute inset-0 pointer-events-none" style={{
                                    background: 'radial-gradient(ellipse 38% 60% at 50% 44%, rgba(132,204,22,0.10) 20%, rgba(132,204,22,0.04) 55%, transparent 80%)',
                                    filter: 'blur(22px)',
                                }} />
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[20px] pointer-events-none" style={{
                                    background: 'radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.6) 0%, transparent 100%)',
                                    filter: 'blur(8px)',
                                }} />
                            </>
                        )}
                        {mode === 'cucumber' ? (
                            <motion.div
                                className="relative inline-block mx-auto"
                                animate={{ y: [0, -3, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <img
                                    src={assets.image}
                                    alt="Technical Analysis"
                                    className="block mx-auto"
                                    style={{
                                        objectFit: 'contain',
                                        maskImage: assets.mask,
                                        WebkitMaskImage: assets.mask,
                                        height: 'auto',
                                        maxHeight: assets.imgHeight,
                                        maxWidth: '100%',
                                        mixBlendMode: 'normal',
                                    }}
                                />
                            </motion.div>
                        ) : (
                            <img
                                src={assets.image}
                                alt="Technical Analysis"
                                className="w-full mx-auto"
                                style={{
                                    objectFit: assets.objectFit ?? 'contain',
                                    maskImage: assets.mask,
                                    WebkitMaskImage: assets.mask,
                                    height: assets.imgHeight,
                                    maxWidth: '100%',
                                    mixBlendMode: 'screen',
                                }}
                            />
                        )}
                        {/* Side gradients — only for modes without a mask (plant) */}
                        {assets.mask === 'none' && <>
                            <div className="absolute inset-y-0 left-0 w-[22%] bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
                            <div className="absolute inset-y-0 right-0 w-[22%] bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
                        </>}
                        {assets.gradientTop && assets.gradientTop !== '0%' && (
                            <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"
                                style={{ height: assets.gradientTop }} />
                        )}
                        {assets.gradientBottom && assets.gradientBottom !== '0%' && (
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"
                                style={{ height: assets.gradientBottom }} />
                        )}
                    </div>

                    {/* Hotspots */}
                    {assets.hotspots.map((spot) => (
                        <motion.div
                            key={spot.id}
                            className="absolute z-20"
                            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                            {...(mode === 'cucumber' && {
                                animate: { y: [0, -1.5, 0] },
                                transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
                            })}
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
                                    ${spot.align === 'left'
                                        ? spot.gap === 'wide' ? 'right-full mr-16' : 'right-full mr-6'
                                        : spot.gap === 'wide' ? 'left-full ml-16' : 'left-full ml-6'}
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
                                {/* Connector line to dot */}
                                <div className={`absolute top-1/2 -translate-y-1/2 h-px bg-lime-400/50 ${
                                    spot.gap === 'wide' ? 'w-20' : 'w-8'
                                } ${
                                    spot.align === 'right' ? 'right-full' : 'left-full'
                                }`} />
                                <div className={`flex absolute top-1/2 -translate-y-1/2 ${spot.align === 'right' ? '-left-3' : '-right-3'} text-lime-400`}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={spot.align === 'right' ? '' : 'rotate-180'}>
                                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </motion.div>
                        </motion.div>
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
