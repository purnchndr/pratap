import style from "./AboutMe.module.css";

function AboutMe() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <div className={style.container}>
        <h1 className={style.pagetitle}>About Me</h1>

        <div className={style.grid}>
          <div className={style.card}>
            <h2>Who I am</h2>
            <p>
              I'm Pratap — a full-stack engineer who shifted into AI/voice
              infrastructure and hasn't looked back. I grew up in Kushinagar,
              UP, studied Computer Science at AKTU Lucknow (2017–2021), and
              spent my career learning by building real systems under real
              pressure.
            </p>
            <p>
              I work remotely at Sowiz Solutions, where I own their entire AI
              voice platform from architecture to deployment. Before that I
              spent 16 months as the sole technical founder of an informal D2C
              e-commerce startup — built the whole stack, learned what unit
              economics means the hard way.
            </p>
          </div>

          <div className={style.card}>
            <h2>What I do</h2>
            <p>
              I build voice AI systems and the backend infrastructure that runs
              them. My daily work involves Python voice agents (LiveKit),
              real-time STT/TTS pipelines, telephony integration (SIP/Asterisk),
              async MongoDB at scale, Redis queuing, and React dashboards for
              ops teams.
            </p>
            <p>
              The system I built handles 10,000+ calls per day, drives the
              top-of-funnel for a national solar company, and operates with less
              human intervention than a 30-person call center.
            </p>
          </div>

          <div className={style.card}>
            <h2>Where I'm going</h2>
            <p>
              Preparing for a move into a tier-1 engineering role — MAANG or
              top AI-first companies. Currently deep in DSA, system design, and
              sharpening the fundamentals that get tested at that level.
            </p>
            <p>
              I want to work on distributed systems at scale, contribute to
              teams that do serious code review, and stop being the only
              engineer in the room.
            </p>
          </div>

          <div className={style.card}>
            <h2>What I'm fixing</h2>
            <p>
              I ship fast — sometimes too fast. Working on re-reading every diff
              as a stranger's PR, writing tests as a reflex, and picking one
              area of genuine depth (async Python + MongoDB performance) instead
              of spreading thin across tools.
            </p>
            <p>
              The honest version of my weaknesses is in the open. I'd rather
              own them than pretend they don't exist.
            </p>
          </div>
        </div>

        <div className={style.statsrow}>
          <div className={style.stat}>
            <span className={style.statnum}>4+</span>
            <span className={style.statlabel}>Years Engineering</span>
          </div>
          <div className={style.stat}>
            <span className={style.statnum}>10K+</span>
            <span className={style.statlabel}>Daily AI Calls</span>
          </div>
          <div className={style.stat}>
            <span className={style.statnum}>200x</span>
            <span className={style.statlabel}>Funnel Improvement</span>
          </div>
          <div className={style.stat}>
            <span className={style.statnum}>150+</span>
            <span className={style.statlabel}>LeetCode Solved</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
