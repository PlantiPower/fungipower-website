import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { i18n } from './i18n-config'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

function getLocale(request: NextRequest): string {
    const country = ((request as any).geo?.country || request.headers.get('x-vercel-ip-country'))?.toLowerCase()
    if (country === 'nl' || country === 'be') return 'nl'
    if (country === 'de' || country === 'at' || country === 'ch') return 'de'

    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))
    const locales = i18n.locales
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

    try {
        return match(languages, locales, i18n.defaultLocale)
    } catch (e) {
        return i18n.defaultLocale
    }
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // Skip the sub-app theroadto and its assets entirely
    if (pathname.startsWith('/theroadto')) {
        return
    }

    if (
        pathname.startsWith('/images') ||
        pathname.startsWith('/api') ||
        pathname === '/favicon.ico'
    ) {
        return
    }

    const pathnameHasLocale = i18n.locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )
    if (pathnameHasLocale) return

    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        '/((?!theroadto|_next|api|favicon.ico).*)',
    ],
}
