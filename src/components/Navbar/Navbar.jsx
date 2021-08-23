import React from "react";
import {BrowserRouter as Router , useHistory } from "react-router-dom";
import { nanoid } from "nanoid";
import { NavRoutes } from "../../constants/routes";
import Logo from "../Logo/Logo";
import { titleHome } from "./Navbar.style";

export default function Navbar() {
  const history = useHistory();

  const handleNav = (path) => (ev) => {
    history.push(path);
  };

  return (
    <Router>
      <nav
        className="flex items-center justify-between flex-wrap p-6 border-b-2 border-blue-800"
        onClick={() => window.scroll(0, 0)}
      >
        <div className="flex items-center flex-shrink-0 mr-6 cursor-pointer" onClick={handleNav(NavRoutes.home().path)}>
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
        <ul className="w-full block flex-grow lg:flex lg:items-center lg:w-auto no-underline">
          <div className="lg:flex-grow no-underline ">
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
              className={titleHome}
              key={nanoid()}
              onClick={handleNav(NavRoutes.account().path)}
            >
              {NavRoutes.account().text}
            </li>
          </div>
        </ul>
      </nav>
    </Router>
  );
}
