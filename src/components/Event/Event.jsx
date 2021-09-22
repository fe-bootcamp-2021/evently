import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { getEvent, addEvent } from "../../services/event.services";
import RadioColors from "../../constants/radioColors";
import Member from "../Member/Member";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import Loading from "../Loading/Loading";

import {
  container,
  card,
  title,
  buttonSection,
  buttonContainer,
  infoWrapper,
  divContainer,
  description,
  pContainer,
  location,
  eventLocation,
} from "./Event.style";

export default function Event() {
  const history = useHistory();
  const { user } = useAuth();
  const [event, setEvent] = useState({});
  const [members, setMembers] = useState([]);
  const [eventColor, setEventColor] = useState(RadioColors()[0].id);
  // eslint-disable-next-line
  const [errorDates, setErrorDates] = useState(false);

  useEffect(() => {
    const path = history.location.pathname;
    const eventId = path.replace("/event/", "");

    getEvent(eventId).then((result) => {
      const member = result?.member;
      setMembers(member);
      const evtColors = RadioColors().filter((el) => el.id === result?.color);
      const evtColor = evtColors[0]?.borderColor;
      setEventColor(evtColor);
      setEvent(result);
    });
    // eslint-disable-next-line
  }, []);

  function createMarkup() {
    return { __html: event.description };
  }

  const handleAcceptEvents = () => {
    let isValidInfo = true;
    const path = history.location.pathname;
    const eventId = path.replace("/event/", "");
    const updatedEvent = members.map((el) => {
      if (el.status) {
        if (el.memberFirstName !== "" && el.memberLastName !== "") {
          isValidInfo = true;
          return { ...el, isBusy: true };
        } else {
          setErrorDates(true);
          isValidInfo = false;
          return el;
        }
      } else {
        return { ...el, memberFirstName: "", memberLastName: "" };
      }
    });
    if (isValidInfo) {
      addEvent({ ...event, member: updatedEvent, eventId });
      setMembers([...updatedEvent]);
    }
  };

  const deleteEvent = (memberId) => (ev) => {
    ev.stopPropagation();
    const newMembers = members.filter((el) => memberId !== el.id);
    setMembers([...newMembers]);
  };

  if (members.length === 0) {
    return <Loading />;
  }

  return (
    <>
      {user ? <Navbar /> : <></>}
      <div className={container}>
        <div className={`${card} px-10 ${eventColor}`}>
          <h2 className={title}>{event.title}</h2>
          <div className={divContainer}>
            <p className={description}>Description:</p>
            <p className={pContainer}>
              <span dangerouslySetInnerHTML={createMarkup()} />
            </p>
            <p className={location}>Location:</p>
            <p className={eventLocation}>{event.location}</p>
          </div>

          <div className={infoWrapper}>
            {members?members.map(
              ({
                date,
                startTime,
                endTime,
                id,
                status,
                isBusy,
                memberFirstName,
                memberLastName,
              }) => {
                return (
                  // className={infoWrapper}

                  <Member
                    date={date}
                    startTime={startTime}
                    endTime={endTime}
                    id={id}
                    key={id}
                    onClick={deleteEvent(id)}
                    operation={status}
                    isBusy={isBusy}
                    members={members}
                    setMembers={setMembers}
                    memberFirstName={memberFirstName}
                    memberLastName={memberLastName}
                  />
                );
              }
            ):<span>No hours for submit</span>}
          </div>
          <section className={buttonSection}>
            <div className={buttonContainer}>
              <Button
                name={user ? `Save` : `Send`}
                className="ml-3"
                onClick={handleAcceptEvents}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
