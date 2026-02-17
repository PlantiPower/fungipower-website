import { Resend } from 'resend';

async function sendManualNotification() {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error('RESEND_API_KEY missing');
        return;
    }
    const resend = new Resend(apiKey);

    try {
        await resend.emails.send({
            from: 'PlantiPower Orders <info@mail.plantipower.com>',
            to: 'info@plantipower.com',
            replyTo: 'r.hadad@plantipower.com',
            subject: '🎉 Nieuwe Proefpakket Bestelling: Technical Bot (Test)',
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #10b981;">Nieuwe bestelling ontvangen!</h2>
                    <p>Er is zojuist een succesvolle betaling gedaan voor een proefpakket.</p>
                    
                    <h3 style="border-bottom: 2px solid #eee; padding-bottom: 5px;">Klantgegevens</h3>
                    <p><strong>Naam:</strong> Technical Bot</p>
                    <p><strong>Bedrijf:</strong> PlantiPower Test</p>
                    <p><strong>Email:</strong> r.hadad@plantipower.com</p>
                    <p><strong>Telefoon:</strong> 0612345678</p>
                    
                    <h3 style="border-bottom: 2px solid #eee; padding-bottom: 5px;">Leveradres (via Stripe)</h3>
                    <p>Teststraat 1, 1234 AB Venlo, NL</p>
                    
                    <h3 style="border-bottom: 2px solid #eee; padding-bottom: 5px;">Product & Teelt</h3>
                    <p><strong>Order:</strong> PlantiPower Proefpakket (€1,00 - TEST)</p>
                    <p><strong>Categorie:</strong> Groenten</p>
                    <p><strong>Specifiek Gewas:</strong> Tomaat</p>
                    <p><strong>Opmerkingen:</strong> Dit is een testorder ter verificatie van de notificaties.</p>
                    
                    <h3 style="border-bottom: 2px solid #eee; padding-bottom: 5px;">Systeem Details</h3>
                    <p><strong>Taal:</strong> nl</p>
                    <p><strong>Stripe Session ID:</strong> test_session_manual_resend</p>
                    
                    <hr style="border: none; border-top: 1px solid #eee; margin-top: 20px;" />
                    <p style="font-size: 12px; color: #999;">Gezonden via PlantiPower Automation</p>
                </div>
            `
        });
        console.log('Detailed manual notification sent to info@plantipower.com');
    } catch (err) {
        console.error('Error sending manual notification:', err);
    }
}

sendManualNotification();
