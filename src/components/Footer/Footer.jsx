import style from "./Footer.module.css";

import { Link } from "react-router-dom";
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
        <h1>Purnachandra</h1>
        <p>
          I love solving realworld problem using technology, I always curius to
          learning and inplementing new things
        </p>
      </div>
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
        <p>
          <a href="www.leetcode.com/purnchndr">Leetcode</a>
        </p>
      </div>
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
          title="Phone Link"
          className={style.navlink}
          target="_blank"
          to="https://api.whatsapp.com/send/?phone=%2B919125847068&text=Hi+Pratap"
        >
          <WhatsAppIcon size={iconsize} />
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
