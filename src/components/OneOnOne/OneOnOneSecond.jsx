import { useState } from "react";
import { useHistory } from "react-router-dom";
import { nanoid } from "nanoid";
import {eventTypes} from "../../constants/constants";
import { NavRoutes } from "../../constants/routes";
import { useAuth } from "../../contexts/AuthContext";
import { addEvent } from "../../services/event.services";
import { formatDate } from "../../helpers/date";
import { ADD_EVENT, ADD_MEMBER, DATE, TIME } from "../../constants/constants";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Member from "../Member/Member";
import {
  containerOneOnOne,
  inputStyle,
  card,
  title,
  buttonSection,
  buttonContainer,
} from "./OneOnOne.style";

export default function OneOnOneSecond({ firstPageInfo }) {
  const { user } = useAuth();
  const history = useHistory();
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [members, setMembers] = useState([]);

  const addMember = () => {
    if (
      date === undefined ||
      startTime === undefined ||
      endTime === undefined
    ) {
      return; // Must be an error
    }

    let member = { date, startTime, endTime, id: nanoid() };
    setMembers([...members, member]);
  };

  const handleAddEvent = () => {
    if (members.length === 0) {
      return; // Must be an error
    }
    const memberInf = JSON.stringify(members);

    const event = {
      userId: user.uid,
      createdOn: formatDate(new Date()),
      member: memberInf,
      eventType:eventTypes.oneOnOne,
    };

    const eventInfo = Object.assign(firstPageInfo, event);

    try {
      addEvent(eventInfo);
      history.push(NavRoutes.home().path);
    } catch (err) {
      alert(err);
    }
  };

  const deleteEvent = (id) => (event) => {
    event.stopPropagation();

    const newMembers = members.filter((el) => el.id !== id);
    setMembers([...newMembers]);
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

    const handleCancel = () => {
    history.push(NavRoutes.home().path);
  };

  return (
    <div className={containerOneOnOne}>
      <div className={`${card} px-10`}>
        <h2 className={title}>Add One-on-One Event</h2>

        <div></div>
        <Input type={DATE} onChange={handleDate} className={inputStyle} />
        <Input type={TIME} onChange={handleStartTime} className={inputStyle} />
        <Input type={TIME} onChange={handleEndTime} className={inputStyle} />
        <Button name={ADD_MEMBER} onClick={addMember} />
        <div className="flex flex-wrap justify-center">
          {members.map(({ date, startTime, endTime, id }) => {
            return (
              <Member
                date={date}
                startTime={startTime}
                endTime={endTime}
                id={id}
                deleteEvent={deleteEvent}
                key={nanoid()}
              />
            );
          })}
          {/* <Button name={ADD_EVENT} onClick={addEvent} /> */}
        </div>

        <section className={buttonSection}>
          <div className={buttonContainer}>
            <Button name={`Cancel`} onClick={handleCancel} />
            <Button name={`Create`} className="ml-3" onClick={handleAddEvent} />
          </div>
        </section>
      </div>
    </div>
  );
}
