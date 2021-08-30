import React from "react";
import Logo from "../../components/Logo/Logo";
import AboutUsFooter from "./AboutUsFooter/AboutUsFooter";
import { Background } from "../Background/Background";
import arev from "../../assets/images/arev.jpg";
import tigran from "../../assets/images/tigran.jpg";

export default function PageAboutUS() {
  return (
    <div className="overflow-y-scroll ">
      <div className="max-w-lm inline-block flex flex-col mx-auto bg-white shadow-md">
        <Logo />
      </div>
      <div>
        <div className="text-center p-10">
          <h2 className="text-5xl text-blue-900 text-center mt-15">
            Plan Your Day Ahead
          </h2>
        </div>
      </div>
      <div className="mx-auto text-blue-900 text-center">
        <p>
          "COME MEETING" will help you better plan your day.
          <br /> We are glad to help you. You can arrange group or individual
          meetings with the help of "COME MEETING".
          <br /> Our team believes anything is possible.
        </p>

        <br />
        <h2 className="uppercase text-blue-900 mt-15 space-y-15 text-center text-4xl">
          Meet the leadership
        </h2>
      </div>

      <div className="flex justify-center  mt-8">
        <div className="flex space-x-7">
          <div className="text-center space-y-2">
            <img
              className="inline-block h-24 w-24 rounded-full ring-3 ring-white "
              src={tigran}
              alt="Tigran Khanaghyan"
            />
            <div className="text-center">
              <h6>Tigran Khanaghyan</h6>
              <h5>Team brain</h5>
            </div>
          </div>
          <div className="text-center mt-36 space-y-3">
            <img
              className="inline-block h-24 w-24 rounded-full ring-3 ring-white "
              src={arev}
              alt="Arevik Hayrapetyan"
            />
            <div className="text-center">
              <h3> Arev Hayrapetyan </h3>
              <h3> Our sun </h3>
            </div>
          </div>
          <div className="text-center space-y-3">
            <img
              className="inline-block h-24 w-24 rounded-full ring-3 ring-white "
              alt="Ani Keshishyan"
              src="https://media-exp1.licdn.com/dms/image/C4E03AQHpP-MVoljhYA/profile-displayphoto-shrink_800_800/0/1627637473431?e=1635379200&v=beta&t=tWXZlbi_hHrgiAF99_vyMIxBwJvylRxp9w41ycxYHkc"
            />
            <div className="text-center">
              <h3> Ani Keshishyan </h3>
              <h3> Team omniscient </h3>
            </div>
          </div>
          <div className="text-center mt-36 space-y-3">
            <img
              alt="Karine Asatryan"
              src="https://media-exp1.licdn.com/dms/image/C5603AQGf3uPM6a_xsw/profile-displayphoto-shrink_400_400/0/1628490914004?e=1635379200&v=beta&t=yy68xuBE2LJpTkRrzzjv_vNwYb8i4h6V-Ak2fDx56qA"
              className="inline-block h-24 w-24 rounded-full ring-3 ring-white"
            />
            <div className="text-center">
              <h5>Karine Asatryan</h5>
              <h5>Our beginner</h5>
            </div>
          </div>
          <div className="text-center space-y-3">
            <img
              className="inline-block h-24 w-24 rounded-full ring-3 ring-white "
              src="https://media-exp1.licdn.com/dms/image/C4D03AQHdILyPvPkfOQ/profile-displayphoto-shrink_800_800/0/1615837120168?e=1635379200&v=beta&t=9gRBbPDrl6XfctWU3HCBxMBLr7RNmYEU1NLXpFoXAPs"
              alt="Hayk Bazoyan"
            />
            <div className="text-center">
              <h5>Hayk Bazoyan</h5>
              <h5>Team designer</h5>
            </div>
          </div>
        </div>
      </div>
      <Background />
      <AboutUsFooter />
    </div>
  );
}
