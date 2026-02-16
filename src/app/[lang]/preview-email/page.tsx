import React from 'react';

export default function PreviewEmailPage() {
    const headerImage = '/images/email/header.jpg';

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
                <div style={{ position: 'relative', width: '100%', height: '480px', backgroundColor: '#011410' }}>
                    <img src={headerImage} alt="PlantiPower Greenhouse" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(1,20,16,0) 0%, rgba(1,20,16,1) 95%)', zIndex: 1 }}></div>

                    <div style={{ position: 'absolute', top: '0', left: '40px', backgroundColor: '#012b24', padding: '15px 15px 25px 15px', width: '80px', zIndex: 10, borderRadius: '0 0 12px 12px' }}>
                        <img src="https://irp.cdn-website.com/480e14da/dms3rep/multi/Planti-Power-Logo-.png" alt="PlantiPower" style={{ width: '100%' }} />
                    </div>

                    <div style={{ position: 'absolute', bottom: '40px', left: '40px', right: '40px', zIndex: 10 }}>
                        <div style={{ display: 'inline-block', color: '#84cc16', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '15px', letterSpacing: '2px' }}>Welcome Partner</div>
                        <div style={{ fontSize: '42px', fontWeight: 900, lineHeight: '0.95', textTransform: 'uppercase', letterSpacing: '-2px' }}>
                            WIJ GAAN JE <br /><span style={{ color: '#84cc16' }}>PROEFPAKKET</span> KLAARMAKEN.
                        </div>
                    </div>
                </div>

                {/* Quote Section */}
                <div style={{ padding: '30px 40px', display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: '#011410' }}>
                    <img src="https://plantipower.com/images/email/John.jpeg" alt="John Geenen" style={{ width: '56px', height: '56px', borderRadius: '28px', objectFit: 'cover', border: '1.5px solid #84cc16' }} />
                    <div style={{ fontSize: '16px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.3px', lineHeight: 1.2, color: '#ffffff' }}>
                        "De perfecte oogst begint bij een gezonde bodem."
                    </div>
                </div>

                {/* Main Message - FULL VERSION */}
                <div style={{ padding: '40px 40px 10px 40px' }}>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.8', marginBottom: '10px', fontWeight: 300 }}>Beste teler,</div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px', fontWeight: 300 }}>
                        Goed dat je ervoor kiest om PlantiPower zelf te ervaren.<br /><br />
                        Wij vinden dat een samenwerking begint bij resultaat. Eerst zien wat het doet in jouw teelt. Geen verkooppraat, maar meetbaar verschil in wortelontwikkeling, opname en gewasreactie.<br /><br />
                        We zijn benieuwd naar de resultaten in jouw gewas.
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.8', fontWeight: 300 }}>Met vriendelijke groet,</div>
                        <img src="https://plantipower.com/images/email/handtekening_john_scribble_white.png" alt="Signature" style={{ height: '85px', margin: '15px 0' }} />
                        <div style={{ fontSize: '16px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '1px' }}>John Geenen</div>
                    </div>
                </div>

                {/* Product Section - FULL DESCRIPTIONS */}
                <div style={{ backgroundColor: '#011410', padding: '40px 40px' }}>
                    <div style={{ marginBottom: '25px' }}>
                        <h2 style={{ fontSize: '20px', fontWeight: 900, textTransform: 'uppercase', color: '#ffffff', letterSpacing: '-0.5px' }}>
                            Je proefpakket <span style={{ color: '#84cc16' }}>bestaat uit:</span>
                        </h2>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '24px', border: '1px solid rgba(132, 204, 22, 0.2)', marginBottom: '15px', padding: '25px', display: 'flex', alignItems: 'center', gap: '30px' }}>
                        <div style={{ flex: 1 }}>
                            <div style={{ color: '#84cc16', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '1px' }}>PlantiPower</div>
                            <div style={{ fontSize: '30px', fontWeight: 900, marginBottom: '6px', color: '#84cc16', letterSpacing: '-1px' }}>ALL12</div>
                            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: '1.5' }}>
                                Optimaliseert de nutriëntenstroom en verbetert de opnamecapaciteit van het gewas voor maximale groei.
                            </div>
                        </div>
                        <img src="https://plantipower.com/images/products/plantipower-all12-transparant.png" alt="ALL12" style={{ width: '70px', height: 'auto' }} />
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '24px', border: '1px solid rgba(56, 189, 248, 0.2)', padding: '25px', display: 'flex', alignItems: 'center', gap: '30px' }}>
                        <div style={{ flex: 1 }}>
                            <div style={{ color: '#38bdf8', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '1px' }}>PlantiPower</div>
                            <div style={{ fontSize: '30px', fontWeight: 900, marginBottom: '6px', color: '#38bdf8', letterSpacing: '-1px' }}>SHIELD</div>
                            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: '1.5' }}>
                                Versterkt de natuurlijke weerbaarheid van de plant tegen abiotische stressfactoren en optimaliseert de celstructuur.
                            </div>
                        </div>
                        <img src="https://plantipower.com/images/products/plantipower-shield-transparant.png" alt="SHIELD" style={{ width: '70px', height: 'auto' }} />
                    </div>
                </div>

                {/* Testimonials */}
                <div style={{ padding: '20px 40px 40px 40px', backgroundColor: '#011410' }}>
                    <div style={{ marginBottom: '25px' }}>
                        <h2 style={{ fontSize: '20px', fontWeight: 900, textTransform: 'uppercase', color: '#ffffff', letterSpacing: '-0.5px' }}>
                            Ervaring van <span style={{ color: '#84cc16' }}>kwekers:</span>
                        </h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        <div style={{ borderLeft: '2px solid #84cc16', paddingLeft: '15px' }}>
                            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', fontStyle: 'italic', lineHeight: '1.5' }}>"Egalere wortels en betere opname."</div>
                            <div style={{ fontSize: '11px', fontWeight: 700, marginTop: '5px' }}>Sierteelt Kweker</div>
                        </div>
                        <div style={{ borderLeft: '2px solid #38bdf8', paddingLeft: '15px' }}>
                            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', fontStyle: 'italic', lineHeight: '1.5' }}>"Absoluut minder gewasstress."</div>
                            <div style={{ fontSize: '11px', fontWeight: 700, marginTop: '5px' }}>Glasgroente Specialist</div>
                        </div>
                    </div>
                </div>

                {/* PERFECT CONTINUOUS TRACKER */}
                <div style={{ backgroundColor: '#011d17', padding: '60px 40px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '45px' }}>
                        <h3 style={{ fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '3px', color: '#84cc16', marginBottom: '10px' }}>PACKAGE JOURNEY</h3>
                        <div style={{ fontSize: '20px', fontWeight: 900, color: '#ffffff' }}>Status: <span style={{ color: '#84cc16' }}>Klaarmaken</span></div>
                    </div>

                    <div style={{ position: 'relative', height: '80px', margin: '0 40px' }}>
                        {/* Static Line: Perfectly centered and continuous */}
                        <div style={{ position: 'absolute', top: '16px', left: '0', right: '0', height: '2px', backgroundColor: 'rgba(255,255,255,0.08)', zIndex: 1 }}></div>

                        {/* Progress Line: Flows to step 2 (25% of total width) */}
                        <div style={{ position: 'absolute', top: '16px', left: '0', width: '25%', height: '2px', backgroundColor: '#84cc16', zIndex: 2 }}></div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 10 }}>
                            {/* Step 1 */}
                            <div style={{ textAlign: 'center', width: '32px', marginLeft: '-16px' }}>
                                <div style={{ width: '32px', height: '32px', borderRadius: '16px', backgroundColor: '#84cc16', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #011d17' }}>
                                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="#011410" strokeWidth="4" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <div style={{ fontSize: '8px', fontWeight: 900, textTransform: 'uppercase', color: '#84cc16', marginTop: '12px' }}>Ontvangen</div>
                            </div>
                            {/* Step 2 */}
                            <div style={{ textAlign: 'center', width: '32px' }}>
                                <div style={{ width: '32px', height: '32px', borderRadius: '16px', backgroundColor: '#84cc16', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #011d17', boxShadow: '0 0 20px rgba(132, 204, 22, 0.4)' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '4px', backgroundColor: '#011410' }}></div>
                                </div>
                                <div style={{ fontSize: '8px', fontWeight: 900, textTransform: 'uppercase', color: '#ffffff', marginTop: '12px' }}>Klaarmaken</div>
                            </div>
                            {/* Step 3 */}
                            <div style={{ textAlign: 'center', width: '32px' }}>
                                <div style={{ width: '32px', height: '32px', borderRadius: '16px', backgroundColor: '#011d17', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <div style={{ width: '4px', height: '4px', borderRadius: '2px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
                                </div>
                                <div style={{ fontSize: '8px', fontWeight: 900, textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginTop: '12px' }}>Ingepakt</div>
                            </div>
                            {/* Step 4 */}
                            <div style={{ textAlign: 'center', width: '32px' }}>
                                <div style={{ width: '32px', height: '32px', borderRadius: '16px', backgroundColor: '#011d17', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <div style={{ width: '4px', height: '4px', borderRadius: '2px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
                                </div>
                                <div style={{ fontSize: '8px', fontWeight: 900, textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginTop: '12px' }}>Vervoeren</div>
                            </div>
                            {/* Step 5 */}
                            <div style={{ textAlign: 'center', width: '32px', marginRight: '-16px' }}>
                                <div style={{ width: '32px', height: '32px', borderRadius: '16px', backgroundColor: '#011d17', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <div style={{ width: '4px', height: '4px', borderRadius: '2px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
                                </div>
                                <div style={{ fontSize: '8px', fontWeight: 900, textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginTop: '12px' }}>Afleveren</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div style={{ padding: '0 40px 40px 40px', backgroundColor: '#011410' }}>
                    <div style={{ padding: '25px', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '24px', textAlign: 'center' }}>
                        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: '1.6' }}>
                            In de volgende update van ons vertellen we meer over ons bedrijf en wie de kweker was die ons inspireerde.
                        </div>
                    </div>
                </div>

                <div style={{ background: '#000', padding: '40px 40px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px' }}>
                        Venlo, Nederland  |  PLANTIPOWER.COM
                    </div>
                </div>
            </div>
        </div>
    );
}
