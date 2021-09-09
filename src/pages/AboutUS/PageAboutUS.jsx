import React from "react";
import arev from "../../assets/images/arev.jpg";
import tigran from "../../assets/images/tigran.jpg";
import Navbar from "../../components/Navbar/Navbar";
//import AboutUsFooter from "./AboutUsFooter/AboutUsFooter";
import { Background } from "./Background/Background";
import {
  navContainer,
  planDay,
  about,
  leadership,
  img,
  img1,
} from "./PageAboutUs.style";

export default function PageAboutUS() {
  return (
    <>
      <div className={navContainer}>
        <Navbar />
      </div>
      <div>
        <div className="text-center p-10">
          <h2 className={planDay}>Plan Your Day Ahead</h2>
        </div>
      </div>
      <div className={about}>
        <p>
          "COME MEETING" will help you better plan your day.
          <br /> We are glad to help you. You can arrange group or individual
          meetings with the help of "COME MEETING".
          <br /> Our team believes anything is possible.
        </p>

        <br />
        <h2 className={leadership}>Meet the leadership</h2>
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex space-x-7">
          <div className="text-center space-y-2">
            <img className={img} src={tigran} alt="Tigran Khanaghyan" />
            <div className="text-center">
              <h6>Tigran Khanaghyan</h6>
              <h5>Team brain</h5>
            </div>
          </div>
          <div className="text-center mt-36 space-y-3">
            <img className={img} src={arev} alt="Arevik Hayrapetyan" />
            <div className="text-center">
              <h6> Arev Hayrapetyan </h6>
              <h5> Our sun </h5>
            </div>
          </div>
          <div className="text-center space-y-3">
            <img
              className={img}
              alt="Ani Keshishyan"
              src="https://media-exp1.licdn.com/dms/image/C4E03AQHpP-MVoljhYA/profile-displayphoto-shrink_800_800/0/1627637473431?e=1635379200&v=beta&t=tWXZlbi_hHrgiAF99_vyMIxBwJvylRxp9w41ycxYHkc"
            />
            <div className="text-center">
              <h6> Ani Keshishyan </h6>
              <h5> Team omniscient </h5>
            </div>
          </div>
          <div className="text-center mt-36 space-y-3">
            <img
              alt="Karine Asatryan"
              src="https://media-exp1.licdn.com/dms/image/C5603AQGf3uPM6a_xsw/profile-displayphoto-shrink_400_400/0/1628490914004?e=1635379200&v=beta&t=yy68xuBE2LJpTkRrzzjv_vNwYb8i4h6V-Ak2fDx56qA"
              className={img1}
            />
            <div className="text-center">
              <h6>Karine Asatryan</h6>
              <h5>Our beginner</h5>
            </div>
          </div>
          <div className="text-center space-y-3">
            <img
              className={img}
              src="https://media-exp1.licdn.com/dms/image/C4D03AQHdILyPvPkfOQ/profile-displayphoto-shrink_800_800/0/1615837120168?e=1635379200&v=beta&t=9gRBbPDrl6XfctWU3HCBxMBLr7RNmYEU1NLXpFoXAPs"
              alt="Hayk Bazoyan"
            />
            <div className="text-center">
              <h6>Hayk Bazoyan</h6>
              <h5>Team designer</h5>
            </div>
          </div>
        </div>
      </div>
      <Background />
      {/* <AboutUsFooter /> */}
    </>
  );
}
