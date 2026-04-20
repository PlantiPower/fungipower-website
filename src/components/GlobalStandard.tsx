'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Award } from 'lucide-react';

interface GlobalStandardProps {
    dict: any;
}

const GlobalStandard: React.FC<GlobalStandardProps> = ({ dict }) => {
    const t = dict.GlobalStandard;

    return (
        <section className="relative pt-12 pb-0 bg-black overflow-visible">
            {/* Background elements — matches the near-black + orange glow of the product image */}
            <div className="absolute inset-0 bg-black"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 blur-[140px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">

                    {/* Left Column: Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="section-badge !bg-orange-500/10 !border-orange-500/20 !text-orange-400"
                        >
                            <Globe2 className="w-3.5 h-3.5" />
                            {t.badge}
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="section-title"
                        >
                            {t.title} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-400">
                                {t.titleHighlight}
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="section-description mb-8"
                        >
                            {t.desc}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-6"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                    <Award className="w-6 h-6 text-orange-400" />
                                </div>
                                <div>
                                    <div className="text-white font-bold">{t.dutchMade}</div>
                                    <div className="text-orange-100/50 text-xs uppercase tracking-wider">{t.premiumQuality}</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                    <Globe2 className="w-6 h-6 text-orange-400" />
                                </div>
                                <div>
                                    <div className="text-white font-bold">{t.exportReady}</div>
                                    <div className="text-orange-100/50 text-xs uppercase tracking-wider">{t.logistics}</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: The World Tech Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group mb-0"
                    >
                        <img
                            src="/images/fungipower-start1.png"
                            alt="FungiPower Global Standard"
                            className="w-full h-auto object-contain block"
                            style={{ marginBottom: '-4px' }}
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default GlobalStandard;
