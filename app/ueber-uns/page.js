export const metadata = {
  title: 'Über uns – Wer steht hinter LenkzeitRechner.de?',
  description: 'Erfahren Sie, wer LenkzeitRechner.de betreibt, auf welchen Rechtsquellen der Rechner basiert und wie wir die Inhalte aktuell halten. Transparenz, Methodik und Kontakt.',
  keywords: 'Über uns LenkzeitRechner, Autor Lenkzeitrechner, Methodik Lenkzeiten, Quellen EU VO 561/2006',
  alternates: { canonical: 'https://lenkzeitrechner.de/ueber-uns' },
  openGraph: {
    title: 'Über uns – LenkzeitRechner.de',
    description: 'Wer steht hinter LenkzeitRechner.de? Unsere Methodik, Quellen und redaktionelle Grundsätze.',
    url: 'https://lenkzeitrechner.de/ueber-uns',
    images: [{ url: 'https://lenkzeitrechner.de/og-image.svg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Über uns – LenkzeitRechner.de', description: 'Wer steht hinter LenkzeitRechner.de? Methodik und Quellen transparent erklärt.' },
};

const C = {
  bg:'#13151f',surface:'#1c1f2e',surface2:'#242738',border:'rgba(255,255,255,0.07)',
  acc:'#f0883e',txt:'#ffffff',muted:'#94a3b8',dim:'#64748b',
  navBg:'rgba(19,21,31,0.85)',dotGrid:'rgba(255,255,255,0.06)',
  success:'#22c55e',error:'#ef4444',
};

export default function UeberUns() {
  const card = {background:C.surface,border:`1px solid ${C.border}`,borderRadius:18,padding:'28px 32px',marginBottom:20};
  const h2s = {fontSize:20,fontWeight:700,color:C.acc,marginBottom:12,marginTop:0};
  const h3s = {fontSize:16,fontWeight:700,color:C.txt,marginBottom:8,marginTop:16};
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
              <a href="/pausenrechner" className="nav-link">Pausenrechner</a>
              <a href="/ueber-uns" className="nav-link active">Über uns</a>
            </div>
          </div>
        </nav>

        <div className="wrap" style={{maxWidth:820,margin:'0 auto',padding:'40px 24px 60px'}}>
          <div style={{fontSize:13,color:C.dim,marginBottom:20}}>
            <a href="/" style={{color:C.acc,textDecoration:'none'}}>LenkzeitRechner.de</a>{' → '}Über uns
          </div>

          <div style={card}>
            <h1 style={{fontSize:32,fontWeight:800,color:C.txt,marginBottom:8,lineHeight:1.2}}>Über LenkzeitRechner.de</h1>
            <p style={{...p,fontSize:17,color:C.txt,marginBottom:20}}>
              LenkzeitRechner.de ist ein kostenloses Online-Werkzeug für Berufskraftfahrer, Disponenten und Fuhrparkverantwortliche, das die Berechnung von Lenk- und Ruhezeiten nach <span style={accent}>EU-Verordnung (EG) Nr. 561/2006</span> automatisiert. Die Website wurde aus der Praxis heraus entwickelt — schnell, mehrsprachig und ohne Anmeldung.
            </p>
            <p style={p}>
              Unser Ziel ist es, komplexe EU-Vorschriften zur Arbeitszeit im Straßengüter- und Personenverkehr verständlich aufzubereiten. Der Rechner selbst bildet die wichtigsten Artikel der Verordnung direkt ab — ergänzt durch ausführliche redaktionelle Beiträge zu Lenkzeiten, Pausen, Ruhezeiten, Bußgeldern und dem digitalen Tachographen.
            </p>
          </div>

          <section style={card}>
            <h2 style={h2s}>👤 Verantwortlich für Inhalt und Betrieb</h2>
            <div style={highlight}>
              <strong style={{color:C.txt}}>Luis Mauermaier</strong><br/>
              Wolnzacher Weg 9a, 85283 Wolnzach, Deutschland<br/>
              E-Mail: <span style={accent}>luis.mauermaier@proton.me</span>
            </div>
            <p style={p}>
              Alle Texte, Berechnungslogiken und Tabellen auf dieser Website werden redaktionell gepflegt und bei relevanten Änderungen der EU-Verordnung 561/2006, der Fahrpersonalverordnung (FPersV) oder des Bußgeldkatalogs (BKatV) überarbeitet. Die vollständigen Kontaktdaten sowie die gesetzlich vorgeschriebenen Angaben nach § 5 TMG finden Sie im <a href="/impressum" style={{color:C.acc,textDecoration:'underline'}}>Impressum</a>.
            </p>
            <p style={p}>
              Rückmeldungen aus der Praxis sind ausdrücklich willkommen: Wenn Ihnen ein Fehler auffällt, Sie eine Rechenlogik anders einschätzen oder eine Ergänzung wünschen, melden Sie sich per E-Mail. Hinweise aus dem Berufsalltag fließen regelmäßig in Aktualisierungen ein.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>📚 Methodik: Woher stammen die Inhalte?</h2>
            <p style={p}>
              Grundlage aller Berechnungen und redaktionellen Beiträge sind ausschließlich öffentlich zugängliche, rechtsverbindliche Primärquellen. Wir zitieren keine Sekundärliteratur, ohne die Originalverordnung gegengeprüft zu haben. Die wichtigsten Quellen im Überblick:
            </p>
            <table className="sub-tbl">
              <thead><tr><th>Quelle</th><th>Inhalt</th><th>Herausgeber</th></tr></thead>
              <tbody>
                <tr><td style={{color:C.txt}}>VO (EG) Nr. 561/2006</td><td style={{color:C.muted}}>Lenk- und Ruhezeiten im Straßenverkehr</td><td style={{color:C.dim}}>EU-Parlament & Rat</td></tr>
                <tr><td style={{color:C.txt}}>VO (EU) 2020/1054</td><td style={{color:C.muted}}>Mobilitätspaket I — Änderungen zur 561/2006</td><td style={{color:C.dim}}>EU-Parlament & Rat</td></tr>
                <tr><td style={{color:C.txt}}>VO (EU) 165/2014</td><td style={{color:C.muted}}>Fahrtenschreiber (Tachograph)</td><td style={{color:C.dim}}>EU-Parlament & Rat</td></tr>
                <tr><td style={{color:C.txt}}>FPersG</td><td style={{color:C.muted}}>Fahrpersonalgesetz (Deutschland)</td><td style={{color:C.dim}}>Bundestag</td></tr>
                <tr><td style={{color:C.txt}}>FPersV</td><td style={{color:C.muted}}>Fahrpersonalverordnung (Deutschland)</td><td style={{color:C.dim}}>BMDV</td></tr>
                <tr><td style={{color:C.txt}}>BKatV</td><td style={{color:C.muted}}>Bußgeldkatalog-Verordnung</td><td style={{color:C.dim}}>BMDV</td></tr>
                <tr><td style={{color:C.txt}}>AETR</td><td style={{color:C.muted}}>Europäisches Übereinkommen für Drittstaaten-Fahrten</td><td style={{color:C.dim}}>UNECE</td></tr>
              </tbody>
            </table>
            <p style={{...p,marginTop:16}}>
              Jede Regel, die im Rechner oder in einem Artikel erwähnt wird, ist mit einem konkreten Artikelbezug versehen — zum Beispiel „Art. 7 VO 561/2006" für die Pflichtpause nach 4,5 Stunden. So können Leserinnen und Leser unsere Aussagen jederzeit direkt in der Originalquelle nachprüfen.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>🧮 Wie funktioniert der Rechner technisch?</h2>
            <p style={p}>
              Der LenkzeitRechner ist eine reine Client-seitige Anwendung: Alle Berechnungen laufen direkt im Browser ab, <strong style={{color:C.txt}}>es werden keine Eingabedaten an einen Server übertragen</strong>. Das hat zwei Vorteile:
            </p>
            <ul style={{...p,paddingLeft:20}}>
              <li><strong style={{color:C.txt}}>Datenschutz:</strong> Start- und Lenkzeiten, Wochenstände oder persönliche Dispositionsdaten verlassen niemals Ihr Gerät.</li>
              <li><strong style={{color:C.txt}}>Geschwindigkeit:</strong> Ergebnisse erscheinen in Sekundenbruchteilen, auch offline (nach dem ersten Aufruf).</li>
            </ul>
            <p style={p}>
              Die Berechnungslogik spiegelt die EU-Verordnung 1:1: maximale Tageslenkzeit von 9 Stunden mit bis zu zweimal wöchentlicher Verlängerung auf 10 Stunden (Art. 6 Abs. 1), Pflichtpause von 45 Minuten nach spätestens 4,5 Stunden Lenkzeit — auch aufteilbar in 15 + 30 Minuten (Art. 7), tägliche Ruhezeit von 11 Stunden mit der Option auf drei verkürzte Ruhezeiten à 9 Stunden (Art. 8 Abs. 2), wöchentliche Lenkzeit von höchstens 56 Stunden sowie eine Doppelwochengrenze von 90 Stunden (Art. 6 Abs. 2 und 3).
            </p>
            <p style={p}>
              Wichtig: Das Ergebnis ist eine <strong style={{color:C.txt}}>unverbindliche Planungshilfe</strong>. Rechtsverbindlich sind allein der digitale Fahrtenschreiber und die Aufzeichnungen auf der Fahrerkarte. Der Rechner ersetzt weder den Tachographen noch eine qualifizierte Rechts- oder Unternehmensberatung.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>🎯 Zielgruppe</h2>
            <p style={p}>
              Unsere Inhalte richten sich an alle, die im Alltag mit Lenk- und Ruhezeiten zu tun haben:
            </p>
            <table className="sub-tbl">
              <thead><tr><th>Zielgruppe</th><th>Nutzen</th></tr></thead>
              <tbody>
                <tr><td style={{color:C.txt}}>Berufskraftfahrer (C, CE, D)</td><td style={{color:C.muted}}>Tagesplanung, Pausen- und Ruhezeiten-Check vor Tourbeginn</td></tr>
                <tr><td style={{color:C.txt}}>Disponenten & Fuhrparkleiter</td><td style={{color:C.muted}}>Tourenplanung unter Einhaltung der Wochen- und Doppelwochengrenzen</td></tr>
                <tr><td style={{color:C.txt}}>Fahrschüler & Auszubildende</td><td style={{color:C.muted}}>Verständliche Aufbereitung der Prüfungsthemen Modul 1 BKrFQG</td></tr>
                <tr><td style={{color:C.txt}}>Spediteure & Inhaber kleiner Flotten</td><td style={{color:C.muted}}>Überblick über Bußgeldrisiken für Unternehmer</td></tr>
                <tr><td style={{color:C.txt}}>Juristen & Gewerkschafter</td><td style={{color:C.muted}}>Schnellreferenz auf konkrete Artikel der VO 561/2006</td></tr>
              </tbody>
            </table>
          </section>

          <section style={card}>
            <h2 style={h2s}>🌍 Mehrsprachigkeit: warum sieben Sprachen?</h2>
            <p style={p}>
              Der europäische Güterverkehr ist vielsprachig. Viele Fahrer in deutschen Flotten kommen aus Polen, Rumänien, Bulgarien, Tschechien oder haben russische Sprachkenntnisse. Deshalb bieten wir die Rechner-Oberfläche in sieben Sprachen an: Deutsch, Englisch, Rumänisch, Polnisch, Tschechisch, Bulgarisch und Russisch. Alle Texte wurden muttersprachlich gegengelesen und fachterminologisch abgestimmt — Begriffe wie „Pflichtpause", „Tachograph" oder „Doppelwoche" haben in jeder Sprache eine eindeutige Entsprechung.
            </p>
            <p style={p}>
              Die Rechtsbegriffe selbst bleiben sprachunabhängig: Die Verordnung 561/2006 gilt identisch in allen EU-Mitgliedstaaten sowie — über das AETR-Abkommen — auch bei Fahrten in Drittstaaten wie Norwegen, der Schweiz, der Türkei oder Staaten der ehemaligen GUS.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>♻️ Wann werden Inhalte aktualisiert?</h2>
            <p style={p}>
              Wir überprüfen die Inhalte in folgenden Fällen:
            </p>
            <ul style={{...p,paddingLeft:20}}>
              <li><strong style={{color:C.txt}}>Mindestens halbjährlich</strong> — routinemäßige Sichtung aller Artikel auf rechtliche Aktualität.</li>
              <li><strong style={{color:C.txt}}>Unverzüglich bei Gesetzesänderungen</strong> — neue EU-Durchführungsverordnungen, Anpassungen am deutschen Bußgeldkatalog, BAG-Urteile zur Auslegung.</li>
              <li><strong style={{color:C.txt}}>Bei Hinweisen von Lesern</strong> — Meldungen per E-Mail werden innerhalb weniger Tage geprüft und, wenn berechtigt, eingearbeitet.</li>
            </ul>
            <p style={p}>
              Das Datum der letzten Aktualisierung und die verwendeten Primärquellen sind am Ende jedes Artikels sichtbar. Falls Sie zitieren möchten: Die Rechtsquellen unter <a href="https://eur-lex.europa.eu" target="_blank" rel="noopener noreferrer" style={{color:C.acc,textDecoration:'underline'}}>eur-lex.europa.eu</a> und <a href="https://www.gesetze-im-internet.de/fpersv/" target="_blank" rel="noopener noreferrer" style={{color:C.acc,textDecoration:'underline'}}>gesetze-im-internet.de/fpersv</a> sind der verbindliche Stand.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>💶 Finanzierung und Unabhängigkeit</h2>
            <p style={p}>
              LenkzeitRechner.de ist kostenlos nutzbar und ohne Registrierung erreichbar. Der Betrieb (Hosting, Domain, laufende Pflege) wird durch <strong style={{color:C.txt}}>kontextbezogene Google-AdSense-Werbung</strong> finanziert, die klar als Anzeige gekennzeichnet ist. Redaktionelle Inhalte und die Rechenlogik sind vollständig unabhängig von werbetreibenden Unternehmen — wir empfehlen keine Produkte, erhalten keine Affiliate-Provisionen und bevorzugen keine Hersteller von Tachographen, Telematik- oder Speditionssoftware.
            </p>
            <p style={p}>
              Sollten wir künftig konkrete Produkte empfehlen, wird eine solche Empfehlung stets transparent als solche gekennzeichnet und mit nachvollziehbaren Gründen versehen.
            </p>
          </section>

          <section style={card}>
            <h2 style={h2s}>⚖️ Redaktionelle Grundsätze</h2>
            <ul style={{...p,paddingLeft:20,lineHeight:2}}>
              <li><strong style={{color:C.txt}}>Primärquellen vor Sekundärliteratur.</strong> Jede konkrete Zahl (Stundenzahl, Bußgeldhöhe, Fristen) wird mit einem Artikel- oder Paragraphenverweis belegt.</li>
              <li><strong style={{color:C.txt}}>Keine Rechtsberatung.</strong> Wir geben eine qualifizierte redaktionelle Einordnung, ersetzen aber keine anwaltliche Beratung im Einzelfall.</li>
              <li><strong style={{color:C.txt}}>Fehlerkultur.</strong> Korrekturen werden offen sichtbar gemacht; stille Nachbesserungen an sensiblen Passagen vermeiden wir.</li>
              <li><strong style={{color:C.txt}}>Barrierefreiheit.</strong> Die Website funktioniert ohne Tracking-Cookies für die Grundfunktion, mit Tastaturnavigation und semantischem HTML.</li>
              <li><strong style={{color:C.txt}}>Mobile first.</strong> Fahrer nutzen den Rechner oft am Rastplatz auf dem Smartphone — die Darstellung ist dafür optimiert.</li>
            </ul>
          </section>

          <section style={card}>
            <h2 style={h2s}>📬 Kontakt, Hinweise und Kritik</h2>
            <p style={p}>
              Wir freuen uns über jede Rückmeldung — ob Lob, konkrete Verbesserungsvorschläge, fachliche Korrekturen oder die Meldung eines Darstellungsfehlers auf einem bestimmten Gerät. Schreiben Sie an <span style={accent}>luis.mauermaier@proton.me</span>. In der Regel antworten wir innerhalb von zwei bis drei Werktagen.
            </p>
            <p style={p}>
              Für Presseanfragen, wissenschaftliche Kooperationen (zum Beispiel zu Arbeitszeiten im Güterverkehr) oder Anfragen von Berufsschulen und BKrFQG-Weiterbildungsstätten nutzen Sie bitte dieselbe E-Mail-Adresse.
            </p>
          </section>

          <div style={{...card,background:`linear-gradient(135deg,rgba(240,136,62,0.08),${C.surface})`,borderColor:'rgba(240,136,62,0.2)',textAlign:'center'}}>
            <div style={{fontSize:32,marginBottom:12}}>🚛</div>
            <h2 style={{...h2s,textAlign:'center'}}>Direkt zum Rechner</h2>
            <p style={{...p,textAlign:'center'}}>Lenk- und Ruhezeiten in wenigen Sekunden berechnen — kostenlos, ohne Anmeldung, in 7 Sprachen.</p>
            <a href="/" style={{display:'inline-block',background:C.acc,color:'#fff',borderRadius:10,padding:'13px 28px',fontWeight:700,textDecoration:'none',fontSize:15,boxShadow:'0 4px 16px rgba(240,136,62,0.3)'}}>
              → Zum kostenlosen Lenkzeitrechner
            </a>
          </div>

          <footer style={{display:'flex',justifyContent:'center',gap:16,padding:'16px 0',fontSize:12,color:C.dim,borderTop:`1px solid ${C.border}`,flexWrap:'wrap'}}>
            <a href="/lkw-lenkzeiten" style={{color:C.dim,textDecoration:'none'}}>Lenkzeiten</a>
            <a href="/pausenrechner" style={{color:C.dim,textDecoration:'none'}}>Pausenrechner</a>
            <a href="/ruhezeiten" style={{color:C.dim,textDecoration:'none'}}>Ruhezeiten</a>
            <a href="/bussgeldkatalog" style={{color:C.dim,textDecoration:'none'}}>Bußgelder</a>
            <a href="/digitaler-tachograph" style={{color:C.dim,textDecoration:'none'}}>Tachograph</a>
            <a href="/mobilitaetspaket" style={{color:C.dim,textDecoration:'none'}}>Mobilitätspaket</a>
            <a href="/ueber-uns" style={{color:C.acc,textDecoration:'none'}}>Über uns</a>
            <a href="/impressum" style={{color:C.dim,textDecoration:'none'}}>Impressum</a>
            <a href="/datenschutz" style={{color:C.dim,textDecoration:'none'}}>Datenschutz</a>
            <span>© 2026 LenkzeitRechner.de</span>
          </footer>
        </div>
      </div>
    </>
  );
}
