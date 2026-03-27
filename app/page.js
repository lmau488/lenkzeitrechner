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
        // Drive until next split or end
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

/* ─── Styles ─── */
const dark='#010409', card='#0d1117', brd='#1c2128', acc='#f0883e', txt='#e6edf3', dim='#8b949e', fnt='#484f58';
const mono = "'JetBrains Mono', monospace";
const IS = { background:dark, border:'1px solid #30363d', borderRadius:6, color:txt, padding:'10px 14px', fontSize:15, width:'100%', fontFamily:mono, outline:'none', boxSizing:'border-box' };
const LS = { display:'block', fontSize:11, color:dim, marginBottom:5, textTransform:'uppercase', letterSpacing:1.2, fontFamily:mono };

function Ad({ text, format }) {
  return (
    <div style={{ background:'linear-gradient(135deg,#1a1a2e,#16213e)', border:'1px dashed #4a4a6a', borderRadius:8, padding:'14px 18px', textAlign:'center', color:'#6a6a8a', fontSize:12, fontFamily:mono, margin:'20px 0' }}>
      <div style={{ fontSize:10, textTransform:'uppercase', opacity:0.5, marginBottom:3 }}>ANZEIGE</div>
      <div style={{ fontSize:13, color:'#8a8aaa' }}>{text}</div>
      <div style={{ fontSize:10, marginTop:3, opacity:0.4 }}>{format}</div>
    </div>
  );
}

function Stat({ label, value, max, pct }) {
  const c = pct>95?'#f85149':pct>80?'#d29922':'#3fb950';
  return (
    <div style={{ background:'#161b22', borderRadius:8, padding:'12px 14px', textAlign:'center' }}>
      <div style={{ fontSize:10, color:dim, textTransform:'uppercase', letterSpacing:1, fontFamily:mono, marginBottom:4 }}>{label}</div>
      <div style={{ fontSize:18, fontWeight:700, color:c, fontFamily:mono }}>{value}</div>
      <div style={{ fontSize:10, color:fnt }}>{max}</div>
      <div style={{ marginTop:6, height:4, background:'#21262d', borderRadius:2, overflow:'hidden' }}>
        <div style={{ height:'100%', borderRadius:2, width:`${Math.min(pct,100)}%`, background:c, transition:'width 0.4s' }} />
      </div>
    </div>
  );
}

const PRESETS = [
  { name:'Kurzstrecke (2h)', planned:2, label:'🏙️' },
  { name:'Halbtag (4h)', planned:4, label:'🛤️' },
  { name:'Tagestour (8h)', planned:8, label:'🚛' },
  { name:'Maximaltour (9,5h)', planned:9.5, label:'⚡' },
];

