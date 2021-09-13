import React, { useState } from "react";
import Calendar from "react-calendar";
import {
  isValidEmail,
  isValidPassword,
  isEmptyString,
} from "../../helpers/validation.helpers";
import { convertDateToString, formatDate } from "../../helpers/date.helpers.";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Button from "../Button/Button";
import Input from "../Input/Input";
import {
  containerSignUp,
  card,
  title,
  items,
  label,
  input,
  buttonContainer,
} from "./SignUp.style";

export default function SignUpFirst({ setFirstPageInfo, setPage }) {
  const [emailValue, setEmailValue] = useState(null);
  const [passwordValue, setPasswordValue] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState({ selectedDate: "" });
  const [birthdayString, setBirthdayString] = useState("");
  const [gender, setGender] = useState(1);

  const [isValidEmailValue, setIsValidEmailValue] = useState(true);
  const [isValidPasswordValue, setIsValidPasswordValue] = useState(true);
  const [isValidFirstName, setIsValidFirstName] = useState(true);
  const [isValidLastName, setIsValidLastName] = useState(true);
  const [isValidBirthday, setIsValidBirthday] = useState(true);
  const [isCalendar, setIsCalendar] = useState(false);

  const handleEmail = (ev) => {
    const value = ev.target.value;
    isValidEmail(value)
      ? setIsValidEmailValue(true)
      : setIsValidEmailValue(false);
    setEmailValue(value);
  };

  const handlePassword = (ev) => {
    const value = ev.target.value;
    isValidPassword(value)
      ? setIsValidPasswordValue(true)
      : setIsValidPasswordValue(false);
    setPasswordValue(value);
  };

  const handleFirstName = (ev) => {
    const value = ev.target.value;
    isEmptyString(value)
      ? setIsValidFirstName(true)
      : setIsValidFirstName(false);
    setFirstName(value);
  };

  const handleLastName = (ev) => {
    const value = ev.target.value;
    isEmptyString(value) ? setIsValidLastName(true) : setIsValidLastName(false);
    setLastName(value);
  };

  const handleBirthday = (ev) => {
    setIsCalendar(!isCalendar);
  };

  const handleDate = (date) => {
    setBirthday({ selectedDate: date });
    setBirthdayString(convertDateToString(date));
    setIsCalendar(false);
    isEmptyString(convertDateToString(date))
      ? setIsValidBirthday(true)
      : setIsValidBirthday(false);
  };

  const handleNext = () => {
    const isValidEmailVal = isValidEmail(emailValue);
    const isValidPasswordVal = isValidPassword(passwordValue);
    const isValidFirstNm = isEmptyString(firstName);
    const isValidLastNm = isEmptyString(lastName);
    const isValidBirthdayVal = isEmptyString(birthdayString);

    if (
      isValidEmailVal &&
      isValidPasswordVal &&
      isValidFirstNm &&
      isValidLastNm &&
      isValidBirthdayVal
    ) {
      const personInfo = {
        email: emailValue,
        password: passwordValue,
        firstName,
        lastName,
        birthday: formatDate(birthday.selectedDate),
        gender,
      };
      setFirstPageInfo(personInfo);
      setPage(2);
    } else {
      isValidEmailVal
        ? setIsValidEmailValue(true)
        : setIsValidEmailValue(false);
      isValidPasswordVal
        ? setIsValidPasswordValue(true)
        : setIsValidPasswordValue(false);
      isValidFirstNm ? setIsValidFirstName(true) : setIsValidFirstName(false);
      isValidLastNm ? setIsValidLastName(true) : setIsValidLastName(false);
      isValidBirthdayVal ? setIsValidBirthday(true) : setIsValidBirthday(false);
    }
  };

  return (
    <>
      <div className={containerSignUp}>
        <div className={`${card} px-10`}>
          <h2 className={title}>Registration</h2>
          <div className={items}>
            <label className={label}>Enter your email to get started *</label>
            <Input
              type="text"
              placeholder=" "
              required="required"
              className={input}
              onChange={handleEmail}
            />
            <ErrorMessage
              message="Invalid email address"
              isValid={isValidEmailValue}
            />
          </div>
          <div className={items}>
            <label className={label}>Password *</label>
            <Input
              type="password"
              placeholder=" "
              required="required"
              className={input}
              onChange={handlePassword}
            />
            <ErrorMessage
              message="Password should be minimum eight characters, at least one letter and one number"
              isValid={isValidPasswordValue}
            />
          </div>
          <div className={items}>
            <label className={label}>First Name *</label>
            <Input
              type="text"
              placeholder=" "
              onChange={handleFirstName}
              className={input}
              required="required"
            />

            <ErrorMessage
              message="First name is required"
              isValid={isValidFirstName}
            />
          </div>
          <div className={items}>
            <label className={label}>Last Name *</label>
            <Input
              type="text"
              placeholder=" "
              onChange={handleLastName}
              required="required"
              className={input}
            />
            <ErrorMessage
              message="Last name is required"
              isValid={isValidLastName}
            />
          </div>
          <div className={items}>
            <label className={label}>Birthday*</label>
            <Input
              type="text"
              placeholder=" "
              required="required"
              className={input}
              value={birthdayString}
              onClick={handleBirthday}
              onChange={() => setBirthdayString(birthdayString)}
            />
            <ErrorMessage
              message="Birthday is required"
              isValid={isValidBirthday}
            />
            <Calendar
              className={`mt-2 w-80 border p-2 ${isCalendar ? "" : "hidden"}`}
              onChange={handleDate}
            />
          </div>
          <div className={items}>
            <label className={label}>Gender*</label>
            <select
              className="form-select block w-60 rounded"
              onChange={(ev) => setGender(ev.target.value)}
            >
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Neutral</option>
            </select>
          </div>
          <div className={buttonContainer}>
            <Button name={`Next >>`} onClick={handleNext} />
          </div>
        </div>
      </div>
    </>
  );
}
