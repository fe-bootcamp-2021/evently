import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  EMAIL,
  EMAIL_ADDRESS,
  logIn,
  PASSWORD,
  signUp,
  TEXT,
} from "../../constants/constants";
import { useAuth } from "../../contexts/AuthContext";
import { NavRoutes, Routes } from "../../constants/routes";
import Button from "../Button/Button";
import Input from "../Input/Input";
import {
  titleLogin,
  inputWrapper,
  emailInput,
  emailPassword,
  emailPassStyle,
  emailPassLabel,
  buttonContainer,
  signUpStyle,
} from "./LoginSign.style";

export let Child = () => {
  const history = useHistory();
  const { signin, loginWithGmail } = useAuth();
  const [name, setName] = useState(signUp);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSign(event) {
    event.stopPropagation();
    setName(signUp);
    history.push(Routes.signup().path);
  }

  const handleSignIn = () => {
    return signin(email, password)
      .then((res) => {
        res(history.push(NavRoutes.home().path));
      })
      .catch(() => {
        history.push(NavRoutes.home().path);
        loginWithGmail();
      });
  };

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <>
      <div>
        <h2 className={titleLogin}>{logIn}</h2>
      </div>
      <div className={inputWrapper}>
        <div className={emailInput}>
          <div className={emailPassword}>
            <Input
              onChange={handleEmail}
              id={EMAIL}
              name={EMAIL}
              type={TEXT}
              className={emailPassStyle}
              placeholder={EMAIL_ADDRESS}
            />
            <label className={emailPassLabel}>Email Address</label>
          </div>
          <div className={emailPassword}>
            <Input
              onChange={handlePassword}
              id={PASSWORD}
              name={PASSWORD}
              type={PASSWORD}
              className={emailPassStyle}
              placeholder={PASSWORD}
            />
            <label className={emailPassLabel}>Password</label>
          </div>
          <div>
            <span className={signUpStyle} onClick={handleSign}>
              {name}
            </span>
          </div>
          <div className={emailPassword}>
            <div className={buttonContainer}>
              <Button onClick={handleSignIn} name={logIn} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
