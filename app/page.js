"use client";
import { useState, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════
   Translations
   ═══════════════════════════════════════════════════════════ */
const LANGS = {
  de:{flag:'🇩🇪',label:'DEU'},en:{flag:'🇬🇧',label:'ENG'},ro:{flag:'🇷🇴',label:'ROM'},
  pl:{flag:'🇵🇱',label:'POL'},cs:{flag:'🇨🇿',label:'CZE'},bg:{flag:'🇧🇬',label:'BUL'},ru:{flag:'🇷🇺',label:'RUS'},
};

const T = {
  de:{
    badge:'Kostenloser Rechner',hero:'Lenkzeit­rechner.de',
    heroSub:'Lenk- und Ruhezeiten nach EU VO 561/2006 einfach und schnell berechnen — kostenlos, ohne Anmeldung.',
    rules:'Regeln',fines:'Bußgelder',quickselect:'Schnellauswahl',inputs:'Eingaben',
    startTime:'Startzeit',plannedDrive:'Geplante Fahrzeit (h)',drivenToday:'Heute gelenkt (h)',
    sinceBreak:'Davon ohne Pause (h)',drivenWeek:'Woche bisher (h)',drivenBiweek:'Doppelwoche bisher (h)',
    extDays:'10h-Tage diese Woche',ext0:'0 von 2',ext1:'1 von 2',ext2:'2 von 2',
    redRests:'Verkürzte Ruhezeiten (9h)',red0:'0 von 3',red1:'1 von 3',red2:'2 von 3',red3:'3 von 3',
    splitBreak:'Geteilte Pause (15 + 30 min)',calculate:'BERECHNEN',dayPlan:'Tagesplan',
    statDay:'Tageslenkzeit',statWeek:'Wochenlenkzeit',statBi:'Doppelwoche',
    maxDay:'/ max. 9–10h',maxWeek:'/ max. 56h',maxBi:'/ max. 90h',
    rulesTitle:'EU VO 561/2006 – Kurzübersicht',finesTitle:'Bußgelder bei Verstößen',
    finesSource:'Alle Angaben ohne Gewähr · Quelle: FPersG, BKatV, EU VO 561/2006',
    finesCol:['Verstoß','Fahrer','Unternehmer','Rechtsgrundlage'],
    faqTitle:'Häufige Fragen',legalTitle:'Rechtsgrundlagen',
    disclaimer:'⚠ Unverbindliche Berechnung. Kein Ersatz für den digitalen Tachographen oder Rechtsberatung.',
    adLabel:'Anzeige',
    presets:[{name:'Kurzstrecke',sub:'2h',planned:2,icon:'🏙️'},{name:'Halbtag',sub:'4h',planned:4,icon:'🛤️'},{name:'Tagestour',sub:'8h',planned:8,icon:'🚛'},{name:'Maximaltour',sub:'9,5h',planned:9.5,icon:'⚡'}],
    rulesContent:[['⏱ Tageslenkzeit','Max. 9h (2×/Woche bis 10h)'],['☕ Fahrtunterbrechung','Nach 4,5h → 45 min (oder 15+30)'],['📅 Wochenlenkzeit','Max. 56h'],['📅 Doppelwoche','Max. 90h'],['🛏 Tagesruhezeit','11h (3× verkürzt auf 9h)'],['🏠 Wochenruhezeit','45h (jede 2. Woche mind. 24h)'],['🚫 Nicht im LKW!','Reguläre Wochenruhe nicht im Fahrzeug']],
    faq:[{q:'Wie lange darf ein LKW-Fahrer täglich fahren?',a:'Maximal 9 Stunden pro Tag. An bis zu zwei Tagen pro Woche darf die Lenkzeit auf 10 Stunden verlängert werden (Art. 6 Abs. 1 VO 561/2006).'},{q:'Wann muss eine Pause eingelegt werden?',a:'Nach spätestens 4,5 Stunden ununterbrochener Lenkzeit ist eine Pause von mindestens 45 Minuten Pflicht. Alternativ: 15 Minuten, dann 30 Minuten (Art. 7 VO 561/2006).'},{q:'Wie lange ist die tägliche Ruhezeit?',a:'Mindestens 11 Stunden. Kann auf 9 Stunden verkürzt werden, maximal 3-mal zwischen zwei Wochenruhezeiten (Art. 8 VO 561/2006).'},{q:'Was ist die maximale Wochenlenkzeit?',a:'56 Stunden pro Woche, maximal 90 Stunden in zwei aufeinanderfolgenden Wochen (Art. 6 Abs. 2–3 VO 561/2006).'},{q:'Darf die Wochenruhe im LKW verbracht werden?',a:'Nein. Reguläre Wochenruhe (mind. 45h) nicht im Fahrzeug. Reduzierte Wochenruhe (24h) ist im LKW erlaubt (Art. 8 Abs. 8 VO 561/2006).'},{q:'Gilt das auch für Kleinbusse?',a:'Ja, für Fahrzeuge zur Personenbeförderung mit mehr als 9 Sitzplätzen sowie Güterfahrzeuge über 3,5t gilt EU VO 561/2006.'}],
    evLabels:{start:'Fahrtbeginn',end:'Ziel erreicht',break45:'Pause 45 min (Pflicht nach 4,5h)',break15:'Teilpause 1: 15 min',break30:'Teilpause 2: 30 min',resume:'Weiterfahrt',rest:'Tagesruhezeit beginnt (mind. ',restH:'h)',nextDrive:'Früheste nächste Fahrt möglich',limitReached:'Tageslimit erreicht'},
    warnNoMore:'Keine weitere Lenkzeit heute möglich!',warnBiweek:'Doppelwoche',warnOver90:'> 90h!',warnWeek:'Wochenlenkzeit',warnOver56:'> 56h!',warnDayMax:'Tageslenkzeit',warnOver:'überschreitet Maximum',warn10NoMore:'10h-Verlängerung bereits 2× genutzt – nicht zulässig!',warn10Used:(n)=>`10h-Tag wird genutzt (${n}× diese Woche noch möglich).`,warnBlockLeft:(t)=>`Noch ${t} Lenkzeit bis zur nächsten Pflichtpause.`,warnRedRest:(n)=>`Verkürzte Ruhezeit (9h) – noch ${n}× möglich.`,drivenLabel:(h)=>`${h} gelenkt`,
  },
  en:{
    badge:'Free Calculator',hero:'DrivingTime­Calculator',
    heroSub:'Calculate driving & rest times per EU Regulation 561/2006 — free, no registration required.',
    rules:'Rules',fines:'Penalties',quickselect:'Quick select',inputs:'Inputs',
    startTime:'Start time',plannedDrive:'Planned driving (h)',drivenToday:'Driven today (h)',
    sinceBreak:'Since last break (h)',drivenWeek:'This week (h)',drivenBiweek:'Two-week total (h)',
    extDays:'10h days this week',ext0:'0 of 2',ext1:'1 of 2',ext2:'2 of 2',
    redRests:'Reduced rest periods (9h)',red0:'0 of 3',red1:'1 of 3',red2:'2 of 3',red3:'3 of 3',
    splitBreak:'Split break (15 + 30 min)',calculate:'CALCULATE',dayPlan:'Day plan',
    statDay:'Daily driving',statWeek:'Weekly driving',statBi:'Two-week total',
    maxDay:'/ max. 9–10h',maxWeek:'/ max. 56h',maxBi:'/ max. 90h',
    rulesTitle:'EU Reg. 561/2006 – Summary',finesTitle:'Penalties for violations',
    finesSource:'No liability · Source: EU Reg. 561/2006',finesCol:['Violation','Driver','Operator','Legal basis'],
    faqTitle:'FAQ',legalTitle:'Legal basis',
    disclaimer:'⚠ Non-binding calculation. Not a substitute for a digital tachograph or legal advice.',
    adLabel:'Advertisement',
    presets:[{name:'Short trip',sub:'2h',planned:2,icon:'🏙️'},{name:'Half day',sub:'4h',planned:4,icon:'🛤️'},{name:'Full day',sub:'8h',planned:8,icon:'🚛'},{name:'Max tour',sub:'9.5h',planned:9.5,icon:'⚡'}],
    rulesContent:[['⏱ Daily driving','Max. 9h (2×/week up to 10h)'],['☕ Break','After 4.5h → 45 min (or 15+30)'],['📅 Weekly driving','Max. 56h'],['📅 Two-week','Max. 90h'],['🛏 Daily rest','11h (3× reduced to 9h)'],['🏠 Weekly rest','45h (every 2nd week min. 24h)'],['🚫 Not in truck!','Regular weekly rest not in vehicle']],
    faq:[{q:'How long can a truck driver drive per day?',a:'Maximum 9 hours per day. Up to twice a week the driving time may be extended to 10 hours (Art. 6(1) Reg. 561/2006).'},{q:'When must a break be taken?',a:'After at most 4.5 hours of continuous driving, a break of at least 45 minutes is mandatory. Alternatively: 15 minutes, then 30 minutes (Art. 7 Reg. 561/2006).'},{q:'How long is the daily rest period?',a:'At least 11 hours. May be reduced to 9 hours, maximum 3 times between two weekly rest periods (Art. 8 Reg. 561/2006).'},{q:'What is the maximum weekly driving time?',a:'56 hours per week, maximum 90 hours in two consecutive weeks (Art. 6(2–3) Reg. 561/2006).'},{q:'Can weekly rest be taken in the truck?',a:'No. Regular weekly rest (min. 45h) must not be spent in the vehicle. Reduced weekly rest (24h) is allowed (Art. 8(8) Reg. 561/2006).'},{q:'Does this apply to minibuses?',a:'Yes, vehicles carrying more than 9 passengers and goods vehicles over 3.5t are subject to EU Reg. 561/2006.'}],
    evLabels:{start:'Departure',end:'Destination reached',break45:'Break 45 min (mandatory after 4.5h)',break15:'Split break 1: 15 min',break30:'Split break 2: 30 min',resume:'Continue driving',rest:'Daily rest begins (min. ',restH:'h)',nextDrive:'Earliest next departure',limitReached:'Daily limit reached'},
    warnNoMore:'No more driving time possible today!',warnBiweek:'Two-week total',warnOver90:'> 90h!',warnWeek:'Weekly driving',warnOver56:'> 56h!',warnDayMax:'Daily driving',warnOver:'exceeds maximum',warn10NoMore:'10h extension already used twice – not permitted!',warn10Used:(n)=>`10h day used (${n}× still possible this week).`,warnBlockLeft:(t)=>`${t} driving time remaining before mandatory break.`,warnRedRest:(n)=>`Reduced rest (9h) – ${n}× still possible.`,drivenLabel:(h)=>`${h} driven`,
  },
  ro:{badge:'Calculator Gratuit',hero:'Calculator Timp Condus',heroSub:'Calculați timpii de conducere și odihnă conform UE VO 561/2006 — gratuit, fără înregistrare.',rules:'Reguli',fines:'Amenzi',quickselect:'Selecție rapidă',inputs:'Date',startTime:'Ora de plecare',plannedDrive:'Conducere planificată (h)',drivenToday:'Condus azi (h)',sinceBreak:'De la pauză (h)',drivenWeek:'Săptămâna (h)',drivenBiweek:'Două săptămâni (h)',extDays:'Zile 10h',ext0:'0 din 2',ext1:'1 din 2',ext2:'2 din 2',redRests:'Repaus redus (9h)',red0:'0 din 3',red1:'1 din 3',red2:'2 din 3',red3:'3 din 3',splitBreak:'Pauză împărțită (15+30 min)',calculate:'CALCULEAZĂ',dayPlan:'Plan zilnic',statDay:'Conducere zilnică',statWeek:'Conducere săpt.',statBi:'Două săptămâni',maxDay:'/ max. 9–10h',maxWeek:'/ max. 56h',maxBi:'/ max. 90h',rulesTitle:'UE VO 561/2006 – Rezumat',finesTitle:'Amenzi',finesSource:'Fără garanție · UE VO 561/2006',finesCol:['Încălcare','Șofer','Operator','Baza legală'],faqTitle:'Întrebări frecvente',legalTitle:'Baza legală',disclaimer:'⚠ Calcul neobligatoriu.',adLabel:'Publicitate',presets:[{name:'Scurt',sub:'2h',planned:2,icon:'🏙️'},{name:'Jumătate',sub:'4h',planned:4,icon:'🛤️'},{name:'Zi completă',sub:'8h',planned:8,icon:'🚛'},{name:'Maxim',sub:'9,5h',planned:9.5,icon:'⚡'}],rulesContent:[['⏱ Conducere zilnică','Max. 9h (2×/săpt. până la 10h)'],['☕ Întrerupere','După 4,5h → 45 min (sau 15+30)'],['📅 Conducere săpt.','Max. 56h'],['📅 Două săpt.','Max. 90h'],['🛏 Repaus zilnic','11h (3× redus la 9h)'],['🏠 Repaus săpt.','45h (la 2 săpt. min. 24h)'],['🚫 Nu în camion!','Repausul săpt. nu în vehicul']],faq:[{q:'Cât timp poate conduce un șofer pe zi?',a:'Maxim 9 ore pe zi. De două ori pe săptămână poate fi prelungit la 10 ore (Art. 6(1) VO 561/2006).'},{q:'Când trebuie luată o pauză?',a:'După cel mult 4,5 ore de conducere continuă, o pauză de cel puțin 45 de minute este obligatorie (Art. 7 VO 561/2006).'},{q:'Cât durează repausul zilnic?',a:'Cel puțin 11 ore. Poate fi redus la 9 ore, maximum de 3 ori (Art. 8 VO 561/2006).'},{q:'Care este conducerea maximă săptămânală?',a:'56 ore pe săptămână, maxim 90 ore în două săptămâni consecutive (Art. 6 VO 561/2006).'},{q:'Poate repausul să fie în camion?',a:'Nu. Repausul regulat (min. 45h) nu în vehicul (Art. 8(8) VO 561/2006).'},{q:'Valabil și pentru microbuze?',a:'Da, vehicule cu mai mult de 9 locuri și camioane peste 3,5t.'}],evLabels:{start:'Plecare',end:'Destinație atinsă',break45:'Pauză 45 min',break15:'Pauză parț. 1: 15 min',break30:'Pauză parț. 2: 30 min',resume:'Continuare',rest:'Repaus zilnic (min. ',restH:'h)',nextDrive:'Cea mai devreme plecare',limitReached:'Limita zilnică'},warnNoMore:'Nu mai e posibilă conducerea azi!',warnBiweek:'Două săptămâni',warnOver90:'> 90h!',warnWeek:'Conducere săpt.',warnOver56:'> 56h!',warnDayMax:'Conducere zilnică',warnOver:'depășește max.',warn10NoMore:'Prelungire 10h deja 2× – nepermis!',warn10Used:(n)=>`Zi 10h utilizată (${n}× posibil).`,warnBlockLeft:(t)=>`${t} rămas până la pauza obligatorie.`,warnRedRest:(n)=>`Repaus redus (9h) – ${n}× posibil.`,drivenLabel:(h)=>`${h} condus`,},
  pl:{badge:'Bezpłatny Kalkulator',hero:'Kalkulator Czasu Jazdy',heroSub:'Oblicz czasy jazdy i odpoczynku zgodnie z UE VO 561/2006 — bezpłatnie, bez rejestracji.',rules:'Zasady',fines:'Mandaty',quickselect:'Szybki wybór',inputs:'Dane',startTime:'Godzina startu',plannedDrive:'Planowana jazda (h)',drivenToday:'Przejechane dziś (h)',sinceBreak:'Od przerwy (h)',drivenWeek:'Tydzień (h)',drivenBiweek:'Dwa tygodnie (h)',extDays:'Dni 10h',ext0:'0 z 2',ext1:'1 z 2',ext2:'2 z 2',redRests:'Skrócone odpoczynki (9h)',red0:'0 z 3',red1:'1 z 3',red2:'2 z 3',red3:'3 z 3',splitBreak:'Przerwa podzielona (15+30 min)',calculate:'OBLICZ',dayPlan:'Plan dnia',statDay:'Jazda dzienna',statWeek:'Jazda tygodniowa',statBi:'Dwa tygodnie',maxDay:'/ maks. 9–10h',maxWeek:'/ maks. 56h',maxBi:'/ maks. 90h',rulesTitle:'UE VO 561/2006 – Podsumowanie',finesTitle:'Mandaty',finesSource:'Bez gwarancji · UE VO 561/2006',finesCol:['Naruszenie','Kierowca','Operator','Podstawa'],faqTitle:'FAQ',legalTitle:'Podstawa prawna',disclaimer:'⚠ Obliczenie niewiążące.',adLabel:'Reklama',presets:[{name:'Krótka',sub:'2h',planned:2,icon:'🏙️'},{name:'Pół dnia',sub:'4h',planned:4,icon:'🛤️'},{name:'Cały dzień',sub:'8h',planned:8,icon:'🚛'},{name:'Maks.',sub:'9,5h',planned:9.5,icon:'⚡'}],rulesContent:[['⏱ Jazda dzienna','Maks. 9h (2×/tydz. do 10h)'],['☕ Przerwa','Po 4,5h → 45 min (lub 15+30)'],['📅 Jazda tygodniowa','Maks. 56h'],['📅 Dwa tygodnie','Maks. 90h'],['🛏 Odpoczynek dzienny','11h (3× skrócony do 9h)'],['🏠 Odpoczynek tygodniowy','45h (co 2 tyg. min. 24h)'],['🚫 Nie w ciężarówce!','Regularny odpoczynek nie w pojeździe']],faq:[{q:'Jak długo kierowca może jeździć dziennie?',a:'Maksymalnie 9 godzin dziennie. Do dwóch razy w tygodniu można przedłużyć do 10 godzin (Art. 6(1) VO 561/2006).'},{q:'Kiedy należy zrobić przerwę?',a:'Po co najwyżej 4,5 godzinach obowiązkowa przerwa 45 minut (Art. 7 VO 561/2006).'},{q:'Jak długi jest dzienny czas odpoczynku?',a:'Co najmniej 11 godzin. Może być skrócony do 9 godzin maksymalnie 3 razy (Art. 8 VO 561/2006).'},{q:'Jaki jest maksymalny tygodniowy czas jazdy?',a:'56 godzin tygodniowo, maksymalnie 90 godzin w dwóch tygodniach (Art. 6 VO 561/2006).'},{q:'Czy odpoczynek można odbywać w ciężarówce?',a:'Nie. Regularny odpoczynek tygodniowy nie w pojeździe (Art. 8(8) VO 561/2006).'},{q:'Czy dotyczy też busów?',a:'Tak, pojazdy z więcej niż 9 miejscami i pojazdy towarowe powyżej 3,5t.'}],evLabels:{start:'Wyjazd',end:'Cel osiągnięty',break45:'Przerwa 45 min',break15:'Przerwa 1: 15 min',break30:'Przerwa 2: 30 min',resume:'Kontynuacja',rest:'Odpoczynek dzienny (min. ',restH:'h)',nextDrive:'Najwcześniejszy wyjazd',limitReached:'Limit dzienny'},warnNoMore:'Brak możliwości dalszej jazdy!',warnBiweek:'Dwa tygodnie',warnOver90:'> 90h!',warnWeek:'Jazda tygodniowa',warnOver56:'> 56h!',warnDayMax:'Jazda dzienna',warnOver:'przekracza maks.',warn10NoMore:'Przedłużenie 10h 2× – niedopuszczalne!',warn10Used:(n)=>`Dzień 10h (${n}× możliwe).`,warnBlockLeft:(t)=>`${t} do przerwy.`,warnRedRest:(n)=>`Skrócony odpoczynek – ${n}× możliwy.`,drivenLabel:(h)=>`${h} przejechane`,},
  cs:{badge:'Bezplatná Kalkulačka',hero:'Kalkulátor Doby Řízení',heroSub:'Výpočet doby řízení a odpočinku dle EU VO 561/2006 — zdarma, bez registrace.',rules:'Pravidla',fines:'Pokuty',quickselect:'Rychlý výběr',inputs:'Údaje',startTime:'Čas odjezdu',plannedDrive:'Plánovaná jízda (h)',drivenToday:'Dnes řízeno (h)',sinceBreak:'Od přestávky (h)',drivenWeek:'Týden (h)',drivenBiweek:'Dva týdny (h)',extDays:'Dny 10h',ext0:'0 ze 2',ext1:'1 ze 2',ext2:'2 ze 2',redRests:'Zkrácené odpočinky (9h)',red0:'0 ze 3',red1:'1 ze 3',red2:'2 ze 3',red3:'3 ze 3',splitBreak:'Rozdělená přestávka (15+30 min)',calculate:'VYPOČÍTAT',dayPlan:'Denní plán',statDay:'Denní řízení',statWeek:'Týdenní řízení',statBi:'Dva týdny',maxDay:'/ max. 9–10h',maxWeek:'/ max. 56h',maxBi:'/ max. 90h',rulesTitle:'EU VO 561/2006 – Přehled',finesTitle:'Pokuty',finesSource:'Bez záruky · EU VO 561/2006',finesCol:['Přestupek','Řidič','Dopravce','Základ'],faqTitle:'FAQ',legalTitle:'Právní základ',disclaimer:'⚠ Nezávazný výpočet.',adLabel:'Reklama',presets:[{name:'Krátká',sub:'2h',planned:2,icon:'🏙️'},{name:'Půl dne',sub:'4h',planned:4,icon:'🛤️'},{name:'Celý den',sub:'8h',planned:8,icon:'🚛'},{name:'Max.',sub:'9,5h',planned:9.5,icon:'⚡'}],rulesContent:[['⏱ Denní řízení','Max. 9h (2×/týd. až 10h)'],['☕ Přestávka','Po 4,5h → 45 min (nebo 15+30)'],['📅 Týdenní řízení','Max. 56h'],['📅 Dva týdny','Max. 90h'],['🛏 Denní odpočinek','11h (3× zkrácen na 9h)'],['🏠 Týdenní odpočinek','45h (každý 2. týden min. 24h)'],['🚫 Ne v nákladním!','Pravidelný odpočinek ne ve vozidle']],faq:[{q:'Jak dlouho může řidič řídit denně?',a:'Maximálně 9 hodin denně. Dvakrát týdně lze prodloužit na 10 hodin (čl. 6(1) VO 561/2006).'},{q:'Kdy je nutná přestávka?',a:'Po nejdéle 4,5 hodinách nepřetržité jízdy je povinná přestávka 45 minut (čl. 7 VO 561/2006).'},{q:'Jak dlouhý je denní odpočinek?',a:'Nejméně 11 hodin. Lze zkrátit na 9 hodin, maximálně 3krát (čl. 8 VO 561/2006).'},{q:'Jaká je maximální týdenní doba řízení?',a:'56 hodin týdně, maximálně 90 hodin ve dvou týdnech (čl. 6 VO 561/2006).'},{q:'Lze týdenní odpočinek trávit v nákladním?',a:'Ne. Pravidelný odpočinek ne ve vozidle (čl. 8(8) VO 561/2006).'},{q:'Platí to i pro mikrobusy?',a:'Ano, vozidla s více než 9 místy a nákladní vozidla nad 3,5t.'}],evLabels:{start:'Odjezd',end:'Cíl dosažen',break45:'Přestávka 45 min',break15:'Část 1: 15 min',break30:'Část 2: 30 min',resume:'Pokračování',rest:'Denní odpočinek (min. ',restH:'h)',nextDrive:'Nejdřívější odjezd',limitReached:'Denní limit'},warnNoMore:'Dnes již není možná další jízda!',warnBiweek:'Dva týdny',warnOver90:'> 90h!',warnWeek:'Týdenní řízení',warnOver56:'> 56h!',warnDayMax:'Denní řízení',warnOver:'překračuje max.',warn10NoMore:'Prodloužení 10h 2× – nepřípustné!',warn10Used:(n)=>`Den 10h (${n}× možné).`,warnBlockLeft:(t)=>`${t} do přestávky.`,warnRedRest:(n)=>`Zkrácený odpočinek – ${n}× možný.`,drivenLabel:(h)=>`${h} ujeto`,},
  bg:{badge:'Безплатен Калкулатор',hero:'Калкулатор Време Шофиране',heroSub:'Изчислете времето за шофиране и почивка по ЕС VO 561/2006 — безплатно.',rules:'Правила',fines:'Глоби',quickselect:'Бърз избор',inputs:'Данни',startTime:'Начален час',plannedDrive:'Планирано (h)',drivenToday:'Шофирано днес (h)',sinceBreak:'От почивката (h)',drivenWeek:'Седмица (h)',drivenBiweek:'Две седмици (h)',extDays:'Дни 10h',ext0:'0 от 2',ext1:'1 от 2',ext2:'2 от 2',redRests:'Намалена почивка (9h)',red0:'0 от 3',red1:'1 от 3',red2:'2 от 3',red3:'3 от 3',splitBreak:'Разделена почивка (15+30 мин)',calculate:'ИЗЧИСЛИ',dayPlan:'Дневен план',statDay:'Дневно',statWeek:'Седмично',statBi:'Две седмици',maxDay:'/ макс. 9–10ч',maxWeek:'/ макс. 56ч',maxBi:'/ макс. 90ч',rulesTitle:'ЕС VO 561/2006 – Обзор',finesTitle:'Глоби',finesSource:'Без гаранция · ЕС VO 561/2006',finesCol:['Нарушение','Шофьор','Оператор','Основание'],faqTitle:'Въпроси',legalTitle:'Правно основание',disclaimer:'⚠ Необвързващо изчисление.',adLabel:'Реклама',presets:[{name:'Кратък',sub:'2ч',planned:2,icon:'🏙️'},{name:'Полудень',sub:'4ч',planned:4,icon:'🛤️'},{name:'Пълен ден',sub:'8ч',planned:8,icon:'🚛'},{name:'Макс.',sub:'9,5ч',planned:9.5,icon:'⚡'}],rulesContent:[['⏱ Дневно','Макс. 9ч (2×/седм. до 10ч)'],['☕ Почивка','След 4,5ч → 45 мин (или 15+30)'],['📅 Седмично','Макс. 56ч'],['📅 Две седм.','Макс. 90ч'],['🛏 Дневна почивка','11ч (3× до 9ч)'],['🏠 Седмична почивка','45ч (мин. 24ч на 2 седм.)'],['🚫 Не в камиона!','Почивката не в превозното средство']],faq:[{q:'Колко часа може да шофира шофьор на ден?',a:'Максимум 9 часа. До два пъти седмично до 10 часа (Чл. 6(1) VO 561/2006).'},{q:'Кога трябва да се прави почивка?',a:'След 4,5 часа непрекъснато шофиране – 45 минути почивка (Чл. 7 VO 561/2006).'},{q:'Колко е дневната почивка?',a:'Поне 11 часа. Може до 9 часа, максимум 3 пъти (Чл. 8 VO 561/2006).'},{q:'Колко е максималното седмично шофиране?',a:'56 часа седмично, максимум 90 за две седмици (Чл. 6 VO 561/2006).'},{q:'Може ли почивката да е в камиона?',a:'Не. Редовната почивка не в превозното средство (Чл. 8(8) VO 561/2006).'},{q:'Важи ли за миниавтобуси?',a:'Да, за превозни средства с над 9 места и товарни над 3,5т.'}],evLabels:{start:'Тръгване',end:'Цел достигната',break45:'Почивка 45 мин',break15:'Почивка 1: 15 мин',break30:'Почивка 2: 30 мин',resume:'Продължаване',rest:'Дневна почивка (мин. ',restH:'ч)',nextDrive:'Следващо тръгване',limitReached:'Дневен лимит'},warnNoMore:'Повече шофиране невъзможно!',warnBiweek:'Две седмици',warnOver90:'> 90ч!',warnWeek:'Седмично',warnOver56:'> 56ч!',warnDayMax:'Дневно',warnOver:'надвишава макс.',warn10NoMore:'10ч вече 2× – недопустимо!',warn10Used:(n)=>`10ч ден (${n}× възможно).`,warnBlockLeft:(t)=>`${t} до почивката.`,warnRedRest:(n)=>`Намалена почивка – ${n}× възможна.`,drivenLabel:(h)=>`${h} изминати`,},
  ru:{badge:'Бесплатный Калькулятор',hero:'Калькулятор Времени Вождения',heroSub:'Рассчитайте время вождения и отдыха по EU VO 561/2006 — бесплатно, без регистрации.',rules:'Правила',fines:'Штрафы',quickselect:'Быстрый выбор',inputs:'Данные',startTime:'Время отправления',plannedDrive:'Планируемое вождение (ч)',drivenToday:'Проехано сегодня (ч)',sinceBreak:'С последнего перерыва (ч)',drivenWeek:'Неделя (ч)',drivenBiweek:'Две недели (ч)',extDays:'Дни 10ч',ext0:'0 из 2',ext1:'1 из 2',ext2:'2 из 2',redRests:'Сокращённый отдых (9ч)',red0:'0 из 3',red1:'1 из 3',red2:'2 из 3',red3:'3 из 3',splitBreak:'Разделённый перерыв (15+30 мин)',calculate:'РАССЧИТАТЬ',dayPlan:'Дневной план',statDay:'Суточное вождение',statWeek:'Недельное вождение',statBi:'Две недели',maxDay:'/ макс. 9–10ч',maxWeek:'/ макс. 56ч',maxBi:'/ макс. 90ч',rulesTitle:'EU VO 561/2006 – Обзор',finesTitle:'Штрафы',finesSource:'Без гарантий · EU VO 561/2006',finesCol:['Нарушение','Водитель','Оператор','Основание'],faqTitle:'FAQ',legalTitle:'Правовая основа',disclaimer:'⚠ Ориентировочный расчёт.',adLabel:'Реклама',presets:[{name:'Короткий',sub:'2ч',planned:2,icon:'🏙️'},{name:'Полдня',sub:'4ч',planned:4,icon:'🛤️'},{name:'Полный день',sub:'8ч',planned:8,icon:'🚛'},{name:'Макс.',sub:'9,5ч',planned:9.5,icon:'⚡'}],rulesContent:[['⏱ Суточное вождение','Макс. 9ч (2×/нед. до 10ч)'],['☕ Перерыв','После 4,5ч → 45 мин (или 15+30)'],['📅 Недельное вождение','Макс. 56ч'],['📅 Две недели','Макс. 90ч'],['🛏 Суточный отдых','11ч (3× до 9ч)'],['🏠 Еженедельный отдых','45ч (мин. 24ч каждые 2 нед.)'],['🚫 Не в кабине!','Регулярный отдых не в транспортном средстве']],faq:[{q:'Сколько часов может ехать дальнобойщик в день?',a:'Максимум 9 часов в день. До двух раз в неделю можно продлить до 10 часов (Ст. 6(1) VO 561/2006).'},{q:'Когда нужно делать перерыв?',a:'После 4,5 часов непрерывного вождения — перерыв 45 минут (Ст. 7 VO 561/2006).'},{q:'Сколько длится суточный отдых?',a:'Не менее 11 часов. Может быть сокращён до 9 часов максимум 3 раза (Ст. 8 VO 561/2006).'},{q:'Какое максимальное время вождения в неделю?',a:'56 часов в неделю, максимум 90 часов за две недели (Ст. 6 VO 561/2006).'},{q:'Можно ли проводить отдых в грузовике?',a:'Нет. Регулярный еженедельный отдых не в транспортном средстве (Ст. 8(8) VO 561/2006).'},{q:'Распространяется ли на микроавтобусы?',a:'Да, транспортные средства с более чем 9 местами и грузовые свыше 3,5т.'}],evLabels:{start:'Отправление',end:'Пункт назначения',break45:'Перерыв 45 мин',break15:'Перерыв 1: 15 мин',break30:'Перерыв 2: 30 мин',resume:'Продолжение',rest:'Суточный отдых (мин. ',restH:'ч)',nextDrive:'Ближайшее отправление',limitReached:'Суточный лимит'},warnNoMore:'Сегодня больше невозможно ехать!',warnBiweek:'Две недели',warnOver90:'> 90ч!',warnWeek:'Недельное вождение',warnOver56:'> 56ч!',warnDayMax:'Суточное вождение',warnOver:'превышает макс.',warn10NoMore:'10ч уже 2× – недопустимо!',warn10Used:(n)=>`10ч день (${n}× возможно).`,warnBlockLeft:(t)=>`${t} до следующего перерыва.`,warnRedRest:(n)=>`Сокращённый отдых – ${n}× возможен.`,drivenLabel:(h)=>`${h} пройдено`,},
};

/* ═══════════════════════════════════════════════════════════  Computation  ═══ */
const R={maxBlock:4.5,breakFull:0.75,breakS1:0.25,breakS2:0.5,maxDaily:9,maxDailyExt:10,maxWeekly:56,maxBiweekly:90,restDaily:11,restReduced:9};
const fmt=h=>{const hr=Math.floor(h);const mn=Math.round((h-hr)*60);return`${hr}h ${String(mn).padStart(2,'0')}min`;};
const addT=(s,hrs)=>{const[h,m]=s.split(':').map(Number);const t=h*60+m+Math.round(hrs*60);return`${String(Math.floor(t/60)%24).padStart(2,'0')}:${String(t%60).padStart(2,'0')}`;};

function compute(p,t){
  const ev=[],warn=[];let clock=p.start;
  const totDay=p.drivenToday+p.planned,totWk=p.drivenWeek+p.planned,totBi=p.drivenBiweek+p.planned;
  const canExt=p.extUsed<2,maxDay=(canExt&&totDay>9)?R.maxDailyExt:R.maxDaily;
  if(totDay>maxDay)warn.push({t:'error',m:`${t.warnDayMax} ${fmt(totDay)} ${t.warnOver} (${fmt(maxDay)})!`});
  if(totDay>9&&totDay<=10&&!canExt)warn.push({t:'error',m:t.warn10NoMore});
  if(totDay>9&&totDay<=10&&canExt)warn.push({t:'warn',m:t.warn10Used(1-p.extUsed)});
  if(totWk>R.maxWeekly)warn.push({t:'error',m:`${t.warnWeek} ${fmt(totWk)} ${t.warnOver56}`});
  if(totBi>R.maxBiweekly)warn.push({t:'error',m:`${t.warnBiweek} ${fmt(totBi)} ${t.warnOver90}`});
  let remaining=Math.min(p.planned,Math.max(0,maxDay-p.drivenToday));
  const restH=p.redRests<3?R.restReduced:R.restDaily;
  if(remaining<=0){warn.push({t:'error',m:t.warnNoMore});return{ev:[{time:clock,type:'info',label:t.evLabels.limitReached,icon:'⛔'}],warn,totDay,totWk,totBi,restH};}
  let contBlock=p.blockSincePause||0;ev.push({time:clock,type:'start',label:t.evLabels.start,icon:'🚛'});
  let driven=0,iterations=0;
  while(driven<remaining-0.01&&iterations<50){
    iterations++;const untilBreak=R.maxBlock-contBlock;
    if(untilBreak<=0.01){const bd=p.splitBreak?R.breakS1:R.breakFull;const bl=p.splitBreak?t.evLabels.break15:t.evLabels.break45;ev.push({time:clock,type:'break',label:bl,icon:'☕'});clock=addT(clock,bd);if(p.splitBreak){const c2=Math.min(remaining-driven,R.maxBlock);if(c2>0.01){ev.push({time:clock,type:'resume',label:t.evLabels.resume,icon:'🚛'});clock=addT(clock,c2);driven+=c2;}ev.push({time:clock,type:'break',label:t.evLabels.break30,icon:'☕'});clock=addT(clock,R.breakS2);}contBlock=0;if(driven<remaining-0.01)ev.push({time:clock,type:'resume',label:t.evLabels.resume,icon:'🚛'});continue;}
    const chunk=Math.min(remaining-driven,untilBreak);clock=addT(clock,chunk);driven+=chunk;contBlock+=chunk;
    if(contBlock>=R.maxBlock-0.01&&driven<remaining-0.01){const bd=p.splitBreak?R.breakS1:R.breakFull;const bl=p.splitBreak?t.evLabels.break15:t.evLabels.break45;ev.push({time:clock,type:'break',label:bl,icon:'☕'});clock=addT(clock,bd);if(p.splitBreak){const c2=Math.min(remaining-driven,R.maxBlock);if(c2>0.01){ev.push({time:clock,type:'resume',label:t.evLabels.resume,icon:'🚛'});clock=addT(clock,c2);driven+=c2;}ev.push({time:clock,type:'break',label:t.evLabels.break30,icon:'☕'});clock=addT(clock,R.breakS2);}contBlock=0;if(driven<remaining-0.01)ev.push({time:clock,type:'resume',label:t.evLabels.resume,icon:'🚛'});}
  }
  ev.push({time:clock,type:'end',label:`${t.evLabels.end} (${t.drivenLabel(fmt(driven))})`,icon:'🏁'});
  const lib=R.maxBlock-contBlock;if(lib>0.1&&driven<R.maxBlock)warn.push({t:'info',m:t.warnBlockLeft(fmt(lib))});
  ev.push({time:clock,type:'rest',label:`${t.evLabels.rest}${restH}${t.evLabels.restH}`,icon:'🛏️'});
  ev.push({time:addT(clock,restH),type:'ok',label:t.evLabels.nextDrive,icon:'✅'});
  if(p.redRests<3&&restH===9)warn.push({t:'info',m:t.warnRedRest(2-p.redRests)});
  return{ev,warn,totDay,totWk,totBi,restH};
}

const BUSSGELDER=[
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
  {cat:'Aufzeichnung',v:'Fahrerkarte nicht mitgeführt',f:'250 €',u:'500 €',g:'§ 8 FPersG'},
  {cat:'Aufzeichnung',v:'Tachograph manipuliert',f:'500 €',u:'2.000 €',g:'§ 23 FPersV'},
];

/* ═══════════════════════════════════════════════════════════  Colors  ═══ */
const DARK={
  bg:'#13151f',surface:'#1c1f2e',surface2:'#242738',border:'rgba(255,255,255,0.07)',
  acc:'#f0883e',accHover:'#e07020',accLight:'rgba(240,136,62,0.15)',
  txt:'#ffffff',muted:'#94a3b8',dim:'#64748b',
  success:'#22c55e',successBg:'rgba(34,197,94,0.12)',
  warning:'#f59e0b',warningBg:'rgba(245,158,11,0.12)',
  error:'#ef4444',errorBg:'rgba(239,68,68,0.12)',
  info:'#60a5fa',infoBg:'rgba(96,165,250,0.12)',
  navBg:'rgba(19,21,31,0.85)',inputBg:'#242738',inputBorder:'rgba(255,255,255,0.12)',
  dotGrid:'rgba(255,255,255,0.06)',hoverBg:'rgba(255,255,255,0.02)',checkBg:'rgba(255,255,255,0.03)',
  langBg:'rgba(255,255,255,0.06)',presetBg:'rgba(255,255,255,0.06)',colorScheme:'dark',
};
const LIGHT={
  bg:'#f4f5f7',surface:'#ffffff',surface2:'#f0f1f4',border:'rgba(0,0,0,0.1)',
  acc:'#e07020',accHover:'#c85e10',accLight:'rgba(224,112,32,0.1)',
  txt:'#1a1a2e',muted:'#555770',dim:'#888a9e',
  success:'#16a34a',successBg:'rgba(22,163,74,0.1)',
  warning:'#d97706',warningBg:'rgba(217,119,6,0.1)',
  error:'#dc2626',errorBg:'rgba(220,38,38,0.1)',
  info:'#2563eb',infoBg:'rgba(37,99,235,0.1)',
  navBg:'rgba(255,255,255,0.9)',inputBg:'#ffffff',inputBorder:'rgba(0,0,0,0.15)',
  dotGrid:'rgba(0,0,0,0.04)',hoverBg:'rgba(0,0,0,0.02)',checkBg:'rgba(0,0,0,0.04)',
  langBg:'rgba(0,0,0,0.05)',presetBg:'rgba(0,0,0,0.05)',colorScheme:'light',
};

function Stat({label,value,max,pct,c}){
  const color=pct>95?c.error:pct>80?c.warning:c.success;
  return(
    <div style={{background:c.surface2,border:`1px solid ${c.border}`,borderRadius:12,padding:'12px 10px',textAlign:'center'}}>
      <div style={{fontSize:10,color:c.dim,textTransform:'uppercase',letterSpacing:1.2,marginBottom:5,fontWeight:600}}>{label}</div>
      <div style={{fontSize:18,fontWeight:800,color,fontFamily:"'JetBrains Mono',monospace"}}>{value}</div>
      <div style={{fontSize:10,color:c.dim,marginTop:2}}>{max}</div>
      <div style={{marginTop:7,height:3,background:c.checkBg,borderRadius:2,overflow:'hidden'}}>
        <div style={{height:'100%',borderRadius:2,width:`${Math.min(pct,100)}%`,background:color,transition:'width 0.6s ease'}}/>
      </div>
    </div>
  );
}

function AdSlot({height,label,c}){
  return(
    <div style={{background:c.surface,border:`1px solid ${c.border}`,borderRadius:14,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',minHeight:height||90,color:c.dim,fontSize:11,textAlign:'center',padding:16,width:'100%',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',top:0,left:0,right:0,height:1,background:`linear-gradient(90deg,transparent,${c.acc}22,transparent)`}}/>
      <div style={{fontSize:9,textTransform:'uppercase',letterSpacing:2,marginBottom:6,opacity:0.4,fontWeight:600}}>{c.colorScheme==='dark'?'Anzeige':'Werbung'}</div>
      <div style={{opacity:0.25,fontSize:10}}>{label}</div>
    </div>
  );
}

export default function Home(){
  const[dark,setDark]=useState(true);
  const[lang,setLang]=useState('de');
  const[langOpen,setLangOpen]=useState(false);
  const[start,setStart]=useState('06:00');
  const[planned,setPlanned]=useState(4);
  const[drivenToday,setDrivenToday]=useState(0);
  const[blockSincePause,setBlockSincePause]=useState(0);
  const[drivenWeek,setDrivenWeek]=useState(28);
  const[drivenBiweek,setDrivenBiweek]=useState(55);
  const[extUsed,setExtUsed]=useState(0);
  const[redRests,setRedRests]=useState(0);
  const[splitBreak,setSplitBreak]=useState(false);
  const[result,setResult]=useState(null);
  const[showBuss,setShowBuss]=useState(false);
  const[showRules,setShowRules]=useState(false);
  const[cookieConsent,setCookieConsent]=useState(()=>{try{return localStorage.getItem('lzr_cookie_consent')==='1';}catch(e){return false;}});
  const[openFaq,setOpenFaq]=useState(null);
  const C=dark?DARK:LIGHT;
  const IS={background:C.inputBg,border:`1px solid ${C.inputBorder}`,borderRadius:8,color:C.txt,padding:'10px 12px',fontSize:14,width:'100%',minWidth:0,maxWidth:'100%',display:'block',outline:'none',boxSizing:'border-box',fontFamily:"'Plus Jakarta Sans',sans-serif",transition:'border-color 0.2s,box-shadow 0.2s',colorScheme:C.colorScheme};
  const LS={display:'block',fontSize:11,color:C.dim,marginBottom:5,fontWeight:600,textTransform:'uppercase',letterSpacing:0.8};
  const t=T[lang];
  const run=useCallback(()=>setResult(compute({start,planned,drivenToday,blockSincePause,drivenWeek,drivenBiweek,extUsed,redRests,splitBreak},T[lang])),[start,planned,drivenToday,blockSincePause,drivenWeek,drivenBiweek,extUsed,redRests,splitBreak,lang]);
  const bussCategories=[...new Set(BUSSGELDER.map(b=>b.cat))];
  const catColors={'Lenkzeiten':'#f97316','Pausen':'#eab308','Ruhezeiten':'#22c55e','Aufzeichnung':'#f0883e'};

  return(
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        body{font-family:'Plus Jakarta Sans',-apple-system,sans-serif;background:${C.bg};transition:background 0.3s;}
        .wrap{max-width:1200px;margin:0 auto;padding:0 24px;}
        .side-ads{display:none;}
        @media(min-width:1600px){.side-ads{display:flex;flex-direction:column;gap:16px;position:fixed;top:80px;z-index:10;}.side-ad-left{left:calc((100vw - 1200px)/2 - 180px);}.side-ad-right{right:calc((100vw - 1200px)/2 - 180px);}}
        .hero{display:flex;flex-direction:column;gap:32px;padding:48px 0 32px;}
        .hero-calc{max-width:100%;width:100%;}
        .main-layout{display:grid;grid-template-columns:1fr 300px;gap:24px;align-items:start;padding-bottom:60px;}
        .ad-side{display:flex;flex-direction:column;gap:16px;position:sticky;top:80px;}
        .ad-banner{width:100%;margin:16px 0;}
        .form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
        .form-grid > div{min-width:0;overflow:hidden;}
        .stats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
        .presets{display:flex;gap:8px;flex-wrap:wrap;}
        .buss-tbl{width:100%;border-collapse:collapse;}
        .buss-tbl th,.buss-tbl td{padding:9px 12px;text-align:left;font-size:12px;border-bottom:1px solid ${C.border};}
        .buss-tbl th{font-size:10px;text-transform:uppercase;letter-spacing:1px;color:${C.dim};font-weight:700;background:${C.checkBg};}
        .buss-tbl tr:hover td{background:${C.hoverBg};}
        .buss-tbl tr:last-child td{border-bottom:none;}
        input:focus,select:focus{border-color:${C.acc}!important;box-shadow:0 0 0 3px rgba(240,136,62,0.2)!important;outline:none;}
        input[type=time]{width:100%!important;max-width:100%!important;min-width:0!important;-webkit-appearance:none;appearance:none;font-size:16px!important;}
        input[type=time]::-webkit-calendar-picker-indicator{opacity:0.5;cursor:pointer;padding:0;margin:0;}
        input[type=number]::-webkit-inner-spin-button{opacity:1;}
        .btn-calc{transition:all 0.2s;}
        .btn-calc:hover{background:${C.accHover}!important;transform:translateY(-1px);box-shadow:0 8px 24px rgba(240,136,62,0.4)!important;}
        .btn-calc:active{transform:translateY(0);}
        .preset-btn{transition:all 0.15s;}
        .preset-btn:hover{border-color:${C.acc}!important;background:${C.accLight}!important;}
        .nav-link{color:${C.muted};text-decoration:none;font-size:14px;font-weight:500;transition:color 0.15s;padding:6px 0;}
        .nav-link:hover{color:${C.txt};}
        .lang-opt:hover{background:${C.accLight}!important;color:${C.acc}!important;}
        .faq-q:hover{color:${C.acc}!important;}
        .dot-grid{background-image:radial-gradient(circle,${C.dotGrid} 1px,transparent 1px);background-size:28px 28px;}
        .theme-btn{background:none;border:1px solid ${C.border};border-radius:8px;padding:6px 10px;cursor:pointer;color:${C.muted};font-size:16px;transition:all 0.15s;display:flex;align-items:center;justify-content:center;}
        .theme-btn:hover{border-color:${C.acc};color:${C.acc};background:${C.accLight};}
        @media(max-width:960px){.main-layout{grid-template-columns:1fr;}.ad-side{display:none;}}
        @media(max-width:580px){.form-grid{grid-template-columns:1fr;}.stats-grid{grid-template-columns:1fr 1fr;}.tips-grid{grid-template-columns:1fr!important;}.buss-tbl th:last-child,.buss-tbl td:last-child{display:none;}input[type=time],input[type=number],select{font-size:16px!important;padding:12px!important;height:48px!important;}}
        @media(max-width:380px){.stats-grid{grid-template-columns:1fr;}}
      `}</style>

      <div style={{minHeight:'100vh',background:C.bg,color:C.txt}} className="dot-grid">

        {/* ── Side Ads (large screens only) ── */}
        <div className="side-ads side-ad-left">
          <AdSlot height={600} label="160×600 Wide Skyscraper" c={C}/>
        </div>
        <div className="side-ads side-ad-right">
          <AdSlot height={600} label="160×600 Wide Skyscraper" c={C}/>
        </div>

        {/* ── Nav ── */}
        <nav style={{borderBottom:`1px solid ${C.border}`,background:C.navBg,backdropFilter:'blur(12px)',position:'sticky',top:0,zIndex:100,transition:'background 0.3s'}}>
          <div className="wrap" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:56,gap:16}}>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
              <div style={{background:'linear-gradient(135deg,#f97316,#ea580c)',borderRadius:10,width:34,height:34,display:'flex',alignItems:'center',justifyContent:'center',fontSize:18}}>🚛</div>
              <span style={{fontWeight:800,fontSize:16,color:C.txt}}>LenkzeitRechner.de</span>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:24}}>
              <a href="/lkw-lenkzeiten" className="nav-link">Lenkzeiten</a>
              <a href="/pausenrechner" className="nav-link">Pausenrechner</a>
              <a href="/impressum" className="nav-link">Impressum</a>
              {/* Theme toggle */}
              <button className="theme-btn" onClick={()=>setDark(!dark)} title={dark?'Hell':'Dunkel'}>
                {dark?'☀️':'🌙'}
              </button>
              {/* Language switcher */}
              <div style={{position:'relative'}}>
                <button onClick={()=>setLangOpen(!langOpen)} style={{background:C.langBg,border:`1px solid ${C.border}`,borderRadius:8,padding:'6px 12px',fontSize:13,fontWeight:600,cursor:'pointer',display:'flex',alignItems:'center',gap:6,color:C.txt,transition:'all 0.15s'}}>
                  {LANGS[lang].flag} {LANGS[lang].label} <span style={{fontSize:9,color:C.dim}}>▼</span>
                </button>
                {langOpen&&(
                  <div style={{position:'absolute',right:0,top:'calc(100% + 6px)',background:C.surface,border:`1px solid ${C.border}`,borderRadius:12,boxShadow:'0 16px 48px rgba(0,0,0,0.5)',zIndex:200,minWidth:130,overflow:'hidden'}}>
                    {Object.entries(LANGS).map(([code,{flag,label}])=>(
                      <button key={code} className="lang-opt" onClick={()=>{setLang(code);setLangOpen(false);setResult(null);}} style={{display:'flex',alignItems:'center',gap:10,width:'100%',padding:'9px 14px',background:lang===code?C.accLight:'transparent',color:lang===code?C.acc:C.txt,border:'none',cursor:'pointer',fontSize:13,fontWeight:lang===code?700:500,transition:'all 0.12s',textAlign:'left'}}>
                        <span style={{fontSize:18}}>{flag}</span>{label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>

        <div className="wrap">

          {/* ── Hero ── */}
          <div className="hero">
            {/* Text */}
            <div style={{paddingTop:8,textAlign:'left'}}>
              <div style={{display:'inline-flex',alignItems:'center',gap:8,background:C.accLight,border:`1px solid rgba(240,136,62,0.3)`,borderRadius:20,padding:'5px 14px',marginBottom:24}}>
                <span style={{width:7,height:7,borderRadius:'50%',background:C.acc,display:'inline-block'}}/>
                <span style={{fontSize:12,color:C.acc,fontWeight:600}}>{t.badge}</span>
              </div>
              <h1 style={{fontSize:'clamp(28px,4vw,52px)',fontWeight:800,color:C.txt,lineHeight:1.1,marginBottom:20,letterSpacing:-1}}>{t.hero}</h1>
              <p style={{fontSize:16,color:C.muted,lineHeight:1.75,marginBottom:32,maxWidth:460}}>{t.heroSub}</p>
              <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
                <a href="/lkw-lenkzeiten" style={{background:C.presetBg,border:`1px solid ${C.border}`,borderRadius:9,padding:'9px 18px',color:C.muted,fontSize:13,fontWeight:600,textDecoration:'none',transition:'all 0.15s'}}>
                  📋 {t.rules}
                </a>
                <a href="/pausenrechner" style={{background:C.presetBg,border:`1px solid ${C.border}`,borderRadius:9,padding:'9px 18px',color:C.muted,fontSize:13,fontWeight:600,textDecoration:'none',transition:'all 0.15s'}}>
                  ☕ Pausenrechner
                </a>
              </div>

              {/* Stats (after calculate) */}
              {result&&(
                <div className="stats-grid" style={{marginTop:28}}>
                  <Stat label={t.statDay} value={fmt(result.totDay)} max={t.maxDay} pct={(result.totDay/10)*100} c={C}/>
                  <Stat label={t.statWeek} value={fmt(result.totWk)} max={t.maxWeek} pct={(result.totWk/56)*100} c={C}/>
                  <Stat label={t.statBi} value={fmt(result.totBi)} max={t.maxBi} pct={(result.totBi/90)*100} c={C}/>
                </div>
              )}
            </div>

            {/* Calculator card (below text) */}
            <div className="hero-calc" style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:20,padding:24,boxShadow:`0 24px 64px ${dark?'rgba(0,0,0,0.4)':'rgba(0,0,0,0.08)'}`,transition:'background 0.3s, border-color 0.3s',textAlign:'left'}}>
              {/* Presets */}
              <div style={{marginBottom:16}}>
                <div style={{fontSize:10,color:C.dim,textTransform:'uppercase',letterSpacing:1.5,marginBottom:10,fontWeight:700}}>{t.quickselect}</div>
                <div className="presets">
                  {t.presets.map(p=>(
                    <button key={p.planned} className="preset-btn" onClick={()=>setPlanned(p.planned)} style={{background:planned===p.planned?C.acc:C.presetBg,color:planned===p.planned?'#fff':C.muted,border:`1px solid ${planned===p.planned?C.acc:C.border}`,borderRadius:8,padding:'7px 12px',fontSize:12,cursor:'pointer',fontWeight:planned===p.planned?700:500,display:'flex',alignItems:'center',gap:5}}>
                      <span>{p.icon}</span><span>{p.name}</span><span style={{opacity:0.6,fontSize:11}}>{p.sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div style={{fontSize:10,color:C.dim,textTransform:'uppercase',letterSpacing:1.5,marginBottom:12,fontWeight:700}}>{t.inputs}</div>
              <div className="form-grid">
                <div><label style={LS}>{t.startTime}</label><input type="time" value={start} onChange={e=>setStart(e.target.value)} style={IS}/></div>
                <div><label style={LS}>{t.plannedDrive}</label><input type="number" min={0} max={15} step={0.25} value={planned} onChange={e=>setPlanned(parseFloat(e.target.value)||0)} style={IS}/></div>
                <div><label style={LS}>{t.drivenToday}</label><input type="number" min={0} max={10} step={0.25} value={drivenToday} onChange={e=>setDrivenToday(parseFloat(e.target.value)||0)} style={IS}/></div>
                <div><label style={LS}>{t.sinceBreak}</label><input type="number" min={0} max={4.5} step={0.25} value={blockSincePause} onChange={e=>setBlockSincePause(parseFloat(e.target.value)||0)} style={IS}/></div>
                <div><label style={LS}>{t.drivenWeek}</label><input type="number" min={0} max={56} step={0.5} value={drivenWeek} onChange={e=>setDrivenWeek(parseFloat(e.target.value)||0)} style={IS}/></div>
                <div><label style={LS}>{t.drivenBiweek}</label><input type="number" min={0} max={90} step={0.5} value={drivenBiweek} onChange={e=>setDrivenBiweek(parseFloat(e.target.value)||0)} style={IS}/></div>
                <div><label style={LS}>{t.extDays}</label>
                  <select value={extUsed} onChange={e=>setExtUsed(+e.target.value)} style={IS}>
                    <option value={0}>{t.ext0}</option><option value={1}>{t.ext1}</option><option value={2}>{t.ext2}</option>
                  </select>
                </div>
                <div><label style={LS}>{t.redRests}</label>
                  <select value={redRests} onChange={e=>setRedRests(+e.target.value)} style={IS}>
                    <option value={0}>{t.red0}</option><option value={1}>{t.red1}</option><option value={2}>{t.red2}</option><option value={3}>{t.red3}</option>
                  </select>
                </div>
                <div style={{gridColumn:'1/-1'}}>
                  <label style={{display:'flex',alignItems:'center',gap:9,padding:'9px 12px',background:C.checkBg,borderRadius:8,cursor:'pointer',userSelect:'none'}}>
                    <input type="checkbox" checked={splitBreak} onChange={e=>setSplitBreak(e.target.checked)} style={{accentColor:C.acc,width:15,height:15,cursor:'pointer'}}/>
                    <span style={{fontSize:12,color:C.muted}}>{t.splitBreak}</span>
                  </label>
                </div>
              </div>
              <button className="btn-calc" onClick={run} style={{marginTop:16,width:'100%',padding:'13px 0',background:C.acc,color:'#fff',border:'none',borderRadius:10,fontSize:14,fontWeight:800,cursor:'pointer',letterSpacing:0.5,boxShadow:'0 4px 20px rgba(240,136,62,0.35)'}}>
                {t.calculate}
              </button>
            </div>
          </div>

          {/* ── Panels ── */}
          {/* ── 2-col layout: content + content sidebar ── */}
          <div className="main-layout">
            <main>
              {/* Result */}
              {result&&(
                <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:16,padding:20,marginBottom:16}}>
                  {result.warn.length>0&&(
                    <div style={{marginBottom:16}}>
                      {result.warn.map((w,i)=>(
                        <div key={i} style={{padding:'9px 14px',borderRadius:8,marginBottom:6,fontSize:13,fontWeight:500,background:w.t==='error'?C.errorBg:w.t==='warn'?C.warningBg:C.infoBg,border:`1px solid ${w.t==='error'?'rgba(239,68,68,0.3)':w.t==='warn'?'rgba(245,158,11,0.3)':'rgba(96,165,250,0.3)'}`,color:w.t==='error'?C.error:w.t==='warn'?C.warning:C.info}}>
                          {w.t==='error'?'⛔':w.t==='warn'?'⚠️':'ℹ️'} {w.m}
                        </div>
                      ))}
                    </div>
                  )}
                  <div style={{fontWeight:800,fontSize:10,textTransform:'uppercase',marginBottom:14,letterSpacing:2,color:C.acc}}>{t.dayPlan}</div>
                  <div style={{position:'relative',paddingLeft:28}}>
                    <div style={{position:'absolute',left:11,top:4,bottom:4,width:1,background:C.border}}/>
                    {result.ev.map((e,i)=>(
                      <div key={i} style={{display:'flex',alignItems:'flex-start',gap:12,marginBottom:12,position:'relative'}}>
                        <div style={{position:'absolute',left:-19,top:4,width:8,height:8,borderRadius:'50%',background:e.type==='start'||e.type==='ok'?C.success:e.type==='end'?C.acc:e.type==='break'?C.warning:e.type==='rest'?'#f0883e':C.dim,border:`2px solid ${C.bg}`}}/>
                        <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:12,fontWeight:700,color:C.acc,minWidth:48}}>{e.time}</div>
                        <div style={{fontSize:13,color:C.muted}}><span style={{marginRight:7}}>{e.icon}</span>{e.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Informational Guide Section ── */}
              <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:16,padding:'24px 24px',marginBottom:16}}>
                <h2 style={{fontSize:20,fontWeight:800,color:C.txt,marginBottom:6,lineHeight:1.3}}>Lenkzeiten und Ruhezeiten nach EU VO 561/2006 — kompakt erkl&auml;rt</h2>
                <div style={{height:2,width:40,background:C.acc,borderRadius:2,marginBottom:18}}/>
                <p style={{fontSize:14,color:C.muted,lineHeight:1.85,marginBottom:16}}>
                  Die EU-Verordnung (EG) Nr. 561/2006 regelt die Lenk- und Ruhezeiten f&uuml;r Berufskraftfahrer im Stra&szlig;eng&uuml;terverkehr und Personenverkehr. Sie gilt f&uuml;r alle Fahrzeuge zur G&uuml;terbef&ouml;rderung mit einem zul&auml;ssigen Gesamtgewicht &uuml;ber 3,5 Tonnen sowie f&uuml;r Fahrzeuge zur Personenbef&ouml;rderung mit mehr als 9 Sitzpl&auml;tzen. Die Verordnung dient dem Schutz der Fahrer, der Verkehrssicherheit und dem fairen Wettbewerb im Transportgewerbe.
                </p>

                <h3 style={{fontSize:16,fontWeight:700,color:C.acc,marginBottom:10,marginTop:20}}>Tageslenkzeit: Maximal 9 Stunden</h3>
                <p style={{fontSize:14,color:C.muted,lineHeight:1.85,marginBottom:12}}>
                  Ein Fahrer darf t&auml;glich h&ouml;chstens <strong style={{color:C.txt}}>9 Stunden</strong> lenken. An zwei Tagen pro Woche darf die Tageslenkzeit auf <strong style={{color:C.txt}}>10 Stunden</strong> verl&auml;ngert werden (Art. 6 Abs. 1). Die Tageslenkzeit ist die Gesamtlenkzeit zwischen zwei t&auml;glichen Ruhezeiten oder zwischen einer t&auml;glichen und einer w&ouml;chentlichen Ruhezeit. Nur reine Fahrzeit z&auml;hlt — Ladezeiten, Wartezeiten und Pausen sind nicht inbegriffen.
                </p>

                <h3 style={{fontSize:16,fontWeight:700,color:C.acc,marginBottom:10,marginTop:20}}>Pflichtpause nach 4,5 Stunden Lenkzeit</h3>
                <p style={{fontSize:14,color:C.muted,lineHeight:1.85,marginBottom:12}}>
                  Nach sp&auml;testens <strong style={{color:C.txt}}>4 Stunden 30 Minuten</strong> ununterbrochener Lenkzeit muss eine Pause von mindestens <strong style={{color:C.txt}}>45 Minuten</strong> eingelegt werden (Art. 7). Alternativ kann die Pause aufgeteilt werden: zuerst mindestens 15 Minuten, danach mindestens 30 Minuten — diese Reihenfolge ist zwingend vorgeschrieben. W&auml;hrend der Pause darf keine andere Arbeit verrichtet werden.
                </p>

                <h3 style={{fontSize:16,fontWeight:700,color:C.acc,marginBottom:10,marginTop:20}}>Wochen- und Doppelwochenlenkzeit</h3>
                <p style={{fontSize:14,color:C.muted,lineHeight:1.85,marginBottom:12}}>
                  Die w&ouml;chentliche Lenkzeit darf <strong style={{color:C.txt}}>56 Stunden</strong> nicht &uuml;berschreiten (Art. 6 Abs. 2). In zwei aufeinanderfolgenden Wochen sind maximal <strong style={{color:C.txt}}>90 Stunden</strong> zul&auml;ssig (Art. 6 Abs. 3). Das bedeutet: Nach einer Woche mit 56 Stunden Lenkzeit d&uuml;rfen in der Folgewoche h&ouml;chstens 34 Stunden gefahren werden. Disponenten m&uuml;ssen diese Grenze bei der Tourenplanung ber&uuml;cksichtigen.
                </p>

                <h3 style={{fontSize:16,fontWeight:700,color:C.acc,marginBottom:10,marginTop:20}}>T&auml;gliche und w&ouml;chentliche Ruhezeiten</h3>
                <p style={{fontSize:14,color:C.muted,lineHeight:1.85,marginBottom:12}}>
                  Innerhalb von 24 Stunden muss eine t&auml;gliche Ruhezeit von mindestens <strong style={{color:C.txt}}>11 Stunden</strong> eingehalten werden (Art. 8 Abs. 2). Diese kann maximal dreimal zwischen zwei w&ouml;chentlichen Ruhezeiten auf <strong style={{color:C.txt}}>9 Stunden</strong> verk&uuml;rzt werden. Die w&ouml;chentliche Ruhezeit betr&auml;gt mindestens <strong style={{color:C.txt}}>45 Stunden</strong>. Jede zweite Woche kann sie auf 24 Stunden reduziert werden — die Differenz muss innerhalb von drei Wochen nachgeholt werden.
                </p>
                <div style={{background:C.errorBg,border:`1px solid rgba(239,68,68,0.25)`,borderRadius:10,padding:'12px 16px',marginTop:12}}>
                  <p style={{fontSize:13,color:C.error,lineHeight:1.7,margin:0}}>
                    <strong>Wichtig:</strong> Die regul&auml;re w&ouml;chentliche Ruhezeit (45h) darf nicht im Fahrzeug verbracht werden (Art. 8 Abs. 8). Bei Versto&szlig; drohen dem Unternehmer Bu&szlig;gelder bis zu 500 €.
                  </p>
                </div>
              </div>

              {/* ── Ad #1: After informational content ── */}
              <div className="ad-banner">
                <AdSlot height={90} label="728×90 Leaderboard · Google AdSense" c={C}/>
              </div>

              {/* ── Practical Tips Section ── */}
              <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:16,padding:'24px 24px',marginBottom:16}}>
                <h2 style={{fontSize:18,fontWeight:800,color:C.txt,marginBottom:6}}>Praxistipps f&uuml;r Berufskraftfahrer</h2>
                <div style={{height:2,width:40,background:C.acc,borderRadius:2,marginBottom:18}}/>

                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}} className="tips-grid">
                  {[
                    {icon:'📱',title:'Digitaler Tachograph',text:'Der digitale Tachograph zeichnet Lenk-, Arbeits-, Bereitschafts- und Ruhezeiten automatisch auf. Pr\u00fcfen Sie t\u00e4glich die Aufzeichnungen und korrigieren Sie bei Bedarf manuell.'},
                    {icon:'📋',title:'Tourenplanung',text:'Planen Sie Ihre Route so, dass Pflichtpausen an Rastpl\u00e4tzen oder Autohöfen m\u00f6glich sind. Ber\u00fccksichtigen Sie Staus und Wartezeiten bei der Zeitkalkulation.'},
                    {icon:'⚖️',title:'Kontrollen & Nachweise',text:'Bei Stra\u00dfenkontrollen m\u00fcssen die Fahrerkarte und Ausdrucke der letzten 28 Tage vorgelegt werden. Fehlende Nachweise k\u00f6nnen sofort geahndet werden.'},
                    {icon:'💶',title:'Bu\u00dfgelder vermeiden',text:'\u00dcberschreitungen der Lenkzeit kosten den Fahrer 60–250 € und den Unternehmer 280–500 €. Bei Manipulation des Tachographen drohen bis zu 2.000 € f\u00fcr den Unternehmer.'},
                  ].map((tip,i)=>(
                    <div key={i} style={{background:C.surface2,border:`1px solid ${C.border}`,borderRadius:12,padding:'16px 18px'}}>
                      <div style={{fontSize:22,marginBottom:8}}>{tip.icon}</div>
                      <div style={{fontSize:14,fontWeight:700,color:C.txt,marginBottom:6}}>{tip.title}</div>
                      <p style={{fontSize:13,color:C.muted,lineHeight:1.75,margin:0}}>{tip.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Example Calculation Section ── */}
              <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:16,padding:'24px 24px',marginBottom:16}}>
                <h2 style={{fontSize:18,fontWeight:800,color:C.txt,marginBottom:6}}>Beispielrechnung: Typischer Fahrtag</h2>
                <div style={{height:2,width:40,background:C.acc,borderRadius:2,marginBottom:18}}/>
                <p style={{fontSize:14,color:C.muted,lineHeight:1.85,marginBottom:16}}>
                  Ein LKW-Fahrer startet um 06:00 Uhr und plant 8 Stunden Lenkzeit. So k&ouml;nnte sein Tagesplan nach EU VO 561/2006 aussehen:
                </p>
                <div style={{overflowX:'auto'}}>
                  <table className="buss-tbl">
                    <thead><tr><th>Uhrzeit</th><th>Aktivit&auml;t</th><th>Lenkzeit gesamt</th></tr></thead>
                    <tbody>
                      <tr><td style={{color:C.muted}}>06:00</td><td style={{color:C.txt}}>Fahrtbeginn</td><td style={{color:C.acc,fontWeight:700}}>0h</td></tr>
                      <tr><td style={{color:C.muted}}>10:30</td><td style={{color:C.warning}}>Pflichtpause 45 min (nach 4,5h)</td><td style={{color:C.acc,fontWeight:700}}>4h 30min</td></tr>
                      <tr><td style={{color:C.muted}}>11:15</td><td style={{color:C.txt}}>Weiterfahrt</td><td style={{color:C.acc,fontWeight:700}}>4h 30min</td></tr>
                      <tr><td style={{color:C.muted}}>14:45</td><td style={{color:C.success}}>Ziel erreicht — 8h gelenkt</td><td style={{color:C.acc,fontWeight:700}}>8h 00min</td></tr>
                      <tr><td style={{color:C.muted}}>14:45</td><td style={{color:C.info}}>Tagesruhezeit beginnt (mind. 11h)</td><td style={{color:C.dim}}>—</td></tr>
                      <tr><td style={{color:C.muted}}>01:45+</td><td style={{color:C.success}}>Fr&uuml;heste n&auml;chste Fahrt m&ouml;glich</td><td style={{color:C.dim}}>—</td></tr>
                    </tbody>
                  </table>
                </div>
                <p style={{fontSize:13,color:C.dim,marginTop:12,lineHeight:1.7}}>
                  Nutzen Sie unseren Rechner oben, um Ihren eigenen Tagesplan mit individuellen Werten zu berechnen. Der Rechner ber&uuml;cksichtigt automatisch geteilte Pausen, verk&uuml;rzte Ruhezeiten und 10-Stunden-Verl&auml;ngerungen.
                </p>
              </div>

              {/* FAQ */}
              <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:16,padding:'18px 20px',marginBottom:16}}>
                <h2 style={{fontSize:16,fontWeight:800,color:C.txt,marginBottom:4}}>{t.faqTitle}</h2>
                <div style={{height:2,width:32,background:C.acc,borderRadius:2,marginBottom:16}}/>
                {t.faq.map((f,i)=>(
                  <div key={i} style={{borderBottom:i<t.faq.length-1?`1px solid ${C.border}`:'none'}}>
                    <button className="faq-q" onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{width:'100%',background:'none',border:'none',padding:'13px 0',textAlign:'left',cursor:'pointer',display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,transition:'color 0.15s'}}>
                      <span style={{fontSize:13,fontWeight:600,color:C.txt,lineHeight:1.4}}>{f.q}</span>
                      <span style={{color:C.acc,fontSize:20,flexShrink:0,transform:openFaq===i?'rotate(45deg)':'none',transition:'transform 0.2s',lineHeight:1}}>+</span>
                    </button>
                    {openFaq===i&&<p style={{margin:'0 0 13px',fontSize:13,color:C.muted,lineHeight:1.75}}>{f.a}</p>}
                  </div>
                ))}
              </div>

              {/* ── Ad #2: Between FAQ and penalties overview ── */}
              <div className="ad-banner">
                <AdSlot height={250} label="300×250 Rectangle · Google AdSense" c={C}/>
              </div>

              {/* ── Penalties Overview (always visible, compact) ── */}
              <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:16,padding:'24px 24px',marginBottom:16}}>
                <h2 style={{fontSize:18,fontWeight:800,color:C.txt,marginBottom:6}}>Bu&szlig;geldkatalog: Verst&ouml;&szlig;e gegen Lenk- und Ruhezeiten</h2>
                <div style={{height:2,width:40,background:C.acc,borderRadius:2,marginBottom:14}}/>
                <p style={{fontSize:14,color:C.muted,lineHeight:1.85,marginBottom:16}}>
                  Verst&ouml;&szlig;e gegen die Lenk- und Ruhezeitvorschriften werden sowohl f&uuml;r den Fahrer als auch f&uuml;r den Unternehmer geahndet. Die H&ouml;he der Bu&szlig;gelder richtet sich nach Art und Schwere des Versto&szlig;es. Hier die wichtigsten F&auml;lle nach dem Bu&szlig;geldkatalog (BKatV) und dem Fahrpersonalgesetz (FPersG):
                </p>
                <div style={{overflowX:'auto'}}>
                  <table className="buss-tbl">
                    <thead><tr>{t.finesCol.map((c,i)=><th key={i}>{c}</th>)}</tr></thead>
                    <tbody>
                      {BUSSGELDER.map((b,i)=>(
                        <tr key={i}>
                          <td style={{color:C.muted}}>{b.v}</td>
                          <td style={{color:C.error,fontWeight:700,whiteSpace:'nowrap'}}>{b.f}</td>
                          <td style={{color:C.error,fontWeight:700,whiteSpace:'nowrap'}}>{b.u}</td>
                          <td style={{color:C.dim,fontSize:11}}>{b.g}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{marginTop:10,fontSize:11,color:C.dim}}>{t.finesSource}</p>
              </div>

              {/* ── Who does this apply to ── */}
              <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:16,padding:'24px 24px',marginBottom:16}}>
                <h2 style={{fontSize:18,fontWeight:800,color:C.txt,marginBottom:6}}>F&uuml;r wen gelten die Lenk- und Ruhezeitvorschriften?</h2>
                <div style={{height:2,width:40,background:C.acc,borderRadius:2,marginBottom:14}}/>
                <p style={{fontSize:14,color:C.muted,lineHeight:1.85,marginBottom:12}}>
                  Die EU-Verordnung (EG) Nr. 561/2006 gilt f&uuml;r folgende Fahrzeuge:
                </p>
                <ul style={{fontSize:14,color:C.muted,lineHeight:2,paddingLeft:20,marginBottom:12}}>
                  <li>Fahrzeuge zur <strong style={{color:C.txt}}>G&uuml;terbef&ouml;rderung</strong> mit einem zul&auml;ssigen Gesamtgewicht &uuml;ber <strong style={{color:C.txt}}>3,5 Tonnen</strong></li>
                  <li>Fahrzeuge zur <strong style={{color:C.txt}}>Personenbef&ouml;rderung</strong> mit mehr als <strong style={{color:C.txt}}>9 Sitzpl&auml;tzen</strong> (inkl. Fahrersitz)</li>
                </ul>
                <p style={{fontSize:14,color:C.muted,lineHeight:1.85,marginBottom:12}}>
                  <strong style={{color:C.txt}}>Ausgenommen</strong> sind unter anderem: Fahrzeuge mit einer bauartbedingten H&ouml;chstgeschwindigkeit von maximal 40 km/h, Fahrzeuge der Streitkr&auml;fte, Feuerwehr, Polizei und Katastrophenschutz, Fahrzeuge f&uuml;r nichtgewerbliche G&uuml;terbef&ouml;rderung sowie bestimmte Spezialfahrzeuge (Art. 3 und 13 VO 561/2006).
                </p>
                <p style={{fontSize:14,color:C.muted,lineHeight:1.85}}>
                  Seit dem <strong style={{color:C.txt}}>Mobilit&auml;tspaket I (August 2020)</strong> gelten versch&auml;rfte Regeln f&uuml;r die Durchsetzung, darunter Smart-Tachographen der zweiten Generation und strengere Kontrollen der Wochenruhezeiten.
                </p>
              </div>

              {/* Legal */}
              <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:16,padding:'14px 20px',marginBottom:16,fontSize:12,color:C.dim,lineHeight:1.9}}>
                <div style={{fontWeight:700,fontSize:10,textTransform:'uppercase',letterSpacing:1.5,color:C.dim,marginBottom:8}}>{t.legalTitle}</div>
                <p style={{margin:'0 0 3px'}}>→ eur-lex.europa.eu – VO (EG) 561/2006</p>
                <p style={{margin:'0 0 3px'}}>→ gesetze-im-internet.de/fpersv – Fahrpersonalverordnung</p>
                <p style={{margin:'0 0 3px'}}>→ bmv.de – Mobilit&auml;tspaket I (ab 08/2020)</p>
                <p style={{margin:'12px 0 0',color:C.error,fontSize:12}}>{t.disclaimer}</p>
              </div>

              {/* ── Ad #3: Before footer ── */}
              <div className="ad-banner">
                <AdSlot height={90} label="728×90 Leaderboard · Google AdSense" c={C}/>
              </div>

              <footer style={{display:'flex',justifyContent:'center',gap:24,padding:'16px 0',fontSize:12,color:C.dim,borderTop:`1px solid ${C.border}`}}>
                <a href="/impressum" style={{color:C.dim,textDecoration:'none'}}>Impressum</a>
                <a href="/datenschutz" style={{color:C.dim,textDecoration:'none'}}>Datenschutz</a>
                <span>© 2026 LenkzeitRechner.de</span>
              </footer>
            </main>

            {/* Content sidebar with navigation + one ad */}
            <aside className="ad-side">
              {/* Quick navigation */}
              <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:14,padding:'16px 18px',marginBottom:16}}>
                <div style={{fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:1.2,color:C.acc,marginBottom:12}}>Weitere Rechner & Infos</div>
                <a href="/lkw-lenkzeiten" style={{display:'block',padding:'10px 12px',borderRadius:8,marginBottom:6,background:C.surface2,color:C.txt,textDecoration:'none',fontSize:13,fontWeight:600,transition:'background 0.15s'}}>
                  📋 LKW Lenkzeiten 2026
                </a>
                <a href="/pausenrechner" style={{display:'block',padding:'10px 12px',borderRadius:8,marginBottom:6,background:C.surface2,color:C.txt,textDecoration:'none',fontSize:13,fontWeight:600,transition:'background 0.15s'}}>
                  ☕ Pausenrechner
                </a>
                <a href="/impressum" style={{display:'block',padding:'10px 12px',borderRadius:8,background:C.surface2,color:C.txt,textDecoration:'none',fontSize:13,fontWeight:600,transition:'background 0.15s'}}>
                  📄 Impressum
                </a>
              </div>
              {/* Key facts box */}
              <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:14,padding:'16px 18px',marginBottom:16}}>
                <div style={{fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:1.2,color:C.acc,marginBottom:12}}>Wichtige Grenzwerte</div>
                {[
                  ['Tageslenkzeit','max. 9h (2x 10h)'],
                  ['Pflichtpause','nach 4,5h mind. 45 min'],
                  ['Wochenlenkzeit','max. 56h'],
                  ['Doppelwoche','max. 90h'],
                  ['Tagesruhezeit','mind. 11h (3x 9h)'],
                  ['Wochenruhezeit','mind. 45h'],
                ].map(([k,v],i)=>(
                  <div key={i} style={{display:'flex',justifyContent:'space-between',padding:'7px 0',borderBottom:i<5?`1px solid ${C.border}`:'none',fontSize:12}}>
                    <span style={{color:C.muted}}>{k}</span>
                    <span style={{color:C.txt,fontWeight:600,fontFamily:"'JetBrains Mono',monospace",fontSize:11}}>{v}</span>
                  </div>
                ))}
              </div>
              {/* Single sidebar ad */}
              <AdSlot height={250} label="300×250 Medium Rectangle" c={C}/>
            </aside>
          </div>
        </div>

        {/* ── Cookie Consent Banner ── */}
        {!cookieConsent&&(
          <div style={{position:'fixed',bottom:0,left:0,right:0,background:C.surface,borderTop:`1px solid ${C.border}`,padding:'16px 24px',zIndex:9999,boxShadow:'0 -4px 24px rgba(0,0,0,0.3)',display:'flex',alignItems:'center',justifyContent:'center',gap:16,flexWrap:'wrap'}}>
            <p style={{fontSize:13,color:C.muted,margin:0,maxWidth:600,lineHeight:1.6}}>
              Diese Website verwendet Cookies und Google AdSense f&uuml;r personalisierte Werbung. Durch die Nutzung dieser Website stimmen Sie der Verwendung von Cookies gem&auml;&szlig; unserer <a href="/datenschutz" style={{color:C.acc,textDecoration:'underline'}}>Datenschutzerkl&auml;rung</a> zu.
            </p>
            <div style={{display:'flex',gap:8}}>
              <button onClick={()=>{setCookieConsent(true);try{localStorage.setItem('lzr_cookie_consent','1');}catch(e){}}} style={{background:C.acc,color:'#fff',border:'none',borderRadius:8,padding:'9px 20px',fontSize:13,fontWeight:700,cursor:'pointer'}}>Akzeptieren</button>
              <button onClick={()=>{setCookieConsent(true);try{localStorage.setItem('lzr_cookie_consent','1');}catch(e){}}} style={{background:C.surface2,color:C.muted,border:`1px solid ${C.border}`,borderRadius:8,padding:'9px 20px',fontSize:13,fontWeight:600,cursor:'pointer'}}>Nur notwendige</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
