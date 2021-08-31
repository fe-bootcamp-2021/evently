import React, { useState } from "react"; 
import Button from "../Button/Button";
import {
  containerSignUp,
  card,
  title,
  items,
  label,
  input,
  buttonContainer,
} from "./SignUp.style";

export default function SignUpFirst() {
  return (
    <>
      <div className={containerSignUp}>
        <div className={`${card} px-10`}>
          <h2 className={title}>Registration</h2>
          <div className={items}>
            <label className={label}>Working Days *</label>
            <div className="flex flex-wrap justify-center">
              <div className="m-5">
                <p>SUN</p>
                <input type="checkbox" className="m-3" />
              </div>
              <div className="m-5">
                <p>MON</p>
                <input type="checkbox" className="m-3" />
              </div>
              <div className="m-5">
                <p>TUE</p>
                <input type="checkbox" className="m-3" />
              </div>
              <div className="m-5">
                <p>WED</p>
                <input type="checkbox" className="m-3" />
              </div>
              <div className="m-5">
                <p>THU</p>
                <input type="checkbox" className="m-3" />
              </div>
              <div className="m-5">
                <p>FRI</p>
                <input type="checkbox" className="m-3" />
              </div>
              <div className="m-5">
                <p>SAT</p>
                <input type="checkbox" className="m-3" />
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center mt-10">
              <div>
                <p className={label}>Start hours *</p>

                <input
                  type="text"
                  placeholder="hh:mm"
                  required
                  className="w-80px"
                />
              </div>

              <div className="mx-4 font-bold text-4xl"> - </div>
              <div>
                <p className={label}>End Hours *</p>

                <input
                  type="text"
                  placeholder="hh:mm"
                  required
                  className="w-80px"
                />
              </div>
            </div>
          </div>
          <div className={buttonContainer}>
            <Button name={`Next >>`} onClick={console.log(2)} />
          </div>
        </div>
      </div>
    </>
  );
}
