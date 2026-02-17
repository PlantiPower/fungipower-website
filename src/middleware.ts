import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './i18n-config'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

function getLocale(request: NextRequest): string {
    // Check geo-IP first
    const country = ((request as any).geo?.country || request.headers.get('x-vercel-ip-country'))?.toLowerCase()
    if (country === 'nl' || country === 'be') {
        return 'nl'
    }

    // Fallback to browser language
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    // @ts-ignore locales are readonly
    const locales: string[] = i18n.locales
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

    try {
        return match(languages, locales, i18n.defaultLocale)
    } catch (e) {
        return i18n.defaultLocale
    }
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // Skip public assets/images explicitly even if matcher handles most
    if (
        pathname.startsWith('/images') ||
        pathname.startsWith('/api') ||
        pathname === '/favicon.ico'
    ) {
        return
    }

    // Check if there is any supported locale in the pathname
    const pathnameHasLocale = i18n.locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // Determine the locale
    const locale = getLocale(request)

    // Redirect to the new URL
    request.nextUrl.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Skip all internal paths (_next), API routes, and static files
        '/((?!api|_next/static|_next/image|images|favicon.ico|.*\\..*).*)',
    ],
}
