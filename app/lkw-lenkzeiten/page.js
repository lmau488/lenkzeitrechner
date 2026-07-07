import AdUnit from '../AdUnit';

export const metadata = {
  title: 'LKW Lenkzeiten 2026 – Alles zur EU VO 561/2006 | LenkzeitRechner.de',
  description: 'LKW Lenkzeiten verständlich erklärt: Tageslenkzeit, Wochenlenkzeit, Pflichtpausen, Ruhezeiten, 10-Stunden-Verlängerung, Ausnahmen und Bußgelder nach EU VO 561/2006 – mit Beispielen für Fahrer und Disponenten.',
  keywords: 'LKW Lenkzeiten, Tageslenkzeit LKW, Wochenlenkzeit 56 Stunden, Doppelwoche 90 Stunden, EU 561/2006, Lenkzeit vs Arbeitszeit, 10 Stunden Verlängerung, Lenkzeiten Disponent',
  alternates: { canonical: 'https://www.lenkzeitrechner.de/lkw-lenkzeiten' },
  openGraph: {
    title: 'LKW Lenkzeiten 2026 – Alles zur EU VO 561/2006',
    description: 'Tageslenkzeit, Wochenlenkzeit, Pflichtpausen und Ruhezeiten nach EU VO 561/2006 — kompakt erklärt mit Beispielen.',
    url: 'https://www.lenkzeitrechner.de/lkw-lenkzeiten',
    images: [{ url: 'https://www.lenkzeitrechner.de/og-image.svg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'LKW Lenkzeiten 2026 – EU VO 561/2006', description: 'Tageslenkzeit, Wochenlenkzeit, Pflichtpausen und Ruhezeiten kompakt erklärt.' },
};

const C = {
  bg:'#13151f',surface:'#1c1f2e',surface2:'#242738',border:'rgba(255,255,255,0.07)',
  acc:'#f0883e',txt:'#ffffff',muted:'#94a3b8',dim:'#64748b',
  navBg:'rgba(19,21,31,0.85)',dotGrid:'rgba(255,255,255,0.06)',
  success:'#22c55e',error:'#ef4444',
};

const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
    {"@type":"Question","name":"Wie viele Stunden darf ein LKW-Fahrer am Tag fahren?","acceptedAnswer":{"@type":"Answer","text":"Grundsätzlich maximal 9 Stunden Lenkzeit pro Tag. An höchstens zwei Tagen pro Woche darf die Tageslenkzeit auf 10 Stunden verlängert werden (Art. 6 Abs. 1 VO 561/2006)."}},
    {"@type":"Question","name":"Was ist der Unterschied zwischen Lenkzeit und Arbeitszeit?","acceptedAnswer":{"@type":"Answer","text":"Lenkzeit ist ausschließlich die reine Fahrzeit am Steuer. Arbeitszeit umfasst zusätzlich Be- und Entladen, Wartung und andere Tätigkeiten. Für die Grenzwerte der VO 561/2006 zählt nur die Lenkzeit; für die Arbeitszeit gilt zusätzlich das Arbeitszeitgesetz."}},
    {"@type":"Question","name":"Wie hoch ist die maximale Wochenlenkzeit?","acceptedAnswer":{"@type":"Answer","text":"56 Stunden pro Kalenderwoche und maximal 90 Stunden in zwei aufeinanderfolgenden Wochen (Art. 6 Abs. 2 und 3 VO 561/2006)."}},
    {"@type":"Question","name":"Darf die tägliche Ruhezeit verkürzt werden?","acceptedAnswer":{"@type":"Answer","text":"Ja. Die regelmäßige tägliche Ruhezeit von 11 Stunden darf höchstens dreimal zwischen zwei wöchentlichen Ruhezeiten auf 9 Stunden verkürzt werden (Art. 8 Abs. 4 VO 561/2006)."}}
  ]
};

export default function LkwLenkzeiten() {
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
              <a href="/lkw-lenkzeiten" className="nav-link active">Lenkzeiten</a>
              <a href="/pausenrechner" className="nav-link">Pausenrechner</a>
              <a href="/impressum" className="nav-link">Impressum</a>
            </div>
          </div>
        </nav>

        <div className="wrap" style={{maxWidth:820,margin:'0 auto',padding:'40px 24px 60px'}}>
          <div style={{fontSize:13,color:C.dim,marginBottom:20}}>
            <a href="/" style={{color:C.acc,textDecoration:'none'}}>LenkzeitRechner.de</a>{' → '}LKW Lenkzeiten
          </div>

          <div style={card}>
            <h1 style={{fontSize:32,fontWeight:800,color:C.txt,marginBottom:8,lineHeight:1.2}}>LKW Lenkzeiten 2026</h1>
            <p style={{...p,fontSize:17,color:C.txt,marginBottom:16}}>
              Alles, was Fahrer und Disponenten zur <span style={accent}>EU-Verordnung (EG) Nr. 561/2006</span> wissen müssen — Tageslenkzeit, Wochen- und Doppelwochenlenkzeit, Pflichtpausen, Ruhezeiten und die Regeln des Mobilitätspakets, aktuell und mit praktischen Beispielen.
            </p>
            <p style={p}>
              Die Verordnung gilt EU-weit einheitlich für Fahrzeuge zur Güterbeförderung über 3,5 Tonnen und zur Personenbeförderung mit mehr als 9 Sitzplätzen. Wer die Grenzwerte kennt, plant Touren rechtssicher, vermeidet Bußgelder und Punkte und erhöht die Verkehrssicherheit.
            </p>
            <a href="/" style={{display:'inline-block',background:C.acc,color:'#fff',borderRadius:10,padding:'12px 24px',fontWeight:700,textDecoration:'none',fontSize:14}}>
              → Zum kostenlosen Lenkzeitrechner
            </a>
          </div>

          <section style={card}>
            <h2 style={h2s}>Lenkzeit, Arbeitszeit, Bereitschaft, Ruhezeit — die vier Begriffe</h2>
            <p style={p}>
              Die häufigste Fehlerquelle in der Praxis ist die Verwechslung dieser vier Zeitarten. Nur wer sie sauber trennt, plant korrekt:
            </p>
            <table className="sub-tbl">
              <thead><tr><th>Zeitart</th><th>Was zählt dazu</th><th>Geregelt in</th></tr></thead>
              <tbody>
                <tr><td style={{color:C.txt}}>Lenkzeit</td><td style={{color:C.muted}}>Reine Fahrzeit am Steuer, auch im Stau</td><td style={{color:C.dim}}>VO 561/2006</td></tr>
                <tr><td style={{color:C.txt}}>Arbeitszeit</td><td style={{color:C.muted}}>Lenken + Be-/Entladen, Wartung, Reinigung, Papierkram</td><td style={{color:C.dim}}>ArbZG / FPersV</td></tr>
                <tr><td style={{color:C.txt}}>Bereitschaftszeit</td><td style={{color:C.muted}}>Wartezeiten mit im Voraus bekannter Dauer (z. B. an der Rampe)</td><td style={{color:C.dim}}>FPersV</td></tr>
                <tr><td style={{color:C.txt}}>Ruhezeit / Pause</td><td style={{color:C.muted}}>Freie Zeit ohne jede Arbeitspflicht</td><td style={{color:C.dim}}>VO 561/2006</td></tr>
              </tbody>
            </table>
            <p style={{...p,marginTop:12}}>
              Für die Grenzwerte auf dieser Seite (9 h, 56 h, 90 h) zählt ausschließlich die <strong style={{color:C.txt}}>Lenkzeit</strong>. Die wöchentliche Höchstarbeitszeit von durchschnittlich 48 Stunden (max. 60 Stunden in einer Einzelwoche) ergibt sich zusätzlich aus dem Arbeitszeitrecht und ist davon unabhängig.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>Tageslenkzeit: 9 Stunden, zweimal pro Woche 10 Stunden</h2>
            <div style={highlight}>
              <strong style={{color:C.txt}}>Grundregel:</strong> maximal <span style={accent}>9 Stunden</span> Lenkzeit pro Tag.<br/>
              <strong style={{color:C.txt}}>Ausnahme:</strong> bis zu <span style={accent}>10 Stunden</span> — aber höchstens <span style={accent}>zweimal pro Woche</span> (Art. 6 Abs. 1).
            </div>
            <p style={p}>
              Die Tageslenkzeit ist die gesamte Lenkzeit zwischen zwei täglichen Ruhezeiten oder zwischen einer täglichen und einer wöchentlichen Ruhezeit. Nur reine Fahrzeit zählt — Ladezeiten, Wartezeiten und Pausen bleiben außen vor. Die beiden 10-Stunden-Tage müssen nicht am Stück liegen und werden pro Kalenderwoche gezählt.
            </p>
            <h3 style={h3s}>Beispiel: 10-Stunden-Verlängerung über die Woche</h3>
            <table className="sub-tbl">
              <thead><tr><th>Tag</th><th>Lenkzeit</th><th>Zulässig?</th></tr></thead>
              <tbody>
                <tr><td style={{color:C.txt}}>Montag</td><td style={{color:C.muted}}>9 Stunden</td><td style={{color:C.success,fontWeight:700}}>✓ Ja</td></tr>
                <tr><td style={{color:C.txt}}>Dienstag</td><td style={{color:C.muted}}>10 Stunden (1. Verlängerung)</td><td style={{color:C.success,fontWeight:700}}>✓ Ja</td></tr>
                <tr><td style={{color:C.txt}}>Mittwoch</td><td style={{color:C.muted}}>10 Stunden (2. Verlängerung)</td><td style={{color:C.success,fontWeight:700}}>✓ Ja</td></tr>
                <tr><td style={{color:C.txt}}>Donnerstag</td><td style={{color:C.muted}}>10 Stunden (3. Verlängerung)</td><td style={{color:C.error,fontWeight:700}}>✗ Nein — max. 2×/Woche</td></tr>
              </tbody>
            </table>
          </section>

          <section style={card}>
            <h2 style={h2s}>Pflichtpause: 45 Minuten nach 4,5 Stunden</h2>
            <div style={highlight}>
              Nach spätestens <span style={accent}>4,5 Stunden</span> Lenkzeit ist eine Fahrtunterbrechung von mindestens <span style={accent}>45 Minuten</span> Pflicht (Art. 7).
            </div>
            <p style={p}>
              Die Pause kann auch aufgeteilt werden: zuerst mindestens <strong style={{color:C.txt}}>15 Minuten</strong>, danach mindestens <strong style={{color:C.txt}}>30 Minuten</strong> — die Reihenfolge ist zwingend. Nach einer vollständigen Pause beginnt ein neuer Lenkzeitblock von bis zu 4,5 Stunden. Alle Details, Beispiele und Sonderfälle finden Sie auf unserer Seite <a href="/pausenrechner" style={{color:C.acc,textDecoration:'underline'}}>Pausenrechner</a>.
            </p>
          </section>

          <div style={{margin:'8px 0 20px'}}><AdUnit /></div>

          <section style={card}>
            <h2 style={h2s}>Wochen- und Doppelwochenlenkzeit: 56 und 90 Stunden</h2>
            <div style={highlight}>
              <strong style={{color:C.txt}}>Wochenlenkzeit:</strong> max. <span style={accent}>56 Stunden</span> (Art. 6 Abs. 2)<br/>
              <strong style={{color:C.txt}}>Doppelwoche (2 Wochen):</strong> max. <span style={accent}>90 Stunden</span> (Art. 6 Abs. 3)
            </div>
            <p style={p}>
              Auch wenn in einer einzelnen Woche 56 Stunden erlaubt sind, dürfen es über zwei aufeinanderfolgende Wochen zusammen höchstens 90 Stunden sein. Nach einer „Maximalwoche" mit 56 Stunden bleiben in der Folgewoche also nur noch 34 Stunden. Disponenten müssen diese Grenze über den Wochenwechsel hinaus im Blick behalten — ein häufig übersehener Punkt.
            </p>
            <h3 style={h3s}>Beispielrechnung Doppelwoche</h3>
            <table className="sub-tbl">
              <thead><tr><th>Woche</th><th>Lenkzeit</th><th>Doppelwoche gesamt</th><th>Status</th></tr></thead>
              <tbody>
                <tr><td style={{color:C.txt}}>KW 13</td><td style={{color:C.muted}}>56 h (Maximum)</td><td style={{color:C.muted}}>56 h</td><td style={{color:C.success,fontWeight:700}}>✓ OK</td></tr>
                <tr><td style={{color:C.txt}}>KW 14</td><td style={{color:C.muted}}>34 h</td><td style={{color:C.muted}}>90 h</td><td style={{color:C.success,fontWeight:700}}>✓ Am Limit</td></tr>
                <tr><td style={{color:C.txt}}>KW 14</td><td style={{color:C.muted}}>35 h</td><td style={{color:C.muted}}>91 h</td><td style={{color:C.error,fontWeight:700}}>✗ Überschreitung</td></tr>
              </tbody>
            </table>
          </section>

          <section style={card}>
            <h2 style={h2s}>Ruhezeiten: täglich 11 Stunden, wöchentlich 45 Stunden</h2>
            <h3 style={h3s}>Tägliche Ruhezeit</h3>
            <p style={p}>
              Innerhalb von 24 Stunden nach Dienstbeginn ist eine tägliche Ruhezeit von mindestens <span style={accent}>11 Stunden</span> einzuhalten. Sie darf höchstens <strong style={{color:C.txt}}>dreimal</strong> zwischen zwei wöchentlichen Ruhezeiten auf <strong style={{color:C.txt}}>9 Stunden</strong> verkürzt werden (Art. 8 Abs. 4); ein Ausgleich ist dafür nicht nötig. Alternativ kann die tägliche Ruhezeit geteilt werden — in einen ersten Abschnitt von mindestens 3 Stunden und einen zweiten von mindestens 9 Stunden (zusammen also mindestens 12 Stunden).
            </p>
            <h3 style={h3s}>Wöchentliche Ruhezeit</h3>
            <p style={p}>
              Die regelmäßige wöchentliche Ruhezeit beträgt mindestens <span style={accent}>45 Stunden</span>. Sie kann jede zweite Woche auf <strong style={{color:C.txt}}>24 Stunden</strong> reduziert werden; die Differenz muss dann innerhalb von drei Wochen als Ausgleichsruhezeit nachgeholt werden (Art. 8 Abs. 6).
            </p>
            <div style={{background:'rgba(239,68,68,0.1)',border:'1px solid rgba(239,68,68,0.25)',borderRadius:12,padding:'16px 20px',marginTop:8}}>
              <strong style={{color:C.error}}>Wichtig:</strong> <span style={{color:C.muted}}>Die reguläre wöchentliche Ruhezeit (45 h) darf <strong style={{color:C.txt}}>nicht im Fahrzeug</strong> verbracht werden (Art. 8 Abs. 8). Bei Verstoß drohen dem Fahrer bis zu 60 € und dem Unternehmer bis zu 500 € pro Fall; der gesetzliche Rahmen reicht bei schweren Verstößen bis zu 30.000 € (§ 8a FPersG). Mehr dazu unter <a href="/ruhezeiten" style={{color:C.acc,textDecoration:'underline'}}>Ruhezeiten</a>.</span>
            </div>
          </section>

          <section style={card}>
            <h2 style={h2s}>Mobilitätspaket I: das hat sich seit 2020 geändert</h2>
            <p style={p}>
              Mit dem Mobilitätspaket I (VO (EU) 2020/1054, in Kraft seit 20. August 2020) wurden mehrere Punkte verschärft oder klargestellt:
            </p>
            <ul className="lz">
              <li><strong style={{color:C.txt}}>Kabinenschlafverbot:</strong> Das Verbot, die reguläre Wochenruhezeit im Fahrzeug zu verbringen, ist nun ausdrücklich im Gesetzestext verankert (Art. 8 Abs. 8) — der Arbeitgeber trägt die Kosten einer geeigneten Unterkunft.</li>
              <li><strong style={{color:C.txt}}>Rückkehrpflicht:</strong> Fahrer müssen die Möglichkeit erhalten, regelmäßig (in der Regel innerhalb von vier Wochen) an den Betriebssitz oder Wohnort zurückzukehren.</li>
              <li><strong style={{color:C.txt}}>Fahrzeug-Rückkehr:</strong> Fahrzeuge sollen spätestens alle acht Wochen zum Betriebssitz zurückkehren (Art. 8 Abs. 8a).</li>
              <li><strong style={{color:C.txt}}>Fähr- und Zugausnahme:</strong> Bei Fähr- oder Zugüberfahrten darf die reguläre Wochenruhezeit unter bestimmten Bedingungen zweimal unterbrochen werden.</li>
              <li><strong style={{color:C.txt}}>Intelligenter Tachograph:</strong> Für Neufahrzeuge ist der Smart Tachograph der zweiten Generation vorgeschrieben; Bestandsfahrzeuge im grenzüberschreitenden Verkehr werden schrittweise nachgerüstet.</li>
            </ul>
          </section>

          <section style={card}>
            <h2 style={h2s}>Für wen gelten die Lenkzeiten?</h2>
            <p style={p}>Die EU VO 561/2006 gilt für:</p>
            <ul className="lz">
              <li>Fahrzeuge zur <strong style={{color:C.txt}}>Güterbeförderung</strong> mit einem zulässigen Gesamtgewicht über <strong style={{color:C.txt}}>3,5 Tonnen</strong> (inkl. Anhänger).</li>
              <li>Fahrzeuge zur <strong style={{color:C.txt}}>Personenbeförderung</strong> mit mehr als <strong style={{color:C.txt}}>9 Sitzplätzen</strong> einschließlich Fahrersitz.</li>
            </ul>
            <p style={p}>
              <strong style={{color:C.txt}}>Ausgenommen</strong> sind unter anderem Fahrzeuge mit einer bauartbedingten Höchstgeschwindigkeit von maximal 40 km/h, Fahrzeuge der Streitkräfte, von Feuerwehr, Polizei und Katastrophenschutz, Fahrzeuge für nichtgewerbliche Güterbeförderung bis 7,5 t sowie bestimmte Spezialfahrzeuge (Art. 3 und Art. 13 VO 561/2006). Seit 1. Juli 2026 werden zudem leichte Nutzfahrzeuge zwischen 2,5 und 3,5 t im grenzüberschreitenden gewerblichen Verkehr schrittweise einbezogen — hier lohnt der Blick in die jeweils aktuelle Fassung.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>Häufige Fehler in der Praxis</h2>
            <ul className="lz">
              <li><strong style={{color:C.txt}}>Ladezeit als Pause gewertet.</strong> Be- und Entladen ist Arbeitszeit — es unterbricht die Lenkzeit nicht.</li>
              <li><strong style={{color:C.txt}}>Dritte 10-Stunden-Fahrt.</strong> Die Verlängerung auf 10 Stunden ist strikt auf zweimal pro Woche begrenzt.</li>
              <li><strong style={{color:C.txt}}>Doppelwoche vergessen.</strong> Nach 56 Stunden in einer Woche bleiben in der Folgewoche nur 34 Stunden.</li>
              <li><strong style={{color:C.txt}}>Wochenruhe in der Kabine.</strong> Die reguläre 45-Stunden-Ruhe darf nicht im Fahrzeug verbracht werden.</li>
              <li><strong style={{color:C.txt}}>Fehlende manuelle Nachträge.</strong> Tätigkeiten ohne Fahrzeugbewegung müssen am Tachographen korrekt eingestellt werden.</li>
            </ul>
          </section>

          <section style={card}>
            <h2 style={h2s}>Häufige Fragen zu LKW-Lenkzeiten</h2>
            <h3 style={h3s}>Zählt Stehen im Stau als Lenkzeit?</h3>
            <p style={p}>Ja. Solange der Fahrer am Steuer sitzt und der Verkehr fließt oder stockt, gilt die Zeit als Lenkzeit — auch bei Stillstand im Stau, sofern keine echte Pause eingelegt wird.</p>
            <h3 style={h3s}>Gilt die Verordnung auch für Handwerker-Fahrzeuge?</h3>
            <p style={p}>Nur, wenn das zulässige Gesamtgewicht 3,5 Tonnen übersteigt. Innerhalb der sogenannten Handwerkerregelung gibt es zudem Ausnahmen für nichtgewerbliche Fahrten in einem begrenzten Umkreis.</p>
            <h3 style={h3s}>Was passiert bei einem Verstoß?</h3>
            <p style={p}>Verstöße werden nach dem Bußgeldkatalog geahndet — sowohl beim Fahrer als auch beim Unternehmer. Eine detaillierte Übersicht finden Sie im <a href="/bussgeldkatalog" style={{color:C.acc,textDecoration:'underline'}}>Bußgeldkatalog</a>.</p>
          </section>

          <div style={{margin:'8px 0 20px'}}><AdUnit /></div>

          <div style={{...card,background:`linear-gradient(135deg,rgba(240,136,62,0.08),${C.surface})`,borderColor:'rgba(240,136,62,0.2)',textAlign:'center'}}>
            <h2 style={{...h2s,textAlign:'center'}}>Lenkzeiten jetzt berechnen</h2>
            <p style={{...p,textAlign:'center'}}>Unser kostenloser Rechner berücksichtigt automatisch Pausen, verkürzte Ruhezeiten und die 10-Stunden-Verlängerung und erstellt deinen kompletten Tagesplan — kostenlos, ohne Anmeldung.</p>
            <a href="/" style={{display:'inline-block',background:C.acc,color:'#fff',borderRadius:10,padding:'13px 28px',fontWeight:700,textDecoration:'none',fontSize:15,boxShadow:'0 4px 16px rgba(240,136,62,0.3)'}}>
              → Zum Lenkzeitrechner
            </a>
          </div>

          <footer style={{display:'flex',justifyContent:'center',gap:16,padding:'16px 0',fontSize:12,color:C.dim,borderTop:`1px solid ${C.border}`,flexWrap:'wrap'}}>
            <a href="/lkw-lenkzeiten" style={{color:C.acc,textDecoration:'none'}}>Lenkzeiten</a>
            <a href="/pausenrechner" style={{color:C.dim,textDecoration:'none'}}>Pausenrechner</a>
            <a href="/ruhezeiten" style={{color:C.dim,textDecoration:'none'}}>Ruhezeiten</a>
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
