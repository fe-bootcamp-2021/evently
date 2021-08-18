import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Inputs/Input";
import { logIn, signUp } from "../../constants/constants";
import {
  titleLogin,
  inputWrapper,
  emailInput,
  emailPassword,
  emailPassStyle,
  emailPassLabel,
} from "./LoginSign.style";

export let Child = (props) => {
  console.log(props);

  let { setIsLoggedIn } = props;
  const [login, setLogin] = useState(false);
  const [name, setName] = useState(signUp);

  function handleLogin() {
    setName(logIn);
    setLogin(true);
  }
  function handleSign() {
    setName(signUp);
    setLogin(false);
  }

  const handleLoginSignIn = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {login ? (
        <div>
          <h2 className={titleLogin}>{signUp}</h2>
        </div>
      ) : (
        <div>
          <h2 className={titleLogin}>{logIn}</h2>
        </div>
      )}
      <div className={inputWrapper}>
        <div className={emailInput}>
          <div className={emailPassword}>
            <Input
              autocomplete="off"
              id="email"
              name="email"
              type="text"
              className={emailPassStyle}
              placeholder="Email address"
            />
            <label for="email" className={emailPassLabel}>
              Email Address
            </label>
          </div>
          <div className={emailPassword}>
            <Input
              autocomplete="off"
              id="password"
              name="password"
              type="password"
              className={emailPassStyle}
              placeholder="Password"
            />
            <label for="password" className={emailPassLabel}>
              Password
            </label>
          </div>
          {login ? (
            <div className={emailPassword}>
              <span className="underline" onClick={handleSign}>
                {name}
              </span>
              <Button onClick={handleLoginSignIn} name={signUp} />
            </div>
          ) : (
            <div className={emailPassword}>
              <span className="underline" onClick={handleLogin}>
                {name}
              </span>
              <Button onClick={handleLoginSignIn} name={logIn} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
