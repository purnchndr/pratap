import { Link, NavLink } from "react-router-dom";
import style from "./Header.module.css";
import {
  LinkedInIcon,
  DocumentIcon,
  InstagramIcon,
  GithubIcon,
  EmailIcon,
  PhoneIcon,
} from "../common/Icons";

const iconsize = 24;

function Header() {
  return (
    <header className={style.header}>
      <div className={style.left}>
        <NavLink to="/aboutme">About Me</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </div>
      <div className={style.middle}>
        <Link to="/">
          <h1>Purnachandra</h1>
        </Link>
      </div>
      <div className={style.right}>
        <Link
          target="_blank"
          title="Linkedin link"
          className={style.navlink}
          to="https://www.linkedin.com/in/purnchndr/"
        >
          <LinkedInIcon size={iconsize} />
        </Link>

        <Link
          target="_blank"
          title="Github Link"
          className={style.navlink}
          to="https://www.github.com/purnchndr/"
        >
          <GithubIcon size={iconsize} />
        </Link>
        <Link
          target="_blank"
          title="Resume document"
          className={style.navlink}
          to="https://docs.google.com/document/d/18PEardLKILyrmBauSSOVJrAi6Ve1SLxgg4aBELqgZBk/edit"
        >
          <DocumentIcon size={iconsize} />
        </Link>
        <Link
          target="_blank"
          title="Instagram Link"
          className={style.navlink}
          to="https://www.instagram.com/purnchndr/"
        >
          <InstagramIcon size={iconsize} />
        </Link>
        <Link
          title="Email Link"
          className={style.navlink}
          to="mailto:pratap.careers@gmail.com"
        >
          <EmailIcon size={iconsize} />
        </Link>
        <Link
          title="Phone Link"
          className={style.navlink}
          to="tel:+919125847068"
        >
          <PhoneIcon size={iconsize} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
