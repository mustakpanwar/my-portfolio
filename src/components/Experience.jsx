import FadeIn from "./FadeIn";
import useIsMobile from "../hooks/useIsMobile";
import data from "../data/portfolioData";

export default function Experience() {
  const isMobile = useIsMobile();
  return (
    <section id="experience" className="section-pad" style={{ padding: "100px 2rem", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <p style={{ color: "var(--accent)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", letterSpacing: "0.14em", fontWeight: 600, marginBottom: "0.75rem" }}>WHERE I'VE WORKED</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--text-primary)", marginBottom: "3.5rem" }}>
            Work <span style={{ color: "var(--accent)" }}>Experience</span>
          </h2>
        </FadeIn>

        {data.experience.map((exp, i) => (
          <FadeIn key={i} delay={0.1}>
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-accent)", borderRadius: 18, padding: isMobile ? "1.5rem" : "2.5rem", marginBottom: "1.5rem", borderLeft: "3px solid var(--accent)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.75rem", marginBottom: "0.5rem" }}>
                <div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: isMobile ? "1.1rem" : "1.3rem", color: "var(--text-primary)", margin: "0 0 0.35rem" }}>{exp.role}</h3>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "var(--accent)", fontWeight: 600 }}>{exp.company}</span>
                  <span style={{ color: "var(--text-muted)", marginLeft: 8, fontSize: "0.9rem" }}>· {exp.location}</span>
                </div>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "var(--accent)", background: "var(--accent-bg)", border: "1px solid var(--accent-border)", borderRadius: 100, padding: "5px 14px", whiteSpace: "nowrap" }}>{exp.period}</span>
              </div>

              <div style={{ marginTop: "1.75rem", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "1.5rem" : "2rem" }}>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "var(--text-muted)", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>RESPONSIBILITIES</p>
                  {exp.responsibilities.map((r, j) => (
                    <div key={j} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.6rem" }}>
                      <span style={{ color: "var(--accent)", fontSize: "0.7rem", marginTop: 5, flexShrink: 0 }}>▸</span>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{r}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "var(--text-muted)", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>ACHIEVEMENTS</p>
                  {exp.achievements.map((a, j) => (
                    <div key={j} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.6rem" }}>
                      <span style={{ color: "var(--accent)", fontSize: "0.8rem", marginTop: 4, flexShrink: 0 }}>★</span>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{a}</span>
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
