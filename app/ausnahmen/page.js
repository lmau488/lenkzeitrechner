import AdUnit from '../AdUnit';

export const metadata = {
  title: 'Ausnahmen von den Lenk- und Ruhezeiten 2026 – Handwerkerregelung & Co. | LenkzeitRechner.de',
  description: 'Für welche Fahrzeuge gilt die EU VO 561/2006 nicht? Handwerkerregelung (100-km-Umkreis, bis 7,5 t), EU-weite Ausnahmen nach Art. 3, nationale Ausnahmen nach Art. 13 / § 18 FPersV sowie die Regeln für 2,8–3,5-Tonner – verständlich erklärt.',
  keywords: 'Ausnahmen Lenkzeiten, Handwerkerregelung LKW, 100 km Umkreis, 7,5 Tonnen Lenkzeiten, Art. 3 VO 561/2006, Art. 13 Ausnahmen, § 18 FPersV, Tachograph Ausnahme, 2,8 Tonnen Fahrpersonalverordnung',
  alternates: { canonical: 'https://www.lenkzeitrechner.de/ausnahmen' },
  openGraph: {
    title: 'Ausnahmen von den Lenk- und Ruhezeiten – Handwerkerregelung & Co.',
    description: 'Handwerkerregelung, Art.-3- und Art.-13-Ausnahmen und die Regeln für 2,8–3,5-Tonner nach FPersV – mit Tabellen und Beispielen.',
    url: 'https://www.lenkzeitrechner.de/ausnahmen',
    images: [{ url: 'https://www.lenkzeitrechner.de/og-image.svg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Ausnahmen von den Lenk- und Ruhezeiten 2026', description: 'Handwerkerregelung, EU- und nationale Ausnahmen kompakt erklärt.' },
};

const C = {
  bg:'#13151f',surface:'#1c1f2e',surface2:'#242738',border:'rgba(255,255,255,0.07)',
  acc:'#f0883e',txt:'#ffffff',muted:'#94a3b8',dim:'#64748b',
  navBg:'rgba(19,21,31,0.85)',dotGrid:'rgba(255,255,255,0.06)',
  success:'#22c55e',error:'#ef4444',
};

const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
    {"@type":"Question","name":"Gilt die Handwerkerregelung auch für einen 7,5-Tonner?","acceptedAnswer":{"@type":"Answer","text":"Ja. Die Ausnahme nach Art. 3 lit. aa VO 561/2006 gilt für Fahrzeuge mit einem zulässigen Gesamtgewicht bis einschließlich 7,5 Tonnen, sofern Material, Ausrüstung oder Maschinen für die eigene berufliche Tätigkeit befördert werden, der Umkreis von 100 km um den Standort nicht überschritten wird und das Fahren nicht die Haupttätigkeit des Fahrers ist."}},
    {"@type":"Question","name":"Wie groß ist der Umkreis bei der Handwerkerregelung?","acceptedAnswer":{"@type":"Answer","text":"100 Kilometer um den Standort des Unternehmens. Der Radius wurde mit dem EU-Mobilitätspaket von zuvor 50 km auf 100 km erweitert."}},
    {"@type":"Question","name":"Brauche ich bei einer Ausnahme trotzdem einen Tachographen?","acceptedAnswer":{"@type":"Answer","text":"Fällt das Fahrzeug vollständig unter eine Ausnahme der VO 561/2006, besteht insoweit keine Aufzeichnungspflicht mit dem digitalen Fahrtenschreiber. Trotzdem gelten weiterhin das Arbeitszeitgesetz und – je nach Gewicht – Regeln der Fahrpersonalverordnung. Im Zweifel lohnt die Rücksprache mit der zuständigen Behörde."}},
    {"@type":"Question","name":"Zählt die Fahrt zum Baumarkt unter die Handwerkerregelung?","acceptedAnswer":{"@type":"Answer","text":"Wenn ein Handwerker mit einem Fahrzeug bis 7,5 t Material oder Werkzeug für den eigenen Auftrag im 100-km-Umkreis transportiert und das Fahren nicht seine Haupttätigkeit ist, greift die Ausnahme. Reine gewerbliche Gütertransporte, bei denen das Fahren den Hauptzweck bildet, sind dagegen nicht erfasst."}}
  ]
};

