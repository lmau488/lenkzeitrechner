export const metadata = {
  title: 'Datenschutzerklärung – LenkzeitRechner.de',
  robots: 'noindex',
};

export default function Datenschutz() {
  const s = { minHeight:'100vh', background:'#010409', color:'#e6edf3', fontFamily:"'Segoe UI',sans-serif", padding:'40px 16px' };
  const card = { maxWidth:640, margin:'0 auto', background:'#0d1117', border:'1px solid #1c2128', borderRadius:10, padding:'28px 32px', lineHeight:1.9, fontSize:14 };
  const h2 = { fontSize:16, marginTop:28, color:'#f0883e' };
  const dim = { color:'#8b949e' };
  return (
    <div style={s}>
      <div style={card}>
        <h1 style={{ fontSize:22, color:'#f0883e', marginTop:0 }}>Datenschutzerklärung</h1>

        <h2 style={h2}>1. Verantwortlicher</h2>
        <p>
          Luis Mauermaier<br/>
          Wolnzacher Weg 9a, 85283 Wolnzach<br/>
          E-Mail: luis.mauermaier@proton.me
        </p>

        <h2 style={h2}>2. Allgemeines zur Datenverarbeitung</h2>
        <p style={dim}>
          Alle Berechnungen finden ausschließlich in Ihrem Browser statt (clientseitig). 
          Es werden keine personenbezogenen Daten an unseren Server übermittelt. 
          Wir speichern keine Eingabedaten, keine IP-Adressen und setzen keine eigenen Cookies.
        </p>

        <h2 style={h2}>3. Hosting</h2>
        <p style={dim}>
          Diese Website wird auf Servern von Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA) gehostet. 
          Vercel kann beim Aufruf der Website technisch bedingt Server-Log-Dateien erfassen (IP-Adresse, Zeitpunkt, aufgerufene Seite). 
          Details finden Sie in der Datenschutzerklärung von Vercel: https://vercel.com/legal/privacy-policy.
          Die Datenübertragung in die USA erfolgt auf Grundlage von Art. 49 Abs. 1 lit. b DSGVO.
        </p>

        <h2 style={h2}>4. Google Fonts</h2>
        <p style={dim}>
          Diese Seite nutzt Google Fonts (JetBrains Mono) zur einheitlichen Schriftdarstellung. 
          Beim Seitenaufruf wird eine Verbindung zu Servern von Google LLC hergestellt. 
          Dabei kann Ihre IP-Adresse an Google übertragen werden. 
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einheitlicher Darstellung).
          Datenschutzerklärung von Google: https://policies.google.com/privacy
        </p>

        <h2 style={h2}>5. Google AdSense (nach Aktivierung)</h2>
        <p style={dim}>
          Nach Genehmigung durch Google werden auf dieser Website Werbeanzeigen durch Google AdSense eingeblendet. 
          Google verwendet dabei Cookies, um Anzeigen basierend auf früheren Besuchen auf dieser oder anderen Websites zu schalten. 
          Sie können die personalisierte Werbung in den Google-Anzeigeneinstellungen deaktivieren: https://www.google.com/settings/ads.
          Rechtsgrundlage ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
        </p>

        <h2 style={h2}>6. Ihre Rechte</h2>
        <p style={dim}>
          Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), 
          Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), 
          Datenübertragbarkeit (Art. 20 DSGVO) und Widerspruch (Art. 21 DSGVO). 
          Beschwerden können Sie an die zuständige Aufsichtsbehörde richten.
        </p>

        <h2 style={h2}>7. Aktualität</h2>
        <p style={dim}>
          Stand: März 2026. Diese Datenschutzerklärung wird bei Bedarf aktualisiert.
        </p>

        <p style={{ marginTop:24 }}>
          <a href="/" style={{ color:'#f0883e', textDecoration:'none' }}>← Zurück zum Rechner</a>
        </p>
      </div>
    </div>
  );
}
