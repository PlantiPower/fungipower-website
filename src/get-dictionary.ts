import 'server-only'
import type { Locale } from './i18n-config'

const dictionaries = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    nl: () => import('./dictionaries/nl.json').then((module) => module.default),
    de: () => import('./dictionaries/de.json').then((module) => module.default),
    ar: () => import('./dictionaries/ar.json').then((module) => module.default),
    bg: () => import('./dictionaries/bg.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) =>
    dictionaries[locale]?.() ?? dictionaries.nl()
