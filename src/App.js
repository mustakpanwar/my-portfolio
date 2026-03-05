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
    {
      role: "Web Development Intern",
      company: "Waste Management Haryana",
      location: "Haryana, India",
      period: "Jan 2024 · 45 Days",
      responsibilities: [
        "Developed a Waste Complaint System to allow citizens to register and track waste-related complaints online.",
        "Built a full-stack web application with user-facing complaint forms and an admin management panel.",
        "Implemented complaint status tracking, category filtering, and notification workflows.",
      ],
      achievements: [
        "Delivered a fully functional complaint management system within the 45-day internship duration.",
        "Gained hands-on experience in end-to-end web application development in a government project context.",
      ],
    },
  ],
  certifications: [
    { title: "Frontend Development", issuer: "Online Certification", skills: "React JS, JavaScript, HTML, CSS, Firebase", icon: "🖥️", year: "2024" },
    { title: "Python for Beginners", issuer: "Online Certification", skills: "Python, Data Types, Functions, OOP", icon: "🐍", year: "2024" },
    { title: "Python Advanced", issuer: "Online Certification", skills: "Python, Libraries, File Handling, Modules", icon: "🐍", year: "2024" },
    { title: "GitHub Foundations", issuer: "GitHub", skills: "Git, Version Control, Repositories, Collaboration", icon: "🐙", year: "2024" },
  ],
  projects: [
    {
      title: "Quba Dates E-Commerce Store",
      desc: "A fully customized WooCommerce store for Quba Dates, featuring product catalog, custom theme design, date variety listings, payment integration, and SEO optimization.",
      tags: ["WordPress", "WooCommerce", "Elementor", "SEO"],
      type: "WordPress",
      emoji: "🌴",
      color: "#00E0C8",
      live: "#", github: "#",
    },
    {
      title: "Electronic Accessories Shopify Store",
      desc: "Built a complete Shopify storefront for an electronics accessories brand including theme upload, product pages, custom section editing, and payment gateway integration.",
      tags: ["Shopify", "Liquid", "CSS", "Payment Gateway"],
      type: "Shopify",
      emoji: "🎧",
      color: "#6433ff",
      live: "#", github: "#",
    },
    {
      title: "Waste Complaint Management System",
      desc: "Full-stack web app for Waste Management Haryana allowing citizens to register and track waste complaints, with an admin dashboard for management.",
      tags: ["Python", "Flask", "MySQL", "HTML/CSS"],
      type: "Full Stack",
      emoji: "♻️",
      color: "#00b894",
      live: "#", github: "#",
    },
    {
      title: "Real Estate WordPress Website",
      desc: "Professional real estate website with custom property listing plugin, advanced search filters, Google Maps integration, and lead generation forms.",
      tags: ["WordPress", "Custom Plugin", "Google Maps", "WPBakery"],
      type: "WordPress",
      emoji: "🏠",
      color: "#00E0C8",
      live: "#", github: "#",
    },
    {
      title: "Hajj & Umrah Travel Website",
      desc: "A professional travel service website for Hajj and Umrah packages, featuring package listings, booking inquiry forms, image galleries, and mobile-first responsive design.",
      tags: ["WordPress", "Elementor", "Responsive", "UI/UX"],
      type: "WordPress",
      emoji: "🕌",
      color: "#f39c12",
      live: "#", github: "#",
    },
    {
      title: "Personal Portfolio Website",
      desc: "Dark modern developer portfolio built with React, featuring smooth animations, typing effects, scroll-triggered fade-ins, and a contact form.",
      tags: ["React", "JavaScript", "CSS", "Animations"],
      type: "React",
      emoji: "💻",
      color: "#f39c12",
      live: "#", github: "#",
    },
    {
      title: "Business Service WordPress Site",
      desc: "Corporate website with custom WordPress theme, blog system, service pages, contact forms, Google Analytics integration, and on-page SEO setup.",
      tags: ["WordPress", "Elementor", "SEO", "Analytics"],
      type: "WordPress",
      emoji: "🏢",
      color: "#00E0C8",
      live: "#", github: "#",
    },
    {
      title: "Medical Shop WooCommerce Store",
      desc: "Multi-vendor WooCommerce medical store with product catalog for medicines and health products, secure checkout, prescription upload feature, and inventory management.",
      tags: ["WordPress", "WooCommerce", "Custom Theme", "PHP"],
      type: "WordPress",
      emoji: "💊",
      color: "#6433ff",
      live: "#", github: "#",
    },
  ],
  education: [
    { degree: "Master of Computer Applications (MCA)", institution: "Panipat Institute of Engineering & Technology", period: "2022 – 2024" },
    { degree: "Bachelor of Computer Applications (BCA)", institution: "Asia Pacific Institute of Information & Technology", period: "2019 – 2022" },
  ],
};

