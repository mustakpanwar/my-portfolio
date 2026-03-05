import { useState } from "react";
import FadeIn from "./FadeIn";
import useIsMobile from "../hooks/useIsMobile";
import data from "../data/portfolioData";

const CATEGORIES = ["All", "WordPress", "Shopify", "React", "Full Stack"];

export default function Projects() {
  const isMobile = useIsMobile();
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? data.projects : data.projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="section-pad" style={{ padding: "100px 2rem", background: "var(--bg-alt)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <p style={{ color: "var(--accent)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", letterSpacing: "0.14em", fontWeight: 600, marginBottom: "0.75rem", textAlign: "center" }}>MY WORK</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--text-primary)", textAlign: "center", marginBottom: "2rem" }}>
            Featured <span style={{ color: "var(--accent)" }}>Projects</span>
          </h2>

          {/* Filter tabs */}
          <div style={{ display: "flex", gap: "0.6rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
            {CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)} style={{ background: filter === cat ? "#00E0C8" : "rgba(255,255,255,0.04)", color: filter === cat ? "#080a12" : "#7a8fa6", border: filter === cat ? "1px solid #00E0C8" : "1px solid rgba(255,255,255,0.1)", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.82rem", padding: "8px 20px", borderRadius: 100, cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={(e) => { if (filter !== cat) { e.target.style.borderColor = "#00E0C8"; e.target.style.color = "#00E0C8"; } }}
                onMouseLeave={(e) => { if (filter !== cat) { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.color = "#7a8fa6"; } }}
              >{cat}</button>
            ))}
          </div>
        </FadeIn>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {filtered.map((proj, i) => (
            <FadeIn key={proj.title} delay={i * 0.07}>
              <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column", transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s", height: "100%" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = "rgba(0,224,200,0.3)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,224,200,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.boxShadow = ""; }}
              >
                {/* Banner */}
                <div style={{ height: 140, background: `linear-gradient(135deg, ${proj.color}15 0%, rgba(100,60,255,0.08) 100%)`, display: "flex", alignItems: "center", justifyContent: "center", borderBottom: `1px solid ${proj.color}22`, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${proj.color}10 1px, transparent 1px), linear-gradient(90deg, ${proj.color}10 1px, transparent 1px)`, backgroundSize: "24px 24px" }} />
                  <span style={{ fontSize: "3.5rem", zIndex: 1, filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.4))" }}>{proj.emoji}</span>
                  <span style={{ position: "absolute", top: 12, right: 12, background: `${proj.color}22`, border: `1px solid ${proj.color}44`, color: proj.color, fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700, borderRadius: 100, padding: "3px 10px" }}>{proj.type}</span>
                </div>

                {/* Body */}
                <div style={{ padding: "1.4rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.05rem", color: "var(--text-primary)", marginBottom: "0.6rem", lineHeight: 1.3 }}>{proj.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1rem", flex: 1 }}>{proj.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.2rem" }}>
                    {proj.tags.map((tag) => (
                      <span key={tag} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "var(--text-secondary)", background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", borderRadius: 5, padding: "3px 10px" }}>{tag}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <a href={proj.live} style={{ flex: 1, textAlign: "center", padding: "9px 0", background: "#00E0C8", color: "#080a12", borderRadius: 8, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.82rem", textDecoration: "none", transition: "opacity 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >Live Demo</a>
                    <a href={proj.github} style={{ flex: 1, textAlign: "center", padding: "9px 0", background: "transparent", color: "var(--text-secondary)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.82rem", textDecoration: "none", transition: "border-color 0.2s, color 0.2s" }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#00E0C8"; e.currentTarget.style.color = "#00E0C8"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "#aab8c8"; }}
                    >GitHub</a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
