import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./AboutMe.module.css";
function AboutMe() {
  return (
    <div>
      <Header />
      <iframe
        className=""
        src="https://docs.google.com/document/d/e/2PACX-1vQdEjPmfvOqbjtcct7NvFm25vqPIOkDzYOcV_dalawKImB5V7CrVCfHXnlbmkhFGA3BneMGVH0yYKhc/pub?embedded=true"
      ></iframe>
      About me
      <Footer />
    </div>
  );
}

export default AboutMe;
