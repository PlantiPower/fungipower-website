import React from 'react';

export default function PreviewEmailPage() {
    const headerImage = 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800';

    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh', padding: '0px' }}>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;700;800;900&display=swap" rel="stylesheet" />

            <div style={{
                backgroundColor: '#011410',
                color: '#ffffff',
                maxWidth: '600px',
                margin: '0 auto',
                borderRadius: '0',
                overflow: 'hidden',
                fontFamily: '"Outfit", sans-serif',
                boxShadow: '0 60px 120px rgba(0,0,0,0.9)'
            }}>

                {/* Hero Section */}
                <div style={{ position: 'relative', width: '100%', height: '540px', overflow: 'hidden' }}>
                    {/* Logo - 'Hanging' Effect */}
                    <div style={{
                        position: 'absolute',
                        top: '0',
                        left: '40px',
                        backgroundColor: '#012b24',
                        padding: '15px 15px 25px 15px',
                        width: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                        borderRadius: '0 0 12px 12px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                    }}>
                        <img src="https://irp.cdn-website.com/480e14da/dms3rep/multi/Planti-Power-Logo-.png" alt="PlantiPower" style={{ width: '100%' }} />
                    </div>
                    <img src={headerImage} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                    {/* Dynamic Overlay */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(1,20,16,0.2) 0%, rgba(1,20,16,1) 98%)', zIndex: 5 }}></div>

                    {/* Header Right Info */}
                    <div style={{ position: 'absolute', top: '30px', right: '40px', textAlign: 'right', zIndex: 10 }}>
                        <div style={{ color: '#ffffff', fontSize: '9px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.5 }}>
                            Mail 1 van 3 | Welkom bij PlantiPower<br />
                            Newsletter Vol. 24 | Prof. Growth
                        </div>
                    </div>

                    <div style={{ position: 'absolute', bottom: '50px', left: '40px', right: '40px', zIndex: 10 }}>
                        <div style={{ display: 'inline-block', backgroundColor: '#84cc16', color: '#011410', fontSize: '10px', fontWeight: 900, padding: '5px 12px', borderRadius: '4px', textTransform: 'uppercase', marginBottom: '25px', letterSpacing: '1px' }}>
                            Welkom bij de club
                        </div>
                        <div style={{ fontSize: '46px', fontWeight: 900, lineHeight: '0.9', textTransform: 'uppercase', letterSpacing: '-3px' }}>
                            WIJ GAAN JE <br /><span style={{ color: '#84cc16' }}>PROEFPAKKET</span> KLAARMAKEN.
                        </div>
                    </div>
                </div>

                {/* Quote Section - Refined & Compact */}
                <div style={{ padding: '30px 40px', display: 'flex', alignItems: 'center', gap: '25px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ position: 'relative' }}>
                        <img src="/images/email/John.jpeg" alt="John Geenen" style={{ width: '64px', height: '64px', borderRadius: '32px', objectFit: 'cover', border: '1.5px solid #84cc16' }} />
                    </div>
                    <div style={{ width: '2px', height: '30px', backgroundColor: '#84cc16', opacity: 0.5 }}></div>
                    <div style={{ fontSize: '18px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.3px', lineHeight: 1.2, flex: 1, color: '#ffffff' }}>
                        "De perfecte oogst begint bij een gezonde bodem."
                    </div>
                </div>

                {/* Main Message */}
                <div style={{ padding: '60px 40px 40px 40px' }}>
                    <div style={{ fontSize: '17px', fontWeight: 400, marginBottom: '25px', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '2px' }}>Beste teler,</div>

                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.8', marginBottom: '45px', fontWeight: 300 }}>
                        Goed dat je ervoor kiest om PlantiPower zelf te ervaren.<br /><br />
                        Wij vinden dat een samenwerking begint bij resultaat. Eerst zien wat het doet in jouw teelt, onder jouw omstandigheden. Geen verkooppraat, maar meetbaar verschil in wortelontwikkeling, opname en gewasreactie binnen de sierteelt.<br /><br />
                        Ons product doet wat het belooft. Daarom laten we het liever spreken in de kas dan in een brochure.<br /><br />
                        Een duurzame samenwerking draait om vertrouwen. Jij neemt nu de stap om te testen. Wij zorgen dat we dat vertrouwen waarmaken, met een product waar we volledig achter staan en met begeleiding waar nodig.<br /><br />
                        We zijn benieuwd naar wat je in je gewas terugziet.
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '80px' }}>
                        <div style={{ position: 'relative' }}>
                            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.8', marginBottom: '10px', fontWeight: 300 }}>
                                Met vriendelijke groet,
                            </div>
                            <img src="/images/email/handtekening_john_scribble_white.png" alt="Signature John G" style={{ height: '80px', margin: '5px 0', opacity: 0.9 }} />
                            <div style={{ fontSize: '19px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '2px', lineHeight: 1.2 }}>
                                John Geenen<br />
                                <span style={{ fontSize: '12px', color: '#84cc16', fontWeight: 700 }}>Mede-oprichter PlantiPower</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gevalideerde Resultaten Section */}
                <div style={{ backgroundColor: '#011d17', padding: '80px 40px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <div style={{ width: '40px', height: '4px', backgroundColor: '#84cc16', margin: '0 auto 20px' }}></div>
                        <div style={{ color: '#84cc16', fontWeight: 900, textTransform: 'uppercase', fontSize: '11px', letterSpacing: '5px', marginBottom: '15px' }}>Onze Filosofie</div>
                        <h2 style={{ fontSize: '48px', fontWeight: 900, textTransform: 'uppercase', color: '#ffffff', lineHeight: 0.9, marginBottom: '20px', letterSpacing: '-1.5px' }}>
                            Gevalideerde<br /><span style={{ color: '#84cc16' }}>Resultaten.</span>
                        </h2>
                    </div>

                    {/* ALL12 Card */}
                    <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '40px', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '40px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                        <div style={{ padding: '50px 40px', flex: 1.2 }}>
                            <div style={{ display: 'inline-block', backgroundColor: '#84cc16', color: '#011410', fontSize: '10px', fontWeight: 900, padding: '5px 14px', borderRadius: '4px', textTransform: 'uppercase', marginBottom: '25px', letterSpacing: '1.5px' }}>
                                Innovation
                            </div>
                            <div style={{ fontSize: '44px', fontWeight: 900, marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '-1px' }}>ALL12</div>
                            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>De ultieme biostimulant voor maximale groei en weerbaarheid.</div>
                        </div>
                        <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: '40px' }}>
                            <img src="/images/products/plantipower-all12-transparant.png" alt="ALL12" style={{ width: '100%', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }} />
                        </div>
                    </div>

                    {/* SHIELD Card */}
                    <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '40px', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '40px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                        <div style={{ padding: '50px 40px', flex: 1.2 }}>
                            <div style={{ display: 'inline-block', backgroundColor: '#38bdf8', color: '#011410', fontSize: '10px', fontWeight: 900, padding: '5px 14px', borderRadius: '4px', textTransform: 'uppercase', marginBottom: '25px', letterSpacing: '1.5px' }}>
                                Invisible Force
                            </div>
                            <div style={{ fontSize: '44px', fontWeight: 900, marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '-1px' }}>SHIELD</div>
                            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>Hoogwaardige bladvoeding die de natuurlijke weerbaarheid van het gewas versterkt.</div>
                        </div>
                        <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: '40px' }}>
                            <img src="/images/products/plantipower-shield-transparant.png" alt="SHIELD" style={{ width: '100%', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }} />
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <div style={{ padding: '80px 40px', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '38px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '50px', letterSpacing: '-1px' }}>Ervaring van Kwekers</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                        <div style={{ backgroundColor: '#011d17', padding: '35px', borderRadius: '32px', textAlign: 'left', border: '1px solid rgba(255,255,255,0.02)' }}>
                            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '25px' }}>
                                "Sinds we PlantiPower ALL12 gebruiken zien we een enorme boost in onze vrucht aanmaak. De uniformiteit is ongekend."
                            </div>
                            <div style={{ fontSize: '14px', fontWeight: 900, color: '#84cc16', textTransform: 'uppercase', letterSpacing: '1px' }}>Tomatenkweker Jansen</div>
                        </div>
                        <div style={{ backgroundColor: '#011d17', padding: '35px', borderRadius: '32px', textAlign: 'left', border: '1px solid rgba(255,255,255,0.02)' }}>
                            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '25px' }}>
                                "Met Shield hebben we onze gewassen beter kunnen beschermen tegen hittestress tijdens de extreme zomermaanden."
                            </div>
                            <div style={{ fontSize: '14px', fontWeight: 900, color: '#84cc16', textTransform: 'uppercase', letterSpacing: '1px' }}>Paprika Specialist</div>
                        </div>
                    </div>

                    <div style={{ background: '#84cc16', padding: '40px', borderRadius: '32px', textAlign: 'center', marginTop: '60px', boxShadow: '0 30px 60px rgba(132, 204, 22, 0.15)' }}>
                        <div style={{ color: '#011410', fontWeight: 900, textTransform: 'uppercase', fontSize: '13px', letterSpacing: '3px' }}>In voorbereiding</div>
                        <div style={{ color: '#011410', fontSize: '20px', fontWeight: 900, marginTop: '10px', letterSpacing: '-0.5px' }}>Je proefpakket (€29,95) wordt binnen 1-2 werkdagen geleverd.</div>
                    </div>
                </div>

                <div style={{ background: '#000', padding: '80px 40px', textAlign: 'center' }}>
                    <div style={{ marginBottom: '40px' }}>
                        <img src="https://irp.cdn-website.com/480e14da/dms3rep/multi/Planti-Power-Logo-.png" alt="PlantiPower" style={{ height: '35px', opacity: 0.2 }} />
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '4px' }}>
                        Venlo, Nederland  |  <a href="https://plantipower.com" style={{ color: '#84cc16', textDecoration: 'none', fontWeight: 900 }}>PLANTIPOWER.COM</a>
                    </div>
                </div>
            </div>
        </div >
    );
}
