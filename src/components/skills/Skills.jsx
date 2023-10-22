import style from "./Skills.module.css";

function Skills() {
  return (
    <div className={style.skillsandstack}>
      <div className={`${style.techstack} ${style.skillssection}`}>
        <h1>Teck Stack</h1>
        <h2>MERN Stack</h2>
        <div className={style.teckstackspan}>
          <span className={style.stack}>React.js</span>
          <span className={style.stack}>Node.js</span>
          <span className={style.stack}>Express.js</span>
          <span className={style.stack}>MongoDb</span>
          <span className={style.stack}>SQL</span>
          <span className={style.stack}>Javascript</span>
          <span className={style.stack}>Java</span>
        </div>
      </div>
      <div className={`${style.skills} ${style.skillssection}`}>
        <h1>Skills</h1>
        <div className={style.teckstackspan}>
          <span className={style.stack}>JAVA</span>
          <span className={style.stack}>JavaScript</span>
          <span className={style.stack}>SQL</span>
          <span className={style.stack}>NoSQL</span>
          <span className={style.stack}>Front-end development</span>
          <span className={style.stack}>Back-end Development</span>
          <span className={style.stack}>Full Stack Development</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
