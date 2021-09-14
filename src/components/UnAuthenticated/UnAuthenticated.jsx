import React from "react";
import { Link } from "react-router-dom";
import Image from "../../images/Ellipse96.svg";
import Image2 from "../../images/Ellipse97.svg";
import { Routes } from "../../constants/routes";
import { logIn, signUp } from "../../constants/constants";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import {
  container,
  contentContainer,
  nav,
  leftSide,
  rightSide,
  circle1,
  circle2,
  circle3,
  circle4,
  circle5,
  circleMin1,
  circleMin2,
  circleMin3,
  circleMin4,
  imgDiv1,
  imgDiv2,
  imgDiv3,
  imgDiv4,
  imgDiv5,
  circle6,
  buttonStyle,
  input
} from "./UnAuthenticated.style";
import Input from "../Input/Input";


export default function UnAuthenticatedApp() {

  const {signInWithGmail} = useAuth()

  const handleClick = () => {
    return signInWithGmail()
  }

  return (
    <>
      <div className={container}>
        <div className={nav}>
          <div className="w-1/3 flex items-center pl-5">
            <Logo />
          </div>
          <div className="w-2/3 flex justify-end">
            <Link to={Routes.login().path}>
              <Button name={logIn} variant="buttonOutline" className="m-1" />
            </Link>
            <Link to={Routes.signup().path}>
              <Button
                name={signUp}
                variant="buttonOutline"
                className="m-2 mr-5"
              />
            </Link>
          </div>
        </div>
        <div className={contentContainer}>
          <div className={leftSide}>
            <h2 className="text-6xl text-blue-900">
              Plan Your Day <br /> Ahead
            </h2>
            <h2 className="mt-8 text-blue-900">
              We will help you schedule meetings <br /> on each day.
            </h2>
            <div className="flex mt-4">
              <Input
                type="email"
                className={input}
                placeholder="Enter Your Email"
              />
              <Button name={logIn} className={buttonStyle} onClick={handleClick} variant="custom" />
            </div>
          </div>

          <div className={rightSide}>
            <div className={circle1}>
              <div className={circleMin1}></div>
            </div>
            <div className={circle2}>
              <div className={imgDiv1}>
                <img src={Image} className="-inset-4" alt="" />
              </div>
              <div className={imgDiv2}>
                <img src={Image2} className="top-5 right-12" alt="" />
              </div>
              <div className={imgDiv3}>
                <img src={Image} className="inset-x-10 bottom-7" alt="" />
              </div>
            </div>
            <div className={circle3}>
              <div className={circleMin2}></div>
              <div className={circleMin3}></div>
            </div>

            <div className={circle4}>
              <div className={imgDiv4}>
                <img src={Image2} className="w-14 h-14" alt="" />
              </div>
            </div>
            <div className={circle5}>
              <div className={circleMin4}></div>
            </div>

            <div className={circle6}></div>
            <div className={imgDiv5}>
              <img src={Image} className="w-28 h-28" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
