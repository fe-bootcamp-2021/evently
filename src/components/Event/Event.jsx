import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { nanoid } from "nanoid";
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
} from "./Event.style";

export default function Event() {
  const history = useHistory();
  const { user } = useAuth();
  const [event, setEvent] = useState({});
  const [members, setMembers] = useState([]);
  const [eventColor, setEventColor] = useState(RadioColors()[0].id);

  useEffect(() => {
    const path = history.location.pathname;
    const eventId = path.replace("/event/", "");

    getEvent(eventId).then((result) => {
      const member = result?.member;
      setMembers(member);
      const evtColors = RadioColors().filter((el) => el.id === result?.color);
      const evtColor = evtColors[0]?.classNames;
      setEventColor(evtColor);
      setEvent(result);
    });
  }, []);

  function createMarkup() {
    return { __html: event.description };
  }

  const handleAcceptEvents = () => {
    const path = history.location.pathname;
    const eventId = path.replace("/event/", "");
    const updatedEvent = members.map((el) => {
      if (el.status) return { ...el, isBusy: true };
      return el;
    });
    addEvent({ ...event, member: updatedEvent, eventId });
    window.location.reload(false);
  };

  const chooseEvent = (memberId) => (ev) => {
    ev.stopPropagation();

    const newMembers = members.map((el) => {
      if (memberId === el.id) {
        return { ...el, status: !el.status };
      }
      return el;
    });
    setMembers([...newMembers]);
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
        <div className={`${card} px-10 border-${eventColor}`}>
          <h2 className={title}>{event.title}</h2>
          <div className="m-3">
            <p className="text-blue-800 text-xl mr-2">Description:</p>
            <p className="ml-5">
              <span dangerouslySetInnerHTML={createMarkup()} />
            </p>
            <p className="text-blue-800 text-xl mr-2">Location:</p>
            <p className="ml-5">{event.location}</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {members.map(({ date, startTime, endTime, id, status, isBusy }) => {
              return (
                <Member
                  date={date}
                  startTime={startTime}
                  endTime={endTime}
                  id={id}
                  key={nanoid()}
                  onClick={user ? deleteEvent(id) : chooseEvent(id)}
                  operation={status}
                  isBusy={isBusy}
                />
              );
            })}
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
