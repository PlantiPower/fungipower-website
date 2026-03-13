import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import { Metadata } from 'next'
import CucumberClientPage from '@/components/CucumberClientPage'

export async function generateMetadata(
    { params }: { params: Promise<{ lang: Locale }> }
): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang)
    const t = dict.Cucumbers as any;

    return {
        title: t.metaTitle,
        description: t.metaDesc,
        robots: {
            index: true,
            follow: true,
        },
    }
}

export default async function CucumberPage({
    params,
}: {
    params: Promise<{ lang: Locale }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang)
    const t = dict.Cucumbers as any;

    return <CucumberClientPage dict={dict} lang={lang} t={t} />;
}
