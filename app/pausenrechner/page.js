export const metadata = {
  title: 'LKW Pausenrechner – Pflichtpausen nach EU VO 561/2006 | LenkzeitRechner.de',
  description: 'LKW Pausenrechner online: Wann muss ein LKW-Fahrer Pause machen? Pflichtpausen nach 4,5 Stunden, geteilte Pausen und Ausnahmen – kostenlos berechnen.',
  keywords: 'LKW Pausenrechner, Pflichtpause LKW, Pause nach 4,5 Stunden, Fahrtunterbrechung berechnen, geteilte Pause LKW, Pausenzeit Berufskraftfahrer',
  alternates: { canonical: 'https://lenkzeitrechner.de/pausenrechner' },
};

export default function Pausenrechner() {
  const s = { minHeight:'100vh', background:'#f4f6f9', fontFamily:"'Plus Jakarta Sans','Segoe UI',sans-serif", padding:'0 16px' };
  const wrap = { maxWidth:820, margin:'0 auto', paddingTop:40, paddingBottom:60 };
  const card = { background:'#fff', border:'1px solid #e2e6ea', borderRadius:18, padding:'28px 32px', marginBottom:20, boxShadow:'0 2px 12px rgba(0,0,0,0.05)' };
  const h1s = { fontSize:32, fontWeight:800, color:'#1a1d23', marginBottom:8, lineHeight:1.2 };
  const h2s = { fontSize:20, fontWeight:700, color:'#e8732a', marginBottom:12, marginTop:0 };
  const p = { fontSize:15, color:'#5a6474', lineHeight:1.8, marginBottom:12 };
  const accent = { color:'#e8732a', fontWeight:700 };
  const highlight = { background:'#fff4ed', border:'1px solid #ffd8b8', borderRadius:12, padding:'16px 20px', marginBottom:16 };
  const table = { width:'100%', borderCollapse:'collapse', fontSize:14, marginTop:12 };
  const th = { background:'#f8f9fa', padding:'10px 14px', textAlign:'left', fontWeight:700, fontSize:12, textTransform:'uppercase', letterSpacing:'1px', color:'#9aa3af', borderBottom:'1px solid #e2e6ea' };
  const td = { padding:'10px 14px', borderBottom:'1px solid #e2e6ea', color:'#1a1d23' };

  return (
    <div style={s}>
      <div style={wrap}>

        <div style={{ fontSize:13, color:'#9aa3af', marginBottom:20 }}>
          <a href="/" style={{ color:'#e8732a', textDecoration:'none' }}>LenkzeitRechner.de</a>
          {' → '}Pausenrechner
        </div>

        <div style={card}>
          <h1 style={h1s}>LKW Pausenrechner 2026</h1>
          <p style={{ ...p, fontSize:17, color:'#1a1d23', marginBottom:20 }}>
            Wann muss ein LKW-Fahrer Pause machen? Alle Regeln zur <span style={accent}>Fahrtunterbrechung nach Art. 7 EU VO 561/2006</span> — einfach erklärt.
          </p>
          <a href="/" style={{ display:'inline-block', background:'#e8732a', color:'#fff', borderRadius:10, padding:'12px 24px', fontWeight:700, textDecoration:'none', fontSize:14 }}>
            → Jetzt Pausenzeiten berechnen
          </a>
        </div>

        <div style={card}>
          <h2 style={h2s}>Die Grundregel: Pause nach 4,5 Stunden</h2>
          <div style={highlight}>
            Nach spätestens <span style={accent}>4 Stunden 30 Minuten</span> ununterbrochener Lenkzeit ist eine Pause von mindestens <span style={accent}>45 Minuten</span> vorgeschrieben.
          </div>
          <p style={p}>Diese Pause darf nicht durch andere Tätigkeiten unterbrochen werden. Wartezeiten, Be- und Entladen oder Verwaltungsaufgaben gelten nicht als Pause — auch wenn der Fahrer dabei nicht fährt.</p>
        </div>

        <div style={card}>
          <h2 style={h2s}>Geteilte Pause: 15 + 30 Minuten</h2>
          <p style={p}>Alternativ zur 45-Minuten-Pause ist eine Aufteilung möglich:</p>
          <table style={table}>
            <thead><tr><th style={th}>Teil</th><th style={th}>Dauer</th><th style={th}>Reihenfolge</th></tr></thead>
            <tbody>
              <tr><td style={td}>Erste Teilpause</td><td style={td}>mindestens 15 min</td><td style={td}>Muss zuerst kommen</td></tr>
              <tr><td style={td}>Zweite Teilpause</td><td style={td}>mindestens 30 min</td><td style={td}>Muss danach folgen</td></tr>
            </tbody>
          </table>
          <p style={{ ...p, marginTop:12 }}>Wichtig: Die Reihenfolge ist zwingend vorgeschrieben — zuerst 15 Minuten, dann 30 Minuten. Umgekehrt ist nicht zulässig.</p>
        </div>

        <div style={card}>
          <h2 style={h2s}>Beispiele aus dem Fahrerleben</h2>
          <table style={table}>
            <thead><tr><th style={th}>Situation</th><th style={th}>Erlaubt?</th></tr></thead>
            <tbody>
              {[
                ['Fahrt 4,5h, dann 45 min Pause, dann weiter','✅ Korrekt'],
                ['Fahrt 4,5h, dann 15 min, Fahrt weiter, dann 30 min','✅ Korrekt (geteilte Pause)'],
                ['Fahrt 4,5h, dann 30 min, Fahrt weiter, dann 15 min','❌ Falsch – Reihenfolge verkehrt'],
                ['Fahrt 5h ohne Unterbrechung','❌ Verstoß – Pause wäre nach 4,5h fällig'],
                ['Fahrt 2h, 10 min Laden, Fahrt 2,5h ohne Pause','❌ Laden zählt nicht als Pause'],
                ['Fahrt 2h, 15 min echte Pause, Fahrt 2,5h, 30 min Pause','✅ Geteilte Pause korrekt'],
              ].map(([sit, ok], i) => (
                <tr key={i}>
                  <td style={td}>{sit}</td>
                  <td style={{ ...td, color: ok.startsWith('✅') ? '#1a7f37' : '#c0392b', fontWeight:700 }}>{ok}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={card}>
          <h2 style={h2s}>Bußgelder bei Pausenverstößen</h2>
          <table style={table}>
            <thead><tr><th style={th}>Verstoß</th><th style={th}>Fahrer</th><th style={th}>Unternehmer</th></tr></thead>
            <tbody>
              {[
                ['Pause nicht eingelegt','30 €','150 €'],
                ['Pause zu kurz (unter 45 min)','30 €','150 €'],
                ['Geteilte Pause falsche Reihenfolge','30 €','150 €'],
                ['Pause durch Arbeit unterbrochen','30 €','150 €'],
              ].map(([v,f,u],i) => (
                <tr key={i}>
                  <td style={td}>{v}</td>
                  <td style={{ ...td, color:'#c0392b', fontWeight:700 }}>{f}</td>
                  <td style={{ ...td, color:'#c0392b', fontWeight:700 }}>{u}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ ...p, marginTop:12, fontSize:12, color:'#9aa3af' }}>Quelle: BKatV, § 8 FPersG</p>
        </div>

        <div style={{ ...card, textAlign:'center', background:'linear-gradient(135deg,#fff4ed,#fff)', borderColor:'#ffd8b8' }}>
          <div style={{ fontSize:32, marginBottom:12 }}>☕</div>
          <h2 style={{ ...h2s, textAlign:'center' }}>Pausenzeiten automatisch berechnen</h2>
          <p style={{ ...p, textAlign:'center' }}>Der Lenkzeitrechner berechnet automatisch wann Pausen fällig sind und erstellt deinen kompletten Tagesplan.</p>
          <a href="/" style={{ display:'inline-block', background:'#e8732a', color:'#fff', borderRadius:10, padding:'13px 28px', fontWeight:700, textDecoration:'none', fontSize:15, boxShadow:'0 4px 16px rgba(232,115,42,0.3)' }}>
            → Zum kostenlosen Pausenrechner
          </a>
        </div>

        <footer style={{ display:'flex', justifyContent:'center', gap:24, padding:'16px 0', fontSize:12, color:'#9aa3af', borderTop:'1px solid #e2e6ea' }}>
          <a href="/impressum" style={{ color:'#9aa3af', textDecoration:'none' }}>Impressum</a>
          <a href="/datenschutz" style={{ color:'#9aa3af', textDecoration:'none' }}>Datenschutz</a>
          <span>© 2026 LenkzeitRechner.de</span>
        </footer>
      </div>
    </div>
  );
}
