import React from "react";
import ReactDOM from "react-dom";
import { Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Logo from "../../components/Logo/Logo";
import AboutUsFooter from "./AboutUsFooter/AboutUsFooter";

export default function PageAboutUS() {
  return (
    <div className="overflow-y-scroll ">
      <div className="max-w-lm inline-block flex flex-col mx-auto bg-white shadow-md">
        <Logo />
      </div>
      <div className="block mt-1 text-lg leading-tight font-bold text-center">
        About us
        <div className="placeholder-blue-500 italic text-2xl text-blue-400 p-50 text-lg extralight font-mono">
          "COME MEETING" will help you better plan your day. We are glad to help
          you.
        </div>
        <h4 className="capitalize not-italic">
          You can arrange group or individual meetings with the help of "COME
          MEETING".
        </h4>
        <h2 className="uppercase text-blue-400 italic">Meet the leadership</h2>
        <h2>Our team believes anything is possible.</h2>
      </div>
      {/* <div className="flex justify-center p-15">
        <div className="flex space-x-7">
          <div className="justify-center space-y-3">
            <Avatar className="h-3 w-3 p-20 border-solid border-gray-900 shadow-lg">
              TK
            </Avatar>
            <div className="justify-center space-y-1">
              <h3> Tigran Khanaghyan</h3>
              <h3> Team brain</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center p-15">
        <div className="flex space-x-7">
          <div className="justify-center space-y-3">
            <Avatar className="h-3 w-3 p-20 border-solid border-gray-900 shadow-lg">
              AK
            </Avatar>
            <div className="justify-center space-y-1">
              <h3> Ani Keshishyan </h3>
              <h3> Team omniscient </h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center p-15">
        <div className="flex space-x-7">
          <div className="justify-center space-y-3">
            <Avatar className="h-3 w-3 p-20 border-solid border-gray-900 shadow-lg">
              HB
            </Avatar>
            <div className="justify-center space-y-1">
              <h3> Haik Bazoyan </h3>
              <h3> Team designer</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center p-15">
        <div className="flex space-x-7">
          <div className="justify-center space-y-3">
            <Avatar className="h-3 w-3 p-20 border-solid border-gray-900 shadow-lg">
              KA
            </Avatar>
            <div className="justify-center space-y-1">
              <h3> Karine Asatryan</h3>
              <h3> Our beginner</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center p-15">
         <div className="flex space-x-7">
          <div className="justify-center space-y-3">
            <Avatar className="h-3 w-3 p-20 border-solid border-gray-900 shadow-lg">
              AH
            </Avatar>
            <div className="justify-center space-y-1">
              <h3> Arevik Hayrapetyan </h3>
              <h3> Our sun </h3>
            </div>
          </div>
          </>div */}
        {/* </div>
        </div>
      <AboutUsFooter /> */}
    </div>
  );
}
