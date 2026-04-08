import React from 'react';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import ClientLayout from '@/components/ClientLayout';

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'nl' }, { lang: 'de' }]
}

export default async function TermsOfService({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const isNL = lang === 'nl';
    const isDE = lang === 'de';

    return (
        <ClientLayout dict={dict} lang={lang}>
            <div className="relative pt-32 pb-20 bg-[#011410] min-h-screen">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-tighter font-outfit uppercase">
                        {isDE ? 'Allgemeine Geschäftsbedingungen' : isNL ? 'Algemene Voorwaarden' : 'Terms of Service'}
                    </h1>
                    
                    <div className="prose prose-invert max-w-none text-orange-100/70 space-y-8 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider font-outfit">
                                {isDE ? '1. Geltungsbereich' : isNL ? '1. Toepasselijkheid' : '1. Applicability'}
                            </h2>
                            <p>
                                {isDE 
                                    ? 'Diese Bedingungen gelten für alle Dienstleistungen und Produkte von FungiPower.'
                                    : isNL
                                        ? 'Deze voorwaarden zijn van toepassing op alle diensten en producten van FungiPower.'
                                        : 'These terms apply to all services and products of FungiPower.'}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider font-outfit">
                                {isDE ? '2. Kontakt' : isNL ? '2. Contact' : '2. Contact'}
                            </h2>
                            <p>
                                FungiPower<br />
                                Van Heemskerckweg 26<br />
                                5928 LL Venlo<br />
                                {isDE ? 'Niederlande' : isNL ? 'Nederland' : 'The Netherlands'}<br />
                                <a href="mailto:info@fungipower.bio" className="text-orange-400 hover:text-white transition-colors">info@fungipower.bio</a>
                            </p>
                        </section>

                        <section className="pt-12 border-t border-white/10">
                            <p className="text-sm italic">
                                {isDE
                                    ? 'Hinweis: Dies is eine Basisversion der Allgemeinen Geschäftsbedingungen. Für rechtlich bindende Dokumente wird eine vollständige Prüfung empfohlen.'
                                    : isNL
                                        ? 'Let op: Dit is een basisversie van de Algemene Voorwaarden. Voor juridisch bindende documenten wordt een volledige controle aanbevolen.'
                                        : 'Note: This is a basic version of the Terms of Service. For legally binding documents, a full review is recommended.'}
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </ClientLayout>
    );
}
