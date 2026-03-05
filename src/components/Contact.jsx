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
    width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 10, padding: "14px 16px", color: "#fff",
    fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", outline: "none",
    transition: "border-color 0.2s", boxSizing: "border-box",
  };

  return (
    <section id="contact" className="section-pad" style={{ padding: "100px 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <p style={{ color: "#00E0C8", fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", letterSpacing: "0.14em", fontWeight: 600, marginBottom: "0.75rem", textAlign: "center" }}>GET IN TOUCH</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#fff", textAlign: "center", marginBottom: "1rem" }}>
            Let's <span style={{ color: "#00E0C8" }}>Work Together</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "#556070", textAlign: "center", maxWidth: 500, margin: "0 auto 3.5rem" }}>
            Have a project in mind? I'd love to hear about it. Send me a message and let's talk.
          </p>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.5fr", gap: isMobile ? "2rem" : "3rem", alignItems: "start" }}>
          {/* Contact info */}
          <FadeIn delay={0.1}>
            <div>
              {[
                { icon: "📧", label: "Email", val: data.contact.email },
                { icon: "📞", label: "Phone", val: data.contact.phone },
                { icon: "📍", label: "Location", val: data.contact.location },
              ].map(({ icon, label, val }) => (
                <div key={label} style={{ display: "flex", gap: "1.25rem", alignItems: "center", padding: "1.25rem", marginBottom: "1rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,224,200,0.1)", borderRadius: 12 }}>
                  <span style={{ fontSize: "1.4rem" }}>{icon}</span>
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#556070", letterSpacing: "0.1em", marginBottom: 3 }}>{label.toUpperCase()}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "#ccd6e0" }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.2}>
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,224,200,0.12)", borderRadius: 18, padding: "2rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                <input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#00E0C8")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                <input placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#00E0C8")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
              </div>
              <textarea placeholder="Tell me about your project..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5} style={{ ...inputStyle, resize: "vertical", marginBottom: "1rem" }}
                onFocus={(e) => (e.target.style.borderColor = "#00E0C8")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
              <button onClick={handleSubmit} style={{ width: "100%", background: sent ? "#00b894" : "#00E0C8", color: "#080a12", border: "none", borderRadius: 10, padding: "15px", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1rem", cursor: "pointer", transition: "all 0.3s", boxShadow: "0 0 24px rgba(0,224,200,0.25)" }}>
                {sent ? "✓ Message Sent!" : "Send Message →"}
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
