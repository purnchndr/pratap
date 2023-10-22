import { Children } from "react";
import style from "./Button.module.css";

function Button({ onClick, className, children }) {
  return (
    <button onClick={onClick} className={`${className} ${style.button}`}>
      {children}
    </button>
  );
}

export default Button;
