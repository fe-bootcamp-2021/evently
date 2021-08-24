import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import classNames from "classnames/bind";
import Button from "../Button/Button";
import { Routes } from "../../constants/routes";
import { li } from "./Dropdown.style";

export default function Dropdown({buttonName}) {
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
    hidden: !show,
    block: show,
  });

  const handlePath = (path) => (ev) => {
    history.push(path);
  };

  return (
    <div>
      <div className="flex flex-col justify-end">
        <Button
          name={buttonName}
          onClick={showFn}
          variant=""
          className="mt-4 border-0 block bg-blue-800 hover:bg-blue-600 text-white font-bold rounded-full px-11 py-3 overflow-hidden focus:outline-none focus:border-white"
        />

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

