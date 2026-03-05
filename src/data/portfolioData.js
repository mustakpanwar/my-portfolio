const data = {
  name: "Mustak Panwar",
  title: "WordPress & Shopify Developer",
  tagline: "I build fast, secure & beautiful websites.",
  about:
    "I'm a Web Developer based in Panipat, India, specializing in WordPress and Shopify development. I craft SEO-friendly, responsive websites that perform across every device — combining clean code, smart architecture, and pixel-perfect design to help businesses grow online.",
    contact: {
      email: "mustakpanwar05@gmail.com",
      phone: "+91 7988227093",
      location: "Panipat, Haryana, India",
      linkedin: "https://linkedin.com/in/mustakpanwar",  // 👈 add your real URL
      github: "https://github.com/mustakpanwar",          // 👈 add your real URL
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
    { title: "Quba Dates E-Commerce Store", desc: "A fully customized WooCommerce store for Quba Dates, featuring product catalog, custom theme design, date variety listings, payment integration, and SEO optimization.", tags: ["WordPress", "WooCommerce", "Elementor", "SEO"], type: "WordPress", emoji: "🌴", color: "#00E0C8", live: "#", github: "#" },
    { title: "Electronic Accessories Shopify Store", desc: "Built a complete Shopify storefront for an electronics accessories brand including theme upload, product pages, custom section editing, and payment gateway integration.", tags: ["Shopify", "Liquid", "CSS", "Payment Gateway"], type: "Shopify", emoji: "🎧", color: "#6433ff", live: "#", github: "#" },
    { title: "Waste Complaint Management System", desc: "Full-stack web app for Waste Management Haryana allowing citizens to register and track waste complaints, with an admin dashboard for management.", tags: ["Python", "Flask", "MySQL", "HTML/CSS"], type: "Full Stack", emoji: "♻️", color: "#00b894", live: "#", github: "#" },
    { title: "Real Estate WordPress Website", desc: "Professional real estate website with custom property listing plugin, advanced search filters, Google Maps integration, and lead generation forms.", tags: ["WordPress", "Custom Plugin", "Google Maps", "WPBakery"], type: "WordPress", emoji: "🏠", color: "#00E0C8", live: "#", github: "#" },
    { title: "Hajj & Umrah Travel Website", desc: "A professional travel service website for Hajj and Umrah packages, featuring package listings, booking inquiry forms, image galleries, and mobile-first responsive design.", tags: ["WordPress", "Elementor", "Responsive", "UI/UX"], type: "WordPress", emoji: "🕌", color: "#f39c12", live: "#", github: "#" },
    { title: "Personal Portfolio Website", desc: "Dark modern developer portfolio built with React, featuring smooth animations, typing effects, scroll-triggered fade-ins, and a contact form.", tags: ["React", "JavaScript", "CSS", "Animations"], type: "React", emoji: "💻", color: "#f39c12", live: "#", github: "#" },
    { title: "Business Service WordPress Site", desc: "Corporate website with custom WordPress theme, blog system, service pages, contact forms, Google Analytics integration, and on-page SEO setup.", tags: ["WordPress", "Elementor", "SEO", "Analytics"], type: "WordPress", emoji: "🏢", color: "#00E0C8", live: "#", github: "#" },
    { title: "Medical Shop WooCommerce Store", desc: "Multi-vendor WooCommerce medical store with product catalog for medicines and health products, secure checkout, prescription upload feature, and inventory management.", tags: ["WordPress", "WooCommerce", "Custom Theme", "PHP"], type: "WordPress", emoji: "💊", color: "#6433ff", live: "#", github: "#" },
  ],
  education: [
    { degree: "Master of Computer Applications (MCA)", institution: "Panipat Institute of Engineering & Technology", period: "2022 – 2024" },
    { degree: "Bachelor of Computer Applications (BCA)", institution: "Asia Pacific Institute of Information & Technology", period: "2019 – 2022" },
  ],
  
};

export const NAV_LINKS = ["About", "Skills", "Experience", "Certifications", "Projects", "Contact"];

export default data;
