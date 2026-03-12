'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue, useInView } from 'framer-motion';

interface InteractiveCucumberHeroProps {
    dict: any;
}

const InteractiveCucumberHero: React.FC<InteractiveCucumberHeroProps> = ({ dict }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });
    
    // For 3D Tilt effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useSpring(useTransform(mouseY, [-400, 400], [4, -4]), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-400, 400], [-4, 4]), { stiffness: 100, damping: 30 });

    const t = dict.Cucumbers.infographic;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.85, 1, 1.05]);
    const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x * 0.5);
        mouseY.set(y * 0.5);
    };

    if (!isMounted) return <div ref={containerRef} className="min-h-[700px] w-full" />;

    // Refined coordinates based on latest user screenshot
    const hotspots = [
        { id: 'leaves', x: 48, y: 12, label: t.leaves, align: 'right', delay: 0.2, linePath: "M 0 0 L 100 -40" },
        { id: 'fruit', x: 44, y: 38, label: t.fruit, align: 'left', delay: 0.5, linePath: "M 0 0 L -120 -20" },
        { id: 'uptake', x: 50, y: 64, label: t.uptake, align: 'left', delay: 0.8, linePath: "M 0 0 L -140 10" }, // Stem-root transition
        { id: 'roots', x: 45, y: 86, label: t.roots, align: 'right', delay: 1.1, linePath: "M 0 0 L 120 30" },   // Drain/Water
    ];

    return (
        <div 
            ref={containerRef} 
            onMouseMove={handleMouseMove}
            className="relative w-full min-h-[800px] md:min-h-[1200px] flex items-center justify-center overflow-visible py-20 lg:py-40 select-none"
        >
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1600px] aspect-square bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.15)_0%,transparent_70%)] pointer-events-none blur-[140px] opacity-60"></div>

            <motion.div
                className="relative w-full max-w-[850px] px-4"
                style={{ scale, opacity, rotateX, rotateY, perspective: 1200 }}
            >
                {/* The Plant Image */}
                <div className="relative z-10 transition-all duration-1000">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-lime-400/10 blur-[180px] rounded-full scale-110 opacity-30"></div>
                        <img
                            src="/images/cucumber-plant-new.png"
                            alt="Premium Cucumber Plant"
                            className="w-full h-auto max-h-[90vh] object-contain relative z-10 drop-shadow-[0_60px_120px_rgba(0,0,0,0.9)]"
                        />
                    </motion.div>

                    {/* Interactive Infographic Overlay */}
                    <div className="absolute inset-0 z-30">
                        {hotspots.map((spot) => (
                            <div
                                key={spot.id}
                                className="absolute"
                                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                            >
                                {/* The Hotspot Stipje */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: spot.delay, type: "spring", stiffness: 200 }}
                                >
                                    <button
                                        className="relative flex items-center justify-center w-8 h-8 md:w-12 md:h-12 group"
                                        onMouseEnter={() => setActiveHotspot(spot.id)}
                                        onMouseLeave={() => setActiveHotspot(null)}
                                    >
                                        <div className="absolute inset-0 rounded-full bg-lime-400/40 animate-ping opacity-60"></div>
                                        <div className="relative w-3 h-3 md:w-5 md:h-5 rounded-full bg-white shadow-[0_0_20px_rgba(163,230,21,1)] group-hover:scale-125 transition-all duration-300"></div>
                                    </button>
                                </motion.div>

                                {/* Connector Line & Label Reveal */}
                                <AnimatePresence>
                                    {(isInView || activeHotspot === spot.id) && (
                                        <div className={`absolute top-1/2 -translate-y-1/2 ${spot.align === 'left' ? 'right-full' : 'left-full'} flex items-center`}>
                                            <svg 
                                                className={`overflow-visible ${spot.align === 'left' ? 'order-2' : 'order-1'}`}
                                                width="150" height="100" viewBox="-10 -10 170 120"
                                            >
                                                <motion.path
                                                    d={spot.id === 'leaves' ? "M 0 25 L 120 0" : 
                                                       spot.id === 'fruit' ? "M 150 25 L 30 10" :
                                                       spot.id === 'uptake' ? "M 150 25 L 10 35" : 
                                                       "M 0 25 L 120 50"}
                                                    fill="transparent"
                                                    stroke="rgba(163,230,21,0.6)"
                                                    strokeWidth="2"
                                                    initial={{ pathLength: 0 }}
                                                    animate={{ pathLength: 1 }}
                                                    transition={{ delay: spot.delay + 0.4, duration: 0.8 }}
                                                />
                                            </svg>

                                            {/* Infographic Card */}
                                            <motion.div
                                                initial={{ opacity: 0, x: spot.align === 'left' ? -20 : 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: spot.delay + 1, duration: 0.5 }}
                                                className={`
                                                    ${spot.align === 'left' ? 'order-1 mr-4' : 'order-2 ml-4'}
                                                    glass-panel px-6 py-5 rounded-[2rem] bg-[#011410]/85 backdrop-blur-3xl border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.6)]
                                                    min-w-[240px] lg:min-w-[320px]
                                                `}
                                            >
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-lime-400"></div>
                                                    <div className="text-lime-400 text-[10px] font-black uppercase tracking-[0.25em]">Impact Result</div>
                                                </div>
                                                <div className="text-white text-lg lg:text-xl font-black leading-tight uppercase tracking-tight font-outfit text-wrap">
                                                    {spot.label}
                                                </div>
                                            </motion.div>
                                        </div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Particle Stream */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
                    <svg className="w-full h-full">
                        {[...Array(15)].map((_, i) => (
                            <motion.circle
                                key={i}
                                r={Math.random() * 2 + 1}
                                fill="#bef264"
                                animate={{
                                    y: [1000, -200],
                                    x: [Math.random() * 1000],
                                    opacity: [0, 0.7, 0]
                                }}
                                transition={{
                                    duration: 7 + Math.random() * 5,
                                    repeat: Infinity,
                                    delay: Math.random() * 10,
                                    ease: "linear"
                                }}
                            />
                        ))}
                    </svg>
                </div>
            </motion.div>
        </div>
    );
};

export default InteractiveCucumberHero;
