import { useState, useEffect } from "react";
import FadeIn from "./FadeIn";
import useIsMobile from "../hooks/useIsMobile";
import data from "../data/portfolioData";

const CATEGORY_META = {
  "WordPress":         { icon: "🌐", color: "#21759b", bg: "rgba(33,117,155,0.12)",   glow: "rgba(33,117,155,0.5)",  label: "CMS Expert"      },
  "Shopify":           { icon: "🛍️", color: "#96bf48", bg: "rgba(150,191,72,0.12)",  glow: "rgba(150,191,72,0.5)",  label: "E-commerce"      },
  "Frontend":          { icon: "💻", color: "var(--accent)", bg: "rgba(0,224,200,0.12)",    glow: "rgba(0,224,200,0.5)",   label: "UI Development"  },
  "Backend & Tools":   { icon: "⚙️", color: "#f39c12", bg: "rgba(243,156,18,0.12)",  glow: "rgba(243,156,18,0.5)",  label: "Server & DB"     },
  "SEO & Performance": { icon: "📈", color: "#e74c3c", bg: "rgba(231,76,60,0.12)",   glow: "rgba(231,76,60,0.5)",   label: "Growth & Speed"  },
  "Security":          { icon: "🔒", color: "#9b59b6", bg: "rgba(155,89,182,0.12)",  glow: "rgba(155,89,182,0.5)",  label: "Protection"      },
};

const PROFICIENCY = {
  "WordPress":         95,
  "Shopify":           85,
  "Frontend":          88,
  "Backend & Tools":   75,
  "SEO & Performance": 82,
  "Security":          78,
};

