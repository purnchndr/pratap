import { useEffect, useRef, useState } from "react";
import profileLight from "../../assets/img/profile.png";
import profileDark from "../../assets/img/profile-dark.png";
import {
  EmailIcon,
  GithubIcon,
  LinkedInIcon,
} from "../../components/common/Icons";
import style from "./Homepage.module.css";

/* ─── Data ─────────────────────────────────────────────── */

const roles = [
  "Senior Software Engineer",
  "AI Voice & Chatbot Builder",
  "Backend Engineer @ Scale",
  "Full-Stack Developer",
];

const capabilities = [
  { icon: "🤖", label: "AI Voice Agents" },
  { icon: "💬", label: "Chatbot Systems" },
  { icon: "⚙️", label: "0.5M+ User Backends" },
  { icon: "🔄", label: "Real-time Pipelines" },
  { icon: "🛠️", label: "DevOps & Infra" },
];

const stats = [
  { num: "0.5M+", label: "Users System Handles", green: false },
  { num: "10K+", label: "Daily AI Interactions", green: false },
  { num: "200x", label: "System Throughput Gain", green: true },
  { num: "4+", label: "Years Production Eng", green: true },
];

const skillGroups = [
  {
    title: "AI & Agents",
    icon: "🤖",
    color: "#ea580c",
    items: [
      "AI Voice Agents (LiveKit)",
      "Chatbot Architecture",
      "OpenAI / GPT-4 API",
      "LangChain / LLM Orchestration",
      "Deepgram STT · Google TTS",
      "WhatsApp Business API",
      "MCP (Model Context Protocol)",
      "Webhook & Event Systems",
    ],
  },
  {
    title: "Backend & Systems",
    icon: "⚙️",
    color: "#7c3aed",
    items: [
      "Python / FastAPI",
      "Node.js / Express.js",
      "MongoDB (async driver)",
      "Redis / Queue Systems",
      "SQL · PostgreSQL",
      "WebSocket · REST APIs",
      "SIP / Asterisk / Telephony",
      "Async & Concurrent Systems",
    ],
  },
  {
    title: "Frontend",
    icon: "🖥️",
    color: "#0284c7",
    items: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5 / CSS3",
      "Recharts / Data Viz",
      "Responsive Design",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "🛠️",
    color: "#16a34a",
    items: [
      "Docker / Containers",
      "Linux / Bash Scripting",
      "Nginx / Reverse Proxy",
      "Git / GitHub",
      "CI/CD (GitHub Actions)",
      "Cron Jobs & Workers",
      "Process Management (PM2)",
      "Logging & Monitoring",
    ],
  },
];

const projects = [
  {
    name: "AI Voice Agent Platform",
    tag: "Production",
    tech: [
      "LiveKit",
      "Python",
      "OpenAI",
      "Deepgram",
      "FastAPI",
      "Redis",
      "MongoDB",
    ],
    period: "2025 – Present",
    accentColor: "#ea580c",
    desc: "End-to-end voice AI platform handling 10,000+ daily calls. Custom Python voice agents, real-time STT/TTS pipeline, telephony integration (SIP), and a CRM backend via MCP. Replaced 30–40 human agents.",
    metrics: ["10K+ daily calls", "200x funnel gain", "30–40 agents replaced"],
  },
  {
    name: "Multi-Channel Chatbot System",
    tag: "Production",
    tech: ["OpenAI", "WhatsApp API", "FastAPI", "MongoDB", "Redis"],
    period: "2025 – Present",
    accentColor: "#7c3aed",
    desc: "Omnichannel chatbot operating across voice and WhatsApp. LLM-orchestrated conversation flow, lead qualification, automated scheduling, and CRM sync. Delivery rate improved from 35% → 90%+.",
    metrics: ["35% → 90%+ delivery", "Multi-channel", "LLM-powered"],
  },
  {
    name: "Backend for 0.5M+ Users",
    tag: "Production",
    tech: ["FastAPI", "MongoDB", "Redis", "Python", "React", "Recharts"],
    period: "2025 – Present",
    accentColor: "#16a34a",
    desc: "Real-time ops platform managing 0.5M+ user records with live agent monitoring, transcript analysis, call quality scoring, and analytics dashboards. Async MongoDB at scale with priority queuing.",
    metrics: ["0.5M+ users", "100+ agents monitored", "Real-time analytics"],
  },
];

