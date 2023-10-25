import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Button from "../../components/common/Button/Button";
import style from "./Resume.module.css";

function Resume() {
  return (
    <div>
      <Header />
      <iframe
        className={style.resumeiframe}
        src="https://docs.google.com/document/d/e/2PACX-1vQdEjPmfvOqbjtcct7NvFm25vqPIOkDzYOcV_dalawKImB5V7CrVCfHXnlbmkhFGA3BneMGVH0yYKhc/pub?embedded=true"
      ></iframe>
      <div className={style.downloadbtn}>
        <Button>
          <Link
            target="_blank"
            to="https://docs.google.com/document/d/18PEardLKILyrmBauSSOVJrAi6Ve1SLxgg4aBELqgZBk/edit?usp=sharing"
          >
            Download
          </Link>
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default Resume;
