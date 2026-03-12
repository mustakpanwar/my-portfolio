import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "2rem", textAlign: "center", background: "var(--bg)" }}>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "var(--text-faint)" }}>
        © 2025 Mustak Panwar · Designed by Mustak Panwar
        <span style={{ margin: "0 0.5rem", color: "var(--accent)" }}>·</span>
        <span style={{ color: "var(--accent)" }}>{theme === "dark" ? "🌙 Dark" : "☀️ Light"} Mode</span>
      </p>
    </footer>
  );
}
