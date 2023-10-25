import { useEffect, useState } from "react";
import style from "./DarkMode.module.css";
import { DarkIcon, LightIcon } from "../common/Icons";
import Button from "../common/Button/Button";
function DarkMode() {
  const [dark, setDark] = useState(false);

  function toggleDarkMode() {
    console.log("toggel", dark);
    setDark((curr) => setDark(!curr));
  }

  //   useEffect(() => {
  //     let darkstate = localStorage.getItem("dark") || false;
  //     if (darkstate) {
  //       darkstate = JSON.parse(darkstate);
  //       setDark(darkstate);
  //     }
  //     console.log(typeof darkstate, darkstate);
  //   }, []);

  useEffect(() => {
    const root = document.querySelector(":root");
    // console.log(dark, " darafa");
    // localStorage.setItem("dark", dark);
    if (dark) {
      root.style.setProperty("--clr-background", "#242424");
      root.style.setProperty("--clr", "#9b9b9b");
    } else {
      root.style.setProperty("--clr-background", "#fffff7");
      root.style.setProperty("--clr", "#545454");
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
