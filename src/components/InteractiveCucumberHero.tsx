'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useInView } from 'framer-motion';

interface InteractiveCucumberHeroProps {
    dict: any;
}

const InteractiveCucumberHero: React.FC<InteractiveCucumberHeroProps> = ({ dict }) => {
    const [isMounted, setIsMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });
    
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useSpring(useTransform(mouseY, [-400, 400], [3, -3]), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-400, 400], [-3, 3]), { stiffness: 100, damping: 30 });

    const t = dict.Cucumbers.infographic;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1, 1.05]);
    const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x * 0.4);
        mouseY.set(y * 0.4);
    };

    if (!isMounted) return <div ref={containerRef} className="min-h-[800px] w-full" />;

    // Perfectly aligned coordinates on the vertical stem axis
    // Timing:baseDelay triggers Dot -> baseDelay+0.3 triggers Line -> baseDelay+1.1 triggers Card
    const hotspots = [
        { id: 'leaves', x: 50, y: 15, label: t.leaves, align: 'left', baseDelay: 0 },
        { id: 'fruit', x: 50, y: 42, label: t.fruit, align: 'right', baseDelay: 1.2 }, 
        { id: 'uptake', x: 50, y: 65, label: t.uptake, align: 'left', baseDelay: 2.4 },
        { id: 'roots', x: 50, y: 86, label: t.roots, align: 'right', baseDelay: 3.6 },
    ];

    return (
        <div 
            ref={containerRef} 
            onMouseMove={handleMouseMove}
            className="relative w-full min-h-[900px] md:min-h-[1400px] flex items-center justify-center overflow-visible py-20 lg:py-40 select-none"
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1600px] aspect-square bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.12)_0%,transparent_70%)] pointer-events-none blur-[150px] opacity-40"></div>

            <motion.div
                className="relative w-full max-w-[800px] px-4"
                style={{ scale, opacity, rotateX, rotateY, perspective: 1500 }}
            >
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/5 z-0 pointer-events-none hidden md:block"></div>

                <div className="relative z-10 w-full flex justify-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.8, ease: "easeOut" }}
                        className="relative w-full max-w-[500px]"
                    >
                        <div className="absolute inset-0 bg-lime-400/10 blur-[200px] rounded-full scale-110 opacity-20"></div>
                        <img
                            src="/images/cucumber-plant-new.png"
                            alt="Premium Cucumber Plant"
                            className="w-full h-auto max-h-[90vh] object-contain relative z-10 drop-shadow-[0_80px_150px_rgba(0,0,0,0.95)]"
                        />
                    </motion.div>

                    <div className="absolute inset-0 z-30">
                        {hotspots.map((spot) => (
                            <div
                                key={spot.id}
                                className="absolute"
                                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                            >
                                {/* Step 1: Central Node (Stipje) */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                    transition={{ delay: spot.baseDelay, type: "spring", stiffness: 200 }}
                                >
                                    <div className="relative flex items-center justify-center w-8 h-8 md:w-12 md:h-12 pointer-events-none">
                                        <div className="absolute inset-0 rounded-full bg-lime-400/50 animate-ping opacity-40"></div>
                                        <div className="relative w-3 h-3 md:w-4 md:h-4 rounded-full bg-white shadow-[0_0_20px_rgba(163,230,21,1)]"></div>
                                    </div>
                                </motion.div>

                                {/* Step 2 & 3: Connector Line and Panel */}
                                <div className={`
                                    absolute top-1/2 -translate-y-1/2 
                                    ${spot.align === 'left' ? 'right-[20px] md:right-[32px] flex-row-reverse' : 'left-[20px] md:left-[32px]'} 
                                    flex items-center pointer-events-none
                                `}>
                                    
                                    {/* Line Drawing with Fade-out toward the plant */}
                                    <div className="relative w-[140px] h-[2px] hidden md:block overflow-visible">
                                        <svg 
                                            className="overflow-visible"
                                            width="100%" height="2" viewBox="0 0 140 2"
                                        >
                                            <defs>
                                                <filter id={`glow-${spot.id}`} x="-50%" y="-50%" width="200%" height="200%">
                                                    <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur"></feGaussianBlur>
                                                    <feMerge>
                                                        <feMergeNode in="blur"></feMergeNode>
                                                        <feMergeNode in="SourceGraphic"></feMergeNode>
                                                    </feMerge>
                                                </filter>
                                                <linearGradient id={`gradient-${spot.id}`} x1={spot.align === 'left' ? "0%" : "100%"} y1="0%" x2={spot.align === 'left' ? "100%" : "0%"} y2="0%">
                                                    <stop offset="0%" stopColor="rgba(163,230,21,1)" />
                                                    <stop offset="70%" stopColor="rgba(163,230,21,0.6)" />
                                                    <stop offset="100%" stopColor="rgba(163,230,21,0)" />
                                                </linearGradient>
                                            </defs>
                                            <motion.path
                                                d={spot.align === 'left' ? "M 140 1 L 0 1" : "M 0 1 L 140 1"}
                                                fill="transparent"
                                                stroke={`url(#gradient-${spot.id})`}
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                filter={`url(#glow-${spot.id})`}
                                                initial={{ pathLength: 0 }}
                                                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                                                transition={{ delay: spot.baseDelay + 0.3, duration: 0.8, ease: "easeInOut" }}
                                            />
                                        </svg>
                                    </div>

                                    {/* Step 3: The Information Panel (Vlakje) */}
                                    <motion.div
                                        initial={{ opacity: 0, x: spot.align === 'left' ? -20 : 20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: spot.align === 'left' ? -20 : 20 }}
                                        transition={{ delay: spot.baseDelay + 1.1, duration: 0.5 }}
                                        className={`
                                            relative glass-panel px-6 py-5 md:px-8 md:py-6 rounded-[2rem] bg-[#011410]/95 backdrop-blur-3xl border border-white/20 shadow-[0_50px_100px_rgba(0,0,0,0.8)]
                                            min-w-[280px] lg:min-w-[380px]
                                        `}
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-lime-400 shadow-[0_0_8px_rgba(163,230,21,1)]"></div>
                                            <div className="text-lime-400 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] font-outfit">Validated Node</div>
                                        </div>
                                        <div className="text-white text-xl md:text-2xl lg:text-3xl font-black leading-[1.1] uppercase tracking-tighter font-outfit">
                                            {spot.label}
                                        </div>
                                        
                                        <div className={`
                                            absolute top-1/2 -translate-y-1/2 
                                            ${spot.align === 'right' ? '-left-3' : '-right-3'} 
                                            text-lime-400 flex items-center
                                        `}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                                className={spot.align === 'right' ? 'rotate-0' : 'rotate-180'}
                                            >
                                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default InteractiveCucumberHero;