function AnimatedBar({ value, color, glow, active }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (active) {
      const t = setTimeout(() => setWidth(value), 100);
      return () => clearTimeout(t);
    } else {
      setWidth(0);
    }
  }, [active, value]);

  return (
    <div style={{ position: "relative", height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 10, overflow: "visible" }}>
      <div style={{
        height: "100%", width: `${width}%`, borderRadius: 10,
        background: `linear-gradient(90deg, ${color}88, ${color})`,
        boxShadow: `0 0 12px ${glow}`,
        transition: "width 1s cubic-bezier(0.4,0,0.2,1)",
        position: "relative",
      }}>
        {/* Glowing tip */}
        <div style={{
          position: "absolute", right: -3, top: "50%", transform: "translateY(-50%)",
          width: 12, height: 12, borderRadius: "50%",
          background: color, boxShadow: `0 0 10px ${glow}, 0 0 20px ${glow}`,
          opacity: width > 0 ? 1 : 0, transition: "opacity 0.3s 0.8s",
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState(data.skills[0].category);
  const activeSkill = data.skills.find(s => s.category === activeTab);
  const meta = CATEGORY_META[activeTab] || { icon: "🔧", color: "var(--accent)", bg: "rgba(0,224,200,0.1)", glow: "rgba(0,224,200,0.5)", label: "Skills" };
  const prof = PROFICIENCY[activeTab] || 80;

  return (
    <section id="skills" className="section-pad" style={{
      padding: "100px 2rem",
      background: "var(--bg)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Animated mesh background */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `
          radial-gradient(ellipse at 20% 50%, rgba(0,224,200,0.05) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, rgba(100,60,255,0.05) 0%, transparent 60%),
          linear-gradient(rgba(0,224,200,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,224,200,0.02) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 100% 100%, 40px 40px, 40px 40px",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── Header ── */}
        <FadeIn>
          <p style={{ color: "var(--accent)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", letterSpacing: "0.16em", fontWeight: 700, marginBottom: "0.6rem", textAlign: "center" }}>MY ARSENAL</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-primary)", textAlign: "center", marginBottom: "0.6rem", lineHeight: 1.1 }}>
            Skills & <span style={{ color: "var(--accent)", position: "relative" }}>
              Technologies
              <span style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, #00E0C8, transparent)`, borderRadius: 2 }} />
            </span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "var(--text-muted)", textAlign: "center", marginBottom: "3.5rem" }}>
            Click a category to dive deep
          </p>
        </FadeIn>

        {/* ── Main layout ── */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "280px 1fr", gap: "1.5rem", alignItems: "start" }}>

          {/* LEFT — Category tabs */}
          <FadeIn delay={0.1}>
            <div style={{ display: "flex", flexDirection: isMobile ? "row" : "column", gap: "0.6rem", flexWrap: isMobile ? "wrap" : "nowrap" }}>
              {data.skills.map((s, i) => {
                const m = CATEGORY_META[s.category] || {};
                const isActive = activeTab === s.category;
                return (
                  <button key={s.category} onClick={() => setActiveTab(s.category)} style={{
                    display: "flex", alignItems: "center", gap: "0.85rem",
                    padding: isMobile ? "0.6rem 1rem" : "0.9rem 1.25rem",
                    borderRadius: 12, cursor: "pointer", border: "none",
                    background: isActive ? m.bg : "rgba(255,255,255,0.02)",
                    outline: `1px solid ${isActive ? m.color + "55" : "rgba(255,255,255,0.06)"}`,
                    transition: "all 0.25s ease",
                    transform: isActive ? "translateX(4px)" : "none",
                    boxShadow: isActive ? `inset 0 0 20px ${m.glow}22, 0 0 20px ${m.glow}22` : "none",
                    flex: isMobile ? "1 1 auto" : "unset",
                    justifyContent: isMobile ? "center" : "flex-start",
                  }}>
                    <span style={{
                      width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                      background: isActive ? `${m.color}22` : "rgba(255,255,255,0.05)",
                      border: `1px solid ${isActive ? m.color + "44" : "transparent"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.1rem",
                      boxShadow: isActive ? `0 0 12px ${m.glow}` : "none",
                      transition: "all 0.25s",
                    }}>{m.icon}</span>
                    {!isMobile && (
                      <div style={{ textAlign: "left" }}>
                        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.88rem", color: isActive ? m.color : "#aab8c8", transition: "color 0.25s" }}>{s.category}</div>
                        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "var(--text-muted)", marginTop: 1 }}>{m.label}</div>
                      </div>
                    )}
                    {!isMobile && isActive && (
                      <div style={{ marginLeft: "auto", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "0.85rem", color: m.color }}>{PROFICIENCY[s.category]}%</div>
                    )}
                  </button>
                );
              })}
            </div>
          </FadeIn>

          {/* RIGHT — Active skill panel */}
          <FadeIn delay={0.15}>
            <div style={{
              background: `linear-gradient(135deg, ${meta.bg} 0%, rgba(8,10,18,0.95) 60%)`,
              border: `1px solid ${meta.color}33`,
              borderRadius: 20, padding: isMobile ? "1.5rem" : "2.5rem",
              boxShadow: `0 0 60px ${meta.glow}15`,
              transition: "all 0.4s ease",
              minHeight: 320,
            }}>
              {/* Panel header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 16,
                    background: `${meta.color}22`, border: `1px solid ${meta.color}55`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.8rem", boxShadow: `0 0 20px ${meta.glow}`,
                  }}>{meta.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "var(--text-primary)" }}>{activeTab}</h3>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: meta.color, fontWeight: 600, letterSpacing: "0.06em" }}>{meta.label}</span>
                  </div>
                </div>
                {/* Circular progress */}
                <div style={{ position: "relative", width: 72, height: 72 }}>
                  <svg width="72" height="72" style={{ transform: "rotate(-90deg)" }}>
                    <circle cx="36" cy="36" r="30" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="5" />
                    <circle cx="36" cy="36" r="30" fill="none" stroke={meta.color} strokeWidth="5"
                      strokeDasharray={`${2 * Math.PI * 30}`}
                      strokeDashoffset={`${2 * Math.PI * 30 * (1 - prof / 100)}`}
                      strokeLinecap="round"
                      style={{ filter: `drop-shadow(0 0 6px ${meta.color})`, transition: "stroke-dashoffset 1s ease" }}
                    />
                  </svg>
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "0.9rem", color: meta.color }}>{prof}%</span>
                  </div>
                </div>
              </div>

              {/* Bar */}
              <div style={{ marginBottom: "2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.6rem" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "var(--text-muted)", letterSpacing: "0.08em" }}>PROFICIENCY LEVEL</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: meta.color }}>Expert</span>
                </div>
                <AnimatedBar value={prof} color={meta.color} glow={meta.glow} active={true} />
              </div>

              {/* Skill tags as chips */}
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "var(--text-muted)", letterSpacing: "0.08em", marginBottom: "1rem" }}>TOOLS & TECHNOLOGIES</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
                  {activeSkill?.items.map((item, idx) => (
                    <div key={item} style={{
                      display: "flex", alignItems: "center", gap: "0.5rem",
                      padding: "8px 16px", borderRadius: 100,
                      background: `${meta.color}12`,
                      border: `1px solid ${meta.color}33`,
                      fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem",
                      color: "#ccd6e0", fontWeight: 500,
                      transition: "all 0.2s",
                      animation: `fadeUp 0.4s ease ${idx * 0.06}s both`,
                      cursor: "default",
                    }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = `${meta.color}25`;
                        e.currentTarget.style.borderColor = `${meta.color}77`;
                        e.currentTarget.style.color = "#fff";
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = `0 4px 14px ${meta.glow}44`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = `${meta.color}12`;
                        e.currentTarget.style.borderColor = `${meta.color}33`;
                        e.currentTarget.style.color = "#ccd6e0";
                        e.currentTarget.style.transform = "";
                        e.currentTarget.style.boxShadow = "";
                      }}
                    >
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: meta.color, boxShadow: `0 0 6px ${meta.glow}`, flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ── Bottom stats strip ── */}
        <FadeIn delay={0.3}>
          <div style={{
            marginTop: "3rem", display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)",
            gap: "1rem",
          }}>
            {[
              { num: "10+", label: "Projects Delivered", icon: "🚀", color: "var(--accent)" },
              { num: "1.5+",  label: "Years Experience",   icon: "💼", color: "#96bf48" },
              { num: "20%", label: "Avg. SEO Boost",     icon: "📈", color: "#e74c3c" },
              { num: "6",   label: "Skill Categories",   icon: "🛠️", color: "#9b59b6" },
            ].map(({ num, label, icon, color }) => (
              <div key={label} style={{
                background: "var(--bg-card-alt)",
                border: `1px solid ${color}22`,
                borderRadius: 14, padding: "1.25rem 1rem", textAlign: "center",
                transition: "all 0.3s",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = `${color}0d`;
                  e.currentTarget.style.borderColor = `${color}55`;
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = `0 8px 24px ${color}22`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  e.currentTarget.style.borderColor = `${color}22`;
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>{icon}</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.8rem", color, lineHeight: 1 }}>{num}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.76rem", color: "var(--text-muted)", marginTop: "0.35rem", letterSpacing: "0.04em" }}>{label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
