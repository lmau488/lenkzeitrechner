"use client";
import { useState, useCallback } from "react";

/* ════════════════════════════════════════════════
   EU VO (EG) 561/2006 + EU 2020/1054
   Lenk- & Ruhezeitenrechner
   ════════════════════════════════════════════════ */

const R = {
  maxBlock: 4.5, breakFull: 0.75, breakS1: 0.25, breakS2: 0.5,
  maxDaily: 9, maxDailyExt: 10, maxWeekly: 56, maxBiweekly: 90,
  restDaily: 11, restReduced: 9,
};

const fmt = h => { const hr = Math.floor(h); const mn = Math.round((h - hr) * 60); return `${hr}h ${String(mn).padStart(2,'0')}min`; };
const addT = (s, hrs) => { const [h,m] = s.split(':').map(Number); const t = h*60+m+Math.round(hrs*60); return `${String(Math.floor(t/60)%24).padStart(2,'0')}:${String(t%60).padStart(2,'0')}`; };

function compute(p) {
  const ev = [], warn = [];
  let clock = p.start;
  const totDay = p.drivenToday + p.planned;
  const totWk = p.drivenWeek + p.planned;
  const totBi = p.drivenBiweek + p.planned;
  const canExt = p.extUsed < 2;
  const maxDay = (canExt && totDay > 9) ? R.maxDailyExt : R.maxDaily;

  if (totDay > maxDay) warn.push({ t:'error', m:`Tageslenkzeit ${fmt(totDay)} überschreitet Maximum (${fmt(maxDay)})!` });
  if (totDay > 9 && totDay <= 10 && !canExt) warn.push({ t:'error', m:'10h-Verlängerung bereits 2× genutzt – nicht zulässig!' });
  if (totDay > 9 && totDay <= 10 && canExt) warn.push({ t:'warn', m:`10h-Tag wird genutzt (${1-p.extUsed}× diese Woche noch möglich).` });
  if (totWk > R.maxWeekly) warn.push({ t:'error', m:`Wochenlenkzeit ${fmt(totWk)} > 56h!` });
  if (totBi > R.maxBiweekly) warn.push({ t:'error', m:`Doppelwoche ${fmt(totBi)} > 90h!` });

  let remaining = Math.min(p.planned, Math.max(0, maxDay - p.drivenToday));
  const restH = p.redRests < 3 ? R.restReduced : R.restDaily;

  if (remaining <= 0) {
    warn.push({ t:'error', m:'Keine weitere Lenkzeit heute möglich!' });
    return { ev:[{ time:clock, type:'info', label:'Tageslimit erreicht', icon:'⛔' }], warn, totDay, totWk, totBi, restH };
  }

  let contBlock = p.blockSincePause || 0;
  ev.push({ time:clock, type:'start', label:'Fahrtbeginn', icon:'🚛' });

  let driven = 0;
  let iterations = 0;
  while (driven < remaining - 0.01 && iterations < 50) {
    iterations++;
    const untilBreak = R.maxBlock - contBlock;

    if (untilBreak <= 0.01) {
      const breakDur = p.splitBreak ? R.breakS1 : R.breakFull;
      const breakLabel = p.splitBreak ? 'Teilpause 1: 15 min' : 'Pause 45 min (Pflicht nach 4,5h)';
      ev.push({ time:clock, type:'break', label:breakLabel, icon:'☕' });
      clock = addT(clock, breakDur);
      if (p.splitBreak) {
        const chunk2 = Math.min(remaining - driven, R.maxBlock);
        if (chunk2 > 0.01) {
          ev.push({ time:clock, type:'resume', label:'Weiterfahrt', icon:'🚛' });
          clock = addT(clock, chunk2);
          driven += chunk2;
        }
        ev.push({ time:clock, type:'break', label:'Teilpause 2: 30 min', icon:'☕' });
        clock = addT(clock, R.breakS2);
      }
      contBlock = 0;
      if (driven < remaining - 0.01) ev.push({ time:clock, type:'resume', label:'Weiterfahrt', icon:'🚛' });
      continue;
    }

    const chunk = Math.min(remaining - driven, untilBreak);
    clock = addT(clock, chunk);
    driven += chunk;
    contBlock += chunk;

    if (contBlock >= R.maxBlock - 0.01 && driven < remaining - 0.01) {
      const breakDur = p.splitBreak ? R.breakS1 : R.breakFull;
      const breakLabel = p.splitBreak ? 'Teilpause 1: 15 min' : 'Pause 45 min (Pflicht nach 4,5h)';
      ev.push({ time:clock, type:'break', label:breakLabel, icon:'☕' });
      clock = addT(clock, breakDur);
      if (p.splitBreak) {
        const chunk2 = Math.min(remaining - driven, R.maxBlock);
        if (chunk2 > 0.01) {
          ev.push({ time:clock, type:'resume', label:'Weiterfahrt', icon:'🚛' });
          clock = addT(clock, chunk2);
          driven += chunk2;
        }
        ev.push({ time:clock, type:'break', label:'Teilpause 2: 30 min', icon:'☕' });
        clock = addT(clock, R.breakS2);
      }
      contBlock = 0;
      if (driven < remaining - 0.01) ev.push({ time:clock, type:'resume', label:'Weiterfahrt', icon:'🚛' });
    }
  }

  ev.push({ time:clock, type:'end', label:`Ziel erreicht (${fmt(driven)} gelenkt)`, icon:'🏁' });
  const leftInBlock = R.maxBlock - contBlock;
  if (leftInBlock > 0.1 && driven < R.maxBlock) {
    warn.push({ t:'info', m:`Noch ${fmt(leftInBlock)} Lenkzeit bis zur nächsten Pflichtpause.` });
  }
  ev.push({ time:clock, type:'rest', label:`Tagesruhezeit beginnt (mind. ${restH}h)`, icon:'🛏️' });
  ev.push({ time:addT(clock, restH), type:'ok', label:'Früheste nächste Fahrt möglich', icon:'✅' });
  if (p.redRests < 3 && restH === 9) warn.push({ t:'info', m:`Verkürzte Ruhezeit (9h) – noch ${2-p.redRests}× möglich.` });

  return { ev, warn, totDay, totWk, totBi, restH };
}

