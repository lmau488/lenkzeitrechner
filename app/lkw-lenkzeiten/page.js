export const metadata = {
  title: 'LKW Lenkzeiten 2026 – Alles zur EU VO 561/2006 | LenkzeitRechner.de',
  description: 'LKW Lenkzeiten kompakt erklärt: Tageslenkzeit, Wochenlenkzeit, Pflichtpausen und Ruhezeiten nach EU Verordnung 561/2006. Mit Beispielen für Fahrer und Disponenten.',
  keywords: 'LKW Lenkzeiten, Tageslenkzeit LKW, Wochenlenkzeit 56 Stunden, EU 561/2006, Lenkzeiten Fahrer, Lenkzeiten Disponent',
  alternates: { canonical: 'https://lenkzeitrechner.de/lkw-lenkzeiten' },
  openGraph: {
    title: 'LKW Lenkzeiten 2026 – Alles zur EU VO 561/2006',
    description: 'Tageslenkzeit, Wochenlenkzeit, Pflichtpausen und Ruhezeiten nach EU VO 561/2006 — kompakt erklärt mit Beispielen.',
    url: 'https://lenkzeitrechner.de/lkw-lenkzeiten',
    images: [{ url: 'https://lenkzeitrechner.de/og-image.svg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'LKW Lenkzeiten 2026 – EU VO 561/2006', description: 'Tageslenkzeit, Wochenlenkzeit, Pflichtpausen und Ruhezeiten kompakt erklärt.' },
};

const C = {
  bg:'#13151f',surface:'#1c1f2e',surface2:'#242738',border:'rgba(255,255,255,0.07)',
  acc:'#f0883e',txt:'#ffffff',muted:'#94a3b8',dim:'#64748b',
  navBg:'rgba(19,21,31,0.85)',dotGrid:'rgba(255,255,255,0.06)',
  success:'#22c55e',error:'#ef4444',
};

export default function LkwLenkzeiten() {
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
            <p style={{...p,fontSize:17,color:C.txt,marginBottom:20}}>
              Alles was Fahrer und Disponenten zur <span style={accent}>EU Verordnung (EG) 561/2006</span> wissen müssen — kompakt, aktuell und mit praktischen Beispielen.
            </p>
            <a href="/" style={{display:'inline-block',background:C.acc,color:'#fff',borderRadius:10,padding:'12px 24px',fontWeight:700,textDecoration:'none',fontSize:14}}>
              → Zum kostenlosen Lenkzeitrechner
            </a>
          </div>

          <section style={card}>
            <h2 style={h2s}>⏱ Tageslenkzeit</h2>
            <div style={highlight}>
              <strong>Grundregel:</strong> Maximal <span style={accent}>9 Stunden</span> Lenkzeit pro Tag.<br/>
              <strong>Ausnahme:</strong> Bis zu <span style={accent}>10 Stunden</span> — aber maximal <span style={accent}>2-mal pro Woche</span>.
            </div>
            <p style={p}>Die Tageslenkzeit ist die Zeit zwischen zwei täglichen Ruhezeiten oder zwischen einer täglichen und einer wöchentlichen Ruhezeit. Sie umfasst ausschließlich die reine Fahrzeit — Ladezeiten, Pausen und Wartezeiten zählen nicht dazu.</p>
            <h3 style={h3s}>Praxisbeispiel Tageslenkzeit</h3>
            <table className="sub-tbl">
              <thead><tr><th>Tag</th><th>Lenkzeit</th><th>Zulässig?</th></tr></thead>
              <tbody>
                <tr><td>Montag</td><td>9 Stunden</td><td style={{color:C.success,fontWeight:700}}>✅ Ja</td></tr>
                <tr><td>Dienstag</td><td>10 Stunden (1. Verlängerung)</td><td style={{color:C.success,fontWeight:700}}>✅ Ja</td></tr>
                <tr><td>Mittwoch</td><td>10 Stunden (2. Verlängerung)</td><td style={{color:C.success,fontWeight:700}}>✅ Ja</td></tr>
                <tr><td>Donnerstag</td><td>10 Stunden (3. Verlängerung)</td><td style={{color:C.error,fontWeight:700}}>❌ Nein — max. 2×/Woche</td></tr>
              </tbody>
            </table>
          </section>

          <section style={card}>
            <h2 style={h2s}>☕ Pflichtpause nach 4,5 Stunden</h2>
            <div style={highlight}>
              Nach spätestens <span style={accent}>4,5 Stunden</span> ununterbrochener Lenkzeit ist eine Pause von mindestens <span style={accent}>45 Minuten</span> Pflicht.
            </div>
            <p style={p}>Die Pause kann auch aufgeteilt werden: erst <strong style={{color:C.txt}}>15 Minuten</strong>, dann <strong style={{color:C.txt}}>30 Minuten</strong> — aber immer in dieser Reihenfolge. Die Pausenzeiten selbst zählen nicht zur Lenkzeit.</p>
            <h3 style={h3s}>Regelung im Detail (Art. 7 VO 561/2006)</h3>
            <table className="sub-tbl">
              <thead><tr><th>Variante</th><th>Pause</th><th>Hinweis</th></tr></thead>
              <tbody>
                <tr><td>Einfache Pause</td><td>45 min am Stück</td><td style={{color:C.muted}}>Empfohlen, einfacher nachzuweisen</td></tr>
                <tr><td>Geteilte Pause (Teil 1)</td><td>15 min</td><td style={{color:C.muted}}>Muss zuerst kommen</td></tr>
                <tr><td>Geteilte Pause (Teil 2)</td><td>30 min</td><td style={{color:C.muted}}>Muss nach Teil 1 folgen</td></tr>
              </tbody>
            </table>
          </section>

          <section style={card}>
            <h2 style={h2s}>📅 Wochen- und Doppelwochenlenkzeit</h2>
            <div style={highlight}>
              <strong>Wochenlenkzeit:</strong> Max. <span style={accent}>56 Stunden</span><br/>
              <strong>Doppelwoche (2 Wochen):</strong> Max. <span style={accent}>90 Stunden</span>
            </div>
            <p style={p}>Auch wenn in einer Woche 56 Stunden erlaubt sind — über zwei aufeinanderfolgende Wochen dürfen es insgesamt nicht mehr als 90 Stunden sein. Das bedeutet: nach einer "Maximalwoche" mit 56h sind in der Folgewoche maximal 34h erlaubt.</p>
            <h3 style={h3s}>Beispielrechnung Doppelwoche</h3>
            <table className="sub-tbl">
              <thead><tr><th>Woche</th><th>Lenkzeit</th><th>Doppelwoche gesamt</th><th>Status</th></tr></thead>
              <tbody>
                <tr><td>KW 13</td><td>56h (Maximum)</td><td>56h</td><td style={{color:C.success,fontWeight:700}}>✅ OK</td></tr>
                <tr><td>KW 14</td><td>34h (Rest)</td><td>90h</td><td style={{color:C.success,fontWeight:700}}>✅ Genau am Limit</td></tr>
                <tr><td>KW 14</td><td>35h</td><td>91h</td><td style={{color:C.error,fontWeight:700}}>❌ Überschreitung!</td></tr>
              </tbody>
            </table>
          </section>

          <section style={card}>
            <h2 style={h2s}>🛏 Ruhezeiten</h2>
            <h3 style={h3s}>Tägliche Ruhezeit</h3>
            <p style={p}>Mindestens <span style={accent}>11 Stunden</span> pro Tag. Diese kann auf <strong style={{color:C.txt}}>9 Stunden</strong> verkürzt werden — jedoch maximal <strong style={{color:C.txt}}>3-mal</strong> zwischen zwei wöchentlichen Ruhezeiten. Die verkürzte Ruhezeit muss nicht nachgeholt werden.</p>
            <p style={p}>Alternativ: Die Ruhezeit kann in zwei Teile aufgeteilt werden (3 Stunden + 9 Stunden = 12 Stunden gesamt). Der erste Teil muss mindestens 3 Stunden betragen.</p>
            <h3 style={h3s}>Wöchentliche Ruhezeit</h3>
            <p style={p}>Mindestens <span style={accent}>45 Stunden</span> pro Woche. Jede zweite Woche kann sie auf <strong style={{color:C.txt}}>24 Stunden</strong> reduziert werden. Die Differenz muss dann innerhalb von 3 Wochen nachgeholt werden.</p>
            <div style={{background:'rgba(239,68,68,0.1)',border:'1px solid rgba(239,68,68,0.25)',borderRadius:12,padding:'16px 20px',marginTop:8}}>
              <strong style={{color:C.error}}>Wichtig:</strong> <span style={{color:C.muted}}>Die reguläre wöchentliche Ruhezeit (45h) darf <strong style={{color:C.txt}}>nicht im Fahrzeug</strong> verbracht werden! Bußgeld: bis zu 500 € für den Unternehmer.</span>
            </div>
          </section>

          <section style={card}>
            <h2 style={h2s}>🚛 Für wen gelten die Lenkzeiten?</h2>
            <p style={p}>Die EU VO 561/2006 gilt für:</p>
            <ul style={{...p,paddingLeft:20}}>
              <li>Fahrzeuge zur <strong style={{color:C.txt}}>Güterbeförderung</strong> mit einem zulässigen Gesamtgewicht über <strong style={{color:C.txt}}>3,5 Tonnen</strong></li>
              <li>Fahrzeuge zur <strong style={{color:C.txt}}>Personenbeförderung</strong> mit mehr als <strong style={{color:C.txt}}>9 Sitzplätzen</strong> (einschließlich Fahrersitz)</li>
            </ul>
            <p style={p}>Ausgenommen sind u.a.: Fahrzeuge mit max. 40 km/h Höchstgeschwindigkeit, Fahrzeuge der Streitkräfte und bestimmte Spezialfahrzeuge.</p>
          </section>

          <div style={{...card,background:`linear-gradient(135deg,rgba(240,136,62,0.08),${C.surface})`,borderColor:'rgba(240,136,62,0.2)',textAlign:'center'}}>
            <div style={{fontSize:32,marginBottom:12}}>🚛</div>
            <h2 style={{...h2s,textAlign:'center'}}>Lenkzeiten jetzt berechnen</h2>
            <p style={{...p,textAlign:'center'}}>Unser kostenloser Rechner berechnet Pausen, Ruhezeiten und den gesamten Tagesplan — kostenlos, ohne Anmeldung.</p>
            <a href="/" style={{display:'inline-block',background:C.acc,color:'#fff',borderRadius:10,padding:'13px 28px',fontWeight:700,textDecoration:'none',fontSize:15,boxShadow:'0 4px 16px rgba(240,136,62,0.3)'}}>
              → Zum Lenkzeitrechner
            </a>
          </div>

          <footer style={{display:'flex',justifyContent:'center',gap:24,padding:'16px 0',fontSize:12,color:C.dim,borderTop:`1px solid ${C.border}`}}>
            <a href="/impressum" style={{color:C.dim,textDecoration:'none'}}>Impressum</a>
            <a href="/datenschutz" style={{color:C.dim,textDecoration:'none'}}>Datenschutz</a>
            <span>© 2026 LenkzeitRechner.de</span>
          </footer>
        </div>
      </div>
    </>
  );
}
