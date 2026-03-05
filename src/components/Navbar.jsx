import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleToggle = () => {
    setSpinning(true);
    toggleTheme();
    setTimeout(() => setSpinning(false), 400);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "var(--nav-bg)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: "1px solid var(--accent)",
      transition: "all 0.4s ease",
      padding: "0 2rem",
    }}>
      <div style={{ maxWidth: 1270, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>

        {/* Logo */}
        <span onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })} 
  style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "var(--accent)", letterSpacing: 1, cursor: "pointer" }}>
  MP<span style={{ color: "var(--text-primary)" }}>.</span>
</span>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "2.2rem", alignItems: "center", marginLeft: "auto" }} className="nav-desktop">

          {NAV_LINKS.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: "none", border: "none", color: "var(--accent)",
              fontFamily: "'Syne', sans-serif", fontSize: "0.8rem",
              letterSpacing: "0.05em", cursor: "pointer", padding: "4px 0",
              transition: "color 0.2s", fontWeight: 800,
            }}
              onMouseEnter={(e) => (e.target.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--accent)")}
            >{l}</button>
          ))}

          {/* Theme toggle */}
          <button className={`theme-toggle ${spinning ? "spinning" : ""}`} onClick={handleToggle} title="Toggle theme">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <button className={`theme-toggle ${spinning ? "spinning" : ""}`} onClick={handleToggle} title="Toggle theme" style={{ display: "none" }} id="mobile-theme-btn">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen((o) => !o)} style={{
            display: "none", background: "none", border: "none",
            cursor: "pointer", flexDirection: "column", gap: 5, padding: 4,
          }} className="nav-burger">
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ display: "block", width: 24, height: 2, background: "var(--accent)", borderRadius: 2 }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "var(--nav-bg)", borderTop: "1px solid var(--border-accent)", padding: "1rem 2rem", backdropFilter: "blur(16px)" }}>
          {/* Theme toggle row in mobile menu */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.75rem 0", borderBottom: "1px solid var(--border)", marginBottom: "0.25rem" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              {theme === "dark" ? "Dark Mode" : "Light Mode"}
            </span>
            <button className={`theme-toggle ${spinning ? "spinning" : ""}`} onClick={handleToggle}>
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
          {NAV_LINKS.map((l) => (
            <div key={l} onClick={() => scrollTo(l)} style={{
              color: "var(--accent)", fontFamily: "'Syne', sans-serif", fontSize: "1rem",
              fontWeight: 800, padding: "0.75rem 0", cursor: "pointer",
              borderBottom: "1px solid var(--border)",
            }}>{l}</div>
          ))}
        </div>
      )}
    </nav>
  );
}
