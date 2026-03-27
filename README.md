# LenkzeitRechner.de

Kostenloser Online-Rechner für Lenk- und Ruhezeiten nach EU VO 561/2006.

## Lokale Entwicklung

```bash
# 1. Node.js installieren (https://nodejs.org – LTS Version)

# 2. Abhängigkeiten installieren
npm install

# 3. Entwicklungsserver starten
npm run dev

# 4. Im Browser öffnen: http://localhost:3000
```

## Deployment auf Vercel

1. GitHub Repository erstellen
2. Code pushen (siehe unten)
3. vercel.com → "Add New Project" → GitHub repo wählen → Deploy

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/DEIN_USERNAME/lenkzeitrechner.git
git push -u origin main
```

## Vor dem Go-Live

- [ ] Impressum: Eigene Daten eintragen in `app/impressum/page.js`
- [ ] Datenschutz: Eigene Daten eintragen in `app/datenschutz/page.js`
- [ ] Domain kaufen und in Vercel verbinden
- [ ] Sitemap URL in `public/sitemap.xml` anpassen
- [ ] robots.txt URL anpassen
- [ ] layout.js: Canonical URL anpassen
- [ ] Google Search Console einrichten
- [ ] Google AdSense beantragen (erst nach Go-Live)

## Technologie

- Next.js 14 (App Router)
- React 18
- Vercel (Free Tier)
- Keine Datenbank, kein Backend – alles clientseitig
