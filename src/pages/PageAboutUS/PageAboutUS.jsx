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
      <div>
        <div className="text-center p-10">
          <h2 className="text-5xl text-blue-800 text-center mt-15">
            Plan Your Day Ahead
          </h2>
          <h2 className="mt-8 text-blue-700">
            We will help you schedule meetings on each day.
          </h2>
        </div>
      </div>
      <div
        className="text-3xl text-gray-500 text-center">
        "COME MEETING" will help you better plan your day. We are glad to help
        you.
        <h4 className="not-italic">
          You can arrange group or individual meetings with the help of "COME
          MEETING".
        </h4>
        <h2>Our team believes anything is possible.</h2>
        <br/>
        <h2 className="uppercase text-blue-900 italic  mt-4 text-center text-6xl">Meet the leadership</h2>
      </div>  
      <div className="flex justify-center p-15 mt-4">
        <div className="flex space-x-7">
          <div className="justify-center space-y-3">
            <Avatar className="h-3 w-3 p-20 border-solid border-gray-900 shadow-lg">
              TK
            </Avatar>
            <div className="text-center space-y-1 ">
              <h3> Tigran Khanaghyan</h3>
              <h3> Team brain</h3>
            </div>
          </div>
          <div className="text-center space-y-3">
            <Avatar className="h-3 w-3 p-20 border-solid border-gray-900 shadow-lg">
              AK
            </Avatar>
            <div className="text-center space-y-1">
              <h3> Ani Keshishyan </h3>
              <h3> Team omniscient </h3>
            </div>
          </div>
          <div className="text-center space-y-3">
            <Avatar className="h-3 w-3 p-20 border-solid border-gray-900 shadow-lg">
              HB
            </Avatar>
            <div className="text-center space-y-1">
              <h3> Haik Bazoyan </h3>
              <h3> Team designer</h3>
            </div>
          </div>
          <div className="text-center space-y-3">
            <Avatar className="h-3 w-3 p-20 border-solid border-gray-900 shadow-lg">
              KA
            </Avatar>
            <div className="text-center space-y-1">
              <h3> Karine Asatryan</h3>
              <h3> Our beginner</h3>
            </div>
          </div>
          <div className="text-center space-y-3">
            <Avatar className="h-3 w-3 p-20 border-solid border-gray-900 shadow-lg">
              AH
            </Avatar>
            <div className="text-center space-y-1">
              <h3> Arevik Hayrapetyan </h3>
              <h3> Our sun </h3>
            </div>
          </div>
        </div>
      </div> 
      <AboutUsFooter />
    </div>
  );
};


