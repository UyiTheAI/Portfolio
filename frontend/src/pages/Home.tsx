import { useState, useRef } from "react";
import { Github, Instagram, Linkedin, Mail, ArrowUpRight, ExternalLink, Download, FileText } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Documents", href: "#documents" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { name: "GitHub", href: "https://github.com/UyiTheAI", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/omoruyi-oredia-758860179", icon: Linkedin },
  { name: "Instagram", href: "https://www.instagram.com/omariii.0/", icon: Instagram },
  { name: "Email", href: "mailto:omoruyioredia@gmail.com", icon: Mail },
];

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function FadeIn({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground">{children}</span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Could not reach the server. Please email me directly at omoruyioredia@gmail.com");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bg-background min-h-screen text-foreground">

      {/* ── NAVBAR ── */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="text-sm font-bold tracking-[0.15em] uppercase text-foreground hover:text-primary transition-colors"
          >
            Omoruyi Oredia
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a
              href={`${import.meta.env.BASE_URL}Omoruyi_Oredia_Resume.docx`}
              download="Omoruyi_Oredia_Resume.docx"
              className="hidden sm:inline-flex items-center gap-2 border border-primary/50 text-primary text-xs font-bold tracking-[0.12em] uppercase px-4 py-2 hover:bg-primary hover:text-background transition-colors"
            >
              <Download className="w-3 h-3" />
              Resume
            </a>
            {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end pb-20 pt-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-end">

            {/* Left: Text */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-6"
              >
                Available for opportunities
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-6 text-foreground"
              >
                OMORUYI<br />
                <span className="text-primary italic">OREDIA</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed"
              >
                An aspiring Software Developer who believes great software is born from{" "}
                <span className="text-foreground font-medium">disciplined curiosity</span> and relentless attention to detail.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <button
                  onClick={() => scrollTo("#projects")}
                  className="inline-flex items-center gap-2 bg-primary text-background text-sm font-bold tracking-[0.1em] uppercase px-6 py-3 hover:bg-primary/90 transition-colors"
                >
                  View Projects
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="inline-flex items-center gap-2 border border-border text-sm font-semibold tracking-[0.1em] uppercase px-6 py-3 hover:border-primary hover:text-primary transition-colors"
                >
                  Get in Touch
                </button>
              </motion.div>
            </div>

            {/* Right: Avatar / portrait placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-primary/20 pointer-events-none" />
                <div className="absolute -top-2 -right-2 w-full h-full border border-primary/10 pointer-events-none" />
                {/* Avatar */}
                <div className="w-72 h-80 lg:w-80 lg:h-96 border border-border relative overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}profile.jpg`}
                    alt="Omoruyi Oredia"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">Toronto, ON · Canada</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 pt-8 border-t border-border grid grid-cols-3 gap-8"
          >
            {[
              { value: "2+", label: "Years QA\nExperience" },
              { value: "5", label: "Projects\nCompleted" },
              { value: "1", label: "Capstone\nDelivered" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-black text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed whitespace-pre-line tracking-wide uppercase font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <SectionLabel>About Me</SectionLabel>
          </FadeIn>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-foreground mb-8">
                A SOFTWARE DEVELOPER<br />
                <span className="italic text-primary">IN THE MAKING.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  I'm a <span className="text-foreground font-medium">Computer Programming and Analysis</span> student at George Brown Polytechnic in Toronto, with hands-on experience in quality assurance and software testing.
                </p>
                <p>
                  My background as a QA Tester at Keywords Studios gave me a deep appreciation for how great software should behave — which now fuels my drive to <span className="text-foreground font-medium">build it</span>. I'm passionate about clean code, problem-solving, and creating digital experiences that just work.
                </p>
                <p className="border-l-2 border-primary pl-4 italic text-foreground/70">
                  "I believe great software is born from disciplined curiosity and relentless attention to detail. I bring fresh eyes and a hunger to prove myself — one commit at a time."
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── DOCUMENTS ── */}
      <section id="documents" className="py-24 border-t border-border bg-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <SectionLabel>Documents</SectionLabel>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Resume",
                desc: "My full work history, education, technical skills, and project experience in a concise one-page format.",
                file: `${import.meta.env.BASE_URL}Omoruyi_Oredia_Resume.docx`,
                filename: "Omoruyi_Oredia_Resume.docx",
                label: "Download Resume",
              },
              {
                title: "Cover Letter",
                desc: "A tailored cover letter for software and QA roles, highlighting my passion for games, development experience, and career goals.",
                file: `${import.meta.env.BASE_URL}Omoruyi_Oredia_Cover_Letter.docx`,
                filename: "Omoruyi_Oredia_Cover_Letter.docx",
                label: "Download Cover Letter",
              },
            ].map((doc, i) => (
              <FadeIn key={doc.title} delay={i * 0.1}>
                <div className="group border border-border p-8 flex flex-col gap-6 hover:border-primary/50 hover:bg-card transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <FileText className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" />
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">.docx</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{doc.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{doc.desc}</p>
                  </div>
                  <a
                    href={doc.file}
                    download={doc.filename}
                    className="inline-flex items-center gap-2 bg-primary text-background text-xs font-bold tracking-[0.15em] uppercase px-5 py-3 hover:bg-primary/90 transition-colors self-start"
                  >
                    <Download className="w-3.5 h-3.5" />
                    {doc.label}
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <SectionLabel>Technical Skills</SectionLabel>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Languages",
                items: ["JAVA", "C++", "JavaScript", "HTML / CSS"],
              },
              {
                title: "QA & Testing",
                items: ["Software Testing", "Manual Testing", "Regression Testing", "Bug Tracking", "Cross-Platform Testing", "Quality Assurance", "Debugging"],
              },
              {
                title: "Tools & Practices",
                items: ["Version Control", "Git", "GitHub", "OOP Principles", "Data Structures"],
              },
            ].map((group, i) => (
              <FadeIn key={group.title} delay={i * 0.1}>
                <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-6">{group.title}</h3>
                <p className="text-muted-foreground text-sm leading-8 tracking-wide">
                  {group.items.join("  ·  ")}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <SectionLabel>Recent Projects</SectionLabel>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Shift Up",
                sub: "Shift Management System",
                desc: "An affordable, easy-to-use shift-management system built for small restaurants (Meta Inc. industry partner). Managers create, edit and publish shifts; employees view schedules, request swaps and receive notifications.",
                tags: ["Java", "C++", "OOP", "Cloud Services"],
                link: "https://github.com/UyiTheAI/Capstone-Project",
                badge: "Capstone · Meta Inc.",
              },
              {
                num: "02",
                title: "Weather App",
                sub: "React Full-Stack Lab Project",
                desc: "A React-based weather application that lets users search for any city and view real-time weather data including temperature, conditions, humidity, and wind speed. Integrated with a third-party weather API and tested via Postman.",
                tags: ["React", "JavaScript", "REST API", "Postman"],
                link: "https://github.com/UyiTheAI/COMP3123_labtest2",
                badge: "COMP3123 · Full Stack Dev",
              },
              {
                num: "03",
                title: "Web Application",
                sub: "ASP.NET Core MVC Project",
                desc: "A full-featured web application built with ASP.NET Core MVC. Covers data-driven web development using C#, Entity Framework, LINQ, and database integration with a structured MVC architecture.",
                tags: ["C#", "ASP.NET Core", "MVC", "Entity Framework"],
                link: "https://github.com/UyiTheAI/COMP2139-W2025",
                badge: "COMP2139 · Web Dev",
              },
              {
                num: "04",
                title: "Database Term Project",
                sub: "Advanced Database Services",
                desc: "A term project implementing relational database design principles, SQL queries, stored procedures, triggers, and data management strategies using industry-standard database tools.",
                tags: ["SQL", "Database Design", "Stored Procedures", "ERD"],
                link: "https://github.com/UyiTheAI/COMP-2152-TermProject",
                badge: "COMP2152 · Database",
              },
              {
                num: "05",
                title: "Problem Solving Suite",
                sub: "Programming Contests & Algorithms",
                desc: "A collection of solutions covering competitive programming techniques, algorithmic problem solving, and data structure applications with an emphasis on efficiency and optimal time complexity.",
                tags: ["Algorithms", "Data Structures", "Java", "Problem Solving"],
                link: "https://github.com/UyiTheAI/COMP-2080",
                badge: "COMP2080 · Algorithms",
              },
            ].map((proj, i) => (
              <FadeIn key={proj.num} delay={i * 0.1}>
                <div className={cn(
                  "group border border-border p-8 flex flex-col gap-6 h-full transition-all duration-300",
                  "hover:border-primary/50 hover:bg-card"
                )}>
                  <div className="flex items-start justify-between">
                    <span className="text-5xl font-black text-border group-hover:text-primary/20 transition-colors leading-none">
                      {proj.num}
                    </span>
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">{proj.badge}</span>
                    <h3 className="text-xl font-bold text-foreground mt-1">{proj.title}</h3>
                    <p className="text-sm text-muted-foreground">{proj.sub}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="text-xs border border-border px-3 py-1 text-muted-foreground group-hover:border-primary/30 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-24 border-t border-border bg-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <SectionLabel>Experience</SectionLabel>
          </FadeIn>
          <div className="space-y-0">
            {[
              {
                period: "Jan 2019 — Nov 2021",
                role: "QA Tester",
                company: "Keywords Studios",
                location: "Montreal, QC",
                points: [
                  "Executed manual functional, regression, and cross-platform testing for PC, console, and mobile games.",
                  "Identified, documented, and tracked software defects with detailed reproduction steps, severity ratings, and impact analysis.",
                  "Collaborated with developers and producers to verify fixes and improve product quality before release.",
                  "Provided structured subjective and third-party feedback to influence gameplay mechanics and user experience.",
                ],
                tags: ["Manual Testing", "Regression", "Bug Tracking", "Cross-Platform"],
              },
            ].map((exp, i) => (
              <FadeIn key={exp.company} delay={i * 0.1}>
                <div className="grid lg:grid-cols-4 gap-8 py-12 border-b border-border last:border-0 group">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.1em] uppercase text-muted-foreground">{exp.period}</p>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{exp.company} · {exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {exp.points.map((point, j) => (
                        <li key={j} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="text-primary mt-1 shrink-0">—</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="text-xs border border-border px-3 py-1 text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Education inside experience-ish section */}
          <div className="mt-16 pt-16 border-t border-border">
            <FadeIn>
              <SectionLabel>Education</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="grid lg:grid-cols-4 gap-8">
                <div>
                  <p className="text-xs font-semibold tracking-[0.1em] uppercase text-muted-foreground">Sept 2023 — Present</p>
                </div>
                <div className="lg:col-span-3">
                  <h3 className="text-xl font-bold text-foreground">Computer Programming and Analysis</h3>
                  <p className="text-sm text-muted-foreground mt-1">George Brown Polytechnic · Toronto, ON</p>
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-xl">
                    Pursuing an advanced diploma focused on software engineering, object-oriented programming, data structures, algorithms, and full-stack development methodologies.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <SectionLabel>Let's Work Together</SectionLabel>
          </FadeIn>
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-foreground mb-6">
                HAVE A PROJECT<br />
                <span className="italic text-primary">IN MIND?</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                I'm currently open to internship and entry-level opportunities. If you'd like to connect, collaborate, or just say hi — my inbox is always open.
              </p>
              <div className="space-y-4">
                {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="group-hover:underline underline-offset-4">{name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              {submitted ? (
                <div className="border border-primary/30 bg-primary/5 p-8 flex flex-col items-center justify-center text-center min-h-64">
                  <p className="text-2xl font-black text-foreground">Message Sent!</p>
                  <p className="text-muted-foreground mt-2 text-sm">Thank you for reaching out — I'll get back to you soon.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs font-bold tracking-[0.15em] uppercase text-primary hover:underline"
                  >Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-2">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-2">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Job opportunity, collaboration, etc."
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-400 border border-red-400/30 bg-red-400/5 px-4 py-3">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-primary text-background text-sm font-bold tracking-[0.15em] uppercase py-4 hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? "Sending..." : "Send Message"}
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase">
            © 2026 Omoruyi Oredia · Toronto, ON
          </p>
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={name}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            Designed with <span className="text-primary">♥</span> & code
          </p>
        </div>
      </footer>

    </div>
  );
}
