import React from 'react';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import ClientLayout from '@/components/ClientLayout';

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'nl' }, { lang: 'de' }]
}

export default async function PrivacyPolicy({
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
                        {isDE ? 'Datenschutzerklärung' : isNL ? 'Privacy Policy' : 'Privacy Policy'}
                    </h1>
                    
                    <div className="prose prose-invert max-w-none text-orange-100/70 space-y-8 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider font-outfit">
                                {isDE ? '1. Einleitung' : isNL ? '1. Inleiding' : '1. Introduction'}
                            </h2>
                            <p>
                                {isDE 
                                    ? 'FungiPower misst dem Schutz Ihrer persönlichen Daten große Bedeutung bei. In dieser Datenschutzerklärung erläutern wir, wie wir mit Ihren Daten umgehen.'
                                    : isNL
                                        ? 'FungiPower hecht veel waarde aan de bescherming van uw persoonsgegevens. In deze Privacy Policy leggen we uit hoe we met uw gegevens omgaan.'
                                        : 'FungiPower attaches great importance to the protection of your personal data. In this Privacy Policy, we explain how we handle your data.'}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider font-outfit">
                                {isDE ? '2. Kontaktinformationen' : isNL ? '2. Contactgegevens' : '2. Contact Information'}
                            </h2>
                            <p>
                                FungiPower<br />
                                Van Heemskerckweg 26<br />
                                5928 LL Venlo<br />
                                {isDE ? 'Niederlande' : isNL ? 'Nederland' : 'The Netherlands'}<br />
                                <a href="mailto:info@fungipower.bio" className="text-orange-400 hover:text-white transition-colors">info@fungipower.bio</a>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider font-outfit">
                                {isDE ? '3. Datenerfassung' : isNL ? '3. Gegevensverzameling' : '3. Data Collection'}
                            </h2>
                            <p>
                                {isDE
                                    ? 'Wir erfassen Daten, die Sie uns über das Kontaktformular oder per E-Mail zur Verfügung stellen. Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.'
                                    : isNL
                                        ? 'Wij verzamelen gegevens die u aan ons verstrekt via het contactformulier of per e-mail. Deze gegevens worden uitsluitend gebruikt om uw aanvraag te verwerken.'
                                        : 'We collect data that you provide to us via the contact form or by email. This data is used exclusively to process your request.'}
                            </p>
                        </section>

                        <section className="pt-12 border-t border-white/10">
                            <p className="text-sm italic">
                                {isDE
                                    ? 'Hinweis: Dies ist eine Basisversion der Datenschutzerklärung. Für rechtlich bindende Dokumente wird eine vollständige Prüfung empfohlen.'
                                    : isNL
                                        ? 'Let op: Dit is een basisversie van de Privacy Policy. Voor juridisch bindende documenten wordt een volledige controle aanbevolen.'
                                        : 'Note: This is a basic version of the Privacy Policy. For legally binding documents, a full review is recommended.'}
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </ClientLayout>
    );
}
