'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue } from 'framer-motion';

interface InteractiveCucumberHeroProps {
    dict: any;
}

const InteractiveCucumberHero: React.FC<InteractiveCucumberHeroProps> = ({ dict }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    
    // For 3D Tilt effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), { stiffness: 100, damping: 30 });

    const t = dict.Cucumbers.infographic;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
    const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
    };

    if (!isMounted) return <div ref={containerRef} className="min-h-[700px] w-full" />;

    const hotspots = [
        { id: 'leaves', x: 65, y: 15, label: t.leaves, align: 'left', delay: 0.1 },
        { id: 'fruit', x: 35, y: 45, label: t.fruit, align: 'right', delay: 0.2 },
        { id: 'uptake', x: 45, y: 68, label: t.uptake, align: 'right', delay: 0.3 },
        { id: 'roots', x: 55, y: 88, label: t.roots, align: 'left', delay: 0.4 },
    ];

    return (
        <div 
            ref={containerRef} 
            onMouseMove={handleMouseMove}
            className="relative w-full min-h-[700px] md:min-h-[1000px] flex items-center justify-center overflow-visible py-20 lg:py-32"
        >
            {/* Multi-layered Dynamic Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] aspect-square bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.2)_0%,transparent_70%)] pointer-events-none blur-[120px] opacity-70"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.15)_0%,transparent_60%)] pointer-events-none blur-[90px] animate-pulse"></div>

            <motion.div
                className="relative w-full max-w-[900px] px-8"
                style={{ scale, opacity, rotateX, rotateY, perspective: 1000 }}
            >
                {/* Main Visual - Intensified Depth to make it 'POP' */}
                <div className="relative z-10 transition-all duration-1000">
                    <motion.div 
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative group cursor-default"
                    >
                        {/* Dramatic Outer Glow/Backlight to make it pop from background */}
                        <div className="absolute inset-0 bg-lime-400/20 blur-[150px] rounded-full scale-90 opacity-40 group-hover:opacity-60 transition-opacity duration-1000"></div>
                        
                        {/* Extra sharp backlight */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/5 blur-[80px] rounded-full pointer-events-none"></div>

                        <img
                            src="/images/cucumber-plant-new.png"
                            alt="Premium Cucumber Plant"
                            className="w-full h-auto max-h-[90vh] object-contain relative z-10 drop-shadow-[0_45px_100px_rgba(0,0,0,0.8)] filter brightness-110 contrast-110 transition-all duration-700 group-hover:scale-[1.02] group-hover:brightness-125 select-none"
                        />
                        
                        {/* Secondary Drop Shadow for multi-layered depth */}
                        <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[40%] h-[10%] bg-black/40 blur-[40px] rounded-[100%] z-0"></div>
                    </motion.div>

                    {/* Highly Interactive Hotspots - Positioned for the new image */}
                    <div className="absolute inset-0 z-30">
                        {hotspots.map((spot) => (
                            <div
                                key={spot.id}
                                className="absolute"
                                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                            >
                                {/* The Hotspot Trigger */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.2 + spot.delay, type: "spring", stiffness: 260, damping: 20 }}
                                >
                                    <button
                                        className="relative flex items-center justify-center w-10 h-10 md:w-16 md:h-16 group outline-none"
                                        onMouseEnter={() => setActiveHotspot(spot.id)}
                                        onMouseLeave={() => setActiveHotspot(null)}
                                        onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                                        aria-label={spot.label}
                                    >
                                        {/* Dynamic Ripple Rings */}
                                        <div className="absolute inset-0 rounded-full bg-lime-400/30 animate-ping duration-1000 opacity-50"></div>
                                        <div className="absolute inset-[15%] rounded-full bg-lime-400/10 border border-lime-400/40 group-hover:scale-110 transition-all duration-500"></div>
                                        
                                        {/* Core Dot with Intense Glow */}
                                        <div className="relative w-3 h-3 md:w-6 md:h-6 rounded-full bg-white shadow-[0_0_35px_rgba(163,230,21,1)] group-hover:scale-125 group-hover:bg-lime-400 transition-all duration-300"></div>
                                    </button>
                                </motion.div>

                                {/* Premium Informational Popover */}
                                <AnimatePresence mode="wait">
                                    {(activeHotspot === spot.id) && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 15, filter: "blur(12px)", scale: 0.9 }}
                                            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                                            exit={{ opacity: 0, y: 10, filter: "blur(10px)", scale: 0.95 }}
                                            className={`absolute top-0 -translate-y-1/2 ${spot.align === 'left' ? 'left-12 md:left-20' : 'right-12 md:right-20'} w-64 md:w-96 h-0 flex items-center z-50`}
                                        >
                                            <div className="glass-panel p-6 md:p-10 rounded-[3rem] border-white/30 bg-[#011410]/85 backdrop-blur-3xl shadow-[0_45px_100px_rgba(0,0,0,0.8)] border ring-1 ring-lime-400/30">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-pulse shadow-[0_0_10px_rgba(163,230,21,1)]"></div>
                                                    <div className="text-lime-400 text-[11px] font-black uppercase tracking-[0.3em] font-outfit">Verified Impact</div>
                                                </div>
                                                <div className="text-white text-xl md:text-3xl font-black leading-[1] uppercase tracking-tighter font-outfit mb-5">
                                                    {spot.label}
                                                </div>
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    animate={{ width: "100%" }}
                                                    className="h-1 bg-gradient-to-r from-lime-400 to-transparent rounded-full opacity-60 mb-3"
                                                ></motion.div>
                                                
                                                {/* Advanced Visual Connector */}
                                                <div className={`absolute top-1/2 -translate-y-1/2 ${spot.align === 'left' ? '-left-10 md:-left-16' : '-right-10 md:-right-16'} w-10 md:w-16 h-px bg-gradient-to-r ${spot.align === 'left' ? 'from-transparent via-lime-400/60 to-lime-400' : 'from-lime-400 via-lime-400/60 to-transparent shadow-[0_0_15px_rgba(163,230,21,0.5)]'}`}></div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Ambient Deep-Space Nutrient Stream (Popping Particles) */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-50">
                    <svg className="w-full h-full">
                        {[...Array(25)].map((_, i) => (
                            <motion.circle
                                key={i}
                                r={Math.random() * 3 + 1}
                                fill="#bef264"
                                animate={{
                                    y: [1100, -300],
                                    x: [Math.random() * 1000],
                                    opacity: [0, 0.8, 0],
                                    scale: [0.5, 1.2, 0.5]
                                }}
                                transition={{
                                    duration: 5 + Math.random() * 8,
                                    repeat: Infinity,
                                    delay: Math.random() * 12,
                                    ease: "easeInOut"
                                }}
                                style={{ filter: 'blur(1px)' }}
                            />
                        ))}
                    </svg>
                </div>
            </motion.div>

            {/* Mobile Interaction Hint */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:hidden text-center z-40">
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-lime-400 text-[#011410] px-8 py-3 rounded-full shadow-[0_15px_35px_rgba(163,230,21,0.4)] border border-white/20"
                >
                    <span className="text-[11px] font-black uppercase tracking-[0.25em] animate-pulse">
                        Discover Innovation
                    </span>
                </motion.div>
            </div>
        </div>
    );
};

export default InteractiveCucumberHero;