const BUSSGELDER = [
  ['Lenkzeit >1h überschritten','30 €','90 €'],
  ['Je weitere 30 min','30 €','90 €'],
  ['Lenkzeit >2h überschritten','60 €/30min','180 €/30min'],
  ['Pause nicht eingelegt','30 €','90 €'],
  ['Tagesruhezeit unterschritten','30–60 €','90–180 €'],
  ['Wochenruhezeit unterschritten','60 €','180 €'],
  ['Wochenruhezeit im Fahrzeug','60 €','180 €'],
];

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

  const run = useCallback(() => {
    setResult(compute({ start, planned, drivenToday, blockSincePause, drivenWeek, drivenBiweek, extUsed, redRests, splitBreak }));
  }, [start, planned, drivenToday, blockSincePause, drivenWeek, drivenBiweek, extUsed, redRests, splitBreak]);

  return (
    <div style={{ minHeight:'100vh', background:dark, color:txt, fontFamily:"'Segoe UI',-apple-system,sans-serif", padding:'0 16px' }}>
      <div style={{ maxWidth:720, margin:'0 auto', paddingTop:28, paddingBottom:60 }}>

        {/* ── Header ── */}
        <header style={{ borderBottom:`2px solid ${acc}`, paddingBottom:14, marginBottom:20, display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:10 }}>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <span style={{ fontSize:26 }}>🚛</span>
            <div>
              <h1 style={{ margin:0, fontSize:20, fontWeight:700, fontFamily:mono, color:acc }}>LenkzeitRechner.de</h1>
              <p style={{ margin:0, fontSize:11, color:dim, fontFamily:mono }}>EU VO 561/2006 · Kostenlos · Ohne Anmeldung</p>
            </div>
          </div>
          <div style={{ display:'flex', gap:6 }}>
            <button onClick={()=>setShowRules(!showRules)} style={{ background:showRules?'#0d2230':'#161b22', border:`1px solid ${showRules?'#1a4a6e':'#30363d'}`, borderRadius:6, padding:'5px 10px', color:showRules?'#58a6ff':dim, fontSize:11, fontFamily:mono, cursor:'pointer' }}>
              {showRules?'✕':'📋'} Regeln
            </button>
            <button onClick={()=>setShowBuss(!showBuss)} style={{ background:showBuss?'#3d1117':'#161b22', border:`1px solid ${showBuss?'#6e2b2b':'#30363d'}`, borderRadius:6, padding:'5px 10px', color:showBuss?'#f85149':dim, fontSize:11, fontFamily:mono, cursor:'pointer' }}>
              {showBuss?'✕':'⚠️'} Bußgelder
            </button>
          </div>
        </header>

        <Ad text="📦 Telematik-Lösungen vergleichen – Lenk- und Ruhezeiten automatisch überwachen" format="728×90 Leaderboard · Platz für Google AdSense" />

        {/* ── Regeln (toggle) ── */}
        {showRules && (
          <div style={{ background:card, border:`1px solid ${brd}`, borderRadius:10, padding:'16px 18px', marginBottom:16, fontSize:12, fontFamily:mono, lineHeight:2, color:dim }}>
            <div style={{ fontWeight:700, color:acc, fontSize:11, textTransform:'uppercase', letterSpacing:1.5, marginBottom:8 }}>EU VO 561/2006 – Kurzübersicht</div>
            <div style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:'2px 18px' }}>
              <span>⏱ Tageslenkzeit</span><span style={{color:txt}}>Max. 9h (2×/Woche 10h)</span>
              <span>☕ Fahrtunterbrechung</span><span style={{color:txt}}>Nach 4,5h → 45 min (oder 15+30)</span>
              <span>📅 Wochenlenkzeit</span><span style={{color:txt}}>Max. 56h</span>
              <span>📅 Doppelwoche</span><span style={{color:txt}}>Max. 90h</span>
              <span>🛏 Tägliche Ruhezeit</span><span style={{color:txt}}>11h (3× verkürzt auf 9h)</span>
              <span>🛏 Splitting</span><span style={{color:txt}}>3h + 9h = 12h gesamt</span>
              <span>🏠 Wöchentl. Ruhezeit</span><span style={{color:txt}}>45h (jede 2. Woche 24h)</span>
              <span>🏠 Nicht im LKW!</span><span style={{color:txt}}>Reguläre Wochenruhe nicht im Fahrzeug</span>
            </div>
          </div>
        )}

        {/* ── Bußgelder (toggle) ── */}
        {showBuss && (
          <div style={{ background:'#1c1117', border:'1px solid #3d1117', borderRadius:10, padding:'16px 18px', marginBottom:16, fontFamily:mono, fontSize:12, lineHeight:1.8 }}>
            <div style={{ fontWeight:700, color:'#f85149', fontSize:12, marginBottom:10 }}>Bußgelder bei Verstößen</div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr auto auto', gap:'4px 14px' }}>
              <span style={{color:dim,fontWeight:700}}>Verstoß</span><span style={{color:dim,fontWeight:700}}>Fahrer</span><span style={{color:dim,fontWeight:700}}>Unternehmer</span>
              {BUSSGELDER.map((b,i) => <React.Fragment key={i}><span style={{color:'#cca0a0'}}>{b[0]}</span><span style={{color:'#e6a0a0'}}>{b[1]}</span><span style={{color:'#e6a0a0'}}>{b[2]}</span></React.Fragment>)}
            </div>
            <p style={{ marginTop:8, fontSize:10, color:fnt }}>Quelle: FPersG, BKatV · Alle Angaben ohne Gewähr</p>
          </div>
        )}

        {/* ── Presets ── */}
        <div style={{ background:card, border:`1px solid ${brd}`, borderRadius:10, padding:'14px 18px', marginBottom:14 }}>
          <div style={{ ...LS, marginBottom:8 }}>Schnellauswahl</div>
          <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
            {PRESETS.map(p => (
              <button key={p.name} onClick={()=>setPlanned(p.planned)} style={{
                background:planned===p.planned?acc:'#161b22', color:planned===p.planned?dark:dim,
                border:`1px solid ${planned===p.planned?acc:'#30363d'}`, borderRadius:6, padding:'7px 12px',
                fontSize:12, fontFamily:mono, cursor:'pointer', fontWeight:planned===p.planned?700:400,
              }}>
                {p.label} {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* ── Form ── */}
        <div style={{ background:card, border:`1px solid ${brd}`, borderRadius:10, padding:20, marginBottom:18 }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
            <div><label style={LS}>Startzeit</label><input type="time" value={start} onChange={e=>setStart(e.target.value)} style={IS}/></div>
            <div><label style={LS}>Geplante Fahrzeit (h)</label><input type="number" min={0} max={15} step={0.25} value={planned} onChange={e=>setPlanned(parseFloat(e.target.value)||0)} style={IS}/></div>
            <div><label style={LS}>Heute bereits gelenkt (h)</label><input type="number" min={0} max={10} step={0.25} value={drivenToday} onChange={e=>setDrivenToday(parseFloat(e.target.value)||0)} style={IS}/></div>
            <div><label style={LS}>Davon ohne Pause (h)</label><input type="number" min={0} max={4.5} step={0.25} value={blockSincePause} onChange={e=>setBlockSincePause(parseFloat(e.target.value)||0)} style={IS}/></div>
            <div><label style={LS}>Woche bisher (h)</label><input type="number" min={0} max={56} step={0.5} value={drivenWeek} onChange={e=>setDrivenWeek(parseFloat(e.target.value)||0)} style={IS}/></div>
            <div><label style={LS}>Doppelwoche bisher (h)</label><input type="number" min={0} max={90} step={0.5} value={drivenBiweek} onChange={e=>setDrivenBiweek(parseFloat(e.target.value)||0)} style={IS}/></div>
            <div><label style={LS}>10h-Tage diese Woche</label>
              <select value={extUsed} onChange={e=>setExtUsed(+e.target.value)} style={IS}><option value={0}>0 von 2</option><option value={1}>1 von 2</option><option value={2}>2 von 2</option></select></div>
            <div><label style={LS}>Verkürzte Ruhezeiten (9h)</label>
              <select value={redRests} onChange={e=>setRedRests(+e.target.value)} style={IS}><option value={0}>0 von 3</option><option value={1}>1 von 3</option><option value={2}>2 von 3</option><option value={3}>3 von 3</option></select></div>
            <div style={{ gridColumn:'1/-1', display:'flex', alignItems:'center', gap:8 }}>
              <input type="checkbox" checked={splitBreak} onChange={e=>setSplitBreak(e.target.checked)} id="sp" style={{ accentColor:acc, width:16, height:16 }}/>
              <label htmlFor="sp" style={{ fontSize:12, color:dim, fontFamily:mono, cursor:'pointer' }}>Geteilte Pause (15 + 30 min)</label>
            </div>
          </div>
          <button onClick={run} style={{ marginTop:18, width:'100%', padding:'13px 0', background:acc, color:dark, border:'none', borderRadius:8, fontSize:15, fontWeight:700, cursor:'pointer', fontFamily:mono, letterSpacing:1 }}>
            BERECHNEN
          </button>
        </div>

        {/* ── Result ── */}
        {result && (
          <>
            <div style={{ background:card, border:`1px solid ${brd}`, borderRadius:10, padding:20, marginBottom:18 }}>
              {result.warn.length > 0 && (
                <div style={{ marginBottom:16 }}>
                  {result.warn.map((w,i) => (
                    <div key={i} style={{ padding:'8px 12px', borderRadius:6, marginBottom:5, fontSize:12, fontFamily:mono,
                      background:w.t==='error'?'#3d1117':w.t==='warn'?'#3d2e00':'#0d2230',
                      border:`1px solid ${w.t==='error'?'#6e2b2b':w.t==='warn'?'#6e5b00':'#1a4a6e'}`,
                      color:w.t==='error'?'#f85149':w.t==='warn'?'#d29922':'#58a6ff',
                    }}>{w.t==='error'?'⛔':w.t==='warn'?'⚠️':'ℹ️'} {w.m}</div>
                  ))}
                </div>
              )}
              <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:10, marginBottom:20 }}>
                <Stat label="Tag" value={fmt(result.totDay)} max="/ 9–10h" pct={(result.totDay/10)*100}/>
                <Stat label="Woche" value={fmt(result.totWk)} max="/ 56h" pct={(result.totWk/56)*100}/>
                <Stat label="Doppelwoche" value={fmt(result.totBi)} max="/ 90h" pct={(result.totBi/90)*100}/>
              </div>
              <div style={{ fontWeight:700, fontSize:11, textTransform:'uppercase', marginBottom:12, letterSpacing:1.5, fontFamily:mono, color:acc }}>Tagesplan</div>
              <div style={{ position:'relative', paddingLeft:24 }}>
                <div style={{ position:'absolute', left:9, top:4, bottom:4, width:2, background:'#21262d' }}/>
                {result.ev.map((e,i) => (
                  <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:10, marginBottom:12, position:'relative' }}>
                    <div style={{ position:'absolute', left:-18, top:3, width:8, height:8, borderRadius:'50%',
                      background:e.type==='start'||e.type==='ok'?'#3fb950':e.type==='end'?acc:e.type==='break'?'#d29922':e.type==='rest'?'#8b5cf6':fnt,
                      border:`2px solid ${card}`,
                    }}/>
                    <div style={{ fontFamily:mono, fontSize:13, fontWeight:600, color:acc, minWidth:46 }}>{e.time}</div>
                    <div><span style={{ marginRight:5 }}>{e.icon}</span><span style={{ fontSize:13, color:txt }}>{e.label}</span></div>
                  </div>
                ))}
              </div>
            </div>
            <Ad text="🚛 LKW-Fahrer gesucht? Stellenanzeige hier schalten" format="300×250 Medium Rectangle" />
          </>
        )}

        <Ad text="⛽ Tankkarten-Vergleich: Bis zu 6ct/Liter sparen" format="728×90 Leaderboard" />

        {/* ── Quellen ── */}
        <div style={{ background:card, border:`1px solid ${brd}`, borderRadius:10, padding:'14px 18px', fontSize:11, color:fnt, fontFamily:mono, lineHeight:1.8, marginBottom:16 }}>
          <div style={{ color:dim, fontWeight:700, letterSpacing:1, marginBottom:4, textTransform:'uppercase' }}>Rechtsgrundlagen</div>
          <p style={{margin:'0 0 2px'}}>→ eur-lex.europa.eu – VO (EG) 561/2006 (Volltext)</p>
          <p style={{margin:'0 0 2px'}}>→ gesetze-im-internet.de/fpersv – Fahrpersonalverordnung</p>
          <p style={{margin:'0 0 2px'}}>→ bmv.de – Mobilitätspaket I (Änderungen seit 08/2020)</p>
          <p style={{margin:'8px 0 0',color:'#f85149'}}>⚠ Unverbindliche Berechnung. Kein Ersatz für den digitalen Tachographen oder Rechtsberatung.</p>
        </div>

        {/* ── Footer ── */}
        <footer style={{ display:'flex', justifyContent:'center', gap:20, padding:'16px 0', fontSize:11, fontFamily:mono, color:fnt, borderTop:`1px solid ${brd}` }}>
          <a href="/impressum" style={{ color:dim, textDecoration:'none' }}>Impressum</a>
          <a href="/datenschutz" style={{ color:dim, textDecoration:'none' }}>Datenschutz</a>
          <span>© 2026</span>
        </footer>
      </div>
    </div>
  );
}
