export const metadata = {
  title: 'Mobilitätspaket I – Auswirkungen auf LKW-Fahrer & Speditionen 2026',
  description: 'Mobilitätspaket I der EU: Rückkehrpflicht, Wochenruhe nicht im Fahrzeug, Kabotage-Abkühlzeit, Entsendung. Alle Neuerungen seit 2020 kompakt erklärt.',
  keywords: 'Mobilitätspaket I, VO 2020/1054, Rückkehrpflicht LKW 8 Wochen, Kabotage 4 Tage, Entsendung Fahrer, Mobility Package EU',
  alternates: { canonical: 'https://lenkzeitrechner.de/mobilitaetspaket' },
  openGraph: {
    title: 'Mobilitätspaket I – Lenkzeiten, Rückkehrpflicht, Kabotage',
    description: 'Alle Neuerungen des Mobilitätspakets für den Güterkraftverkehr ab 2020 kompakt erklärt.',
    url: 'https://lenkzeitrechner.de/mobilitaetspaket',
    images: [{ url: 'https://lenkzeitrechner.de/og-image.svg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Mobilitätspaket I – EU Güterverkehr', description: 'Rückkehrpflicht, Kabotage-Abkühlzeit und Smart Tachograph 2 kompakt erklärt.' },
};

const C = {
  bg:'#13151f',surface:'#1c1f2e',surface2:'#242738',border:'rgba(255,255,255,0.07)',
  acc:'#f0883e',txt:'#ffffff',muted:'#94a3b8',dim:'#64748b',
  navBg:'rgba(19,21,31,0.85)',dotGrid:'rgba(255,255,255,0.06)',
  success:'#22c55e',error:'#ef4444',
};

export default function Mobilitaetspaket() {
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
            <a href="/" style={{color:C.acc,textDecoration:'none'}}>LenkzeitRechner.de</a>{' → '}Mobilitätspaket I
          </div>

          <div style={card}>
            <h1 style={{fontSize:32,fontWeight:800,color:C.txt,marginBottom:8,lineHeight:1.2}}>Mobilitätspaket I – Der große Umbruch im Güterverkehr</h1>
            <p style={{...p,fontSize:17,color:C.txt,marginBottom:20}}>
              Seit August 2020 verändert das <span style={accent}>Mobilitätspaket I</span> der Europäischen Union den grenzüberschreitenden Güterkraftverkehr grundlegend. Rückkehrpflicht, Kabotage-Abkühlzeit und der Smart Tachograph Version 2 sind heute Alltag jeder Spedition.
            </p>
            <a href="/" style={{display:'inline-block',background:C.acc,color:'#fff',borderRadius:10,padding:'12px 24px',fontWeight:700,textDecoration:'none',fontSize:14}}>
              → Zum Lenkzeitrechner mit Mobilitätspaket-Logik
            </a>
          </div>

          <section style={card}>
            <h2 style={h2s}>📜 Was ist das Mobilitätspaket I?</h2>
            <p style={p}>
              Das <span style={accent}>Mobility Package I</span> ist ein Bündel aus drei europäischen Rechtsakten, das der Rat der EU und das Europäische Parlament am <strong style={{color:C.txt}}>15. Juli 2020</strong> verabschiedet haben. Es wurde am <strong style={{color:C.txt}}>31. Juli 2020</strong> im Amtsblatt der EU veröffentlicht und trat in wesentlichen Teilen bereits am <strong style={{color:C.txt}}>20. August 2020</strong> in Kraft. Ziel der Reform ist es, den Straßengüterverkehr im Binnenmarkt fairer zu gestalten, Sozialdumping und Briefkastenfirmen einzudämmen sowie die Arbeits- und Pausenbedingungen für Berufskraftfahrer europaweit zu vereinheitlichen.
            </p>
            <p style={p}>
              Das Paket greift tief in die bestehenden Regelwerke ein – insbesondere in die Verordnung (EG) 561/2006 über Lenk- und Ruhezeiten, in die Verordnung (EG) 1071/2009 über den Zugang zum Beruf des Kraftverkehrsunternehmers und in die Verordnung (EG) 1072/2009 über den Marktzugang zum Güterkraftverkehr. Darüber hinaus schafft die neue Entsenderichtlinie eigene Regeln für entsandte Fahrer im internationalen Straßenverkehr.
            </p>
            <h3 style={h3s}>Die drei Rechtsakte im Überblick</h3>
            <table className="sub-tbl">
              <thead><tr><th>Rechtsakt</th><th>Inhalt</th><th>Gilt seit</th></tr></thead>
              <tbody>
                <tr><td><strong>VO (EU) 2020/1054</strong></td><td>Lenk- und Ruhezeiten, Rückkehrpflicht, Smart Tachograph</td><td>20.08.2020</td></tr>
                <tr><td><strong>VO (EU) 2020/1055</strong></td><td>Marktzugang, Kabotage, Niederlassungskriterien</td><td>21.02.2022</td></tr>
                <tr><td><strong>RL (EU) 2020/1057</strong></td><td>Entsendung von Fahrern im Güterkraftverkehr</td><td>02.02.2022</td></tr>
              </tbody>
            </table>
          </section>

          <section style={card}>
            <h2 style={h2s}>🗓 Stufenplan der Umsetzung</h2>
            <p style={p}>
              Die Umsetzung des Mobilitätspakets erfolgte bewusst in mehreren Stufen, damit Spediteure Fuhrparks und Prozesse anpassen konnten. Viele Pflichten griffen sofort, andere – insbesondere die Nachrüstung alter Fahrtenschreiber – sind erst Ende 2024 und 2025 wirksam geworden.
            </p>
            <table className="sub-tbl">
              <thead><tr><th>Datum</th><th>Neuerung</th><th>Rechtsgrundlage</th></tr></thead>
              <tbody>
                <tr><td>20.08.2020</td><td>Verbot der regulären Wochenruhe im Fahrzeug, Rückkehr des Fahrers alle 4 Wochen</td><td>Art. 1 VO 2020/1054</td></tr>
                <tr><td>02.02.2022</td><td>Entsenderegeln bei Kabotage und grenzüberschreitendem Verkehr, IMI-Meldung</td><td>RL 2020/1057</td></tr>
                <tr><td>21.02.2022</td><td>Rückkehrpflicht des Fahrzeugs alle 8 Wochen, Kabotage-Abkühlzeit von 4 Tagen</td><td>VO 2020/1055</td></tr>
                <tr><td>21.05.2022</td><td>Anwendung der VO 561/2006 auf Fahrzeuge &gt; 2,5 t im internationalen Verkehr</td><td>Art. 2 VO 2020/1054</td></tr>
                <tr><td>21.08.2023</td><td>Pflicht zur Einführung des Smart Tachograph V2 in Neufahrzeugen</td><td>VO 2021/1228</td></tr>
                <tr><td>31.12.2024</td><td>Nachrüstpflicht V2 für Fahrzeuge mit analogem oder digitalem Tachograph der 1. Generation</td><td>Art. 3 VO 2020/1054</td></tr>
                <tr><td>21.08.2025</td><td>Nachrüstpflicht V2 für Fahrzeuge mit Smart Tachograph Version 1</td><td>Art. 3 VO 2020/1054</td></tr>
                <tr><td>01.07.2026</td><td>Ausweitung der Tachograph-V2-Pflicht auf Fahrzeuge 2,5 – 3,5 t im internationalen Verkehr</td><td>VO 2020/1054</td></tr>
              </tbody>
            </table>
          </section>

          <section style={card}>
            <h2 style={h2s}>🛏 Neue Regeln bei Lenk- und Ruhezeiten</h2>
            <div style={highlight}>
              <strong>Kernbotschaft:</strong> Die reguläre <span style={accent}>Wochenruhezeit von 45 Stunden</span> darf nicht mehr im Fahrzeug verbracht werden. Der Arbeitgeber muss eine <span style={accent}>geeignete Unterkunft</span> auf eigene Kosten bereitstellen.
            </div>
            <p style={p}>
              Mit Artikel 1 Nummer 6 der VO (EU) 2020/1054 wurde Artikel 8 Absatz 8 der VO 561/2006 neu gefasst. Zwar war die Rechtsprechung des Europäischen Gerichtshofs (Urteil C-102/16 „Vaditrans“ vom 20.12.2017) bereits eindeutig, doch erst das Mobilitätspaket gibt den Mitgliedstaaten einen klaren Bußgeldrahmen an die Hand. In Deutschland werden für den Unternehmer <strong style={{color:C.txt}}>bis zu 1.500 Euro</strong> pro Fall fällig, wenn ein Fahrer seine 45-Stunden-Wochenruhe in der Schlafkabine verbringt.
            </p>
            <h3 style={h3s}>Rückkehr des Fahrers alle 4 Wochen</h3>
            <p style={p}>
              Gemäß Artikel 8 Absatz 8a der VO 561/2006 in der Fassung der VO 2020/1054 müssen Transportunternehmen die Arbeit der Fahrer so organisieren, dass diese in <span style={accent}>jedem Zeitraum von vier aufeinanderfolgenden Wochen</span> an ihren Wohnsitz oder an die Betriebsstätte, der sie zugeteilt sind, zurückkehren können. Nimmt ein Fahrer zwei verkürzte Wochenruhezeiten in Folge, verkürzt sich dieser Zyklus auf drei Wochen.
            </p>
            <h3 style={h3s}>Rückkehr des Fahrzeugs alle 8 Wochen</h3>
            <p style={p}>
              Artikel 1 Nummer 2 Buchstabe a der VO (EU) 2020/1055 ergänzt die VO 1071/2009 um eine Rückkehrpflicht des Fahrzeugs. Jedes Kraftfahrzeug, das im internationalen Verkehr eingesetzt wird, muss spätestens <span style={accent}>acht Wochen nach Verlassen</span> des Niederlassungsmitgliedstaats dorthin zurückkehren. Diese Pflicht soll Briefkastenfirmen verhindern und sicherstellen, dass Fahrzeuge tatsächlich im Staat der Lizenz beheimatet sind.
            </p>
            <h3 style={h3s}>Teilung der regulären Wochenruhe im internationalen Verkehr</h3>
            <p style={p}>
              Neu ist die Möglichkeit, im <strong style={{color:C.txt}}>grenzüberschreitenden Güterverkehr</strong> zwei reduzierte Wochenruhezeiten in Folge zu nehmen – vorausgesetzt, der Fahrer verbringt sechs Wochenruhezeiten innerhalb eines Zeitraums von vier aufeinanderfolgenden Wochen außerhalb des Herkunftsmitgliedstaats. Die ausgefallenen Stunden müssen en bloc an eine Ruhezeit von mindestens 45 Stunden angehängt werden.
            </p>
            <h3 style={h3s}>Fähr- und Zugausnahme verlängert</h3>
            <p style={p}>
              Die Unterbrechung der täglichen Ruhezeit bei Fähr- und Zugfahrten wurde ausgeweitet: Eine regelmäßige Wochenruhezeit darf nun – gemäß Artikel 9 Absatz 1 VO 561/2006 – bei einer Fährüberfahrt von mindestens 8 Stunden zweimal für insgesamt maximal eine Stunde unterbrochen werden, sofern dem Fahrer eine Schlafkabine zur Verfügung steht.
            </p>
            <h3 style={h3s}>12-Tage-Regel im Fernbusverkehr</h3>
            <p style={p}>
              Die „12-Tage-Regel“ aus Artikel 8 Absatz 6a VO 561/2006 wurde klargestellt: Bei einem einzelnen Gelegenheitsverkehr im grenzüberschreitenden Personenverkehr darf ein Fahrer die Wochenruhezeit um bis zu zwölf aufeinanderfolgende 24-Stunden-Zeiträume verschieben. Diese Ausnahme gilt weiterhin ausschließlich für den gelegentlichen Fernbusverkehr, nicht aber im Linienverkehr oder im Güterverkehr.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>🌍 Entsendung von Fahrern (RL 2020/1057)</h2>
            <p style={p}>
              Die Entsenderichtlinie für den Straßenverkehr ist seit dem <strong style={{color:C.txt}}>2. Februar 2022</strong> unmittelbar anzuwenden. Sie definiert erstmals sektor-spezifisch, wann ein Fahrer im Sinne der allgemeinen Entsenderichtlinie 96/71/EG entsandt ist und welche arbeitsrechtlichen Vorschriften des Gastmitgliedstaats greifen – insbesondere <span style={accent}>Mindestlohn, bezahlter Urlaub und Arbeitsschutz</span>.
            </p>
            <h3 style={h3s}>Wann liegt eine Entsendung vor?</h3>
            <table className="sub-tbl">
              <thead><tr><th>Fahrt</th><th>Entsendung?</th><th>Grund</th></tr></thead>
              <tbody>
                <tr><td>Bilateraler Verkehr DE → FR</td><td style={{color:C.success,fontWeight:700}}>Nein</td><td>Ausnahme Art. 1 Abs. 3 RL 2020/1057</td></tr>
                <tr><td>Kabotage (3 Fahrten in FR)</td><td style={{color:C.error,fontWeight:700}}>Ja</td><td>Art. 1 Abs. 7 RL 2020/1057</td></tr>
                <tr><td>Cross-Trade FR → IT ohne Berührung DE</td><td style={{color:C.error,fontWeight:700}}>Ja</td><td>Art. 1 Abs. 4 RL 2020/1057</td></tr>
                <tr><td>Transit durch FR ohne Ladung/Entladung</td><td style={{color:C.success,fontWeight:700}}>Nein</td><td>Art. 1 Abs. 5 RL 2020/1057</td></tr>
                <tr><td>Zusätzliche Zuladung auf Rückfahrt</td><td style={{color:C.error,fontWeight:700}}>Ja</td><td>Kein bilateraler Verkehr mehr</td></tr>
              </tbody>
            </table>
            <h3 style={h3s}>Meldepflicht über das IMI-Portal</h3>
            <p style={p}>
              Der Verkehrsunternehmer muss jede Entsendung vor Beginn der Fahrt elektronisch über das Binnenmarkt-Informationssystem <span style={accent}>IMI (Internal Market Information System)</span> der Europäischen Kommission melden. Die Meldung gilt bis zu sechs Monate und ersetzt die bisherigen nationalen Meldeportale (z.B. das französische SIPSI oder das italienische Ministero del Lavoro). Der Fahrer muss eine ausgedruckte oder elektronische Kopie der Meldung im Fahrzeug mitführen – fehlt sie, drohen in Frankreich bis zu 4.000 Euro je Fahrer.
            </p>
            <p style={p}>
              Gezahlt werden muss für jeden Tag der Entsendung der <strong style={{color:C.txt}}>Mindestlohn des Gastmitgliedstaats</strong> – in Deutschland aktuell 12,82 Euro brutto je Stunde nach Mindestlohngesetz, in Frankreich der SMIC. Auch Zuschläge, Feiertags- und Nachtarbeitsvergütungen nach lokalem Recht sind anzuwenden.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>🔁 Kabotage mit Abkühlzeit</h2>
            <p style={p}>
              Die Regeln der VO 1072/2009 zur Kabotage blieben im Grundsatz bestehen: maximal <span style={accent}>drei Kabotagebeförderungen</span> innerhalb von <span style={accent}>sieben Tagen</span> nach einer internationalen Beförderung. Neu ist mit Artikel 2 Nummer 4 Buchstabe a der VO (EU) 2020/1055 die sogenannte <strong style={{color:C.txt}}>Cooling-off-Period</strong>: Nach Ablauf der Kabotagefrist darf derselbe Unternehmer mit demselben Fahrzeug <span style={accent}>vier Tage lang</span> keine weitere Kabotage im zuvor bedienten Mitgliedstaat durchführen.
            </p>
            <h3 style={h3s}>Kabotage-Regeln im Vergleich</h3>
            <table className="sub-tbl">
              <thead><tr><th>Regel</th><th>Vor Mobilitätspaket</th><th>Seit 21.02.2022</th></tr></thead>
              <tbody>
                <tr><td>Max. Kabotagefahrten</td><td>3 in 7 Tagen</td><td>3 in 7 Tagen (unverändert)</td></tr>
                <tr><td>Abkühlphase</td><td>Keine</td><td>4 Tage im gleichen Mitgliedstaat</td></tr>
                <tr><td>Nachweis per Tachograph</td><td>Freiwillig</td><td>Pflicht, automatische Grenzerfassung</td></tr>
                <tr><td>Entsendung anwendbar?</td><td>Umstritten</td><td>Ja, ab der ersten Kabotagefahrt</td></tr>
                <tr><td>Mindestlohn des Gastlandes</td><td>Teilweise</td><td>Immer für gesamte Kabotage-Tage</td></tr>
              </tbody>
            </table>
            <p style={p}>
              Wer die Abkühlzeit missachtet, riskiert in Deutschland nach § 19 Güterkraftverkehrsgesetz (GüKG) ein Bußgeld von bis zu 5.000 Euro. Die Bundesanstalt für den Güterverkehr (BAG) kontrolliert bei Straßenkontrollen die letzten 56 Tage des Tachographen, sodass eine Umgehung faktisch nicht mehr möglich ist.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>📡 Smart Tachograph Version 2</h2>
            <p style={p}>
              Die zweite Generation des intelligenten Fahrtenschreibers (Smart Tachograph Version 2, kurz <span style={accent}>V2</span>) ist das technische Rückgrat des Mobilitätspakets. Er basiert auf der Durchführungsverordnung (EU) 2021/1228 der Kommission und bietet Funktionen, mit denen Behörden die neuen Pflichten zuverlässig prüfen können.
            </p>
            <h3 style={h3s}>Neue Funktionen des V2</h3>
            <ul style={{...p,paddingLeft:20}}>
              <li><strong style={{color:C.txt}}>Automatische Erfassung von Grenzübertritten</strong> über Galileo-Satellitensignale (OSNMA-authentifiziert).</li>
              <li><strong style={{color:C.txt}}>Automatische Protokollierung von Be- und Entladevorgängen</strong> mit Zeitstempel und Ortsangabe.</li>
              <li><strong style={{color:C.txt}}>DSRC-Fernauslesung</strong> durch Kontrollbehörden im fließenden Verkehr bis 200 Meter Entfernung.</li>
              <li><strong style={{color:C.txt}}>Speicherkapazität auf 56 Tage</strong> erweitert (zuvor 28 Tage).</li>
              <li><strong style={{color:C.txt}}>Kryptografische Signatur</strong> aller Fahrerkartendatensätze nach ERCA-Zertifikat Generation 2.</li>
            </ul>
            <h3 style={h3s}>Nachrüstfristen V2</h3>
            <table className="sub-tbl">
              <thead><tr><th>Fahrzeugklasse</th><th>Frist</th><th>Konsequenz bei Versäumnis</th></tr></thead>
              <tbody>
                <tr><td>Analoger / digitaler Tachograph (Gen 1)</td><td>31.12.2024 abgeschlossen</td><td>Fahrverbot im internationalen Verkehr</td></tr>
                <tr><td>Smart Tachograph V1</td><td>21.08.2025 abgeschlossen</td><td>Bußgeld je Tag bis 750 €</td></tr>
                <tr><td>Fahrzeuge 2,5 – 3,5 t international</td><td>01.07.2026</td><td>Einstufung in VO 561/2006</td></tr>
                <tr><td>Neufahrzeuge seit 21.08.2023</td><td>Serie ab Werk</td><td>Nur V2 zulassungsfähig</td></tr>
              </tbody>
            </table>
            <p style={p}>
              Zum Stichtag April 2026 verfügt praktisch jeder international eingesetzte LKW über einen Smart Tachograph Version 2. Speditionen, die ihre Flotte zu spät umgerüstet haben, stehen seit Herbst 2025 unter besonderer Beobachtung durch BAG und die französische DREAL.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>🏢 Auswirkungen auf Spediteure, Fahrer und KMU</h2>
            <h3 style={h3s}>Für Transportunternehmer</h3>
            <p style={p}>
              Die Rückkehrpflicht des Fahrzeugs alle acht Wochen zwingt zu einer vollständigen Neuplanung der Touren. Leerfahrten nahmen laut <strong style={{color:C.txt}}>Europäischem Rechnungshof</strong> (Sonderbericht 07/2023) in einzelnen Mitgliedstaaten um bis zu 2 % zu. Gleichzeitig müssen Dispositionen die IMI-Meldungen fristgerecht einpflegen – inklusive A1-Bescheinigungen, Mindestlohnnachweisen und Frachtpapieren nach Artikel 8 VO 1072/2009.
            </p>
            <h3 style={h3s}>Für Kraftfahrer</h3>
            <p style={p}>
              Fahrer profitieren vor allem von der Pflicht zur Unterkunft außerhalb der Kabine und von der <span style={accent}>garantierten Rückkehr an den Wohnsitz</span> innerhalb von vier Wochen. Nach einer Umfrage der Europäischen Transportarbeiter-Föderation (ETF) von 2025 beurteilen 71 % der befragten Fernfahrer diese Regeln als deutliche Verbesserung.
            </p>
            <h3 style={h3s}>Für KMU und osteuropäische Carrier</h3>
            <p style={p}>
              Kleine und mittelständische Unternehmen – insbesondere aus Polen, Litauen, Rumänien und Bulgarien – stehen unter Anpassungsdruck. Die Rückkehrpflicht des Fahrzeugs und die Cooling-off-Period erhöhen Fixkosten. Mehrere Mitgliedstaaten (darunter Polen, Ungarn, Litauen, Bulgarien, Rumänien und Malta) klagten beim Europäischen Gerichtshof gegen einzelne Artikel des Pakets. Der EuGH wies die Klagen mit Urteilen vom <strong style={{color:C.txt}}>4. Oktober 2024</strong> (verbundene Rechtssachen C-541/20 bis C-555/20) jedoch weitgehend ab und bestätigte die Rückkehrpflicht als verhältnismäßiges Mittel gegen Briefkastenfirmen.
            </p>
            <h3 style={h3s}>Für die Niederlassungskriterien</h3>
            <p style={p}>
              Artikel 1 Nummer 1 VO 2020/1055 schärft die Anforderungen an eine „tatsächliche und dauerhafte Niederlassung“ nach Art. 5 VO 1071/2009. Unternehmen müssen u.a. Räumlichkeiten mit Geschäftsunterlagen, einen verantwortlichen Verkehrsleiter und eine Flotte nachweisen, die ihren Schwerpunkt im Mitgliedstaat der Lizenz hat. Reine Postadressen reichen seit 2022 nicht mehr aus.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>⚖ Kritik und Diskussion zur Rückkehrpflicht</h2>
            <p style={p}>
              Kritiker sehen in der Rückkehrpflicht des Fahrzeugs einen Eingriff in die Dienstleistungs- und Warenverkehrsfreiheit sowie eine Belastung für das Klima. Eine Studie des wissenschaftlichen Dienstes der Europäischen Kommission (Joint Research Centre, Report JRC122 733) schätzte Mehrfahrten von bis zu 2,9 Milliarden Kilometern pro Jahr sowie zusätzliche CO₂-Emissionen im mittleren einstelligen Millionenbereich. Befürworter – allen voran Frankreich, Deutschland und die gewerkschaftsnahe ETF – verweisen hingegen auf faire Wettbewerbsbedingungen und den sozialen Schutz der Fahrer.
            </p>
            <p style={p}>
              Der Europäische Gerichtshof hat in seinem Grundsatzurteil vom 4. Oktober 2024 klargestellt, dass die Rückkehrpflicht ein geeignetes Mittel ist, um den realen Sitz eines Unternehmens mit der Lizenz in Einklang zu bringen. Eine separate Folgenabschätzung durch die Kommission ist nach Artikel 2 VO 2020/1055 jedoch fortlaufend vorgeschrieben; sollten sich signifikante Umweltnachteile zeigen, kann das Paket in Zukunft nachjustiert werden.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>📊 Alt vs. Neu – der kompakte Vergleich</h2>
            <table className="sub-tbl">
              <thead><tr><th>Regel</th><th>Vor 08/2020</th><th>Seit Mobilitätspaket</th></tr></thead>
              <tbody>
                <tr><td>Wochenruhe im Fahrzeug</td><td>Geduldet, uneinheitlich</td><td>Verboten, Bußgeld bis 1.500 €</td></tr>
                <tr><td>Rückkehr des Fahrers</td><td>Keine klare Frist</td><td>Alle 4 Wochen (3 bei 2× verkürzt)</td></tr>
                <tr><td>Rückkehr des Fahrzeugs</td><td>Nicht geregelt</td><td>Alle 8 Wochen zur Niederlassung</td></tr>
                <tr><td>Kabotage-Abkühlzeit</td><td>Nicht vorhanden</td><td>4 Tage nach 3 Fahrten</td></tr>
                <tr><td>Entsenderegeln</td><td>Umstritten, nationale Regeln</td><td>RL 2020/1057, IMI-Meldung</td></tr>
                <tr><td>VO 561/2006 &gt; 2,5 t international</td><td>Nicht erfasst</td><td>Erfasst seit 21.05.2022</td></tr>
                <tr><td>Tachograph</td><td>Analog / digital / Smart V1</td><td>Smart V2 Pflicht bis 08/2025</td></tr>
                <tr><td>Niederlassungskriterien</td><td>Lose Auslegung</td><td>Nachweis realer Geschäftstätigkeit</td></tr>
              </tbody>
            </table>
          </section>

          <section style={card}>
            <h2 style={h2s}>🧭 Fazit für die Praxis 2026</h2>
            <p style={p}>
              Nach fast sechs Jahren ist das Mobilitätspaket I vollständig ausgerollt. Wer im grenzüberschreitenden Güterverkehr unterwegs ist, muss heute drei Dinge fest im Blick haben: die <span style={accent}>Rückkehrfristen</span> von Fahrer (4 Wochen) und Fahrzeug (8 Wochen), die <span style={accent}>Kabotage-Abkühlphase</span> von vier Tagen und die <span style={accent}>IMI-Meldung</span> jeder Entsendung. Der Smart Tachograph V2 erfasst diese Ereignisse automatisch – wer versucht zu tricksen, wird durch die Auswertung der letzten 56 Tage bei der nächsten Kontrolle identifiziert.
            </p>
            <p style={p}>
              Für Fahrer bedeuten die Regeln mehr Schutz, weniger Nächte im Führerhaus und planbare Heimfahrten. Für Speditionen heißt es: Planung, Dokumentation und ein gutes Telematiksystem sind entscheidend, um Bußgelder zu vermeiden. Wer Lenk-, Pausen- und Ruhezeiten systematisch berechnet, bleibt rechtssicher und wirtschaftlich konkurrenzfähig.
            </p>
          </section>

          <div style={{...card,background:`linear-gradient(135deg,rgba(240,136,62,0.08),${C.surface})`,borderColor:'rgba(240,136,62,0.2)',textAlign:'center'}}>
            <div style={{fontSize:32,marginBottom:12}}>🚛</div>
            <h2 style={{...h2s,textAlign:'center'}}>Mobilitätspaket-konform planen</h2>
            <p style={{...p,textAlign:'center'}}>Unser kostenloser Rechner berücksichtigt alle Regeln des Mobilitätspakets I – inklusive Rückkehrfristen, Kabotage und verkürzter Wochenruhen. Ohne Anmeldung, ohne Werbung für Dritte.</p>
            <a href="/" style={{display:'inline-block',background:C.acc,color:'#fff',borderRadius:10,padding:'13px 28px',fontWeight:700,textDecoration:'none',fontSize:15,boxShadow:'0 4px 16px rgba(240,136,62,0.3)'}}>
              → Zum Lenkzeitrechner
            </a>
          </div>

          <footer style={{display:'flex',justifyContent:'center',gap:16,padding:'16px 0',fontSize:12,color:C.dim,borderTop:`1px solid ${C.border}`,flexWrap:'wrap'}}>
            <a href="/lkw-lenkzeiten" style={{color:C.dim,textDecoration:'none'}}>Lenkzeiten</a>
            <a href="/pausenrechner" style={{color:C.dim,textDecoration:'none'}}>Pausenrechner</a>
            <a href="/ruhezeiten" style={{color:C.dim,textDecoration:'none'}}>Ruhezeiten</a>
            <a href="/bussgeldkatalog" style={{color:C.dim,textDecoration:'none'}}>Bußgelder</a>
            <a href="/digitaler-tachograph" style={{color:C.dim,textDecoration:'none'}}>Tachograph</a>
            <a href="/mobilitaetspaket" style={{color:C.acc,textDecoration:'none'}}>Mobilitätspaket</a>
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
