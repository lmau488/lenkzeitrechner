"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { DEFAULT_LANG, LANGS } from "./translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(DEFAULT_LANG);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("lzr_lang");
      if (stored && LANGS[stored]) setLangState(stored);
    } catch {}
  }, []);

  function setLang(code) {
    if (!LANGS[code]) return;
    setLangState(code);
    try { localStorage.setItem("lzr_lang", code); } catch {}
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
