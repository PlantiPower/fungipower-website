'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLocalizedPath, getPath } from '../utils/navigation';

import { Globe, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onOpenSample: () => void;
  onOpenMenu: () => void;
  dict: any;
  lang: string;
}

const Header: React.FC<HeaderProps> = ({ onOpenSample, onOpenMenu, dict, lang }) => {
  const pathname = usePathname();
  const isNL = lang === 'nl'; // Gebruik lang prop ipv pathname

  const isActive = (path: string) => {
    // Simple active check.
    if (path === '/nl' || path === '/' || path === '/en' || path === '/de') {
      return pathname === path || pathname === path + '/';
    }
    return pathname.startsWith(path);
  };

  const t = dict.Header;

  // Render language name based on current lang
  const renderCurrentLanguageName = () => {
    if (lang === 'nl') return 'NL';
    if (lang === 'de') return 'DE';
    return 'EN';
  };

  return (
    <nav className="w-full h-full border-b border-white/10 bg-[#011410] py-3">
      <div className="site-header-content">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">

          {/* LEFT: LOGO */}
          <div className="flex-1 flex justify-start relative z-10">
            <Link href={`/${lang}`} className="flex items-center group cursor-pointer">
              <img
                src="https://irp.cdn-website.com/480e14da/dms3rep/multi/Planti-Power-Logo-.png"
                alt="PlantiPower"
                className="h-20"
              />
            </Link>
          </div>

          {/* CENTER: NAV LINKS */}
          <div className="hidden lg:flex flex-shrink-0 justify-center items-center gap-8 xl:gap-10 text-[12px] font-bold uppercase tracking-[0.4em] text-white relative z-10 transition-all">
            <Link href={`/${lang}`} className={`hover:text-lime-400 transition-all relative group ${isActive(`/${lang}`) ? 'text-lime-400' : ''}`}>
              {t.home}
              <span className={`absolute -bottom-1 left-0 h-px bg-lime-500 transition-all duration-300 ${isActive(`/${lang}`) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link href={getPath('about', lang)} className={`hover:text-lime-400 transition-all relative group ${isActive(getPath('about', lang)) ? 'text-lime-400' : ''}`}>
              {t.about}
              <span className={`absolute -bottom-1 left-0 h-px bg-lime-500 transition-all duration-300 ${isActive(getPath('about', lang)) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <div className="relative group/dropdown py-4">
              <button className={`flex items-center gap-2 hover:text-lime-400 transition-all tracking-[0.4em] ${pathname.includes('products') || pathname.includes('plantipower-') ? 'text-lime-400' : ''}`}>
                {t.products}
                <ChevronDown className="w-3 h-3 opacity-50 transition-transform duration-300 group-hover/dropdown:rotate-180" />
              </button>

              <div className="absolute top-[calc(100%-10px)] left-1/2 -translate-x-1/2 pt-4 w-72 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform scale-95 group-hover/dropdown:scale-100 pointer-events-none group-hover/dropdown:pointer-events-auto">
                <div className="bg-emerald-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-2">
                  <Link href={getPath('products/all12', lang)} className={`flex flex-col px-5 py-4 rounded-xl hover:bg-white/5 transition-colors group/item ${isActive(getPath('products/all12', lang)) ? 'bg-white/5' : ''}`}>
                    <span className={`transition-colors tracking-[0.2em] font-bold ${isActive(getPath('products/all12', lang)) ? 'text-lime-400' : 'text-white group-hover/item:text-lime-400'}`}>{t.all12}</span>
                    <span className="text-[10px] tracking-widest text-emerald-100/40 mt-1 uppercase font-medium">{t.all12Desc}</span>
                  </Link>
                  <div className="h-px bg-white/5 mx-2 my-1"></div>
                  <Link href={getPath('products/shield', lang)} className={`flex flex-col px-5 py-4 rounded-xl hover:bg-white/5 transition-colors group/item ${isActive(getPath('products/shield', lang)) ? 'bg-white/5' : ''}`}>
                    <span className={`transition-colors tracking-[0.2em] font-bold ${isActive(getPath('products/shield', lang)) ? 'text-lime-400' : 'text-white group-hover/item:text-lime-400'}`}>{t.shield}</span>
                    <span className="text-[10px] tracking-widest text-emerald-100/40 mt-1 uppercase font-medium">{t.shieldDesc}</span>
                  </Link>
                </div>
              </div>
            </div>

            <Link href={getPath('faq', lang)} className={`hover:text-lime-400 transition-all relative group ${isActive(getPath('faq', lang)) ? 'text-lime-400' : ''}`}>
              {t.faq}
              <span className={`absolute -bottom-1 left-0 h-px bg-lime-500 transition-all duration-300 ${isActive(getPath('faq', lang)) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link href={getPath('contact', lang)} className={`hover:text-lime-400 transition-all relative group ${isActive(getPath('contact', lang)) ? 'text-lime-400' : ''}`}>
              {t.contact}
              <span className={`absolute -bottom-1 left-0 h-px bg-lime-500 transition-all duration-300 ${isActive(getPath('contact', lang)) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </div>

          {/* RIGHT: CTA & LANG SWITCHER */}
          <div className="flex-1 flex justify-end items-center gap-3 relative z-10 w-full min-w-0">
            <button
              onClick={onOpenSample}
              className="bg-lime-500 text-emerald-950 hover:bg-white font-bold py-2.5 px-6 rounded-xl transition-all text-xs uppercase tracking-[0.2em] hidden sm:block whitespace-nowrap overflow-hidden text-ellipsis shadow-[0_0_20px_rgba(132,204,22,0.2)] hover:shadow-[0_0_30px_rgba(132,204,22,0.4)]"
            >
              {t.cta}
            </button>

            {/* Premium Dropdown Language Switcher */}
            <div className="hidden md:block relative group/lang py-4">
              <button className="flex items-center gap-1.5 hover:text-lime-400 transition-all text-[11px] font-bold tracking-[0.2em] text-white uppercase bg-white/5 px-3 py-2.5 rounded-xl border border-white/10 backdrop-blur-md">
                <Globe className="w-4 h-4 text-emerald-100/60" />
                <span>{renderCurrentLanguageName()}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-50 transition-transform duration-300 group-hover/lang:rotate-180" />
              </button>

              <div className="absolute top-[calc(100%-10px)] right-0 pt-2 w-[140px] opacity-0 invisible group-hover/lang:opacity-100 group-hover/lang:visible transition-all duration-300 transform scale-95 group-hover/lang:scale-100 pointer-events-none group-hover/lang:pointer-events-auto">
                <div className="bg-emerald-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-1.5 flex flex-col gap-0.5">
                  <Link href={getLocalizedPath(pathname, 'en')} className={`flex items-center px-4 py-2.5 rounded-xl hover:bg-white/5 transition-colors text-xs font-bold tracking-widest uppercase ${lang === 'en' ? 'text-lime-400 bg-white/5' : 'text-white/70 hover:text-white'}`}>English</Link>
                  <Link href={getLocalizedPath(pathname, 'nl')} className={`flex items-center px-4 py-2.5 rounded-xl hover:bg-white/5 transition-colors text-xs font-bold tracking-widest uppercase ${lang === 'nl' ? 'text-lime-400 bg-white/5' : 'text-white/70 hover:text-white'}`}>Nederlands</Link>
                  <Link href={getLocalizedPath(pathname, 'de')} className={`flex items-center px-4 py-2.5 rounded-xl hover:bg-white/5 transition-colors text-xs font-bold tracking-widest uppercase ${lang === 'de' ? 'text-lime-400 bg-white/5' : 'text-white/70 hover:text-white'}`}>Deutsch</Link>
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={onOpenMenu}
              aria-label="Toggle Menu"
              className="relative z-50 lg:hidden w-12 h-12 flex items-center justify-center text-white hover:text-lime-400 active:scale-90 transition-all bg-white/5 rounded-full border border-white/10"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Header;
