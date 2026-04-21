export const metadata = {
  title: 'Digitaler Tachograph 2026 – Fahrerkarte, Smart Tachograph 2 | Anleitung',
  description: 'Alles zum digitalen Tachographen: Fahrerkarte, Smart Tachograph Version 2 (Gen V2), Aufzeichnungspflicht 28 Tage, Manipulation und Bußgelder.',
  keywords: 'digitaler Tachograph, Smart Tachograph 2, Fahrerkarte, Tachograph Version 2, Fahrtenschreiber LKW, Tachograph Manipulation Strafe',
  alternates: { canonical: 'https://lenkzeitrechner.de/digitaler-tachograph' },
  openGraph: {
    title: 'Digitaler Tachograph 2026 – Smart Tachograph 2',
    description: 'Fahrerkarte, Aufzeichnungspflicht, Smart Tachograph V2 — alles kompakt erklärt.',
    url: 'https://lenkzeitrechner.de/digitaler-tachograph',
    images: [{ url: 'https://lenkzeitrechner.de/og-image.svg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Digitaler Tachograph 2026', description: 'Fahrerkarte, Smart Tachograph V2 und Aufzeichnungspflicht.' },
};

const C = {
  bg:'#13151f',surface:'#1c1f2e',surface2:'#242738',border:'rgba(255,255,255,0.07)',
  acc:'#f0883e',txt:'#ffffff',muted:'#94a3b8',dim:'#64748b',
  navBg:'rgba(19,21,31,0.85)',dotGrid:'rgba(255,255,255,0.06)',
  success:'#22c55e',error:'#ef4444',
};

export default function DigitalerTachograph() {
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
            <a href="/" style={{color:C.acc,textDecoration:'none'}}>LenkzeitRechner.de</a>{' → '}Digitaler Tachograph
          </div>

          <div style={card}>
            <h1 style={{fontSize:32,fontWeight:800,color:C.txt,marginBottom:8,lineHeight:1.2}}>Digitaler Tachograph 2026</h1>
            <p style={{...p,fontSize:17,color:C.txt,marginBottom:20}}>
              Fahrerkarte, <span style={accent}>Smart Tachograph Version 2</span>, Aufzeichnungspflicht und Bußgelder — der vollständige Leitfaden nach <span style={accent}>VO (EU) 165/2014</span> für Berufskraftfahrer, Disponenten und Fuhrparkleiter.
            </p>
            <a href="/" style={{display:'inline-block',background:C.acc,color:'#fff',borderRadius:10,padding:'12px 24px',fontWeight:700,textDecoration:'none',fontSize:14}}>
              → Zum kostenlosen Lenkzeitrechner
            </a>
          </div>

          <section style={card}>
            <h2 style={h2s}>📜 Was ist ein digitaler Tachograph?</h2>
            <p style={p}>Der digitale Tachograph — amtlich <strong style={{color:C.txt}}>Fahrtenschreiber</strong> oder <strong style={{color:C.txt}}>EG-Kontrollgerät</strong> — ist ein Bordgerät, das alle relevanten Aktivitäten eines Fahrers und seines Fahrzeugs aufzeichnet: Lenkzeit, Bereitschaft, Pausen, gefahrene Kilometer, Geschwindigkeit und seit der neuesten Generation auch Positionsdaten. Rechtliche Grundlage ist die <span style={accent}>Verordnung (EU) Nr. 165/2014</span>, die die ältere VO 3821/85 abgelöst hat, sowie national das <strong style={{color:C.txt}}>Fahrpersonalgesetz (FPersG)</strong> und die <strong style={{color:C.txt}}>Fahrpersonalverordnung (FPersV)</strong>.</p>
            <p style={p}>Der Tachograph dient der Kontrolle der Sozialvorschriften im Straßenverkehr. Er stellt sicher, dass die Vorgaben der <span style={accent}>VO (EG) 561/2006</span> zu Lenk-, Pausen- und Ruhezeiten eingehalten werden. Polizei, Zoll und das Bundesamt für Logistik und Mobilität (BALM, vormals BAG) können die Daten direkt aus dem Gerät oder den Fahrerkarten auslesen.</p>
            <div style={highlight}>
              <strong>Pflichtig:</strong> Alle Kraftfahrzeuge zur <span style={accent}>Güterbeförderung über 3,5 t zGG</span> sowie Personenbeförderung mit mehr als <span style={accent}>9 Sitzplätzen</span> (inkl. Fahrer) — sofern keine Ausnahme nach Art. 3 VO (EG) 561/2006 greift.
            </div>
          </section>

          <section style={card}>
            <h2 style={h2s}>🕰 Von analog zu Smart Tachograph 2 — die Geschichte</h2>
            <p style={p}>Die Entwicklung des Fahrtenschreibers ist eine Geschichte zunehmender Digitalisierung und Manipulationssicherheit. Was einst als mechanischer Diagramm­scheiben­schreiber begann, ist heute ein hochvernetztes, satellitengestütztes Kontrollgerät mit Nahbereichsfunk für Ferninspektionen.</p>
            <h3 style={h3s}>Überblick der Gerätegenerationen</h3>
            <table className="sub-tbl">
              <thead><tr><th>Generation</th><th>Einführung</th><th>Besonderheit</th></tr></thead>
              <tbody>
                <tr><td>Analoger Tachograph</td><td>bis 2006</td><td>Papier-Diagrammscheiben, leicht manipulierbar</td></tr>
                <tr><td>Digitaler Tachograph (Gen 1)</td><td>ab 01.05.2006</td><td>Fahrerkarte, interner Massenspeicher</td></tr>
                <tr><td>Digitaler Tachograph (Gen 1b)</td><td>ab 2012</td><td>Verbesserte Krypto, ADR-Varianten</td></tr>
                <tr><td>Smart Tachograph 1 (V1)</td><td>ab 15.06.2019</td><td>GNSS, DSRC-Funk, ITS-Schnittstelle</td></tr>
                <tr><td>Smart Tachograph 2 (V2 / Gen V2)</td><td>ab 21.08.2023</td><td>Grenzübertritt-Erkennung, Ladung/Entladung, OSNMA</td></tr>
              </tbody>
            </table>
            <h3 style={h3s}>Nachrüstpflichten nach dem EU-Mobilitätspaket</h3>
            <p style={p}>Das <span style={accent}>EU-Mobilitätspaket I</span> schreibt den schrittweisen Austausch älterer Geräte vor — insbesondere für Fahrzeuge im grenzüberschreitenden Güter- und Personenverkehr:</p>
            <table className="sub-tbl">
              <thead><tr><th>Stichtag</th><th>Pflicht</th><th>Betroffene Geräte</th></tr></thead>
              <tbody>
                <tr><td>21.08.2023</td><td>Einbau V2 in Neufahrzeuge</td><td>Alle Erstzulassungen</td></tr>
                <tr><td>31.12.2024</td><td>Nachrüstung V2</td><td>Analoge + digitale Gen 1/1b im internationalen Verkehr</td></tr>
                <tr><td>18.08.2025</td><td>Nachrüstung V2</td><td>Smart Tachograph V1 im internationalen Verkehr</td></tr>
                <tr><td>01.07.2026</td><td>Aufzeichnungspflicht</td><td>Ausweitung auf leichte Nutzfahrzeuge &gt; 2,5 t zGG im grenzüberschreitenden Verkehr</td></tr>
              </tbody>
            </table>
            <p style={p}>Für rein nationale Fahrten in Deutschland gelten die alten Geräte grundsätzlich weiter — die EU-Pflicht zum Austausch greift nur im internationalen Güterverkehr. Wer dennoch grenzüberschreitend unterwegs ist, riskiert ohne V2-Gerät empfindliche Bußgelder.</p>
          </section>

          <section style={card}>
            <h2 style={h2s}>💳 Die Fahrerkarte — Ihr persönlicher Schlüssel</h2>
            <p style={p}>Die Fahrerkarte ist eine personengebundene Chipkarte im Scheckkartenformat und das zentrale Identifikationsmittel am digitalen Tachographen. Ohne eingesteckte Fahrerkarte darf kein kontrollpflichtiges Fahrzeug bewegt werden — Ausnahmen sind nur bei Defekt oder Verlust mit entsprechender Nachweiskette zulässig.</p>
            <h3 style={h3s}>Beantragung in Deutschland</h3>
            <p style={p}>Zuständig sind in Deutschland die Fahrerlaubnisbehörden der Länder, in einigen Bundesländern auch der <strong style={{color:C.txt}}>TÜV</strong> oder die <strong style={{color:C.txt}}>DEKRA</strong>. Für den Antrag benötigen Sie:</p>
            <ul style={{...p,paddingLeft:20}}>
              <li>Gültigen Personalausweis oder Reisepass</li>
              <li>Führerschein (mindestens Klasse C1, C1E, C, CE oder D)</li>
              <li>Biometrisches Passfoto</li>
              <li>Unterschriftprobe</li>
              <li>Gebühr: rund <span style={accent}>38 bis 45 Euro</span> je nach Bundesland</li>
            </ul>
            <p style={p}>Die Bearbeitungszeit liegt meist zwischen zwei und vier Wochen. Bei dringendem Bedarf bietet das Kraftfahrt-Bundesamt (KBA) gegen Aufschlag eine beschleunigte Ausstellung an.</p>
            <h3 style={h3s}>Gültigkeit und Erneuerung</h3>
            <p style={p}>Die Fahrerkarte ist <span style={accent}>5 Jahre gültig</span>. Die Verlängerung muss spätestens <strong style={{color:C.txt}}>15 Arbeitstage vor Ablauf</strong> beantragt werden, damit zwischen alter und neuer Karte keine Lücke entsteht. Die bisherige Karte bleibt bis zur Ausstellung der neuen weiter gültig — ein Datenverlust tritt nicht ein, da alle historischen Aufzeichnungen auf dem Massenspeicher des Fahrzeugs und beim Arbeitgeber archiviert bleiben.</p>
            <h3 style={h3s}>Verlust, Diebstahl oder Defekt</h3>
            <p style={p}>Wird die Fahrerkarte gestohlen oder geht verloren, ist dies <strong style={{color:C.txt}}>unverzüglich</strong> der ausstellenden Behörde zu melden (Art. 29 VO (EU) 165/2014). Eine Ersatzkarte muss innerhalb von <span style={accent}>7 Kalendertagen</span> beantragt werden. Bis zum Erhalt der Ersatzkarte darf der Fahrer maximal <span style={accent}>15 Kalendertage</span> ohne Fahrerkarte weiterfahren — vorausgesetzt, er druckt zu Fahrtbeginn und Fahrtende je einen Tagesausdruck, beschriftet diesen mit Namen, Führerscheinnummer und Unterschrift und führt ihn mit sich.</p>
          </section>

          <section style={card}>
            <h2 style={h2s}>📅 Aufzeichnungs- und Mitführpflicht</h2>
            <div style={highlight}>
              <strong>Kernregel:</strong> Fahrer müssen die Aufzeichnungen des <span style={accent}>laufenden Tages</span> sowie der <span style={accent}>vorausgegangenen 28 Kalendertage</span> bei sich führen (§ 2 FPersV i. V. m. Art. 36 VO (EU) 165/2014).
            </div>
            <p style={p}>Bis zum 31. Dezember 2024 galt noch die kürzere Frist von 28 Tagen, die Mitführpflicht wurde durch das Mobilitätspaket allerdings bereits faktisch auf die Fahrerkarte plus Ausdrucke der letzten 28 Tage angehoben. Seit 2026 gilt einheitlich die 28-Tage-Mitführpflicht für alle Fahrzeuge, unabhängig von der Gerätegeneration.</p>
            <h3 style={h3s}>Pflichten des Unternehmers</h3>
            <p style={p}>Der Fuhrparkunternehmer muss nach § 2 Abs. 5 FPersV alle Daten <strong style={{color:C.txt}}>mindestens ein Jahr</strong> nach Aufzeichnung archivieren — in der Praxis empfiehlt sich eine Aufbewahrung von zwei Jahren, da die Verjährung bei Ordnungswidrigkeiten bis zu zwei Jahre betragen kann. Die Aufbewahrung erfolgt in digitaler Form auf einem zugriffsgeschützten Archivsystem mit den originalen Signaturen.</p>
            <h3 style={h3s}>Download-Intervalle</h3>
            <table className="sub-tbl">
              <thead><tr><th>Quelle</th><th>Intervall</th><th>Rechtsgrundlage</th></tr></thead>
              <tbody>
                <tr><td>Fahrerkarte</td><td>spätestens alle <span style={{color:C.acc,fontWeight:700}}>28 Tage</span></td><td>§ 2 Abs. 5 Nr. 2 FPersV</td></tr>
                <tr><td>Massenspeicher (Fahrzeug)</td><td>spätestens alle <span style={{color:C.acc,fontWeight:700}}>90 Tage</span></td><td>§ 2 Abs. 5 Nr. 1 FPersV</td></tr>
                <tr><td>Archivierung beim Unternehmer</td><td>mindestens <span style={{color:C.acc,fontWeight:700}}>1 Jahr</span></td><td>§ 2 Abs. 5 FPersV</td></tr>
                <tr><td>Kontrolle bei Bundesverkehrskontrolle</td><td>Laufender Tag + 28 Tage</td><td>Art. 36 VO (EU) 165/2014</td></tr>
              </tbody>
            </table>
          </section>

          <section style={card}>
            <h2 style={h2s}>✍ Manuelle Nachträge</h2>
            <p style={p}>Nicht jede Tätigkeit wird automatisch erfasst. Wenn Sie etwa die Fahrt mit dem Dienstwagen ins Depot, eine Fähr- oder Zugfahrt oder eine Zeit außerhalb des Fahrzeugs belegen müssen, sind manuelle Nachträge zwingend erforderlich. Diese werden über das Menü des Tachographen direkt nach dem Stecken der Fahrerkarte oder am Ende einer Schicht eingetragen.</p>
            <h3 style={h3s}>Typische Nachtragssituationen</h3>
            <ul style={{...p,paddingLeft:20}}>
              <li><strong style={{color:C.txt}}>Beginn einer Schicht vor Fahrzeugübernahme</strong> (z. B. Lagerarbeiten): als "andere Arbeit"</li>
              <li><strong style={{color:C.txt}}>Fähr- oder Bahnfahrt</strong>: als "Bereitschaft" oder "Ruhe", jeweils mit Symbol ⛴</li>
              <li><strong style={{color:C.txt}}>Urlaub oder Krankheit</strong>: Arbeitgeberbescheinigung (Formular EU 561/2006) erforderlich</li>
              <li><strong style={{color:C.txt}}>Arbeiten ohne Lenkzeit</strong> (Reparatur, Beladung ohne Fahrt): als "andere Arbeit"</li>
            </ul>
            <p style={p}>Falsche oder unterlassene Nachträge gelten als Verstoß gegen die Aufzeichnungspflicht und können mit Verwarngeld oder Bußgeld belegt werden. Die Eintragung erfolgt immer aus Sicht des Fahrers und muss zum Zeitpunkt des Ereignisses passen.</p>
          </section>

          <section style={card}>
            <h2 style={h2s}>🕐 Die vier Arbeitszeitgruppen</h2>
            <p style={p}>Der Tachograph kennt vier grundlegende Zeitkategorien, die entweder automatisch (über den Fahrtsensor) oder manuell über den Modus-Schalter gewählt werden. Die korrekte Zuordnung ist für die Einhaltung der Lenk- und Pausenzeiten essenziell.</p>
            <table className="sub-tbl">
              <thead><tr><th>Symbol</th><th>Gruppe</th><th>Bedeutung</th></tr></thead>
              <tbody>
                <tr><td style={{fontSize:18}}>🚚</td><td><strong style={{color:C.txt}}>Lenkzeit</strong></td><td>Automatisch aktiv, sobald das Fahrzeug fährt</td></tr>
                <tr><td style={{fontSize:18}}>⚒</td><td><strong style={{color:C.txt}}>Andere Arbeit</strong></td><td>Be- und Entladung, Reinigung, Wartung, Kundengespräche</td></tr>
                <tr><td style={{fontSize:18}}>🪑</td><td><strong style={{color:C.txt}}>Bereitschaft</strong></td><td>Wartezeiten, Beifahrertätigkeit, Fährfahrt — Dauer bekannt</td></tr>
                <tr><td style={{fontSize:18}}>🛏</td><td><strong style={{color:C.txt}}>Ruhe/Pause</strong></td><td>Tägliche Ruhezeit, wöchentliche Ruhezeit, 45-min-Pause</td></tr>
              </tbody>
            </table>
            <p style={p}>Besonders die Unterscheidung zwischen "andere Arbeit" und "Bereitschaft" ist in der Praxis wichtig: Nur Bereitschaftszeiten zählen nicht als Arbeitszeit im Sinne des ArbZG, während sie bei der Einhaltung der Pausenregeln als Unterbrechung der Lenkzeit dienen können.</p>
          </section>

          <section style={card}>
            <h2 style={h2s}>🔔 Piktogramme und Warnsymbole</h2>
            <p style={p}>Der digitale Tachograph kommuniziert über ein international standardisiertes Symbolsystem, das in allen EU-Staaten identisch ist. Die Piktogramme erscheinen im Display, in Ausdrucken und in den ausgelesenen Datensätzen.</p>
            <table className="sub-tbl">
              <thead><tr><th>Symbol</th><th>Bedeutung</th><th>Typischer Kontext</th></tr></thead>
              <tbody>
                <tr><td>🚛</td><td>Fahrzeug</td><td>Fahrzeugidentifikation, Massenspeicher</td></tr>
                <tr><td>💳</td><td>Karte</td><td>Fahrer-, Werkstatt-, Kontroll- oder Unternehmenskarte</td></tr>
                <tr><td>⚠</td><td>Ereignis / Warnung</td><td>Stromausfall, Kartenfehler, Geschwindigkeitsüberschreitung</td></tr>
                <tr><td>🛠</td><td>Störung</td><td>Sensorfehler, Kommunikationsproblem, Kalibrierungsfehler</td></tr>
                <tr><td>🧭</td><td>Ortsbestimmung (GNSS)</td><td>Positionserfassung am Schichtbeginn/-ende</td></tr>
                <tr><td>🌍</td><td>Ländercode / Grenzübertritt</td><td>Automatische Erfassung seit V2</td></tr>
                <tr><td>📡</td><td>DSRC-Ferninspektion</td><td>Funkauslesung durch Kontrollbehörde</td></tr>
                <tr><td>OUT</td><td>Fahrt außerhalb des Anwendungsbereichs</td><td>z. B. Handwerkerregelung, militärische Nutzung</td></tr>
                <tr><td>FERRY</td><td>Fährüberfahrt / Zug</td><td>Unterbrechung der täglichen Ruhezeit zulässig</td></tr>
              </tbody>
            </table>
          </section>

          <section style={card}>
            <h2 style={h2s}>🛰 Smart Tachograph 2 — was ist neu?</h2>
            <p style={p}>Mit der Durchführungsverordnung (EU) 2021/1228 wurde die zweite Generation des Smart Tachographen (V2) spezifiziert. Seit dem 21. August 2023 muss jedes neu zugelassene kontrollpflichtige Fahrzeug mit einem V2-Gerät ausgerüstet sein. Die Neuerungen zielen auf bessere Durchsetzung der Kabotage-Regeln, der Entsenderichtlinie und der Rückkehrpflicht aus dem EU-Mobilitätspaket.</p>
            <h3 style={h3s}>Funktionserweiterungen im Überblick</h3>
            <ul style={{...p,paddingLeft:20}}>
              <li><strong style={{color:C.txt}}>Grenzübertritt-Automatik:</strong> Der Tachograph erfasst automatisch jeden Grenzübertritt zwischen EU-Staaten und speichert das Land. Manuelle Eintragungen zum Ländercode entfallen dadurch weitgehend.</li>
              <li><strong style={{color:C.txt}}>GNSS-Position bei Be- und Entladung:</strong> Beim Start, Ende und alle drei Stunden kumulierter Lenkzeit wird die Position aufgezeichnet. Zusätzlich werden Ladung und Entladung manuell quittiert und mit Koordinaten verknüpft.</li>
              <li><strong style={{color:C.txt}}>OSNMA-Authentifizierung:</strong> Galileo-Signal-Authentifizierung schützt gegen GPS-Spoofing.</li>
              <li><strong style={{color:C.txt}}>DSRC-Ferninspektion:</strong> Kontrollbeamte können per Nahbereichsfunk (5,8 GHz) während der Fahrt eine Vorab-Abfrage der wichtigsten Daten ausführen — ohne das Fahrzeug anhalten zu müssen.</li>
              <li><strong style={{color:C.txt}}>ITS-Schnittstelle:</strong> Fahrer und Flottenmanager können ausgewählte Live-Daten über eine offene Bluetooth- oder USB-Schnittstelle abrufen.</li>
              <li><strong style={{color:C.txt}}>Verlängerter Massenspeicher:</strong> 56 Tage Aufzeichnung (statt bisher 365 Tage umfassend, jedoch mit feinerer Ortsauflösung).</li>
            </ul>
            <h3 style={h3s}>Erweiterte Tätigkeitsarten</h3>
            <p style={p}>Im V2-Gerät gibt es zusätzliche Eingabemasken für "Laden", "Entladen" und "Laden/Entladen gleichzeitig" (z. B. bei Kühltransporten). Diese Eintragungen werden gemeinsam mit der GNSS-Position auf Fahrerkarte und Massenspeicher abgelegt und dienen als Nachweis für die Einhaltung der Kabotage-Regeln.</p>
          </section>

          <section style={card}>
            <h2 style={h2s}>⚖ Manipulation und Bußgelder</h2>
            <p style={p}>Manipulationen am Tachographen sind kein Kavaliersdelikt, sondern werden als Ordnungswidrigkeit und in schweren Fällen als Straftat (§ 268 StGB — Fälschung technischer Aufzeichnungen) verfolgt. Die Bandbreite reicht vom fehlenden Tagesausdruck bis zum bewusst eingesetzten "Magnet" oder Manipulationsgerät am Fahrtsensor.</p>
            <table className="sub-tbl">
              <thead><tr><th>Verstoß</th><th>Bußgeld Fahrer</th><th>Bußgeld Unternehmen</th></tr></thead>
              <tbody>
                <tr><td>Fahren ohne Fahrerkarte</td><td>75 €</td><td>375 €</td></tr>
                <tr><td>Fehlender Nachtrag / Tagesausdruck</td><td>30 €</td><td>90 €</td></tr>
                <tr><td>Unvollständige Mitführung (28 Tage)</td><td>bis 250 €</td><td>bis 750 €</td></tr>
                <tr><td>Nicht-Download Fahrerkarte</td><td>—</td><td>bis 1.500 €</td></tr>
                <tr><td>Nicht-Download Massenspeicher</td><td>—</td><td>bis 1.500 €</td></tr>
                <tr><td>Manipulation (einfach)</td><td>ab 500 €</td><td>ab 5.000 €</td></tr>
                <tr><td>Vorsätzliche Manipulation / Magnet</td><td>bis 5.000 € + StA</td><td style={{color:C.error,fontWeight:700}}>bis 30.000 €</td></tr>
                <tr><td>Fremde Fahrerkarte genutzt</td><td>bis 5.000 € + StA</td><td>bis 30.000 €</td></tr>
              </tbody>
            </table>
            <div style={{background:'rgba(239,68,68,0.1)',border:'1px solid rgba(239,68,68,0.25)',borderRadius:12,padding:'16px 20px',marginTop:8}}>
              <strong style={{color:C.error}}>Zusätzliche Folgen:</strong> <span style={{color:C.muted}}>Punkte in Flensburg, Entzug der Fahrerlaubnis, Verlust der EU-Lizenz des Unternehmers und im Strafverfahren Freiheitsstrafe bis zu <strong style={{color:C.txt}}>5 Jahre</strong> nach § 268 StGB.</span>
            </div>
            <p style={p}>Seit Einführung des Smart Tachographen werden Manipulationsversuche immer seltener erfolgreich: Die GNSS-Authentifizierung (OSNMA) erkennt GPS-Spoofing, und Plausibilitätsprüfungen zwischen Motor-Daten (CAN-Bus), Sensor und Positionsdaten machen fast jede klassische Manipulation auffällig.</p>
          </section>

          <section style={card}>
            <h2 style={h2s}>🛠 Ausnahmen von der Aufzeichnungspflicht</h2>
            <p style={p}>Nicht jede Fahrt eines Fahrzeugs über 3,5 t unterliegt der Tachographenpflicht. Artikel 3 und 13 der VO (EG) 561/2006 sowie § 18 FPersV listen zahlreiche Ausnahmen auf. Die wichtigsten in der Praxis:</p>
            <ul style={{...p,paddingLeft:20}}>
              <li><strong style={{color:C.txt}}>Handwerkerregelung (100-km-Radius):</strong> Fahrzeuge bis 7,5 t zGG, die Material, Ausrüstung oder Maschinen transportieren, die der Fahrer für seine Arbeit benötigt — sofern das Fahren nicht die Haupttätigkeit ist und der Einsatz im Umkreis von 100 km um den Standort bleibt.</li>
              <li><strong style={{color:C.txt}}>Oldtimer:</strong> Fahrzeuge, die für nichtgewerbliche Zwecke verwendet werden und von historischem Interesse sind (Erstzulassung vor mehr als 25 Jahren, keine Veränderungen an technischen Hauptmerkmalen).</li>
              <li><strong style={{color:C.txt}}>Land- und forstwirtschaftliche Fahrzeuge</strong> mit Höchstgeschwindigkeit bis 40 km/h im Umkreis von 100 km um den Betriebssitz.</li>
              <li><strong style={{color:C.txt}}>Fahrschulfahrzeuge</strong> für Ausbildungs- und Prüfungsfahrten.</li>
              <li><strong style={{color:C.txt}}>Pannenhilfefahrzeuge</strong> im Umkreis von 100 km um ihren Standort.</li>
              <li><strong style={{color:C.txt}}>Militär-, Polizei-, Feuerwehr- und Katastrophenschutzfahrzeuge.</strong></li>
              <li><strong style={{color:C.txt}}>Fahrzeuge zur Beförderung humanitärer Hilfsgüter</strong> in Notstandsgebieten.</li>
              <li><strong style={{color:C.txt}}>Linienverkehr unter 50 km</strong> im ÖPNV.</li>
            </ul>
            <p style={p}>In allen Ausnahmefällen muss der Fahrer dennoch die Einhaltung der allgemeinen Arbeitszeitvorschriften (ArbZG) dokumentieren. Nur die Tachographen­pflicht entfällt — nicht die Pflicht zur Einhaltung der Lenk- und Ruhezeiten im weiteren Sinne.</p>
          </section>

          <section style={card}>
            <h2 style={h2s}>🧭 Praxistipps zur Tachograph-Bedienung</h2>
            <h3 style={h3s}>Tägliche Routine des Berufskraftfahrers</h3>
            <ol style={{...p,paddingLeft:20}}>
              <li><strong style={{color:C.txt}}>Fahrerkarte vor Fahrtantritt stecken</strong> — innerhalb einer Minute nach Einschalten der Zündung.</li>
              <li><strong style={{color:C.txt}}>Manuellen Nachtrag prüfen:</strong> Seit letztem Ziehen der Karte vergangene Zeit als Ruhe, Bereitschaft oder Arbeit eintragen.</li>
              <li><strong style={{color:C.txt}}>Ländercode bestätigen</strong> (bei V2 meist automatisch).</li>
              <li><strong style={{color:C.txt}}>Modus-Taste bewusst nutzen</strong> — nach jedem Halt prüfen, ob "andere Arbeit" oder "Pause" korrekt gewählt ist.</li>
              <li><strong style={{color:C.txt}}>Am Schichtende</strong> Fahrerkarte ziehen, Tagesausdruck optional ablegen.</li>
            </ol>
            <h3 style={h3s}>Umgang mit Fehlern und Ausdrucken</h3>
            <p style={p}>Zeigt der Tachograph ein Fehler- oder Warnsymbol, sollten Sie unverzüglich einen Ausdruck des Ereignisses erstellen, diesen beschriften (Name, Führerscheinnummer, Unterschrift, Grund) und den Vorgesetzten informieren. Bei einem Gerätedefekt darf das Fahrzeug maximal bis zur nächsten Werkstatt weiterbewegt werden — längstens jedoch <span style={accent}>eine Woche</span> (Art. 37 VO (EU) 165/2014).</p>
            <h3 style={h3s}>Häufige Fehler vermeiden</h3>
            <ul style={{...p,paddingLeft:20}}>
              <li>Fahrerkarte niemals in einem anderen Fahrzeug vergessen — Datensprünge sind ein typischer Prüfungsauslöser.</li>
              <li>Zwei-Fahrer-Betrieb: Beifahrerkarte muss im Schacht 2 stecken, sonst werden Fahrtzeiten falsch zugeordnet.</li>
              <li>Pause nie als "andere Arbeit" buchen — ein häufiger Reflex, der später Pausenverstöße produziert.</li>
              <li>Beim Fährensymbol ⛴ immer die gesamte Fahrtunterbrechung erfassen, nicht nur das Einschiffen.</li>
              <li>Bei Werkstattaufenthalten sorgt die Werkstattkarte für die korrekte Protokollierung — die Fahrerkarte darf während dieser Zeit nicht gesteckt sein.</li>
            </ul>
            <h3 style={h3s}>Datenkontrolle und Auswertung im Betrieb</h3>
            <p style={p}>Professionelle Fuhrparkmanagement-Systeme (z. B. TISAX-zertifizierte Auswerteprogramme) prüfen die heruntergeladenen Daten automatisch auf Verstöße und signieren sie digital. Für kleine Betriebe genügen kostenlose Tools wie <strong style={{color:C.txt}}>TachoScan Control</strong>, <strong style={{color:C.txt}}>VDO Download Key</strong> oder die <strong style={{color:C.txt}}>Stoneridge Download-Key-Software</strong>. Wichtig: Die Datei­signatur darf beim Import nie entfernt werden, sonst verliert der Datensatz seine rechtliche Beweiskraft.</p>
          </section>

          <section style={card}>
            <h2 style={h2s}>❓ Häufig gestellte Fragen</h2>
            <h3 style={h3s}>Darf ich mit abgelaufener Fahrerkarte weiterfahren?</h3>
            <p style={p}>Nein. Nach Ablauf ist die Karte ungültig. Der Fahrer darf nur dann weiterfahren, wenn er rechtzeitig eine neue beantragt hat und bis zu deren Eintreffen — analog zum Verlustfall — mit Tagesausdrucken arbeitet. Die Fahrtberechtigung gilt jedoch nicht unbegrenzt, sondern für maximal 15 Kalendertage.</p>
            <h3 style={h3s}>Was passiert, wenn der Tachograph plötzlich ausfällt?</h3>
            <p style={p}>Bei einem Defekt notieren Sie Fahrzeit, Pausen und Ruhezeiten handschriftlich auf einem Beleg (idealerweise auf dem Rückseitenausdruck). Das Fahrzeug ist innerhalb einer Woche in eine zugelassene Tachographenwerkstatt zu bringen. Die Werkstatt dokumentiert die Reparatur mit ihrer Werkstattkarte.</p>
            <h3 style={h3s}>Wer darf meine Tachodaten einsehen?</h3>
            <p style={p}>Neben Polizei, Zoll und BALM hat der Arbeitgeber Anspruch auf die Daten. Privatfahrten, die unter "OUT" eingetragen wurden, sind für den Arbeitgeber nicht im Detail auswertbar — Beginn und Ende werden jedoch protokolliert. Datenschutzrechtlich gilt die DSGVO: Zweckbindung, Löschung nach Ablauf der Aufbewahrungsfrist, Auskunftsrecht des Fahrers.</p>
            <h3 style={h3s}>Gilt die Tachographenpflicht auch für Transporter mit 3,5 t zGG?</h3>
            <p style={p}>Bisher nicht — die Pflicht begann bei über 3,5 t. Mit dem EU-Mobilitätspaket wurde der Anwendungsbereich ab 1. Juli 2026 auf leichte Nutzfahrzeuge über <span style={accent}>2,5 Tonnen zGG</span> im grenzüberschreitenden Güterverkehr erweitert. Für rein nationale Fahrten in Deutschland bleibt die 3,5-t-Grenze vorerst bestehen.</p>
          </section>

          <div style={{...card,background:`linear-gradient(135deg,rgba(240,136,62,0.08),${C.surface})`,borderColor:'rgba(240,136,62,0.2)',textAlign:'center'}}>
            <div style={{fontSize:32,marginBottom:12}}>🚛</div>
            <h2 style={{...h2s,textAlign:'center'}}>Lenkzeiten passend zum Tachographen berechnen</h2>
            <p style={{...p,textAlign:'center'}}>Unser kostenloser Rechner ermittelt Pausen, Ruhezeiten und den gesamten Tagesplan nach VO (EG) 561/2006 — ohne Anmeldung, ohne Tracking.</p>
            <a href="/" style={{display:'inline-block',background:C.acc,color:'#fff',borderRadius:10,padding:'13px 28px',fontWeight:700,textDecoration:'none',fontSize:15,boxShadow:'0 4px 16px rgba(240,136,62,0.3)'}}>
              → Zum Lenkzeitrechner
            </a>
          </div>

          <footer style={{display:'flex',justifyContent:'center',gap:16,padding:'16px 0',fontSize:12,color:C.dim,borderTop:`1px solid ${C.border}`,flexWrap:'wrap'}}>
            <a href="/lkw-lenkzeiten" style={{color:C.dim,textDecoration:'none'}}>Lenkzeiten</a>
            <a href="/pausenrechner" style={{color:C.dim,textDecoration:'none'}}>Pausenrechner</a>
            <a href="/ruhezeiten" style={{color:C.dim,textDecoration:'none'}}>Ruhezeiten</a>
            <a href="/bussgeldkatalog" style={{color:C.dim,textDecoration:'none'}}>Bußgelder</a>
            <a href="/digitaler-tachograph" style={{color:C.acc,textDecoration:'none'}}>Tachograph</a>
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
