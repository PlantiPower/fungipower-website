export const i18n = {
    defaultLocale: 'en',
    locales: ['en', 'nl', 'de', 'ar'],
} as const

export type Locale = (typeof i18n)['locales'][number]
