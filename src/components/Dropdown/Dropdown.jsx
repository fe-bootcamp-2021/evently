import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import classNames from "classnames/bind";
import { Routes } from "../../constants/routes";
import { li } from "./Dropdown.style";

export default function Dropdown() {
  const history = useHistory();
  const [show, setShow] = useState(false);

  let showFn = () => {
    setShow(!show);
    return show;
  };

  let dropDownMenu = classNames({
    "w-44 ": true,
    "rounded-lg": true,
    "bg-white": true,
    "shadow-xl": true,
    hidden: show,
    block: !show,
  });

  const handlePath = (path) => (ev) => {
    history.push(path);
  };

  return (
    <div>
      <div>
        <button
          onClick={showFn}
          className="mt-4 border-0 block bg-blue-600 bg-blue-600 text-gray-200 rounded-lg px-6 text-sm py-3 overflow-hidden focus:outline-none focus:border-white"
        >
          <div className="flex justify-between">
            <span>Dashboard</span>
            <svg
              className="fill-current text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M7 10l5 5 5-5z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </div>
        </button>

        <div className={dropDownMenu}>
          <ul>
            <li className={li} onClick={handlePath(Routes.oneOnOne().path)}>
              One-on-One
            </li>
            <li className={li} onClick={handlePath(Routes.group().path)}>
              Group Meeting
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
