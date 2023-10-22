import style from "./Intro.module.css";

import profileImg from "../../assets/img/profile.jpg";

function Intro() {
  return (
    <div className={style.intro}>
      <div className={`${style.photo} ${style.introsection}`}>
        <h2>Hi, I am</h2>
        <img src={profileImg} alt="profile image" />
        <h1>Purnachandra Pratap Nishad</h1>
        <h2>#pratap</h2>
      </div>
      <div className={`${style.profileintro} ${style.introsection}`}>
        <h1>Software Engineer</h1>
        <h2>MERN Stack Developer</h2>
        <p className={style.introdetails}>
          &#8226; Highly skilled Software Engineer with 2 years of experience in
          MERN stack development and exceptional skills in Data Structures and
          Algorithms. <br /> &#8226; Proven track record of spearheading and
          delivering complex projects from concept to release.
          <br />
          &#8226; Proficient in designing, developing, and maintaining web-based
          applications while also keeping up with emerging technologies and
          architectural patterns.
          <br />
          &#8226; Effective communicator with strong problem-solving abilities,
          and a passion for delivering quality software solutions that meet user
          needs.
        </p>
      </div>
    </div>
  );
}

export default Intro;
