'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getPath } from '../utils/navigation';

// cx/cy = start deep in mycelium, tx/ty = soil surface (fade out before mushroom)
const myceliumPulses = [
  { cx: '15%', cy: '85%', tx: '18%', ty: '67%', delay:  4.0, color: 'rgba(255,255,255,0.9)',  size: 6 },
  { cx: '22%', cy: '88%', tx: '24%', ty: '70%', delay: 14.0, color: 'rgba(255,200,110,0.85)', size: 8 },
  { cx: '28%', cy: '84%', tx: '30%', ty: '66%', delay:  7.5, color: 'rgba(255,160,55,0.8)',   size: 6 },
  { cx: '34%', cy: '87%', tx: '36%', ty: '69%', delay: 20.0, color: 'rgba(255,235,200,0.85)', size: 7 },
  { cx: '40%', cy: '83%', tx: '41%', ty: '65%', delay: 11.0, color: 'rgba(255,255,255,0.75)', size: 9 },
  { cx: '46%', cy: '86%', tx: '46%', ty: '68%', delay:  3.0, color: 'rgba(255,255,255,0.9)',  size: 7 },
  { cx: '52%', cy: '84%', tx: '52%', ty: '66%', delay: 17.5, color: 'rgba(255,210,140,0.85)', size: 8 },
  { cx: '57%', cy: '87%', tx: '56%', ty: '69%', delay:  9.0, color: 'rgba(255,140,40,0.8)',   size: 6 },
  { cx: '62%', cy: '83%', tx: '61%', ty: '65%', delay: 23.0, color: 'rgba(255,255,255,0.75)', size: 7 },
  { cx: '67%', cy: '86%', tx: '66%', ty: '68%', delay:  6.0, color: 'rgba(255,180,80,0.85)',  size: 9 },
  { cx: '72%', cy: '84%', tx: '71%', ty: '66%', delay: 13.5, color: 'rgba(255,100,20,0.75)',  size: 6 },
  { cx: '77%', cy: '87%', tx: '76%', ty: '69%', delay: 19.0, color: 'rgba(255,235,200,0.9)',  size: 8 },
  { cx: '82%', cy: '85%', tx: '81%', ty: '67%', delay:  5.5, color: 'rgba(255,255,255,0.8)',  size: 6 },
  { cx: '20%', cy: '89%', tx: '21%', ty: '71%', delay: 16.0, color: 'rgba(255,160,55,0.85)',  size: 7 },
  { cx: '44%', cy: '88%', tx: '44%', ty: '70%', delay:  8.0, color: 'rgba(255,220,160,0.8)',  size: 8 },
  { cx: '59%', cy: '89%', tx: '58%', ty: '71%', delay: 22.0, color: 'rgba(255,255,255,0.7)',  size: 6 },
  { cx: '69%', cy: '87%', tx: '68%', ty: '69%', delay: 10.5, color: 'rgba(255,120,30,0.8)',   size: 7 },
  { cx: '79%', cy: '86%', tx: '78%', ty: '68%', delay: 18.0, color: 'rgba(255,200,110,0.85)', size: 8 },
];

interface HeroProps {
  dict: any;
  lang: string;
}

const Hero: React.FC<HeroProps> = ({ dict, lang }) => {
  const t = dict.Hero;

  return (
    <section className="relative flex flex-col overflow-x-hidden pt-20 md:pt-24 pb-16 md:pb-24" id="home">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-orange-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(132,204,22,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Text Content */}
          <div className="relative z-50 flex flex-col justify-center text-left pt-0 lg:-mt-22">
            <h1 className="font-outfit font-bold uppercase text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-[0.02em] leading-[1.1] text-left mb-8 md:mb-10 whitespace-normal">
              <span className="text-white block whitespace-nowrap overflow-visible">{t.titleLine1}</span>
              <span className="text-white inline-block whitespace-nowrap overflow-visible pr-12 -mr-12">
                {t.titleLine2}
              </span>
              <span className="text-white block whitespace-nowrap overflow-visible">{t.titleLine3}</span>
            </h1>

            {/* USPs Line */}
            <div className="flex flex-nowrap items-center justify-start gap-x-2 md:gap-x-3 mb-6">
              <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.08em] md:tracking-[0.15em] text-orange-400 whitespace-nowrap">
                {t.uspsPart1}
              </span>
              <span className="text-white/20">|</span>
              <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.08em] md:tracking-[0.15em] text-white/90 whitespace-nowrap">
                {t.uspsPart2}
              </span>
              <span className="text-white/20">|</span>
              <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.08em] md:tracking-[0.15em] text-white/90 whitespace-nowrap">
                {t.uspsPart3}
              </span>
            </div>

            {/* Styled Description Paragraph */}
            <div className="relative py-2 text-left mb-12 max-w-xl lg:mx-0">
              <p
                className="text-lg text-orange-100/80 leading-relaxed font-medium"
                dangerouslySetInnerHTML={{ __html: t.description }}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Link
                href={getPath('products/start', lang)}
                className="btn-standard bg-orange-500 hover:bg-orange-400 text-orange-950 shadow-[0_0_30px_rgba(132,204,22,0.4)] flex-col py-4 leading-tight !h-auto text-center"
              >
                <span className="text-[10px] mb-1 opacity-70 font-black tracking-[0.3em]">{t.ctaMore}</span>
                <span className="text-sm">{t.ctaProduct}</span>
              </Link>
              <button
                onClick={() => document.getElementById('crop-results')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-standard bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-sm flex-col py-4 leading-tight !h-auto"
              >
                <span className="text-[10px] mb-1 opacity-70 font-black tracking-[0.3em]">{t.ctaView}</span>
                <span className="text-sm">{t.ctaCases}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="relative z-0 flex justify-center items-center lg:justify-end pb-12 lg:pb-0 mt-4 lg:mt-0">
            <div className="relative w-full max-w-[950px] transition-all duration-500 lg:-mr-20">
              {/* Warm glow beneath the mushroom for floating 3D feel */}
              <div className="absolute bottom-[12%] left-[20%] right-[20%] h-16 rounded-full blur-3xl bg-orange-900/40 pointer-events-none" />
              <img
                src="/images/fungipower-hero-plant.png"
                alt="FungiPower"
                className="w-full h-auto object-contain"
                style={{
                  filter: 'drop-shadow(4px 8px 14px rgba(0,0,0,0.3)) drop-shadow(-1px -2px 8px rgba(255,130,30,0.06))',
                }}
              />
              {/* Mycelium nutrient flow */}
              {myceliumPulses.map((p, i) => (
                <motion.div
                  key={`pulse-${i}`}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    left: p.cx,
                    top: p.cy,
                    width: p.size,
                    height: p.size,
                    background: p.color,
                    boxShadow: `0 0 ${p.size + 4}px ${Math.round(p.size / 2)}px ${p.color}`,
                  }}
                  animate={{
                    left: [p.cx, p.tx],
                    top:  [p.cy, p.ty],
                    opacity: [0, 0.9, 0],
                    scale: [0.7, 1.1, 0],
                  }}
                  transition={{
                    duration: 13.0,
                    delay: p.delay,
                    repeat: Infinity,
                    repeatDelay: 4.0,
                    ease: 'easeInOut',
                    times: [0, 0.55, 1],
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
