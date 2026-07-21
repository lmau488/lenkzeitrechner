import AdUnit from '../AdUnit';

export const metadata = {
  title: 'Lenkzeiten-Kontrolle & Bußgeldverfahren 2026 – Ablauf, Mitführungspflicht, Rechte | LenkzeitRechner.de',
  description: 'Wie läuft eine Kontrolle der Lenk- und Ruhezeiten ab? Straßen- und Betriebskontrolle durch Polizei und BALM, die 56-Tage-Mitführungspflicht, Fahrerkarte, Ablauf eines Bußgeldverfahrens und was Fahrer und Unternehmer beachten müssen.',
  keywords: 'Lenkzeiten Kontrolle, Straßenkontrolle Lkw, Betriebskontrolle BALM, BAG Kontrolle, Mitführungspflicht 56 Tage, Fahrerkarte Kontrolle, Bußgeldverfahren Lenkzeiten, Tachograph Kontrolle, Fahrpersonalkontrolle',
  alternates: { canonical: 'https://www.lenkzeitrechner.de/kontrolle' },
  openGraph: {
    title: 'Lenkzeiten-Kontrolle & Bußgeldverfahren – Ablauf und Mitführungspflicht',
    description: 'Straßen- und Betriebskontrolle, 56-Tage-Mitführungspflicht und Ablauf des Bußgeldverfahrens – kompakt erklärt.',
    url: 'https://www.lenkzeitrechner.de/kontrolle',
    images: [{ url: 'https://www.lenkzeitrechner.de/og-image.svg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Lenkzeiten-Kontrolle & Bußgeldverfahren 2026', description: 'Ablauf der Kontrolle, Mitführungspflicht und Rechte kompakt erklärt.' },
};

const C = {
  bg:'#13151f',surface:'#1c1f2e',surface2:'#242738',border:'rgba(255,255,255,0.07)',
  acc:'#f0883e',txt:'#ffffff',muted:'#94a3b8',dim:'#64748b',
  navBg:'rgba(19,21,31,0.85)',dotGrid:'rgba(255,255,255,0.06)',
  success:'#22c55e',error:'#ef4444',
};

const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
    {"@type":"Question","name":"Wie viele Tage muss ich bei einer Kontrolle nachweisen können?","acceptedAnswer":{"@type":"Answer","text":"Seit dem 31. Dezember 2024 müssen Fahrer bei einer Straßenkontrolle die Aufzeichnungen des laufenden Tages und der vorausgehenden 56 Kalendertage vorlegen können. Zuvor waren es 28 Tage; das EU-Mobilitätspaket hat den Zeitraum verdoppelt."}},
    {"@type":"Question","name":"Wer kontrolliert die Lenk- und Ruhezeiten?","acceptedAnswer":{"@type":"Answer","text":"Auf der Straße kontrollieren Polizei und das Bundesamt für Logistik und Mobilität (BALM, früher BAG). Betriebskontrollen bei den Unternehmen führt ebenfalls das BALM sowie die zuständigen Landesbehörden durch."}},
    {"@type":"Question","name":"Was passiert bei einem Verstoß gegen die Lenkzeiten?","acceptedAnswer":{"@type":"Answer","text":"Verstöße werden nach dem Bußgeldkatalog (BKatV) geahndet – häufig gegen Fahrer und Unternehmer zugleich. Die Beträge richten sich nach Schwere und Dauer der Überschreitung. Bei Manipulation des Tachographen drohen deutlich höhere Sanktionen bis hin zu strafrechtlichen Folgen."}},
    {"@type":"Question","name":"Wie lange muss ein Unternehmen die Daten aufbewahren?","acceptedAnswer":{"@type":"Answer","text":"Die Fahrerkarte ist spätestens alle 28 Tage, der Massenspeicher des Fahrzeugs spätestens alle 90 Tage auszulesen. Die Daten sind anschließend mindestens ein Jahr aufzubewahren und der Kontrollbehörde auf Verlangen vorzulegen."}}
  ]
};

