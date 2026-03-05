import { useState } from "react";
import FadeIn from "./FadeIn";
import useIsMobile from "../hooks/useIsMobile";
import data from "../data/portfolioData";

export default function Contact() {
  const isMobile = useIsMobile();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setForm({ name: "", email: "", message: "" });
    }
  };

  const inputStyle = {
    width: "100%",
    background: "var(--input-bg)",
    border: "1px solid var(--input-border)",
    borderRadius: 10, padding: "14px 16px",
    color: "var(--text-primary)",
    fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", outline: "none",
    transition: "border-color 0.2s", boxSizing: "border-box",
  };

  const contactItems = [
    { icon: "📧", label: "Email",    val: data.contact.email,    href: `mailto:${data.contact.email}`,                              hoverColor: "var(--accent)" },
    { icon: "💬", label: "WhatsApp", val: data.contact.phone,    href: `https://wa.me/${data.contact.phone.replace(/\D/g, "")}?text=Hi%20Mustak!%20I%20visited%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project%20with%20you.`,    hoverColor: "#25D366"       },
    { icon: "📍", label: "Location", val: data.contact.location, href: null,                                                        hoverColor: "var(--accent)" },
  ];

  return (
    <section id="contact" className="section-pad" style={{ padding: "100px 2rem", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <p style={{ color: "var(--accent)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", letterSpacing: "0.14em", fontWeight: 600, marginBottom: "0.75rem", textAlign: "center" }}>GET IN TOUCH</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--text-primary)", textAlign: "center", marginBottom: "1rem" }}>
            Let's <span style={{ color: "var(--accent)" }}>Work Together</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "var(--text-muted)", textAlign: "center", maxWidth: 500, margin: "0 auto 3.5rem" }}>
            Have a project in mind? I'd love to hear about it. Send me a message and let's talk.
          </p>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.5fr", gap: isMobile ? "2rem" : "3rem", alignItems: "start" }}>

          {/* Left — Contact info */}
          <FadeIn delay={0.1}>
            <div>
              {contactItems.map(({ icon, label, val, href, hoverColor }) => (
                <a key={label}
                  href={href || undefined}
                  target={href ? "_blank" : undefined}
                  rel="noreferrer"
                  style={{
                    display: "flex", gap: "1.25rem", alignItems: "center",
                    padding: "1.25rem", marginBottom: "1rem",
                    background: "var(--bg-card)", border: "1px solid var(--border-accent)",
                    borderRadius: 12, textDecoration: "none",
                    cursor: href ? "pointer" : "default",
                    transition: "border-color 0.3s, transform 0.3s",
                  }}
                  onMouseEnter={e => { if (href) { e.currentTarget.style.borderColor = hoverColor; e.currentTarget.style.transform = "translateY(-2px)"; }}}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-accent)"; e.currentTarget.style.transform = ""; }}
                >
                  <span style={{ fontSize: "1.4rem" }}>{icon}</span>
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.1em", marginBottom: 3 }}>{label.toUpperCase()}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "var(--text-secondary)" }}>{val}</div>
                  </div>
                  {href && (
                    <span style={{ marginLeft: "auto", color: "var(--text-muted)", fontSize: "0.8rem" }}>↗</span>
                  )}
                </a>
              ))}

              {/* Social buttons */}
              <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
                <a href={data.contact.linkedin} target="_blank" rel="noreferrer" style={{
                  flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                  padding: "12px", borderRadius: 12, textDecoration: "none",
                  background: "var(--accent-bg)", border: "1px solid var(--accent-border)",
                  color: "var(--accent)", fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700, fontSize: "0.9rem", transition: "all 0.3s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "var(--bg)"; e.currentTarget.style.boxShadow = "0 0 20px var(--accent-glow)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "var(--accent-bg)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.boxShadow = ""; }}
                >
                  💼 LinkedIn
                </a>
                <a href={data.contact.github} target="_blank" rel="noreferrer" style={{
                  flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                  padding: "12px", borderRadius: 12, textDecoration: "none",
                  background: "var(--accent-bg)", border: "1px solid var(--accent-border)",
                  color: "var(--accent)", fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700, fontSize: "0.9rem", transition: "all 0.3s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "var(--bg)"; e.currentTarget.style.boxShadow = "0 0 20px var(--accent-glow)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "var(--accent-bg)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.boxShadow = ""; }}
                >
                  🐙 GitHub
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right — Contact form */}
          <FadeIn delay={0.2}>
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-accent)", borderRadius: 18, padding: "2rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                <input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--input-border)")} />
                <input placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--input-border)")} />
              </div>
              <textarea placeholder="Tell me about your project..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5} style={{ ...inputStyle, resize: "vertical", marginBottom: "1rem" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--input-border)")} />
              <button onClick={handleSubmit} style={{
                width: "100%", background: sent ? "#00b894" : "var(--accent)",
                color: "var(--bg)", border: "none", borderRadius: 10, padding: "15px",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1rem",
                cursor: "pointer", transition: "all 0.3s",
                boxShadow: "0 0 24px var(--accent-glow)",
              }}>
                {sent ? "✓ Message Sent!" : "Send Message →"}
              </button>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}