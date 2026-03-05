import FadeIn from "./FadeIn";
import useIsMobile from "../hooks/useIsMobile";
import data from "../data/portfolioData";

export default function Certifications() {
  const isMobile = useIsMobile();
  return (
    <section id="certifications" className="section-pad" style={{ padding: "100px 2rem", background: "var(--bg-alt)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <p style={{ color: "var(--accent)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", letterSpacing: "0.14em", fontWeight: 600, marginBottom: "0.75rem", textAlign: "center" }}>CREDENTIALS</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--text-primary)", textAlign: "center", marginBottom: "3.5rem" }}>
            Certifications & <span style={{ color: "var(--accent)" }}>Training</span>
          </h2>
        </FadeIn>

        {/* Internship highlight */}
        <FadeIn delay={0.05}>
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--accent-border)", borderRadius: 18, padding: isMobile ? "1.5rem" : "2rem 2.5rem", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <div style={{ width: 60, height: 60, borderRadius: 16, background: "var(--accent-bg)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", flexShrink: 0 }}>🏢</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.4rem" }}>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.15rem", color: "var(--text-primary)" }}>Web Development Internship</h3>
                <span style={{ background: "var(--accent-bg)", border: "1px solid var(--accent-border)", color: "var(--accent)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700, borderRadius: 100, padding: "3px 12px" }}>45 DAYS</span>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "var(--accent)", fontWeight: 600, marginBottom: "0.3rem" }}>Waste Management Haryana</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "var(--text-muted)" }}>January 2024 · Developed a Waste Complaint System for citizen complaint tracking</p>
            </div>
            <div style={{ textAlign: isMobile ? "left" : "right" }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "var(--accent)" }}>2024</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.08em" }}>INTERNSHIP</div>
            </div>
          </div>
        </FadeIn>

        {/* Certification cards */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: "1.25rem" }}>
          {data.certifications.map((cert, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 14, padding: "1.5rem", display: "flex", gap: "1.25rem", alignItems: "flex-start", transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "var(--shadow-card)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "var(--accent-bg)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", flexShrink: 0 }}>{cert.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.3rem" }}>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)" }}>{cert.title}</h3>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "var(--text-muted)", marginLeft: 8 }}>{cert.year}</span>
                  </div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "var(--accent)", marginBottom: "0.5rem", fontWeight: 600 }}>{cert.issuer}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {cert.skills.split(", ").map((s) => (
                      <span key={s} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "var(--tag-text)", background: "var(--tag-bg)", border: "1px solid var(--tag-border)", borderRadius: 5, padding: "2px 10px" }}>{s}</span>
                    ))}
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
