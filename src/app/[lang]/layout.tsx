import type { Metadata } from 'next'
import { i18n } from '../../i18n-config'
import { ResolvingMetadata } from 'next'

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { lang } = await params

  const title = lang === 'de'
    ? 'FungiPower – Höhere Erträge in der Pilzzucht'
    : lang === 'nl'
      ? 'FungiPower – Hogere opbrengst in de champignonteelt'
      : lang === 'ar'
        ? 'FungiPower – إنتاجية أعلى في زراعة الفطر'
        : 'FungiPower – Higher Yields in Mushroom Cultivation'

  const description = lang === 'de'
    ? 'FungiPower ist ein Nährstofftransporter für den professionellen Pilzanbau. Bessere Nährstoffaufnahme durch das Myzel – für gleichmäßigere Fruchtkörper und höheren Ertrag pro m².'
    : lang === 'nl'
      ? 'FungiPower is een nutriënten transporteur voor de professionele champignonteelt. Betere opname door het mycelium – voor uniformere vruchtlichamen en hogere opbrengst per m².'
      : lang === 'ar'
        ? 'FungiPower هو ناقل مغذيات لزراعة الفطر المحترفة. امتصاص أفضل للمغذيات من خلال الميسيليوم — لأجسام ثمرية أكثر انتظاماً وإنتاجية أعلى.'
        : 'FungiPower is a nutrient transporter for professional mushroom cultivation. Better nutrient uptake by the mycelium – for more uniform fruiting bodies and higher yield per m².'

  return {
    title: {
      default: title,
      template: '%s | FungiPower'
    },
    description,
    metadataBase: new URL('https://fungipower.com'),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'nl-NL': '/nl',
        'en-US': '/en',
        'de-DE': '/de',
      },
    },
    robots: {
      index: false,
      follow: false,
    },
    icons: {
      icon: [
        { url: '/favicon.ico?v=3' },
        { url: '/icon.png?v=3', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png?v=3' },
      ],
    },
  }
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params
  if (lang === 'ar') {
    return <div dir="rtl" lang="ar" style={{ fontFamily: 'var(--font-cairo), sans-serif' }}>{children}</div>
  }
  return <>{children}</>
}
