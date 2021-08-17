import React from "react";
import {
  containerLogin,
  containerBg,
  containerBg2,
  containerBg3,
  containerForm,
  titleSignup,
  inputWrapper,
  emailInput,
  emailPassword,
  emailPassStyle,
  emailPassLabel,
  loginButton,
} from "./Login.style";

export default function SignUp() {
  return (
    <div className={containerLogin}>
      <div className={containerBg}>
        <div className={containerBg2}></div>
        <div className={containerBg3}>
          <div className={containerForm}>
            <div>
              <h1 className={titleSignup}>Sign Up </h1>
            </div>
            <div className={inputWrapper}>
              <div className={emailInput}>
                <div className={emailPassword}>
                  <input
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
                  <input
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
                <div className={emailPassword}>
                  <button className={loginButton}>Sign up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
