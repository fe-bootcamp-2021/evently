import React from "react";
import { Link } from "react-router-dom";
import Button from "../LoginSignButtons.jsx/LoginSignButtons";
import Input from "../Inputs/Input";
import {
  titleLogin,
  inputWrapper,
  emailInput,
  emailPassword,
  emailPassStyle,
  emailPassLabel,
} from "./Login.style";

export let Child = () => {
  let login = false;
  let name = null;
  function handleLogin() {
    name = "Login";
    login = true;
  }
  function handleSign() {
    name = "Sign Up";
    login = false;
  }

  return (
    <>
      {login ? (
        <div>
          <h1 className={titleLogin}>Sign Up</h1>
        </div>
      ) : (
        <div>
          <h1 className={titleLogin}>Login</h1>
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
              <Button onclick={handleSign}>{name}</Button>
              <span onclick={handleLogin}>{name}</span>
            </div>
          ) : (
            <div className={emailPassword}>
              <Button onclick={handleLogin}>{name}</Button>
              <span onclick={handleSign}>{name}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