export default function Kontrolle() {
  const card = {background:C.surface,border:`1px solid ${C.border}`,borderRadius:18,padding:'28px 32px',marginBottom:20};
  const h2s = {fontSize:20,fontWeight:700,color:C.acc,marginBottom:12,marginTop:0};
  const h3s = {fontSize:16,fontWeight:700,color:C.txt,marginBottom:8,marginTop:18};
  const p = {fontSize:15,color:C.muted,lineHeight:1.8,marginBottom:12};
  const accent = {color:C.acc,fontWeight:700};
  const highlight = {background:'rgba(240,136,62,0.08)',border:'1px solid rgba(240,136,62,0.2)',borderRadius:12,padding:'16px 20px',marginBottom:16};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        body{font-family:'Plus Jakarta Sans',-apple-system,sans-serif;background:${C.bg};}
        .dot-grid{background-image:radial-gradient(circle,${C.dotGrid} 1px,transparent 1px);background-size:28px 28px;}
        .nav-link{color:${C.muted};text-decoration:none;font-size:14px;font-weight:500;transition:color 0.15s;padding:6px 0;}
        .nav-link:hover{color:${C.txt};}
        .nav-link.active{color:${C.acc};}
        .sub-tbl{width:100%;border-collapse:collapse;}
        .sub-tbl th,.sub-tbl td{padding:10px 14px;text-align:left;font-size:13px;border-bottom:1px solid ${C.border};vertical-align:top;}
        .sub-tbl th{font-size:11px;text-transform:uppercase;letter-spacing:1px;color:${C.dim};font-weight:700;background:${C.surface2};}
        ul.lz{font-size:15px;color:${C.muted};line-height:1.8;padding-left:20px;margin-bottom:12px;}
        ul.lz li{margin-bottom:8px;}
        @media(max-width:580px){.wrap{padding:0 12px!important;}.sub-tbl th:last-child,.sub-tbl td:last-child{display:none;}.nav-link{display:none;}}
      `}</style>
      <div style={{minHeight:'100vh',background:C.bg,color:C.txt}} className="dot-grid">
        <nav style={{borderBottom:`1px solid ${C.border}`,background:C.navBg,backdropFilter:'blur(12px)',position:'sticky',top:0,zIndex:100}}>
          <div className="wrap" style={{maxWidth:1200,margin:'0 auto',padding:'0 24px',display:'flex',alignItems:'center',justifyContent:'space-between',height:56,gap:16}}>
            <a href="/" style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none'}}>
              <div style={{background:'linear-gradient(135deg,#f97316,#ea580c)',borderRadius:10,width:34,height:34,display:'flex',alignItems:'center',justifyContent:'center'}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 17h4V5H2v12h3"/><path d="M14 8h4l4 4v5h-3"/><circle cx="7.5" cy="17.5" r="1.6"/><circle cx="17.5" cy="17.5" r="1.6"/></svg>
              </div>
              <span style={{fontWeight:800,fontSize:16,color:C.txt}}>LenkzeitRechner.de</span>
            </a>
            <div style={{display:'flex',alignItems:'center',gap:24}}>
              <a href="/lkw-lenkzeiten" className="nav-link">Lenkzeiten</a>
              <a href="/pausenrechner" className="nav-link">Pausenrechner</a>
              <a href="/kontrolle" className="nav-link active">Kontrolle</a>
            </div>
          </div>
        </nav>

        <div className="wrap" style={{maxWidth:820,margin:'0 auto',padding:'40px 24px 60px'}}>
          <div style={{fontSize:13,color:C.dim,marginBottom:20}}>
            <a href="/" style={{color:C.acc,textDecoration:'none'}}>LenkzeitRechner.de</a>{' → '}Kontrolle &amp; Bußgeldverfahren
          </div>

          <div style={card}>
            <h1 style={{fontSize:32,fontWeight:800,color:C.txt,marginBottom:8,lineHeight:1.2}}>Kontrolle &amp; Bußgeldverfahren</h1>
            <p style={{...p,fontSize:17,color:C.txt,marginBottom:16}}>
              Ob am Straßenrand oder im Betrieb: Die Einhaltung der Lenk- und Ruhezeiten wird regelmäßig geprüft. Seit dem Mobilitätspaket müssen Fahrer die Aufzeichnungen von <span style={accent}>56 Tagen</span> vorlegen können. Diese Seite erklärt, wer kontrolliert, was mitzuführen ist und wie ein Bußgeldverfahren abläuft.
            </p>
            <a href="/" style={{display:'inline-block',background:C.acc,color:'#fff',borderRadius:10,padding:'12px 24px',fontWeight:700,textDecoration:'none',fontSize:14}}>
              → Zum kostenlosen Lenkzeitrechner
            </a>
          </div>

          <section style={card}>
            <h2 style={h2s}>Wer kontrolliert — und wo?</h2>
            <table className="sub-tbl">
              <thead><tr><th>Art</th><th>Wer</th><th>Wo</th></tr></thead>
              <tbody>
                <tr><td style={{color:C.txt}}>Straßenkontrolle</td><td style={{color:C.muted}}>Polizei, BALM (früher BAG)</td><td style={{color:C.dim}}>am Fahrbahnrand, auf Rastplätzen, an festen Kontrollstellen</td></tr>
                <tr><td style={{color:C.txt}}>Betriebskontrolle</td><td style={{color:C.muted}}>BALM, Landesbehörden</td><td style={{color:C.dim}}>am Unternehmenssitz, Einsicht in gespeicherte Daten</td></tr>
              </tbody>
            </table>
            <p style={{...p,marginTop:12}}>
              Das <strong style={{color:C.txt}}>Bundesamt für Logistik und Mobilität (BALM)</strong> — bis Anfang 2023 als Bundesamt für Güterverkehr (BAG) bekannt — ist die zentrale Bundesbehörde für die Überwachung des Güterkraftverkehrs. Kontrolliert wird risikoorientiert: Unternehmen mit auffälliger Verstoßhistorie werden häufiger geprüft.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>Die 56-Tage-Mitführungspflicht</h2>
            <div style={highlight}>
              Seit dem <span style={accent}>31. Dezember 2024</span> müssen Fahrer bei einer Kontrolle die Aufzeichnungen des <span style={accent}>laufenden Tages</span> und der <span style={accent}>vorausgehenden 56 Kalendertage</span> vorlegen können. Vorher waren es 28 Tage — das Mobilitätspaket hat den Zeitraum verdoppelt.
            </div>
            <p style={p}>Konkret vorzuweisen sind je nach Fahrzeug und Zeitraum:</p>
            <ul className="lz">
              <li><strong style={{color:C.txt}}>Fahrerkarte</strong> mit den gespeicherten Aktivitäten (digitaler Tachograph).</li>
              <li><strong style={{color:C.txt}}>Manuelle Nachträge und Ausdrucke</strong> für Zeiten ohne Fahrzeugbewegung oder bei technischen Störungen.</li>
              <li><strong style={{color:C.txt}}>Schaublätter</strong> für Zeiträume mit analogem Fahrtenschreiber (bei älteren Fahrzeugen).</li>
              <li><strong style={{color:C.txt}}>Nachweise über fahrfreie Tage</strong>, Urlaub oder Krankheit, soweit relevant.</li>
            </ul>
            <p style={{...p,fontSize:14,color:C.dim}}>
              Fehlende oder unvollständige Nachweise sind selbst dann eine Ordnungswidrigkeit, wenn die Lenkzeiten korrekt eingehalten wurden. Mehr zum Gerät auf der Seite <a href="/digitaler-tachograph" style={{color:C.acc,textDecoration:'underline'}}>Digitaler Tachograph</a>.
            </p>
          </section>

          <div style={{margin:'8px 0 20px'}}><AdUnit /></div>

          <section style={card}>
            <h2 style={h2s}>Aufbewahrung: Pflichten des Unternehmens</h2>
            <p style={p}>
              Auch der Betrieb steht in der Pflicht. Die Daten müssen regelmäßig ausgelesen und archiviert werden:
            </p>
            <table className="sub-tbl">
              <thead><tr><th>Quelle</th><th>Auslesen spätestens</th><th>Aufbewahren</th></tr></thead>
              <tbody>
                <tr><td style={{color:C.txt}}>Fahrerkarte</td><td style={{color:C.muted}}>alle 28 Tage</td><td style={{color:C.dim}}>mind. 1 Jahr</td></tr>
                <tr><td style={{color:C.txt}}>Massenspeicher (Fahrzeug)</td><td style={{color:C.muted}}>alle 90 Tage</td><td style={{color:C.dim}}>mind. 1 Jahr</td></tr>
              </tbody>
            </table>
            <p style={{...p,marginTop:12}}>
              Kommt ein Unternehmen diesen Pflichten nicht nach, drohen eigene Bußgelder — unabhängig davon, ob der Fahrer korrekt gefahren ist. Zusätzlich verlangt das Arbeitszeitrecht teils längere Aufbewahrungsfristen.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>Ablauf eines Bußgeldverfahrens</h2>
            <ul className="lz">
              <li><strong style={{color:C.txt}}>1. Feststellung.</strong> Bei der Kontrolle wird der Verstoß dokumentiert; kleinere Verstöße können mit einem Verwarnungsgeld vor Ort erledigt werden.</li>
              <li><strong style={{color:C.txt}}>2. Anhörung.</strong> Bei größeren Verstößen erhält der Betroffene einen Anhörungsbogen und kann sich äußern.</li>
              <li><strong style={{color:C.txt}}>3. Bußgeldbescheid.</strong> Die Behörde setzt das Bußgeld nach dem Bußgeldkatalog fest — häufig gegen Fahrer und Unternehmer zugleich.</li>
              <li><strong style={{color:C.txt}}>4. Einspruch.</strong> Innerhalb von zwei Wochen nach Zustellung kann Einspruch eingelegt werden; danach entscheidet gegebenenfalls das Amtsgericht.</li>
            </ul>
            <div style={{background:'rgba(239,68,68,0.1)',border:'1px solid rgba(239,68,68,0.25)',borderRadius:12,padding:'16px 20px',marginTop:8}}>
              <strong style={{color:C.error}}>Manipulation ist kein Kavaliersdelikt:</strong> <span style={{color:C.muted}}>Der Einsatz von Magneten, manipulierten Kabeln oder Fremdgeräten am Tachographen führt zu erheblichen Bußgeldern und kann als Urkundenfälschung strafrechtlich verfolgt werden. Die konkreten Beträge finden Sie im <a href="/bussgeldkatalog" style={{color:C.acc,textDecoration:'underline'}}>Bußgeldkatalog</a>.</span>
            </div>
          </section>

          <section style={card}>
            <h2 style={h2s}>Praxistipps für die Straßenkontrolle</h2>
            <ul className="lz">
              <li>Fahrerkarte, Ausweis und Fahrzeugpapiere griffbereit halten.</li>
              <li>Manuelle Nachträge zeitnah und korrekt eintragen — nicht erst bei der Kontrolle.</li>
              <li>Bei technischen Störungen des Tachographen den Ausdruck anfertigen und handschriftlich ergänzen.</li>
              <li>Ruhig und kooperativ bleiben; bei Unklarheiten das Recht auf Äußerung im Anhörungsverfahren nutzen.</li>
            </ul>
          </section>

          <section style={card}>
            <h2 style={h2s}>Häufige Fragen zur Kontrolle</h2>
            <h3 style={h3s}>Was gilt seit 2025 bei der Mitführungspflicht?</h3>
            <p style={p}>Nachzuweisen sind der laufende Tag plus die vorausgehenden 56 Kalendertage. Die Verdopplung von 28 auf 56 Tage gilt seit dem 31. Dezember 2024.</p>
            <h3 style={h3s}>Haftet nur der Fahrer oder auch der Unternehmer?</h3>
            <p style={p}>In vielen Fällen beide. Der Unternehmer trägt eine eigene Verantwortung für Einsatzplanung, Auslesen und Archivierung der Daten und wird bei Organisationsmängeln separat belangt.</p>
            <h3 style={h3s}>Kann ich gegen einen Bußgeldbescheid vorgehen?</h3>
            <p style={p}>Ja, innerhalb von zwei Wochen nach Zustellung per Einspruch. Ob sich das lohnt, hängt vom Einzelfall ab — im Zweifel hilft anwaltliche Beratung.</p>
          </section>

          <div style={{margin:'8px 0 20px'}}><AdUnit /></div>

          <div style={{...card,background:`linear-gradient(135deg,rgba(240,136,62,0.08),${C.surface})`,borderColor:'rgba(240,136,62,0.2)',textAlign:'center'}}>
            <h2 style={{...h2s,textAlign:'center'}}>Verstöße vermeiden — vorher rechnen</h2>
            <p style={{...p,textAlign:'center'}}>Wer Touren mit korrekten Pausen und Ruhezeiten plant, hat bei der Kontrolle nichts zu befürchten. Unser Rechner erstellt den kompletten Tagesplan — kostenlos und ohne Anmeldung.</p>
            <a href="/" style={{display:'inline-block',background:C.acc,color:'#fff',borderRadius:10,padding:'13px 28px',fontWeight:700,textDecoration:'none',fontSize:15,boxShadow:'0 4px 16px rgba(240,136,62,0.3)'}}>
              → Zum Lenkzeitrechner
            </a>
          </div>

          <div style={{...card,fontSize:13,color:C.dim}}>
            <strong style={{color:C.muted}}>Rechtsquellen:</strong> VO (EU) Nr. 165/2014 (Fahrtenschreiber, Art. 36 – Mitführungspflicht) · VO (EU) 2020/1054 (Mobilitätspaket I) · Fahrpersonalgesetz (FPersG) · Fahrpersonalverordnung (FPersV) · Bußgeldkatalog (BKatV). Verbindlich sind die Fassungen auf <a href="https://eur-lex.europa.eu" target="_blank" rel="noopener noreferrer" style={{color:C.acc,textDecoration:'underline'}}>eur-lex.europa.eu</a> und <a href="https://www.gesetze-im-internet.de/fpersv/" target="_blank" rel="noopener noreferrer" style={{color:C.acc,textDecoration:'underline'}}>gesetze-im-internet.de/fpersv</a>. Stand: Juli 2026. Dieser Beitrag ist eine redaktionelle Einordnung und ersetzt keine Rechtsberatung im Einzelfall.
          </div>

          <footer style={{display:'flex',justifyContent:'center',gap:16,padding:'16px 0',fontSize:12,color:C.dim,borderTop:`1px solid ${C.border}`,flexWrap:'wrap'}}>
            <a href="/lkw-lenkzeiten" style={{color:C.dim,textDecoration:'none'}}>Lenkzeiten</a>
            <a href="/pausenrechner" style={{color:C.dim,textDecoration:'none'}}>Pausenrechner</a>
            <a href="/ruhezeiten" style={{color:C.dim,textDecoration:'none'}}>Ruhezeiten</a>
            <a href="/ausnahmen" style={{color:C.dim,textDecoration:'none'}}>Ausnahmen</a>
            <a href="/doppelbesatzung" style={{color:C.dim,textDecoration:'none'}}>Doppelbesatzung</a>
            <a href="/kontrolle" style={{color:C.acc,textDecoration:'none'}}>Kontrolle</a>
            <a href="/bussgeldkatalog" style={{color:C.dim,textDecoration:'none'}}>Bußgelder</a>
            <a href="/digitaler-tachograph" style={{color:C.dim,textDecoration:'none'}}>Tachograph</a>
            <a href="/mobilitaetspaket" style={{color:C.dim,textDecoration:'none'}}>Mobilitätspaket</a>
            <a href="/ueber-uns" style={{color:C.dim,textDecoration:'none'}}>Über uns</a>
            <a href="/impressum" style={{color:C.dim,textDecoration:'none'}}>Impressum</a>
            <a href="/datenschutz" style={{color:C.dim,textDecoration:'none'}}>Datenschutz</a>
            <span>© 2026 LenkzeitRechner.de</span>
          </footer>
        </div>
      </div>
    </>
  );
}
