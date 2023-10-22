import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Intro from "../../components/Intro/Intro";
import ProjectsAndExperience from "../../components/projectsAndExperience/ProjectsAndExperience";
import Skills from "../../components/skills/Skills";
import style from "./Homepage.module.css";

function Hompage() {
  return (
    <>
      <Header />
      <Intro />
      <Skills />
      <ProjectsAndExperience />
      <Footer />
    </>
  );
}

export default Hompage;
