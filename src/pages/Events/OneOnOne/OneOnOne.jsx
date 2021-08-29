import { useState } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Inputs/Input";
import {
  ADD_EVENT,
  ADD_MEMBER,
  DATE,
  TIME,
  TEXT,
  TEL,
  FIRST_NAME,
  LAST_NAME,
  PHONE_NUMBER,
} from "../../../constants/constants";

export default function OneOnOneScheduler() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const addEvent = () => {
    if (
      startDate === undefined ||
      endDate === undefined ||
      startTime === undefined ||
      endTime === undefined
    ) {
      return;
    }
    console.log(startDate);
    console.log(endDate);
    console.log(startTime);
    console.log(endTime);
    console.log(firstName);
    console.log(lastName);
    console.log(phoneNumber);
  };

  const handleStartDate = (event) => {
    setStartDate(event.target.value);
  };
  const handleEndDate = (event) => {
    setEndDate(event.target.value);
  };
  const handleStartTime = (event) => {
    setStartTime(event.target.value);
  };
  const handleEndTime = (event) => {
    setEndTime(event.target.value);
  };
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  return (
    <div>
      <p>Create Your One-on-One event</p>
      <div>
        <Input type={DATE} onChange={handleStartDate} />
        <Input type={DATE} onChange={handleEndDate} />
        <Input type={TIME} onChange={handleStartTime} />
        <Input type={TIME} onChange={handleEndTime} />
        <Input
          required={false}
          type={TEXT}
          onChange={handleFirstName}
          placeholder={FIRST_NAME}
        />
        <Input type={TEXT} onChange={handleLastName} placeholder={LAST_NAME} />
        <Input
          type={TEL}
          onChange={handlePhoneNumber}
          placeholder={PHONE_NUMBER}
        />
        <Button name={ADD_MEMBER} onClick={addEvent} />
        <div>
          <Button name={ADD_EVENT} />
        </div>
      </div>
    </div>
  );
}
