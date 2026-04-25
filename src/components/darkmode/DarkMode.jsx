import { useEffect, useState } from "react";
import { DarkIcon, LightIcon } from "../common/Icons";

function DarkMode({ className }) {
  // Default dark — only light if user explicitly chose light
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") !== "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      className={className}
      onClick={() => setDark(!dark)}
      title="Toggle theme"
      aria-label="Toggle dark mode"
    >
      {dark ? <LightIcon size={18} /> : <DarkIcon size={18} />}
    </button>
  );
}

export default DarkMode;
