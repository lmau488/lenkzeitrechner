export const metadata = {
  title: 'Bußgeldkatalog LKW 2026 – Lenkzeiten & Ruhezeiten | Strafen im Überblick',
  description: 'Bußgeldkatalog für LKW-Fahrer 2026: Strafen bei Lenkzeit-, Pausen- und Ruhezeitverstößen nach BKatV und FPersG. Was zahlen Fahrer, was Unternehmer?',
  keywords: 'Bußgeldkatalog LKW, Lenkzeit Bußgeld, Ruhezeit Strafe, Wochenruhe im LKW Strafe, BKatV LKW, FPersG Bußgeld',
  alternates: { canonical: 'https://lenkzeitrechner.de/bussgeldkatalog' },
  openGraph: {
    title: 'Bußgeldkatalog LKW 2026 – Lenk- und Ruhezeiten',
    description: 'Strafen für LKW-Fahrer und Unternehmer bei Verstößen gegen EU VO 561/2006 kompakt erklärt.',
    url: 'https://lenkzeitrechner.de/bussgeldkatalog',
    images: [{ url: 'https://lenkzeitrechner.de/og-image.svg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Bußgeldkatalog LKW 2026', description: 'Strafen für LKW-Fahrer und Unternehmer kompakt erklärt.' },
};

const C = {
  bg:'#13151f',surface:'#1c1f2e',surface2:'#242738',border:'rgba(255,255,255,0.07)',
  acc:'#f0883e',txt:'#ffffff',muted:'#94a3b8',dim:'#64748b',
  navBg:'rgba(19,21,31,0.85)',dotGrid:'rgba(255,255,255,0.06)',
  success:'#22c55e',error:'#ef4444',
};

export default function Bussgeldkatalog() {
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
            <a href="/" style={{color:C.acc,textDecoration:'none'}}>LenkzeitRechner.de</a>{' → '}Bußgeldkatalog
          </div>

          <div style={card}>
            <h1 style={{fontSize:32,fontWeight:800,color:C.txt,marginBottom:8,lineHeight:1.2}}>Bußgeldkatalog LKW 2026</h1>
            <p style={{...p,fontSize:17,color:C.txt,marginBottom:20}}>
              Strafen bei Verstößen gegen <span style={accent}>Lenkzeiten, Pausen und Ruhezeiten</span> nach BKatV und Fahrpersonalgesetz — was Fahrer zahlen und was Unternehmer auf die Rechnung bekommen.
            </p>
            <a href="/" style={{display:'inline-block',background:C.acc,color:'#fff',borderRadius:10,padding:'12px 24px',fontWeight:700,textDecoration:'none',fontSize:14}}>
              → Verstöße mit dem Lenkzeitrechner vermeiden
            </a>
          </div>

          <section style={card}>
            <h2 style={h2s}>📖 Rechtsgrundlagen des Bußgeldkatalogs</h2>
            <p style={p}>
              Wer als Berufskraftfahrer gegen Lenk- und Ruhezeiten verstößt, zahlt in Deutschland nach einem klar definierten Bußgeldkatalog. Grundlage sind drei Regelwerke: die <span style={accent}>EU-Verordnung (EG) 561/2006</span> legt die materiellen Regeln fest, das <span style={accent}>Fahrpersonalgesetz (FPersG)</span> mit der zugehörigen Fahrpersonalverordnung (FPersV) setzt sie in deutsches Recht um, und die <span style={accent}>Bußgeldkatalog-Verordnung (BKatV)</span> nennt die konkreten Regelsätze in Euro.
            </p>
            <p style={p}>
              Wichtig zu wissen: Die Regelsätze der BKatV gelten für den „Normalfall". Bei Vorsatz oder wiederholten Verstößen kann die Behörde die Beträge verdoppeln (§ 17 Abs. 3 OWiG). Bei Betriebskontrollen eines Unternehmens, die weiter zurückliegende Verstöße aufdecken, summieren sich die Einzelbußgelder schnell zu fünfstelligen Beträgen.
            </p>
            <div style={highlight}>
              <strong>Zwei Beteiligte, zwei Adressaten:</strong> Nach § 8 FPersG haftet nicht nur der Fahrer für seinen Verstoß — auch der Unternehmer wird herangezogen, wenn er Einsätze so plant, dass Verstöße unvermeidbar werden oder er seine Aufsichtspflicht verletzt. Die Bußgelder gegen den Unternehmer sind typischerweise fünfmal so hoch wie die des Fahrers.
            </div>
          </section>

          <section style={card}>
            <h2 style={h2s}>⏱ Überschreitung der Tageslenkzeit</h2>
            <p style={p}>
              Die Tageslenkzeit liegt grundsätzlich bei 9 Stunden und darf maximal zweimal pro Woche auf 10 Stunden erhöht werden (Art. 6 Abs. 1 VO 561/2006). Wer diese Grenze reißt, zahlt gestaffelt nach dem Ausmaß der Überschreitung. Die Regelsätze stehen in Nummer 189 des Bußgeldkatalogs zur BKatV.
            </p>
            <h3 style={h3s}>Regelsätze laut BKatV (Nr. 189 ff.)</h3>
            <table className="sub-tbl">
              <thead><tr><th>Überschreitung</th><th>Bußgeld Fahrer</th><th>Bußgeld Unternehmer</th></tr></thead>
              <tbody>
                <tr><td>bis unter 1 Stunde</td><td>30 €</td><td style={{color:C.muted}}>90 €</td></tr>
                <tr><td>1 Stunde bis unter 2 Stunden</td><td style={{color:C.txt,fontWeight:700}}>60 €</td><td style={{color:C.txt,fontWeight:700}}>280 €</td></tr>
                <tr><td>2 Stunden und mehr</td><td style={{color:C.error,fontWeight:700}}>250 €</td><td style={{color:C.error,fontWeight:700}}>500 €</td></tr>
              </tbody>
            </table>
            <p style={p}>
              Die Berechnung erfolgt minutengenau. Wer seine Schicht nur um wenige Minuten überzieht, bleibt im Zweifel in der niedrigsten Stufe — wer aber eine Stunde länger fährt, springt direkt in die mittlere Kategorie. Entscheidend für die Bußgeldstelle ist, was der digitale Tachograph oder die Fahrerkarte als Lenkzeit zwischen zwei Ruhezeiten ausweist.
            </p>
            <h3 style={h3s}>Beispiel aus der Praxis</h3>
            <p style={p}>
              Ein Fahrer verlässt um 06:00 Uhr das Depot, legt um 10:30 Uhr seine 45-minütige Pause ein und fährt von 11:15 Uhr bis 18:45 Uhr weiter. Das sind 12 Stunden reine Lenkzeit — also <strong style={{color:C.txt}}>2 Stunden über der 10-Stunden-Obergrenze</strong>. Folge: <span style={accent}>250 € für den Fahrer</span> und <span style={accent}>500 € für die Spedition</span>, wenn nachweisbar ist, dass der Disponent die Tour so geplant hat.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>📅 Wochenlenkzeit und Doppelwoche</h2>
            <p style={p}>
              Pro Einzelwoche (Montag 00:00 bis Sonntag 24:00) sind 56 Stunden Lenkzeit erlaubt. Über zwei aufeinanderfolgende Wochen gilt zusätzlich eine Obergrenze von 90 Stunden. Wer nach einer 56-Stunden-Woche in der Folgewoche noch über 34 Stunden kommt, verstößt automatisch gegen die Doppelwochenregel, selbst wenn die Einzelwoche für sich genommen zulässig wäre.
            </p>
            <h3 style={h3s}>Bußgelder bei Wochenverstößen (BKatV Nr. 190, 191)</h3>
            <table className="sub-tbl">
              <thead><tr><th>Verstoß</th><th>Überschreitung</th><th>Fahrer</th></tr></thead>
              <tbody>
                <tr><td>Wochenlenkzeit</td><td>bis 4 h</td><td>30 €</td></tr>
                <tr><td>Wochenlenkzeit</td><td>4 h bis unter 14 h</td><td>60 €</td></tr>
                <tr><td>Wochenlenkzeit</td><td>14 h und mehr</td><td style={{color:C.error,fontWeight:700}}>240 €</td></tr>
                <tr><td>Doppelwoche (90 h)</td><td>bis 10 h</td><td>60 €</td></tr>
                <tr><td>Doppelwoche (90 h)</td><td>10 h bis unter 22 h</td><td>120 €</td></tr>
                <tr><td>Doppelwoche (90 h)</td><td>22 h und mehr</td><td style={{color:C.error,fontWeight:700}}>240 €</td></tr>
              </tbody>
            </table>
            <p style={p}>
              Für den Unternehmer verfünffacht sich der Betrag in vielen Fällen (§ 8 FPersG, BKatV Nr. 190.1 – 191.2), sodass eine einzige Tour mit 22 Stunden Mehrarbeit in der Doppelwoche den Betrieb schnell über <span style={accent}>1.200 €</span> kosten kann — und das pro Fahrer und pro Zeitraum.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>☕ Pausen nicht oder zu kurz eingelegt</h2>
            <p style={p}>
              Spätestens nach 4,5 Stunden Lenkzeit ist eine Pause von 45 Minuten Pflicht, aufteilbar in 15 + 30 Minuten in genau dieser Reihenfolge (Art. 7 VO 561/2006). Wer die Pause vergisst, zu kurz einlegt oder die Reihenfolge tauscht, begeht einen bußgeldbewehrten Verstoß nach BKatV Nr. 187 f.
            </p>
            <h3 style={h3s}>Regelsätze Pausenverstöße</h3>
            <table className="sub-tbl">
              <thead><tr><th>Tatbestand</th><th>Fahrer</th><th>Unternehmer</th></tr></thead>
              <tbody>
                <tr><td>Pause um bis zu 15 min verkürzt</td><td>30 €</td><td>90 €</td></tr>
                <tr><td>Pause um 15 bis 30 min verkürzt</td><td>60 €</td><td>180 €</td></tr>
                <tr><td>Pause um mehr als 30 min verkürzt</td><td style={{color:C.txt,fontWeight:700}}>150 €</td><td style={{color:C.error,fontWeight:700}}>450 €</td></tr>
                <tr><td>Pause nicht eingelegt</td><td style={{color:C.error,fontWeight:700}}>150 €</td><td style={{color:C.error,fontWeight:700}}>450 €</td></tr>
                <tr><td>Falsche Aufteilung (z. B. 30 + 15)</td><td>30 €</td><td>90 €</td></tr>
              </tbody>
            </table>
            <p style={p}>
              Häufiger Fallstrick: Ein Fahrer macht zweimal 20 Minuten Pause. Rechnerisch sind das 40 Minuten — aber die Regelung erkennt nur 15 + 30 Minuten in dieser Reihenfolge an. Die zweite Teilpause wird nicht anerkannt, die 4,5-Stunden-Frist gilt als nicht eingehalten. Konsequenz: Bußgeld wie bei einer nicht eingelegten Pause.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>🛏 Verkürzung der täglichen Ruhezeit</h2>
            <p style={p}>
              Die tägliche Ruhezeit beträgt mindestens 11 Stunden und darf maximal dreimal zwischen zwei Wochenruhezeiten auf 9 Stunden verkürzt werden (Art. 8 Abs. 4 VO 561/2006). Jede weitere Verkürzung oder ein Unterschreiten der 9-Stunden-Grenze kostet laut BKatV Nr. 192 ff.:
            </p>
            <h3 style={h3s}>Bußgelder Ruhezeitverstöße</h3>
            <table className="sub-tbl">
              <thead><tr><th>Verkürzung unter 11 h (bzw. 9 h bei verkürzter RZ)</th><th>Fahrer</th><th>Unternehmer</th></tr></thead>
              <tbody>
                <tr><td>bis 1 Stunde</td><td>30 €</td><td>90 €</td></tr>
                <tr><td>1 h bis unter 3 h</td><td style={{color:C.txt,fontWeight:700}}>60 €</td><td style={{color:C.txt,fontWeight:700}}>180 €</td></tr>
                <tr><td>3 Stunden und mehr</td><td style={{color:C.error,fontWeight:700}}>150 €</td><td style={{color:C.error,fontWeight:700}}>450 €</td></tr>
                <tr><td>Tagesruhezeit komplett ausgelassen</td><td style={{color:C.error,fontWeight:700}}>280 €</td><td style={{color:C.error,fontWeight:700}}>750 €</td></tr>
              </tbody>
            </table>
            <p style={p}>
              Ebenfalls ein häufiger Fehler: Die geteilte tägliche Ruhezeit (3 h + 9 h) muss in exakt dieser Reihenfolge und innerhalb von 24 Stunden genommen werden. Wer stattdessen 2 × 6 Stunden macht, erfüllt die Ruhezeit formal nicht, auch wenn die Summe stimmt.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>🚫 Wochenruhezeit im Fahrzeug verbracht</h2>
            <p style={p}>
              Seit 2017 ist durch eine Entscheidung des Europäischen Gerichtshofs (Rs. C-102/16 „Vaditrans") klargestellt und in Art. 8 Abs. 8 VO 561/2006 festgeschrieben: Die <span style={accent}>regelmäßige wöchentliche Ruhezeit von 45 Stunden</span> darf nicht in der Fahrerkabine verbracht werden. Sie muss in einer geeigneten, geschlechtergerechten Unterkunft mit Sanitäreinrichtungen stattfinden — in der Regel bezahlt oder gestellt vom Arbeitgeber.
            </p>
            <p style={p}>
              Verkürzte Wochenruhezeiten von 24 bis 45 Stunden dürfen hingegen weiterhin im LKW genommen werden, sofern der Parkplatz geeignet ist.
            </p>
            <h3 style={h3s}>Regelsatz (BKatV Nr. 191a)</h3>
            <table className="sub-tbl">
              <thead><tr><th>Tatbestand</th><th>Fahrer</th><th>Unternehmer</th></tr></thead>
              <tbody>
                <tr><td>Reguläre Wochenruhezeit (45 h) im Fahrzeug</td><td style={{color:C.txt,fontWeight:700}}>60 €</td><td style={{color:C.error,fontWeight:700}}>500 €</td></tr>
              </tbody>
            </table>
            <p style={p}>
              Pro Ereignis, wohlgemerkt. Wer über ein Jahr hinweg jede dritte Woche im Fahrzeug verbringt, summiert schnell <strong style={{color:C.txt}}>über 8.000 €</strong> auf Arbeitgeberseite auf. Außerhalb Deutschlands ist der Tatbestand ebenfalls EU-weit gültig und wird besonders in Frankreich und Belgien konsequent geahndet.
            </p>
            <div style={{background:'rgba(239,68,68,0.1)',border:'1px solid rgba(239,68,68,0.25)',borderRadius:12,padding:'16px 20px',marginTop:8}}>
              <strong style={{color:C.error}}>Nachweispflicht:</strong> <span style={{color:C.muted}}>Der Unternehmer muss auf Anforderung belegen, wo die Wochenruhe verbracht wurde — typischerweise mit Hotelrechnung oder Nachweis über eine Fahrerunterkunft. Fehlt dieser Nachweis, greift bei Kontrolle die Vermutung einer Kabinenruhe.</span>
            </div>
          </section>

          <section style={card}>
            <h2 style={h2s}>💾 Tachograph und Fahrerkarte</h2>
            <p style={p}>
              Wer einen LKW über 3,5 Tonnen oder einen Bus mit mehr als 9 Sitzplätzen führt, muss einen funktionsfähigen digitalen Tachographen nutzen und seine Fahrerkarte einstecken. Verstöße gegen diese Pflichten sind in § 8 FPersG in Verbindung mit BKatV Nr. 178 ff. geregelt und werden ungewöhnlich hart sanktioniert — weil sie den Kern der Kontrollierbarkeit des Systems betreffen.
            </p>
            <h3 style={h3s}>Bußgelder rund um den Tachographen</h3>
            <table className="sub-tbl">
              <thead><tr><th>Tatbestand</th><th>Bußgeld</th><th>Rechtsgrundlage</th></tr></thead>
              <tbody>
                <tr><td>Fahrerkarte nicht mitgeführt</td><td>75 €</td><td style={{color:C.muted}}>§ 8 FPersG</td></tr>
                <tr><td>Fahrerkarte nicht eingesteckt</td><td>250 €</td><td style={{color:C.muted}}>BKatV Nr. 181</td></tr>
                <tr><td>Fremde Fahrerkarte genutzt</td><td style={{color:C.error,fontWeight:700}}>bis 1.500 €</td><td style={{color:C.muted}}>§ 8 FPersG</td></tr>
                <tr><td>Tachograph manipuliert (Magnet, Störsender)</td><td style={{color:C.error,fontWeight:700}}>bis 2.000 € + Strafanzeige</td><td style={{color:C.muted}}>BKatV Nr. 179; § 268 StGB</td></tr>
                <tr><td>Manueller Nachtrag fehlt</td><td>75 €</td><td style={{color:C.muted}}>BKatV Nr. 182</td></tr>
                <tr><td>Kontrollgerät nicht geprüft (Kalibrierung)</td><td>250 €</td><td style={{color:C.muted}}>BKatV Nr. 180</td></tr>
                <tr><td>Aufzeichnungen manipuliert</td><td style={{color:C.error,fontWeight:700}}>bis 5.000 €</td><td style={{color:C.muted}}>§ 8 Abs. 1 Nr. 2 FPersG</td></tr>
              </tbody>
            </table>
            <p style={p}>
              Manipulationen am Tachographen sind nicht nur eine Ordnungswidrigkeit — sie erfüllen regelmäßig auch den Straftatbestand der Urkundenfälschung nach § 268 StGB (Fälschung technischer Aufzeichnungen). Neben dem Bußgeld drohen dann Geldstrafen oder bis zu fünf Jahre Freiheitsstrafe, die Einziehung des Fahrzeugs und der Widerruf der Fahrerlaubnis zur Fahrgastbeförderung.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>📝 Aufzeichnungspflicht und 28-Tage-Nachweis</h2>
            <p style={p}>
              Jeder Berufskraftfahrer muss während der Kontrolle die Daten des laufenden Tages und der vorangegangenen 28 Kalendertage lückenlos vorlegen können (§ 2a FPersV, Art. 36 VO 165/2014). Dazu zählen Fahrerkarte, Ausdrucke des Kontrollgeräts und handschriftliche Nachträge bei Ausfällen.
            </p>
            <h3 style={h3s}>Bußgelder bei fehlendem 28-Tage-Nachweis</h3>
            <table className="sub-tbl">
              <thead><tr><th>Fehlende Tage</th><th>Fahrer</th><th>Unternehmer</th></tr></thead>
              <tbody>
                <tr><td>1 Tag fehlt</td><td>15 €</td><td>75 €</td></tr>
                <tr><td>mehrere Tage, bis zu einer Woche</td><td>75 €</td><td>250 €</td></tr>
                <tr><td>mehr als eine Woche lückenhaft</td><td style={{color:C.error,fontWeight:700}}>250 €</td><td style={{color:C.error,fontWeight:700}}>750 €</td></tr>
              </tbody>
            </table>
            <p style={p}>
              Besonders teuer wird es, wenn der Fahrer an Tagen ohne Fahrtätigkeit (Urlaub, Krankheit, Bürotag) keine Bescheinigung über berücksichtigungsfreie Tage dabei hat. Das Formular „Tätigkeitsnachweis" muss vom Unternehmer unterschrieben und vom Fahrer mitgeführt werden, sonst greift die gleiche Sanktion wie bei einer Lücke.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>⚖️ Wer haftet: Fahrer oder Unternehmer?</h2>
            <p style={p}>
              § 8 FPersG regelt die geteilte Verantwortung: Grundsätzlich trägt der Fahrer die Verantwortung für die Einhaltung der Lenk- und Ruhezeiten während seiner Schicht. Der Unternehmer haftet jedoch eigenständig, wenn er Touren so disponiert, dass Verstöße quasi unvermeidlich werden, oder wenn er seine Überwachungspflicht nach § 4 Abs. 3 FPersV vernachlässigt.
            </p>
            <h3 style={h3s}>Unternehmerpflichten im Überblick</h3>
            <ul style={{...p,paddingLeft:20}}>
              <li>Regelmäßiges Auslesen der Fahrer- und Massenspeicherdaten — spätestens alle <strong style={{color:C.txt}}>28 Tage</strong> (Fahrerkarte) und <strong style={{color:C.txt}}>90 Tage</strong> (Fahrzeug)</li>
              <li>Archivierung der Daten für <strong style={{color:C.txt}}>mindestens 1 Jahr</strong> (§ 2 Abs. 5 FPersV)</li>
              <li>Ausstellung von Tätigkeitsnachweisen für berücksichtigungsfreie Tage</li>
              <li>Schulung des Fahrpersonals, insbesondere bei Neueinstellung und nach Gesetzesänderungen</li>
              <li>Sicherstellung, dass Wochenruhezeiten außerhalb des Fahrzeugs verbracht werden können</li>
            </ul>
            <p style={p}>
              Ein vom Disponenten mitgegebener Tourenplan, der schon rechnerisch nicht einzuhalten ist, gilt bei der Aufsichtsbehörde als klares Indiz für ein Organisationsverschulden. In solchen Fällen wird das Bußgeld nicht dem Fahrer, sondern der Geschäftsleitung nach § 130 OWiG auferlegt.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>🎯 Punkte in Flensburg?</h2>
            <p style={p}>
              Die gute Nachricht zuerst: Die klassischen Lenk- und Ruhezeitverstöße nach BKatV Nr. 187 – 192 sind <span style={accent}>nicht mit Punkten im Fahreignungsregister</span> verknüpft. Sie gelten als Ordnungswidrigkeiten gegen die Sozialvorschriften im Straßenverkehr, nicht als Verkehrsverstöße im engeren Sinne.
            </p>
            <p style={p}>
              Punkte in Flensburg gibt es allerdings in diesen verwandten Konstellationen:
            </p>
            <ul style={{...p,paddingLeft:20}}>
              <li><strong style={{color:C.txt}}>1 Punkt</strong> bei Manipulation des Tachographen (Straftat nach § 268 StGB), sobald eine Eintragung im Fahreignungsregister erfolgt</li>
              <li><strong style={{color:C.txt}}>1 Punkt</strong> bei Fahren trotz Übermüdung mit Unfallfolgen (§ 315c StGB)</li>
              <li>Keine Punkte bei bloßer Überschreitung der Lenkzeit oder verkürzter Pause</li>
            </ul>
            <p style={p}>
              Für Fahrer mit gewerblicher Fahrerlaubnis (C, CE, D, DE) ist allerdings zu beachten: Ab einer bestimmten Schwere oder Häufigkeit kann die Führerscheinstelle die Eignung zum Führen großer Fahrzeuge separat prüfen — unabhängig vom Punktestand.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>🌍 Auslandsverkehr: Deutlich höhere Strafen möglich</h2>
            <p style={p}>
              Die EU-Sozialvorschriften gelten europaweit einheitlich, aber die Bußgelder sind nationale Angelegenheit. Wer mit seinem LKW in Frankreich, Österreich oder Spanien unterwegs ist, zahlt im Schnitt deutlich mehr als in Deutschland — bei gleichem Verstoß.
            </p>
            <h3 style={h3s}>Vergleich ausgewählter Länder</h3>
            <table className="sub-tbl">
              <thead><tr><th>Land</th><th>Kabinenruhe 45h</th><th>Überschreitung TLZ &gt; 2h</th></tr></thead>
              <tbody>
                <tr><td>🇩🇪 Deutschland</td><td>60 € / 500 €</td><td>250 € / 500 €</td></tr>
                <tr><td>🇫🇷 Frankreich</td><td style={{color:C.error,fontWeight:700}}>bis 30.000 € + 1 Jahr Haft</td><td>750 €</td></tr>
                <tr><td>🇧🇪 Belgien</td><td style={{color:C.error,fontWeight:700}}>1.800 €</td><td>1.320 €</td></tr>
                <tr><td>🇦🇹 Österreich</td><td>ab 300 €</td><td style={{color:C.txt,fontWeight:700}}>bis 5.000 €</td></tr>
                <tr><td>🇪🇸 Spanien</td><td>ab 401 €</td><td>ab 1.501 €</td></tr>
                <tr><td>🇮🇹 Italien</td><td>ab 422 €</td><td>bis 1.683 €</td></tr>
              </tbody>
            </table>
            <p style={p}>
              Frankreich geht seit 2016 besonders konsequent gegen die Kabinenruhe vor — das Bußgeld kann bis zu 30.000 € betragen und im Wiederholungsfall ist sogar Freiheitsstrafe vorgesehen. Belgische Kontrolleure verlangen zudem regelmäßig eine sofortige Barzahlung oder Kaution, bevor der Fahrer weiterfahren darf.
            </p>
            <p style={p}>
              Seit dem EU-Mobilitätspaket I werden Verstöße zudem grenzüberschreitend im europäischen Register „ERRU" erfasst. Ein schwerer Verstoß in Frankreich kann also mittelbar auch Auswirkungen auf die Risikoeinstufung des deutschen Unternehmens haben.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>✉️ Einspruch: Wie Sie gegen den Bußgeldbescheid vorgehen</h2>
            <p style={p}>
              Ein Bußgeldbescheid ist keine endgültige Entscheidung. Gegen jeden Bescheid kann innerhalb von <span style={accent}>zwei Wochen</span> nach Zustellung Einspruch eingelegt werden (§ 67 OWiG). Die Frist ist strikt und wird auch dann nicht verlängert, wenn der Adressat im Urlaub ist — deshalb sollte der Bescheid sofort nach Erhalt bearbeitet werden.
            </p>
            <h3 style={h3s}>Typische Einspruchsgründe</h3>
            <ul style={{...p,paddingLeft:20}}>
              <li><strong style={{color:C.txt}}>Technischer Defekt des Tachographen:</strong> Nachweis durch Werkstattbescheinigung, dann handschriftlicher Nachtrag als ausreichend</li>
              <li><strong style={{color:C.txt}}>Höhere Gewalt / Notfall:</strong> Art. 12 VO 561/2006 erlaubt Abweichungen, wenn dies zur Sicherheit von Personen, Fahrzeug oder Ladung notwendig ist — der Fahrer muss den Grund im Ausdruck handschriftlich vermerken</li>
              <li><strong style={{color:C.txt}}>Messfehler oder falsche Auswertung:</strong> Die Auslesesoftware der Behörde kann bei fehlerhaften Aktivitätswechseln zu Scheinverstößen führen</li>
              <li><strong style={{color:C.txt}}>Verjährung:</strong> Bußgelder aus dem FPersG verjähren nach drei Monaten (§ 31 OWiG), bei eingeleitetem Verfahren nach sechs Monaten</li>
              <li><strong style={{color:C.txt}}>Zuordnungsproblem:</strong> Wurde tatsächlich der namentlich benannte Fahrer kontrolliert?</li>
            </ul>
            <div style={highlight}>
              <strong>Tipp aus der Praxis:</strong> Vor dem Einspruch sollte eine spezialisierte Rechtsanwaltskanzlei oder der Berufsverband (z. B. BGL, BKF) das Auswertungsprotokoll prüfen. In vielen Fällen lassen sich Bußgelder reduzieren oder ganz aufheben, weil die Behörde die Aktivitäten falsch klassifiziert hat (etwa Ladezeit als Lenkzeit gewertet).
            </div>
          </section>

          <section style={card}>
            <h2 style={h2s}>✅ So vermeiden Sie Bußgelder im Alltag</h2>
            <p style={p}>
              Die meisten Verstöße entstehen nicht aus Vorsatz, sondern aus Zeitdruck oder schlechter Tourenplanung. Wer ein paar einfache Routinen einhält, bleibt auf der sicheren Seite:
            </p>
            <ul style={{...p,paddingLeft:20}}>
              <li>Vor Schichtbeginn die verbleibende Tages- und Wochenlenkzeit prüfen (am Tachographen oder mit einem Rechner)</li>
              <li>Pausen frühzeitig einlegen — lieber 5 Minuten früher als 5 Minuten zu spät</li>
              <li>Bei geteilter Pause konsequent 15 + 30 Minuten in dieser Reihenfolge</li>
              <li>Wochenruhe von 45 Stunden niemals im Fahrzeug verbringen, sondern in Hotel oder Fahrerunterkunft</li>
              <li>Nach jedem Fahrzeugwechsel die Fahrerkarte sofort einstecken, Nachträge handschriftlich dokumentieren</li>
              <li>Bei Grenzfällen schriftlich im Ausdruck festhalten, warum ein Verstoß unumgänglich war (Art. 12)</li>
              <li>Alle 28 Tage Fahrerkarte auslesen lassen und Bescheinigungen für Urlaubs- und Krankheitstage dabei haben</li>
            </ul>
          </section>

          <div style={{...card,background:`linear-gradient(135deg,rgba(240,136,62,0.08),${C.surface})`,borderColor:'rgba(240,136,62,0.2)',textAlign:'center'}}>
            <div style={{fontSize:32,marginBottom:12}}>🚛</div>
            <h2 style={{...h2s,textAlign:'center'}}>Bußgelder gar nicht erst riskieren</h2>
            <p style={{...p,textAlign:'center'}}>Mit unserem kostenlosen Lenkzeitrechner sehen Sie sofort, wann die nächste Pause fällig ist und wie viel Lenkzeit noch übrig bleibt — einfach, ohne Anmeldung und ohne App.</p>
            <a href="/" style={{display:'inline-block',background:C.acc,color:'#fff',borderRadius:10,padding:'13px 28px',fontWeight:700,textDecoration:'none',fontSize:15,boxShadow:'0 4px 16px rgba(240,136,62,0.3)'}}>
              → Zum Lenkzeitrechner
            </a>
          </div>

          <footer style={{display:'flex',justifyContent:'center',gap:16,padding:'16px 0',fontSize:12,color:C.dim,borderTop:`1px solid ${C.border}`,flexWrap:'wrap'}}>
            <a href="/lkw-lenkzeiten" style={{color:C.dim,textDecoration:'none'}}>Lenkzeiten</a>
            <a href="/pausenrechner" style={{color:C.dim,textDecoration:'none'}}>Pausenrechner</a>
            <a href="/ruhezeiten" style={{color:C.dim,textDecoration:'none'}}>Ruhezeiten</a>
            <a href="/bussgeldkatalog" style={{color:C.acc,textDecoration:'none'}}>Bußgelder</a>
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
