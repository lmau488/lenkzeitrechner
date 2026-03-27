"use client";
import { useState, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════
   Translations
   ═══════════════════════════════════════════════════════════ */
const LANGS = {
  de: { flag:'🇩🇪', label:'DE' },
  en: { flag:'🇬🇧', label:'EN' },
  ro: { flag:'🇷🇴', label:'RO' },
  pl: { flag:'🇵🇱', label:'PL' },
  cs: { flag:'🇨🇿', label:'CZ' },
  bg: { flag:'🇧🇬', label:'BG' },
  ru: { flag:'🇷🇺', label:'RU' },
};

const T = {
  de: {
    subtitle: 'Lenk- & Ruhezeiten nach EU VO 561/2006 · Kostenlos · Ohne Anmeldung',
    rules: 'Regeln', fines: 'Bußgelder',
    quickselect: 'Schnellauswahl',
    inputs: 'Eingaben',
    startTime: 'Startzeit',
    plannedDrive: 'Geplante Fahrzeit (h)',
    drivenToday: 'Heute bereits gelenkt (h)',
    sinceBreak: 'Davon ohne Pause (h)',
    drivenWeek: 'Woche bisher (h)',
    drivenBiweek: 'Doppelwoche bisher (h)',
    extDays: '10h-Tage diese Woche',
    ext0:'0 von 2 genutzt', ext1:'1 von 2 genutzt', ext2:'2 von 2 genutzt',
    redRests: 'Verkürzte Ruhezeiten (9h)',
    red0:'0 von 3 genutzt', red1:'1 von 3 genutzt', red2:'2 von 3 genutzt', red3:'3 von 3 genutzt',
    splitBreak: 'Geteilte Pause (15 + 30 min)',
    calculate: 'BERECHNEN',
    dayPlan: 'Tagesplan',
    statDay: 'Tageslenkzeit', statWeek: 'Wochenlenkzeit', statBi: 'Doppelwoche',
    maxDay: '/ max. 9–10h', maxWeek: '/ max. 56h', maxBi: '/ max. 90h',
    rulesTitle: 'EU VO 561/2006 – Kurzübersicht',
    finesTitle: 'Bußgelder bei Verstößen',
    finesSource: 'Alle Angaben ohne Gewähr · Quelle: FPersG, BKatV, EU VO 561/2006',
    finesCol: ['Verstoß','Fahrer','Unternehmer','Rechtsgrundlage'],
    faqTitle: 'Häufige Fragen zu Lenkzeiten',
    legalTitle: 'Rechtsgrundlagen',
    disclaimer: '⚠ Unverbindliche Berechnung. Kein Ersatz für den digitalen Tachographen oder Rechtsberatung.',
    adLabel: 'Anzeige',
    presets: [
      { name:'Kurzstrecke', sub:'2h', planned:2, icon:'🏙️' },
      { name:'Halbtag', sub:'4h', planned:4, icon:'🛤️' },
      { name:'Tagestour', sub:'8h', planned:8, icon:'🚛' },
      { name:'Maximaltour', sub:'9,5h', planned:9.5, icon:'⚡' },
    ],
    rulesContent: [
      ['⏱ Tageslenkzeit','Max. 9h (2×/Woche bis 10h)'],
      ['☕ Fahrtunterbrechung','Nach 4,5h → 45 min (oder 15+30)'],
      ['📅 Wochenlenkzeit','Max. 56h'],
      ['📅 Doppelwoche','Max. 90h'],
      ['🛏 Tagesruhezeit','11h (3× verkürzt auf 9h)'],
      ['🛏 Geteilte Ruhezeit','3h + 9h = 12h gesamt möglich'],
      ['🏠 Wochenruhezeit','45h (jede 2. Woche mind. 24h)'],
      ['🚫 Nicht im LKW!','Reguläre Wochenruhe nicht im Fahrzeug'],
    ],
    faq: [
      { q:'Wie lange darf ein LKW-Fahrer täglich fahren?', a:'Maximal 9 Stunden pro Tag. An bis zu zwei Tagen pro Woche darf die Lenkzeit auf 10 Stunden verlängert werden (Art. 6 Abs. 1 VO 561/2006).' },
      { q:'Wann muss eine Pause eingelegt werden?', a:'Nach spätestens 4,5 Stunden ununterbrochener Lenkzeit ist eine Pause von mindestens 45 Minuten Pflicht. Alternativ: 15 Minuten, dann 30 Minuten (Art. 7 VO 561/2006).' },
      { q:'Wie lange ist die tägliche Ruhezeit?', a:'Mindestens 11 Stunden. Kann auf 9 Stunden verkürzt werden, maximal 3-mal zwischen zwei Wochenruhezeiten (Art. 8 VO 561/2006).' },
      { q:'Was ist die maximale Wochenlenkzeit?', a:'56 Stunden pro Woche, maximal 90 Stunden in zwei aufeinanderfolgenden Wochen (Art. 6 Abs. 2–3 VO 561/2006).' },
      { q:'Darf die Wochenruhe im LKW verbracht werden?', a:'Nein. Reguläre Wochenruhe (mind. 45h) nicht im Fahrzeug. Reduzierte Wochenruhe (24h) ist im LKW erlaubt (Art. 8 Abs. 8 VO 561/2006).' },
      { q:'Gilt das auch für Kleinbusse?', a:'Ja, für Fahrzeuge zur Personenbeförderung mit mehr als 9 Sitzplätzen sowie Güterfahrzeuge über 3,5t gilt EU VO 561/2006.' },
    ],
    evLabels: { start:'Fahrtbeginn', end:'Ziel erreicht', break45:'Pause 45 min (Pflicht nach 4,5h)', break15:'Teilpause 1: 15 min', break30:'Teilpause 2: 30 min', resume:'Weiterfahrt', rest:'Tagesruhezeit beginnt (mind. ', restH:'h)', nextDrive:'Früheste nächste Fahrt möglich', limitReached:'Tageslimit erreicht' },
    warnNoMore: 'Keine weitere Lenkzeit heute möglich!',
    warnBiweek: 'Doppelwoche',
    warnOver90: '> 90h!',
    warnWeek: 'Wochenlenkzeit',
    warnOver56: '> 56h!',
    warnDayMax: 'Tageslenkzeit',
    warnOver: 'überschreitet Maximum',
    warn10NoMore: '10h-Verlängerung bereits 2× genutzt – nicht zulässig!',
    warn10Used: (n) => `10h-Tag wird genutzt (${n}× diese Woche noch möglich).`,
    warnBlockLeft: (t) => `Noch ${t} Lenkzeit bis zur nächsten Pflichtpause.`,
    warnRedRest: (n) => `Verkürzte Ruhezeit (9h) – noch ${n}× möglich.`,
    drivenLabel: (h) => `${h} gelenkt`,
  },
  en: {
    subtitle: 'Driving & rest times per EU Reg. 561/2006 · Free · No registration',
    rules: 'Rules', fines: 'Penalties',
    quickselect: 'Quick select',
    inputs: 'Inputs',
    startTime: 'Start time',
    plannedDrive: 'Planned driving (h)',
    drivenToday: 'Driven today (h)',
    sinceBreak: 'Since last break (h)',
    drivenWeek: 'This week so far (h)',
    drivenBiweek: 'Two-week total (h)',
    extDays: '10h days this week',
    ext0:'0 of 2 used', ext1:'1 of 2 used', ext2:'2 of 2 used',
    redRests: 'Reduced rest periods (9h)',
    red0:'0 of 3 used', red1:'1 of 3 used', red2:'2 of 3 used', red3:'3 of 3 used',
    splitBreak: 'Split break (15 + 30 min)',
    calculate: 'CALCULATE',
    dayPlan: 'Day plan',
    statDay: 'Daily driving', statWeek: 'Weekly driving', statBi: 'Two-week total',
    maxDay: '/ max. 9–10h', maxWeek: '/ max. 56h', maxBi: '/ max. 90h',
    rulesTitle: 'EU Reg. 561/2006 – Summary',
    finesTitle: 'Penalties for violations',
    finesSource: 'No liability · Source: EU Reg. 561/2006',
    finesCol: ['Violation','Driver','Operator','Legal basis'],
    faqTitle: 'Frequently asked questions',
    legalTitle: 'Legal basis',
    disclaimer: '⚠ Non-binding calculation. Not a substitute for a digital tachograph or legal advice.',
    adLabel: 'Advertisement',
    presets: [
      { name:'Short trip', sub:'2h', planned:2, icon:'🏙️' },
      { name:'Half day', sub:'4h', planned:4, icon:'🛤️' },
      { name:'Full day', sub:'8h', planned:8, icon:'🚛' },
      { name:'Max tour', sub:'9.5h', planned:9.5, icon:'⚡' },
    ],
    rulesContent: [
      ['⏱ Daily driving','Max. 9h (2×/week up to 10h)'],
      ['☕ Break','After 4.5h → 45 min (or 15+30)'],
      ['📅 Weekly driving','Max. 56h'],
      ['📅 Two-week','Max. 90h'],
      ['🛏 Daily rest','11h (3× reduced to 9h)'],
      ['🛏 Split rest','3h + 9h = 12h total'],
      ['🏠 Weekly rest','45h (every 2nd week min. 24h)'],
      ['🚫 Not in truck!','Regular weekly rest not in vehicle'],
    ],
    faq: [
      { q:'How long can a truck driver drive per day?', a:'Maximum 9 hours per day. Up to twice a week the driving time may be extended to 10 hours (Art. 6(1) Reg. 561/2006).' },
      { q:'When must a break be taken?', a:'After at most 4.5 hours of continuous driving, a break of at least 45 minutes is mandatory. Alternatively: 15 minutes, then 30 minutes (Art. 7 Reg. 561/2006).' },
      { q:'How long is the daily rest period?', a:'At least 11 hours. It may be reduced to 9 hours, maximum 3 times between two weekly rest periods (Art. 8 Reg. 561/2006).' },
      { q:'What is the maximum weekly driving time?', a:'56 hours per week, maximum 90 hours in two consecutive weeks (Art. 6(2–3) Reg. 561/2006).' },
      { q:'Can weekly rest be taken in the truck?', a:'No. Regular weekly rest (min. 45h) must not be spent in the vehicle. Reduced weekly rest (24h) is allowed in the truck (Art. 8(8) Reg. 561/2006).' },
      { q:'Does this apply to minibuses too?', a:'Yes, vehicles carrying more than 9 passengers and goods vehicles over 3.5t are subject to EU Reg. 561/2006.' },
    ],
    evLabels: { start:'Departure', end:'Destination reached', break45:'Break 45 min (mandatory after 4.5h)', break15:'Split break 1: 15 min', break30:'Split break 2: 30 min', resume:'Continue driving', rest:'Daily rest begins (min. ', restH:'h)', nextDrive:'Earliest next departure', limitReached:'Daily limit reached' },
    warnNoMore:'No more driving time possible today!',
    warnBiweek:'Two-week total',warnOver90:'> 90h!',warnWeek:'Weekly driving',warnOver56:'> 56h!',
    warnDayMax:'Daily driving',warnOver:'exceeds maximum',
    warn10NoMore:'10h extension already used twice – not permitted!',
    warn10Used:(n)=>`10h day used (${n}× still possible this week).`,
    warnBlockLeft:(t)=>`${t} driving time remaining before mandatory break.`,
    warnRedRest:(n)=>`Reduced rest (9h) – ${n}× still possible.`,
    drivenLabel:(h)=>`${h} driven`,
  },
  ro: {
    subtitle: 'Timpi de conducere și odihnă conform UE VO 561/2006 · Gratuit',
    rules: 'Reguli', fines: 'Amenzi',
    quickselect: 'Selecție rapidă',
    inputs: 'Date de intrare',
    startTime: 'Ora de plecare',
    plannedDrive: 'Conducere planificată (h)',
    drivenToday: 'Condus azi (h)',
    sinceBreak: 'De la ultima pauză (h)',
    drivenWeek: 'Săptămâna curentă (h)',
    drivenBiweek: 'Două săptămâni (h)',
    extDays: 'Zile de 10h săptămâna aceasta',
    ext0:'0 din 2 folosite', ext1:'1 din 2 folosite', ext2:'2 din 2 folosite',
    redRests: 'Repaus redus (9h)',
    red0:'0 din 3 folosite', red1:'1 din 3 folosite', red2:'2 din 3 folosite', red3:'3 din 3 folosite',
    splitBreak: 'Pauză împărțită (15 + 30 min)',
    calculate: 'CALCULEAZĂ',
    dayPlan: 'Plan zilnic',
    statDay: 'Conducere zilnică', statWeek: 'Conducere săptămânală', statBi: 'Două săptămâni',
    maxDay: '/ max. 9–10h', maxWeek: '/ max. 56h', maxBi: '/ max. 90h',
    rulesTitle: 'UE VO 561/2006 – Rezumat',
    finesTitle: 'Amenzi pentru încălcări',
    finesSource: 'Fără garanție · Sursă: UE VO 561/2006',
    finesCol: ['Încălcare','Șofer','Operator','Baza legală'],
    faqTitle: 'Întrebări frecvente',
    legalTitle: 'Baza legală',
    disclaimer: '⚠ Calcul neobligatoriu. Nu înlocuiește tahograful digital sau consilierea juridică.',
    adLabel: 'Publicitate',
    presets: [
      { name:'Traseu scurt', sub:'2h', planned:2, icon:'🏙️' },
      { name:'Jumătate zi', sub:'4h', planned:4, icon:'🛤️' },
      { name:'Zi completă', sub:'8h', planned:8, icon:'🚛' },
      { name:'Tur maxim', sub:'9,5h', planned:9.5, icon:'⚡' },
    ],
    rulesContent: [
      ['⏱ Conducere zilnică','Max. 9h (de 2×/săpt. până la 10h)'],
      ['☕ Întrerupere','După 4,5h → 45 min (sau 15+30)'],
      ['📅 Conducere săptămânală','Max. 56h'],
      ['📅 Două săptămâni','Max. 90h'],
      ['🛏 Repaus zilnic','11h (de 3× redus la 9h)'],
      ['🛏 Repaus împărțit','3h + 9h = 12h total'],
      ['🏠 Repaus săptămânal','45h (la 2 săpt. min. 24h)'],
      ['🚫 Nu în camion!','Repausul săptămânal regulat nu în vehicul'],
    ],
    faq: [
      { q:'Cât timp poate conduce un șofer de camion pe zi?', a:'Maxim 9 ore pe zi. De două ori pe săptămână poate fi prelungit la 10 ore (Art. 6(1) VO 561/2006).' },
      { q:'Când trebuie luată o pauză?', a:'După cel mult 4,5 ore de conducere continuă, o pauză de cel puțin 45 de minute este obligatorie. Alternativ: 15 minute, apoi 30 minute (Art. 7 VO 561/2006).' },
      { q:'Cât durează repausul zilnic?', a:'Cel puțin 11 ore. Poate fi redus la 9 ore, maximum de 3 ori între două perioade de repaus săptămânal (Art. 8 VO 561/2006).' },
      { q:'Care este conducerea maximă săptămânală?', a:'56 ore pe săptămână, maximum 90 ore în două săptămâni consecutive (Art. 6(2–3) VO 561/2006).' },
      { q:'Poate fi luat repausul săptămânal în camion?', a:'Nu. Repausul săptămânal regulat (min. 45h) nu poate fi petrecut în vehicul. Repausul redus (24h) este permis (Art. 8(8) VO 561/2006).' },
      { q:'Se aplică și microbuzelor?', a:'Da, vehiculele cu mai mult de 9 locuri și vehiculele de marfă peste 3,5t sunt supuse VO UE 561/2006.' },
    ],
    evLabels:{ start:'Plecare', end:'Destinație atinsă', break45:'Pauză 45 min (obligatorie după 4,5h)', break15:'Pauză parțială 1: 15 min', break30:'Pauză parțială 2: 30 min', resume:'Continuare conducere', rest:'Repaus zilnic începe (min. ', restH:'h)', nextDrive:'Cea mai devreme plecare', limitReached:'Limita zilnică atinsă' },
    warnNoMore:'Nu mai este posibilă conducerea azi!',warnBiweek:'Total două săptămâni',warnOver90:'> 90h!',warnWeek:'Conducere săptămânală',warnOver56:'> 56h!',warnDayMax:'Conducere zilnică',warnOver:'depășește maximul',warn10NoMore:'Prelungire 10h deja folosită de 2 ori – nepermis!',warn10Used:(n)=>`Zi de 10h utilizată (${n}× posibil săptămâna aceasta).`,warnBlockLeft:(t)=>`${t} timp de conducere rămas până la pauza obligatorie.`,warnRedRest:(n)=>`Repaus redus (9h) – ${n}× posibil.`,drivenLabel:(h)=>`${h} condus`,
  },
  pl: {
    subtitle: 'Czasy jazdy i odpoczynku wg UE VO 561/2006 · Bezpłatnie',
    rules: 'Zasady', fines: 'Mandaty',
    quickselect: 'Szybki wybór',
    inputs: 'Dane wejściowe',
    startTime: 'Godzina startu',
    plannedDrive: 'Planowana jazda (h)',
    drivenToday: 'Przejechane dzisiaj (h)',
    sinceBreak: 'Od ostatniej przerwy (h)',
    drivenWeek: 'W tym tygodniu (h)',
    drivenBiweek: 'Dwa tygodnie (h)',
    extDays: 'Dni 10h w tym tygodniu',
    ext0:'0 z 2 użyte', ext1:'1 z 2 użyte', ext2:'2 z 2 użyte',
    redRests: 'Skrócone odpoczynki (9h)',
    red0:'0 z 3 użyte', red1:'1 z 3 użyte', red2:'2 z 3 użyte', red3:'3 z 3 użyte',
    splitBreak: 'Przerwa podzielona (15 + 30 min)',
    calculate: 'OBLICZ',
    dayPlan: 'Plan dnia',
    statDay: 'Jazda dzienna', statWeek: 'Jazda tygodniowa', statBi: 'Dwa tygodnie',
    maxDay: '/ maks. 9–10h', maxWeek: '/ maks. 56h', maxBi: '/ maks. 90h',
    rulesTitle: 'UE VO 561/2006 – Podsumowanie',
    finesTitle: 'Mandaty za naruszenia',
    finesSource: 'Bez gwarancji · Źródło: UE VO 561/2006',
    finesCol: ['Naruszenie','Kierowca','Operator','Podstawa prawna'],
    faqTitle: 'Często zadawane pytania',
    legalTitle: 'Podstawa prawna',
    disclaimer: '⚠ Obliczenie niewiążące. Nie zastępuje tachografu cyfrowego ani porady prawnej.',
    adLabel: 'Reklama',
    presets: [
      { name:'Krótka trasa', sub:'2h', planned:2, icon:'🏙️' },
      { name:'Pół dnia', sub:'4h', planned:4, icon:'🛤️' },
      { name:'Cały dzień', sub:'8h', planned:8, icon:'🚛' },
      { name:'Maks. trasa', sub:'9,5h', planned:9.5, icon:'⚡' },
    ],
    rulesContent: [
      ['⏱ Jazda dzienna','Maks. 9h (2×/tydz. do 10h)'],
      ['☕ Przerwa','Po 4,5h → 45 min (lub 15+30)'],
      ['📅 Jazda tygodniowa','Maks. 56h'],
      ['📅 Dwa tygodnie','Maks. 90h'],
      ['🛏 Odpoczynek dzienny','11h (3× skrócony do 9h)'],
      ['🛏 Odpoczynek podzielony','3h + 9h = 12h łącznie'],
      ['🏠 Odpoczynek tygodniowy','45h (co 2 tyg. min. 24h)'],
      ['🚫 Nie w ciężarówce!','Regularny odpoczynek tygodniowy nie w pojeździe'],
    ],
    faq: [
      { q:'Jak długo kierowca ciężarówki może jeździć dziennie?', a:'Maksymalnie 9 godzin dziennie. Do dwóch razy w tygodniu można przedłużyć do 10 godzin (Art. 6(1) VO 561/2006).' },
      { q:'Kiedy należy zrobić przerwę?', a:'Po co najwyżej 4,5 godzinach nieprzerwanej jazdy obowiązkowa jest przerwa co najmniej 45 minut. Alternatywnie: 15 minut, następnie 30 minut (Art. 7 VO 561/2006).' },
      { q:'Jak długi jest dzienny czas odpoczynku?', a:'Co najmniej 11 godzin. Może być skrócony do 9 godzin, maksymalnie 3 razy między dwoma tygodniowymi okresami odpoczynku (Art. 8 VO 561/2006).' },
      { q:'Jaki jest maksymalny tygodniowy czas jazdy?', a:'56 godzin tygodniowo, maksymalnie 90 godzin w dwóch kolejnych tygodniach (Art. 6(2–3) VO 561/2006).' },
      { q:'Czy odpoczynek tygodniowy można odbywać w ciężarówce?', a:'Nie. Regularny odpoczynek tygodniowy (min. 45h) nie może być spędzony w pojeździe. Skrócony odpoczynek (24h) jest dozwolony (Art. 8(8) VO 561/2006).' },
      { q:'Czy dotyczy to też busów?', a:'Tak, pojazdy przewożące więcej niż 9 pasażerów oraz pojazdy towarowe powyżej 3,5t podlegają UE VO 561/2006.' },
    ],
    evLabels:{ start:'Wyjazd', end:'Cel osiągnięty', break45:'Przerwa 45 min (obowiązkowa po 4,5h)', break15:'Przerwa częściowa 1: 15 min', break30:'Przerwa częściowa 2: 30 min', resume:'Kontynuacja jazdy', rest:'Odpoczynek dzienny (min. ', restH:'h)', nextDrive:'Najwcześniejszy następny wyjazd', limitReached:'Limit dzienny osiągnięty' },
    warnNoMore:'Brak możliwości dalszej jazdy dziś!',warnBiweek:'Suma dwóch tygodni',warnOver90:'> 90h!',warnWeek:'Jazda tygodniowa',warnOver56:'> 56h!',warnDayMax:'Jazda dzienna',warnOver:'przekracza maksimum',warn10NoMore:'Przedłużenie 10h już 2 razy – niedopuszczalne!',warn10Used:(n)=>`Dzień 10h używany (${n}× możliwe w tym tygodniu).`,warnBlockLeft:(t)=>`${t} czasu jazdy do kolejnej obowiązkowej przerwy.`,warnRedRest:(n)=>`Skrócony odpoczynek (9h) – ${n}× możliwy.`,drivenLabel:(h)=>`${h} przejechane`,
  },
  cs: {
    subtitle: 'Časy řízení a odpočinku dle EU VO 561/2006 · Zdarma',
    rules: 'Pravidla', fines: 'Pokuty',
    quickselect: 'Rychlý výběr',
    inputs: 'Vstupní údaje',
    startTime: 'Čas odjezdu',
    plannedDrive: 'Plánovaná jízda (h)',
    drivenToday: 'Dnes řízeno (h)',
    sinceBreak: 'Od poslední přestávky (h)',
    drivenWeek: 'Tento týden (h)',
    drivenBiweek: 'Dva týdny (h)',
    extDays: 'Dny 10h tento týden',
    ext0:'0 ze 2 použity', ext1:'1 ze 2 použity', ext2:'2 ze 2 použity',
    redRests: 'Zkrácené odpočinky (9h)',
    red0:'0 ze 3 použity', red1:'1 ze 3 použity', red2:'2 ze 3 použity', red3:'3 ze 3 použity',
    splitBreak: 'Rozdělená přestávka (15 + 30 min)',
    calculate: 'VYPOČÍTAT',
    dayPlan: 'Denní plán',
    statDay: 'Denní řízení', statWeek: 'Týdenní řízení', statBi: 'Dva týdny',
    maxDay: '/ max. 9–10h', maxWeek: '/ max. 56h', maxBi: '/ max. 90h',
    rulesTitle: 'EU VO 561/2006 – Přehled',
    finesTitle: 'Pokuty za přestupky',
    finesSource: 'Bez záruky · Zdroj: EU VO 561/2006',
    finesCol: ['Přestupek','Řidič','Dopravce','Právní základ'],
    faqTitle: 'Časté dotazy',
    legalTitle: 'Právní základ',
    disclaimer: '⚠ Nezávazný výpočet. Nenahrazuje digitální tachograf ani právní poradenství.',
    adLabel: 'Reklama',
    presets: [
      { name:'Krátká trasa', sub:'2h', planned:2, icon:'🏙️' },
      { name:'Půl dne', sub:'4h', planned:4, icon:'🛤️' },
      { name:'Celý den', sub:'8h', planned:8, icon:'🚛' },
      { name:'Max. trasa', sub:'9,5h', planned:9.5, icon:'⚡' },
    ],
    rulesContent: [
      ['⏱ Denní řízení','Max. 9h (2×/týd. až 10h)'],
      ['☕ Přestávka','Po 4,5h → 45 min (nebo 15+30)'],
      ['📅 Týdenní řízení','Max. 56h'],
      ['📅 Dva týdny','Max. 90h'],
      ['🛏 Denní odpočinek','11h (3× zkrácen na 9h)'],
      ['🛏 Rozdělený odpočinek','3h + 9h = 12h celkem'],
      ['🏠 Týdenní odpočinek','45h (každý 2. týden min. 24h)'],
      ['🚫 Ne v nákladním!','Pravidelný týdenní odpočinek ne ve vozidle'],
    ],
    faq: [
      { q:'Jak dlouho může řidič nákladního auta řídit denně?', a:'Maximálně 9 hodin denně. Dvakrát týdně lze prodloužit na 10 hodin (čl. 6(1) VO 561/2006).' },
      { q:'Kdy je nutná přestávka?', a:'Po nejdéle 4,5 hodinách nepřetržité jízdy je povinná přestávka alespoň 45 minut. Alternativně: 15 minut, pak 30 minut (čl. 7 VO 561/2006).' },
      { q:'Jak dlouhý je denní odpočinek?', a:'Nejméně 11 hodin. Lze zkrátit na 9 hodin, maximálně 3krát mezi dvěma týdenními odpočinky (čl. 8 VO 561/2006).' },
      { q:'Jaká je maximální týdenní doba řízení?', a:'56 hodin týdně, maximálně 90 hodin ve dvou po sobě jdoucích týdnech (čl. 6(2–3) VO 561/2006).' },
      { q:'Lze týdenní odpočinek trávit v nákladním?', a:'Ne. Pravidelný týdenní odpočinek (min. 45h) nelze trávit ve vozidle. Zkrácený odpočinek (24h) je povolen (čl. 8(8) VO 561/2006).' },
      { q:'Platí to i pro mikrobusy?', a:'Ano, vozidla přepravující více než 9 cestujících a nákladní vozidla nad 3,5t podléhají EU VO 561/2006.' },
    ],
    evLabels:{ start:'Odjezd', end:'Cíl dosažen', break45:'Přestávka 45 min (povinná po 4,5h)', break15:'Část přestávky 1: 15 min', break30:'Část přestávky 2: 30 min', resume:'Pokračování jízdy', rest:'Denní odpočinek začíná (min. ', restH:'h)', nextDrive:'Nejdřívější další odjezd', limitReached:'Denní limit dosažen' },
    warnNoMore:'Dnes již není možná další jízda!',warnBiweek:'Součet dvou týdnů',warnOver90:'> 90h!',warnWeek:'Týdenní řízení',warnOver56:'> 56h!',warnDayMax:'Denní řízení',warnOver:'překračuje maximum',warn10NoMore:'Prodloužení 10h již 2× použito – nepřípustné!',warn10Used:(n)=>`Den 10h využit (${n}× možné tento týden).`,warnBlockLeft:(t)=>`${t} doby jízdy do další povinné přestávky.`,warnRedRest:(n)=>`Zkrácený odpočinek (9h) – ${n}× možný.`,drivenLabel:(h)=>`${h} ujeto`,
  },
  bg: {
    subtitle: 'Времена на управление и почивка по ЕС VO 561/2006 · Безплатно',
    rules: 'Правила', fines: 'Глоби',
    quickselect: 'Бърз избор',
    inputs: 'Въведени данни',
    startTime: 'Начален час',
    plannedDrive: 'Планирано шофиране (h)',
    drivenToday: 'Шофирано днес (h)',
    sinceBreak: 'От последната почивка (h)',
    drivenWeek: 'Тази седмица (h)',
    drivenBiweek: 'Две седмици (h)',
    extDays: 'Дни от 10h тази седмица',
    ext0:'0 от 2 използвани', ext1:'1 от 2 използвани', ext2:'2 от 2 използвани',
    redRests: 'Намалени почивки (9h)',
    red0:'0 от 3 използвани', red1:'1 от 3 използвани', red2:'2 от 3 използвани', red3:'3 от 3 използвани',
    splitBreak: 'Разделена почивка (15 + 30 мин)',
    calculate: 'ИЗЧИСЛИ',
    dayPlan: 'Дневен план',
    statDay: 'Дневно шофиране', statWeek: 'Седмично шофиране', statBi: 'Две седмици',
    maxDay: '/ макс. 9–10ч', maxWeek: '/ макс. 56ч', maxBi: '/ макс. 90ч',
    rulesTitle: 'ЕС VO 561/2006 – Обзор',
    finesTitle: 'Глоби за нарушения',
    finesSource: 'Без гаранция · Източник: ЕС VO 561/2006',
    finesCol: ['Нарушение','Шофьор','Оператор','Правно основание'],
    faqTitle: 'Често задавани въпроси',
    legalTitle: 'Правно основание',
    disclaimer: '⚠ Необвързващо изчисление. Не замества цифровия тахограф или правен съвет.',
    adLabel: 'Реклама',
    presets: [
      { name:'Кратък маршрут', sub:'2ч', planned:2, icon:'🏙️' },
      { name:'Половин ден', sub:'4ч', planned:4, icon:'🛤️' },
      { name:'Целодневен', sub:'8ч', planned:8, icon:'🚛' },
      { name:'Максимален', sub:'9,5ч', planned:9.5, icon:'⚡' },
    ],
    rulesContent: [
      ['⏱ Дневно шофиране','Макс. 9ч (2×/седм. до 10ч)'],
      ['☕ Почивка','След 4,5ч → 45 мин (или 15+30)'],
      ['📅 Седмично шофиране','Макс. 56ч'],
      ['📅 Две седмици','Макс. 90ч'],
      ['🛏 Дневна почивка','11ч (3× намалена до 9ч)'],
      ['🛏 Разделена почивка','3ч + 9ч = 12ч общо'],
      ['🏠 Седмична почивка','45ч (всяка 2-ра седм. мин. 24ч)'],
      ['🚫 Не в камиона!','Редовната седмична почивка не в превозното средство'],
    ],
    faq: [
      { q:'Колко часа може да шофира камионджия на ден?', a:'Максимум 9 часа на ден. До два пъти седмично може да се удължи до 10 часа (Чл. 6(1) VO 561/2006).' },
      { q:'Кога трябва да се прави почивка?', a:'След най-много 4,5 часа непрекъснато шофиране е задължителна почивка от поне 45 минути. Алтернативно: 15 минути, след това 30 минути (Чл. 7 VO 561/2006).' },
      { q:'Колко е дневната почивка?', a:'Поне 11 часа. Може да се намали до 9 часа, максимум 3 пъти между два седмични периода на почивка (Чл. 8 VO 561/2006).' },
      { q:'Колко е максималното седмично шофиране?', a:'56 часа седмично, максимум 90 часа в две последователни седмици (Чл. 6(2–3) VO 561/2006).' },
      { q:'Може ли седмичната почивка да се прекара в камиона?', a:'Не. Редовната седмична почивка (мин. 45ч) не може да се прекара в превозното средство. Намалената (24ч) е разрешена (Чл. 8(8) VO 561/2006).' },
      { q:'Важи ли за миниавтобуси?', a:'Да, превозни средства с повече от 9 места и товарни над 3,5т са обект на ЕС VO 561/2006.' },
    ],
    evLabels:{ start:'Тръгване', end:'Дестинация достигната', break45:'Почивка 45 мин (задължителна след 4,5ч)', break15:'Частична почивка 1: 15 мин', break30:'Частична почивка 2: 30 мин', resume:'Продължаване на шофирането', rest:'Дневна почивка започва (мин. ', restH:'ч)', nextDrive:'Най-ранно следващо тръгване', limitReached:'Дневният лимит е достигнат' },
    warnNoMore:'Няма повече възможно шофиране днес!',warnBiweek:'Сума за две седмици',warnOver90:'> 90ч!',warnWeek:'Седмично шофиране',warnOver56:'> 56ч!',warnDayMax:'Дневно шофиране',warnOver:'надвишава максимума',warn10NoMore:'Удължението до 10ч вече е използвано 2 пъти – недопустимо!',warn10Used:(n)=>`Ден от 10ч използван (${n}× възможно тази седмица).`,warnBlockLeft:(t)=>`${t} оставащо шофиране до следващата задължителна почивка.`,warnRedRest:(n)=>`Намалена почивка (9ч) – ${n}× възможна.`,drivenLabel:(h)=>`${h} изминати`,
  },
  ru: {
    subtitle: 'Время вождения и отдыха согласно EU VO 561/2006 · Бесплатно',
    rules: 'Правила', fines: 'Штрафы',
    quickselect: 'Быстрый выбор',
    inputs: 'Входные данные',
    startTime: 'Время отправления',
    plannedDrive: 'Планируемое вождение (ч)',
    drivenToday: 'Проехано сегодня (ч)',
    sinceBreak: 'С последнего перерыва (ч)',
    drivenWeek: 'На этой неделе (ч)',
    drivenBiweek: 'Две недели (ч)',
    extDays: 'Дни по 10ч на этой неделе',
    ext0:'0 из 2 использовано', ext1:'1 из 2 использовано', ext2:'2 из 2 использовано',
    redRests: 'Сокращённые периоды отдыха (9ч)',
    red0:'0 из 3 использовано', red1:'1 из 3 использовано', red2:'2 из 3 использовано', red3:'3 из 3 использовано',
    splitBreak: 'Разделённый перерыв (15 + 30 мин)',
    calculate: 'РАССЧИТАТЬ',
    dayPlan: 'Дневной план',
    statDay: 'Суточное вождение', statWeek: 'Недельное вождение', statBi: 'Две недели',
    maxDay: '/ макс. 9–10ч', maxWeek: '/ макс. 56ч', maxBi: '/ макс. 90ч',
    rulesTitle: 'EU VO 561/2006 – Краткий обзор',
    finesTitle: 'Штрафы за нарушения',
    finesSource: 'Без гарантий · Источник: EU VO 561/2006',
    finesCol: ['Нарушение','Водитель','Оператор','Правовая основа'],
    faqTitle: 'Часто задаваемые вопросы',
    legalTitle: 'Правовая основа',
    disclaimer: '⚠ Расчёт носит ориентировочный характер. Не заменяет цифровой тахограф или юридическую консультацию.',
    adLabel: 'Реклама',
    presets: [
      { name:'Короткий маршрут', sub:'2ч', planned:2, icon:'🏙️' },
      { name:'Полдня', sub:'4ч', planned:4, icon:'🛤️' },
      { name:'Полный день', sub:'8ч', planned:8, icon:'🚛' },
      { name:'Макс. маршрут', sub:'9,5ч', planned:9.5, icon:'⚡' },
    ],
    rulesContent: [
      ['⏱ Суточное вождение','Макс. 9ч (2×/нед. до 10ч)'],
      ['☕ Перерыв','После 4,5ч → 45 мин (или 15+30)'],
      ['📅 Недельное вождение','Макс. 56ч'],
      ['📅 Две недели','Макс. 90ч'],
      ['🛏 Суточный отдых','11ч (3× сокращён до 9ч)'],
      ['🛏 Разделённый отдых','3ч + 9ч = 12ч суммарно'],
      ['🏠 Еженедельный отдых','45ч (каждые 2 нед. мин. 24ч)'],
      ['🚫 Не в кабине!','Регулярный еженедельный отдых не в транспортном средстве'],
    ],
    faq: [
      { q:'Сколько часов в день может ехать дальнобойщик?', a:'Максимум 9 часов в день. До двух раз в неделю можно продлить до 10 часов (Ст. 6(1) VO 561/2006).' },
      { q:'Когда нужно делать перерыв?', a:'После не более 4,5 часов непрерывного вождения обязателен перерыв не менее 45 минут. Альтернативно: 15 минут, затем 30 минут (Ст. 7 VO 561/2006).' },
      { q:'Сколько длится суточный отдых?', a:'Не менее 11 часов. Может быть сокращён до 9 часов, максимум 3 раза между двумя еженедельными периодами отдыха (Ст. 8 VO 561/2006).' },
      { q:'Какое максимальное время вождения в неделю?', a:'56 часов в неделю, максимум 90 часов в двух последовательных неделях (Ст. 6(2–3) VO 561/2006).' },
      { q:'Можно ли проводить недельный отдых в грузовике?', a:'Нет. Регулярный еженедельный отдых (мин. 45ч) не может проводиться в транспортном средстве. Сокращённый отдых (24ч) разрешён (Ст. 8(8) VO 561/2006).' },
      { q:'Распространяется ли это на микроавтобусы?', a:'Да, транспортные средства с более чем 9 местами и грузовые свыше 3,5т подпадают под EU VO 561/2006.' },
    ],
    evLabels:{ start:'Отправление', end:'Пункт назначения достигнут', break45:'Перерыв 45 мин (обязателен после 4,5ч)', break15:'Частичный перерыв 1: 15 мин', break30:'Частичный перерыв 2: 30 мин', resume:'Продолжение поездки', rest:'Суточный отдых начинается (мин. ', restH:'ч)', nextDrive:'Ближайшее следующее отправление', limitReached:'Суточный лимит достигнут' },
    warnNoMore:'Сегодня больше невозможно ехать!',warnBiweek:'Сумма двух недель',warnOver90:'> 90ч!',warnWeek:'Недельное вождение',warnOver56:'> 56ч!',warnDayMax:'Суточное вождение',warnOver:'превышает максимум',warn10NoMore:'Продление до 10ч уже использовано дважды – недопустимо!',warn10Used:(n)=>`День 10ч использован (${n}× возможно на этой неделе).`,warnBlockLeft:(t)=>`${t} времени вождения до следующего обязательного перерыва.`,warnRedRest:(n)=>`Сокращённый отдых (9ч) – ${n}× возможен.`,drivenLabel:(h)=>`${h} пройдено`,
  },
};

/* ═══════════════════════════════════════════════════════════
   Computation
   ═══════════════════════════════════════════════════════════ */
const R = {
  maxBlock:4.5, breakFull:0.75, breakS1:0.25, breakS2:0.5,
  maxDaily:9, maxDailyExt:10, maxWeekly:56, maxBiweekly:90,
  restDaily:11, restReduced:9,
};

const fmt = h => { const hr=Math.floor(h); const mn=Math.round((h-hr)*60); return `${hr}h ${String(mn).padStart(2,'0')}min`; };
const addT = (s,hrs) => { const [h,m]=s.split(':').map(Number); const t=h*60+m+Math.round(hrs*60); return `${String(Math.floor(t/60)%24).padStart(2,'0')}:${String(t%60).padStart(2,'0')}`; };

function compute(p, t) {
  const ev=[], warn=[];
  let clock=p.start;
  const totDay=p.drivenToday+p.planned;
  const totWk=p.drivenWeek+p.planned;
  const totBi=p.drivenBiweek+p.planned;
  const canExt=p.extUsed<2;
  const maxDay=(canExt&&totDay>9)?R.maxDailyExt:R.maxDaily;

  if(totDay>maxDay) warn.push({t:'error',m:`${t.warnDayMax} ${fmt(totDay)} ${t.warnOver} (${fmt(maxDay)})!`});
  if(totDay>9&&totDay<=10&&!canExt) warn.push({t:'error',m:t.warn10NoMore});
  if(totDay>9&&totDay<=10&&canExt) warn.push({t:'warn',m:t.warn10Used(1-p.extUsed)});
  if(totWk>R.maxWeekly) warn.push({t:'error',m:`${t.warnWeek} ${fmt(totWk)} ${t.warnOver56}`});
  if(totBi>R.maxBiweekly) warn.push({t:'error',m:`${t.warnBiweek} ${fmt(totBi)} ${t.warnOver90}`});

  let remaining=Math.min(p.planned,Math.max(0,maxDay-p.drivenToday));
  const restH=p.redRests<3?R.restReduced:R.restDaily;

  if(remaining<=0){
    warn.push({t:'error',m:t.warnNoMore});
    return {ev:[{time:clock,type:'info',label:t.evLabels.limitReached,icon:'⛔'}],warn,totDay,totWk,totBi,restH};
  }

  let contBlock=p.blockSincePause||0;
  ev.push({time:clock,type:'start',label:t.evLabels.start,icon:'🚛'});

  let driven=0, iterations=0;
  while(driven<remaining-0.01&&iterations<50){
    iterations++;
    const untilBreak=R.maxBlock-contBlock;
    if(untilBreak<=0.01){
      const breakDur=p.splitBreak?R.breakS1:R.breakFull;
      const breakLabel=p.splitBreak?t.evLabels.break15:t.evLabels.break45;
      ev.push({time:clock,type:'break',label:breakLabel,icon:'☕'});
      clock=addT(clock,breakDur);
      if(p.splitBreak){
        const chunk2=Math.min(remaining-driven,R.maxBlock);
        if(chunk2>0.01){ev.push({time:clock,type:'resume',label:t.evLabels.resume,icon:'🚛'});clock=addT(clock,chunk2);driven+=chunk2;}
        ev.push({time:clock,type:'break',label:t.evLabels.break30,icon:'☕'});
        clock=addT(clock,R.breakS2);
      }
      contBlock=0;
      if(driven<remaining-0.01) ev.push({time:clock,type:'resume',label:t.evLabels.resume,icon:'🚛'});
      continue;
    }
    const chunk=Math.min(remaining-driven,untilBreak);
    clock=addT(clock,chunk); driven+=chunk; contBlock+=chunk;
    if(contBlock>=R.maxBlock-0.01&&driven<remaining-0.01){
      const breakDur=p.splitBreak?R.breakS1:R.breakFull;
      const breakLabel=p.splitBreak?t.evLabels.break15:t.evLabels.break45;
      ev.push({time:clock,type:'break',label:breakLabel,icon:'☕'});
      clock=addT(clock,breakDur);
      if(p.splitBreak){
        const chunk2=Math.min(remaining-driven,R.maxBlock);
        if(chunk2>0.01){ev.push({time:clock,type:'resume',label:t.evLabels.resume,icon:'🚛'});clock=addT(clock,chunk2);driven+=chunk2;}
        ev.push({time:clock,type:'break',label:t.evLabels.break30,icon:'☕'});
        clock=addT(clock,R.breakS2);
      }
      contBlock=0;
      if(driven<remaining-0.01) ev.push({time:clock,type:'resume',label:t.evLabels.resume,icon:'🚛'});
    }
  }

  ev.push({time:clock,type:'end',label:`${t.evLabels.end} (${t.drivenLabel(fmt(driven))})`,icon:'🏁'});
  const leftInBlock=R.maxBlock-contBlock;
  if(leftInBlock>0.1&&driven<R.maxBlock) warn.push({t:'info',m:t.warnBlockLeft(fmt(leftInBlock))});
  ev.push({time:clock,type:'rest',label:`${t.evLabels.rest}${restH}${t.evLabels.restH}`,icon:'🛏️'});
  ev.push({time:addT(clock,restH),type:'ok',label:t.evLabels.nextDrive,icon:'✅'});
  if(p.redRests<3&&restH===9) warn.push({t:'info',m:t.warnRedRest(2-p.redRests)});

  return {ev,warn,totDay,totWk,totBi,restH};
}

/* ═══════════════════════════════════════════════════════════
   Bußgelder data (kept in DE/EN with legal refs)
   ═══════════════════════════════════════════════════════════ */
const BUSSGELDER = [
  {cat:'Lenkzeiten',v:'Tageslenkzeit 1–2h überschritten',f:'60 €',u:'280 €',g:'Art. 6 VO (EG) 561/2006'},
  {cat:'Lenkzeiten',v:'Tageslenkzeit über 2h überschritten',f:'250 €',u:'500 €',g:'Art. 6 VO (EG) 561/2006'},
  {cat:'Lenkzeiten',v:'Wochenlenkzeit bis 3h überschritten',f:'60 €',u:'280 €',g:'Art. 6 Abs. 2 VO (EG) 561/2006'},
  {cat:'Lenkzeiten',v:'Wochenlenkzeit über 3h überschritten',f:'250 €',u:'500 €',g:'Art. 6 Abs. 2 VO (EG) 561/2006'},
  {cat:'Lenkzeiten',v:'Doppelwoche 90h überschritten',f:'250 €',u:'500 €',g:'Art. 6 Abs. 3 VO (EG) 561/2006'},
  {cat:'Pausen',v:'Fahrtunterbrechung nicht eingelegt',f:'30 €',u:'150 €',g:'Art. 7 VO (EG) 561/2006'},
  {cat:'Pausen',v:'Pause zu kurz (< 45 min)',f:'30 €',u:'150 €',g:'Art. 7 VO (EG) 561/2006'},
  {cat:'Ruhezeiten',v:'Tagesruhezeit bis 1h unterschritten',f:'30 €',u:'150 €',g:'Art. 8 VO (EG) 561/2006'},
  {cat:'Ruhezeiten',v:'Tagesruhezeit über 1h unterschritten',f:'60 €',u:'280 €',g:'Art. 8 VO (EG) 561/2006'},
  {cat:'Ruhezeiten',v:'Wöchentliche Ruhezeit unterschritten',f:'60 €',u:'280 €',g:'Art. 8 Abs. 6 VO (EG) 561/2006'},
  {cat:'Ruhezeiten',v:'Reguläre Wochenruhezeit im Fahrzeug',f:'60 €',u:'500 €',g:'Art. 8 Abs. 8 VO (EG) 561/2006'},
  {cat:'Aufzeichnung',v:'Schaublatt / Fahrerkarte nicht mitgeführt',f:'250 €',u:'500 €',g:'§ 8 FPersG, § 21a FPersV'},
  {cat:'Aufzeichnung',v:'Digitaler Tachograph manipuliert',f:'500 €',u:'2.000 €',g:'§ 23 FPersV, § 8 FPersG'},
];

/* ═══════════════════════════════════════════════════════════
   Design tokens
   ═══════════════════════════════════════════════════════════ */
const C = {
  bg:'#f4f6f9', white:'#ffffff', border:'#e2e6ea',
  acc:'#e8732a', accDark:'#c55f1e', accLight:'#fff4ed',
  txt:'#1a1d23', muted:'#5a6474', dim:'#9aa3af',
  success:'#1a7f37', successBg:'#d3f9d8', successBorder:'#8ce0a0',
  warning:'#9a6700', warningBg:'#fff3cd', warningBorder:'#ffc107',
  error:'#c0392b', errorBg:'#fdecea', errorBorder:'#f5a9a9',
  info:'#1558b0', infoBg:'#dbeafe', infoBorder:'#93c5fd',
};

/* ═══════════════════════════════════════════════════════════
   Sub-components
   ═══════════════════════════════════════════════════════════ */
function AdSlot({ height, label }) {
  return (
    <div style={{
      background:'#f8f9fa', border:'1px dashed #ced4da', borderRadius:12,
      display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
      minHeight:height||90, color:'#adb5bd', fontSize:11, textAlign:'center', padding:10, width:'100%',
    }}>
      <div style={{fontSize:10,textTransform:'uppercase',letterSpacing:1.5,marginBottom:4,opacity:0.7}}>Anzeige</div>
      <div style={{fontSize:12,opacity:0.6}}>{label}</div>
    </div>
  );
}

function Stat({ label, value, max, pct }) {
  const color = pct>95?C.error:pct>80?C.warning:C.success;
  return (
    <div style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:14,padding:'14px 12px',textAlign:'center',boxShadow:'0 2px 8px rgba(0,0,0,0.04)'}}>
      <div style={{fontSize:10,color:C.dim,textTransform:'uppercase',letterSpacing:1.5,marginBottom:6,fontWeight:600}}>{label}</div>
      <div style={{fontSize:21,fontWeight:800,color,fontFamily:"'JetBrains Mono',monospace",letterSpacing:-0.5}}>{value}</div>
      <div style={{fontSize:11,color:C.muted,marginTop:2}}>{max}</div>
      <div style={{marginTop:8,height:5,background:'#edf0f3',borderRadius:3,overflow:'hidden'}}>
        <div style={{height:'100%',borderRadius:3,width:`${Math.min(pct,100)}%`,background:color,transition:'width 0.6s cubic-bezier(.4,0,.2,1)'}}/>
      </div>
    </div>
  );
}

