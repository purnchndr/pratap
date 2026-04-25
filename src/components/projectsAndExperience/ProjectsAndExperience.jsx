import style from "./ProjectsAndExperience.module.css";

const projects = [
  {
    header: "Aarohi — AI Voice Platform",
    tag: "Proprietary",
    tech: "LiveKit · Python · OpenAI · Deepgram · FastAPI · MongoDB · Redis",
    time: "2025 – Present",
    color: "#ff6d39",
    des: "Production voice AI system handling 10,000+ daily calls for UTL Solar. Replaced 30–40 human agents. Built with LiveKit Python agents, Deepgram STT, Google TTS, OpenAI LLM, and a custom MCP backend for CRM operations.",
    metrics: ["10K+ daily calls", "200x funnel", "10x conversion"],
  },
  {
    header: "Udaan — Call Analytics",
    tag: "Proprietary",
    tech: "React · Recharts · FastAPI · MongoDB · OpenAI",
    time: "2025 – Present",
    color: "#007200",
    des: "Real-time analytics platform monitoring 100+ human agents across a 500K+ user base. OpenAI-powered transcript analysis with an 11-point call quality checklist.",
    metrics: ["100+ agents", "500K+ users", "AI quality scoring"],
  },
];

const experience = [
  {
    header: "Sowiz Solutions",
    role: "AI Voice Systems Engineer",
    tech: "LiveKit · Python · OpenAI · Deepgram · FastAPI · MongoDB · Redis · React",
    time: "Jan 2025 – Present",
    color: "#ff6d39",
    des: "Built and scaled Aarohi, an AI voice platform for UTL Solar: 500 → 10,000+ daily calls (20x throughput), conversion improved from <1% → 10%+, and a combined 200x top-of-funnel improvement.",
  },
  {
    header: "D2C E-commerce Startup",
    role: "Co-founder & Tech Lead",
    tech: "React · Node.js · Express · MongoDB · JavaScript",
    time: "Jul 2023 – Dec 2024",
    color: "#007200",
    des: "Sole technical founder. Designed and built the full product stack — storefront, backend, admin tools. Wound down pre-launch due to unit economics constraints.",
  },
  {
    header: "TATA Consultancy Services",
    role: "Assistant System Engineer",
    tech: "React · Node.js · JavaScript",
    time: "Apr 2023 – Jul 2023",
    image: "https://purnchndr.github.io/imagecdn/img/pratap/tcs.jpg",
    des: "Enterprise software engineering at TCS, contributing to internal tooling and web application development.",
  },
  {
    header: "Newgen Software Technologies",
    role: "Application Engineer",
    tech: "React · Node.js · JavaScript · SQL · Java",
    time: "Nov 2021 – Mar 2023",
    image: "https://purnchndr.github.io/imagecdn/img/pratap/newgen.png",
    des: "Built enterprise web applications for banking and insurance clients. 16 months of full-stack development on production systems.",
  },
];

function Projects() {
  return (
    <>
      <div className={style.projects}>
        <div className={style.projectheading}>
          <h1>Featured Projects</h1>
          <h2>Production systems — not side projects</h2>
        </div>
        <div className={style.projectCards}>
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
      <div className={style.projects}>
        <div className={style.projectheading}>
          <h1>Experience</h1>
          <h2>Nov 2021 – Present · 4+ years</h2>
        </div>
        <div className={style.projectCards}>
          {experience.map((exp, i) => (
            <ExperienceCard key={i} experience={exp} />
          ))}
        </div>
      </div>
    </>
  );
}

function ColorHeader({ color, label }) {
  return (
    <div
      className={style.colorheader}
      style={{ background: `linear-gradient(135deg, ${color}33, ${color}11)`, borderBottom: `3px solid ${color}` }}
    >
      <span className={style.colorlabel} style={{ color }}>
        {label}
      </span>
    </div>
  );
}

function ExperienceCard({ experience }) {
  return (
    <div className={style.project}>
      {experience.image ? (
        <div className={style.projectimgcon}>
          <img
            className={style.projectimg}
            src={experience.image}
            alt={experience.header}
          />
        </div>
      ) : (
        <ColorHeader color={experience.color} label={experience.header} />
      )}
      <div className={style.allinfo}>
        <h2>{experience.header}</h2>
        <h3>{experience.role}</h3>
        <h4>{experience.time}</h4>
        <p className={style.description}>{experience.des}</p>
        <div className={style.infoexperience}>
          <span className={style.techline}>{experience.tech}</span>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className={style.project}>
      <ColorHeader color={project.color} label={project.header} />
      <div className={style.allinfo}>
        <h2>{project.header}</h2>
        <div className={style.metricsrow}>
          {project.metrics.map((m, i) => (
            <span key={i} className={style.metric}>
              {m}
            </span>
          ))}
        </div>
        <p className={style.description}>{project.des}</p>
        <div className={style.info}>
          <span className={style.techline}>{project.tech} · {project.time}</span>
        </div>
        <span className={style.proprietarytag}>{project.tag} — not publicly available</span>
      </div>
    </div>
  );
}

export default Projects;
