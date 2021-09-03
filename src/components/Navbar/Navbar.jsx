import React from "react";
import { Link, useHistory } from "react-router-dom";
import { nanoid } from "nanoid";
import { NavRoutes } from "../../constants/routes";
import { useAuth } from "../../contexts/AuthContext"; //
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

  // const handleNav = (path) => () => {
  //   history.push(path);
  // };

  // const authenticatedPage = () => {
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   const auth1 = useAuth();

  //   if (auth1) {
  //     return(  <ul className={menu}>
  //         <div className="lg:flex-grow no-underline ">
  //           <li
  //             className={titleHome}
  //             key={nanoid()}
  //             onClick={handleNav(NavRoutes.home().path)}
  //           >
  //             {NavRoutes.home().text}{" "}
  //           </li>
  //         </div>
  //         <div className="lg:flex-grow no-underline ">
  //           <li
  //             className={titleHome}
  //             key={nanoid()}
  //             onClick={handleNav(NavRoutes.home().path)}
  //           >
  //             Help
  //           </li>
  //         </div>
  //         <div>
  //           <li
  //             className={titleHome}
  //             key={nanoid()}
  //             onClick={handleNav(NavRoutes.logInSign().path)}
  //           >
  //             Log Out
  //           </li>
  //         </div>
  //       </ul>)
  //   } else {
  //     return ( <ul className={menu}>
  //         <div className="lg:flex-grow no-underline ">
  //           <li
  //             className={titleHome}
  //             key={nanoid()}
  //             onClick={handleNav(NavRoutes.home().path)}
  //           >
  //             {NavRoutes.home().text}{" "}
  //           </li>
  //         </div>
  //         <div>
  //           <li
  //             className={buttonOutline}
  //             key={nanoid()}
  //             onClick={handleNav(NavRoutes.logInSign().path)}
  //           >
  //             {NavRoutes.logInSign().text}
  //           </li>
  //         </div>
  //       </ul>)
  //   }
  // }

  return (
    <nav className={navContainer} onClick={() => window.scroll(0, 0)}>
      <div className={logoContainer}>
        <Logo />
      </div>

      <ul className={menu}>
        <div className="">
          <Link className={title} to={NavRoutes.home().path}>
            {NavRoutes.home().text}{" "}
          </Link>
          <Link className={title} to={NavRoutes.events().path}>
            {NavRoutes.events().text}{" "}
          </Link>
          <Link className={title} to={NavRoutes.about().path}>
            {NavRoutes.about().text}{" "}
          </Link>
          <Link className={title} to={NavRoutes.account().path}>
            {NavRoutes.account().text}{" "}
          </Link>
        </div>
        <div>
          <li className={buttonOutline} key={nanoid()}></li>
        </div>
      </ul>
    </nav>
  );
}
