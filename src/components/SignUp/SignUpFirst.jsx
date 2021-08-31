import React, { useState } from "react";
import Calendar from "react-calendar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Button from "../Button/Button";
import {
  containerSignUp,
  card,
  title,
  items,
  label,
  input,
  buttonContainer
} from "./SignUp.style";

export default function SignUpFirst() {
  return (
    <>
      <div className={containerSignUp}>
        <div className={`${card} px-10`}>
          <h2 className={title}>Registration</h2>

          <div className={items}>
            <label className={label}>Enter your email to get started *</label>
            <input
              type="text"
              name="name"
              placeholder=" "
              required
              className={input}
            />
            <ErrorMessage message="Email address is required" isValid={false} />
          </div>
          <div className={items}>
            <label className={label}>Password *</label>
            <input
              type="password"
              name="name"
              placeholder=" "
              required
              className={input}
            />
            <ErrorMessage message="First name is required" isValid={false} />
          </div>
          <div className={items}>
            <label className={label}>First Name *</label>
            <input
              type="text"
              name="name"
              placeholder=" "
              required
              className={input}
            />
            <ErrorMessage message="First name is required" isValid={false} />
          </div>
          <div className={items}>
            <label className={label}>Last Name *</label>
            <input
              type="text"
              name="name"
              placeholder=" "
              required
              className={input}
            />
            <ErrorMessage message="Last name is required" isValid={false} />
          </div>
          <div className={items}>
            <label className={label}>Birthday*</label>
            <input
              type="text"
              name="name"
              placeholder=" "
              required
              className={input}
            />
            <ErrorMessage message="Birthday is required" isValid={false} />
            <Calendar className="mt-2" />
          </div>
          <div className={items}>
            <label className={label}>Gender*</label>
            <select className="form-select block w-60 rounded">
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="2">Neutral</option>
            </select>
            <ErrorMessage message="Gender is required" isValid={false} />
          </div>
          <div className={buttonContainer}>
            <Button name={`Next >>`} onClick={console.log(2)} />
          </div>
        </div>
      </div>
    </>
  );
}
