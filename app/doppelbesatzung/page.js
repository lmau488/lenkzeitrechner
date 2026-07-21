import AdUnit from '../AdUnit';

export const metadata = {
  title: 'Doppelbesatzung & Team-Fahrer 2026 – Mehrfahrerbesatzung nach EU VO 561/2006 | LenkzeitRechner.de',
  description: 'Mehrfahrerbesatzung (Team-Fahrer) einfach erklärt: die 30-Stunden-Regel für die tägliche Ruhezeit, Pause als Beifahrer, Bereitschaftszeit des Zweitfahrers und wie viel ein Team am Stück fahren darf – mit Beispiel und FAQ.',
  keywords: 'Doppelbesatzung LKW, Mehrfahrerbesatzung, Team Fahrer Lenkzeiten, 30 Stunden Regel, Art. 4 VO 561/2006, Art. 8 Abs. 5, Ruhezeit Doppelbesatzung, Pause Beifahrer, Bereitschaftszeit Zweitfahrer',
  alternates: { canonical: 'https://www.lenkzeitrechner.de/doppelbesatzung' },
  openGraph: {
    title: 'Doppelbesatzung & Team-Fahrer – Mehrfahrerbesatzung nach EU VO 561/2006',
    description: 'Die 30-Stunden-Regel, Pause als Beifahrer und Bereitschaftszeit – kompakt erklärt mit Beispiel.',
    url: 'https://www.lenkzeitrechner.de/doppelbesatzung',
    images: [{ url: 'https://www.lenkzeitrechner.de/og-image.svg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Doppelbesatzung & Team-Fahrer 2026', description: 'Mehrfahrerbesatzung, 30-Stunden-Regel und Pause als Beifahrer erklärt.' },
};

const C = {
  bg:'#13151f',surface:'#1c1f2e',surface2:'#242738',border:'rgba(255,255,255,0.07)',
  acc:'#f0883e',txt:'#ffffff',muted:'#94a3b8',dim:'#64748b',
  navBg:'rgba(19,21,31,0.85)',dotGrid:'rgba(255,255,255,0.06)',
  success:'#22c55e',error:'#ef4444',
};

const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
    {"@type":"Question","name":"Was bedeutet Doppelbesatzung bei Lkw?","acceptedAnswer":{"@type":"Answer","text":"Eine Mehrfahrerbesatzung (Doppelbesatzung) liegt vor, wenn während jeder Lenkphase zwischen zwei täglichen Ruhezeiten mindestens zwei Fahrer im Fahrzeug sind. In der ersten Stunde ist der zweite Fahrer optional, danach muss er durchgehend anwesend sein (Art. 4 lit. o VO 561/2006)."}},
    {"@type":"Question","name":"Wie lange darf ein Team am Stück unterwegs sein?","acceptedAnswer":{"@type":"Answer","text":"Bei Doppelbesatzung muss jeder Fahrer innerhalb von 30 Stunden nach dem Ende der letzten Ruhezeit eine neue tägliche Ruhezeit von mindestens 9 Stunden genommen haben (Art. 8 Abs. 5). Weil sich die Fahrer abwechseln, kann das Fahrzeug in diesem Fenster deutlich länger bewegt werden als bei Einzelbesatzung – die individuellen Lenkzeitgrenzen von 9 bzw. 10 Stunden pro Fahrer bleiben aber bestehen."}},
    {"@type":"Question","name":"Darf ich meine Pause als Beifahrer machen?","acceptedAnswer":{"@type":"Answer","text":"Ja. Ein Fahrer darf die 45-minütige Fahrtunterbrechung auch dann einlegen, wenn er als Beifahrer in einem fahrenden Fahrzeug sitzt, das der zweite Fahrer steuert. Die tägliche Ruhezeit muss dagegen bei stehendem Fahrzeug genommen werden."}},
    {"@type":"Question","name":"Ist die Zeit als Beifahrer eine Ruhezeit?","acceptedAnswer":{"@type":"Answer","text":"Nein. Die Zeit, die ein Fahrer neben dem lenkenden Kollegen verbringt, gilt als Bereitschaftszeit, nicht als Ruhezeit. Sie kann jedoch als Fahrtunterbrechung (Pause) angerechnet werden."}}
  ]
};

