import { useState, useEffect, useRef } from "react";

const data = {
  name: "Mustak Panwar",
  title: "WordPress & Shopify Developer",
  tagline: "I build fast, secure & beautiful websites.",
  about: "I'm a Web Developer based in Panipat, India, specializing in WordPress and Shopify development. I craft SEO-friendly, responsive websites that perform across every device — combining clean code, smart architecture, and pixel-perfect design to help businesses grow online.",
  contact: {
    email: "mustakpanwar05@gmail.com",
    phone: "+91 7988227093",
    location: "Panipat, Haryana, India",
    linkedin: "#",
  },
  skills: [
    { category: "WordPress", items: ["Theme Customization", "Plugin Development", "Elementor", "WPBakery", "WooCommerce"] },
    { category: "Shopify", items: ["Store Setup", "Theme Uploads", "Frontend Dev", "Payment Integration", "Section Editing"] },
    { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Responsive Design"] },
    { category: "Backend & Tools", items: ["Python", "Flask", "SQL", "Git & GitHub", "MySQL", "VS Code"] },
    { category: "SEO & Performance", items: ["On-Page SEO", "Speed Optimization", "Google Analytics", "Search Console", "Tag Manager"] },
    { category: "Security", items: ["SSL Integration", "Wordfence", "iThemes", "Backups", "Hosting Management"] },
  ],
  experience: [
    {
      role: "Web App / WordPress Full-Stack Developer",
      company: "Trivo.in",
      location: "Nagpur, Maharashtra",
      period: "July 2024 – Present",
      responsibilities: [
        "Developed custom WordPress themes and Shopify storefronts aligned with client branding and UX/UI specifications.",
        "Set up complete Shopify stores including theme uploads, customization, and payment gateway integration.",
        "Performed Shopify frontend development including custom section editing and branding alignment.",
        "Collaborated with cross-functional teams to deliver responsive, secure, and scalable websites.",
        "Configured Google Analytics, Search Console, and Tag Manager for client websites.",
        "Managed SMTP workflow setup and email deliverability.",
      ],
      achievements: [
        "Achieved 20% improvement in SEO performance through caching, image compression, and code optimization.",
        "Reduced bounce rate by 20% through performance improvements and UX enhancements.",
        "Delivered multiple e-commerce projects with fully customized WooCommerce implementations.",
      ],
    },
  ],
  projects: [],
  education: [
    { degree: "Master of Computer Applications (MCA)", institution: "Panipat Institute of Engineering & Technology", period: "2022 – 2024" },
    { degree: "Bachelor of Computer Applications (BCA)", institution: "Asia Pacific Institute of Information & Technology", period: "2019 – 2022" },
  ],
};

const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Contact"];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return isMobile;
}

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(8,10,18,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(0,224,200,0.08)" : "none",
      transition: "all 0.4s ease",
      padding: "0 2rem",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#00E0C8", letterSpacing: 1 }}>
          MP<span style={{ color: "#fff" }}>.</span>
        </span>
        {/* Desktop */}
        <div style={{ display: "flex", gap: "2.2rem" }} className="nav-desktop">
          {NAV_LINKS.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: "none", border: "none", color: "#00E0C8", fontFamily: "'Syne', sans-serif",
              fontSize: "0.9rem", letterSpacing: "0.05em", cursor: "pointer", padding: "4px 0",
              transition: "color 0.2s", fontWeight: 800,
            }}
              onMouseEnter={e => e.target.style.color = "#fff"}
              onMouseLeave={e => e.target.style.color = "#00E0C8"}
            >{l}</button>
          ))}
        </div>
        {/* Hamburger */}
        <button onClick={() => setMenuOpen(o => !o)} style={{
          display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 5, padding: 4,
        }} className="nav-burger">
          {[0,1,2].map(i => <span key={i} style={{ display: "block", width: 24, height: 2, background: "#00E0C8", borderRadius: 2 }} />)}
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "rgba(8,10,18,0.98)", borderTop: "1px solid rgba(0,224,200,0.1)", padding: "1rem 2rem" }}>
          {NAV_LINKS.map(l => (
            <div key={l} onClick={() => scrollTo(l)} style={{
              color: "#00E0C8", fontFamily: "'Syne', sans-serif", fontSize: "1rem", fontWeight: 800,
              padding: "0.75rem 0", cursor: "pointer", borderBottom: "1px solid rgba(255,255,255,0.05)"
            }}>{l}</div>
          ))}
        </div>
      )}
    </nav>
  );
}

