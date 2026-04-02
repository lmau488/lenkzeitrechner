export const metadata = {
  title: 'LKW Pausenrechner – Pflichtpausen nach EU VO 561/2006 | LenkzeitRechner.de',
  description: 'LKW Pausenrechner online: Wann muss ein LKW-Fahrer Pause machen? Pflichtpausen nach 4,5 Stunden, geteilte Pausen und Ausnahmen – kostenlos berechnen.',
  keywords: 'LKW Pausenrechner, Pflichtpause LKW, Pause nach 4,5 Stunden, Fahrtunterbrechung berechnen, geteilte Pause LKW, Pausenzeit Berufskraftfahrer',
  alternates: { canonical: 'https://lenkzeitrechner.de/pausenrechner' },
  openGraph: {
    title: 'LKW Pausenrechner – Pflichtpausen nach EU VO 561/2006',
    description: 'Wann muss ein LKW-Fahrer Pause machen? Pflichtpausen, geteilte Pausen und Ausnahmen kostenlos berechnen.',
    url: 'https://lenkzeitrechner.de/pausenrechner',
    images: [{ url: 'https://lenkzeitrechner.de/og-image.svg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'LKW Pausenrechner – EU VO 561/2006', description: 'Pflichtpausen nach 4,5 Stunden berechnen — kostenlos und online.' },
};

const C = {
  bg:'#13151f',surface:'#1c1f2e',surface2:'#242738',border:'rgba(255,255,255,0.07)',
  acc:'#f0883e',txt:'#ffffff',muted:'#94a3b8',dim:'#64748b',
  navBg:'rgba(19,21,31,0.85)',dotGrid:'rgba(255,255,255,0.06)',
  success:'#22c55e',error:'#ef4444',
};

export default function Pausenrechner() {
  const card = {background:C.surface,border:`1px solid ${C.border}`,borderRadius:18,padding:'28px 32px',marginBottom:20};
  const h2s = {fontSize:20,fontWeight:700,color:C.acc,marginBottom:12,marginTop:0};
  const p = {fontSize:15,color:C.muted,lineHeight:1.8,marginBottom:12};
  const accent = {color:C.acc,fontWeight:700};
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
        @media(max-width:580px){.wrap{padding:0 12px!important;}.sub-tbl th:last-child,.sub-tbl td:last-child{display:none;}.nav-link{display:none;}}
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
            <p style={{...p,fontSize:17,color:C.txt,marginBottom:20}}>
              Wann muss ein LKW-Fahrer Pause machen? Alle Regeln zur <span style={accent}>Fahrtunterbrechung nach Art. 7 EU VO 561/2006</span> — einfach erklärt.
            </p>
            <a href="/" style={{display:'inline-block',background:C.acc,color:'#fff',borderRadius:10,padding:'12px 24px',fontWeight:700,textDecoration:'none',fontSize:14}}>
              → Jetzt Pausenzeiten berechnen
            </a>
          </div>

          <section style={card}>
            <h2 style={h2s}>☕ Die Grundregel: Pause nach 4,5 Stunden</h2>
            <div style={highlight}>
              Nach spätestens <span style={accent}>4 Stunden 30 Minuten</span> ununterbrochener Lenkzeit ist eine Pause von mindestens <span style={accent}>45 Minuten</span> vorgeschrieben.
            </div>
            <p style={p}>Diese Pause darf nicht durch andere Tätigkeiten unterbrochen werden. Wartezeiten, Be- und Entladen oder Verwaltungsaufgaben gelten nicht als Pause — auch wenn der Fahrer dabei nicht fährt.</p>
          </section>

          <section style={card}>
            <h2 style={h2s}>✂️ Geteilte Pause: 15 + 30 Minuten</h2>
            <p style={p}>Alternativ zur 45-Minuten-Pause ist eine Aufteilung möglich:</p>
            <table className="sub-tbl">
              <thead><tr><th>Teil</th><th>Dauer</th><th>Reihenfolge</th></tr></thead>
              <tbody>
                <tr><td style={{color:C.txt}}>Erste Teilpause</td><td style={{color:C.txt}}>mindestens 15 min</td><td style={{color:C.muted}}>Muss zuerst kommen</td></tr>
                <tr><td style={{color:C.txt}}>Zweite Teilpause</td><td style={{color:C.txt}}>mindestens 30 min</td><td style={{color:C.muted}}>Muss danach folgen</td></tr>
              </tbody>
            </table>
            <p style={{...p,marginTop:12}}>Wichtig: Die Reihenfolge ist zwingend vorgeschrieben — zuerst 15 Minuten, dann 30 Minuten. Umgekehrt ist nicht zulässig.</p>
          </section>

          <section style={card}>
            <h2 style={h2s}>🚛 Beispiele aus dem Fahrerleben</h2>
            <table className="sub-tbl">
              <thead><tr><th>Situation</th><th>Erlaubt?</th></tr></thead>
              <tbody>
                {[
                  ['Fahrt 4,5h, dann 45 min Pause, dann weiter','✅ Korrekt',true],
                  ['Fahrt 4,5h, dann 15 min, Fahrt weiter, dann 30 min','✅ Korrekt (geteilte Pause)',true],
                  ['Fahrt 4,5h, dann 30 min, Fahrt weiter, dann 15 min','❌ Falsch – Reihenfolge verkehrt',false],
                  ['Fahrt 5h ohne Unterbrechung','❌ Verstoß – Pause wäre nach 4,5h fällig',false],
                  ['Fahrt 2h, 10 min Laden, Fahrt 2,5h ohne Pause','❌ Laden zählt nicht als Pause',false],
                  ['Fahrt 2h, 15 min echte Pause, Fahrt 2,5h, 30 min Pause','✅ Geteilte Pause korrekt',true],
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
            <h2 style={h2s}>💰 Bußgelder bei Pausenverstößen</h2>
            <table className="sub-tbl">
              <thead><tr><th>Verstoß</th><th>Fahrer</th><th>Unternehmer</th></tr></thead>
              <tbody>
                {[
                  ['Pause nicht eingelegt','30 €','150 €'],
                  ['Pause zu kurz (unter 45 min)','30 €','150 €'],
                  ['Geteilte Pause falsche Reihenfolge','30 €','150 €'],
                  ['Pause durch Arbeit unterbrochen','30 €','150 €'],
                ].map(([v,f,u],i) => (
                  <tr key={i}>
                    <td style={{color:C.txt}}>{v}</td>
                    <td style={{color:C.error,fontWeight:700}}>{f}</td>
                    <td style={{color:C.error,fontWeight:700}}>{u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{...p,marginTop:12,fontSize:12,color:C.dim}}>Quelle: BKatV, § 8 FPersG</p>
          </section>

          <div style={{...card,background:`linear-gradient(135deg,rgba(240,136,62,0.08),${C.surface})`,borderColor:'rgba(240,136,62,0.2)',textAlign:'center'}}>
            <div style={{fontSize:32,marginBottom:12}}>☕</div>
            <h2 style={{...h2s,textAlign:'center'}}>Pausenzeiten automatisch berechnen</h2>
            <p style={{...p,textAlign:'center'}}>Der Lenkzeitrechner berechnet automatisch wann Pausen fällig sind und erstellt deinen kompletten Tagesplan.</p>
            <a href="/" style={{display:'inline-block',background:C.acc,color:'#fff',borderRadius:10,padding:'13px 28px',fontWeight:700,textDecoration:'none',fontSize:15,boxShadow:'0 4px 16px rgba(240,136,62,0.3)'}}>
              → Zum kostenlosen Pausenrechner
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
