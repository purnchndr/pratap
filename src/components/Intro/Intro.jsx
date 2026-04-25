import { useEffect, useState } from "react";
import style from "./Intro.module.css";
import profileLight from "../../assets/img/profile.png";
import profileDark from "../../assets/img/profile-dark.png";

function Intro() {
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

  return (
    <div className={style.intro}>
      <div className={`${style.photo} ${style.introsection}`}>
        <img src={isDark ? profileDark : profileLight} alt="Pratap profile" />
        <h1>Pratap</h1>
        <h2>Purnachandra Pratap Nishad</h2>
        <div className={style.badges}>
          <span className={style.badge}>AI Voice</span>
          <span className={style.badge}>Full-Stack</span>
          <span className={style.badge}>4+ Years</span>
        </div>
      </div>
      <div className={`${style.profileintro} ${style.introsection}`}>
        <h1>AI Voice Systems Engineer</h1>
        <p className={style.tagline}>
          Building voice AI that operates at scale.
        </p>
        <p className={style.introdetails}>
          I built Aarohi — a production voice AI platform that handles 10,000+
          calls per day, achieved a 200x top-of-funnel improvement, and replaced
          the workload of 30–40 human agents for UTL Solar.
        </p>
        <p className={style.introdetails}>
          4+ years across AI/voice infrastructure, backend systems, and
          full-stack development. I own systems end-to-end — from voice agent
          logic and telephony integration to React dashboards and CRM pipelines.
        </p>
        <div className={style.stackrow}>
          <span className={style.stackbadge}>LiveKit</span>
          <span className={style.stackbadge}>OpenAI</span>
          <span className={style.stackbadge}>Deepgram</span>
          <span className={style.stackbadge}>Python</span>
          <span className={style.stackbadge}>FastAPI</span>
          <span className={style.stackbadge}>React</span>
          <span className={style.stackbadge}>MongoDB</span>
        </div>
      </div>
    </div>
  );
}

export default Intro;
