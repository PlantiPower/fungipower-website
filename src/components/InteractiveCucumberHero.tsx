'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';

interface InteractiveCucumberHeroProps {
    dict: any;
}

const InteractiveCucumberHero: React.FC<InteractiveCucumberHeroProps> = ({ dict }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });
    
    const t = dict.Cucumbers.infographic;

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

    if (!isMounted) return <div ref={containerRef} className="min-h-[800px] w-full" />;

    // Design-matched hotspots based on the NEW provided plant image
    const hotspots = [
        { 
            id: 'leaves', 
            x: 46, y: 31, // Top Leaves area
            label: t.leaves, 
            align: 'left', 
            delayNode: 0.8, 
            delayLine: 1.2, 
            delayCard: 1.8 
        },
        { 
            id: 'fruit', 
            x: 53.5, y: 45, // Main Cucumber area
            label: t.fruit, 
            align: 'right', 
            delayNode: 2.2, 
            delayLine: 2.6, 
            delayCard: 3.2 
        }, 
        { 
            id: 'roots', 
            x: 50, y: 82, // Base/Root area near soil mound
            label: t.roots, 
            align: 'right', 
            delayNode: 3.6, 
            delayLine: 4.0, 
            delayCard: 4.6 
        },
    ];

    const scrollToResults = () => {
        const target = document.getElementById('results-section');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div 
            ref={containerRef} 
            className="relative w-full min-h-[900px] md:min-h-[1200px] flex flex-col items-center justify-start overflow-visible select-none"
        >
            {/* Atmosphere & Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] aspect-square bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15)_0%,transparent_70%)] pointer-events-none blur-[120px] opacity-60"></div>

            <motion.div
                className="relative w-full max-w-[1000px] px-4 pt-0 -mt-20 md:-mt-40"
                style={{ scale, opacity }}
            >
                {/* 1. The Plant (Fades in softly) */}
                <div className="relative z-10 w-full flex justify-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="relative w-full max-w-[800px] flex justify-center overflow-hidden"
                        style={{
                            maskImage: 'radial-gradient(circle at center, white 5%, transparent 65%)',
                            WebkitMaskImage: 'radial-gradient(circle at center, white 5%, transparent 65%)',
                            mixBlendMode: 'lighten',
                        }}
                    >
                        {/* Shadow/Base Glow */}
                        <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-full h-44 bg-lime-500/5 blur-[140px] rounded-full opacity-20"></div>
                        
                        {/* THE NEW PROVIDED PLANT IMAGE */}
                        <img
                            src="/cucumber-plant-provided.png"
                            alt="PlantiPower"
                            className="w-full h-auto object-contain relative z-10"
                        />
                    </motion.div>

                    {/* 2. Interactive Axial Overlay (Nodes, Lines, Cards) */}
                    <div className="absolute inset-0 z-30 pointer-events-none">
                        {hotspots.map((spot) => (
                            <div
                                key={spot.id}
                                className="absolute"
                                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                            >
                                {/* Glowing Node (appears after plant) */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={isInView ? { opacity: 1, scale: hoveredHotspot === spot.id ? 1.5 : 1 } : {}}
                                    transition={{ 
                                        delay: spot.delayNode, 
                                        type: "spring", 
                                        stiffness: 200,
                                        scale: { duration: 0.3 }
                                    }}
                                    className="relative z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                                >
                                    <div className={`
                                        absolute inset-0 rounded-full animate-ping opacity-40
                                        ${hoveredHotspot === spot.id ? 'bg-lime-400' : 'bg-lime-400/50'}
                                    `}></div>
                                    <div className={`
                                        w-3 h-3 md:w-4 md:h-4 rounded-full bg-white shadow-[0_0_20px_rgba(163,230,21,1)]
                                        transition-shadow duration-300
                                        ${hoveredHotspot === spot.id ? 'shadow-[0_0_30px_rgba(163,230,21,1),0_0_60px_rgba(163,230,21,0.5)]' : ''}
                                    `}></div>
                                </motion.div>

                                {/* Connector Line (animates outward) */}
                                <div className={`
                                    absolute top-0
                                    ${spot.align === 'left' ? 'right-[12px] md:right-[20px]' : 'left-[12px] md:left-[20px]'}
                                    h-[2px] w-[60px] md:w-[150px] lg:w-[220px] hidden md:block
                                `}>
                                    <svg className="w-full h-full overflow-visible">
                                        <motion.path
                                            d={spot.align === 'left' ? "M 220 0 L 0 0" : "M 0 0 L 220 0"}
                                            stroke="#A3E615"
                                            strokeWidth="2"
                                            fill="transparent"
                                            strokeDasharray="220"
                                            strokeDashoffset="220"
                                            animate={isInView ? { strokeDashoffset: 0 } : {}}
                                            transition={{ delay: spot.delayLine, duration: 0.8, ease: "easeOut" }}
                                            className="opacity-80"
                                            style={{ filter: hoveredHotspot === spot.id ? 'drop-shadow(0 0 8px rgba(163,230,21,1))' : 'none' }}
                                        />
                                    </svg>
                                </div>

                                {/* Information Card (fades in) */}
                                <motion.div
                                    initial={{ opacity: 0, x: spot.align === 'left' ? -30 : 30 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: spot.delayCard, duration: 0.8 }}
                                    onMouseEnter={() => setHoveredHotspot(spot.id)}
                                    onMouseLeave={() => setHoveredHotspot(null)}
                                    className={`
                                        absolute top-0 -translate-y-1/2 pointer-events-auto
                                        ${spot.align === 'left' ? 'right-[70px] md:right-[170px] lg:right-[240px]' : 'left-[70px] md:left-[170px] lg:left-[240px]'}
                                        glass-panel px-6 py-5 md:px-8 md:py-6 rounded-3xl bg-[#011410]/95 backdrop-blur-2xl border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.9)]
                                        min-w-[240px] md:min-w-[280px] lg:min-w-[400px]
                                        hover:border-lime-500/40 transition-all duration-300
                                    `}
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-lime-400"></div>
                                        <div className="text-lime-400 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] font-outfit">Validated Node</div>
                                    </div>
                                    <div className="text-white text-lg md:text-xl lg:text-2xl font-black leading-tight uppercase tracking-tight font-outfit">
                                        {spot.label}
                                    </div>
                                    
                                    {/* Small arrow indicator */}
                                    <div className={`
                                        absolute top-1/2 -translate-y-1/2 
                                        ${spot.align === 'right' ? '-left-3' : '-right-3'} 
                                        text-lime-400
                                    `}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={spot.align === 'right' ? '' : 'rotate-180'}>
                                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. "Bekijk de resultaten" Button */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 5.5, duration: 1 }}
                    className="relative z-40 w-full flex justify-center mt-12 mb-10"
                >
                    <button
                        onClick={scrollToResults}
                        className="group relative flex items-center gap-4 px-12 py-5 rounded-full bg-[#011410]/80 backdrop-blur-xl border border-white/10 text-white font-outfit text-xl font-bold hover:bg-white/5 hover:border-lime-500/50 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    >
                        {/* Button Glow Shadow */}
                        <div className="absolute inset-0 rounded-full bg-lime-500/10 blur-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative flex items-center justify-center w-8 h-8 rounded-full border border-white/20 group-hover:border-lime-400 group-hover:bg-lime-400/10 transition-all">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-lime-400 rotate-180">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <span className="relative z-10 tracking-wide">Bekijk de resultaten</span>
                    </button>
                </motion.div>
            </motion.div>

            {/* Mobile Cards Stack (Responsive Logic) */}
            <div className="block md:hidden w-full px-6 space-y-4 mt-8 pb-20">
                {hotspots.map((spot, idx) => (
                    <motion.div
                        key={`mobile-${spot.id}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 + idx * 0.2 }}
                        className="glass-panel p-6 rounded-2xl bg-[#011410]/95 border border-white/10"
                    >
                        <div className="flex items-center gap-2 mb-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-lime-400"></div>
                             <div className="text-lime-400 text-[9px] font-black uppercase tracking-widest font-outfit">Validated Node</div>
                        </div>
                        <div className="text-white text-lg font-bold uppercase tracking-tight font-outfit leading-tight">
                            {spot.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default InteractiveCucumberHero;