/* ─── Design Tokens ─── */
const C = {
  bg: '#f4f5f7',
  white: '#ffffff',
  border: '#dde1e7',
  acc: '#e8732a',
  accLight: '#fff4ed',
  txt: '#1c1e21',
  muted: '#5f6b7a',
  dim: '#9ea8b5',
  success: '#1a7f37',
  successBg: '#dafbe1',
  successBorder: '#82cfaa',
  warning: '#9a6700',
  warningBg: '#fff8c5',
  warningBorder: '#e3b341',
  error: '#cf222e',
  errorBg: '#ffebe9',
  errorBorder: '#ff8182',
  info: '#0550ae',
  infoBg: '#ddf4ff',
  infoBorder: '#80ccff',
};

const PRESETS = [
  { name:'Kurzstrecke', sub:'2h', planned:2, icon:'🏙️' },
  { name:'Halbtag', sub:'4h', planned:4, icon:'🛤️' },
  { name:'Tagestour', sub:'8h', planned:8, icon:'🚛' },
  { name:'Maximaltour', sub:'9,5h', planned:9.5, icon:'⚡' },
];

const BUSSGELDER = [
  { cat:'Lenkzeiten', v:'Tageslenkzeit 1–2h überschritten', f:'60 €', u:'280 €', g:'Art. 6 VO (EG) 561/2006' },
  { cat:'Lenkzeiten', v:'Tageslenkzeit über 2h überschritten', f:'250 €', u:'500 €', g:'Art. 6 VO (EG) 561/2006' },
  { cat:'Lenkzeiten', v:'Wochenlenkzeit bis 3h überschritten', f:'60 €', u:'280 €', g:'Art. 6 Abs. 2 VO (EG) 561/2006' },
  { cat:'Lenkzeiten', v:'Wochenlenkzeit über 3h überschritten', f:'250 €', u:'500 €', g:'Art. 6 Abs. 2 VO (EG) 561/2006' },
  { cat:'Lenkzeiten', v:'Doppelwoche 90h überschritten', f:'250 €', u:'500 €', g:'Art. 6 Abs. 3 VO (EG) 561/2006' },
  { cat:'Pausen', v:'Fahrtunterbrechung nicht eingelegt', f:'30 €', u:'150 €', g:'Art. 7 VO (EG) 561/2006' },
  { cat:'Pausen', v:'Pause zu kurz (< 45 min bzw. < 15+30 min)', f:'30 €', u:'150 €', g:'Art. 7 VO (EG) 561/2006' },
  { cat:'Ruhezeiten', v:'Tagesruhezeit bis 1h unterschritten', f:'30 €', u:'150 €', g:'Art. 8 VO (EG) 561/2006' },
  { cat:'Ruhezeiten', v:'Tagesruhezeit über 1h unterschritten', f:'60 €', u:'280 €', g:'Art. 8 VO (EG) 561/2006' },
  { cat:'Ruhezeiten', v:'Wöchentliche Ruhezeit unterschritten', f:'60 €', u:'280 €', g:'Art. 8 Abs. 6 VO (EG) 561/2006' },
  { cat:'Ruhezeiten', v:'Reguläre Wochenruhezeit im Fahrzeug', f:'60 €', u:'500 €', g:'Art. 8 Abs. 8 VO (EG) 561/2006' },
  { cat:'Aufzeichnung', v:'Schaublatt / Fahrerkarte nicht mitgeführt', f:'250 €', u:'500 €', g:'§ 8 FPersG, § 21a FPersV' },
  { cat:'Aufzeichnung', v:'Digitaler Tachograph manipuliert', f:'500 €', u:'2.000 €', g:'§ 23 FPersV, § 8 FPersG' },
];

