import { useState } from "react";
import { nanoid } from "nanoid";
import { addOneOnOneEvent } from "../../services/OneOnOne.services/addOneOnOneEvent";
import { ADD_EVENT, ADD_MEMBER, DATE, TIME } from "../../constants/constants";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Navbar from "../Navbar/Navbar";
import Member from "../Member/Member";

export default function MemberShipScheduler() {
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [members, setMembers] = useState([]);

  const eventId = nanoid();

  const addMember = () => {
    if (
      date === undefined ||
      startTime === undefined ||
      endTime === undefined
    ) {
      return;
    }
    let member = { date, startTime, endTime };
    setMembers([...members, member]);
  };

  const addEvent = () => {
    if (members.length === 0) {
      return;
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
  return (
    <div>
      <Navbar />
      <p>Create Your One-on-One event</p>
      <div>
        <Input type={DATE} onChange={handleDate} />
        <Input type={TIME} onChange={handleStartTime} />
        <Input type={TIME} onChange={handleEndTime} />
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
