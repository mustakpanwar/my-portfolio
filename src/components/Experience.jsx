import FadeIn from "./FadeIn";
import useIsMobile from "../hooks/useIsMobile";
import data from "../data/portfolioData";

export default function Experience() {
  const isMobile = useIsMobile();
  return (
    <section id="experience" className="section-pad" style={{ padding: "100px 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <p style={{ color: "#00E0C8", fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", letterSpacing: "0.14em", fontWeight: 600, marginBottom: "0.75rem" }}>WHERE I'VE WORKED</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#fff", marginBottom: "3.5rem" }}>
            Work <span style={{ color: "#00E0C8" }}>Experience</span>
          </h2>
        </FadeIn>

        {data.experience.map((exp, i) => (
          <FadeIn key={i} delay={0.1}>
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,224,200,0.12)", borderRadius: 18, padding: isMobile ? "1.5rem" : "2.5rem", marginBottom: "1.5rem", borderLeft: "3px solid #00E0C8" }}>
              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.75rem", marginBottom: "0.5rem" }}>
                <div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: isMobile ? "1.1rem" : "1.3rem", color: "#fff", margin: "0 0 0.35rem" }}>{exp.role}</h3>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#00E0C8", fontWeight: 600 }}>{exp.company}</span>
                  <span style={{ color: "#556070", marginLeft: 8, fontSize: "0.9rem" }}>· {exp.location}</span>
                </div>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "#00E0C8", background: "rgba(0,224,200,0.08)", border: "1px solid rgba(0,224,200,0.2)", borderRadius: 100, padding: "5px 14px", whiteSpace: "nowrap" }}>{exp.period}</span>
              </div>

              {/* Body */}
              <div style={{ marginTop: "1.75rem", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "1.5rem" : "2rem" }}>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "#556070", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>RESPONSIBILITIES</p>
                  {exp.responsibilities.map((r, j) => (
                    <div key={j} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.6rem" }}>
                      <span style={{ color: "#00E0C8", fontSize: "0.7rem", marginTop: 5, flexShrink: 0 }}>▸</span>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#7a8fa6", lineHeight: 1.65 }}>{r}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "#556070", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>ACHIEVEMENTS</p>
                  {exp.achievements.map((a, j) => (
                    <div key={j} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.6rem" }}>
                      <span style={{ color: "#00E0C8", fontSize: "0.8rem", marginTop: 4, flexShrink: 0 }}>★</span>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#7a8fa6", lineHeight: 1.65 }}>{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