const NAV_LINKS = ["About", "Skills", "Experience", "Certifications", "Projects", "Contact"];

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
      borderBottom: "1px solid #00E0C8",
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

      {/* Two-column layout */}
      <div style={{ maxWidth: 1100, width: "100%", zIndex: 1, paddingTop: 80, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "3rem", flexWrap: "wrap" }}>

        {/* LEFT — Text content */}
        <div className="hero-left" style={{ flex: "1 1 480px" }}>
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

          {/* Mobile-only image — shown between typing text and paragraph */}
          <div className="hero-image-mobile" style={{
            display: "none", justifyContent: "center", marginBottom: "2.5rem", marginTop: "0.5rem",
          }}>
            <div style={{ position: "relative", width: 220, height: 220, margin: "0 40px" }}>
              {/* Spinning ring */}
              <div style={{ position: "absolute", inset: -6, borderRadius: "50%", background: "conic-gradient(from 0deg, #00E0C8, transparent, #6433ff, transparent, #00E0C8)", animation: "spinRing 6s linear infinite", zIndex: 0 }} />
              <div style={{ position: "absolute", inset: -2, borderRadius: "50%", background: "#080a12", zIndex: 1 }} />
              <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden", zIndex: 2, border: "3px solid rgba(0,224,200,0.3)" }}>
                <img
                  src="https://ui-avatars.com/api/?name=Mustak+Panwar&size=320&background=1B3A6B&color=00E0C8&font-size=0.35&bold=true"
                  alt="Mustak Panwar"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              {/* Floating badge — experience */}
              <div style={{
                position: "absolute", bottom: 10, left: -40, zIndex: 3,
                background: "rgba(8,10,18,0.92)", border: "1px solid rgba(0,224,200,0.3)",
                backdropFilter: "blur(10px)", borderRadius: 12,
                padding: "8px 12px", display: "flex", alignItems: "center", gap: "8px",
                animation: "floatBadge 3s ease-in-out infinite",
              }}>
                <span style={{ fontSize: "1.1rem" }}>💼</span>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "0.9rem", color: "#00E0C8", lineHeight: 1 }}>1+</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", color: "#7a8fa6" }}>Years Exp.</div>
                </div>
              </div>
              {/* Floating badge — projects */}
              <div style={{
                position: "absolute", top: 10, right: -40, zIndex: 3,
                background: "rgba(8,10,18,0.92)", border: "1px solid rgba(0,224,200,0.3)",
                backdropFilter: "blur(10px)", borderRadius: 12,
                padding: "8px 12px", display: "flex", alignItems: "center", gap: "8px",
                animation: "floatBadge 3s ease-in-out infinite 1.5s",
              }}>
                <span style={{ fontSize: "1.1rem" }}>🚀</span>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "0.9rem", color: "#00E0C8", lineHeight: 1 }}>10+</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", color: "#7a8fa6" }}>Projects</div>
                </div>
              </div>
            </div>
          </div>

          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", color: "#7a8fa6",
            maxWidth: 520, lineHeight: 1.75, margin: "0 0 2.5rem",
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

        {/* RIGHT — Profile image */}
        <div className="hero-right" style={{
          flex: "0 0 auto", display: "flex", justifyContent: "center", alignItems: "center",
          opacity: 0, animation: "fadeUp 0.8s ease 0.5s forwards",
        }}>
          {/* Outer rotating ring */}
          <div className="hero-image" style={{ position: "relative", width: 320, height: 320 }}>
            {/* Decorative spinning border */}
            <div style={{
              position: "absolute", inset: -6, borderRadius: "50%",
              background: "conic-gradient(from 0deg, #00E0C8, transparent, #6433ff, transparent, #00E0C8)",
              animation: "spinRing 6s linear infinite", zIndex: 0,
            }} />
            {/* Inner dark ring gap */}
            <div style={{
              position: "absolute", inset: -2, borderRadius: "50%",
              background: "#080a12", zIndex: 1,
            }} />
            {/* Image container */}
            <div style={{
              position: "relative", width: "100%", height: "100%",
              borderRadius: "50%", overflow: "hidden", zIndex: 2,
              border: "3px solid rgba(0,224,200,0.3)",
            }}>
              {/* Dummy placeholder — replace src with your actual image path */}
              <img
                src="https://ui-avatars.com/api/?name=Mustak+Panwar&size=320&background=1B3A6B&color=00E0C8&font-size=0.35&bold=true"
                alt="Mustak Panwar"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Floating badge — experience */}
            <div style={{
              position: "absolute", bottom: 10, left: -20, zIndex: 3,
              background: "rgba(8,10,18,0.92)", border: "1px solid rgba(0,224,200,0.3)",
              backdropFilter: "blur(10px)", borderRadius: 12,
              padding: "10px 16px", display: "flex", alignItems: "center", gap: "10px",
              animation: "floatBadge 3s ease-in-out infinite",
            }}>
              <span style={{ fontSize: "1.4rem" }}>💼</span>
              <div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#00E0C8", lineHeight: 1 }}>1+</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "#7a8fa6", letterSpacing: "0.05em" }}>Years Exp.</div>
              </div>
            </div>

            {/* Floating badge — projects */}
            <div style={{
              position: "absolute", top: 20, right: -20, zIndex: 3,
              background: "rgba(8,10,18,0.92)", border: "1px solid rgba(0,224,200,0.3)",
              backdropFilter: "blur(10px)", borderRadius: 12,
              padding: "10px 16px", display: "flex", alignItems: "center", gap: "10px",
              animation: "floatBadge 3s ease-in-out infinite 1.5s",
            }}>
              <span style={{ fontSize: "1.4rem" }}>🚀</span>
              <div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#00E0C8", lineHeight: 1 }}>10+</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "#7a8fa6", letterSpacing: "0.05em" }}>Projects</div>
              </div>
            </div>
          </div>
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
  const isMobile = useIsMobile();
  const [filter, setFilter] = useState("All");
  const categories = ["All", "WordPress", "Shopify", "React", "Full Stack"];
  const filtered = filter === "All" ? data.projects : data.projects.filter(p => p.type === filter);

  return (
    <section id="projects" className="section-pad" style={{ padding: "100px 2rem", background: "rgba(255,255,255,0.015)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <p style={{ color: "#00E0C8", fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", letterSpacing: "0.14em", fontWeight: 600, marginBottom: "0.75rem", textAlign: "center" }}>MY WORK</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#fff", textAlign: "center", marginBottom: "2rem" }}>
            Featured <span style={{ color: "#00E0C8" }}>Projects</span>
          </h2>

          {/* Filter tabs */}
          <div style={{ display: "flex", gap: "0.6rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} style={{
                background: filter === cat ? "#00E0C8" : "rgba(255,255,255,0.04)",
                color: filter === cat ? "#080a12" : "#7a8fa6",
                border: filter === cat ? "1px solid #00E0C8" : "1px solid rgba(255,255,255,0.1)",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.82rem",
                padding: "8px 20px", borderRadius: 100, cursor: "pointer",
                transition: "all 0.2s", letterSpacing: "0.04em",
              }}
                onMouseEnter={e => { if (filter !== cat) { e.target.style.borderColor = "#00E0C8"; e.target.style.color = "#00E0C8"; } }}
                onMouseLeave={e => { if (filter !== cat) { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.color = "#7a8fa6"; } }}
              >{cat}</button>
            ))}
          </div>
        </FadeIn>

        {/* Project cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {filtered.map((proj, i) => (
            <FadeIn key={proj.title} delay={i * 0.07}>
              <div style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column",
                transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s", height: "100%",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = "rgba(0,224,200,0.3)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,224,200,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.boxShadow = ""; }}
              >
                {/* Card banner */}
                <div style={{
                  height: 140, background: `linear-gradient(135deg, ${proj.color}15 0%, rgba(100,60,255,0.08) 100%)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  borderBottom: `1px solid ${proj.color}22`, position: "relative", overflow: "hidden",
                }}>
                  {/* Grid pattern */}
                  <div style={{
                    position: "absolute", inset: 0,
                    backgroundImage: `linear-gradient(${proj.color}10 1px, transparent 1px), linear-gradient(90deg, ${proj.color}10 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }} />
                  <span style={{ fontSize: "3.5rem", zIndex: 1, filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.4))" }}>{proj.emoji}</span>
                  {/* Type badge */}
                  <span style={{
                    position: "absolute", top: 12, right: 12,
                    background: `${proj.color}22`, border: `1px solid ${proj.color}44`,
                    color: proj.color, fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.72rem", fontWeight: 700, borderRadius: 100,
                    padding: "3px 10px", letterSpacing: "0.06em",
                  }}>{proj.type}</span>
                </div>

                {/* Card body */}
                <div style={{ padding: "1.4rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.05rem", color: "#fff", marginBottom: "0.6rem", lineHeight: 1.3 }}>{proj.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "#7a8fa6", lineHeight: 1.7, marginBottom: "1rem", flex: 1 }}>{proj.desc}</p>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.2rem" }}>
                    {proj.tags.map(tag => (
                      <span key={tag} style={{
                        fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#aab8c8",
                        background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: 5, padding: "3px 10px",
                      }}>{tag}</span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <a href={proj.live} style={{
                      flex: 1, textAlign: "center", padding: "9px 0",
                      background: "#00E0C8", color: "#080a12", borderRadius: 8,
                      fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.82rem",
                      textDecoration: "none", transition: "opacity 0.2s",
                    }}
                      onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                      onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                    >Live Demo</a>
                    <a href={proj.github} style={{
                      flex: 1, textAlign: "center", padding: "9px 0",
                      background: "transparent", color: "#aab8c8",
                      border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8,
                      fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.82rem",
                      textDecoration: "none", transition: "border-color 0.2s, color 0.2s",
                    }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "#00E0C8"; e.currentTarget.style.color = "#00E0C8"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "#aab8c8"; }}
                    >GitHub</a>
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

function Certifications() {
  const isMobile = useIsMobile();
  return (
    <section id="certifications" className="section-pad" style={{ padding: "100px 2rem", background: "rgba(255,255,255,0.015)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <p style={{ color: "#00E0C8", fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", letterSpacing: "0.14em", fontWeight: 600, marginBottom: "0.75rem", textAlign: "center" }}>CREDENTIALS</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#fff", textAlign: "center", marginBottom: "3.5rem" }}>
            Certifications & <span style={{ color: "#00E0C8" }}>Training</span>
          </h2>
        </FadeIn>

        {/* Internship highlight */}
        <FadeIn delay={0.05}>
          <div style={{
            background: "linear-gradient(135deg, rgba(0,224,200,0.07) 0%, rgba(100,60,255,0.05) 100%)",
            border: "1px solid rgba(0,224,200,0.25)", borderRadius: 18,
            padding: isMobile ? "1.5rem" : "2rem 2.5rem",
            marginBottom: "2rem", display: "flex", alignItems: "center",
            gap: "1.5rem", flexWrap: "wrap",
          }}>
            <div style={{
              width: 60, height: 60, borderRadius: 16, background: "rgba(0,224,200,0.12)",
              border: "1px solid rgba(0,224,200,0.3)", display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: "1.8rem", flexShrink: 0,
            }}>🏢</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.4rem" }}>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.15rem", color: "#fff" }}>
                  Web Development Internship
                </h3>
                <span style={{
                  background: "rgba(0,224,200,0.12)", border: "1px solid rgba(0,224,200,0.3)",
                  color: "#00E0C8", fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem",
                  fontWeight: 700, borderRadius: 100, padding: "3px 12px", letterSpacing: "0.06em",
                }}>45 DAYS</span>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "#00E0C8", fontWeight: 600, marginBottom: "0.3rem" }}>
                Waste Management Haryana
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "#556070" }}>
                January 2024 · Developed a Waste Complaint System for citizen complaint tracking
              </p>
            </div>
            <div style={{ textAlign: isMobile ? "left" : "right" }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#00E0C8" }}>2024</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#556070", letterSpacing: "0.08em" }}>INTERNSHIP</div>
            </div>
          </div>
        </FadeIn>

        {/* Certifications grid */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: "1.25rem" }}>
          {data.certifications.map((cert, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,224,200,0.1)",
                borderRadius: 14, padding: "1.5rem", display: "flex", gap: "1.25rem",
                alignItems: "flex-start", transition: "border-color 0.3s, transform 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,224,200,0.35)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,224,200,0.1)"; e.currentTarget.style.transform = ""; }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12, background: "rgba(0,224,200,0.08)",
                  border: "1px solid rgba(0,224,200,0.2)", display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "1.4rem", flexShrink: 0,
                }}>{cert.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.3rem" }}>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#fff" }}>{cert.title}</h3>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "#556070", marginLeft: 8 }}>{cert.year}</span>
                  </div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "#00E0C8", marginBottom: "0.5rem", fontWeight: 600 }}>{cert.issuer}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {cert.skills.split(", ").map(s => (
                      <span key={s} style={{
                        fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#7a8fa6",
                        background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)",
                        borderRadius: 5, padding: "2px 10px",
                      }}>{s}</span>
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
        @keyframes spinRing { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes floatBadge { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
          .hero-buttons { flex-direction: column !important; }
          .hero-buttons button, .hero-buttons a { width: 100% !important; justify-content: center !important; text-align: center !important; }
          .hero-section { padding: 0 1.25rem !important; }
          .hero-image { width: 220px !important; height: 220px !important; }
          .hero-image-mobile { display: flex !important; }
          .hero-right { display: none !important; }
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
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}