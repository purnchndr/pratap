import { useEffect, useState } from "react";
import style from "./Header.module.css";
import { GithubIcon, LinkedInIcon } from "../common/Icons";
import DarkMode from "../darkmode/DarkMode";

const navLinks = [
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 20);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header className={`${style.header} ${scrolled ? style.scrolled : ""}`}>
      <div className={style.inner}>
        <a href="/" className={style.logo} onClick={close}>
          Pratap
        </a>

        <nav className={`${style.nav} ${menuOpen ? style.navOpen : ""}`}>
          {navLinks.map((link, i) => (
            <a key={i} href={link.href} className={style.navLink} onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={style.actions}>
          <a
            href="https://github.com/purnchndr"
            target="_blank"
            rel="noopener noreferrer"
            className={style.iconBtn}
            title="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/purnchndr/"
            target="_blank"
            rel="noopener noreferrer"
            className={style.iconBtn}
            title="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
          <DarkMode className={style.darkBtn} />
          <button
            className={style.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={menuOpen ? style.l1open : style.l1} />
            <span className={menuOpen ? style.l2open : style.l2} />
            <span className={menuOpen ? style.l3open : style.l3} />
          </button>
        </div>
      </div>

      {/* Scroll progress bar */}
      <div
        className={style.progressBar}
        style={{ width: `${scrollPct}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollPct)}
      />

      {menuOpen && <div className={style.mobileOverlay} onClick={close} />}
    </header>
  );
}

export default Header;
