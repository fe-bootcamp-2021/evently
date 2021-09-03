import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Image from "../../images/Ellipse96.svg";
import Image2 from "../../images/Ellipse97.svg";

export default function unAuthenticatedApp() {
  return (
    <div>
      <div className="w-9/12 mx-auto flex justify-between items-center justify-center">
        <div className="h-screen flex flex-col items-left justify-center">
          <h1 className="text-6xl text-blue-900">
            Plan Your Day <br /> Ahead
          </h1>
          <h2 className="mt-8 text-blue-900">
            We will help you schedule meetings <br /> on each day.
          </h2>
          <div className="flex mt-4">
            <Input
              type="email"
              autocomplete="on"
              className="w-72 rounded-l-full p-4 border mr-0 text-blue-900 border-blue-900 bg-white outline-none"
              placeholder="Enter Your Email"
            />
            <Button
              name="Sign In"
              className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-full"
              variant="custom"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="rounded-full relative border border-purple-900 w-144 h-144">
            <div className="rounded-full absolute bg-purple-900 ring-4 ring-purple-200 w-7 h-7 bottom-14 right-20"></div>
          </div>
          <div className="rounded-full absolute border border-purple-900 w-108 h-108">
            <div className="rounded-full absolute bg-purple-900 ring-4 ring-purple-200 w-7 h-7 top-0 right-0"></div>
            <div className="rounded-full absolute bg-purple-900 ring-4 ring-purple-200 w-7 h-7 inset-x-6 top-20"></div>
            <div className="rounded-full absolute w-14 h-14 -inset-4">
              <img src={Image} className="-inset-4" alt="" />
            </div>
            <div className="rounded-full absolute w-14 h-14 top-5 right-12">
              <img src={Image2} className="top-5 right-12" alt="" />
            </div>
            <div className="rounded-full absolute w-14 h-14 inset-x-10 bottom-7">
              <img src={Image} className="inset-x-10 bottom-7" alt="" />
            </div>
          </div>
          <div className="rounded-full absolute border border-purple-900 w-72 h-72">
            <div className="rounded-full absolute bg-purple-900 ring-4 ring-purple-200 w-7 h-7 bottom-10 left-4"></div>
            <div className="rounded-full absolute bottom-5 right-2">
              <img src={Image2} className="w-14 h-14" alt="" />
            </div>
          </div>
          <div className="rounded-full absolute border border-purple-900"></div>
          <div className="rounded-full absolute w-28 h-28">
            <img src={Image} className="w-28 h-28" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
