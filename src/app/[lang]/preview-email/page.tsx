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

                {/* Main Message */}
                <div style={{ padding: '40px 40px 40px 40px' }}>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.8', marginBottom: '10px', fontWeight: 300 }}>Beste teler,</div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px', fontWeight: 300 }}>
                        Goed dat je ervoor kiest om PlantiPower zelf te ervaren.<br /><br />
                        Wij vinden dat een samenwerking begint bij resultaat. Eerst zien wat het doet in jouw teelt, onder jouw omstandigheden. Geen verkooppraat, maar meetbaar verschil in wortelontwikkeling, opname en gewasreactie binnen de teelt.<br /><br />
                        Onze producten ALL12 en SHIELD doen wat ze beloven. We laten ze liever spreken in de kas dan in een brochure.<br /><br />
                        We zijn benieuwd naar de resultaten in jouw gewas.
                    </div>

                    <div>
                        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.8', fontWeight: 300 }}>Met vriendelijke groet,</div>
                        <img src="https://plantipower.com/images/email/handtekening_john_scribble_white.png" alt="Signature" style={{ height: '60px', margin: '5px 0' }} />
                        <div style={{ fontSize: '16px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '1px' }}>John Geenen</div>
                    </div>
                </div>

                {/* Tracker Section - DOMINO'S STYLE */}
                <div style={{ backgroundColor: '#011d17', padding: '50px 40px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', color: '#84cc16', margin: 0 }}>Package Tracker</h3>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginTop: '5px' }}>Volg de reis van je PlantiPower proefpakket</p>
                    </div>

                    <div style={{ position: 'relative', padding: '0 20px' }}>
                        {/* Connecting Line */}
                        <div style={{ position: 'absolute', top: '15px', left: '40px', right: '40px', height: '2px', backgroundColor: 'rgba(255,255,255,0.1)', zIndex: 1 }}></div>
                        <div style={{ position: 'absolute', top: '15px', left: '40px', width: '33%', height: '2px', backgroundColor: '#84cc16', zIndex: 2 }}></div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 3 }}>
                            {/* Step 1: Received */}
                            <div style={{ textAlign: 'center', width: '80px' }}>
                                <div style={{ width: '30px', height: '30px', borderRadius: '15px', backgroundColor: '#84cc16', margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="3" fill="none" style={{ color: '#011410' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <div style={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', color: '#84cc16' }}>Aanvraag</div>
                            </div>

                            {/* Step 2: Preparing (ACTIVE) */}
                            <div style={{ textAlign: 'center', width: '80px' }}>
                                <div style={{ width: '30px', height: '30px', borderRadius: '15px', backgroundColor: '#84cc16', margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(132, 204, 22, 0.4)' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '5px', backgroundColor: '#011410' }}></div>
                                </div>
                                <div style={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', color: '#ffffff' }}>Klaarmaken</div>
                            </div>

                            {/* Step 3: Transport (The Van) */}
                            <div style={{ textAlign: 'center', width: '80px' }}>
                                <div style={{ width: '30px', height: '30px', borderRadius: '15px', backgroundColor: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.05)', margin: '0 auto 10px' }}></div>
                                <div style={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Onderweg</div>
                                {/* Bus Graphic Placeholder/Indicator */}
                                <div style={{ position: 'absolute', top: '-45px', left: '60%', transform: 'translateX(-50%)', opacity: 0.5 }}>
                                    <div style={{ backgroundColor: '#012b24', padding: '8px 12px', borderRadius: '8px', border: '1px solid rgba(132, 204, 22, 0.3)', whiteSpace: 'nowrap' }}>
                                        <span style={{ fontSize: '16px' }}>🚐</span>
                                        <span style={{ fontSize: '8px', fontWeight: 900, color: '#84cc16', marginLeft: '5px' }}>PLANTIPOWER</span>
                                    </div>
                                </div>
                            </div>

                            {/* Step 4: Delivered */}
                            <div style={{ textAlign: 'center', width: '80px' }}>
                                <div style={{ width: '30px', height: '30px', borderRadius: '15px', backgroundColor: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.05)', margin: '0 auto 10px' }}></div>
                                <div style={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Afgeleverd</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Section */}
                <div style={{ backgroundColor: '#011410', padding: '40px 40px' }}>
                    <div style={{ marginBottom: '25px' }}>
                        <h2 style={{ fontSize: '20px', fontWeight: 900, textTransform: 'uppercase', color: '#ffffff', letterSpacing: '-0.5px' }}>
                            Je proefpakket <span style={{ color: '#84cc16' }}>bestaat uit:</span>
                        </h2>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(132, 204, 22, 0.2)', marginBottom: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div style={{ flex: 1 }}>
                            <div style={{ color: '#84cc16', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '1px' }}>PlantiPower</div>
                            <div style={{ fontSize: '26px', fontWeight: 900, marginBottom: '4px', color: '#84cc16' }}>ALL12</div>
                            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: '1.4' }}>Optimaliseert transport naar de wortel.</div>
                        </div>
                        <img src="https://plantipower.com/images/products/plantipower-all12-transparant.png" alt="ALL12" style={{ width: '60px', height: 'auto' }} />
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(56, 189, 248, 0.2)', padding: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div style={{ flex: 1 }}>
                            <div style={{ color: '#38bdf8', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '1px' }}>PlantiPower</div>
                            <div style={{ fontSize: '26px', fontWeight: 900, marginBottom: '4px', color: '#38bdf8' }}>SHIELD</div>
                            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: '1.4' }}>Versterkt natuurlijke weerbaarheid.</div>
                        </div>
                        <img src="https://plantipower.com/images/products/plantipower-shield-transparant.png" alt="SHIELD" style={{ width: '60px', height: 'auto' }} />
                    </div>
                </div>

                {/* NEXT UPDATE */}
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
