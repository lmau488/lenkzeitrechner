export const metadata = {
  title: 'LenkzeitRechner – Lenk- und Ruhezeiten kostenlos berechnen | EU VO 561/2006',
  description: 'Kostenloser Online-Rechner für Lenk- und Ruhezeiten nach EU-Verordnung 561/2006. Pflichtpausen, Tagesruhezeit, Wochenlenkzeit berechnen. Für LKW-Fahrer und Disponenten.',
  keywords: 'Lenkzeiten Rechner, Ruhezeiten Rechner, LKW Pausenrechner, EU VO 561/2006, Fahrtunterbrechung berechnen, Lenkzeitrechner online, Tageslenkzeit, Wochenlenkzeit, Doppelwoche 90 Stunden',
  openGraph: {
    title: 'LenkzeitRechner – Lenk- und Ruhezeiten kostenlos berechnen',
    description: 'Pflichtpausen, Ruhezeiten und Wochenlenkzeit nach EU VO 561/2006 berechnen. Kostenlos, ohne Anmeldung.',
    type: 'website',
    locale: 'de_DE',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://lenkzeitrechner.de',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet" />
        {/* 
          ADSENSE: Ersetze den Wert ca-pub-XXXXXXX mit deiner echten AdSense Publisher-ID
          sobald dein AdSense Account genehmigt ist.
          Bis dahin kann dieses Script auskommentiert bleiben.
        */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script> */}
      </head>
      <body style={{ margin: 0, padding: 0, background: '#f4f5f7' }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "LenkzeitRechner.de",
          "url": "https://lenkzeitrechner.de",
          "description": "Kostenloser Online-Rechner für Lenk- und Ruhezeiten nach EU-Verordnung 561/2006. Für LKW-Fahrer und Disponenten.",
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "All",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
          "inLanguage": "de-DE"
        })}}/>
        {children}
      </body>
    </html>
  );
}