const experience = [
  {
    company: "Sowiz Solutions",
    role: "AI Voice Systems Engineer",
    period: "Jan 2025 – Present",
    tech: "LiveKit · Python · OpenAI · Deepgram · FastAPI · MongoDB · Redis · React",
    color: "#ea580c",
    points: [
      "Built production voice AI: 500 → 10,000+ daily calls (20x), <1% → 10%+ conversion (10x)",
      "Architected multi-channel chatbot system (voice + WhatsApp), 35% → 90%+ delivery",
      "Built ops backend managing 0.5M+ user records with async MongoDB, Redis queuing, cron workers",
      "Replaced workload of 30–40 human agents, saving ~₹1Cr+/year",
    ],
  },
  {
    company: "D2C E-commerce Startup",
    role: "Co-founder & Tech Lead",
    period: "Jul 2023 – Dec 2024",
    tech: "React · Node.js · Express · MongoDB · JavaScript",
    color: "#7c3aed",
    points: [
      "Sole technical founder — full product stack: storefront, backend APIs, admin dashboard",
      "Designed inventory management, order pipeline, and multi-vendor data architecture",
      "Wound down pre-launch due to unit economics constraints",
    ],
  },
  {
    company: "TATA Consultancy Services",
    role: "Assistant System Engineer",
    period: "Apr 2023 – Jul 2023",
    tech: "React · Node.js · JavaScript",
    color: "#0284c7",
    points: [
      "Enterprise software development at TCS Lucknow",
      "Web application development and internal tooling",
    ],
  },
  {
    company: "Newgen Software Technologies",
    role: "Application Engineer",
    period: "Nov 2021 – Mar 2023",
    tech: "React · Node.js · JavaScript · SQL · Java",
    color: "#16a34a",
    points: [
      "Built enterprise web applications for banking and insurance clients",
      "16 months of production full-stack development on live systems",
      "React frontend + Node.js/Java backend + SQL enterprise integration",
    ],
  },
];

const contacts = [
  {
    label: "Email",
    value: "pratap.careers@gmail.com",
    href: "mailto:pratap.careers@gmail.com",
    Icon: EmailIcon,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/purnchndr",
    href: "https://www.linkedin.com/in/purnchndr/",
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/purnchndr",
    href: "https://www.github.com/purnchndr/",
    Icon: GithubIcon,
    external: true,
  },
];

/* ─── Reveal hook ───────────────────────────────────────── */

function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─── Count-up hook ─────────────────────────────────────── */

function useCountUp(target, duration, started) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let raf;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);
  return count;
}

/* ─── Stat item ─────────────────────────────────────────── */

const statDefs = [
  { target: 500, suffix: "K+", label: "Users System Handles", green: false },
  { target: 10, suffix: "K+", label: "Daily AI Interactions", green: false },
  { target: 200, suffix: "x", label: "System Throughput Gain", green: true },
  { target: 4, suffix: "+", label: "Years Production Eng", green: true },
];

function StatItem({ def, started }) {
  const count = useCountUp(def.target, 1400, started);
  return (
    <div className={style.statItem}>
      <span className={`${style.statNum} ${def.green ? style.statGreen : ""}`}>
        {count}
        {def.suffix}
      </span>
      <span className={style.statLabel}>{def.label}</span>
    </div>
  );
}

/* ─── Section title ─────────────────────────────────────── */

function SectionTitle({ title, sub }) {
  return (
    <div className={style.sectionTitle}>
      <h2 className={style.sectionH2}>{title}</h2>
      {sub && <p className={style.sectionSub}>{sub}</p>}
    </div>
  );
}

/* ─── Project card ──────────────────────────────────────── */

