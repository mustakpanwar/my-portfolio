import FadeIn from "./FadeIn";
import useIsMobile from "../hooks/useIsMobile";
import data from "../data/portfolioData";

export default function About() {
  const isMobile = useIsMobile();
  return (
    <section id="about" className="section-pad" style={{ padding: "100px 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "2.5rem" : "4rem", alignItems: "center" }}>
          {/* Left */}
          <div>
            <p style={{ color: "#00E0C8", fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", letterSpacing: "0.14em", fontWeight: 600, marginBottom: "1rem" }}>ABOUT ME</p>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#fff", margin: "0 0 1.5rem", lineHeight: 1.1 }}>
              Crafting the web,<br /><span style={{ color: "#00E0C8" }}>one pixel</span> at a time.
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "#7a8fa6", lineHeight: 1.85, marginBottom: "1.5rem" }}>{data.about}</p>
            <div style={{ display: "flex", gap: "2rem" }}>
              {[["1+", "Year Experience"], ["20%", "SEO Boost"], ["10+", "Projects Delivered"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "2rem", color: "#00E0C8" }}>{num}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "#556070", letterSpacing: "0.06em" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Info card */}
          <div style={{ position: "relative" }}>
            <div style={{ background: "linear-gradient(135deg, rgba(0,224,200,0.06) 0%, rgba(100,60,255,0.06) 100%)", border: "1px solid rgba(0,224,200,0.15)", borderRadius: 20, padding: "2.5rem" }}>
              {[
                ["📍", "Location", "Panipat, Haryana, India"],
                ["📧", "Email", data.contact.email],
                ["📞", "Phone", data.contact.phone],
                ["🎓", "Education", "MCA – PIET Panipat"],
                ["💼", "Status", "Open to opportunities"],
              ].map(([icon, label, val]) => (
                <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "0.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ fontSize: "1.1rem", marginTop: 2 }}>{icon}</span>
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#556070", letterSpacing: "0.1em", marginBottom: 2 }}>{label.toUpperCase()}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "#ccd6e0" }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ position: "absolute", top: -16, right: -16, width: 80, height: 80, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,224,200,0.2), transparent)", zIndex: -1 }} />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