export default function Doppelbesatzung() {
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
              <a href="/doppelbesatzung" className="nav-link active">Doppelbesatzung</a>
            </div>
          </div>
        </nav>

        <div className="wrap" style={{maxWidth:820,margin:'0 auto',padding:'40px 24px 60px'}}>
          <div style={{fontSize:13,color:C.dim,marginBottom:20}}>
            <a href="/" style={{color:C.acc,textDecoration:'none'}}>LenkzeitRechner.de</a>{' → '}Doppelbesatzung &amp; Team-Fahrer
          </div>

          <div style={card}>
            <h1 style={{fontSize:32,fontWeight:800,color:C.txt,marginBottom:8,lineHeight:1.2}}>Doppelbesatzung &amp; Team-Fahrer</h1>
            <p style={{...p,fontSize:17,color:C.txt,marginBottom:16}}>
              Zwei Fahrer, ein Fahrzeug — die <span style={accent}>Mehrfahrerbesatzung</span> ist der Schlüssel für lange Strecken ohne langen Fahrzeugstillstand. Statt der üblichen 24-Stunden-Grenze gilt für Teams eine <span style={accent}>30-Stunden-Regel</span> für die tägliche Ruhezeit (Art. 8 Abs. 5 VO 561/2006).
            </p>
            <p style={p}>
              Diese Seite erklärt, wann eine Doppelbesatzung im Sinne der Verordnung vorliegt, wie die 30-Stunden-Regel funktioniert, warum die Pause auch als Beifahrer zählt und wo die Grenzen liegen.
            </p>
            <a href="/" style={{display:'inline-block',background:C.acc,color:'#fff',borderRadius:10,padding:'12px 24px',fontWeight:700,textDecoration:'none',fontSize:14}}>
              → Zum kostenlosen Lenkzeitrechner
            </a>
          </div>

          <section style={card}>
            <h2 style={h2s}>Was ist eine Mehrfahrerbesatzung? (Art. 4 lit. o)</h2>
            <p style={p}>
              Eine Mehrfahrerbesatzung liegt vor, wenn während jeder Lenkphase zwischen zwei täglichen Ruhezeiten — oder zwischen einer täglichen und einer wöchentlichen Ruhezeit — <strong style={{color:C.txt}}>mindestens zwei Fahrer</strong> im Fahrzeug sind, um zu fahren.
            </p>
            <div style={highlight}>
              <strong style={{color:C.txt}}>Wichtige 1-Stunden-Regel:</strong> Während der <span style={accent}>ersten Stunde</span> der Mehrfahrerbesatzung ist die Anwesenheit des zweiten Fahrers freiwillig, für die <span style={accent}>restliche Zeit</span> ist sie zwingend. So kann ein Team den Kollegen zu Schichtbeginn noch abholen, ohne den Status zu verlieren.
            </div>
          </section>

          <section style={card}>
            <h2 style={h2s}>Die 30-Stunden-Regel für die tägliche Ruhezeit</h2>
            <div style={highlight}>
              Bei Doppelbesatzung muss jeder Fahrer <span style={accent}>innerhalb von 30 Stunden</span> nach dem Ende der letzten täglichen oder wöchentlichen Ruhezeit eine neue tägliche Ruhezeit von mindestens <span style={accent}>9 Stunden</span> genommen haben (Art. 8 Abs. 5).
            </div>
            <p style={p}>
              Bei Einzelbesatzung muss die tägliche Ruhezeit dagegen innerhalb von 24 Stunden liegen. Die sechs zusätzlichen Stunden verschaffen dem Team Spielraum: Während ein Fahrer lenkt, kann der andere Pause machen oder in der Koje ruhen — das Fahrzeug bleibt in Bewegung. So sind Fahrzeuglaufzeiten von rund 18 bis 20 Stunden am Stück realistisch.
            </p>
            <div style={{background:'rgba(239,68,68,0.1)',border:'1px solid rgba(239,68,68,0.25)',borderRadius:12,padding:'16px 20px',marginTop:8}}>
              <strong style={{color:C.error}}>Aber:</strong> <span style={{color:C.muted}}>Die individuellen Lenkzeitgrenzen bleiben unverändert. <strong style={{color:C.txt}}>Jeder</strong> Fahrer darf pro Tag maximal 9 Stunden lenken (zweimal pro Woche 10 Stunden), und nach spätestens 4,5 Stunden Lenkzeit ist die Pflichtpause fällig. Die Doppelbesatzung erhöht die Fahrzeug-, nicht die Fahrer-Laufzeit.</span>
            </div>
          </section>

          <div style={{margin:'8px 0 20px'}}><AdUnit /></div>

          <section style={card}>
            <h2 style={h2s}>Beispiel: ein Fahrtag im Team</h2>
            <p style={p}>
              Fahrer A und Fahrer B starten gemeinsam nach einer Ruhezeit. Sie wechseln sich ab; wer nicht fährt, macht Pause oder ruht:
            </p>
            <table className="sub-tbl">
              <thead><tr><th>Block</th><th>Fahrer A</th><th>Fahrer B</th></tr></thead>
              <tbody>
                <tr><td style={{color:C.txt}}>0:00–4:30</td><td style={{color:C.success}}>lenkt (4,5 h)</td><td style={{color:C.muted}}>Bereitschaft / Pause</td></tr>
                <tr><td style={{color:C.txt}}>4:30–9:00</td><td style={{color:C.muted}}>Pause / Bereitschaft</td><td style={{color:C.success}}>lenkt (4,5 h)</td></tr>
                <tr><td style={{color:C.txt}}>9:00–13:30</td><td style={{color:C.success}}>lenkt (4,5 h)</td><td style={{color:C.muted}}>Pause / Bereitschaft</td></tr>
                <tr><td style={{color:C.txt}}>13:30–18:00</td><td style={{color:C.muted}}>Pause / Bereitschaft</td><td style={{color:C.success}}>lenkt (4,5 h)</td></tr>
                <tr><td style={{color:C.txt}}>ab spätestens Std. 30</td><td style={{color:C.acc,fontWeight:700}}>9 h Ruhezeit</td><td style={{color:C.acc,fontWeight:700}}>9 h Ruhezeit</td></tr>
              </tbody>
            </table>
            <p style={{...p,marginTop:12}}>
              In diesem Muster fährt jeder Fahrer 9 Stunden (innerhalb der zulässigen Grenze), das Fahrzeug ist rund 18 Stunden in Bewegung — und beide nehmen rechtzeitig ihre 9-Stunden-Ruhe innerhalb des 30-Stunden-Fensters.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>Pause und Bereitschaftszeit im Team</h2>
            <h3 style={h3s}>Pause als Beifahrer</h3>
            <p style={p}>
              Ein Fahrer darf seine <strong style={{color:C.txt}}>45-minütige Fahrtunterbrechung</strong> auch dann einlegen, wenn er als Beifahrer neben dem lenkenden Kollegen sitzt und das Fahrzeug fährt. Das ist einer der größten Vorteile der Doppelbesatzung: Die Pflichtpause „läuft mit", ohne dass das Fahrzeug anhalten muss.
            </p>
            <h3 style={h3s}>Was ist Bereitschaftszeit?</h3>
            <p style={p}>
              Die Zeit neben dem fahrenden Kollegen zählt als <strong style={{color:C.txt}}>Bereitschaftszeit</strong> — weder als Lenkzeit noch als Ruhezeit. Sie ist am Fahrtenschreiber entsprechend einzustellen. Die tägliche Ruhezeit dagegen muss bei <strong style={{color:C.txt}}>stehendem Fahrzeug</strong> genommen werden; sie darf nicht während der Fahrt in der Koje „nebenher" laufen.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>Typische Fehler bei der Doppelbesatzung</h2>
            <ul className="lz">
              <li><strong style={{color:C.txt}}>Ruhezeit im fahrenden Fahrzeug.</strong> Zeit in der Koje bei fahrendem Lkw ist Bereitschaft, keine tägliche Ruhezeit.</li>
              <li><strong style={{color:C.txt}}>Individuelle Lenkzeit überzogen.</strong> Auch im Team gilt pro Fahrer max. 9 h (2× 10 h) und die Pause nach 4,5 h.</li>
              <li><strong style={{color:C.txt}}>Zweiter Fahrer zu spät zugestiegen.</strong> Nach der ersten Stunde muss der zweite Fahrer durchgehend an Bord sein, sonst entfällt der Doppelbesatzungs-Status.</li>
              <li><strong style={{color:C.txt}}>Bereitschaft falsch eingestellt.</strong> Wer die Zeit als Beifahrer nicht korrekt am Tachograph dokumentiert, riskiert Beanstandungen bei der Kontrolle.</li>
            </ul>
            <p style={p}>
              Wie eine Kontrolle abläuft und welche Nachweise mitzuführen sind, lesen Sie unter <a href="/kontrolle" style={{color:C.acc,textDecoration:'underline'}}>Kontrolle &amp; Bußgeldverfahren</a>. Die Grundregeln zu Pausen und Ruhezeiten stehen auf den Seiten <a href="/pausenrechner" style={{color:C.acc,textDecoration:'underline'}}>Pausenrechner</a> und <a href="/ruhezeiten" style={{color:C.acc,textDecoration:'underline'}}>Ruhezeiten</a>.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>Häufige Fragen zur Doppelbesatzung</h2>
            <h3 style={h3s}>Verdoppelt sich die erlaubte Lenkzeit im Team?</h3>
            <p style={p}>Nein. Jeder Fahrer bleibt bei maximal 9 Stunden Tageslenkzeit (zweimal pro Woche 10 Stunden). Nur die Fahrzeuglaufzeit steigt, weil sich die Fahrer abwechseln.</p>
            <h3 style={h3s}>Muss die 9-Stunden-Ruhe gemeinsam genommen werden?</h3>
            <p style={p}>Nein, jeder Fahrer hat sein eigenes 30-Stunden-Fenster. In der Praxis legen Teams die Ruhezeiten aber meist zusammen, wenn das Fahrzeug ohnehin steht.</p>
            <h3 style={h3s}>Gilt die 30-Stunden-Regel auch bei drei Fahrern?</h3>
            <p style={p}>Die Regel stellt auf die Mehrfahrerbesatzung ab, also mindestens zwei Fahrer. Auch bei mehr Fahrern muss jeder einzelne innerhalb von 30 Stunden seine 9-Stunden-Ruhe genommen haben.</p>
          </section>

          <div style={{margin:'8px 0 20px'}}><AdUnit /></div>

          <div style={{...card,background:`linear-gradient(135deg,rgba(240,136,62,0.08),${C.surface})`,borderColor:'rgba(240,136,62,0.2)',textAlign:'center'}}>
            <h2 style={{...h2s,textAlign:'center'}}>Tagesplan auch für Team-Touren berechnen</h2>
            <p style={{...p,textAlign:'center'}}>Unser Rechner berücksichtigt Pflichtpausen, verkürzte Ruhezeiten und die 10-Stunden-Verlängerung — eine solide Basis für die Planung jeder Fahrerschicht.</p>
            <a href="/" style={{display:'inline-block',background:C.acc,color:'#fff',borderRadius:10,padding:'13px 28px',fontWeight:700,textDecoration:'none',fontSize:15,boxShadow:'0 4px 16px rgba(240,136,62,0.3)'}}>
              → Zum Lenkzeitrechner
            </a>
          </div>

          <div style={{...card,fontSize:13,color:C.dim}}>
            <strong style={{color:C.muted}}>Rechtsquellen:</strong> VO (EG) Nr. 561/2006 (Art. 4 lit. o, Art. 7, Art. 8 Abs. 5) · VO (EU) 2020/1054 (Mobilitätspaket I). Verbindlich ist die Fassung auf <a href="https://eur-lex.europa.eu" target="_blank" rel="noopener noreferrer" style={{color:C.acc,textDecoration:'underline'}}>eur-lex.europa.eu</a>. Stand: Juli 2026. Dieser Beitrag ist eine redaktionelle Einordnung und ersetzt keine Rechtsberatung im Einzelfall.
          </div>

          <footer style={{display:'flex',justifyContent:'center',gap:16,padding:'16px 0',fontSize:12,color:C.dim,borderTop:`1px solid ${C.border}`,flexWrap:'wrap'}}>
            <a href="/lkw-lenkzeiten" style={{color:C.dim,textDecoration:'none'}}>Lenkzeiten</a>
            <a href="/pausenrechner" style={{color:C.dim,textDecoration:'none'}}>Pausenrechner</a>
            <a href="/ruhezeiten" style={{color:C.dim,textDecoration:'none'}}>Ruhezeiten</a>
            <a href="/ausnahmen" style={{color:C.dim,textDecoration:'none'}}>Ausnahmen</a>
            <a href="/doppelbesatzung" style={{color:C.acc,textDecoration:'none'}}>Doppelbesatzung</a>
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
