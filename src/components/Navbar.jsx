import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(8,10,18,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: "1px solid #00E0C8",
      transition: "all 0.4s ease",
      padding: "0 2rem",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        {/* Logo */}
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#00E0C8", letterSpacing: 1 }}>
          MP<span style={{ color: "#fff" }}>.</span>
        </span>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "2.2rem" }} className="nav-desktop">
          {NAV_LINKS.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: "none", border: "none", color: "#00E0C8",
              fontFamily: "'Syne', sans-serif", fontSize: "0.9rem",
              letterSpacing: "0.05em", cursor: "pointer", padding: "4px 0",
              transition: "color 0.2s", fontWeight: 800,
            }}
              onMouseEnter={(e) => (e.target.style.color = "#fff")}
              onMouseLeave={(e) => (e.target.style.color = "#00E0C8")}
            >{l}</button>
          ))}
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen((o) => !o)} style={{
          display: "none", background: "none", border: "none",
          cursor: "pointer", flexDirection: "column", gap: 5, padding: 4,
        }} className="nav-burger">
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ display: "block", width: 24, height: 2, background: "#00E0C8", borderRadius: 2 }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "rgba(8,10,18,0.98)", borderTop: "1px solid rgba(0,224,200,0.1)", padding: "1rem 2rem" }}>
          {NAV_LINKS.map((l) => (
            <div key={l} onClick={() => scrollTo(l)} style={{
              color: "#00E0C8", fontFamily: "'Syne', sans-serif", fontSize: "1rem",
              fontWeight: 800, padding: "0.75rem 0", cursor: "pointer",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}>{l}</div>
          ))}
        </div>
      )}
    </nav>
  );
}
