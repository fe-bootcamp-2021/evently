import { useState } from "react";
import Button from '../Button/Button'
import Input from "../Input/Input";
import {
  ADD_EVENT,
  ADD_MEMBER,
  DATE,
  TIME,
  // TEXT,
  // TEL,
  // FIRST_NAME,
  // LAST_NAME,
  // PHONE_NUMBER,
} from '../../constants/constants'
import { addOneOnOneEvent } from "../../services/OneOnOne.services/addOneOnOneEvent";
import { nanoid } from "nanoid";
import Member from "../Member/Member";

export default function MemberShipScheduler() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  // const [firstName, setFirstName] = useState();
  // const [lastName, setLastName] = useState();
  // const [phoneNumber, setPhoneNumber] = useState();
  const [members, setMembers] = useState([]);

  const eventId = nanoid();

  const addMember = () => {
    if (
      date === undefined ||
      startTime === undefined ||
      endTime === undefined
    ) {
      return; // Must be an error
    }
    console.log(1);
    let member = { date, startTime, endTime };
    setMembers([...members, member]);
  };

  const addEvent = () => {
    if (members.length === 0) {
      return; // Must be an error
    }
    addOneOnOneEvent(members, eventId);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };
  const handleStartTime = (event) => {
    setStartTime(event.target.value);
  };
  const handleEndTime = (event) => {
    setEndTime(event.target.value);
  };
  // const handleFirstName = (event) => {
  //   setFirstName(event.target.value);
  // };
  // const handleLastName = (event) => {
  //   setLastName(event.target.value);
  // };
  // const handlePhoneNumber = (event) => {
  //   setPhoneNumber(event.target.value);
  // };
  return (
    <div>
      <p>Create Your One-on-One event</p>
      <div>
        <Input type={DATE} onChange={handleDate} />
        <Input type={TIME} onChange={handleStartTime} />
        <Input type={TIME} onChange={handleEndTime} />
        {/* <Input
          type={TEXT}
          onChange={handleFirstName}
          placeholder={FIRST_NAME}
        />
        <Input type={TEXT} onChange={handleLastName} placeholder={LAST_NAME} />
        <Input
          type={TEL}
          onChange={handlePhoneNumber}
          placeholder={PHONE_NUMBER}
        /> */}
        <Button name={ADD_MEMBER} onClick={addMember} />
        <div>
          {members.map(({ date, startTime, endTime }) => {
            return (
              <>
                <Member date={date} startTime={startTime} endTime={endTime} />
              </>
            );
          })}
          <Button name={ADD_EVENT} onClick={addEvent} />
        </div>
      </div>
    </div>
  );
}