const TYPING_WORDS = ["WordPress Developer.", "Shopify Expert.", "Web Craftsman."];

function Hero() {
  const words = TYPING_WORDS;
  const [typed, setTyped] = useState("");
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
    <section id="hero" className="hero-section" style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden", padding: "0 2rem",
    }}>
      {/* Animated background grid */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(rgba(0,224,200,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,224,200,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      {/* Glow orbs */}
      <div style={{ position: "absolute", top: "15%", left: "8%", width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,224,200,0.08) 0%, transparent 70%)", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(100,60,255,0.08) 0%, transparent 70%)", zIndex: 0 }} />

      <div style={{ maxWidth: 800, width: "100%", zIndex: 1, paddingTop: 80 }}>
        <div style={{
          opacity: 0, animation: "fadeUp 0.8s ease 0.2s forwards",
          display: "inline-block", background: "rgba(0,224,200,0.1)", border: "1px solid rgba(0,224,200,0.25)",
          borderRadius: 100, padding: "6px 18px", marginBottom: "1.5rem",
        }}>
          <span style={{ color: "#00E0C8", fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", letterSpacing: "0.08em", fontWeight: 600 }}>
            AVAILABLE FOR FREELANCE WORK
          </span>
        </div>

        <h1 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2.8rem, 7vw, 5.2rem)",
          lineHeight: 1.05, color: "#fff", margin: "0 0 1rem",
          opacity: 0, animation: "fadeUp 0.8s ease 0.4s forwards",
        }}>
          Hi, I'm <span style={{ color: "#00E0C8" }}>Mustak</span>
        </h1>

        <h2 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(1.4rem, 4vw, 2.2rem)",
          color: "#aab8c8", margin: "0 0 1.5rem", minHeight: "2.6rem",
          opacity: 0, animation: "fadeUp 0.8s ease 0.6s forwards",
        }}>
          {typed}<span style={{ color: "#00E0C8", animation: "blink 1s step-end infinite" }}>|</span>
        </h2>

        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", color: "#7a8fa6",
          maxWidth: 560, lineHeight: 1.75, margin: "0 0 2.5rem",
          opacity: 0, animation: "fadeUp 0.8s ease 0.8s forwards",
        }}>
          {data.tagline} Based in Panipat, India — building for clients worldwide.
        </p>

        <div className="hero-buttons" style={{
          display: "flex", gap: "1rem", flexWrap: "wrap",
          opacity: 0, animation: "fadeUp 0.8s ease 1s forwards",
        }}>
          <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} style={{
            background: "#00E0C8", color: "#080a12", border: "none",
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem",
            padding: "14px 32px", borderRadius: 8, cursor: "pointer",
            transition: "transform 0.2s, box-shadow 0.2s",
            boxShadow: "0 0 24px rgba(0,224,200,0.3)",
          }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 0 36px rgba(0,224,200,0.5)"; }}
            onMouseLeave={e => { e.target.style.transform = ""; e.target.style.boxShadow = "0 0 24px rgba(0,224,200,0.3)"; }}
          >View Projects</button>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} style={{
            background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.2)",
            fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.95rem",
            padding: "14px 32px", borderRadius: 8, cursor: "pointer",
            transition: "border-color 0.2s, color 0.2s",
          }}
            onMouseEnter={e => { e.target.style.borderColor = "#00E0C8"; e.target.style.color = "#00E0C8"; }}
            onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.2)"; e.target.style.color = "#fff"; }}
          >Get In Touch</button>
          <a href="/Mustak_Panwar_CV.docx" download="Mustak_Panwar_CV.docx" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "transparent", color: "#00E0C8", border: "1px solid rgba(0,224,200,0.4)",
            fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.95rem",
            padding: "14px 32px", borderRadius: 8, cursor: "pointer",
            transition: "background 0.2s, border-color 0.2s", textDecoration: "none",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(0,224,200,0.08)"; e.currentTarget.style.borderColor = "#00E0C8"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(0,224,200,0.4)"; }}
          >
            ⬇ Download CV
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" style={{
        position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
        cursor: "pointer",
      }} onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
        <span style={{
          color: "#00E0C8", fontFamily: "'Syne', sans-serif", fontWeight: 700,
          fontSize: "0.7rem", letterSpacing: "0.2em", opacity: 0.7,
          animation: "fadeUpDown 2s ease-in-out infinite",
        }}>SCROLL DOWN</span>
        {/* Mouse icon */}
        <div style={{
          width: 26, height: 40, border: "2px solid rgba(0,224,200,0.5)",
          borderRadius: 13, display: "flex", justifyContent: "center", paddingTop: 6,
          animation: "fadeUpDown 2s ease-in-out infinite",
        }}>
          <div style={{
            width: 3, height: 8, background: "#00E0C8", borderRadius: 2,
            animation: "scrollDot 2s ease-in-out infinite",
          }} />
        </div>
      </div>
    </section>
  );
}

