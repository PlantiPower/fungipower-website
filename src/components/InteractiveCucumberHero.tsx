'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';

interface InteractiveCucumberHeroProps {
    dict: any;
    mode: 'header' | 'plant' | 'roots' | 'cucumber';
    sectionData?: any;
}

const InteractiveCucumberHero: React.FC<InteractiveCucumberHeroProps> = ({ dict, mode, sectionData }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.98, 1, 1.02]);
    const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div ref={containerRef} className="min-h-[600px] w-full" />;

    const getSectionAssets = () => {
        switch(mode) {
            case 'header':
                return {
                    image: "/cucumber-plant-provided.png",
                    hotspots: [],
                    maxWidth: "max-w-[700px]",
                    imgStyle: { marginBottom: '-5%' }
                };
            case 'plant':
                return {
                    image: "/cucumber-plant-provided.png",
                    maxWidth: "max-w-[700px]",
                    imgStyle: { marginBottom: '-5%' },
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
                        { id: 'iron', x: 35, y: 50, label: sectionData?.nodes?.iron?.label, desc: sectionData?.nodes?.iron?.desc, align: 'left', delay: 0.8 },
                        { id: 'zinc', x: 65, y: 60, label: sectionData?.nodes?.zinc?.label, desc: sectionData?.nodes?.zinc?.desc, align: 'right', delay: 1.5 },
                        { id: 'mobilization', x: 50, y: 80, label: sectionData?.nodes?.mobilization?.label, desc: sectionData?.nodes?.mobilization?.desc, align: 'right', delay: 2.2 }
                    ]
                };
            case 'cucumber':
                return {
                    image: "/komkommer los.png",
                    maxWidth: "max-w-[800px]",
                    imgStyle: { marginBottom: '0%' },
                    hotspots: [
                        { id: 'brix', x: 35, y: 45, label: sectionData?.nodes?.brix?.label, desc: sectionData?.nodes?.brix?.desc, align: 'left', delay: 0.8 },
                        { id: 'exclusion', x: 65, y: 55, label: sectionData?.nodes?.exclusion?.label, desc: sectionData?.nodes?.exclusion?.desc, align: 'right', delay: 1.5 },
                        { id: 'zincOld', x: 40, y: 80, label: sectionData?.nodes?.zincOld?.label, desc: sectionData?.nodes?.zincOld?.desc, align: 'left', delay: 2.2 },
                        { id: 'molyOld', x: 60, y: 80, label: sectionData?.nodes?.molyOld?.label, desc: sectionData?.nodes?.molyOld?.desc, align: 'right', delay: 2.9 }
                    ]
                };
        }
    };

    const assets = getSectionAssets();

    return (
        <div 
            ref={containerRef} 
            className="relative w-full min-h-[700px] md:min-h-[900px] flex flex-col items-center justify-start overflow-visible select-none bg-black"
        >
            <motion.div
                className="relative w-full max-w-[1200px] px-4 pt-0 -mt-20 md:-mt-32"
                style={{ scale, opacity }}
            >
                <div className="relative z-10 w-full flex justify-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className={`relative w-full ${assets.maxWidth} flex justify-center overflow-visible`}
                    >
                        <img
                            src={assets.image}
                            alt="PlantiPower"
                            className="w-full h-auto object-contain relative z-10"
                            style={assets.imgStyle}
                        />
                    </motion.div>

                    {/* Interactive Overlay */}
                    <div className="absolute inset-0 z-30 pointer-events-none">
                        {assets.hotspots.map((spot) => (
                            <div
                                key={spot.id}
                                className="absolute"
                                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                            >
                                {/* Node */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: spot.delay, type: "spring", stiffness: 200 }}
                                    className="relative z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                                >
                                    <div className="absolute inset-0 rounded-full animate-ping opacity-40 bg-lime-400"></div>
                                    <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white shadow-[0_0_20px_rgba(163,230,21,1)]"></div>
                                </motion.div>

                                {/* Connector Line */}
                                <div className={`
                                    absolute top-0
                                    ${spot.align === 'left' ? 'right-[12px] md:right-[20px]' : 'left-[12px] md:left-[20px]'}
                                    h-[2px] w-[40px] md:w-[130px] lg:w-[180px] hidden md:block
                                `}>
                                    <svg className="w-full h-full overflow-visible">
                                        <motion.path
                                            d={spot.align === 'left' ? "M 180 0 L 0 0" : "M 0 0 L 180 0"}
                                            stroke="#A3E615"
                                            strokeWidth="2"
                                            fill="transparent"
                                            strokeDasharray="180"
                                            strokeDashoffset="180"
                                            animate={isInView ? { strokeDashoffset: 0 } : {}}
                                            transition={{ delay: spot.delay + 0.3, duration: 0.6, ease: "easeOut" }}
                                            className="opacity-80"
                                        />
                                    </svg>
                                </div>

                                {/* Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: spot.align === 'left' ? -20 : 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: spot.delay + 0.6, duration: 0.6 }}
                                    className={`
                                        absolute top-0 -translate-y-1/2 pointer-events-auto
                                        ${spot.align === 'left' ? 'right-[50px] md:right-[150px] lg:right-[200px]' : 'left-[50px] md:left-[150px] lg:left-[200px]'}
                                        glass-panel px-4 py-3 md:px-6 md:py-5 rounded-2xl bg-black/90 backdrop-blur-xl border border-lime-500/40 shadow-[0_30px_60px_rgba(0,0,0,0.8)]
                                        min-w-[200px] md:min-w-[240px] lg:min-w-[320px]
                                    `}
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-lime-400"></div>
                                        <div className="text-lime-400 text-[9px] font-black uppercase tracking-[0.2em] font-outfit">Validated Node</div>
                                    </div>
                                    <div className="text-white text-base md:text-lg lg:text-xl font-black leading-tight uppercase tracking-tight font-outfit">
                                        {spot.label}
                                    </div>
                                    <div className="text-emerald-100/60 text-[10px] md:text-xs mt-2 font-medium leading-relaxed">
                                        {spot.desc}
                                    </div>
                                    
                                    <div className={`absolute top-1/2 -translate-y-1/2 ${spot.align === 'right' ? '-left-3' : '-right-3'} text-lime-400`}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={spot.align === 'right' ? '' : 'rotate-180'}>
                                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    
                                    <div className="mt-3 pt-2 border-t border-white/5 text-[8px] text-white/20 uppercase tracking-widest font-bold">
                                        PlantiPower_Praktijkresultaten_2026
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default InteractiveCucumberHero;