function ProjectCard({ project, delay }) {
  const [ref, visible] = useReveal();
  return (
    <article
      ref={ref}
      className={`${style.projectCard} ${visible ? style.projectCardVisible : ""}`}
      style={{ "--card-accent": project.accentColor, animationDelay: delay }}
    >
      <div className={style.projectTop}>
        <div className={style.projectMeta}>
          <span
            className={style.projectTag}
            style={{
              color: project.accentColor,
              borderColor: project.accentColor,
            }}
          >
            {project.tag}
          </span>
          <span className={style.projectPeriod}>{project.period}</span>
        </div>
        <h3 className={style.projectName}>{project.name}</h3>
        <div className={style.metricsRow}>
          {project.metrics.map((m, i) => (
            <span key={i} className={style.metric}>
              {m}
            </span>
          ))}
        </div>
        <p className={style.projectDesc}>{project.desc}</p>
      </div>
      <div className={style.projectBottom}>
        {project.tech.map((t, i) => (
          <span key={i} className={style.techTag}>
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

/* ─── Timeline item ─────────────────────────────────────── */

function TimelineItem({ exp }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`${style.timelineItem} ${visible ? style.timelineVisible : ""}`}
    >
      <div
        className={style.timelineDot}
        style={{ background: exp.color, boxShadow: `0 0 0 4px ${exp.color}28` }}
      />
      <article className={style.timelineCard}>
        <div className={style.timelineHeader}>
          <div>
            <h3 className={style.timelineCompany}>{exp.company}</h3>
            <p className={style.timelineRole} style={{ color: exp.color }}>
              {exp.role}
            </p>
          </div>
          <span className={style.timelinePeriod}>{exp.period}</span>
        </div>
        <ul className={style.timelinePoints}>
          {exp.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
        <p className={style.timelineTech}>{exp.tech}</p>
      </article>
    </div>
  );
}

/* ─── Main page ─────────────────────────────────────────── */

function Homepage() {
  /* Dark mode detection */
  const [isDark, setIsDark] = useState(
    () => document.documentElement.getAttribute("data-theme") === "dark"
  );
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  /* Typewriter */
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIdx];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          70,
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setTyping(false), 2400);
      return () => clearTimeout(t);
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
        return () => clearTimeout(t);
      }
      setRoleIdx((roleIdx + 1) % roles.length);
      setTyping(true);
    }
  }, [displayed, typing, roleIdx]);

  /* Stats count-up */
  const [statsRef, statsVisible] = useReveal(0.3);

  /* Skills reveal */
  const [skillsRef, skillsVisible] = useReveal();

  /* Contact reveal */
  const [contactRef, contactVisible] = useReveal();

  return (
    <main className={style.page}>
      {/* ── Hero ── */}
      <section className={style.hero} id="hero" aria-label="Introduction">
        <div className={style.heroBg} aria-hidden="true" />
        <div className={style.heroInner}>
          <div className={style.heroLeft}>
            <div className={style.heroBadge}>
              <span className={style.heroDot} />
              Senior Engineer · Available for Roles
            </div>

            <h1 className={style.heroName}>Pratap</h1>

            <div className={style.typewriterRow} aria-live="polite">
              <code className={style.typewriter}>
                {displayed}
                <span className={style.cursor} aria-hidden="true">
                  |
                </span>
              </code>
            </div>

            <p className={style.heroDesc}>
              I design and build distributed backend systems, AI voice agents,
              and chatbot platforms that handle real traffic at scale. 4+ years
              of production engineering — from{" "}
              <strong>0.5M-user backends</strong> to{" "}
              <strong>10,000+ daily AI interactions</strong>.
            </p>

            {/* Capability chips */}
            <div className={style.chips}>
              {capabilities.map((c, i) => (
                <span
                  key={i}
                  className={style.chip}
                  style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                >
                  <span aria-hidden="true">{c.icon}</span> {c.label}
                </span>
              ))}
            </div>

            <div className={style.heroCtas}>
              <a href="#projects" className={style.ctaPrimary}>
                View Work
              </a>
              <a href="#contact" className={style.ctaSecondary}>
                Get In Touch
              </a>
            </div>

            <div className={style.heroSocials}>
              <a
                href="https://github.com/purnchndr"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className={style.socialBtn}
                aria-label="GitHub profile"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/purnchndr/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className={style.socialBtn}
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon size={20} />
              </a>
              <a
                href="mailto:pratap.careers@gmail.com"
                title="Email"
                className={style.socialBtn}
                aria-label="Send email"
              >
                <EmailIcon size={20} />
              </a>
            </div>
          </div>

          <div className={style.heroRight}>
            <div className={style.profileRing}>
              <img
                src={isDark ? profileDark : profileLight}
                alt="Pratap — Senior Software Engineer"
                className={style.profileImg}
              />
            </div>
            <div
              className={style.floatCard}
              style={{ top: "12%", right: "-10%" }}
            >
              <span>🤖</span> Voice AI
            </div>
            <div
              className={style.floatCard}
              style={{ bottom: "18%", left: "-14%" }}
            >
              <span>💬</span> Chatbots
            </div>
            <div
              className={style.floatCard}
              style={{ bottom: "40%", right: "-16%" }}
            >
              <span>⚡</span> 0.5M+ Users
            </div>
          </div>
        </div>

        <a
          href="#skills"
          className={style.scrollHint}
          aria-label="Scroll to skills"
        >
          <span className={style.scrollArrow} aria-hidden="true" />
        </a>
      </section>

      {/* ── Stats ── */}
      <section className={style.statsSection} aria-label="Key metrics">
        <div ref={statsRef} className={style.statsGrid}>
          {statDefs.map((def, i) => (
            <StatItem key={i} def={def} started={statsVisible} />
          ))}
        </div>
      </section>

      {/* ── Skills ── */}
      <section
        id="skills"
        className={style.section}
        aria-labelledby="skills-heading"
      >
        <div className={style.container}>
          <SectionTitle
            title="Technical Skills"
            sub="What I bring to every role"
          />
          <div
            ref={skillsRef}
            className={`${style.skillsGrid} ${skillsVisible ? style.skillsVisible : ""}`}
          >
            {skillGroups.map((group, i) => (
              <div
                key={i}
                className={style.skillCard}
                style={{
                  "--skill-color": group.color,
                  animationDelay: `${i * 0.12}s`,
                }}
              >
                <div className={style.skillCardHeader}>
                  <span className={style.skillIcon} aria-hidden="true">
                    {group.icon}
                  </span>
                  <h3 className={style.skillTitle}>{group.title}</h3>
                </div>
                <div className={style.skillTags}>
                  {group.items.map((item, j) => (
                    <span key={j} className={style.skillTag}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section
        id="projects"
        className={`${style.section} ${style.sectionAlt}`}
        aria-labelledby="projects-heading"
      >
        <div className={style.container}>
          <SectionTitle
            title="Featured Work"
            sub="Production systems — built and shipped"
          />
          <div className={style.projectsGrid}>
            {projects.map((p, i) => (
              <ProjectCard key={i} project={p} delay={`${i * 0.12}s`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section
        id="experience"
        className={style.section}
        aria-labelledby="experience-heading"
      >
        <div className={style.container}>
          <SectionTitle
            title="Experience"
            sub="Nov 2021 – Present · 4+ years"
          />
          <div className={style.timeline}>
            {experience.map((exp, i) => (
              <TimelineItem key={i} exp={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section
        id="contact"
        className={`${style.section} ${style.sectionAlt}`}
        aria-labelledby="contact-heading"
      >
        <div className={style.container}>
          <SectionTitle
            title="Get In Touch"
            sub="Open to senior engineering roles, AI/backend projects, and good conversations"
          />
          <div
            ref={contactRef}
            className={`${style.contactGrid} ${contactVisible ? style.contactVisible : ""}`}
          >
            {contacts.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className={style.contactCard}
                aria-label={`Contact via ${c.label}`}
              >
                <span className={style.contactIcon}>
                  <c.Icon size={24} />
                </span>
                <div className={style.contactText}>
                  <span className={style.contactLabel}>{c.label}</span>
                  <span className={style.contactValue}>{c.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={style.footer}>
        <div className={style.footerInner}>
          <span className={style.footerName}>Pratap</span>
          <span className={style.footerDot}>·</span>
          <span className={style.footerText}>Senior Software Engineer</span>
          <span className={style.footerDot}>·</span>
          <a
            href="mailto:pratap.careers@gmail.com"
            className={style.footerEmail}
          >
            pratap.careers@gmail.com
          </a>
        </div>
        <p className={style.footerCopy}>
          © {new Date().getFullYear()} Purnachandra Pratap Nishad · Built with
          React
        </p>
      </footer>
    </main>
  );
}

export default Homepage;
