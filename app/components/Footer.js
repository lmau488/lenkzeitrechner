const DARK_DEFAULTS = {
  border: "rgba(255,255,255,0.07)",
  dim: "#64748b",
};

export default function Footer({ C }) {
  const colors = C || DARK_DEFAULTS;
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 16,
        padding: "16px 0",
        fontSize: 12,
        color: colors.dim,
        borderTop: `1px solid ${colors.border}`,
        flexWrap: "wrap",
      }}
    >
      <a href="/lkw-lenkzeiten" style={{ color: colors.dim, textDecoration: "none" }}>Lenkzeiten</a>
      <a href="/pausenrechner" style={{ color: colors.dim, textDecoration: "none" }}>Pausenrechner</a>
      <a href="/ruhezeiten" style={{ color: colors.dim, textDecoration: "none" }}>Ruhezeiten</a>
      <a href="/bussgeldkatalog" style={{ color: colors.dim, textDecoration: "none" }}>Bußgelder</a>
      <a href="/digitaler-tachograph" style={{ color: colors.dim, textDecoration: "none" }}>Tachograph</a>
      <a href="/mobilitaetspaket" style={{ color: colors.dim, textDecoration: "none" }}>Mobilitätspaket</a>
      <a href="/ueber-uns" style={{ color: colors.dim, textDecoration: "none" }}>Über uns</a>
      <a href="/impressum" style={{ color: colors.dim, textDecoration: "none" }}>Impressum</a>
      <a href="/datenschutz" style={{ color: colors.dim, textDecoration: "none" }}>Datenschutz</a>
      <span>© 2026 LenkzeitRechner.de</span>
    </footer>
  );
}
