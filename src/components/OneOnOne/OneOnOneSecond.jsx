import { useState } from "react";
import { useHistory } from "react-router-dom";
import { nanoid } from "nanoid";
import { eventTypes } from "../../constants/constants";
import { NavRoutes } from "../../constants/routes";
import { useAuth } from "../../contexts/AuthContext";
import { addEvent } from "../../services/event.services";
import { isValidMemberDates } from "../../helpers/validations";
import { formatDate } from "../../helpers/date";
import { ADD_EVENT, ADD_MEMBER, DATE, TIME } from "../../constants/constants";
import Button from "../Button/Button";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
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
import { checkTime, checkDate } from "../../helpers/validations";

export default function OneOnOneSecond({ firstPageInfo }) {
  const { user } = useAuth();
  const history = useHistory();
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [members, setMembers] = useState([]);

  const [isValidValues, setIsValidValues] = useState(true);
  const [isValidStartTime, setIsValidStartTime] = useState(true);
  const [isValidEndTime, setIsValidEndTime] = useState(true);
  const [isValidDate, setIsValidDate] = useState(true);


  const addMember = () => {
    if (
      date === undefined ||
      startTime === undefined ||
      endTime === undefined
    ) {
      setIsValidValues(false);
      return;
    }


    if (!isValidMemberDates(date, startTime, endTime,members)) return false;


    let member = {
      date,
      startTime,
      endTime,
      id: nanoid(),
      status: false,
      isBusy: false,
    };

    setIsValidValues(true);

    setMembers([...members, member]);
  };

  const handleAddEvent = (ev) => {
  
      if (members.length === 0) {
        return; // Must be an error
      }

      const event = {
        userId: user.uid,
        createdOn: formatDate(new Date()),
        member: members,
        eventType: eventTypes.oneOnOne,
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
    const value = event.target.value;
    checkDate(value) ? setIsValidDate(true) : setIsValidDate(false);
    if (isValidDate === true) {
      setDate(event.target.value);
    }
  };

  const handleStartTime = (event) => {
    const value = event.target.value;
    checkTime(value) ? setIsValidStartTime(true) : setIsValidStartTime(false);

    if (isValidStartTime === true) {
      setStartTime(event.target.value);
    }
  };

  const handleEndTime = (event) => {
    const value = event.target.value;
    checkTime(value) ? setIsValidEndTime(true) : setIsValidEndTime(false);

    if (isValidEndTime === true) {
      setEndTime(event.target.value);
    }
  };

  const handleCancel = () => {
    history.push(NavRoutes.home().path);
  };

  return (
    <div className={containerOneOnOne}>
      <div className={`${card} px-10`}>
        <h2 className={title}>Add One-on-One Event</h2>
        <Input type={DATE} onChange={handleDate} className={inputStyle} />
        <Input type={TIME} onChange={handleStartTime} className={inputStyle} />
        <Input type={TIME} onChange={handleEndTime} className={inputStyle} />
        <Button name={ADD_MEMBER} onClick={addMember} />
        <ErrorMessage message="Select all fields" isValid={isValidValues} />
        <div className="flex flex-wrap justify-center">
          {members.map(({ date, startTime, endTime, id }) => {
            return (
              <Member
                date={date}
                startTime={startTime}
                endTime={endTime}
                onClick={deleteEvent(id)}
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
