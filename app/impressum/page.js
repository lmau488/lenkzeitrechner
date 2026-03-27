export const metadata = {
  title: 'Impressum – LenkzeitRechner.de',
  robots: 'noindex',
};

export default function Impressum() {
  const s = { minHeight:'100vh', background:'#010409', color:'#e6edf3', fontFamily:"'Segoe UI',sans-serif", padding:'40px 16px' };
  const card = { maxWidth:640, margin:'0 auto', background:'#0d1117', border:'1px solid #1c2128', borderRadius:10, padding:'28px 32px', lineHeight:1.9 };
  return (
    <div style={s}>
      <div style={card}>
        <h1 style={{ fontSize:22, color:'#f0883e', marginTop:0 }}>Impressum</h1>
        <p style={{ color:'#8b949e', fontSize:13 }}>Angaben gemäß § 5 TMG / § 18 Abs. 2 MStV</p>
        
        <h2 style={{ fontSize:16, marginTop:24 }}>Verantwortlich</h2>
        <p>
          <strong>Luis Mauermaier</strong><br/>
          Wolnzacher Weg 9a<br/>
          85283 Wolnzach<br/>
          Deutschland
        </p>

        <h2 style={{ fontSize:16 }}>Kontakt</h2>
        <p>
          E-Mail: luis.mauermaier@proton.me
        </p>

        <h2 style={{ fontSize:16 }}>Umsatzsteuer</h2>
        <p>
          Kleinunternehmer gemäß § 19 UStG. Es wird keine Umsatzsteuer ausgewiesen.
        </p>

        <h2 style={{ fontSize:16 }}>Haftungsausschluss</h2>
        <p style={{ fontSize:14, color:'#8b949e' }}>
          Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. 
          Der Rechner basiert auf der EU-Verordnung (EG) Nr. 561/2006 in der aktuellen Fassung. 
          Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir keine Gewähr. 
          Die Berechnung ersetzt keine professionelle Beratung und keinen digitalen Fahrtenschreiber.
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
          nach den allgemeinen Gesetzen verantwortlich.
        </p>

        <p style={{ marginTop:24 }}>
          <a href="/" style={{ color:'#f0883e', textDecoration:'none' }}>← Zurück zum Rechner</a>
        </p>
      </div>
    </div>
  );
}
