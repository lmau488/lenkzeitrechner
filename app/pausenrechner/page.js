import AdUnit from '../AdUnit';

export const metadata = {
  title: 'LKW Pausenrechner 2026 – Pflichtpausen nach EU VO 561/2006 | LenkzeitRechner.de',
  description: 'LKW Pausenrechner: Wann muss ein LKW-Fahrer Pause machen? Pflichtpause nach 4,5 Stunden, geteilte Pause (15+30 min), Ausnahmen, Doppelbesatzung, häufige Fehler und Bußgelder – kostenlos und verständlich erklärt.',
  keywords: 'LKW Pausenrechner, Pflichtpause LKW, Pause nach 4,5 Stunden, Fahrtunterbrechung berechnen, geteilte Pause LKW, Pausenzeit Berufskraftfahrer, 45 Minuten Pause, Art. 7 VO 561/2006',
  alternates: { canonical: 'https://www.lenkzeitrechner.de/pausenrechner' },
  openGraph: {
    title: 'LKW Pausenrechner 2026 – Pflichtpausen nach EU VO 561/2006',
    description: 'Wann muss ein LKW-Fahrer Pause machen? Pflichtpause, geteilte Pause, Ausnahmen und Bußgelder verständlich erklärt.',
    url: 'https://www.lenkzeitrechner.de/pausenrechner',
    images: [{ url: 'https://www.lenkzeitrechner.de/og-image.svg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'LKW Pausenrechner – EU VO 561/2006', description: 'Pflichtpausen nach 4,5 Stunden berechnen — kostenlos und online.' },
};

const C = {
  bg:'#13151f',surface:'#1c1f2e',surface2:'#242738',border:'rgba(255,255,255,0.07)',
  acc:'#f0883e',txt:'#ffffff',muted:'#94a3b8',dim:'#64748b',
  navBg:'rgba(19,21,31,0.85)',dotGrid:'rgba(255,255,255,0.06)',
  success:'#22c55e',error:'#ef4444',
};

const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
    {"@type":"Question","name":"Wann muss ein LKW-Fahrer eine Pause machen?","acceptedAnswer":{"@type":"Answer","text":"Spätestens nach 4 Stunden 30 Minuten ununterbrochener oder zusammengerechneter Lenkzeit muss eine Fahrtunterbrechung von mindestens 45 Minuten eingelegt werden (Art. 7 VO 561/2006)."}},
    {"@type":"Question","name":"Darf die 45-Minuten-Pause aufgeteilt werden?","acceptedAnswer":{"@type":"Answer","text":"Ja. Die Pause kann in zwei Teile aufgeteilt werden: zuerst mindestens 15 Minuten, danach mindestens 30 Minuten. Diese Reihenfolge ist zwingend vorgeschrieben."}},
    {"@type":"Question","name":"Zählt Warten beim Be- und Entladen als Pause?","acceptedAnswer":{"@type":"Answer","text":"Nein. Als Fahrtunterbrechung zählt nur Zeit, in der der Fahrer keinerlei andere Arbeit verrichtet. Be- und Entladen, Wartezeiten mit Tätigkeit oder Verwaltungsaufgaben zählen nicht."}},
    {"@type":"Question","name":"Ist der Beifahrer während der Pause im fahrenden LKW erlaubt?","acceptedAnswer":{"@type":"Answer","text":"Ja. Im Mehrfahrerbetrieb darf ein Fahrer seine 45-Minuten-Pause auch einlegen, während das Fahrzeug vom zweiten Fahrer gelenkt wird."}},
    {"@type":"Question","name":"Was passiert nach der 45-Minuten-Pause?","acceptedAnswer":{"@type":"Answer","text":"Nach einer vollständigen 45-Minuten-Pause beginnt ein neuer Lenkzeitblock von bis zu 4,5 Stunden. Die Pausenzeit selbst zählt nicht zur Lenkzeit."}}
  ]
};

export default function Pausenrechner() {
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
              <a href="/pausenrechner" className="nav-link active">Pausenrechner</a>
              <a href="/impressum" className="nav-link">Impressum</a>
            </div>
          </div>
        </nav>

        <div className="wrap" style={{maxWidth:820,margin:'0 auto',padding:'40px 24px 60px'}}>
          <div style={{fontSize:13,color:C.dim,marginBottom:20}}>
            <a href="/" style={{color:C.acc,textDecoration:'none'}}>LenkzeitRechner.de</a>{' → '}Pausenrechner
          </div>

          <div style={card}>
            <h1 style={{fontSize:32,fontWeight:800,color:C.txt,marginBottom:8,lineHeight:1.2}}>LKW Pausenrechner 2026</h1>
            <p style={{...p,fontSize:17,color:C.txt,marginBottom:16}}>
              Wann muss ein LKW-Fahrer Pause machen? Auf dieser Seite finden Sie alle Regeln zur <span style={accent}>Fahrtunterbrechung nach Art. 7 der EU-Verordnung (EG) 561/2006</span> — mit Beispielen, Ausnahmen und den häufigsten Fehlern aus der Praxis.
            </p>
            <p style={p}>
              Die Fahrtunterbrechung (umgangssprachlich „Pause") ist von der täglichen und wöchentlichen Ruhezeit zu unterscheiden. Sie dient allein der Erholung während des Fahrtages und darf nicht zur Ruhezeit hinzugerechnet werden. Wer die Pausenregeln kennt und einhält, vermeidet Bußgelder und Punkte und fährt sicherer.
            </p>
            <a href="/" style={{display:'inline-block',background:C.acc,color:'#fff',borderRadius:10,padding:'12px 24px',fontWeight:700,textDecoration:'none',fontSize:14}}>
              → Jetzt Pausenzeiten berechnen
            </a>
          </div>

          <section style={card}>
            <h2 style={h2s}>Die Grundregel: Pause nach 4,5 Stunden</h2>
            <div style={highlight}>
              Nach spätestens <span style={accent}>4 Stunden 30 Minuten</span> Lenkzeit ist eine Fahrtunterbrechung von mindestens <span style={accent}>45 Minuten</span> vorgeschrieben.
            </div>
            <p style={p}>
              Entscheidend ist die reine <strong style={{color:C.txt}}>Lenkzeit</strong>, nicht die Gesamtarbeitszeit. Die 4,5 Stunden müssen nicht am Stück gefahren werden — auch mehrere kürzere Fahrabschnitte werden zusammengezählt. Sobald die Summe der Lenkzeit seit der letzten ausreichenden Pause 4,5 Stunden erreicht, ist die Pause fällig, bevor weitergefahren werden darf.
            </p>
            <p style={p}>
              Nach einer vollständigen 45-Minuten-Pause beginnt ein <strong style={{color:C.txt}}>neuer Lenkzeitblock</strong> von wieder bis zu 4,5 Stunden. Die Pause selbst zählt nicht zur Lenkzeit und wird auch nicht auf die tägliche Ruhezeit angerechnet. Während der Pause darf der Fahrer keine andere Arbeit verrichten — dazu zählen Be- und Entladen, Reinigung, Wartung oder Verwaltungsaufgaben.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>Die geteilte Pause: 15 + 30 Minuten</h2>
            <p style={p}>Statt einer durchgehenden 45-Minuten-Pause ist eine Aufteilung in zwei Blöcke zulässig:</p>
            <table className="sub-tbl">
              <thead><tr><th>Teil</th><th>Mindestdauer</th><th>Reihenfolge</th></tr></thead>
              <tbody>
                <tr><td style={{color:C.txt}}>Erste Teilpause</td><td style={{color:C.txt}}>mindestens 15 Minuten</td><td style={{color:C.muted}}>Muss zuerst liegen</td></tr>
                <tr><td style={{color:C.txt}}>Zweite Teilpause</td><td style={{color:C.txt}}>mindestens 30 Minuten</td><td style={{color:C.muted}}>Muss danach folgen</td></tr>
              </tbody>
            </table>
            <p style={{...p,marginTop:12}}>
              Die Reihenfolge ist <strong style={{color:C.txt}}>zwingend</strong>: erst mindestens 15 Minuten, dann mindestens 30 Minuten. Die umgekehrte Reihenfolge (erst 30, dann 15) erfüllt die Vorschrift <strong style={{color:C.txt}}>nicht</strong>. Erst nach Abschluss der zweiten Teilpause ist die Pausenpflicht erfüllt und der Lenkzeitblock beginnt neu. Eine weitere Aufteilung (z. B. 3 × 15 Minuten) ist nicht erlaubt.
            </p>
            <div style={highlight}>
              <strong style={{color:C.txt}}>Praxis-Tipp:</strong> Wer die durchgehende 45-Minuten-Pause wählt, ist bei Kontrollen auf der sicheren Seite — sie ist einfacher nachzuweisen und lässt keinen Interpretationsspielraum.
            </div>
          </section>

          <section style={card}>
            <h2 style={h2s}>Was zählt als Pause — und was nicht?</h2>
            <p style={p}>
              Als Fahrtunterbrechung gilt ausschließlich Zeit, in der der Fahrer <strong style={{color:C.txt}}>keinerlei Arbeit</strong> verrichtet und die er frei zur Erholung nutzen kann. Der digitale Tachograph muss in dieser Zeit auf „Pause/Ruhe" stehen.
            </p>
            <table className="sub-tbl">
              <thead><tr><th>Tätigkeit</th><th>Zählt als Pause?</th></tr></thead>
              <tbody>
                <tr><td style={{color:C.txt}}>Ausruhen im Fahrerhaus, Essen, Schlafen</td><td style={{color:C.success,fontWeight:700}}>✓ Ja</td></tr>
                <tr><td style={{color:C.txt}}>Beifahren, während der Kollege fährt (Doppelbesatzung)</td><td style={{color:C.success,fontWeight:700}}>✓ Ja</td></tr>
                <tr><td style={{color:C.txt}}>Be- und Entladen des Fahrzeugs</td><td style={{color:C.error,fontWeight:700}}>✗ Nein</td></tr>
                <tr><td style={{color:C.txt}}>Warten mit Aufsichts- oder Arbeitspflicht</td><td style={{color:C.error,fontWeight:700}}>✗ Nein</td></tr>
                <tr><td style={{color:C.txt}}>Tanken, Reifen prüfen, Fahrzeugpflege</td><td style={{color:C.error,fontWeight:700}}>✗ Nein</td></tr>
                <tr><td style={{color:C.txt}}>Papierkram, Frachtpapiere, Telefonate für den Betrieb</td><td style={{color:C.error,fontWeight:700}}>✗ Nein</td></tr>
              </tbody>
            </table>
            <p style={{...p,marginTop:12}}>
              Wichtig ist die Abgrenzung zur <strong style={{color:C.txt}}>Bereitschaftszeit</strong>: Wartezeiten, deren Dauer der Fahrer im Voraus kennt (etwa an der Rampe), sind arbeitszeitrechtlich Bereitschaft — sie erfüllen aber nicht automatisch die 45-Minuten-Fahrtunterbrechung nach VO 561/2006, wenn dabei eine Arbeitspflicht besteht.
            </p>
          </section>

          <div style={{margin:'8px 0 20px'}}><AdUnit /></div>

          <section style={card}>
            <h2 style={h2s}>Pause im Mehrfahrerbetrieb (Doppelbesatzung)</h2>
            <p style={p}>
              Sind zwei Fahrer an Bord (Doppelbesatzung), darf ein Fahrer seine 45-Minuten-Pause auch dann einlegen, wenn das Fahrzeug in dieser Zeit vom zweiten Fahrer <strong style={{color:C.txt}}>gelenkt wird</strong>. Das Beifahren zählt in diesem Fall als gültige Fahrtunterbrechung.
            </p>
            <p style={p}>
              Zu beachten: Für die tägliche Ruhezeit gelten im Mehrfahrerbetrieb eigene Regeln — hier steht ein Zeitfenster von 30 Stunden zur Verfügung, innerhalb dessen jeder Fahrer seine tägliche Ruhezeit von mindestens 9 Stunden nehmen muss. Die Pausenregel (4,5 h → 45 min) bleibt davon unberührt.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>Praxisbeispiele aus dem Fahreralltag</h2>
            <table className="sub-tbl">
              <thead><tr><th>Situation</th><th>Bewertung</th></tr></thead>
              <tbody>
                {[
                  ['4,5 h fahren, 45 min durchgehende Pause, dann weiter','✓ Korrekt',true],
                  ['4,5 h fahren, 15 min Pause, weiter, dann 30 min Pause','✓ Korrekt (geteilte Pause)',true],
                  ['2 h fahren, 15 min Pause, 2,5 h fahren, 30 min Pause','✓ Korrekt (Blöcke summieren auf 4,5 h)',true],
                  ['4,5 h fahren, 30 min Pause, weiter, dann 15 min','✗ Falsch — Reihenfolge vertauscht',false],
                  ['5 h ohne Unterbrechung durchfahren','✗ Verstoß — Pause war nach 4,5 h fällig',false],
                  ['2 h fahren, 10 min Laden, 2,5 h fahren ohne echte Pause','✗ Laden zählt nicht als Pause',false],
                  ['3 × 15 min Pausen über den Tag verteilt','✗ Nur 15 + 30 min ist zulässig',false],
                ].map(([sit,ok,valid],i) => (
                  <tr key={i}>
                    <td style={{color:C.txt}}>{sit}</td>
                    <td style={{color:valid?C.success:C.error,fontWeight:700}}>{ok}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section style={card}>
            <h2 style={h2s}>Häufige Fehler bei der Pausenplanung</h2>
            <ul className="lz">
              <li><strong style={{color:C.txt}}>Reihenfolge der geteilten Pause vertauscht.</strong> Erst 30, dann 15 Minuten ist unzulässig — die 45-Minuten-Pflicht gilt dann als nicht erfüllt.</li>
              <li><strong style={{color:C.txt}}>Ladezeit als Pause gewertet.</strong> Be- und Entladen ist Arbeitszeit und unterbricht die Lenkzeit nicht.</li>
              <li><strong style={{color:C.txt}}>Pause zu spät eingelegt.</strong> Die 45 Minuten müssen spätestens beim Erreichen von 4,5 Stunden Lenkzeit abgeschlossen begonnen sein — nicht erst danach.</li>
              <li><strong style={{color:C.txt}}>Pause mit Ruhezeit verwechselt.</strong> Die tägliche Ruhezeit (mind. 11 h) ist eine eigene, längere Ruhephase und ersetzt die Pausen während der Fahrt nicht.</li>
              <li><strong style={{color:C.txt}}>Manuelle Nachträge vergessen.</strong> Tätigkeiten ohne Fahrzeugbewegung müssen am digitalen Tachographen korrekt eingestellt werden.</li>
            </ul>
          </section>

          <section style={card}>
            <h2 style={h2s}>Zusammenspiel: Pause, Lenkzeit und Ruhezeit</h2>
            <p style={p}>
              Die Fahrtunterbrechung ist nur ein Baustein der Lenk- und Ruhezeitregeln. Ein typischer Fahrtag verbindet mehrere Grenzwerte:
            </p>
            <table className="sub-tbl">
              <thead><tr><th>Regel</th><th>Wert</th><th>Rechtsgrundlage</th></tr></thead>
              <tbody>
                <tr><td style={{color:C.txt}}>Fahrtunterbrechung</td><td style={{color:C.muted}}>nach 4,5 h → 45 min (oder 15 + 30)</td><td style={{color:C.dim}}>Art. 7</td></tr>
                <tr><td style={{color:C.txt}}>Tageslenkzeit</td><td style={{color:C.muted}}>max. 9 h (2×/Woche 10 h)</td><td style={{color:C.dim}}>Art. 6 Abs. 1</td></tr>
                <tr><td style={{color:C.txt}}>Tägliche Ruhezeit</td><td style={{color:C.muted}}>mind. 11 h (3× auf 9 h verkürzbar)</td><td style={{color:C.dim}}>Art. 8</td></tr>
                <tr><td style={{color:C.txt}}>Wöchentliche Ruhezeit</td><td style={{color:C.muted}}>mind. 45 h (jede 2. Woche 24 h)</td><td style={{color:C.dim}}>Art. 8</td></tr>
              </tbody>
            </table>
            <p style={{...p,marginTop:12}}>
              Mehr dazu auf unseren Seiten <a href="/lkw-lenkzeiten" style={{color:C.acc}}>LKW Lenkzeiten</a> und <a href="/ruhezeiten" style={{color:C.acc}}>Ruhezeiten</a>. Den kompletten Tagesplan mit automatisch eingeplanten Pausen erstellt der <a href="/" style={{color:C.acc}}>Lenkzeitrechner</a>.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>Bußgelder bei Pausenverstößen</h2>
            <p style={p}>
              Verstöße gegen die Pausenregeln werden nach dem Bußgeldkatalog (BKatV) und dem Fahrpersonalgesetz (FPersG) geahndet — und zwar sowohl beim Fahrer als auch beim Unternehmer. Für den Fahrer beginnen die Bußgelder bei etwa <strong style={{color:C.txt}}>30 €</strong> pro Verstoß; für den Unternehmer fallen sie deutlich höher aus.
            </p>
            <p style={p}>
              Der gesetzliche Bußgeldrahmen reicht bei schweren oder wiederholten Verstößen bis zu <strong style={{color:C.txt}}>5.000 € für den Fahrer</strong> und bis zu <strong style={{color:C.txt}}>30.000 € für den Unternehmer</strong> (§ 8a FPersG). Eine ausführliche Übersicht finden Sie im <a href="/bussgeldkatalog" style={{color:C.acc}}>Bußgeldkatalog</a>.
            </p>
            <p style={{...p,fontSize:12,color:C.dim}}>Alle Angaben ohne Gewähr · Quellen: VO (EG) 561/2006, BKatV, § 8a FPersG</p>
          </section>

          <section style={card}>
            <h2 style={h2s}>Häufige Fragen zur LKW-Pause</h2>
            <h3 style={h3s}>Muss die Pause genau nach 4,5 Stunden liegen?</h3>
            <p style={p}>Spätestens. Die 45-Minuten-Pause muss eingelegt werden, bevor die Lenkzeit 4,5 Stunden überschreitet. Früher ist immer erlaubt.</p>
            <h3 style={h3s}>Kann ich die Pause auf drei Teile aufteilen?</h3>
            <p style={p}>Nein. Zulässig ist nur die Aufteilung in 15 Minuten gefolgt von 30 Minuten. Andere Kombinationen erfüllen die Vorschrift nicht.</p>
            <h3 style={h3s}>Darf ich während der Pause im LKW bleiben?</h3>
            <p style={p}>Ja. Die Fahrtunterbrechung darf im Fahrzeug verbracht werden — anders als die reguläre wöchentliche Ruhezeit von 45 Stunden.</p>
            <h3 style={h3s}>Zählt eine längere Pause als mehrere Blöcke?</h3>
            <p style={p}>Eine durchgehende Pause von 45 Minuten oder mehr setzt den Lenkzeitblock vollständig zurück. Danach stehen wieder 4,5 Stunden Lenkzeit zur Verfügung.</p>
          </section>

          <div style={{margin:'8px 0 20px'}}><AdUnit /></div>

          <div style={{...card,background:`linear-gradient(135deg,rgba(240,136,62,0.08),${C.surface})`,borderColor:'rgba(240,136,62,0.2)',textAlign:'center'}}>
            <h2 style={{...h2s,textAlign:'center'}}>Pausenzeiten automatisch berechnen</h2>
            <p style={{...p,textAlign:'center'}}>Der Lenkzeitrechner berechnet automatisch, wann Pausen fällig sind, berücksichtigt geteilte Pausen und erstellt Ihren kompletten Tagesplan — kostenlos, ohne Anmeldung.</p>
            <a href="/" style={{display:'inline-block',background:C.acc,color:'#fff',borderRadius:10,padding:'13px 28px',fontWeight:700,textDecoration:'none',fontSize:15,boxShadow:'0 4px 16px rgba(240,136,62,0.3)'}}>
              → Zum kostenlosen Pausenrechner
            </a>
          </div>

          <footer style={{display:'flex',justifyContent:'center',gap:16,padding:'16px 0',fontSize:12,color:C.dim,borderTop:`1px solid ${C.border}`,flexWrap:'wrap'}}>
            <a href="/lkw-lenkzeiten" style={{color:C.dim,textDecoration:'none'}}>Lenkzeiten</a>
            <a href="/pausenrechner" style={{color:C.acc,textDecoration:'none'}}>Pausenrechner</a>
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
