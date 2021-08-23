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
import { useAuth } from "../../contexts/AuthContext";

export let Child = (props) => {
  let { setIsLoggedIn } = props;
  const [login, setLogin] = useState(false);
  const [name, setName] = useState(signUp);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { userSignUp, currentUser } = useAuth();

  function handleLogin(event) {
    event.stopPropagation();
    setName(logIn);
    setLogin(true);
  }
  function handleSign(event) {
    event.stopPropagation();
    setName(signUp);
    setLogin(false);
  }

  async function handleSubmit() {
    console.log(1)
    // event.preventDefault();
    setIsLoggedIn(true);

    // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    //   return setError("Passwords do not match");
    // }

    try {
      // setError("");
     
      console.log(email, password);
      await userSignUp(email, password);
    } catch {
      // setError("Failed to create an account");
      console.log('error')
    }
    // setLoading(false);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }

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
              onChange={handleEmail}
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
              onChange={handlePassword}
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
              {/* <span className="underline" onClick={handleSign}>
                {name}
              </span> */}
              <Button onClick={handleSubmit} name={signUp} />
            </div>
          ) : (
            <div className={emailPassword}>
              {/* <span className="underline" onClick={handleLogin}>
                {name}
              </span> */}
              <Button onClick={handleSubmit} name={logIn} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
