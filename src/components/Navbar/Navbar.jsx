import React from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { nanoid } from "nanoid";
import { NavRoutes } from "../../constants/routes";
import { useAuth } from "../../contexts/AuthContext"; //
import Logo from "../Logo/Logo";
import { buttonOutline, titleHome, navContainer, logoContainer, menu } from "./Navbar.style";

export default function Navbar() {
  const history = useHistory();

  const handleNav = (path) => (ev) => { console.log(path)
    history.push(path);
  };

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
    <Router>
      <nav className={navContainer} onClick={() => window.scroll(0, 0)}>
        <div
          className={logoContainer}
          onClick={handleNav(NavRoutes.home().path)}
        >
          <Logo />
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div>
          {/* {authenticatedPage()} */}
        </div>

        <ul className={menu}>
          <div className="">
            <li
              className={titleHome}
              key={nanoid()}
              onClick={handleNav(NavRoutes.home().path)}
            >
              {NavRoutes.home().text}{" "}
            </li>
          </div>
          <div>
            <li
              className={buttonOutline}
              key={nanoid()}
              onClick={handleNav(NavRoutes.logInSign().path)}
            >
              {NavRoutes.logInSign().text}
            </li>
          </div>
        </ul>



      </nav>
    </Router>
  );
}