const FAQ = [
  { q:'Wie lange darf ein LKW-Fahrer täglich fahren?', a:'Maximal 9 Stunden pro Tag. An bis zu zwei Tagen pro Woche darf die Lenkzeit auf 10 Stunden verlängert werden (Art. 6 Abs. 1 VO 561/2006).' },
  { q:'Wann muss eine Pause eingelegt werden?', a:'Nach spätestens 4,5 Stunden ununterbrochener Lenkzeit ist eine Pause von mindestens 45 Minuten Pflicht. Alternativ: 15 Minuten, dann 30 Minuten – in dieser Reihenfolge (Art. 7 VO 561/2006).' },
  { q:'Wie lange ist die tägliche Ruhezeit?', a:'Mindestens 11 Stunden. Sie kann auf 9 Stunden verkürzt werden, jedoch maximal 3-mal zwischen zwei wöchentlichen Ruhezeiten. Die verkürzte Ruhezeit muss nicht nachgeholt werden (Art. 8 VO 561/2006).' },
  { q:'Was ist die maximale Wochenlenkzeit?', a:'Die wöchentliche Lenkzeit darf 56 Stunden nicht überschreiten. In zwei aufeinanderfolgenden Wochen (Doppelwoche) sind maximal 90 Stunden erlaubt (Art. 6 Abs. 2–3 VO 561/2006).' },
  { q:'Darf die Wochenruhezeit im LKW verbracht werden?', a:'Nein. Die reguläre wöchentliche Ruhezeit (mindestens 45 Stunden) darf nicht im Fahrzeug verbracht werden. Reduzierte Wochenruhezeiten (24 Stunden) sind im LKW erlaubt (Art. 8 Abs. 8 VO 561/2006).' },
  { q:'Gilt der Lenkzeitrechner auch für Kleinbusse?', a:'Ja, für Fahrzeuge zur Personenbeförderung mit mehr als 9 Sitzplätzen (einschließlich Fahrer) sowie für Güterfahrzeuge über 3,5t zulässige Gesamtmasse gilt die EU-Verordnung 561/2006.' },
];

/* ─── Sub-Components ─── */
function AdSlot({ width, height, label, className }) {
  return (
    <div className={className} style={{
      background:'#f9fafb',
      border:'1px dashed #d1d5db',
      borderRadius:8,
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      width: width || '100%',
      minHeight: height || 90,
      color:'#9ca3af',
      fontSize:11,
      textAlign:'center',
      padding:8,
      boxSizing:'border-box',
    }}>
      <div style={{ fontSize:10, textTransform:'uppercase', letterSpacing:1, marginBottom:4, color:'#bcc4cd' }}>Anzeige</div>
      <div style={{ fontSize:12, color:'#bcc4cd' }}>{label || `${width}×${height}`}</div>
    </div>
  );
}

