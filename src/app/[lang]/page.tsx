import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import ClientLayout from '@/components/ClientLayout'
import Hero from '@/components/Hero'
import GrowerFocus from '@/components/GrowerFocus'
import ProblemSection from '@/components/ProblemSection'
import CropResults from '@/components/CropResults'
import GlobalStandard from '@/components/GlobalStandard'
import Testimonials from '@/components/Testimonials'
import BeursPopup from '@/components/BeursPopup'
import { Metadata, ResolvingMetadata } from 'next'
import { Suspense } from 'react'

export async function generateMetadata(
  props: { params: Promise<{ lang: Locale }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  const lang = params.lang

  const title = lang === 'de'
    ? 'FungiPower | Nährstofftransporter für den professionellen Pilzanbau'
    : lang === 'nl'
      ? 'FungiPower | Nutriënten Transporteur voor de champignonteelt'
      : 'FungiPower | Nutrient Transporter for Professional Mushroom Cultivation'

  const description = lang === 'de'
    ? 'FungiPower ist ein Nährstofftransporter für den professionellen Pilzanbau. Bessere Nährstoffaufnahme durch das Myzel – für gleichmäßigere Fruchtkörper und höheren Ertrag pro m².'
    : lang === 'nl'
      ? 'FungiPower is een nutriënten transporteur voor de professionele champignonteelt. Betere opname door het mycelium – voor uniformere vruchtlichamen en hogere opbrengst per m².'
      : 'FungiPower is a nutrient transporter for professional mushroom cultivation. Better nutrient uptake by the mycelium – for more uniform fruiting bodies and higher yield per m².'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: 'FungiPower',
      images: [
        {
          url: '/images/root-sketch.png',
          width: 1200,
          height: 630,
          alt: 'FungiPower Technology',
        },
      ],
      locale: lang === 'nl' ? 'nl_NL' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/root-sketch.png'],
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <ClientLayout dict={dict} lang={lang}>
      <Suspense fallback={null}>
        <BeursPopup />
      </Suspense>
      <div className="bg-[#011410]">
        <Hero dict={dict} lang={lang} />
        <GrowerFocus dict={dict} />
        <ProblemSection dict={dict} />
        <CropResults dict={dict} />
        <GlobalStandard dict={dict} />
        {/* <Testimonials dict={dict} /> */}{/* Tijdelijk verborgen — terugzetten zodra echte reviews beschikbaar zijn */}
      </div>
    </ClientLayout>
  )
}
