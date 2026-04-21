export const metadata = {
  title: 'Datenschutzerklärung – LenkzeitRechner.de',
  robots: 'noindex',
};

const C = {
  bg:'#13151f',surface:'#1c1f2e',surface2:'#242738',border:'rgba(255,255,255,0.07)',
  acc:'#f0883e',txt:'#ffffff',muted:'#94a3b8',dim:'#64748b',
  navBg:'rgba(19,21,31,0.85)',dotGrid:'rgba(255,255,255,0.06)',
};

export default function Datenschutz() {
  const card = {background:C.surface,border:`1px solid ${C.border}`,borderRadius:18,padding:'28px 32px',marginBottom:20};
  const h2s = {fontSize:18,fontWeight:700,color:C.acc,marginBottom:8,marginTop:24};
  const p = {fontSize:14,color:C.muted,lineHeight:1.8,marginBottom:12};

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        body{font-family:'Plus Jakarta Sans',-apple-system,sans-serif;background:${C.bg};}
        .dot-grid{background-image:radial-gradient(circle,${C.dotGrid} 1px,transparent 1px);background-size:28px 28px;}
        .nav-link{color:${C.muted};text-decoration:none;font-size:14px;font-weight:500;transition:color 0.15s;padding:6px 0;}
        .nav-link:hover{color:${C.txt};}
        .nav-link.active{color:${C.acc};}
        @media(max-width:580px){.wrap{padding:0 12px!important;}.nav-link{display:none;}}
      `}</style>
      <div style={{minHeight:'100vh',background:C.bg,color:C.txt}} className="dot-grid">
        <nav style={{borderBottom:`1px solid ${C.border}`,background:C.navBg,backdropFilter:'blur(12px)',position:'sticky',top:0,zIndex:100}}>
          <div className="wrap" style={{maxWidth:1200,margin:'0 auto',padding:'0 24px',display:'flex',alignItems:'center',justifyContent:'space-between',height:56,gap:16}}>
            <a href="/" style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none'}}>
              <div style={{background:'linear-gradient(135deg,#f97316,#ea580c)',borderRadius:10,width:34,height:34,display:'flex',alignItems:'center',justifyContent:'center',fontSize:18}}>🚛</div>
              <span style={{fontWeight:800,fontSize:16,color:C.txt}}>LenkzeitRechner.de</span>
            </a>
            <div style={{display:'flex',alignItems:'center',gap:24}}>
              <a href="/lkw-lenkzeiten" className="nav-link">Lenkzeiten</a>
              <a href="/pausenrechner" className="nav-link">Pausenrechner</a>
              <a href="/impressum" className="nav-link">Impressum</a>
            </div>
          </div>
        </nav>

        <div className="wrap" style={{maxWidth:820,margin:'0 auto',padding:'40px 24px 60px'}}>
          <div style={{fontSize:13,color:C.dim,marginBottom:20}}>
            <a href="/" style={{color:C.acc,textDecoration:'none'}}>LenkzeitRechner.de</a>{' → '}Datenschutzerklärung
          </div>

          <div style={card}>
            <h1 style={{fontSize:32,fontWeight:800,color:C.txt,marginBottom:16,lineHeight:1.2}}>Datenschutzerklärung</h1>

            <h2 style={h2s}>1. Verantwortlicher</h2>
            <p style={p}>
              Luis Mauermaier<br/>
              Wolnzacher Weg 9a, 85283 Wolnzach<br/>
              E-Mail: luis.mauermaier@proton.me
            </p>

            <h2 style={h2s}>2. Allgemeines zur Datenverarbeitung</h2>
            <p style={p}>
              Alle Berechnungen finden ausschließlich in Ihrem Browser statt (clientseitig).
              Es werden keine personenbezogenen Daten an unseren Server übermittelt.
              Wir speichern keine Eingabedaten, keine IP-Adressen und setzen keine eigenen Cookies.
            </p>

            <h2 style={h2s}>3. Hosting</h2>
            <p style={p}>
              Diese Website wird auf Servern von Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA) gehostet.
              Vercel kann beim Aufruf der Website technisch bedingt Server-Log-Dateien erfassen (IP-Adresse, Zeitpunkt, aufgerufene Seite).
              Details finden Sie in der Datenschutzerklärung von Vercel: https://vercel.com/legal/privacy-policy.
              Die Datenübertragung in die USA erfolgt auf Grundlage von Art. 49 Abs. 1 lit. b DSGVO.
            </p>

            <h2 style={h2s}>4. Google Fonts</h2>
            <p style={p}>
              Diese Seite nutzt Google Fonts (Plus Jakarta Sans, JetBrains Mono) zur einheitlichen Schriftdarstellung.
              Beim Seitenaufruf wird eine Verbindung zu Servern von Google LLC hergestellt.
              Dabei kann Ihre IP-Adresse an Google übertragen werden.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einheitlicher Darstellung).
              Datenschutzerklärung von Google: https://policies.google.com/privacy
            </p>

            <h2 style={h2s}>5. Google AdSense (nach Aktivierung)</h2>
            <p style={p}>
              Nach Genehmigung durch Google werden auf dieser Website Werbeanzeigen durch Google AdSense eingeblendet.
              Google verwendet dabei Cookies, um Anzeigen basierend auf früheren Besuchen auf dieser oder anderen Websites zu schalten.
              Sie können die personalisierte Werbung in den Google-Anzeigeneinstellungen deaktivieren: https://www.google.com/settings/ads.
              Rechtsgrundlage ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
            </p>

            <h2 style={h2s}>6. Ihre Rechte</h2>
            <p style={p}>
              Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO),
              Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO),
              Datenübertragbarkeit (Art. 20 DSGVO) und Widerspruch (Art. 21 DSGVO).
              Beschwerden können Sie an die zuständige Aufsichtsbehörde richten.
            </p>

            <h2 style={h2s}>7. Aktualität</h2>
            <p style={p}>
              Stand: März 2026. Diese Datenschutzerklärung wird bei Bedarf aktualisiert.
            </p>
          </div>

          <div style={{...card,background:`linear-gradient(135deg,rgba(240,136,62,0.08),${C.surface})`,borderColor:'rgba(240,136,62,0.2)',textAlign:'center'}}>
            <div style={{fontSize:32,marginBottom:12}}>🚛</div>
            <p style={{fontSize:15,color:C.muted,lineHeight:1.8,textAlign:'center',marginBottom:12}}>Zurück zum kostenlosen Lenkzeitrechner</p>
            <a href="/" style={{display:'inline-block',background:C.acc,color:'#fff',borderRadius:10,padding:'13px 28px',fontWeight:700,textDecoration:'none',fontSize:15,boxShadow:'0 4px 16px rgba(240,136,62,0.3)'}}>
              → Zum Lenkzeitrechner
            </a>
          </div>

          <footer style={{display:'flex',justifyContent:'center',gap:16,padding:'16px 0',fontSize:12,color:C.dim,borderTop:`1px solid ${C.border}`,flexWrap:'wrap'}}>
            <a href="/lkw-lenkzeiten" style={{color:C.dim,textDecoration:'none'}}>Lenkzeiten</a>
            <a href="/pausenrechner" style={{color:C.dim,textDecoration:'none'}}>Pausenrechner</a>
            <a href="/ruhezeiten" style={{color:C.dim,textDecoration:'none'}}>Ruhezeiten</a>
            <a href="/bussgeldkatalog" style={{color:C.dim,textDecoration:'none'}}>Bußgelder</a>
            <a href="/digitaler-tachograph" style={{color:C.dim,textDecoration:'none'}}>Tachograph</a>
            <a href="/mobilitaetspaket" style={{color:C.dim,textDecoration:'none'}}>Mobilitätspaket</a>
            <a href="/ueber-uns" style={{color:C.dim,textDecoration:'none'}}>Über uns</a>
            <a href="/impressum" style={{color:C.dim,textDecoration:'none'}}>Impressum</a>
            <a href="/datenschutz" style={{color:C.acc,textDecoration:'none'}}>Datenschutz</a>
            <span>© 2026 LenkzeitRechner.de</span>
          </footer>
        </div>
      </div>
    </>
  );
}
