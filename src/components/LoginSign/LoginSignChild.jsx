import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { logIn, signUp } from "../../constants/constants";
import { useAuth } from "../../contexts/AuthContext";
import { Routes } from "../../constants/routes";
import Button from "../Button/Button";
import Input from "../Inputs/Input";
import {
  titleLogin,
  inputWrapper,
  emailInput,
  emailPassword,
  emailPassStyle,
  emailPassLabel,
  buttonContainer,
} from "./LoginSign.style";

export let Child = (props) => {
  const history = useHistory();
  const { signin } = useAuth();
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
        history.push(Routes.home().path);
      })
      .catch((e) => alert(e.message));
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
              id="email"
              name="email"
              type="text"
              className={emailPassStyle}
              placeholder="Email address"
            />
            <label className={emailPassLabel}>Email Address</label>
          </div>
          <div className={emailPassword}>
            <Input
              onChange={handlePassword}
              id="password"
              name="password"
              type="password"
              className={emailPassStyle}
              placeholder="Password"
            />
            <label className={emailPassLabel}>Password</label>
          </div>
          <div>
            <span
              className="underline text-custom-current hover:text-purple-700 cursor-pointer"
              onClick={handleSign}
            >
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
