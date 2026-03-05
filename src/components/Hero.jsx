import { useState, useEffect } from "react";
import data from "../data/portfolioData";

const TYPING_WORDS = ["WordPress Developer.", "Shopify Expert.", "Web Craftsman."];
const PROFILE_IMAGE = "https://ui-avatars.com/api/?name=Mustak+Panwar&size=320&background=1B3A6B&color=00E0C8&font-size=0.35&bold=true";
// 👆 Replace PROFILE_IMAGE with your actual photo path e.g. "/mustak.jpg"

function ProfileImage({ size = 320 }) {
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      {/* Spinning ring */}
      <div style={{ position: "absolute", inset: -6, borderRadius: "50%", background: "conic-gradient(from 0deg, #00E0C8, transparent, #6433ff, transparent, #00E0C8)", animation: "spinRing 6s linear infinite", zIndex: 0 }} />
      <div style={{ position: "absolute", inset: -2, borderRadius: "50%", background: "#080a12", zIndex: 1 }} />
      <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden", zIndex: 2, border: "3px solid rgba(0,224,200,0.3)" }}>
        <img src={PROFILE_IMAGE} alt="Mustak Panwar" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
      {/* Badge — Experience */}
      <div style={{ position: "absolute", bottom: size === 220 ? 10 : 10, left: size === 220 ? -40 : -20, zIndex: 3, background: "rgba(8,10,18,0.92)", border: "1px solid rgba(0,224,200,0.3)", backdropFilter: "blur(10px)", borderRadius: 12, padding: size === 220 ? "8px 12px" : "10px 16px", display: "flex", alignItems: "center", gap: size === 220 ? "8px" : "10px", animation: "floatBadge 3s ease-in-out infinite" }}>
        <span style={{ fontSize: size === 220 ? "1.1rem" : "1.4rem" }}>💼</span>
        <div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: size === 220 ? "0.9rem" : "1rem", color: "#00E0C8", lineHeight: 1 }}>1+</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: size === 220 ? "0.62rem" : "0.7rem", color: "#7a8fa6" }}>Years Exp.</div>
        </div>
      </div>
      {/* Badge — Projects */}
      <div style={{ position: "absolute", top: size === 220 ? 10 : 20, right: size === 220 ? -40 : -20, zIndex: 3, background: "rgba(8,10,18,0.92)", border: "1px solid rgba(0,224,200,0.3)", backdropFilter: "blur(10px)", borderRadius: 12, padding: size === 220 ? "8px 12px" : "10px 16px", display: "flex", alignItems: "center", gap: size === 220 ? "8px" : "10px", animation: "floatBadge 3s ease-in-out infinite 1.5s" }}>
        <span style={{ fontSize: size === 220 ? "1.1rem" : "1.4rem" }}>🚀</span>
        <div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: size === 220 ? "0.9rem" : "1rem", color: "#00E0C8", lineHeight: 1 }}>10+</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: size === 220 ? "0.62rem" : "0.7rem", color: "#7a8fa6" }}>Projects</div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [typed, setTyped] = useState("");
  const words = TYPING_WORDS;
  const [wIdx, setWIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wIdx];
    let timeout;
    if (!deleting && typed.length < word.length) {
      timeout = setTimeout(() => setTyped(word.slice(0, typed.length + 1)), 80);
    } else if (!deleting && typed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && typed.length > 0) {
      timeout = setTimeout(() => setTyped(typed.slice(0, -1)), 45);
    } else if (deleting && typed.length === 0) {
      setDeleting(false);
      setWIdx((wIdx + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [typed, deleting, wIdx, words]);

  return (
    <section id="hero" className="hero-section" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "0 2rem" }}>
      {/* Background grid */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, backgroundImage: "linear-gradient(rgba(0,224,200,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,224,200,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      {/* Glow orbs */}
      <div style={{ position: "absolute", top: "15%", left: "8%", width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,224,200,0.08) 0%, transparent 70%)", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(100,60,255,0.08) 0%, transparent 70%)", zIndex: 0 }} />

      <div style={{ maxWidth: 1100, width: "100%", zIndex: 1, paddingTop: 80, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "3rem", flexWrap: "wrap" }}>

        {/* LEFT — Text */}
        <div className="hero-left" style={{ flex: "1 1 480px" }}>
          {/* Badge */}
          <div style={{ opacity: 0, animation: "fadeUp 0.8s ease 0.2s forwards", display: "inline-block", background: "rgba(0,224,200,0.1)", border: "1px solid rgba(0,224,200,0.25)", borderRadius: 100, padding: "6px 18px", marginBottom: "1.5rem" }}>
            <span style={{ color: "#00E0C8", fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", letterSpacing: "0.08em", fontWeight: 600 }}>AVAILABLE FOR FREELANCE WORK</span>
          </div>

          <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2.8rem, 7vw, 5.2rem)", lineHeight: 1.05, color: "#fff", margin: "0 0 1rem", opacity: 0, animation: "fadeUp 0.8s ease 0.4s forwards" }}>
            Hi, I'm <span style={{ color: "#00E0C8" }}>Mustak</span>
          </h1>

          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(1.4rem, 4vw, 2.2rem)", color: "#aab8c8", margin: "0 0 1.5rem", minHeight: "2.6rem", opacity: 0, animation: "fadeUp 0.8s ease 0.6s forwards" }}>
            {typed}<span style={{ color: "#00E0C8", animation: "blink 1s step-end infinite" }}>|</span>
          </h2>

          {/* Mobile-only image */}
          <div className="hero-image-mobile" style={{ display: "none", justifyContent: "center", marginBottom: "2.5rem", marginTop: "0.5rem" }}>
            <div style={{ margin: "0 40px" }}>
              <ProfileImage size={220} />
            </div>
          </div>

          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", color: "#7a8fa6", maxWidth: 520, lineHeight: 1.75, margin: "0 0 2.5rem", opacity: 0, animation: "fadeUp 0.8s ease 0.8s forwards" }}>
            {data.tagline} Based in Panipat, India — building for clients worldwide.
          </p>

          <div className="hero-buttons" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", opacity: 0, animation: "fadeUp 0.8s ease 1s forwards" }}>
            <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} style={{ background: "#00E0C8", color: "#080a12", border: "none", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", padding: "14px 32px", borderRadius: 8, cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s", boxShadow: "0 0 24px rgba(0,224,200,0.3)" }}
              onMouseEnter={(e) => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 0 36px rgba(0,224,200,0.5)"; }}
              onMouseLeave={(e) => { e.target.style.transform = ""; e.target.style.boxShadow = "0 0 24px rgba(0,224,200,0.3)"; }}
            >View Projects</button>

            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.95rem", padding: "14px 32px", borderRadius: 8, cursor: "pointer", transition: "border-color 0.2s, color 0.2s" }}
              onMouseEnter={(e) => { e.target.style.borderColor = "#00E0C8"; e.target.style.color = "#00E0C8"; }}
              onMouseLeave={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.2)"; e.target.style.color = "#fff"; }}
            >Get In Touch</button>

            <a href="/Mustak_Panwar_CV.docx" download="Mustak_Panwar_CV.docx" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "transparent", color: "#00E0C8", border: "1px solid rgba(0,224,200,0.4)", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.95rem", padding: "14px 32px", borderRadius: 8, cursor: "pointer", transition: "background 0.2s, border-color 0.2s", textDecoration: "none" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,224,200,0.08)"; e.currentTarget.style.borderColor = "#00E0C8"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(0,224,200,0.4)"; }}
            >⬇ Download CV</a>
          </div>
        </div>

        {/* RIGHT — Desktop image */}
        <div className="hero-right" style={{ flex: "0 0 auto", display: "flex", justifyContent: "center", alignItems: "center", opacity: 0, animation: "fadeUp 0.8s ease 0.5s forwards" }}>
          <ProfileImage size={320} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, cursor: "pointer" }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
        <span style={{ color: "#00E0C8", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.2em", opacity: 0.7, animation: "fadeUpDown 2s ease-in-out infinite" }}>SCROLL DOWN</span>
        <div style={{ width: 26, height: 40, border: "2px solid rgba(0,224,200,0.5)", borderRadius: 13, display: "flex", justifyContent: "center", paddingTop: 6, animation: "fadeUpDown 2s ease-in-out infinite" }}>
          <div style={{ width: 3, height: 8, background: "#00E0C8", borderRadius: 2, animation: "scrollDot 2s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}
