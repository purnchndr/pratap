import { useEffect, useState } from "react";
import style from "./DarkMode.module.css";
import { DarkIcon, LightIcon } from "../common/Icons";

function DarkMode() {
  const [dark, setDark] = useState(false);
  const root = document.querySelector(":root");
  function toggleDarkMode() {
    setDark(!dark);
  }

  useEffect(() => {
    if (!dark) {
      root.style.setProperty("--clr-background", "#fffff7");
      root.style.setProperty("--clr", "#545454");
      root.style.setProperty("--box-shadow", "0 13px 30px #0000001c");
    } else {
      root.style.setProperty("--clr-background", "#242424");
      root.style.setProperty("--clr", "#9b9b9b");
      root.style.setProperty("--box-shadow", "4px 4px 15px #0000008f");
    }
  }, [dark]);
  return (
    <div className={style.darkcntr}>
      <div onClick={toggleDarkMode}>
        {dark ? <DarkIcon size={24} /> : <LightIcon size={24} />}
      </div>
    </div>
  );
}

export default DarkMode;
