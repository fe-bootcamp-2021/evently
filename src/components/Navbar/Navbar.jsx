import React from "react";
import { Link, useHistory } from "react-router-dom";
import { NavRoutes, Routes } from "../../constants/routes";
import { useAuth } from "../../contexts/AuthContext"; 
import Logo from "../Logo/Logo";
import {
  buttonOutline,
  title,
  navContainer,
  logoContainer,
  menu,
} from "./Navbar.style";

export default function Navbar() {
  const history = useHistory();
  const { signout } = useAuth();

  const handleNav = () => {
    signout();
    history.push(Routes.login().path);
  };

  return (
    <nav className={navContainer} onClick={() => window.scroll(0, 0)}>
      <div className={logoContainer}>
        <Logo />
      </div>

      <ul className={menu}>
        <div className="mr-10">
          <Link className={title} to={NavRoutes.home().path}>
            {NavRoutes.home().text}{" "}
          </Link>
          <Link className={title} to={NavRoutes.about().path}>
            {NavRoutes.about().text}{" "}
          </Link>
          <Link className={title} to={NavRoutes.account().path}>
            {NavRoutes.account().text}{" "}
          </Link>
        </div>
        <div>
          <li className={buttonOutline} onClick={handleNav}>
            Log Out
          </li>
        </div>
      </ul>
    </nav>
  );
}
