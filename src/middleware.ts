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
    } catch {
        return i18n.defaultLocale
    }
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // Skip for static files, assets, api, and login page itself
    if (
        pathname.includes('.') ||
        pathname.startsWith('/login') ||
        pathname.startsWith('/api/') ||
        pathname.startsWith('/theroadto') ||
        pathname.startsWith('/images/') ||
        pathname.startsWith('/docs/') ||
        pathname === '/favicon.ico' ||
        pathname === '/robots.txt' ||
        pathname === '/sitemap.xml'
    ) {
        return NextResponse.next()
    }

    // Password protection check
    const accessCookie = request.cookies.get('fp_access')
    if (!accessCookie || accessCookie.value !== 'granted') {
        const loginUrl = request.nextUrl.clone()
        loginUrl.pathname = '/login'
        return NextResponse.redirect(loginUrl)
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
    matcher: ['/((?!api|_next/static|_next/image|images|docs|favicon.ico|robots.txt|sitemap.xml|theroadto).*)'],
}
