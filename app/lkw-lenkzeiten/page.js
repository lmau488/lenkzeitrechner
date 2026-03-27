export const metadata = {
  title: 'LKW Lenkzeiten 2026 – Alles zur EU VO 561/2006 | LenkzeitRechner.de',
  description: 'LKW Lenkzeiten kompakt erklärt: Tageslenkzeit, Wochenlenkzeit, Pflichtpausen und Ruhezeiten nach EU Verordnung 561/2006. Mit Beispielen für Fahrer und Disponenten.',
  keywords: 'LKW Lenkzeiten, Tageslenkzeit LKW, Wochenlenkzeit 56 Stunden, EU 561/2006, Lenkzeiten Fahrer, Lenkzeiten Disponent',
  alternates: { canonical: 'https://lenkzeitrechner.de/lkw-lenkzeiten' },
};

export default function LkwLenkzeiten() {
  const s = { minHeight:'100vh', background:'#f4f6f9', fontFamily:"'Plus Jakarta Sans','Segoe UI',sans-serif", padding:'0 16px' };
  const wrap = { maxWidth:820, margin:'0 auto', paddingTop:40, paddingBottom:60 };
  const card = { background:'#fff', border:'1px solid #e2e6ea', borderRadius:18, padding:'28px 32px', marginBottom:20, boxShadow:'0 2px 12px rgba(0,0,0,0.05)' };
  const h1s = { fontSize:32, fontWeight:800, color:'#1a1d23', marginBottom:8, lineHeight:1.2 };
  const h2s = { fontSize:20, fontWeight:700, color:'#e8732a', marginBottom:12, marginTop:0 };
  const h3s = { fontSize:16, fontWeight:700, color:'#1a1d23', marginBottom:8, marginTop:16 };
  const p = { fontSize:15, color:'#5a6474', lineHeight:1.8, marginBottom:12 };
  const accent = { color:'#e8732a', fontWeight:700 };
  const table = { width:'100%', borderCollapse:'collapse', fontSize:14, marginTop:12 };
  const th = { background:'#f8f9fa', padding:'10px 14px', textAlign:'left', fontWeight:700, fontSize:12, textTransform:'uppercase', letterSpacing:'1px', color:'#9aa3af', borderBottom:'1px solid #e2e6ea' };
  const td = { padding:'10px 14px', borderBottom:'1px solid #e2e6ea', color:'#1a1d23' };
  const highlight = { background:'#fff4ed', border:'1px solid #ffd8b8', borderRadius:12, padding:'16px 20px', marginBottom:16 };

  return (
    <div style={s}>
      <div style={wrap}>

        {/* Breadcrumb */}
        <div style={{ fontSize:13, color:'#9aa3af', marginBottom:20 }}>
          <a href="/" style={{ color:'#e8732a', textDecoration:'none' }}>LenkzeitRechner.de</a>
          {' → '}LKW Lenkzeiten
        </div>

        {/* Hero */}
        <div style={card}>
          <h1 style={h1s}>LKW Lenkzeiten 2026</h1>
          <p style={{ ...p, fontSize:17, color:'#1a1d23', marginBottom:20 }}>
            Alles was Fahrer und Disponenten zur <span style={accent}>EU Verordnung (EG) 561/2006</span> wissen müssen — kompakt, aktuell und mit praktischen Beispielen.
          </p>
          <a href="/" style={{ display:'inline-block', background:'#e8732a', color:'#fff', borderRadius:10, padding:'12px 24px', fontWeight:700, textDecoration:'none', fontSize:14 }}>
            → Zum kostenlosen Lenkzeitrechner
          </a>
        </div>

        {/* Tageslenkzeit */}
        <div style={card}>
          <h2 style={h2s}>⏱ Tageslenkzeit</h2>
          <div style={highlight}>
            <strong>Grundregel:</strong> Maximal <span style={accent}>9 Stunden</span> Lenkzeit pro Tag.<br/>
            <strong>Ausnahme:</strong> Bis zu <span style={accent}>10 Stunden</span> — aber maximal <span style={accent}>2-mal pro Woche</span>.
          </div>
          <p style={p}>Die Tageslenkzeit ist die Zeit zwischen zwei täglichen Ruhezeiten oder zwischen einer täglichen und einer wöchentlichen Ruhezeit. Sie umfasst ausschließlich die reine Fahrzeit — Ladezeiten, Pausen und Wartezeiten zählen nicht dazu.</p>
          <h3 style={h3s}>Praxisbeispiel Tageslenkzeit</h3>
          <table style={table}>
            <thead><tr><th style={th}>Tag</th><th style={th}>Lenkzeit</th><th style={th}>Zulässig?</th></tr></thead>
            <tbody>
              <tr><td style={td}>Montag</td><td style={td}>9 Stunden</td><td style={{ ...td, color:'#1a7f37', fontWeight:700 }}>✅ Ja</td></tr>
              <tr><td style={td}>Dienstag</td><td style={td}>10 Stunden (1. Verlängerung)</td><td style={{ ...td, color:'#1a7f37', fontWeight:700 }}>✅ Ja</td></tr>
              <tr><td style={td}>Mittwoch</td><td style={td}>10 Stunden (2. Verlängerung)</td><td style={{ ...td, color:'#1a7f37', fontWeight:700 }}>✅ Ja</td></tr>
              <tr><td style={td}>Donnerstag</td><td style={td}>10 Stunden (3. Verlängerung)</td><td style={{ ...td, color:'#c0392b', fontWeight:700 }}>❌ Nein — max. 2×/Woche</td></tr>
            </tbody>
          </table>
        </div>

        {/* Fahrtunterbrechung */}
        <div style={card}>
          <h2 style={h2s}>☕ Pflichtpause nach 4,5 Stunden</h2>
          <div style={highlight}>
            Nach spätestens <span style={accent}>4,5 Stunden</span> ununterbrochener Lenkzeit ist eine Pause von mindestens <span style={accent}>45 Minuten</span> Pflicht.
          </div>
          <p style={p}>Die Pause kann auch aufgeteilt werden: erst <strong>15 Minuten</strong>, dann <strong>30 Minuten</strong> — aber immer in dieser Reihenfolge. Die Pausenzeiten selbst zählen nicht zur Lenkzeit.</p>
          <h3 style={h3s}>Regelung im Detail (Art. 7 VO 561/2006)</h3>
          <table style={table}>
            <thead><tr><th style={th}>Variante</th><th style={th}>Pause</th><th style={th}>Hinweis</th></tr></thead>
            <tbody>
              <tr><td style={td}>Einfache Pause</td><td style={td}>45 min am Stück</td><td style={td}>Empfohlen, einfacher nachzuweisen</td></tr>
              <tr><td style={td}>Geteilte Pause (Teil 1)</td><td style={td}>15 min</td><td style={td}>Muss zuerst kommen</td></tr>
              <tr><td style={td}>Geteilte Pause (Teil 2)</td><td style={td}>30 min</td><td style={td}>Muss nach Teil 1 folgen</td></tr>
            </tbody>
          </table>
        </div>

        {/* Wochenlenkzeit */}
        <div style={card}>
          <h2 style={h2s}>📅 Wochen- und Doppelwochenlenkzeit</h2>
          <div style={highlight}>
            <strong>Wochenlenkzeit:</strong> Max. <span style={accent}>56 Stunden</span><br/>
            <strong>Doppelwoche (2 Wochen):</strong> Max. <span style={accent}>90 Stunden</span>
          </div>
          <p style={p}>Auch wenn in einer Woche 56 Stunden erlaubt sind — über zwei aufeinanderfolgende Wochen dürfen es insgesamt nicht mehr als 90 Stunden sein. Das bedeutet: nach einer "Maximalwoche" mit 56h sind in der Folgewoche maximal 34h erlaubt.</p>
          <h3 style={h3s}>Beispielrechnung Doppelwoche</h3>
          <table style={table}>
            <thead><tr><th style={th}>Woche</th><th style={th}>Lenkzeit</th><th style={th}>Doppelwoche gesamt</th><th style={th}>Status</th></tr></thead>
            <tbody>
              <tr><td style={td}>KW 13</td><td style={td}>56h (Maximum)</td><td style={td}>56h</td><td style={{ ...td, color:'#1a7f37', fontWeight:700 }}>✅ OK</td></tr>
              <tr><td style={td}>KW 14</td><td style={td}>34h (Rest)</td><td style={td}>90h</td><td style={{ ...td, color:'#1a7f37', fontWeight:700 }}>✅ Genau am Limit</td></tr>
              <tr><td style={td}>KW 14</td><td style={td}>35h</td><td style={td}>91h</td><td style={{ ...td, color:'#c0392b', fontWeight:700 }}>❌ Überschreitung!</td></tr>
            </tbody>
          </table>
        </div>

        {/* Ruhezeiten */}
        <div style={card}>
          <h2 style={h2s}>🛏 Ruhezeiten</h2>
          <h3 style={h3s}>Tägliche Ruhezeit</h3>
          <p style={p}>Mindestens <span style={accent}>11 Stunden</span> pro Tag. Diese kann auf <strong>9 Stunden</strong> verkürzt werden — jedoch maximal <strong>3-mal</strong> zwischen zwei wöchentlichen Ruhezeiten. Die verkürzte Ruhezeit muss nicht nachgeholt werden.</p>
          <p style={p}>Alternativ: Die Ruhezeit kann in zwei Teile aufgeteilt werden (3 Stunden + 9 Stunden = 12 Stunden gesamt). Der erste Teil muss mindestens 3 Stunden betragen.</p>
          <h3 style={h3s}>Wöchentliche Ruhezeit</h3>
          <p style={p}>Mindestens <span style={accent}>45 Stunden</span> pro Woche. Jede zweite Woche kann sie auf <strong>24 Stunden</strong> reduziert werden. Die Differenz muss dann innerhalb von 3 Wochen nachgeholt werden.</p>
          <div style={{ ...highlight, background:'#fdecea', borderColor:'#f5a9a9' }}>
            <strong style={{ color:'#c0392b' }}>Wichtig:</strong> Die reguläre wöchentliche Ruhezeit (45h) darf <strong>nicht im Fahrzeug</strong> verbracht werden! Bußgeld: bis zu 500 € für den Unternehmer.
          </div>
        </div>

        {/* Wer gilt */}
        <div style={card}>
          <h2 style={h2s}>🚛 Für wen gelten die Lenkzeiten?</h2>
          <p style={p}>Die EU VO 561/2006 gilt für:</p>
          <ul style={{ ...p, paddingLeft:20 }}>
            <li>Fahrzeuge zur <strong>Güterbeförderung</strong> mit einem zulässigen Gesamtgewicht über <strong>3,5 Tonnen</strong></li>
            <li>Fahrzeuge zur <strong>Personenbeförderung</strong> mit mehr als <strong>9 Sitzplätzen</strong> (einschließlich Fahrersitz)</li>
          </ul>
          <p style={p}>Ausgenommen sind u.a.: Fahrzeuge mit max. 40 km/h Höchstgeschwindigkeit, Fahrzeuge der Streitkräfte und bestimmte Spezialfahrzeuge.</p>
        </div>

        {/* CTA */}
        <div style={{ ...card, background:'linear-gradient(135deg,#fff4ed,#fff)', borderColor:'#ffd8b8', textAlign:'center' }}>
          <div style={{ fontSize:32, marginBottom:12 }}>🚛</div>
          <h2 style={{ ...h2s, textAlign:'center' }}>Lenkzeiten jetzt berechnen</h2>
          <p style={{ ...p, textAlign:'center' }}>Unser kostenloser Rechner berechnet Pausen, Ruhezeiten und den gesamten Tagesplan — kostenlos, ohne Anmeldung.</p>
          <a href="/" style={{ display:'inline-block', background:'#e8732a', color:'#fff', borderRadius:10, padding:'13px 28px', fontWeight:700, textDecoration:'none', fontSize:15, boxShadow:'0 4px 16px rgba(232,115,42,0.3)' }}>
            → Zum Lenkzeitrechner
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
