import { MetadataRoute } from 'next'
import { i18n } from '../i18n-config'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.plantipower.com'
    const locales = i18n.locales

    const sitemapEntries: MetadataRoute.Sitemap = []

    const routes: Record<string, Record<string, string>> = {
        en: {
            home: '',
            about: 'about-us',
            all12: 'plantipower-all12',
            shield: 'plantipower-shield',
            faq: 'faq',
            contact: 'contact'
        },
        nl: {
            home: '',
            about: 'over-ons',
            all12: 'plantipower-all12',
            shield: 'plantipower-shield',
            faq: 'faq',
            contact: 'contact'
        },
        de: {
            home: '',
            about: 'ueber-uns',
            all12: 'plantipower-all12',
            shield: 'plantipower-shield',
            faq: 'faq',
            contact: 'kontakt'
        }
    }

    locales.forEach((locale) => {
        const localeRoutes = routes[locale] || routes.en
        Object.values(localeRoutes).forEach((slug) => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}${slug ? '/' + slug : ''}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: slug === '' ? 1 : 0.8,
            })
        })
    })

    return sitemapEntries
}