function About() {
  const isMobile = useIsMobile();
  return (
    <section id="about" className="section-pad" style={{ padding: "100px 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "2.5rem" : "4rem", alignItems: "center" }}>
          <div>
            <p style={{ color: "#00E0C8", fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", letterSpacing: "0.14em", fontWeight: 600, marginBottom: "1rem" }}>ABOUT ME</p>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#fff", margin: "0 0 1.5rem", lineHeight: 1.1 }}>
              Crafting the web,<br /><span style={{ color: "#00E0C8" }}>one pixel</span> at a time.
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "#7a8fa6", lineHeight: 1.85, marginBottom: "1.5rem" }}>
              {data.about}
            </p>
            <div style={{ display: "flex", gap: "2rem" }}>
              {[["1+", "Year Experience"], ["20%", "SEO Boost"], ["10+", "Projects Delivered"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "2rem", color: "#00E0C8" }}>{num}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "#556070", letterSpacing: "0.06em" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Visual card */}
          <div style={{ position: "relative" }}>
            <div style={{
              background: "linear-gradient(135deg, rgba(0,224,200,0.06) 0%, rgba(100,60,255,0.06) 100%)",
              border: "1px solid rgba(0,224,200,0.15)", borderRadius: 20, padding: "2.5rem",
            }}>
              {[
                ["📍", "Location", "Panipat, Haryana, India"],
                ["📧", "Email", "mustakpanwar05@gmail.com"],
                ["📞", "Phone", "+91 7988227093"],
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

function Skills() {
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
              <div style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,224,200,0.1)",
                borderRadius: 14, padding: "1.5rem", transition: "border-color 0.3s, transform 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,224,200,0.35)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,224,200,0.1)"; e.currentTarget.style.transform = ""; }}
              >
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#00E0C8", marginBottom: "1rem", letterSpacing: "0.04em" }}>{s.category}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {s.items.map(item => (
                    <span key={item} style={{
                      fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#aab8c8",
                      background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 6, padding: "4px 12px",
                    }}>{item}</span>
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

function Experience() {
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
            <div style={{
              background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,224,200,0.12)",
              borderRadius: 18, padding: isMobile ? "1.5rem" : "2.5rem", marginBottom: "1.5rem",
              borderLeft: "3px solid #00E0C8",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.75rem", marginBottom: "0.5rem" }}>
                <div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: isMobile ? "1.1rem" : "1.3rem", color: "#fff", margin: "0 0 0.35rem" }}>{exp.role}</h3>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#00E0C8", fontWeight: 600 }}>{exp.company}</span>
                  <span style={{ color: "#556070", marginLeft: 8, fontSize: "0.9rem" }}>· {exp.location}</span>
                </div>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "#00E0C8",
                  background: "rgba(0,224,200,0.08)", border: "1px solid rgba(0,224,200,0.2)",
                  borderRadius: 100, padding: "5px 14px", whiteSpace: "nowrap",
                }}>{exp.period}</span>
              </div>

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

