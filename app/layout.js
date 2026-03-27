export const metadata = {
  title: 'LenkzeitRechner – Lenk- und Ruhezeiten kostenlos berechnen | EU VO 561/2006',
  description: 'Kostenloser Online-Rechner für Lenk- und Ruhezeiten nach EU-Verordnung 561/2006. Pflichtpausen, Tagesruhezeit, Wochenlenkzeit berechnen. Für LKW-Fahrer und Disponenten. Driving time calculator / Calculator timp condus / Kalkulator czasu jazdy',
  keywords: [
    // Deutsch
    'Lenkzeiten Rechner, Ruhezeiten Rechner, LKW Pausenrechner, EU VO 561/2006, Lenkzeitrechner, Tageslenkzeit, Wochenlenkzeit, Fahrtunterbrechung',
    // English
    'driving time calculator, rest time calculator, truck break calculator, EU regulation 561/2006, driving hours calculator',
    // Română
    'calculator timp de conducere, calculator timp de odihna, calculator sofer camion, regulament UE 561/2006',
    // Polski
    'kalkulator czasu jazdy, kalkulator czasu odpoczynku, przerwy kierowcy, rozporządzenie UE 561/2006',
    // Čeština
    'kalkulátor doby řízení, kalkulátor doby odpočinku, přestávky řidiče, nařízení EU 561/2006',
    // Български
    'калкулатор време на шофиране, калкулатор почивка шофьор, регламент ЕС 561/2006',
    // Русский
    'калькулятор времени вождения, калькулятор времени отдыха, регламент ЕС 561/2006',
  ].join(', '),
  openGraph: {
    title: 'LenkzeitRechner – Driving Time Calculator | EU VO 561/2006',
    description: 'Free driving & rest time calculator for truck drivers. EU Regulation 561/2006. Available in DE, EN, RO, PL, CZ, BG, RU.',
    type: 'website',
    locale: 'de_DE',
    alternateLocale: ['en_US', 'ro_RO', 'pl_PL', 'cs_CZ', 'bg_BG', 'ru_RU'],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://lenkzeitrechner.de',
    languages: {
      'de': 'https://lenkzeitrechner.de',
      'en': 'https://lenkzeitrechner.de',
      'ro': 'https://lenkzeitrechner.de',
      'pl': 'https://lenkzeitrechner.de',
      'cs': 'https://lenkzeitrechner.de',
      'bg': 'https://lenkzeitrechner.de',
      'ru': 'https://lenkzeitrechner.de',
      'x-default': 'https://lenkzeitrechner.de',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* hreflang – tells Google this page is available in multiple languages */}
        <link rel="alternate" hrefLang="de" href="https://lenkzeitrechner.de" />
        <link rel="alternate" hrefLang="en" href="https://lenkzeitrechner.de" />
        <link rel="alternate" hrefLang="ro" href="https://lenkzeitrechner.de" />
        <link rel="alternate" hrefLang="pl" href="https://lenkzeitrechner.de" />
        <link rel="alternate" hrefLang="cs" href="https://lenkzeitrechner.de" />
        <link rel="alternate" hrefLang="bg" href="https://lenkzeitrechner.de" />
        <link rel="alternate" hrefLang="ru" href="https://lenkzeitrechner.de" />
        <link rel="alternate" hrefLang="x-default" href="https://lenkzeitrechner.de" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5227565874576366" crossOrigin="anonymous"></script>
      </head>
      <body style={{ margin: 0, padding: 0, background: '#f4f5f7' }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "LenkzeitRechner.de",
          "url": "https://lenkzeitrechner.de",
          "description": "Free driving & rest time calculator for truck drivers. EU Regulation 561/2006.",
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "All",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
          "availableLanguage": ["de","en","ro","pl","cs","bg","ru"],
          "inLanguage": ["de","en","ro","pl","cs","bg","ru"]
        })}}/>
        {children}
      </body>
    </html>
  );
}
