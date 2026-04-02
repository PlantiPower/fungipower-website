import { Locale } from '@/i18n-config';

const slugMap: Record<string, Record<string, string>> = {
    en: {
        'about': 'about-us',
        'products': 'producten',
        'products/start': 'fungipower-start',
        'products/boost': 'fungipower-boost',
        'faq': 'faq',
        'contact': 'contact'
    },
    nl: {
        'about': 'over-ons',
        'products': 'producten',
        'products/start': 'fungipower-start',
        'products/boost': 'fungipower-boost',
        'faq': 'faq',
        'contact': 'contact'
    },
    de: {
        'about': 'ueber-uns',
        'products': 'producten',
        'products/start': 'fungipower-start',
        'products/boost': 'fungipower-boost',
        'faq': 'faq',
        'contact': 'kontakt'
    }
};

export function getLocalizedPath(path: string, targetLocale: Locale): string {
    // Remove leading slash and locale segment
    const segments = path.split('/').filter(Boolean);

    // Determine current locale and internal path
    let currentLocale: Locale = 'en';
    let rest = '';

    if (segments.length > 0 && (segments[0] === 'nl' || segments[0] === 'en' || segments[0] === 'de')) {
        currentLocale = segments[0] as Locale;
        rest = segments.slice(1).join('/');
    } else {
        currentLocale = 'en';
        rest = segments.join('/');
    }

    if (!rest) return `/${targetLocale}`;

    // Find the internal key for the current path
    const internalKey = Object.keys(slugMap[currentLocale]).find(
        key => slugMap[currentLocale][key] === rest
    );

    const targetSlug = internalKey && slugMap[targetLocale][internalKey]
        ? slugMap[targetLocale][internalKey]
        : rest;

    return `/${targetLocale}/${targetSlug}`;
}

export function getPath(key: string, locale: string): string {
    const segments = key.split('/').filter(Boolean).join('/');
    const slug = (slugMap[locale] && slugMap[locale][segments]) || segments;

    if (!slug || slug === '/') {
        return `/${locale}`;
    }

    return `/${locale}/${slug}`;
}