function Projects() {
  return (
    <section id="projects" className="section-pad" style={{ padding: "100px 2rem", background: "rgba(255,255,255,0.015)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <p style={{ color: "#00E0C8", fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", letterSpacing: "0.14em", fontWeight: 600, marginBottom: "0.75rem", textAlign: "center" }}>MY WORK</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#fff", textAlign: "center", marginBottom: "3.5rem" }}>
            Featured <span style={{ color: "#00E0C8" }}>Projects</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div style={{
            border: "1px dashed rgba(0,224,200,0.2)", borderRadius: 18, padding: "4rem 2rem",
            textAlign: "center", background: "rgba(0,224,200,0.02)",
          }}>
            <div style={{ fontSize: "3rem", marginBottom: "1.25rem" }}>🚀</div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.4rem", color: "#fff", marginBottom: "0.75rem" }}>Projects Coming Soon</h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#556070", maxWidth: 420, margin: "0 auto 1.75rem" }}>
              I'm currently compiling my best work. Check back soon or get in touch to see examples directly.
            </p>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} style={{
              background: "transparent", color: "#00E0C8", border: "1px solid rgba(0,224,200,0.4)",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.9rem",
              padding: "12px 28px", borderRadius: 8, cursor: "pointer",
              transition: "background 0.2s",
            }}
              onMouseEnter={e => e.target.style.background = "rgba(0,224,200,0.08)"}
              onMouseLeave={e => e.target.style.background = "transparent"}
            >Contact Me Instead →</button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Contact() {
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
          <FadeIn delay={0.1}>
            <div>
              {[
                { icon: "📧", label: "Email", val: data.contact.email },
                { icon: "📞", label: "Phone", val: data.contact.phone },
                { icon: "📍", label: "Location", val: data.contact.location },
              ].map(({ icon, label, val }) => (
                <div key={label} style={{
                  display: "flex", gap: "1.25rem", alignItems: "center",
                  padding: "1.25rem", marginBottom: "1rem",
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,224,200,0.1)",
                  borderRadius: 12,
                }}>
                  <span style={{ fontSize: "1.4rem" }}>{icon}</span>
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#556070", letterSpacing: "0.1em", marginBottom: 3 }}>{label.toUpperCase()}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "#ccd6e0" }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,224,200,0.12)", borderRadius: 18, padding: "2rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                <input placeholder="Your Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "#00E0C8"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                />
                <input placeholder="Your Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "#00E0C8"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                />
              </div>
              <textarea placeholder="Tell me about your project..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                rows={5} style={{ ...inputStyle, resize: "vertical", marginBottom: "1rem" }}
                onFocus={e => e.target.style.borderColor = "#00E0C8"}
                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
              />
              <button onClick={handleSubmit} style={{
                width: "100%", background: sent ? "#00b894" : "#00E0C8", color: "#080a12",
                border: "none", borderRadius: 10, padding: "15px",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1rem",
                cursor: "pointer", transition: "all 0.3s",
                boxShadow: "0 0 24px rgba(0,224,200,0.25)",
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

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "2rem", textAlign: "center" }}>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#3a4a5a" }}>
        © 2025 Mustak Panwar · Built with React
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #080a12; color: #fff; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes scrollDot { 0%,100% { transform: translateY(0); opacity: 1; } 60% { transform: translateY(10px); opacity: 0; } 61% { transform: translateY(0); opacity: 0; } 80% { opacity: 1; } }
        @keyframes fadeUpDown { 0%,100% { transform: translateY(0); opacity: 0.7; } 50% { transform: translateY(-5px); opacity: 1; } }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
          .hero-buttons { flex-direction: column !important; }
          .hero-buttons button, .hero-buttons a { width: 100% !important; justify-content: center !important; text-align: center !important; }
          .hero-section { padding: 0 1.25rem !important; }
          .section-pad { padding: 70px 1.25rem !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .scroll-indicator { display: none !important; }
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #080a12; }
        ::-webkit-scrollbar-thumb { background: rgba(0,224,200,0.3); border-radius: 3px; }
      `}</style>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}