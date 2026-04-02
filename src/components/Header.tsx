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
    <nav className="w-full h-full border-b border-white/10 bg-[#080a0a] py-3">
      <div className="site-header-content">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">

          {/* LEFT: LOGO */}
          <div className="flex-1 lg:flex-none lg:w-[150px] xl:w-[200px] flex justify-start relative z-10">
            <Link href={`/${lang}`} className="flex items-center group cursor-pointer">
              <img
                src="/images/fungipower-logo.png"
                alt="FungiPower"
                className="h-20"
              />
            </Link>
          </div>

          {/* CENTER: NAV LINKS */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-5 xl:gap-8 text-[12px] font-bold uppercase tracking-[0.3em] xl:tracking-[0.4em] text-white relative z-10 transition-all lg:px-2">
            <Link href={`/${lang}`} className={`hover:text-orange-400 transition-all relative group whitespace-nowrap shrink-0 ${isActive(`/${lang}`) ? 'text-orange-400' : ''}`}>
              {t.home.replace(/ /g, '\u00A0')}
              <span className={`absolute -bottom-1 left-0 h-px bg-orange-500 transition-all duration-300 ${isActive(`/${lang}`) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link href={getPath('about', lang)} className={`hover:text-orange-400 transition-all relative group whitespace-nowrap shrink-0 ${isActive(getPath('about', lang)) ? 'text-orange-400' : ''}`}>
              {t.about.replace(/ /g, '\u00A0')}
              <span className={`absolute -bottom-1 left-0 h-px bg-orange-500 transition-all duration-300 ${isActive(getPath('about', lang)) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <div className="relative group/dropdown py-4 shrink-0">
              <Link href={getPath('products', lang)} className={`flex items-center gap-2 hover:text-orange-400 transition-all tracking-[0.3em] xl:tracking-[0.4em] uppercase whitespace-nowrap ${pathname.includes('producten') || pathname.includes('fungipower-') ? 'text-orange-400' : ''}`}>
                {t.products.replace(/ /g, '\u00A0')}
                <ChevronDown className="w-3 h-3 opacity-50 transition-transform duration-300 group-hover/dropdown:rotate-180" />
              </Link>

              <div className="absolute top-[calc(100%-10px)] left-1/2 -translate-x-1/2 pt-4 w-72 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform scale-95 group-hover/dropdown:scale-100 pointer-events-none group-hover/dropdown:pointer-events-auto">
                <div className="bg-orange-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-2">
                  <Link href={getPath('products/start', lang)} className={`flex flex-col px-5 py-4 rounded-xl hover:bg-white/5 transition-colors group/item ${isActive(getPath('products/start', lang)) ? 'bg-white/5' : ''}`}>
                    <span className={`transition-colors tracking-[0.2em] font-bold ${isActive(getPath('products/start', lang)) ? 'text-orange-400' : 'text-white group-hover/item:text-orange-400'}`}>{t.start}</span>
                    <span className="text-[10px] tracking-widest text-orange-100/40 mt-1 uppercase font-medium">{t.startDesc}</span>
                  </Link>
                  <div className="h-px bg-white/5 mx-2 my-1"></div>
                  <Link href={getPath('products/boost', lang)} className={`flex flex-col px-5 py-4 rounded-xl hover:bg-white/5 transition-colors group/item ${isActive(getPath('products/boost', lang)) ? 'bg-white/5' : ''}`}>
                    <span className={`transition-colors tracking-[0.2em] font-bold ${isActive(getPath('products/boost', lang)) ? 'text-orange-400' : 'text-white group-hover/item:text-orange-400'}`}>{t.boost}</span>
                    <span className="text-[10px] tracking-widest text-orange-100/40 mt-1 uppercase font-medium">{t.boostDesc}</span>
                  </Link>
                </div>
              </div>
            </div>

            <Link href={getPath('faq', lang)} className={`hover:text-orange-400 transition-all relative group whitespace-nowrap shrink-0 ${isActive(getPath('faq', lang)) ? 'text-orange-400' : ''}`}>
              {t.faq.replace(/ /g, '\u00A0')}
              <span className={`absolute -bottom-1 left-0 h-px bg-orange-500 transition-all duration-300 ${isActive(getPath('faq', lang)) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link href={getPath('contact', lang)} className={`hover:text-orange-400 transition-all relative group whitespace-nowrap shrink-0 ${isActive(getPath('contact', lang)) ? 'text-orange-400' : ''}`}>
              {t.contact.replace(/ /g, '\u00A0')}
              <span className={`absolute -bottom-1 left-0 h-px bg-orange-500 transition-all duration-300 ${isActive(getPath('contact', lang)) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </div>

          {/* RIGHT: CTA & LANG SWITCHER */}
          <div className="flex-1 lg:flex-none flex justify-end items-center gap-3 relative z-10 min-w-0 lg:pl-4">
            <button
              onClick={onOpenSample}
              className="bg-orange-500 text-orange-950 hover:bg-white font-bold h-11 rounded-xl transition-all text-[11px] xl:text-xs uppercase tracking-[0.1em] lg:tracking-[0.15em] hidden sm:flex items-center justify-center flex-none w-[190px] xl:w-[220px] shadow-[0_0_20px_rgba(132,204,22,0.2)] hover:shadow-[0_0_30px_rgba(132,204,22,0.4)]"
            >
              <span className="truncate px-1 block">{t.cta}</span>
            </button>

            {/* Premium Dropdown Language Switcher */}
            <div className="hidden md:block relative group/lang py-4">
              <button className="flex items-center gap-1.5 hover:text-orange-400 transition-all text-[11px] font-bold tracking-[0.2em] text-white uppercase bg-white/5 px-3 py-2.5 rounded-xl border border-white/10 backdrop-blur-md">
                <Globe className="w-4 h-4 text-orange-100/60" />
                <span>{renderCurrentLanguageName()}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-50 transition-transform duration-300 group-hover/lang:rotate-180" />
              </button>

              <div className="absolute top-[calc(100%-10px)] right-0 pt-2 w-[140px] opacity-0 invisible group-hover/lang:opacity-100 group-hover/lang:visible transition-all duration-300 transform scale-95 group-hover/lang:scale-100 pointer-events-none group-hover/lang:pointer-events-auto">
                <div className="bg-orange-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-1.5 flex flex-col gap-0.5">
                  <Link href={getLocalizedPath(pathname, 'en')} className={`flex items-center px-4 py-2.5 rounded-xl hover:bg-white/5 transition-colors text-xs font-bold tracking-widest uppercase ${lang === 'en' ? 'text-orange-400 bg-white/5' : 'text-white/70 hover:text-white'}`}>English</Link>
                  <Link href={getLocalizedPath(pathname, 'nl')} className={`flex items-center px-4 py-2.5 rounded-xl hover:bg-white/5 transition-colors text-xs font-bold tracking-widest uppercase ${lang === 'nl' ? 'text-orange-400 bg-white/5' : 'text-white/70 hover:text-white'}`}>Nederlands</Link>
                  <Link href={getLocalizedPath(pathname, 'de')} className={`flex items-center px-4 py-2.5 rounded-xl hover:bg-white/5 transition-colors text-xs font-bold tracking-widest uppercase ${lang === 'de' ? 'text-orange-400 bg-white/5' : 'text-white/70 hover:text-white'}`}>Deutsch</Link>
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={onOpenMenu}
              aria-label="Toggle Menu"
              className="relative z-50 lg:hidden w-12 h-12 flex items-center justify-center text-white hover:text-orange-400 active:scale-90 transition-all bg-white/5 rounded-full border border-white/10"
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