const IS = {
  background:C.white, border:`1px solid ${C.border}`, borderRadius:10,
  color:C.txt, padding:'11px 14px', fontSize:15, width:'100%', minWidth:0, maxWidth:'100%',
  outline:'none', boxSizing:'border-box', fontFamily:"'Plus Jakarta Sans',sans-serif",
  transition:'border-color 0.2s, box-shadow 0.2s', display:'block',
};
const LS = { display:'block', fontSize:12, color:C.muted, marginBottom:6, fontWeight:600, letterSpacing:0.2 };

/* ═══════════════════════════════════════════════════════════
   Main component
   ═══════════════════════════════════════════════════════════ */
export default function Home() {
  const [lang, setLang] = useState('de');
  const [langOpen, setLangOpen] = useState(false);
  const [start, setStart] = useState('06:00');
  const [planned, setPlanned] = useState(4);
  const [drivenToday, setDrivenToday] = useState(0);
  const [blockSincePause, setBlockSincePause] = useState(0);
  const [drivenWeek, setDrivenWeek] = useState(28);
  const [drivenBiweek, setDrivenBiweek] = useState(55);
  const [extUsed, setExtUsed] = useState(0);
  const [redRests, setRedRests] = useState(0);
  const [splitBreak, setSplitBreak] = useState(false);
  const [result, setResult] = useState(null);
  const [showBuss, setShowBuss] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const t = T[lang];

  const run = useCallback(() => {
    setResult(compute({start,planned,drivenToday,blockSincePause,drivenWeek,drivenBiweek,extUsed,redRests,splitBreak}, T[lang]));
  }, [start,planned,drivenToday,blockSincePause,drivenWeek,drivenBiweek,extUsed,redRests,splitBreak,lang]);

  const catColors = {'Lenkzeiten':['#fff0eb','#bf360c'],'Pausen':['#fff8e1','#e65100'],'Ruhezeiten':['#e8f5e9','#2e7d32'],'Aufzeichnung':['#ede7f6','#4527a0']};
  const bussCategories = [...new Set(BUSSGELDER.map(b=>b.cat))];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        body{font-family:'Plus Jakarta Sans',-apple-system,sans-serif;}
        .wrap{max-width:1180px;margin:0 auto;padding:0 20px;}
        .cols{display:grid;grid-template-columns:160px 1fr 160px;gap:24px;align-items:start;}
        .ad-side{display:flex;flex-direction:column;gap:16px;position:sticky;top:24px;}
        .form-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
        .form-grid > div{min-width:0;overflow:hidden;}
        input[type=time]{width:100%!important;max-width:100%!important;min-width:0!important;}
        .stats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;}
        .presets{display:flex;gap:8px;flex-wrap:wrap;}
        .buss-tbl{width:100%;border-collapse:collapse;}
        .buss-tbl th,.buss-tbl td{padding:10px 14px;text-align:left;font-size:13px;border-bottom:1px solid ${C.border};}
        .buss-tbl th{font-size:11px;text-transform:uppercase;letter-spacing:1px;color:${C.muted};font-weight:700;background:#f8f9fa;}
        .buss-tbl tbody tr:hover td{background:#fafbfc;}
        .buss-tbl tr:last-child td{border-bottom:none;}
        input:focus,select:focus{border-color:${C.acc}!important;box-shadow:0 0 0 3px rgba(232,115,42,0.15)!important;outline:none;}
        .btn-calc:hover{background:${C.accDark}!important;transform:translateY(-1px);box-shadow:0 6px 20px rgba(232,115,42,0.35)!important;}
        .btn-calc:active{transform:translateY(0);}
        .btn-calc{transition:all 0.2s cubic-bezier(.4,0,.2,1);}
        .preset-btn:hover{border-color:${C.acc}!important;color:${C.acc}!important;background:${C.accLight}!important;}
        .preset-btn{transition:all 0.15s;}
        .card{background:${C.white};border:1px solid ${C.border};border-radius:18px;box-shadow:0 2px 12px rgba(0,0,0,0.05);}
        .lang-btn:hover{background:#f1f3f5!important;}
        .lang-opt:hover{background:${C.accLight}!important;color:${C.acc}!important;}
        .faq-btn:hover{color:${C.acc}!important;}
        @media(max-width:920px){
          .cols{grid-template-columns:1fr;}
          .ad-side{display:none;}
        }
        @media(max-width:600px){
          .form-grid{grid-template-columns:1fr;}
          .stats-grid{grid-template-columns:1fr 1fr;}
          .buss-tbl th:last-child,.buss-tbl td:last-child{display:none;}
        }
        @media(max-width:400px){.stats-grid{grid-template-columns:1fr;}}
      `}</style>

      <div style={{minHeight:'100vh',background:C.bg,color:C.txt,fontFamily:"'Plus Jakarta Sans',-apple-system,sans-serif"}}>

        {/* ── Header ── */}
        <header style={{background:C.white,borderBottom:`1px solid ${C.border}`,boxShadow:'0 1px 8px rgba(0,0,0,0.06)',position:'sticky',top:0,zIndex:100}}>
          <div className="wrap" style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 20px',gap:12,flexWrap:'wrap'}}>
            <div style={{display:'flex',alignItems:'center',gap:12}}>
              <div style={{background:`linear-gradient(135deg,${C.acc},${C.accDark})`,borderRadius:14,width:46,height:46,display:'flex',alignItems:'center',justifyContent:'center',fontSize:24,boxShadow:`0 4px 14px rgba(232,115,42,0.3)`}}>🚛</div>
              <div>
                <h1 style={{fontSize:20,fontWeight:800,color:C.acc,lineHeight:1.1,letterSpacing:-0.3}}>LenkzeitRechner.de</h1>
                <p style={{fontSize:11,color:C.muted,marginTop:1}}>{t.subtitle}</p>
              </div>
            </div>
            <div style={{display:'flex',gap:8,alignItems:'center'}}>
              <button onClick={()=>setShowRules(!showRules)} style={{background:showRules?C.infoBg:C.white,border:`1px solid ${showRules?C.infoBorder:C.border}`,borderRadius:10,padding:'8px 14px',color:showRules?C.info:C.muted,fontSize:13,fontWeight:600,cursor:'pointer',transition:'all 0.15s'}}>
                📋 {t.rules}
              </button>
              <button onClick={()=>setShowBuss(!showBuss)} style={{background:showBuss?C.errorBg:C.white,border:`1px solid ${showBuss?C.errorBorder:C.border}`,borderRadius:10,padding:'8px 14px',color:showBuss?C.error:C.muted,fontSize:13,fontWeight:600,cursor:'pointer',transition:'all 0.15s'}}>
                ⚠️ {t.fines}
              </button>

              {/* Language Switcher */}
              <div style={{position:'relative'}}>
                <button className="lang-btn" onClick={()=>setLangOpen(!langOpen)} style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:10,padding:'8px 12px',fontSize:13,fontWeight:600,cursor:'pointer',display:'flex',alignItems:'center',gap:6,color:C.txt,transition:'all 0.15s'}}>
                  {LANGS[lang].flag} {LANGS[lang].label} <span style={{fontSize:10,color:C.dim}}>▼</span>
                </button>
                {langOpen && (
                  <div style={{position:'absolute',right:0,top:'calc(100% + 6px)',background:C.white,border:`1px solid ${C.border}`,borderRadius:12,boxShadow:'0 8px 24px rgba(0,0,0,0.12)',zIndex:200,minWidth:130,overflow:'hidden'}}>
                    {Object.entries(LANGS).map(([code,{flag,label}])=>(
                      <button key={code} className="lang-opt" onClick={()=>{setLang(code);setLangOpen(false);setResult(null);}} style={{
                        display:'flex',alignItems:'center',gap:10,width:'100%',padding:'10px 14px',
                        background:lang===code?C.accLight:'transparent',
                        color:lang===code?C.acc:C.txt,
                        border:'none',cursor:'pointer',fontSize:13,fontWeight:lang===code?700:500,
                        transition:'all 0.12s',textAlign:'left',
                      }}>
                        <span style={{fontSize:18}}>{flag}</span> {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        <div className="wrap" style={{paddingTop:24,paddingBottom:60}}>

          {/* Top Ad */}
          <div style={{marginBottom:20}}>
            {/* ADSENSE: <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXX"></script> */}
            <AdSlot height={90} label="728×90 Leaderboard · Google AdSense"/>
          </div>

          {/* Rules Panel */}
          {showRules && (
            <div className="card" style={{borderLeft:`4px solid ${C.info}`,padding:'18px 22px',marginBottom:16}}>
              <div style={{fontWeight:700,color:C.info,fontSize:12,textTransform:'uppercase',letterSpacing:1.5,marginBottom:12}}>{t.rulesTitle}</div>
              <div style={{display:'grid',gridTemplateColumns:'auto 1fr',gap:'7px 20px',fontSize:13}}>
                {t.rulesContent.map(([k,v],i)=>(
                  <>
                    <span key={`k${i}`} style={{color:C.muted,whiteSpace:'nowrap'}}>{k}</span>
                    <span key={`v${i}`} style={{color:C.txt,fontWeight:500}}>{v}</span>
                  </>
                ))}
              </div>
            </div>
          )}

          {/* Fines Panel */}
          {showBuss && (
            <div className="card" style={{borderLeft:`4px solid ${C.error}`,padding:'18px 22px',marginBottom:16}}>
              <div style={{fontWeight:700,color:C.error,fontSize:13,marginBottom:16}}>⚠️ {t.finesTitle}</div>
              {bussCategories.map(cat=>{
                const [bg,fg]=catColors[cat]||['#f0f0f0','#555'];
                return (
                  <div key={cat} style={{marginBottom:18}}>
                    <div style={{display:'inline-block',background:bg,color:fg,fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:1,padding:'3px 12px',borderRadius:20,marginBottom:10}}>{cat}</div>
                    <div style={{overflowX:'auto'}}>
                      <table className="buss-tbl">
                        <thead><tr>{t.finesCol.map((c,i)=><th key={i}>{c}</th>)}</tr></thead>
                        <tbody>
                          {BUSSGELDER.filter(b=>b.cat===cat).map((b,i)=>(
                            <tr key={i}>
                              <td style={{color:C.txt}}>{b.v}</td>
                              <td style={{color:C.error,fontWeight:700,whiteSpace:'nowrap'}}>{b.f}</td>
                              <td style={{color:C.error,fontWeight:700,whiteSpace:'nowrap'}}>{b.u}</td>
                              <td style={{color:C.dim,fontSize:12}}>{b.g}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })}
              <p style={{marginTop:4,fontSize:11,color:C.dim}}>{t.finesSource}</p>
            </div>
          )}

          {/* 3-column layout */}
          <div className="cols">

            {/* Left Ad */}
            <aside className="ad-side">
              <AdSlot height={600} label="160×600 Skyscraper"/>
            </aside>

            {/* Main */}
            <main>

              {/* Presets */}
              <div className="card" style={{padding:'18px 20px',marginBottom:14}}>
                <div style={{fontSize:11,fontWeight:700,color:C.dim,textTransform:'uppercase',letterSpacing:1.5,marginBottom:12}}>{t.quickselect}</div>
                <div className="presets">
                  {t.presets.map(p=>(
                    <button key={p.planned} className="preset-btn" onClick={()=>setPlanned(p.planned)} style={{
                      background:planned===p.planned?C.acc:C.white,
                      color:planned===p.planned?'#fff':C.muted,
                      border:`1px solid ${planned===p.planned?C.acc:C.border}`,
                      borderRadius:10,padding:'9px 16px',fontSize:13,cursor:'pointer',
                      fontWeight:planned===p.planned?700:500,
                      display:'flex',alignItems:'center',gap:7,
                      boxShadow:planned===p.planned?'0 4px 14px rgba(232,115,42,0.25)':'none',
                    }}>
                      <span>{p.icon}</span><span>{p.name}</span>
                      <span style={{fontSize:11,opacity:0.75,fontWeight:400}}>{p.sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="card" style={{padding:22,marginBottom:14}}>
                <div style={{fontSize:11,fontWeight:700,color:C.dim,textTransform:'uppercase',letterSpacing:1.5,marginBottom:18}}>{t.inputs}</div>
                <div className="form-grid">
                  <div><label style={LS}>{t.startTime}</label><input type="time" value={start} onChange={e=>setStart(e.target.value)} style={IS}/></div>
                  <div><label style={LS}>{t.plannedDrive}</label><input type="number" min={0} max={15} step={0.25} value={planned} onChange={e=>setPlanned(parseFloat(e.target.value)||0)} style={IS}/></div>
                  <div><label style={LS}>{t.drivenToday}</label><input type="number" min={0} max={10} step={0.25} value={drivenToday} onChange={e=>setDrivenToday(parseFloat(e.target.value)||0)} style={IS}/></div>
                  <div><label style={LS}>{t.sinceBreak}</label><input type="number" min={0} max={4.5} step={0.25} value={blockSincePause} onChange={e=>setBlockSincePause(parseFloat(e.target.value)||0)} style={IS}/></div>
                  <div><label style={LS}>{t.drivenWeek}</label><input type="number" min={0} max={56} step={0.5} value={drivenWeek} onChange={e=>setDrivenWeek(parseFloat(e.target.value)||0)} style={IS}/></div>
                  <div><label style={LS}>{t.drivenBiweek}</label><input type="number" min={0} max={90} step={0.5} value={drivenBiweek} onChange={e=>setDrivenBiweek(parseFloat(e.target.value)||0)} style={IS}/></div>
                  <div>
                    <label style={LS}>{t.extDays}</label>
                    <select value={extUsed} onChange={e=>setExtUsed(+e.target.value)} style={IS}>
                      <option value={0}>{t.ext0}</option><option value={1}>{t.ext1}</option><option value={2}>{t.ext2}</option>
                    </select>
                  </div>
                  <div>
                    <label style={LS}>{t.redRests}</label>
                    <select value={redRests} onChange={e=>setRedRests(+e.target.value)} style={IS}>
                      <option value={0}>{t.red0}</option><option value={1}>{t.red1}</option><option value={2}>{t.red2}</option><option value={3}>{t.red3}</option>
                    </select>
                  </div>
                  <div style={{gridColumn:'1/-1'}}>
                    <label style={{display:'flex',alignItems:'center',gap:10,padding:'12px 16px',background:C.bg,borderRadius:10,cursor:'pointer',userSelect:'none'}}>
                      <input type="checkbox" checked={splitBreak} onChange={e=>setSplitBreak(e.target.checked)} style={{accentColor:C.acc,width:17,height:17,cursor:'pointer'}}/>
                      <span style={{fontSize:13,color:C.muted,fontWeight:500}}>{t.splitBreak}</span>
                    </label>
                  </div>
                </div>
                <button className="btn-calc" onClick={run} style={{
                  marginTop:20,width:'100%',padding:'15px 0',
                  background:`linear-gradient(135deg,${C.acc},${C.accDark})`,
                  color:'#fff',border:'none',borderRadius:12,fontSize:15,fontWeight:800,
                  cursor:'pointer',letterSpacing:1,boxShadow:'0 4px 16px rgba(232,115,42,0.3)',
                }}>
                  {t.calculate}
                </button>
              </div>

              {/* Result */}
              {result && (
                <>
                  <div className="card" style={{padding:22,marginBottom:14}}>
                    {result.warn.length>0&&(
                      <div style={{marginBottom:16}}>
                        {result.warn.map((w,i)=>(
                          <div key={i} style={{
                            padding:'10px 16px',borderRadius:10,marginBottom:6,fontSize:13,fontWeight:500,
                            background:w.t==='error'?C.errorBg:w.t==='warn'?C.warningBg:C.infoBg,
                            border:`1px solid ${w.t==='error'?C.errorBorder:w.t==='warn'?C.warningBorder:C.infoBorder}`,
                            color:w.t==='error'?C.error:w.t==='warn'?C.warning:C.info,
                          }}>{w.t==='error'?'⛔':w.t==='warn'?'⚠️':'ℹ️'} {w.m}</div>
                        ))}
                      </div>
                    )}
                    <div className="stats-grid" style={{marginBottom:22}}>
                      <Stat label={t.statDay} value={fmt(result.totDay)} max={t.maxDay} pct={(result.totDay/10)*100}/>
                      <Stat label={t.statWeek} value={fmt(result.totWk)} max={t.maxWeek} pct={(result.totWk/56)*100}/>
                      <Stat label={t.statBi} value={fmt(result.totBi)} max={t.maxBi} pct={(result.totBi/90)*100}/>
                    </div>
                    <div style={{fontWeight:800,fontSize:11,textTransform:'uppercase',marginBottom:16,letterSpacing:2,color:C.acc}}>{t.dayPlan}</div>
                    <div style={{position:'relative',paddingLeft:30}}>
                      <div style={{position:'absolute',left:11,top:4,bottom:4,width:2,background:'#e9ecef',borderRadius:2}}/>
                      {result.ev.map((e,i)=>(
                        <div key={i} style={{display:'flex',alignItems:'flex-start',gap:14,marginBottom:14,position:'relative'}}>
                          <div style={{
                            position:'absolute',left:-21,top:4,width:10,height:10,borderRadius:'50%',
                            background:e.type==='start'||e.type==='ok'?C.success:e.type==='end'?C.acc:e.type==='break'?C.warning:e.type==='rest'?'#7c3aed':C.dim,
                            border:`2px solid ${C.white}`,boxShadow:'0 0 0 2px #dee2e6',
                          }}/>
                          <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:13,fontWeight:700,color:C.acc,minWidth:52}}>{e.time}</div>
                          <div style={{fontSize:13,color:C.txt,fontWeight:500}}><span style={{marginRight:8}}>{e.icon}</span>{e.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{marginBottom:14}}>
                    <AdSlot height={90} label="728×90 Leaderboard · Google AdSense"/>
                  </div>
                </>
              )}

              {/* FAQ */}
              <div className="card" style={{padding:'18px 22px',marginBottom:14}}>
                <h2 style={{fontSize:17,fontWeight:800,color:C.txt,marginBottom:4}}>{t.faqTitle}</h2>
                <div style={{height:3,width:36,background:C.acc,borderRadius:2,marginBottom:18}}/>
                {t.faq.map((f,i)=>(
                  <div key={i} style={{borderBottom:i<t.faq.length-1?`1px solid ${C.border}`:'none'}}>
                    <button className="faq-btn" onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{
                      width:'100%',background:'none',border:'none',padding:'14px 0',textAlign:'left',
                      cursor:'pointer',display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,
                      transition:'color 0.15s',
                    }}>
                      <span style={{fontSize:14,fontWeight:600,color:C.txt,lineHeight:1.4}}>{f.q}</span>
                      <span style={{color:C.acc,fontSize:22,flexShrink:0,transform:openFaq===i?'rotate(45deg)':'none',transition:'transform 0.2s',lineHeight:1}}>+</span>
                    </button>
                    {openFaq===i&&(
                      <p style={{margin:'0 0 14px',fontSize:13,color:C.muted,lineHeight:1.75}}>{f.a}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Legal */}
              <div className="card" style={{padding:'16px 22px',marginBottom:14,fontSize:12,color:C.muted,lineHeight:1.9}}>
                <div style={{fontWeight:700,fontSize:11,textTransform:'uppercase',letterSpacing:1.5,color:C.dim,marginBottom:10}}>{t.legalTitle}</div>
                <p style={{margin:'0 0 4px'}}>→ eur-lex.europa.eu – VO (EG) 561/2006</p>
                <p style={{margin:'0 0 4px'}}>→ gesetze-im-internet.de/fpersv – Fahrpersonalverordnung</p>
                <p style={{margin:'0 0 4px'}}>→ bmv.de – Mobilitätspaket I (ab 08/2020)</p>
                <p style={{margin:'12px 0 0',color:C.error,fontSize:12,fontWeight:500}}>{t.disclaimer}</p>
              </div>

              {/* Footer */}
              <footer style={{display:'flex',justifyContent:'center',gap:28,padding:'18px 0',fontSize:12,color:C.dim,borderTop:`1px solid ${C.border}`}}>
                <a href="/impressum" style={{color:C.dim,textDecoration:'none',fontWeight:500}}>Impressum</a>
                <a href="/datenschutz" style={{color:C.dim,textDecoration:'none',fontWeight:500}}>Datenschutz</a>
                <span>© 2026 LenkzeitRechner.de</span>
              </footer>
            </main>

            {/* Right Ad */}
            <aside className="ad-side">
              <AdSlot height={600} label="160×600 Skyscraper"/>
            </aside>
          </div>

          {/* Bottom Ad */}
          <div style={{marginTop:20}}>
            <AdSlot height={90} label="728×90 Leaderboard · Google AdSense"/>
          </div>
        </div>
      </div>
    </>
  );
}
