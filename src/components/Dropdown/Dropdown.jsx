import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import classNames from "classnames/bind";
import Button from "../Button/Button";
import { NavRoutes } from "../../constants/routes";
import { useAuth } from "../../contexts/AuthContext";
import { createButtonStyle, dropDownContainer, li } from "./Dropdown.style";

export default function Dropdown({ buttonName }) {
  const history = useHistory();
  const { user } = useAuth();
  const isDisabled = !user.emailVerified;
  const [show, setShow] = useState(false);

  let showFn = () => {
    setShow(!show);
    return show;
  };

  let dropDownMenu = classNames({
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
      <div className={dropDownContainer}>
        <Button
          disabled={isDisabled}
          name={buttonName}
          onClick={showFn}
          variant=""
          className={createButtonStyle}
        />

        <div className={dropDownMenu}>
          <ul>
            <li className={li} onClick={handlePath(NavRoutes.oneOnOne().path)}>
              One-on-One
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
