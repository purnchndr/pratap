import style from "./Footer.module.css";

import { Link, NavLink } from "react-router-dom";
import {
  LinkedInIcon,
  InstagramIcon,
  GithubIcon,
  EmailIcon,
} from "../common/Icons";

const iconsize = 24;

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerintro}>
        <NavLink to="/">
          <h1>Purnachandra</h1>
        </NavLink>
        <p>
          AI Voice Systems Engineer. I build systems that operate at scale —
          10,000+ calls/day, real pipelines, real impact.
        </p>
      </div>
      <div className={style.line}></div>
      <div className={style.footersociallinks}>
        <h1>Let's Become Social</h1>
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
          title="Instagram Link"
          className={style.navlink}
          to="https://www.instagram.com/purnchndr/"
        >
          <InstagramIcon size={iconsize} />
        </Link>
        <p>
          <Link target="_blank" to="https://www.leetcode.com/purnchndr">
            Leetcode
          </Link>
        </p>
      </div>
      <div className={style.line}></div>
      <div className={style.footercontact}>
        <h1>Contact Me</h1>
        <Link
          title="Email Link"
          className={style.navlink}
          to="mailto:pratap.careers@gmail.com"
        >
          <EmailIcon size={iconsize} />
        </Link>
        <p>
          <a href="mailto:pratap.careers@gmail.com">pratap.careers@gmail.com</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