export default function Ausnahmen() {
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
              <a href="/ausnahmen" className="nav-link active">Ausnahmen</a>
            </div>
          </div>
        </nav>

        <div className="wrap" style={{maxWidth:820,margin:'0 auto',padding:'40px 24px 60px'}}>
          <div style={{fontSize:13,color:C.dim,marginBottom:20}}>
            <a href="/" style={{color:C.acc,textDecoration:'none'}}>LenkzeitRechner.de</a>{' → '}Ausnahmen &amp; Handwerkerregelung
          </div>

          <div style={card}>
            <h1 style={{fontSize:32,fontWeight:800,color:C.txt,marginBottom:8,lineHeight:1.2}}>Ausnahmen von den Lenk- und Ruhezeiten</h1>
            <p style={{...p,fontSize:17,color:C.txt,marginBottom:16}}>
              Nicht jedes Fahrzeug über 3,5 Tonnen fällt automatisch unter die <span style={accent}>EU-Verordnung (EG) Nr. 561/2006</span>. Die Verordnung selbst nennt EU-weite Ausnahmen (Art. 3), erlaubt den Mitgliedstaaten weitere nationale Ausnahmen (Art. 13) und kennt die für Handwerksbetriebe wichtige Sonderregel im 100-km-Umkreis.
            </p>
            <p style={p}>
              Dieser Überblick zeigt, wer <strong style={{color:C.txt}}>nicht</strong> unter die Lenk- und Ruhezeiten fällt — und wo trotzdem Vorsicht geboten ist, weil andere Regeln (Fahrpersonalverordnung, Arbeitszeitgesetz) weitergelten.
            </p>
            <a href="/" style={{display:'inline-block',background:C.acc,color:'#fff',borderRadius:10,padding:'12px 24px',fontWeight:700,textDecoration:'none',fontSize:14}}>
              → Zum kostenlosen Lenkzeitrechner
            </a>
          </div>

          <section style={card}>
            <h2 style={h2s}>Die Handwerkerregelung: bis 7,5 t im 100-km-Umkreis</h2>
            <div style={highlight}>
              <strong style={{color:C.txt}}>Kernregel (Art. 3 lit. aa):</strong> Fahrzeuge bis <span style={accent}>7,5 t</span> zulässigem Gesamtgewicht sind von der VO 561/2006 ausgenommen, wenn sie <span style={accent}>Material, Ausrüstung oder Maschinen</span> für die berufliche Tätigkeit des Fahrers befördern, sich im Umkreis von <span style={accent}>100 km</span> um den Unternehmensstandort bewegen und das <span style={accent}>Fahren nicht die Haupttätigkeit</span> ist.
            </div>
            <p style={p}>
              Diese Ausnahme richtet sich an Handwerker und ähnliche Betriebe, die ihr eigenes Werkzeug oder Material zur Baustelle bringen — nicht an klassische Speditionen. Mit dem EU-Mobilitätspaket wurde der zulässige Radius von früher 50 km auf <strong style={{color:C.txt}}>100 km</strong> verdoppelt. Alle drei Bedingungen müssen <strong style={{color:C.txt}}>gleichzeitig</strong> erfüllt sein.
            </p>
            <h3 style={h3s}>Wann die Regel greift — und wann nicht</h3>
            <table className="sub-tbl">
              <thead><tr><th>Situation</th><th>Handwerkerregelung?</th></tr></thead>
              <tbody>
                <tr><td style={{color:C.muted}}>Elektriker fährt mit 3,5-t-Transporter Werkzeug 40 km zur Baustelle</td><td style={{color:C.success,fontWeight:700}}>✓ Ja</td></tr>
                <tr><td style={{color:C.muted}}>Schreiner liefert mit 7,5-t-Lkw eigene Möbel 80 km zum Kunden und montiert sie</td><td style={{color:C.success,fontWeight:700}}>✓ Ja</td></tr>
                <tr><td style={{color:C.muted}}>Fahrt 130 km zur Baustelle (über 100-km-Umkreis)</td><td style={{color:C.error,fontWeight:700}}>✗ Nein</td></tr>
                <tr><td style={{color:C.muted}}>Berufsfahrer transportiert gewerblich Güter — Fahren ist die Haupttätigkeit</td><td style={{color:C.error,fontWeight:700}}>✗ Nein</td></tr>
                <tr><td style={{color:C.muted}}>Fahrzeug über 7,5 t zulässigem Gesamtgewicht</td><td style={{color:C.error,fontWeight:700}}>✗ Nein</td></tr>
              </tbody>
            </table>
          </section>

          <section style={card}>
            <h2 style={h2s}>EU-weite Ausnahmen nach Artikel 3</h2>
            <p style={p}>
              Für die folgenden Fahrzeuge gilt die Verordnung EU-weit von vornherein nicht — unabhängig davon, was einzelne Mitgliedstaaten zusätzlich regeln:
            </p>
            <table className="sub-tbl">
              <thead><tr><th>Art. 3</th><th>Ausgenommene Fahrzeuge / Fälle</th></tr></thead>
              <tbody>
                <tr><td style={{color:C.txt}}>lit. a</td><td style={{color:C.muted}}>Linienverkehr zur Personenbeförderung mit einer Linienlänge bis 50 km</td></tr>
                <tr><td style={{color:C.txt}}>lit. aa</td><td style={{color:C.muted}}>Handwerkerregelung: ≤ 7,5 t, eigenes Material/Werkzeug, 100-km-Umkreis, Fahren nicht Haupttätigkeit</td></tr>
                <tr><td style={{color:C.txt}}>lit. b</td><td style={{color:C.muted}}>Fahrzeuge mit einer bauartbedingten Höchstgeschwindigkeit bis 40 km/h</td></tr>
                <tr><td style={{color:C.txt}}>lit. c</td><td style={{color:C.muted}}>Fahrzeuge von Streitkräften, Zivilschutz, Feuerwehr und Polizei (bzw. unter deren Kontrolle)</td></tr>
                <tr><td style={{color:C.txt}}>lit. d</td><td style={{color:C.muted}}>Fahrzeuge für Not- und Rettungsdienste sowie nichtgewerbliche humanitäre Hilfe</td></tr>
                <tr><td style={{color:C.txt}}>lit. e</td><td style={{color:C.muted}}>Spezialfahrzeuge für medizinische Zwecke</td></tr>
                <tr><td style={{color:C.txt}}>lit. f</td><td style={{color:C.muted}}>Spezialisierte Pannenhilfefahrzeuge im Umkreis von 100 km um ihren Standort</td></tr>
                <tr><td style={{color:C.txt}}>lit. g</td><td style={{color:C.muted}}>Fahrzeuge zu technischen Entwicklungs-, Reparatur- oder Wartungszwecken sowie neue/umgebaute, noch nicht in Betrieb genommene Fahrzeuge</td></tr>
                <tr><td style={{color:C.txt}}>lit. h</td><td style={{color:C.muted}}>Fahrzeuge/Kombinationen ≤ 7,5 t zur nichtgewerblichen Güterbeförderung</td></tr>
                <tr><td style={{color:C.txt}}>lit. i</td><td style={{color:C.muted}}>Nutzfahrzeuge mit Oldtimer-Status, nichtgewerblich genutzt</td></tr>
              </tbody>
            </table>
          </section>

          <div style={{margin:'8px 0 20px'}}><AdUnit /></div>

          <section style={card}>
            <h2 style={h2s}>Nationale Ausnahmen nach Artikel 13 (§ 18 FPersV)</h2>
            <p style={p}>
              Artikel 13 erlaubt den Mitgliedstaaten, für den innerstaatlichen Verkehr weitere Ausnahmen zu gewähren. Deutschland hat davon in <strong style={{color:C.txt}}>§ 18 der Fahrpersonalverordnung (FPersV)</strong> Gebrauch gemacht. Dazu zählen unter anderem:
            </p>
            <ul className="lz">
              <li>Fahrzeuge der Land- und Forstwirtschaft, des Gartenbaus und der Fischerei zur Güterbeförderung im Umkreis von bis zu 100 km um den Standort.</li>
              <li>Fahrzeuge bis 7,5 t, die Material, Ausrüstung oder Maschinen befördern oder selbst hergestellte Waren im 100-km-Umkreis ausliefern, wenn das Fahren nicht die Haupttätigkeit ist.</li>
              <li>Fahrzeuge zur Beförderung von lebenden Tieren zwischen Höfen und Märkten im Nahbereich.</li>
              <li>Fahrzeuge zur Abholung von Milch bei landwirtschaftlichen Betrieben und zur Rückgabe von Milchbehältern.</li>
              <li>Spezialfahrzeuge für Geld- und Werttransporte sowie für den Zirkus- und Schaustellerbedarf (im gesetzlich geregelten Rahmen).</li>
            </ul>
            <p style={{...p,fontSize:14,color:C.dim}}>
              Die Liste in § 18 FPersV ist umfangreicher und im Detail an Bedingungen geknüpft. Maßgeblich ist stets der aktuelle Gesetzestext — verlinkt im Abschnitt „Rechtsquellen".
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>Sonderfall 2,8–3,5 Tonnen: die Fahrpersonalverordnung</h2>
            <p style={p}>
              Fahrzeuge zwischen <strong style={{color:C.txt}}>2,8 und 3,5 t</strong> fallen nicht unter die EU-Verordnung 561/2006 (diese greift erst über 3,5 t), wohl aber national unter die Fahrpersonalverordnung. Dort gelten eigene Lenkzeit- und Pausenregeln, allerdings mit vereinfachten Aufzeichnungspflichten — statt digitalem Tachograph genügen häufig handschriftliche Tageskontrollblätter.
            </p>
            <div style={{background:'rgba(239,68,68,0.1)',border:'1px solid rgba(239,68,68,0.25)',borderRadius:12,padding:'16px 20px',marginTop:8}}>
              <strong style={{color:C.error}}>Neu ab 1. Juli 2026:</strong> <span style={{color:C.muted}}>Leichte Nutzfahrzeuge zwischen <strong style={{color:C.txt}}>2,5 und 3,5 t</strong> im grenzüberschreitenden gewerblichen Güterverkehr werden schrittweise in die EU-Regeln einbezogen und benötigen einen (intelligenten) Fahrtenschreiber. Für rein innerstaatliche Fahrten bleibt es zunächst bei den nationalen Regeln. Details im <a href="/mobilitaetspaket" style={{color:C.acc,textDecoration:'underline'}}>Mobilitätspaket</a>.</span>
            </div>
          </section>

          <section style={card}>
            <h2 style={h2s}>Wichtig: „ausgenommen" heißt nicht „regelfrei"</h2>
            <p style={p}>
              Auch wenn ein Fahrzeug von der VO 561/2006 ausgenommen ist, gilt in der Regel weiterhin:
            </p>
            <ul className="lz">
              <li><strong style={{color:C.txt}}>Arbeitszeitgesetz (ArbZG):</strong> Höchstarbeitszeiten, Ruhepausen und Ruhezeiten für Arbeitnehmer bleiben unberührt.</li>
              <li><strong style={{color:C.txt}}>Verkehrssicherheit:</strong> Übermüdung am Steuer ist unabhängig von Lenkzeitgrenzen eine Ordnungswidrigkeit und kann bei Unfällen strafrechtlich relevant werden.</li>
              <li><strong style={{color:C.txt}}>Nachweisbarkeit:</strong> Bei Kontrollen muss glaubhaft gemacht werden, dass eine Ausnahme greift — etwa durch Auftragsunterlagen oder den Fahrzweck.</li>
            </ul>
            <p style={p}>
              Wer unter eine der Ausnahmen fällt, aber unsicher ist, sollte im Zweifel die zuständige Kontrollbehörde oder die Handwerks- bzw. Industrie- und Handelskammer fragen. Mehr zum Ablauf von Kontrollen steht auf unserer Seite <a href="/kontrolle" style={{color:C.acc,textDecoration:'underline'}}>Kontrolle &amp; Bußgeldverfahren</a>.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>Häufige Fragen zu den Ausnahmen</h2>
            <h3 style={h3s}>Gilt die Handwerkerregelung auch für einen 7,5-Tonner?</h3>
            <p style={p}>Ja. Entscheidend ist die Obergrenze von 7,5 t zulässigem Gesamtgewicht, der Transport eigenen Materials oder Werkzeugs, der 100-km-Umkreis und dass das Fahren nicht die Haupttätigkeit ist.</p>
            <h3 style={h3s}>Wie wird der 100-km-Umkreis gemessen?</h3>
            <p style={p}>Als Luftlinie um den Standort des Unternehmens, nicht als gefahrene Strecke. Wird der Radius überschritten, entfällt die Ausnahme für die gesamte Fahrt.</p>
            <h3 style={h3s}>Muss ich eine Ausnahme irgendwo anmelden?</h3>
            <p style={p}>Nein, die Ausnahmen gelten kraft Gesetzes. Sie müssen aber im Kontrollfall belegbar sein — etwa über den Fahrzweck, die Ladung und den Einsatzort.</p>
          </section>

          <div style={{margin:'8px 0 20px'}}><AdUnit /></div>

          <div style={{...card,background:`linear-gradient(135deg,rgba(240,136,62,0.08),${C.surface})`,borderColor:'rgba(240,136,62,0.2)',textAlign:'center'}}>
            <h2 style={{...h2s,textAlign:'center'}}>Fällt Ihr Fahrzeug unter die Regel? Rechnen Sie sicher.</h2>
            <p style={{...p,textAlign:'center'}}>Wenn die VO 561/2006 gilt, berechnet unser kostenloser Rechner Pausen, Ruhezeiten und Tageslenkzeit automatisch — kostenlos und ohne Anmeldung.</p>
            <a href="/" style={{display:'inline-block',background:C.acc,color:'#fff',borderRadius:10,padding:'13px 28px',fontWeight:700,textDecoration:'none',fontSize:15,boxShadow:'0 4px 16px rgba(240,136,62,0.3)'}}>
              → Zum Lenkzeitrechner
            </a>
          </div>

          <div style={{...card,fontSize:13,color:C.dim}}>
            <strong style={{color:C.muted}}>Rechtsquellen:</strong> VO (EG) Nr. 561/2006 (Art. 3, 13) · Fahrpersonalverordnung (FPersV), insb. § 18 · VO (EU) 2020/1054 (Mobilitätspaket I). Verbindlich sind die Fassungen auf <a href="https://eur-lex.europa.eu" target="_blank" rel="noopener noreferrer" style={{color:C.acc,textDecoration:'underline'}}>eur-lex.europa.eu</a> und <a href="https://www.gesetze-im-internet.de/fpersv/" target="_blank" rel="noopener noreferrer" style={{color:C.acc,textDecoration:'underline'}}>gesetze-im-internet.de/fpersv</a>. Stand: Juli 2026. Dieser Beitrag ist eine redaktionelle Einordnung und ersetzt keine Rechtsberatung im Einzelfall.
          </div>

          <footer style={{display:'flex',justifyContent:'center',gap:16,padding:'16px 0',fontSize:12,color:C.dim,borderTop:`1px solid ${C.border}`,flexWrap:'wrap'}}>
            <a href="/lkw-lenkzeiten" style={{color:C.dim,textDecoration:'none'}}>Lenkzeiten</a>
            <a href="/pausenrechner" style={{color:C.dim,textDecoration:'none'}}>Pausenrechner</a>
            <a href="/ruhezeiten" style={{color:C.dim,textDecoration:'none'}}>Ruhezeiten</a>
            <a href="/ausnahmen" style={{color:C.acc,textDecoration:'none'}}>Ausnahmen</a>
            <a href="/doppelbesatzung" style={{color:C.dim,textDecoration:'none'}}>Doppelbesatzung</a>
            <a href="/kontrolle" style={{color:C.dim,textDecoration:'none'}}>Kontrolle</a>
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
