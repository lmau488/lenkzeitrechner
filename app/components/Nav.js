"use client";
import { useState } from "react";
import { useLang } from "../i18n/LanguageContext";
import { LANGS } from "../i18n/translations";

const DARK_DEFAULTS = {
  border: "rgba(255,255,255,0.07)",
  navBg: "rgba(19,21,31,0.85)",
  txt: "#ffffff",
  muted: "#94a3b8",
  dim: "#64748b",
  acc: "#f0883e",
  accLight: "rgba(240,136,62,0.15)",
  langBg: "rgba(255,255,255,0.06)",
  surface: "#1c1f2e",
};

export default function Nav({ C, dark, setDark, activePath = "" }) {
  const colors = C || DARK_DEFAULTS;
  const { lang, setLang } = useLang();
  const [langOpen, setLangOpen] = useState(false);

  return (
    <nav
      style={{
        borderBottom: `1px solid ${colors.border}`,
        background: colors.navBg,
        backdropFilter: "blur(12px)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        transition: "background 0.3s",
      }}
    >
      <style>{`
        .nav-link{color:${colors.muted};text-decoration:none;font-size:14px;font-weight:500;transition:color 0.15s;padding:6px 0;}
        .nav-link:hover{color:${colors.txt};}
        .nav-link.active{color:${colors.acc};}
        .lang-opt:hover{background:${colors.accLight}!important;color:${colors.acc}!important;}
        .nav-theme-btn{background:none;border:1px solid ${colors.border};border-radius:8px;padding:6px 10px;cursor:pointer;color:${colors.muted};font-size:16px;transition:all 0.15s;display:flex;align-items:center;justify-content:center;}
        .nav-theme-btn:hover{border-color:${colors.acc};color:${colors.acc};background:${colors.accLight};}
        @media(max-width:580px){.nav-link{display:none;}.nav-brand-text{font-size:13px!important;}}
        @media(max-width:768px){.nav-link{font-size:12px;}}
      `}</style>
      <div
        className="wrap"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 56,
          gap: 16,
        }}
      >
        {/* Brand */}
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div
            style={{
              background: "linear-gradient(135deg,#f97316,#ea580c)",
              borderRadius: 10,
              width: 34,
              height: 34,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
            }}
          >
            🚛
          </div>
          <span className="nav-brand-text" style={{ fontWeight: 800, fontSize: 16, color: colors.txt }}>
            LenkzeitRechner.de
          </span>
        </a>

        {/* Links + controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <a href="/lkw-lenkzeiten" className={`nav-link${activePath === "/lkw-lenkzeiten" ? " active" : ""}`}>
            Lenkzeiten
          </a>
          <a href="/pausenrechner" className={`nav-link${activePath === "/pausenrechner" ? " active" : ""}`}>
            Pausenrechner
          </a>
          <a href="/impressum" className={`nav-link${activePath === "/impressum" ? " active" : ""}`}>
            Impressum
          </a>

          {/* Theme toggle – only shown when setDark is provided */}
          {setDark && (
            <button
              className="nav-theme-btn"
              onClick={() => setDark(!dark)}
              title={dark ? "Hell" : "Dunkel"}
            >
              {dark ? "☀️" : "🌙"}
            </button>
          )}

          {/* Language switcher */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              style={{
                background: colors.langBg,
                border: `1px solid ${colors.border}`,
                borderRadius: 8,
                padding: "6px 12px",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: colors.txt,
                transition: "all 0.15s",
              }}
            >
              {LANGS[lang].flag} {LANGS[lang].label}{" "}
              <span style={{ fontSize: 9, color: colors.dim }}>▼</span>
            </button>
            {langOpen && (
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: "calc(100% + 6px)",
                  background: colors.surface,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 12,
                  boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
                  zIndex: 200,
                  minWidth: 130,
                  overflow: "hidden",
                }}
              >
                {Object.entries(LANGS).map(([code, { flag, label }]) => (
                  <button
                    key={code}
                    className="lang-opt"
                    onClick={() => { setLang(code); setLangOpen(false); }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      width: "100%",
                      padding: "9px 14px",
                      background: lang === code ? colors.accLight : "transparent",
                      color: lang === code ? colors.acc : colors.txt,
                      border: "none",
                      cursor: "pointer",
                      fontSize: 13,
                      fontWeight: lang === code ? 700 : 500,
                      transition: "all 0.12s",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ fontSize: 18 }}>{flag}</span>
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
