import Button from "../common/Button/Button";
import { OpenLinkIcon } from "../common/Icons";
import style from "./ProjectsAndExperience.module.css";

const img = "https://purnchndr.github.io/imagecdn/img/pratap/country.png";

const projects = [
  {
    header: "Country Rush",
    link: "https://prataps-country-rush.netlify.app/",
    footer: "Visit Country Rush to know more 👉",
    tech: "React",
    time: "2023",
    image: "https://purnchndr.github.io/imagecdn/img/purnchndr/country.png",
    des: "This React Website provides essensial data about all countries of world.",
  },
  {
    header: "Eat And Split",
    link: "https://prataps-eat-n-split.netlify.app/",
    footer: "Visit Eat And Split to know more 👉",
    tech: "React",
    time: "2023",
    image: "https://purnchndr.github.io/imagecdn/img/purnchndr/eansplit.png",
    des: "This React Website helps you to calculate you group expensess.",
  },
  {
    header: "TO DO App",
    link: "https://ill-puce-sturgeon-tam.cyclic.app/Good%20morning",
    footer: "Visit TO DO App to know more 👉",
    tech: "Node, EJS",
    time: "2022",
    image: "https://purnchndr.github.io/imagecdn/img/purnchndr/todo.png",
    des: "This App let you manage you TODO tasks.",
  },
  {
    header: "Far Away",
    link: "https://prataps-travel-list.netlify.app/",
    footer: "Visit Far Away to know more 👉",
    tech: "React",
    time: "2023",
    image: "https://purnchndr.github.io/imagecdn/img/purnchndr/faraway.png",
    des: "This App help you to pack all stuffs on last minute before a trip",
  },
];

const experience = [
  {
    header: "Newgen Software",
    role: "Software Engineer",
    tech: "React, Node, JavaScript, SQL, Java",
    time: "Nov 2021 to Mar 2023",
    image: "https://purnchndr.github.io/imagecdn/img/pratap/newgen.png",
    des: "This React Website provides essensial data about all countries of world.",
  },
  {
    header: "TATA Cunsultancy Services",
    role: "React Developer",
    tech: "React, Node, Express, MongoDb, Javasript",
    time: "April 2023 to Jul 2023",
    image: "https://purnchndr.github.io/imagecdn/img/pratap/tcs.jpg",
    des: "This React Website helps you to calculate you group expensess.",
  },
  {
    header: "Freelancer",
    role: "Full Stack Developer",
    tech: "React, Node, Express, MongoDb, Javasript, SQL",
    time: "Jul 23 to Present",
    image: "https://purnchndr.github.io/imagecdn/img/pratap/freelancer.jpg",
    des: "This App let you manage you TODO tasks.",
  },
];

function Projects() {
  let time = new Date() - new Date("11/15/2021 " + "16:00");
  time = 61016965076 / (1000 * 60 * 60 * 365 * 24);
  time = Math.ceil(time);
  return (
    <>
      <div className={style.projects}>
        <div className={style.projectheading}>
          <h1>Projects</h1>
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
          <h2>2021 to Present || {time} Years</h2>
        </div>
        <div className={style.projectCards}>
          {experience.map((experience, i) => (
            <ExperienceCard key={i} experience={experience} />
          ))}
        </div>
      </div>
    </>
  );
}

function ExperienceCard({ experience }) {
  return (
    <div className={style.project}>
      <div className={style.projectimgcon}>
        <img
          className={style.projectimg}
          src={experience.image}
          alt={experience.header}
        />
      </div>
      <h2>{experience.header}</h2>
      <h3> {experience.role}</h3>
      <h4>{experience.time}</h4>
      <div className={style.allinfo}>
        <div className={style.infoexperience}>
          <span>Technology: {experience.tech}</span>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className={style.project}>
      <div className={style.projectimgcon}>
        <img
          className={style.projectimg}
          src={project.image}
          alt={project.header}
        />
      </div>
      <h2>{project.header}</h2>
      <div className={style.allinfo}>
        <p className={style.description}>{project.des}</p>
        <div className={style.info}>
          <span>
            Technology: {project.tech} || ⌛{project.time}
            <Button>
              <a href={project.link} target="_balank" rel="noreffernce">
                View Live <OpenLinkIcon />
              </a>
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Projects;
