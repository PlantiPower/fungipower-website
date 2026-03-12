'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

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

const InteractiveCucumberHero: React.FC<InteractiveCucumberHeroProps> = ({ dict, mode, sectionData }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    const getSectionAssets = () => {
        switch (mode) {
            case 'header':
                return {
                    image: "/cucumber-plant-provided.png",
                    hotspots: [],
                    maxWidth: "max-w-[700px]",
                    imgStyle: { marginBottom: '-45%', marginTop: '-10%' },
                };
            case 'plant':
                return {
                    image: "/cucumber-plant-provided.png",
                    maxWidth: "max-w-[700px]",
                    imgStyle: { marginBottom: '-20%' },
                    hotspots: [
                        { id: 'silicon', x: 45, y: 30, label: sectionData?.nodes?.silicon?.label, desc: sectionData?.nodes?.silicon?.desc, align: 'left', delay: 0.8 },
                        { id: 'siliconLeaf', x: 55, y: 40, label: sectionData?.nodes?.siliconLeaf?.label, desc: sectionData?.nodes?.siliconLeaf?.desc, align: 'right', delay: 1.5 },
                        { id: 'phosphorus', x: 52, y: 55, label: sectionData?.nodes?.phosphorus?.label, desc: sectionData?.nodes?.phosphorus?.desc, align: 'right', delay: 2.2 },
                        { id: 'molybdenum', x: 48, y: 45, label: sectionData?.nodes?.molybdenum?.label, desc: sectionData?.nodes?.molybdenum?.desc, align: 'left', delay: 2.9 }
                    ]
                };
            case 'roots':
                return {
                    image: "/wortels1.png",
                    maxWidth: "max-w-[600px]",
                    imgStyle: { marginBottom: '0%' },
                    hotspots: [
                        { id: 'iron', x: 42, y: 50, label: sectionData?.nodes?.iron?.label, desc: sectionData?.nodes?.iron?.desc, align: 'left', delay: 0.8 },
                        { id: 'zincRoots', x: 60, y: 55, label: sectionData?.nodes?.zincRoots?.label, desc: sectionData?.nodes?.zincRoots?.desc, align: 'right', delay: 1.5 },
                        { id: 'mobilization', x: 50, y: 65, label: sectionData?.nodes?.mobilization?.label, desc: sectionData?.nodes?.mobilization?.desc, align: 'right', delay: 2.2 }
                    ]
                };
            case 'cucumber':
                return {
                    image: "/komkommer los.png",
                    maxWidth: "max-w-[800px]",
                    imgStyle: { marginBottom: '0%' },
                    hotspots: [
                        { id: 'brix', x: 38, y: 46, label: sectionData?.nodes?.brix?.label, desc: sectionData?.nodes?.brix?.desc, align: 'left', delay: 0.8 },
                        { id: 'exclusion', x: 70, y: 42, label: sectionData?.nodes?.exclusion?.label, desc: sectionData?.nodes?.exclusion?.desc, align: 'right', delay: 1.5 },
                        { id: 'zincOld', x: 42, y: 68, label: sectionData?.nodes?.zincOld?.label, desc: sectionData?.nodes?.zincOld?.desc, align: 'left', delay: 2.2 },
                        { id: 'molyOld', x: 62, y: 72, label: sectionData?.nodes?.molyOld?.label, desc: sectionData?.nodes?.molyOld?.desc, align: 'right', delay: 2.9 }
                    ]
                };
            default:
                return { image: "/cucumber-plant-provided.png", hotspots: [], maxWidth: "max-w-[700px]", imgStyle: {} };
        }
    };

    const assets = getSectionAssets();

    return (
        <div 
            ref={containerRef} 
            className="relative w-full h-full flex flex-col items-center justify-center overflow-visible select-none bg-black"
        >
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={`relative z-10 w-full ${assets.maxWidth} transition-all duration-700`}
                style={assets.imgStyle}
            >
                <div className="relative">
                    <img 
                        src={assets.image} 
                        alt="Technical Analysis" 
                        className="w-full h-auto object-contain"
                        style={{ maskImage: 'radial-gradient(circle at center, black 60%, transparent 95%)', WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 95%)' }}
                    />

                    {/* Hotspots */}
                    {assets.hotspots.map((spot) => (
                        <div 
                            key={spot.id}
                            className="absolute z-20"
                            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                        >
                            {/* Pulse Point */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                                transition={{ delay: spot.delay, duration: 0.5 }}
                                className="relative flex items-center justify-center"
                            >
                                <div className="absolute w-8 h-8 rounded-full bg-white/30 animate-ping"></div>
                                <div className="absolute w-4 h-4 rounded-full bg-white shadow-[0_0_15px_white]"></div>
                            </motion.div>

                            {/* Connecting Line - HIDDEN ON MOBILE */}
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={isInView ? { width: spot.align === 'left' ? 300 : 300 } : {}}
                                transition={{ delay: spot.delay + 0.3, duration: 0.8 }}
                                className={`
                                    hidden md:block absolute top-1/2 h-[1px] bg-gradient-to-r from-white to-lime-400
                                    ${spot.align === 'left' ? 'right-full' : 'left-full'}
                                `}
                            ></motion.div>

                            {/* Card Container */}
                            <div className="absolute">
                                {/* Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: -20 } : {}}
                                    transition={{ delay: spot.delay + 0.6, duration: 0.6 }}
                                    className={`
                                        fixed md:absolute bottom-10 md:bottom-auto left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 md:top-0 md:-translate-y-1/2 pointer-events-auto
                                        ${spot.align === 'left' ? 'md:right-[310px]' : 'md:left-[310px]'}
                                        glass-panel px-4 py-3 md:px-6 md:py-5 rounded-2xl bg-black/95 backdrop-blur-xl border border-lime-500/40 shadow-[0_30px_60px_rgba(0,0,0,0.8)]
                                        w-[90vw] md:w-auto min-w-[280px] md:min-w-[320px]
                                        z-50
                                    `}
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-lime-400"></div>
                                        <div className="text-lime-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] font-outfit">Validated Node</div>
                                    </div>
                                    <div className="text-white text-base md:text-lg lg:text-xl font-black leading-tight uppercase tracking-tight font-outfit">
                                        {spot.label}
                                    </div>
                                    <div className="text-emerald-100/60 text-[10px] md:text-xs mt-2 font-medium leading-relaxed">
                                        {spot.desc}
                                    </div>
                                    
                                    <div className={`hidden md:flex absolute top-1/2 -translate-y-1/2 ${spot.align === 'right' ? '-left-3' : '-right-3'} text-lime-400`}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={spot.align === 'right' ? '' : 'rotate-180'}>
                                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default InteractiveCucumberHero;
