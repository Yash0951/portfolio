"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sparkles,
  Sun,
  Workflow,
  X,
} from "lucide-react";

type Theme = "dark" | "light";

type Project = {
  number: string;
  type: string;
  title: string;
  description: string;
  role: string;
  outcome: string;
  tags: string[];
  image: string;
  tone: "lime" | "blue";
  mark: string;
};

const projects: Project[] = [
  {
    number: "01",
    type: "AI PRODUCT / AUTOMATION",
    title: "Autonomous Customer Support",
    description:
      "A grounded triage workflow that turns unstructured support tickets into prioritized, context-aware resolution drafts.",
    role: "Product scoping · workflow design · technical integration",
    outcome:
      "Scoped an AI-driven system around webhooks, Claude, MCP context retrieval and CRM guardrails.",
    tags: ["PRD", "Claude API", "n8n", "MCP", "REST APIs"],
    image: "/images/support-system-art.webp",
    tone: "lime",
    mark: "AI",
  },
  {
    number: "02",
    type: "PRODUCT DISCOVERY / FULL STACK",
    title: "Crisis-Nexus",
    description:
      "An emergency-response coordination MVP shaped around high-stress user needs, workflow gaps and real-time location data.",
    role: "Discovery · MVP definition · feature prioritization",
    outcome:
      "Translated user personas into a focused product brief and prioritized requirements for a simulated 40% engagement lift.",
    tags: ["React.js", "Node.js", "MongoDB", "Geolocation APIs"],
    image: "/images/crisis-nexus-art.webp",
    tone: "blue",
    mark: "CN",
  },
];

const capabilities = [
  {
    icon: Layers3,
    title: "Product management",
    detail:
      "Turn customer signals into clear PRDs, product priorities, user stories and roadmaps that teams can act on.",
  },
  {
    icon: Workflow,
    title: "Program management",
    detail:
      "Make work visible through sprint backlogs, release milestones, stakeholder alignment and dependable follow-through.",
  },
  {
    icon: Code2,
    title: "Technology",
    detail:
      "Bridge product intent and technical feasibility across APIs, SDLC, system design, React, Node.js and AI workflows.",
  },
];

const experiences = [
  {
    date: "AUG 2026 — NOW",
    company: "Launch Ventures",
    role: "Product Management Intern · Hyderabad",
    detail:
      "Authored PRDs and scoped internal tools, deploying automated data workflows that reduced internal workflow latency by 40%. Owned sprint backlogs and release milestones with 100% on-time milestone delivery.",
  },
  {
    date: "DEC 2025 — JUL 2026",
    company: "AlgoUniversity · Y Combinator",
    role: "Founder’s Office Intern · Hyderabad",
    detail:
      "Used 40+ customer interactions and competitive research to shape product priorities, improve sprint velocity by 15% and increase organic inbound acquisition by 22%.",
  },
  {
    date: "OCT 2025 — Dec 2025",
    company: "Accelerator X",
    role: "Growth & Marketing Intern",
    detail:
      "Analyzed user drop-offs across the onboarding funnel; executed targeted A/B tests on landing pages that increased user registration conversions by 14% and boosted lead gen by 35%.",
  },
];

const toolkit = [
  "PRDs & user stories",
  "RICE / MoSCoW",
  "Customer discovery",
  "Jira",
  "Figma",
  "Python",
  "Pandas / NumPy",
  "React.js",
  "Node.js",
  "MongoDB",
  "REST APIs",
  "MCP",
  "SQL / MySQL",
  "Mixpanel",
  "Google Analytics",
  "A/B testing",
];

