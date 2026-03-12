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
    const isInView = useInView(containerRef, { once: true, amount: 0.4 });
    
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
        { id: 'leaves', x: 62, y: 15, label: t.leaves, align: 'left', delay: 0.2 },
        { id: 'fruit', x: 38, y: 42, label: t.fruit, align: 'right', delay: 0.4 },
        { id: 'uptake', x: 50, y: 66, label: t.uptake, align: 'right', delay: 0.6 }, // The 'Steel-Wortel' transition
        { id: 'roots', x: 55, y: 85, label: t.roots, align: 'left', delay: 0.8 },
    ];

    return (
        <div 
            ref={containerRef} 
            onMouseMove={handleMouseMove}
            className="relative w-full min-h-[700px] md:min-h-[1100px] flex items-center justify-center overflow-visible py-20 lg:py-32"
        >
            {/* Multi-layered Dynamic Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] aspect-square bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.2)_0%,transparent_70%)] pointer-events-none blur-[120px] opacity-70"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.15)_0%,transparent_60%)] pointer-events-none blur-[90px] animate-pulse"></div>

            <motion.div
                className="relative w-full max-w-[900px] px-8"
                style={{ scale, opacity, rotateX, rotateY, perspective: 1000 }}
            >
                {/* Main Visual */}
                <div className="relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative group cursor-default"
                    >
                        <div className="absolute inset-0 bg-lime-400/20 blur-[150px] rounded-full scale-90 opacity-40 group-hover:opacity-60 transition-opacity duration-1000"></div>
                        <img
                            src="/images/cucumber-plant-new.png"
                            alt="Premium Cucumber Plant"
                            className="w-full h-auto max-h-[90vh] object-contain relative z-10 drop-shadow-[0_45px_100px_rgba(0,0,0,0.8)] filter brightness-110 contrast-110 select-none"
                        />
                    </motion.div>

                    {/* Interactive Hotspots & Reveal Sequence */}
                    <div className="absolute inset-0 z-30">
                        {hotspots.map((spot) => (
                            <div
                                key={spot.id}
                                className="absolute"
                                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                            >
                                {/* Hotspot Trigger */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: spot.delay, type: "spring", stiffness: 260, damping: 20 }}
                                >
                                    <button
                                        className="relative flex items-center justify-center w-10 h-10 md:w-16 md:h-16 group outline-none"
                                        onMouseEnter={() => setActiveHotspot(spot.id)}
                                        onMouseLeave={() => setActiveHotspot(null)}
                                        onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                                    >
                                        <div className="absolute inset-0 rounded-full bg-lime-400/30 animate-ping duration-1000 opacity-50"></div>
                                        <div className="relative w-3 h-3 md:w-6 md:h-6 rounded-full bg-white shadow-[0_0_30px_rgba(163,230,21,1)] group-hover:scale-125 transition-all duration-300"></div>
                                    </button>
                                </motion.div>

                                {/* Automatic Scroll Reveal Card */}
                                <AnimatePresence>
                                    {(isInView || activeHotspot === spot.id) && (
                                        <motion.div
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{ opacity: 1, width: spot.align === 'left' ? "250px" : "250px" }}
                                            transition={{ delay: spot.delay + 0.3, duration: 0.8, ease: "easeOut" }}
                                            style={{ 
                                                position: 'absolute',
                                                top: '50%',
                                                [spot.align === 'left' ? 'left' : 'right']: '100%',
                                                transform: 'translateY(-50%)',
                                                pointerEvents: 'none'
                                            }}
                                            className="hidden md:flex items-center"
                                        >
                                            {/* Animated Connector Line */}
                                            <motion.div 
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: 1 }}
                                                transition={{ delay: spot.delay + 0.3, duration: 0.5 }}
                                                className={`h-px w-16 bg-gradient-to-r ${spot.align === 'left' ? 'from-lime-400 to-transparent' : 'from-transparent to-lime-400'} origin-${spot.align}`}
                                            ></motion.div>

                                            {/* Info Label appearing after line */}
                                            <motion.div
                                                initial={{ opacity: 0, x: spot.align === 'left' ? 10 : -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: spot.delay + 0.6, duration: 0.4 }}
                                                className="glass-panel px-6 py-4 rounded-2xl bg-[#011410]/80 backdrop-blur-xl border border-white/20 whitespace-nowrap min-w-[200px]"
                                            >
                                                <div className="text-lime-400 text-[9px] font-black uppercase tracking-[0.2em] mb-1">Impact Point</div>
                                                <div className="text-white text-lg font-black tracking-tight uppercase font-outfit">
                                                    {spot.label}
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Mobile Specific Info (Tappable only) */}
                                <AnimatePresence>
                                    {activeHotspot === spot.id && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="md:hidden absolute top-12 left-1/2 -translate-x-1/2 w-48 z-50 pointer-events-none"
                                        >
                                            <div className="glass-panel p-4 rounded-xl bg-[#011410]/90 backdrop-blur-md border border-lime-400/30 text-center">
                                                <div className="text-white text-sm font-bold uppercase font-outfit">{spot.label}</div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Nutrient Stream */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-50">
                    <svg className="w-full h-full">
                        {[...Array(20)].map((_, i) => (
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
                                    duration: 5 + Math.random() * 5,
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
