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

        {/* <div>
          {authenticatedPage()}
        </div> */}

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

              onClick={handleNav(NavRoutes.login().path)}
            >
              {NavRoutes.login().text}

            </li>
          </div>
        </ul>



      </nav>
    </Router>
  );
}
