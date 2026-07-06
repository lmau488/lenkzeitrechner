"use client";
import { useEffect, useRef } from "react";

/* Echte Google-AdSense-Anzeige (responsiv). Kollabiert unsichtbar,
   solange keine Anzeige ausgeliefert wird – kein leerer Platzhalter. */
export default function AdUnit({ style }) {
  const pushed = useRef(false);
  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", width: "100%", textAlign: "center", ...style }}
      data-ad-client="ca-pub-5227565874576366"
      data-ad-slot="6326611486"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
