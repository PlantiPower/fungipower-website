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
                <div style={{ padding: '40px 40px 20px 40px' }}>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.8', marginBottom: '10px', fontWeight: 300 }}>Beste teler,</div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px', fontWeight: 300 }}>
                        Goed dat je ervoor kiest om PlantiPower zelf te ervaren.<br /><br />
                        Wij vinden dat een samenwerking begint bij resultaat. Eert zien wat het doet in jouw teelt. Geen verkooppraat, maar meetbaar verschil in wortelontwikkeling, opname en gewasreactie.<br /><br />
                        We zijn benieuwd naar de resultaten in jouw gewas.
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.8', fontWeight: 300 }}>Met vriendelijke groet,</div>
                        <img src="https://plantipower.com/images/email/handtekening_john_scribble_white.png" alt="Signature" style={{ height: '60px', margin: '5px 0' }} />
                        <div style={{ fontSize: '16px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '1px' }}>John Geenen</div>
                    </div>
                </div>

                {/* PREMIUM JOURNEY TRACKER */}
                <div style={{ backgroundColor: '#011d17', padding: '60px 30px', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#84cc16', padding: '6px 15px', borderRadius: '100px', marginBottom: '10px' }}>
                            <span style={{ color: '#011410', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px' }}>Status: In behandeling</span>
                        </div>
                        <h3 style={{ fontSize: '24px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-1px', color: '#ffffff', margin: 0 }}>De reis naar jouw kas</h3>
                    </div>

                    <div style={{ position: 'relative', height: '100px' }}>
                        {/* Static Track Line */}
                        <div style={{ position: 'absolute', top: '15px', left: '10%', right: '10%', height: '4px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '2px' }}></div>

                        {/* Progress Line */}
                        <div style={{ position: 'absolute', top: '15px', left: '10%', width: '25%', height: '4px', background: 'linear-gradient(90deg, #84cc16 0%, #a3e635 100%)', borderRadius: '2px', boxShadow: '0 0 15px rgba(132, 204, 22, 0.4)' }}></div>

                        {/* Steps */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 5 }}>
                            {/* Step 1: Request (Done) */}
                            <div style={{ textAlign: 'center', width: '20%' }}>
                                <div style={{ width: '34px', height: '34px', borderRadius: '17px', backgroundColor: '#84cc16', margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #011d17' }}>
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#011410" strokeWidth="4" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <div style={{ fontSize: '9px', fontWeight: 900, textTransform: 'uppercase', color: '#84cc16' }}>Aanvraag</div>
                            </div>

                            {/* Step 2: Preparing (Active) */}
                            <div style={{ textAlign: 'center', width: '20%' }}>
                                <div style={{ width: '34px', height: '34px', borderRadius: '17px', backgroundColor: '#84cc16', margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #011d17', boxShadow: '0 0 20px rgba(132, 204, 22, 0.6)' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '5px', backgroundColor: '#011410' }}></div>
                                </div>
                                <div style={{ fontSize: '9px', fontWeight: 900, textTransform: 'uppercase', color: '#ffffff' }}>Klaarmaken</div>
                            </div>

                            {/* Step 3: Packed */}
                            <div style={{ textAlign: 'center', width: '20%' }}>
                                <div style={{ width: '34px', height: '34px', borderRadius: '17px', backgroundColor: 'rgba(255,255,255,0.05)', margin: '0 auto 10px', border: '4px solid #011d17' }}></div>
                                <div style={{ fontSize: '9px', fontWeight: 900, textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>Ingepakt</div>
                            </div>

                            {/* Step 4: Transport (The Van Location) */}
                            <div style={{ textAlign: 'center', width: '20%', position: 'relative' }}>
                                <div style={{ width: '34px', height: '34px', borderRadius: '17px', backgroundColor: 'rgba(255,255,255,0.05)', margin: '0 auto 10px', border: '4px solid #011d17' }}></div>
                                <div style={{ fontSize: '9px', fontWeight: 900, textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>Vervoeren</div>

                                {/* BUS BADGE - VETTER UITGEWERKT */}
                                <div style={{ position: 'absolute', top: '45px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
                                    <div style={{ backgroundColor: '#012b24', border: '1.5px solid #84cc16', borderRadius: '12px', padding: '10px 15px', color: '#84cc16', display: 'flex', alignItems: 'center', gap: '10px', whiteSpace: 'nowrap', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                                        <div style={{ fontSize: '24px' }}>🚐</div>
                                        <div style={{ textAlign: 'left' }}>
                                            <div style={{ fontSize: '8px', fontWeight: 900, color: '#ffffff', opacity: 0.5, textTransform: 'uppercase' }}>Express</div>
                                            <div style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '1px' }}>PLANTIPOWER</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 5: Delivered */}
                            <div style={{ textAlign: 'center', width: '20%' }}>
                                <div style={{ width: '34px', height: '34px', borderRadius: '17px', backgroundColor: 'rgba(255,255,255,0.05)', margin: '0 auto 10px', border: '4px solid #011d17' }}></div>
                                <div style={{ fontSize: '9px', fontWeight: 900, textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>Afleveren</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Section */}
                <div style={{ backgroundColor: '#011410', padding: '60px 40px 40px 40px' }}>
                    <div style={{ marginBottom: '25px' }}>
                        <h2 style={{ fontSize: '20px', fontWeight: 900, textTransform: 'uppercase', color: '#ffffff', letterSpacing: '-0.5px' }}>
                            Je proefpakket <span style={{ color: '#84cc16' }}>bestaat uit:</span>
                        </h2>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '24px', border: '1px solid rgba(132, 204, 22, 0.2)', marginBottom: '15px', padding: '25px', display: 'flex', alignItems: 'center', gap: '30px' }}>
                        <div style={{ flex: 1 }}>
                            <div style={{ color: '#84cc16', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '1px' }}>PlantiPower</div>
                            <div style={{ fontSize: '30px', fontWeight: 900, marginBottom: '6px', color: '#84cc16', letterSpacing: '-1px' }}>ALL12</div>
                            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: '1.5' }}>Optimaliseert transport naar de wortel.</div>
                        </div>
                        <img src="https://plantipower.com/images/products/plantipower-all12-transparant.png" alt="ALL12" style={{ width: '70px', height: 'auto' }} />
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '24px', border: '1px solid rgba(56, 189, 248, 0.2)', padding: '25px', display: 'flex', alignItems: 'center', gap: '30px' }}>
                        <div style={{ flex: 1 }}>
                            <div style={{ color: '#38bdf8', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '1px' }}>PlantiPower</div>
                            <div style={{ fontSize: '30px', fontWeight: 900, marginBottom: '6px', color: '#38bdf8', letterSpacing: '-1px' }}>SHIELD</div>
                            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: '1.5' }}>Versterkt natuurlijke weerbaarheid.</div>
                        </div>
                        <img src="https://plantipower.com/images/products/plantipower-shield-transparant.png" alt="SHIELD" style={{ width: '70px', height: 'auto' }} />
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
