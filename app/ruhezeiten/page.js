export const metadata = {
  title: 'Ruhezeiten LKW 2026 – Tägliche & wöchentliche Ruhezeit | EU VO 561/2006',
  description: 'Ruhezeiten für LKW-Fahrer nach EU VO 561/2006: tägliche Ruhezeit 11h, verkürzte Ruhezeit 9h, wöchentliche Ruhezeit 45h. Mit Beispielen, Ausnahmen und Bußgeldern.',
  keywords: 'Ruhezeiten LKW, tägliche Ruhezeit, wöchentliche Ruhezeit, EU 561/2006 Ruhezeit, verkürzte Ruhezeit 9h, Wochenruhezeit 45h',
  alternates: { canonical: 'https://lenkzeitrechner.de/ruhezeiten' },
  openGraph: {
    title: 'Ruhezeiten LKW 2026 – EU VO 561/2006',
    description: 'Tägliche und wöchentliche Ruhezeiten für Berufskraftfahrer kompakt erklärt.',
    url: 'https://lenkzeitrechner.de/ruhezeiten',
    images: [{ url: 'https://lenkzeitrechner.de/og-image.svg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Ruhezeiten LKW 2026 – EU VO 561/2006', description: 'Tägliche und wöchentliche Ruhezeiten kompakt erklärt.' },
};

const C = {
  bg:'#13151f',surface:'#1c1f2e',surface2:'#242738',border:'rgba(255,255,255,0.07)',
  acc:'#f0883e',txt:'#ffffff',muted:'#94a3b8',dim:'#64748b',
  navBg:'rgba(19,21,31,0.85)',dotGrid:'rgba(255,255,255,0.06)',
  success:'#22c55e',error:'#ef4444',
};

export default function Ruhezeiten() {
  const card = {background:C.surface,border:`1px solid ${C.border}`,borderRadius:18,padding:'28px 32px',marginBottom:20};
  const h2s = {fontSize:20,fontWeight:700,color:C.acc,marginBottom:12,marginTop:0};
  const h3s = {fontSize:16,fontWeight:700,color:C.txt,marginBottom:8,marginTop:16};
  const p = {fontSize:15,color:C.muted,lineHeight:1.8,marginBottom:12};
  const accent = {color:C.acc,fontWeight:700};
  const table = {width:'100%',borderCollapse:'collapse',fontSize:14,marginTop:12};
  const th = {background:C.surface2,padding:'10px 14px',textAlign:'left',fontWeight:700,fontSize:12,textTransform:'uppercase',letterSpacing:'1px',color:C.dim,borderBottom:`1px solid ${C.border}`};
  const td = {padding:'10px 14px',borderBottom:`1px solid ${C.border}`,color:C.txt};
  const highlight = {background:'rgba(240,136,62,0.08)',border:'1px solid rgba(240,136,62,0.2)',borderRadius:12,padding:'16px 20px',marginBottom:16};

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
        .sub-tbl{width:100%;border-collapse:collapse;}
        .sub-tbl th,.sub-tbl td{padding:10px 14px;text-align:left;font-size:13px;border-bottom:1px solid ${C.border};}
        .sub-tbl th{font-size:11px;text-transform:uppercase;letter-spacing:1px;color:${C.dim};font-weight:700;background:${C.surface2};}
        @media(max-width:580px){.wrap{padding:0 12px!important;}.sub-tbl th:last-child,.sub-tbl td:last-child{display:none;}}
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
              <a href="/ueber-uns" className="nav-link">Über uns</a>
            </div>
          </div>
        </nav>

        <div className="wrap" style={{maxWidth:820,margin:'0 auto',padding:'40px 24px 60px'}}>
          <div style={{fontSize:13,color:C.dim,marginBottom:20}}>
            <a href="/" style={{color:C.acc,textDecoration:'none'}}>LenkzeitRechner.de</a>{' → '}Ruhezeiten
          </div>

          <div style={card}>
            <h1 style={{fontSize:32,fontWeight:800,color:C.txt,marginBottom:8,lineHeight:1.2}}>Ruhezeiten für LKW-Fahrer 2026</h1>
            <p style={{...p,fontSize:17,color:C.txt,marginBottom:20}}>
              Tägliche und wöchentliche Ruhezeiten nach <span style={accent}>EU Verordnung (EG) 561/2006</span> — mit den Änderungen aus dem Mobilitätspaket I, praktischen Beispielen und den aktuellen Bußgeldern der BKatV.
            </p>
            <a href="/" style={{display:'inline-block',background:C.acc,color:'#fff',borderRadius:10,padding:'12px 24px',fontWeight:700,textDecoration:'none',fontSize:14}}>
              → Zum kostenlosen Lenkzeitrechner
            </a>
          </div>

          <section style={card}>
            <h2 style={h2s}>🛏 Was zählt als Ruhezeit?</h2>
            <p style={p}>Ruhezeit ist nach <span style={accent}>Art. 4 Buchstabe f VO 561/2006</span> jeder ununterbrochene Zeitraum, in dem der Fahrer frei über seine Zeit verfügen kann. Das bedeutet konkret: keine Fahrtätigkeit, keine Ladearbeiten, keine Bereitschaft. Die Ruhezeit grenzt sich damit klar von der Lenkzeit, der sonstigen Arbeitszeit und der Bereitschaftszeit ab.</p>
            <p style={p}>Die Verordnung unterscheidet zwei Hauptformen: die <strong style={{color:C.txt}}>tägliche Ruhezeit</strong> (zwischen zwei Arbeitstagen) und die <strong style={{color:C.txt}}>wöchentliche Ruhezeit</strong> (am Ende einer Arbeitswoche). Beide haben unterschiedliche Mindestdauern, unterschiedliche Verkürzungsmöglichkeiten und unterschiedliche Regeln, wo sie verbracht werden dürfen.</p>
            <div style={highlight}>
              <strong>Grundsatz:</strong> Eine Ruhezeit muss im Kontrollgerät korrekt dokumentiert sein. Wer Ruhezeiten falsch einlegt oder manipuliert, riskiert empfindliche Bußgelder nach der Fahrpersonalverordnung (FPersV) in Verbindung mit der BKatV.
            </div>
          </section>

          <section style={card}>
            <h2 style={h2s}>⏱ Tägliche Ruhezeit – 11 Stunden Regel</h2>
            <div style={highlight}>
              <strong>Regelmäßige tägliche Ruhezeit:</strong> mindestens <span style={accent}>11 Stunden</span> zusammenhängend.<br/>
              <strong>Berechnungszeitraum:</strong> innerhalb von 24 Stunden nach Ende der vorherigen Ruhezeit (Art. 8 Abs. 2 VO 561/2006).
            </div>
            <p style={p}>Die tägliche Ruhezeit muss nach spätestens 24 Stunden seit dem Ende der letzten täglichen oder wöchentlichen Ruhezeit begonnen werden. Wer seine Ruhezeit also montags um 06:00 Uhr beendet, muss sie spätestens dienstags um 06:00 Uhr erneut antreten — egal wie viele Stunden er tatsächlich gefahren ist.</p>
            <h3 style={h3s}>Aufteilung in zwei Blöcke</h3>
            <p style={p}>Nach <span style={accent}>Art. 4 Buchstabe g VO 561/2006</span> darf die regelmäßige tägliche Ruhezeit auch in zwei Teile zerlegt werden. Der erste Teil muss mindestens <strong style={{color:C.txt}}>3 Stunden</strong> zusammenhängend betragen, der zweite Teil mindestens <strong style={{color:C.txt}}>9 Stunden</strong>. Insgesamt ergeben sich damit <strong style={{color:C.txt}}>12 Stunden Ruhezeit</strong> — also eine Stunde mehr als bei der ungeteilten Variante.</p>
            <h3 style={h3s}>Beispiel: Fahrtag mit geteilter Ruhezeit</h3>
            <table className="sub-tbl">
              <thead><tr><th>Uhrzeit</th><th>Tätigkeit</th><th>Art</th></tr></thead>
              <tbody>
                <tr><td>06:00 – 09:00</td><td>Ruhezeit Teil 1 (3h)</td><td style={{color:C.muted}}>Pflichtmindestdauer</td></tr>
                <tr><td>09:00 – 13:30</td><td>Lenkzeit</td><td style={{color:C.muted}}>4,5h am Stück</td></tr>
                <tr><td>13:30 – 14:15</td><td>Pflichtpause 45 min</td><td style={{color:C.muted}}>Art. 7</td></tr>
                <tr><td>14:15 – 18:45</td><td>Lenkzeit</td><td style={{color:C.muted}}>4,5h am Stück</td></tr>
                <tr><td>18:45 – 03:45</td><td>Ruhezeit Teil 2 (9h)</td><td style={{color:C.muted}}>zusammen 12h Ruhezeit</td></tr>
              </tbody>
            </table>
          </section>

          <section style={card}>
            <h2 style={h2s}>🔻 Verkürzte tägliche Ruhezeit – 9 Stunden</h2>
            <div style={highlight}>
              <strong>Verkürzte Ruhezeit:</strong> mindestens <span style={accent}>9 Stunden</span>, aber weniger als 11 Stunden.<br/>
              <strong>Grenze:</strong> maximal <span style={accent}>3-mal</span> zwischen zwei wöchentlichen Ruhezeiten (Art. 8 Abs. 2).
            </div>
            <p style={p}>Die verkürzte tägliche Ruhezeit ist das Arbeitspferd im Fernverkehr: Zwischen zwei wöchentlichen Ruhezeiten kann sie dreimal genutzt werden. Anders als früher muss die "verlorene" Zeit <strong style={{color:C.txt}}>nicht mehr nachgeholt werden</strong> — die Verkürzung ist endgültig.</p>
            <p style={p}>Wichtig ist die korrekte Zählung: Zwischen zwei wöchentlichen Ruhezeiten liegen in der Regel sechs 24-Stunden-Perioden. Wer dreimal verkürzt, muss also in den restlichen Perioden jeweils 11 Stunden oder mehr ruhen.</p>
            <h3 style={h3s}>Typische Wochenverteilung im Fernverkehr</h3>
            <table className="sub-tbl">
              <thead><tr><th>Tag</th><th>Ruhezeit</th><th>Bewertung</th></tr></thead>
              <tbody>
                <tr><td>Mo → Di</td><td>9h (verkürzt 1)</td><td style={{color:C.success,fontWeight:700}}>✅ zulässig</td></tr>
                <tr><td>Di → Mi</td><td>11h (regulär)</td><td style={{color:C.success,fontWeight:700}}>✅ zulässig</td></tr>
                <tr><td>Mi → Do</td><td>9h (verkürzt 2)</td><td style={{color:C.success,fontWeight:700}}>✅ zulässig</td></tr>
                <tr><td>Do → Fr</td><td>9h (verkürzt 3)</td><td style={{color:C.success,fontWeight:700}}>✅ letzte erlaubte</td></tr>
                <tr><td>Fr → Sa</td><td>9h (verkürzt 4)</td><td style={{color:C.error,fontWeight:700}}>❌ Verstoß!</td></tr>
              </tbody>
            </table>
          </section>

          <section style={card}>
            <h2 style={h2s}>📅 Wöchentliche Ruhezeit – 45 Stunden</h2>
            <div style={highlight}>
              <strong>Regelmäßige wöchentliche Ruhezeit:</strong> mindestens <span style={accent}>45 Stunden</span> am Stück.<br/>
              <strong>Reduzierte wöchentliche Ruhezeit:</strong> mindestens <span style={accent}>24 Stunden</span>.<br/>
              <strong>Spätester Beginn:</strong> nach sechs 24-Stunden-Perioden seit Ende der letzten Wochenruhezeit (Art. 8 Abs. 6).
            </div>
            <p style={p}>Die wöchentliche Ruhezeit ist das Rückgrat der Fahrpersonalvorschriften. Sie sorgt dafür, dass Berufskraftfahrer einmal pro Woche wirklich abschalten können. In zwei aufeinanderfolgenden Wochen muss der Fahrer nach Art. 8 Abs. 6 VO 561/2006 entweder zwei regelmäßige Ruhezeiten (2 × 45h) oder eine regelmäßige und eine reduzierte Ruhezeit (45h + 24h) einlegen.</p>
            <h3 style={h3s}>Kompensation bei Reduzierung</h3>
            <p style={p}>Wird die wöchentliche Ruhezeit auf 24 Stunden reduziert, entsteht ein "Ruhezeitdefizit" von bis zu 21 Stunden. Dieses Defizit muss als <strong style={{color:C.txt}}>zusammenhängender Block</strong> an eine andere Ruhezeit von mindestens 9 Stunden angehängt und <strong style={{color:C.txt}}>vor dem Ende der dritten Folgewoche</strong> genommen werden (Art. 8 Abs. 6b).</p>
            <h3 style={h3s}>Zwei-Wochen-Muster (Beispiel)</h3>
            <table className="sub-tbl">
              <thead><tr><th>Kalenderwoche</th><th>Ruhezeit A</th><th>Ruhezeit B</th><th>Bewertung</th></tr></thead>
              <tbody>
                <tr><td>KW 15</td><td>45h (regulär)</td><td>–</td><td style={{color:C.success,fontWeight:700}}>✅ OK</td></tr>
                <tr><td>KW 16</td><td>24h (reduziert)</td><td>21h Nachholung in KW 18</td><td style={{color:C.success,fontWeight:700}}>✅ OK bei Ausgleich</td></tr>
                <tr><td>KW 15</td><td>24h</td><td>KW 16: erneut 24h</td><td style={{color:C.error,fontWeight:700}}>❌ unzulässig</td></tr>
              </tbody>
            </table>
          </section>

          <section style={card}>
            <h2 style={h2s}>🏠 Wochenruhezeit nicht im Fahrzeug!</h2>
            <div style={{background:'rgba(239,68,68,0.1)',border:'1px solid rgba(239,68,68,0.25)',borderRadius:12,padding:'16px 20px',marginBottom:16}}>
              <strong style={{color:C.error}}>Wichtig:</strong> <span style={{color:C.muted}}>Die regelmäßige wöchentliche Ruhezeit (45h) und jede Ausgleichsruhezeit von mehr als 45 Stunden dürfen nach <span style={accent}>Art. 8 Abs. 8 VO 561/2006</span> <strong style={{color:C.txt}}>nicht im Fahrzeug</strong> verbracht werden.</span>
            </div>
            <p style={p}>Seit dem Mobilitätspaket I ist diese Regel in der gesamten EU vereinheitlicht. Der Arbeitgeber muss dem Fahrer eine <strong style={{color:C.txt}}>geschlechtergerechte, angemessene Unterkunft</strong> mit Schlafmöglichkeit und sanitären Einrichtungen zur Verfügung stellen — oder die Kosten dafür übernehmen. Eine Kabine mit Standheizung reicht ausdrücklich <em>nicht</em> aus, selbst wenn sie komfortabel ausgestattet ist.</p>
            <h3 style={h3s}>Bußgelder für Verstöße (BKatV, Stand 2026)</h3>
            <table className="sub-tbl">
              <thead><tr><th>Verstoß</th><th>Fahrer</th><th>Unternehmen</th></tr></thead>
              <tbody>
                <tr><td>Wochenruhezeit im Fahrzeug</td><td>60 €</td><td>180 € – 500 €</td></tr>
                <tr><td>Keine Unterkunft bereitgestellt</td><td>–</td><td>bis 1.500 €</td></tr>
                <tr><td>Wochenruhezeit 3h zu kurz</td><td>30 € pro Stunde</td><td>90 € pro Stunde</td></tr>
                <tr><td>Wochenruhezeit &gt; 9h zu kurz</td><td>ab 200 €</td><td>ab 600 €</td></tr>
              </tbody>
            </table>
            <p style={p}>Die Einhaltung wird bei Straßenkontrollen durch BAG und Polizei systematisch über die Tachographendaten der letzten 28 Tage geprüft. Seit 2024 werden die Positionen beim Grenzübertritt automatisch mitgeloggt, was auch die Nachprüfung des Rückkehrrechts zur Heimatbasis erleichtert.</p>
          </section>

          <section style={card}>
            <h2 style={h2s}>🏡 Rückkehrpflicht zur Heimatbasis</h2>
            <p style={p}>Mit dem Mobilitätspaket I wurde nach <span style={accent}>Art. 8 Abs. 8a VO 561/2006</span> eine Rückkehrpflicht des Fahrers eingeführt. Der Arbeitgeber muss die Arbeit so organisieren, dass der Fahrer in jedem Zeitraum von <strong style={{color:C.txt}}>vier aufeinanderfolgenden Wochen</strong> eine regelmäßige wöchentliche Ruhezeit (oder eine wöchentliche Ruhezeit von mehr als 45 Stunden) entweder am <strong style={{color:C.txt}}>Wohnort</strong> des Fahrers oder an der <strong style={{color:C.txt}}>Betriebsstätte</strong> des Arbeitgebers verbringen kann.</p>
            <p style={p}>Nutzt der Fahrer zwei aufeinanderfolgende reduzierte Wochenruhezeiten im Ausland, verkürzt sich der Zeitraum auf drei Wochen. Der Nachweis erfolgt über Tachographenaufzeichnungen, Arbeitspläne und gegebenenfalls Belege über die Unterkunft.</p>
          </section>

          <section style={card}>
            <h2 style={h2s}>⛴ Fähr- und Zugausnahme</h2>
            <div style={highlight}>
              Nach <span style={accent}>Art. 9 VO 561/2006</span> darf die tägliche Ruhezeit bei Fahrten mit Fähre oder Zug unter bestimmten Voraussetzungen <strong>zweimal unterbrochen</strong> werden — insgesamt höchstens 1 Stunde.
            </div>
            <p style={p}>Voraussetzung ist, dass der Fahrer Zugang zu einer Schlafkabine, einer Koje oder einem Liegewagen hat. Die Unterbrechungen dürfen beispielsweise durch das Auffahren auf die Fähre, das Abfahren oder Passkontrollen entstehen. Die unterbrochene Zeit wird auf die tägliche Ruhezeit angerechnet, solange die Gesamtdauer nicht überschritten wird und die reine Ruhezeit nicht unter die Mindestdauer sinkt.</p>
            <p style={p}>Seit dem Mobilitätspaket I gilt diese Regelung in eingeschränkter Form auch für die <strong style={{color:C.txt}}>reguläre wöchentliche Ruhezeit</strong> — vorausgesetzt, die Fahrt dauert mindestens 8 Stunden und der Fahrer hat eine ordnungsgemäße Schlafkabine zur Verfügung.</p>
          </section>

          <section style={card}>
            <h2 style={h2s}>👥 Mehrfahrerbetrieb (Doppelbesatzung)</h2>
            <p style={p}>Im Mehrfahrerbetrieb gilt nach <span style={accent}>Art. 8 Abs. 5 VO 561/2006</span> eine Besonderheit: Jeder Fahrer muss innerhalb von <strong style={{color:C.txt}}>30 Stunden</strong> nach Ende der letzten täglichen oder wöchentlichen Ruhezeit eine neue tägliche Ruhezeit von mindestens <strong style={{color:C.txt}}>9 Stunden</strong> eingelegt haben. In den ersten 60 Minuten nach Antritt der Doppelbesatzung darf ein zweiter Fahrer optional, danach muss er an Bord sein.</p>
            <p style={p}>Praktisch bedeutet das: Während Fahrer A fährt, kann Fahrer B auf dem Beifahrersitz (oder in der Liegekabine, sofern das Fahrzeug in Bewegung ist) Zeit verbringen. Diese Zeit gilt jedoch <em>nicht</em> als Ruhezeit, sondern als <strong style={{color:C.txt}}>Bereitschaftszeit</strong>. Die eigentliche Ruhezeit muss stehend absolviert werden — aber eben nur mindestens 9 Stunden statt 11.</p>
            <h3 style={h3s}>Zeitliche Struktur im Team</h3>
            <table className="sub-tbl">
              <thead><tr><th>Zeit</th><th>Fahrer A</th><th>Fahrer B</th></tr></thead>
              <tbody>
                <tr><td>00:00 – 04:30</td><td>Lenkzeit</td><td>Bereitschaft (Beifahrer)</td></tr>
                <tr><td>04:30 – 05:15</td><td>Pause 45 min</td><td>Pause 45 min</td></tr>
                <tr><td>05:15 – 09:45</td><td>Bereitschaft</td><td>Lenkzeit</td></tr>
                <tr><td>09:45 – 18:45</td><td>Ruhezeit 9h</td><td>Ruhezeit 9h (Fahrzeug steht)</td></tr>
              </tbody>
            </table>
          </section>

          <section style={card}>
            <h2 style={h2s}>📋 Dokumentation und Kontrollen</h2>
            <p style={p}>Alle Ruhezeiten werden vom digitalen Tachographen automatisch aufgezeichnet, sobald das Fahrzeug steht und keine Aktivität (Lenken, sonstige Arbeit, Bereitschaft) manuell eingelegt ist. Fahrer sind nach <span style={accent}>§ 1 Fahrpersonalverordnung (FPersV)</span> verpflichtet, Aktivitäten außerhalb des Fahrzeugs (z. B. Dienstantritt zu Hause, Be- oder Entladung) manuell einzutragen.</p>
            <p style={p}>Bei einer Kontrolle durch das Bundesamt für Logistik und Mobilität (BALM, früher BAG) oder die Polizei müssen die Daten der <strong style={{color:C.txt}}>letzten 28 Tage</strong> jederzeit abrufbar sein — auf der Fahrerkarte und im Massenspeicher des Fahrzeugs. Fehlende Tage müssen über Ausdrucke oder Bescheinigungen (Formblatt EU Nr. 2006/22/EG) belegt werden.</p>
            <div style={highlight}>
              <strong>Praxistipp:</strong> Wer krank war, Urlaub hatte oder ein Fahrzeug ohne Tachograph gefahren ist, braucht die Bescheinigung über berücksichtigungsfreie Tage vom Arbeitgeber. Ohne diese Bescheinigung wertet die Kontrolle die Lücke oft als Verstoß gegen die Ruhezeitvorschriften.
            </div>
          </section>

          <section style={card}>
            <h2 style={h2s}>❓ Häufige Praxisfragen</h2>
            <h3 style={h3s}>Darf ich meine Ruhezeit unterbrechen, um das Fahrzeug umzuparken?</h3>
            <p style={p}>Grundsätzlich nein. Jede Aktivität auf der Fahrerkarte beendet die Ruhezeit. In der Praxis gilt jedoch eine Toleranz für <strong style={{color:C.txt}}>wenige Minuten</strong> Rangieren auf Raststätten, wenn dies vom Platzwart oder der Polizei angeordnet wird. Besser ist, vorher einen geeigneten Stellplatz zu wählen.</p>
            <h3 style={h3s}>Zählt eine Pause von 45 Minuten als Ruhezeit?</h3>
            <p style={p}>Nein. Pausen nach Art. 7 (45 Minuten nach 4,5 Stunden Lenkzeit) und Ruhezeiten nach Art. 8 sind zwei unterschiedliche Rechtsinstitute. Eine Ruhezeit beginnt frühestens mit einer zusammenhängenden Unterbrechung von <strong style={{color:C.txt}}>mindestens 9 Stunden</strong>.</p>
            <h3 style={h3s}>Was passiert bei einem Stau während der Ruhezeit?</h3>
            <p style={p}>Art. 12 VO 561/2006 erlaubt in Ausnahmefällen das Abweichen von den Ruhezeitvorschriften, um einen geeigneten Halteplatz zu erreichen. Die Gründe müssen <strong style={{color:C.txt}}>handschriftlich auf der Rückseite des Tagesausdrucks</strong> (oder über die Eingabefunktion im Tachographen) dokumentiert werden. Die Begründung muss konkret sein — "Stau" allein reicht nicht aus.</p>
            <h3 style={h3s}>Darf ich freiwillig länger ruhen?</h3>
            <p style={p}>Selbstverständlich. Die Verordnung regelt Mindestdauern, keine Höchstdauern. Wer statt 11 lieber 13 Stunden ruht, handelt vollkommen legal. Wichtig ist nur, dass die 24-Stunden-Frist für den Beginn der nächsten Ruhezeit eingehalten wird.</p>
          </section>

          <div style={{...card,background:`linear-gradient(135deg,rgba(240,136,62,0.08),${C.surface})`,borderColor:'rgba(240,136,62,0.2)',textAlign:'center'}}>
            <div style={{fontSize:32,marginBottom:12}}>🛏</div>
            <h2 style={{...h2s,textAlign:'center'}}>Ruhezeiten korrekt planen</h2>
            <p style={{...p,textAlign:'center'}}>Unser kostenloser Lenkzeitrechner plant automatisch tägliche und wöchentliche Ruhezeiten nach EU VO 561/2006 — inklusive verkürzter Varianten und Ausgleichsruhezeiten.</p>
            <a href="/" style={{display:'inline-block',background:C.acc,color:'#fff',borderRadius:10,padding:'13px 28px',fontWeight:700,textDecoration:'none',fontSize:15,boxShadow:'0 4px 16px rgba(240,136,62,0.3)'}}>
              → Zum Lenkzeitrechner
            </a>
          </div>

          <footer style={{display:'flex',justifyContent:'center',gap:16,padding:'16px 0',fontSize:12,color:C.dim,borderTop:`1px solid ${C.border}`,flexWrap:'wrap'}}>
            <a href="/lkw-lenkzeiten" style={{color:C.dim,textDecoration:'none'}}>Lenkzeiten</a>
            <a href="/pausenrechner" style={{color:C.dim,textDecoration:'none'}}>Pausenrechner</a>
            <a href="/ruhezeiten" style={{color:C.acc,textDecoration:'none'}}>Ruhezeiten</a>
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
