import FadeIn from "./FadeIn";
import useIsMobile from "../hooks/useIsMobile";
import data from "../data/portfolioData";

export default function About() {
  const isMobile = useIsMobile();

  const infoItems = [
    { icon: "📍", label: "Location", val: data.contact.location,  href: null },
    { icon: "📧", label: "Email",    val: data.contact.email,     href: `mailto:${data.contact.email}` },
    { icon: "💬", label: "WhatsApp", val: data.contact.phone,     href: `https://wa.me/${data.contact.phone.replace(/\D/g, "")}?text=Hi%20Mustak!%20I%20visited%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project%20with%20you.` },
    { icon: "🎓", label: "Education",val: "MCA – PIET Panipat",   href: null },
    { icon: "💼", label: "Status",   val: "Open to opportunities", href: null },
  ];

  return (
    <section id="about" className="section-pad" style={{ padding: "100px 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "2.5rem" : "4rem", alignItems: "center" }}>

          {/* Left */}
          <div>
            <p style={{ color: "var(--accent)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", letterSpacing: "0.14em", fontWeight: 600, marginBottom: "1rem" }}>ABOUT ME</p>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-primary)", margin: "0 0 1.5rem", lineHeight: 1.1 }}>
              Crafting the web,<br /><span style={{ color: "var(--accent)" }}>one pixel</span> at a time.
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.85, marginBottom: "1.5rem" }}>{data.about}</p>
            <div style={{ display: "flex", gap: "2rem" }}>
              {[["1+", "Year Experience"], ["20%", "SEO Boost"], ["10+", "Projects Delivered"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "2rem", color: "var(--accent)" }}>{num}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "var(--text-muted)", letterSpacing: "0.06em" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Info card */}
          <div style={{ position: "relative" }}>
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-accent)", borderRadius: 20, padding: "2.5rem" }}>
              {infoItems.map(({ icon, label, val, href }) => (
                <a key={label}
                  href={href || undefined}
                  target={href ? "_blank" : undefined}
                  rel="noreferrer"
                  style={{
                    display: "flex", gap: "1rem", alignItems: "flex-start",
                    padding: "0.75rem 0", borderBottom: "1px solid var(--border)",
                    textDecoration: "none",
                    cursor: href ? "pointer" : "default",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={e => { if (href) e.currentTarget.style.opacity = "0.75"; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
                >
                  <span style={{ fontSize: "1.1rem", marginTop: 2 }}>{icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.1em", marginBottom: 2 }}>{label.toUpperCase()}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "var(--text-secondary)" }}>{val}</div>
                  </div>
                  {href && (
                    <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: 4 }}>↗</span>
                  )}
                </a>
              ))}
            </div>
            <div style={{ position: "absolute", top: -16, right: -16, width: 80, height: 80, borderRadius: "50%", background: "radial-gradient(circle, var(--accent-glow), transparent)", zIndex: -1 }} />
          </div>

        </div>
      </FadeIn>
    </section>
  );
}