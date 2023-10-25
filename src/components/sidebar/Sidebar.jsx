import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";

const sidebaritems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Experience",
    path: "/experience",
  },
  {
    name: "Projects",
    path: "/projects",
  },
];

function Sidebar() {
  return (
    <div className={style.sidebar}>
      {sidebaritems.map((curr, i) => (
        <SidebarItem key={i} value={curr} />
      ))}
    </div>
  );
}

function SidebarItem({ value }) {
  return (
    <div className={style.sidebaritem}>
      <NavLink to={value.path}>{value.name}</NavLink>
    </div>
  );
}

export default Sidebar;
