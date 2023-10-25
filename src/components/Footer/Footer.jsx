import style from "./Footer.module.css";

import { Link, NavLink } from "react-router-dom";
import {
  LinkedInIcon,
  DocumentIcon,
  InstagramIcon,
  GithubIcon,
  EmailIcon,
  PhoneIcon,
  WhatsAppIcon,
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
          I love solving real world problem using technology, I always curius to
          learning and inplementing new things
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
        <Link
          title="Phone Link"
          className={style.navlink}
          to="tel:+919125847068"
        >
          <PhoneIcon size={iconsize} />
        </Link>
        <Link
          title="Whatsapp Link"
          className={style.navlink}
          target="_blank"
          to="https://api.whatsapp.com/send/?phone=%2B919125847068&text=Hi+Pratap"
        >
          <WhatsAppIcon size={iconsize} />
        </Link>
        <Link
          target="_blank"
          title="Resume document"
          className={style.navlink}
          to="https://docs.google.com/document/d/e/2PACX-1vQdEjPmfvOqbjtcct7NvFm25vqPIOkDzYOcV_dalawKImB5V7CrVCfHXnlbmkhFGA3BneMGVH0yYKhc/pub"
        >
          <DocumentIcon size={iconsize} />
        </Link>
        <p>
          <a href="mailto:pratap.careers@gmail.com">pratap.careers@gmail.com</a>
        </p>
        <p>
          <a href="tel:+919125847068">+919125847068</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