function Stat({ label, value, max, pct }) {
  const color = pct > 95 ? C.error : pct > 80 ? C.warning : C.success;
  const bgColor = pct > 95 ? C.errorBg : pct > 80 ? C.warningBg : C.successBg;
  return (
    <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:10, padding:'14px 12px', textAlign:'center', boxShadow:'0 1px 3px rgba(0,0,0,0.05)' }}>
      <div style={{ fontSize:10, color:C.dim, textTransform:'uppercase', letterSpacing:1.2, marginBottom:6 }}>{label}</div>
      <div style={{ fontSize:20, fontWeight:700, color, fontFamily:"'JetBrains Mono',monospace" }}>{value}</div>
      <div style={{ fontSize:11, color:C.muted, marginTop:2 }}>{max}</div>
      <div style={{ marginTop:8, height:5, background:'#e9ecef', borderRadius:3, overflow:'hidden' }}>
        <div style={{ height:'100%', borderRadius:3, width:`${Math.min(pct,100)}%`, background:color, transition:'width 0.5s ease' }} />
      </div>
    </div>
  );
}

const IS = {
  background: C.white,
  border: `1px solid ${C.border}`,
  borderRadius: 7,
  color: C.txt,
  padding: '10px 12px',
  fontSize: 15,
  width: '100%',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.15s',
};
const LS = {
  display: 'block',
  fontSize: 12,
  color: C.muted,
  marginBottom: 6,
  fontWeight: 500,
};

