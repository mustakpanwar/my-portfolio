import FadeIn from "./FadeIn";
import data from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="section-pad" style={{ padding: "100px 2rem", background: "rgba(255,255,255,0.015)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <p style={{ color: "#00E0C8", fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", letterSpacing: "0.14em", fontWeight: 600, marginBottom: "0.75rem", textAlign: "center" }}>WHAT I WORK WITH</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#fff", textAlign: "center", marginBottom: "3.5rem" }}>
            Skills & <span style={{ color: "#00E0C8" }}>Technologies</span>
          </h2>
        </FadeIn>

        <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {data.skills.map((s, i) => (
            <FadeIn key={s.category} delay={i * 0.08}>
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,224,200,0.1)", borderRadius: 14, padding: "1.5rem", transition: "border-color 0.3s, transform 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,224,200,0.35)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,224,200,0.1)"; e.currentTarget.style.transform = ""; }}
              >
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#00E0C8", marginBottom: "1rem", letterSpacing: "0.04em" }}>{s.category}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {s.items.map((item) => (
                    <span key={item} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#aab8c8", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, padding: "4px 12px" }}>{item}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
