export const metadata = {
  title: 'LenkzeitRechner – Lenk- und Ruhezeiten kostenlos berechnen | EU VO 561/2006',
  description: 'Kostenloser Online-Rechner für Lenk- und Ruhezeiten nach EU-Verordnung 561/2006. Pflichtpausen, Tagesruhezeit, Wochenlenkzeit berechnen. Für LKW-Fahrer und Disponenten.',
  keywords: [
    'Lenkzeiten Rechner, Ruhezeiten Rechner, LKW Pausenrechner, EU VO 561/2006, Lenkzeitrechner, Tageslenkzeit, Wochenlenkzeit, Fahrtunterbrechung',
    'driving time calculator, rest time calculator, truck break calculator, EU regulation 561/2006',
    'calculator timp de conducere, calculator timp de odihna, regulament UE 561/2006',
    'kalkulator czasu jazdy, kalkulator czasu odpoczynku, rozporządzenie UE 561/2006',
    'kalkulátor doby řízení, kalkulátor doby odpočinku, nařízení EU 561/2006',
    'калкулатор време на шофиране, регламент ЕС 561/2006',
    'калькулятор времени вождения, регламент ЕС 561/2006',
  ].join(', '),
  openGraph: {
    title: 'LenkzeitRechner – Lenk- und Ruhezeiten kostenlos berechnen',
    description: 'Kostenloser Online-Rechner für LKW Lenk- und Ruhezeiten nach EU VO 561/2006. Pflichtpausen, Tagesplan, Bußgelder — in 7 Sprachen.',
    type: 'website',
    locale: 'de_DE',
    alternateLocale: ['en_US', 'ro_RO', 'pl_PL', 'cs_CZ', 'bg_BG', 'ru_RU'],
    url: 'https://lenkzeitrechner.de',
    siteName: 'LenkzeitRechner.de',
    images: [{
      url: 'https://lenkzeitrechner.de/og-image.svg',
      width: 1200,
      height: 630,
      alt: 'LenkzeitRechner.de – Lenk- und Ruhezeiten nach EU VO 561/2006',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LenkzeitRechner – Lenk- und Ruhezeiten kostenlos berechnen',
    description: 'Kostenloser Online-Rechner für LKW Lenk- und Ruhezeiten nach EU VO 561/2006. In 7 Sprachen verfügbar.',
    images: ['https://lenkzeitrechner.de/og-image.svg'],
  },
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
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
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
  other: {
    'google-site-verification': '',
    'msvalidate.01': '',
  },
};

export default function RootLayout({ children }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Wie lange darf ein LKW-Fahrer täglich fahren?", "acceptedAnswer": { "@type": "Answer", "text": "Maximal 9 Stunden pro Tag. An bis zu zwei Tagen pro Woche darf die Lenkzeit auf 10 Stunden verlängert werden (Art. 6 Abs. 1 VO 561/2006)." }},
      { "@type": "Question", "name": "Wann muss eine Pause eingelegt werden?", "acceptedAnswer": { "@type": "Answer", "text": "Nach spätestens 4,5 Stunden ununterbrochener Lenkzeit ist eine Pause von mindestens 45 Minuten Pflicht. Alternativ: 15 Minuten, dann 30 Minuten (Art. 7 VO 561/2006)." }},
      { "@type": "Question", "name": "Wie lange ist die tägliche Ruhezeit?", "acceptedAnswer": { "@type": "Answer", "text": "Mindestens 11 Stunden. Kann auf 9 Stunden verkürzt werden, maximal 3-mal zwischen zwei Wochenruhezeiten (Art. 8 VO 561/2006)." }},
      { "@type": "Question", "name": "Was ist die maximale Wochenlenkzeit?", "acceptedAnswer": { "@type": "Answer", "text": "56 Stunden pro Woche, maximal 90 Stunden in zwei aufeinanderfolgenden Wochen (Art. 6 Abs. 2–3 VO 561/2006)." }},
      { "@type": "Question", "name": "Darf die Wochenruhe im LKW verbracht werden?", "acceptedAnswer": { "@type": "Answer", "text": "Nein. Reguläre Wochenruhe (mind. 45h) nicht im Fahrzeug. Reduzierte Wochenruhe (24h) ist im LKW erlaubt (Art. 8 Abs. 8 VO 561/2006)." }},
      { "@type": "Question", "name": "Gilt das auch für Kleinbusse?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, für Fahrzeuge zur Personenbeförderung mit mehr als 9 Sitzplätzen sowie Güterfahrzeuge über 3,5t gilt EU VO 561/2006." }},
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "LenkzeitRechner.de",
    "url": "https://lenkzeitrechner.de",
    "description": "Kostenloser Online-Rechner für Lenk- und Ruhezeiten nach EU-Verordnung 561/2006.",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "All",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
    "availableLanguage": ["de","en","ro","pl","cs","bg","ru"],
    "inLanguage": ["de","en","ro","pl","cs","bg","ru"],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://lenkzeitrechner.de" },
      { "@type": "ListItem", "position": 2, "name": "LKW Lenkzeiten", "item": "https://lenkzeitrechner.de/lkw-lenkzeiten" },
      { "@type": "ListItem", "position": 3, "name": "Pausenrechner", "item": "https://lenkzeitrechner.de/pausenrechner" },
    ]
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LenkzeitRechner.de",
    "url": "https://lenkzeitrechner.de",
    "logo": "https://lenkzeitrechner.de/favicon.svg",
    "sameAs": [],
  };

  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f0883e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
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
      <body style={{ margin: 0, padding: 0 }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}/>
        {children}
      </body>
    </html>
  );
}