export default function Home() {
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

  const run = useCallback(() => {
    setResult(compute({ start, planned, drivenToday, blockSincePause, drivenWeek, drivenBiweek, extUsed, redRests, splitBreak }));
  }, [start, planned, drivenToday, blockSincePause, drivenWeek, drivenBiweek, extUsed, redRests, splitBreak]);

  const catColors = { 'Lenkzeiten':'#fff0eb', 'Pausen':'#fff8e1', 'Ruhezeiten':'#e8f5e9', 'Aufzeichnung':'#ede7f6' };
  const catText   = { 'Lenkzeiten':'#bf360c', 'Pausen':'#e65100', 'Ruhezeiten':'#2e7d32', 'Aufzeichnung':'#4527a0' };

  const bussCategories = [...new Set(BUSSGELDER.map(b => b.cat))];

  return (
    <>
      <style>{`
        *{box-sizing:border-box;}
        body{margin:0;}
        .main-wrap{max-width:1200px;margin:0 auto;padding:0 16px;}
        .content-cols{display:grid;grid-template-columns:160px 1fr 160px;gap:20px;align-items:start;}
        .ad-side{display:block;}
        .top-ad,.bot-ad{display:block;}
        .form-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
        .stats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
        .preset-grid{display:flex;gap:8px;flex-wrap:wrap;}
        .buss-table{width:100%;border-collapse:collapse;}
        .buss-table th,.buss-table td{padding:10px 12px;text-align:left;font-size:13px;border-bottom:1px solid ${C.border};}
        .buss-table th{font-size:11px;text-transform:uppercase;letter-spacing:1px;color:${C.muted};font-weight:600;background:#f8f9fa;}
        .buss-table tr:last-child td{border-bottom:none;}
        .buss-table tr:hover td{background:#fafbfc;}
        .faq-item{border-bottom:1px solid ${C.border};last-child{border:none;}}
        .timeline-line{position:absolute;left:9px;top:4px;bottom:4px;width:2px;background:${C.border};}
        input[type=number]::-webkit-inner-spin-button{opacity:1;}
        input:focus,select:focus{border-color:${C.acc}!important;box-shadow:0 0 0 3px rgba(232,115,42,0.12);}
        .btn-calc{transition:background 0.15s,transform 0.1s;}
        .btn-calc:hover{background:#c55e1a!important;}
        .btn-calc:active{transform:scale(0.99);}
        .preset-btn{transition:all 0.15s;}
        .preset-btn:hover{border-color:${C.acc}!important;color:${C.acc}!important;}
        @media(max-width:900px){
          .content-cols{grid-template-columns:1fr;}
          .ad-side{display:none;}
        }
        @media(max-width:600px){
          .form-grid{grid-template-columns:1fr;}
          .stats-grid{grid-template-columns:1fr 1fr;}
          .buss-table th:last-child,.buss-table td:last-child{display:none;}
        }
        @media(max-width:400px){
          .stats-grid{grid-template-columns:1fr;}
        }
      `}</style>

      <div style={{ minHeight:'100vh', background:C.bg, color:C.txt, fontFamily:"'Segoe UI',-apple-system,BlinkMacSystemFont,sans-serif" }}>

        {/* ── Header ── */}
        <header style={{ background:C.white, borderBottom:`3px solid ${C.acc}`, boxShadow:'0 1px 4px rgba(0,0,0,0.08)' }}>
          <div className="main-wrap" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:12, padding:'14px 16px' }}>
            <div style={{ display:'flex', alignItems:'center', gap:12 }}>
              <span style={{ fontSize:32 }}>🚛</span>
              <div>
                <h1 style={{ margin:0, fontSize:22, fontWeight:800, color:C.acc, lineHeight:1.1 }}>LenkzeitRechner.de</h1>
                <p style={{ margin:0, fontSize:12, color:C.muted }}>Lenk- & Ruhezeiten nach EU VO 561/2006 · Kostenlos · Ohne Anmeldung</p>
              </div>
            </div>
            <div style={{ display:'flex', gap:8 }}>
              <button onClick={()=>setShowRules(!showRules)} style={{ background:showRules?C.infoBg:C.white, border:`1px solid ${showRules?C.infoBorder:C.border}`, borderRadius:7, padding:'7px 14px', color:showRules?C.info:C.muted, fontSize:12, fontWeight:600, cursor:'pointer' }}>
                📋 Regeln
              </button>
              <button onClick={()=>setShowBuss(!showBuss)} style={{ background:showBuss?C.errorBg:C.white, border:`1px solid ${showBuss?C.errorBorder:C.border}`, borderRadius:7, padding:'7px 14px', color:showBuss?C.error:C.muted, fontSize:12, fontWeight:600, cursor:'pointer' }}>
                ⚠️ Bußgelder
              </button>
            </div>
          </div>
        </header>

        <div className="main-wrap" style={{ paddingTop:24, paddingBottom:60 }}>

          {/* ── Top AdSense (Leaderboard 728×90) ── */}
          <div className="top-ad" style={{ marginBottom:20 }}>
            {/* ADSENSE: Ersetze diesen Block mit deinem echten AdSense-Code */}
            <AdSlot height={90} label="728×90 Leaderboard · Google AdSense" />
          </div>

          {/* ── Regeln Panel ── */}
          {showRules && (
            <div style={{ background:C.white, border:`1px solid ${C.infoBorder}`, borderLeft:`4px solid ${C.info}`, borderRadius:10, padding:'16px 20px', marginBottom:16, boxShadow:'0 1px 3px rgba(0,0,0,0.05)' }}>
              <div style={{ fontWeight:700, color:C.info, fontSize:12, textTransform:'uppercase', letterSpacing:1.5, marginBottom:12 }}>EU VO 561/2006 – Kurzübersicht</div>
              <div style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:'6px 20px', fontSize:13 }}>
                <span style={{ color:C.muted }}>⏱ Tageslenkzeit</span><span>Max. 9h (2×/Woche bis 10h)</span>
                <span style={{ color:C.muted }}>☕ Fahrtunterbrechung</span><span>Nach 4,5h → 45 min (oder 15+30)</span>
                <span style={{ color:C.muted }}>📅 Wochenlenkzeit</span><span>Max. 56h</span>
                <span style={{ color:C.muted }}>📅 Doppelwoche</span><span>Max. 90h</span>
                <span style={{ color:C.muted }}>🛏 Tagesruhezeit</span><span>11h (3× verkürzt auf 9h)</span>
                <span style={{ color:C.muted }}>🛏 Geteilte Ruhezeit</span><span>3h + 9h = 12h gesamt möglich</span>
                <span style={{ color:C.muted }}>🏠 Wochenruhezeit</span><span>45h (jede 2. Woche mind. 24h)</span>
                <span style={{ color:C.muted }}>🚫 Nicht im LKW!</span><span>Reguläre Wochenruhe nicht im Fahrzeug</span>
              </div>
            </div>
          )}

          {/* ── Bußgelder Panel ── */}
          {showBuss && (
            <div style={{ background:C.white, border:`1px solid ${C.errorBorder}`, borderLeft:`4px solid ${C.error}`, borderRadius:10, padding:'16px 20px', marginBottom:16, boxShadow:'0 1px 3px rgba(0,0,0,0.05)' }}>
              <div style={{ fontWeight:700, color:C.error, fontSize:13, marginBottom:16 }}>⚠️ Bußgelder bei Verstößen (EU VO 561/2006, FPersG, BKatV)</div>
              {bussCategories.map(cat => (
                <div key={cat} style={{ marginBottom:16 }}>
                  <div style={{ display:'inline-block', background:catColors[cat]||'#f0f0f0', color:catText[cat]||C.muted, fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:1, padding:'3px 10px', borderRadius:20, marginBottom:8 }}>{cat}</div>
                  <div style={{ overflowX:'auto' }}>
                    <table className="buss-table">
                      <thead>
                        <tr><th>Verstoß</th><th>Fahrer</th><th>Unternehmer</th><th>Rechtsgrundlage</th></tr>
                      </thead>
                      <tbody>
                        {BUSSGELDER.filter(b => b.cat === cat).map((b,i) => (
                          <tr key={i}>
                            <td style={{ color:C.txt }}>{b.v}</td>
                            <td style={{ color:C.error, fontWeight:600, whiteSpace:'nowrap' }}>{b.f}</td>
                            <td style={{ color:C.error, fontWeight:600, whiteSpace:'nowrap' }}>{b.u}</td>
                            <td style={{ color:C.dim, fontSize:12 }}>{b.g}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
              <p style={{ margin:'8px 0 0', fontSize:11, color:C.dim }}>Alle Angaben ohne Gewähr · Quelle: FPersG, BKatV, EU VO 561/2006</p>
            </div>
          )}

          {/* ── 3-Column Layout: Left Ad | Content | Right Ad ── */}
          <div className="content-cols">

            {/* Left Ad (160×600 Wide Skyscraper) */}
            <aside className="ad-side">
              {/* ADSENSE: Ersetze diesen Block mit deinem echten AdSense-Code */}
              <AdSlot width={160} height={600} label="160×600 Wide Skyscraper" />
            </aside>

            {/* ── Main Content ── */}
            <main>

              {/* Presets */}
              <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:12, padding:'16px 20px', marginBottom:16, boxShadow:'0 1px 3px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize:11, fontWeight:600, color:C.muted, textTransform:'uppercase', letterSpacing:1.2, marginBottom:10 }}>Schnellauswahl</div>
                <div className="preset-grid">
                  {PRESETS.map(p => (
                    <button key={p.name} className="preset-btn" onClick={() => setPlanned(p.planned)} style={{
                      background: planned === p.planned ? C.acc : C.white,
                      color: planned === p.planned ? '#fff' : C.muted,
                      border: `1px solid ${planned === p.planned ? C.acc : C.border}`,
                      borderRadius: 8, padding: '8px 14px', fontSize: 13, cursor: 'pointer', fontWeight: planned === p.planned ? 700 : 400,
                      display:'flex', alignItems:'center', gap:6,
                    }}>
                      <span>{p.icon}</span>
                      <span>{p.name}</span>
                      <span style={{ fontSize:11, opacity:0.75 }}>{p.sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:12, padding:20, marginBottom:16, boxShadow:'0 1px 3px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize:11, fontWeight:600, color:C.muted, textTransform:'uppercase', letterSpacing:1.2, marginBottom:16 }}>Eingaben</div>
                <div className="form-grid">
                  <div><label style={LS}>Startzeit</label><input type="time" value={start} onChange={e=>setStart(e.target.value)} style={IS}/></div>
                  <div><label style={LS}>Geplante Fahrzeit (h)</label><input type="number" min={0} max={15} step={0.25} value={planned} onChange={e=>setPlanned(parseFloat(e.target.value)||0)} style={IS}/></div>
                  <div><label style={LS}>Heute bereits gelenkt (h)</label><input type="number" min={0} max={10} step={0.25} value={drivenToday} onChange={e=>setDrivenToday(parseFloat(e.target.value)||0)} style={IS}/></div>
                  <div><label style={LS}>Davon ohne Pause (h)</label><input type="number" min={0} max={4.5} step={0.25} value={blockSincePause} onChange={e=>setBlockSincePause(parseFloat(e.target.value)||0)} style={IS}/></div>
                  <div><label style={LS}>Woche bisher (h)</label><input type="number" min={0} max={56} step={0.5} value={drivenWeek} onChange={e=>setDrivenWeek(parseFloat(e.target.value)||0)} style={IS}/></div>
                  <div><label style={LS}>Doppelwoche bisher (h)</label><input type="number" min={0} max={90} step={0.5} value={drivenBiweek} onChange={e=>setDrivenBiweek(parseFloat(e.target.value)||0)} style={IS}/></div>
                  <div>
                    <label style={LS}>10h-Tage diese Woche</label>
                    <select value={extUsed} onChange={e=>setExtUsed(+e.target.value)} style={IS}>
                      <option value={0}>0 von 2 genutzt</option>
                      <option value={1}>1 von 2 genutzt</option>
                      <option value={2}>2 von 2 genutzt</option>
                    </select>
                  </div>
                  <div>
                    <label style={LS}>Verkürzte Ruhezeiten (9h)</label>
                    <select value={redRests} onChange={e=>setRedRests(+e.target.value)} style={IS}>
                      <option value={0}>0 von 3 genutzt</option>
                      <option value={1}>1 von 3 genutzt</option>
                      <option value={2}>2 von 3 genutzt</option>
                      <option value={3}>3 von 3 genutzt</option>
                    </select>
                  </div>
                  <div style={{ gridColumn:'1/-1', display:'flex', alignItems:'center', gap:10, padding:'10px 14px', background:C.bg, borderRadius:8, cursor:'pointer' }} onClick={()=>setSplitBreak(!splitBreak)}>
                    <input type="checkbox" checked={splitBreak} onChange={e=>setSplitBreak(e.target.checked)} id="sp" style={{ accentColor:C.acc, width:17, height:17, cursor:'pointer' }}/>
                    <label htmlFor="sp" style={{ fontSize:13, color:C.muted, cursor:'pointer', userSelect:'none' }}>Geteilte Pause verwenden (15 min + 30 min)</label>
                  </div>
                </div>
                <button className="btn-calc" onClick={run} style={{ marginTop:18, width:'100%', padding:'14px 0', background:C.acc, color:'#fff', border:'none', borderRadius:9, fontSize:16, fontWeight:700, cursor:'pointer', letterSpacing:0.5 }}>
                  BERECHNEN
                </button>
              </div>

              {/* Result */}
              {result && (
                <>
                  <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:12, padding:20, marginBottom:16, boxShadow:'0 1px 3px rgba(0,0,0,0.05)' }}>
                    {result.warn.length > 0 && (
                      <div style={{ marginBottom:16 }}>
                        {result.warn.map((w,i) => (
                          <div key={i} style={{
                            padding:'10px 14px', borderRadius:8, marginBottom:6, fontSize:13,
                            background: w.t==='error'?C.errorBg : w.t==='warn'?C.warningBg : C.infoBg,
                            border: `1px solid ${w.t==='error'?C.errorBorder : w.t==='warn'?C.warningBorder : C.infoBorder}`,
                            color: w.t==='error'?C.error : w.t==='warn'?C.warning : C.info,
                          }}>{w.t==='error'?'⛔':w.t==='warn'?'⚠️':'ℹ️'} {w.m}</div>
                        ))}
                      </div>
                    )}

                    <div className="stats-grid" style={{ marginBottom:20 }}>
                      <Stat label="Tageslenkzeit" value={fmt(result.totDay)} max="/ max. 9–10h" pct={(result.totDay/10)*100}/>
                      <Stat label="Woche" value={fmt(result.totWk)} max="/ max. 56h" pct={(result.totWk/56)*100}/>
                      <Stat label="Doppelwoche" value={fmt(result.totBi)} max="/ max. 90h" pct={(result.totBi/90)*100}/>
                    </div>

                    <div style={{ fontWeight:700, fontSize:11, textTransform:'uppercase', marginBottom:14, letterSpacing:1.5, color:C.acc }}>Tagesplan</div>
                    <div style={{ position:'relative', paddingLeft:28 }}>
                      <div className="timeline-line"/>
                      {result.ev.map((e,i) => (
                        <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:12, marginBottom:14, position:'relative' }}>
                          <div style={{ position:'absolute', left:-20, top:4, width:10, height:10, borderRadius:'50%',
                            background: e.type==='start'||e.type==='ok'?C.success : e.type==='end'?C.acc : e.type==='break'?C.warning : e.type==='rest'?'#7c3aed' : C.dim,
                            border:`2px solid ${C.white}`, boxShadow:'0 0 0 2px #dee2e6',
                          }}/>
                          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:13, fontWeight:700, color:C.acc, minWidth:50 }}>{e.time}</div>
                          <div style={{ fontSize:13, color:C.txt }}><span style={{ marginRight:6 }}>{e.icon}</span>{e.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ad between result and FAQ */}
                  <div style={{ marginBottom:16 }}>
                    {/* ADSENSE: Ersetze diesen Block mit deinem echten AdSense-Code */}
                    <AdSlot height={90} label="728×90 Leaderboard · Google AdSense" />
                  </div>
                </>
              )}

              {/* ── FAQ / SEO Section ── */}
              <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:12, padding:'16px 20px', marginBottom:16, boxShadow:'0 1px 3px rgba(0,0,0,0.05)' }}>
                <h2 style={{ margin:'0 0 16px', fontSize:16, fontWeight:700, color:C.txt }}>Häufige Fragen zu Lenkzeiten</h2>
                {FAQ.map((f,i) => (
                  <div key={i} className="faq-item" style={{ borderBottom: i < FAQ.length-1 ? `1px solid ${C.border}` : 'none' }}>
                    <button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{
                      width:'100%', background:'none', border:'none', padding:'14px 0', textAlign:'left', cursor:'pointer',
                      display:'flex', justifyContent:'space-between', alignItems:'center', gap:12,
                    }}>
                      <span style={{ fontSize:14, fontWeight:600, color:C.txt }}>{f.q}</span>
                      <span style={{ color:C.acc, fontSize:18, flexShrink:0, transform:openFaq===i?'rotate(45deg)':'none', transition:'transform 0.2s' }}>+</span>
                    </button>
                    {openFaq===i && (
                      <p style={{ margin:'0 0 14px', fontSize:13, color:C.muted, lineHeight:1.7 }}>{f.a}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Rechtsgrundlagen */}
              <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:12, padding:'14px 20px', marginBottom:16, fontSize:12, color:C.muted, lineHeight:1.9, boxShadow:'0 1px 3px rgba(0,0,0,0.05)' }}>
                <div style={{ fontWeight:700, fontSize:11, textTransform:'uppercase', letterSpacing:1.2, color:C.dim, marginBottom:8 }}>Rechtsgrundlagen</div>
                <p style={{ margin:'0 0 3px' }}>→ eur-lex.europa.eu – VO (EG) 561/2006 (Volltext)</p>
                <p style={{ margin:'0 0 3px' }}>→ gesetze-im-internet.de/fpersv – Fahrpersonalverordnung</p>
                <p style={{ margin:'0 0 3px' }}>→ bmv.de – Mobilitätspaket I (Änderungen seit 08/2020)</p>
                <p style={{ margin:'10px 0 0', color:C.error, fontSize:12 }}>⚠ Unverbindliche Berechnung. Kein Ersatz für den digitalen Tachographen oder Rechtsberatung.</p>
              </div>

              {/* Footer */}
              <footer style={{ display:'flex', justifyContent:'center', gap:24, padding:'16px 0', fontSize:12, color:C.dim, borderTop:`1px solid ${C.border}` }}>
                <a href="/impressum" style={{ color:C.dim, textDecoration:'none' }}>Impressum</a>
                <a href="/datenschutz" style={{ color:C.dim, textDecoration:'none' }}>Datenschutz</a>
                <span>© 2026 LenkzeitRechner.de</span>
              </footer>
            </main>

            {/* Right Ad (160×600 Wide Skyscraper) */}
            <aside className="ad-side">
              {/* ADSENSE: Ersetze diesen Block mit deinem echten AdSense-Code */}
              <AdSlot width={160} height={600} label="160×600 Wide Skyscraper" />
            </aside>

          </div>

          {/* ── Bottom AdSense (Leaderboard 728×90) ── */}
          <div className="bot-ad" style={{ marginTop:20 }}>
            {/* ADSENSE: Ersetze diesen Block mit deinem echten AdSense-Code */}
            <AdSlot height={90} label="728×90 Leaderboard · Google AdSense" />
          </div>

        </div>
      </div>
    </>
  );
}
