import { Link } from "react-router-dom";
import {
  LinkedInIcon,
  GithubIcon,
  EmailIcon,
} from "../../components/common/Icons";
import style from "./Contact.module.css";

const contacts = [
  {
    label: "Email",
    value: "pratap.careers@gmail.com",
    href: "mailto:pratap.careers@gmail.com",
    Icon: EmailIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/purnchndr",
    href: "https://www.linkedin.com/in/purnchndr/",
    external: true,
    Icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: "github.com/purnchndr",
    href: "https://www.github.com/purnchndr/",
    external: true,
    Icon: GithubIcon,
  },
];

function Contact() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <div className={style.container}>
        <h1 className={style.pagetitle}>Get In Touch</h1>
        <p className={style.subtitle}>
          Open to roles, collaborations, and good engineering conversations.
        </p>
        <div className={style.grid}>
          {contacts.map((c, i) => (
            <Link
              key={i}
              to={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              className={style.card}
            >
              <span className={style.iconwrap}>
                <c.Icon size={28} />
              </span>
              <div className={style.cardtext}>
                <span className={style.cardlabel}>{c.label}</span>
                <span className={style.cardvalue}>{c.value}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