export default function Home() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("ym-theme");
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("ym-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeProject]);

  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <main>
      <div className="grain" aria-hidden="true" />

      <header className="nav wrap">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Yash Meena home">
          Mhunk<span>.</span>
        </a>
        <nav className={menuOpen ? "navlinks open" : "navlinks"} aria-label="Primary navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#approach" onClick={closeMenu}>Approach</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <div className="nav-actions">
          <button className="theme-toggle" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} aria-pressed={theme === "light"} onClick={toggleTheme}>
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="nav-cta" href="/Yash-Meena-Resume.pdf" target="_blank" rel="noreferrer">
            View resume <ArrowUpRight size={15} />
          </a>
          <button className="mobile-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero wrap" id="home">
        <div className="hero-topline">
          <span><i className="status-dot" /> OPEN TO MEANINGFUL CONVERSATIONS</span>
          <span>BASED IN INDIA · 2026</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>
              HELLO, I&apos;M YASH MEENA <span className="asterisk">✳</span>
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .08 }}>
              Turning ideas<br />into <em>things</em> that<br /><span className="outline-text">work.</span>
            </motion.h1>
            <motion.div className="hero-bottom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .45 }}>
              <p>
                I work across <strong>product discovery, program execution and technology</strong> — translating user friction into clear requirements, aligned teams and shipped solutions.
              </p>
              <a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDownRight /></a>
            </motion.div>
          </div>

          <motion.div className="portrait-stage" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .2 }}>
            <div className="portrait-orbit orbit-one" />
            <div className="portrait-orbit orbit-two" />
            <div className="portrait-frame">
              <Image className="portrait-image" src="/images/yash-portrait-temp.webp" alt="Temporary editorial portrait placeholder" width={716} height={716} priority />
              <div className="portrait-overlay" />
              <div className="photo-note"><Sparkles size={15} /> TEMPORARY PORTRAIT</div>
              <div className="portrait-caption">Curious by nature.<br />Structured by habit.</div>
            </div>
            <div className="floating-note note-top">THINK<br /><b>↗</b></div>
            <div className="floating-note note-bottom">BUILD / LEARN / REPEAT</div>
            <span className="vertical-label">PRODUCT · PROGRAMS · TECHNOLOGY</span>
          </motion.div>
        </div>
        <div className="hero-footer">
          <span>SCROLL TO EXPLORE <ArrowDownRight size={14} /></span>
          <span>01 — 07 / THE JOURNEY</span>
        </div>
      </section>

      <section className="intro-band">
        <div className="wrap intro-inner">
          <span className="section-kicker">A NOTE ON HOW I WORK</span>
          <p>Good work happens when <span>people, processes and technology</span> move in the same direction.</p>
          <span className="intro-symbol">✳</span>
        </div>
      </section>

      <section className="section wrap" id="about">
        <div className="section-head">
          <span className="section-kicker">01 / A LITTLE ABOUT ME</span>
          <span className="muted">THE PERSON BEHIND THE WORK</span>
        </div>
        <div className="about-grid">
          <h2>Curious by nature.<br /><em>Structured</em> by habit.</h2>
          <div className="about-copy">
            <p>I&apos;m a Product Management professional and Computer Science Engineering graduate who enjoys connecting user needs, technical feasibility and business goals.</p>
            <p>From discovery and feature scoping to sprint execution and workflow automation, I like making the next step clearer — especially when a product or process is being built from scratch.</p>
            <a className="text-link" href="#contact">Let&apos;s compare notes <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="about-portrait">
          <div className="about-portrait-visual">
            <Image
              src="/images/yash-portrait-about.webp"
              alt="Temporary editorial portrait of Yash Meena"
              fill
              sizes="(max-width: 800px) 100vw, 420px"
              className="about-portrait-image"
            />
            <span className="about-portrait-label">02 / THE OTHER SIDE OF THE WORK</span>
          </div>
          <div className="about-portrait-copy">
            <span className="section-kicker">A SECOND VIEW</span>
            <h3>Human context, technical clarity.</h3>
            <p>The work is part strategy, part systems thinking and part listening carefully enough to understand what people actually need.</p>
          </div>
        </div>
        <div className="stat-strip">
          <div><strong>40%</strong><span>less workflow latency</span></div>
          <div><strong>100%</strong><span>on-time milestones</span></div>
          <div><strong>22%</strong><span>more organic inbound</span></div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="wrap">
          <div className="section-head">
            <span className="section-kicker">02 / SELECTED WORK</span>
            <span className="muted">SYSTEMS, PRODUCTS & EXPERIMENTS</span>
          </div>
          <div className="work-heading">
            <h2>Work that <em>moves</em><br />things forward.</h2>
            <p>A pair of product stories that show how I move from a messy problem to a clear, buildable direction.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article className={`project-card ${project.tone}`} key={project.number}
                initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .2 }} transition={{ duration: .5, delay: index * .06 }}>
                <button className="project-art" onClick={() => setActiveProject(project)} aria-label={`Open case file: ${project.title}`}>
                  <Image src={project.image} alt="" fill sizes="(max-width: 800px) 100vw, 50vw" className="project-image" />
                  <span className="project-art-shade" />
                  <span className="project-number">{project.number} / CASE FILE</span>
                  <span className="project-mark">{project.mark}</span>
                  <span className="project-arrow"><ArrowUpRight /></span>
                </button>
                <div className="project-info">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-footer">
                    <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    <button className="case-link" onClick={() => setActiveProject(project)}>Open case file <ArrowRight size={15} /></button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <p className="work-footnote"><span className="footnote-dot" /> Detailed screenshots and live links can be added as each project is published.</p>
        </div>
      </section>

      <section className="section wrap" id="approach">
        <div className="section-head">
          <span className="section-kicker">03 / WHAT I BRING</span>
          <span className="muted">THREE CONNECTED LENSES</span>
        </div>
        <h2 className="approach-title">Different lenses.<br /><em>One direction.</em></h2>
        <div className="capability-list">
          {capabilities.map((item, i) => {
            const Icon = item.icon;
            return <div className="capability" key={item.title}>
              <span className="cap-number">0{i + 1}</span>
              <Icon className="cap-icon" size={25} strokeWidth={1.4} />
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <ArrowUpRight className="cap-arrow" size={19} />
            </div>;
          })}
        </div>
        <div className="toolkit">
          <span className="section-kicker">THE TOOLKIT</span>
          <div className="toolkit-tags">{toolkit.map(x => <span key={x}>{x}</span>)}</div>
        </div>
      </section>

      <section className="experience-band">
        <div className="wrap experience-inner">
          <div className="experience-intro">
            <span className="section-kicker">04 / THE JOURNEY SO FAR</span>
            <h2>Learning by<br /><em>doing.</em></h2>
            <p>Every role has sharpened the same instinct: make the problem legible, then make progress visible.</p>
          </div>
          {experiences.map((experience, index) => (
            <div className="experience-item" key={experience.company}>
              <span className="experience-date">{experience.date}</span>
              <div><h3>{experience.company}</h3><p>{experience.role}</p><span>{experience.detail}</span></div>
              <span className="experience-index">0{index + 1}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section wrap" id="contact">
        <span className="section-kicker">05 / HAVE SOMETHING IN MIND?</span>
        <h2>Let&apos;s make<br /><em>it happen.</em></h2>
        <p>Good ideas get better when they&apos;re shared. I&apos;m always happy to connect, exchange perspectives or explore interesting problems.</p>
        <a className="contact-button" href="mailto:yash04meena@gmail.com">Start a conversation <ArrowUpRight size={18} /></a>
        <div className="contact-bottom">
          <span>YASH MEENA © 2026</span>
          <div className="socials">
            <a href="https://www.linkedin.com/in/yash951/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href="https://github.com/Yash0951" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            <a href="mailto:yash04meena@gmail.com" aria-label="Email"><Mail /></a>
          </div>
          <a href="#home" className="back-top">BACK TO TOP ↑</a>
        </div>
      </section>

      <AnimatePresence>
        {activeProject && (
          <motion.div className="case-study-backdrop" role="presentation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveProject(null)}>
            <motion.div className="case-study" role="dialog" aria-modal="true" aria-labelledby="case-study-title" initial={{ opacity: 0, y: 24, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 14, scale: .98 }} onClick={(event) => event.stopPropagation()}>
              <div className="case-study-art">
                <Image src={activeProject.image} alt="" fill sizes="(max-width: 800px) 100vw, 720px" className="project-image" />
                <span className="project-art-shade" />
                <span className="project-number">{activeProject.number} / CASE FILE</span>
                <span className="project-mark">{activeProject.mark}</span>
              </div>
              <div className="case-study-copy">
                <div className="case-study-heading"><span className="project-type">{activeProject.type}</span><button className="close-case" onClick={() => setActiveProject(null)} aria-label="Close case file"><X size={19} /></button></div>
                <h2 id="case-study-title">{activeProject.title}</h2>
                <p>{activeProject.description}</p>
                <div className="case-study-details">
                  <div><span className="section-kicker">MY ROLE</span><strong>{activeProject.role}</strong></div>
                  <div><span className="section-kicker">WHAT MOVED</span><strong>{activeProject.outcome}</strong></div>
                </div>
                <div className="tags">{activeProject.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
