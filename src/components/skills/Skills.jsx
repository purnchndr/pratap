import style from "./Skills.module.css";

const aiVoiceStack = [
  "LiveKit (Python agents)",
  "OpenAI LLM",
  "Deepgram STT",
  "Google TTS",
  "MCP Backend",
  "FastAPI",
  "SIP / Asterisk",
];

const backendStack = [
  "Python",
  "Node.js",
  "Express.js",
  "MongoDB (async)",
  "Redis",
  "SQL",
  "REST APIs",
];

const frontendStack = [
  "React.js",
  "JavaScript (ES6+)",
  "HTML / CSS",
  "Recharts",
];

function Skills() {
  return (
    <div className={style.skillsroot}>
      <h2 className={style.sectiontitle}>Tech Stack</h2>
      <div className={style.skillsandstack}>
        <SkillSection title="AI & Voice" items={aiVoiceStack} />
        <SkillSection title="Backend" items={backendStack} />
        <SkillSection title="Frontend" items={frontendStack} />
      </div>
    </div>
  );
}

function SkillSection({ title, items }) {
  return (
    <div className={style.skillssection}>
      <h2>{title}</h2>
      <div className={style.teckstackspan}>
        {items.map((item, i) => (
          <span key={i} className={style.stack}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
