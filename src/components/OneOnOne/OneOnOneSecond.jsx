import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Routes } from "../../constants/routes";
import { addEvent } from "../../services/event.services";
import { useAuth } from "../../contexts/AuthContext";
import DataRange from "../DateRange/DateRange";
import Duration from "../Duration/Duration";
import Button from "../Button/Button";
import EventTypeAvailability from "../EventTypeAvailability/EventTypeAvailability";
import { containerOneOnOne, card, buttonContainer } from "./OneOnOne.style";

export default function OneOnOneSecond({
  setFirstPageInfo,
  setSecondPageInfo,
}) {
  const history = useHistory();
  const { user } = useAuth();
  const [dateRangeInfo, setDateRangeInfo] = useState({});
  const [minutes, setMinutes] = useState(60);
 

  const handleNext = () => {
    const secondPageInfo = { dateRange: dateRangeInfo, minutes };
    const event = {
      eventType: "One-on-One",
      userId: user.uid,
      cratedOn: new Date()
    };

    const eventInfo = Object.assign(setFirstPageInfo, secondPageInfo,event);
    console.log(eventInfo);
    setSecondPageInfo(secondPageInfo);
    try {
      addEvent(eventInfo);
      history.push(Routes.home().path);
    } catch (err) {
      alert(err);
    }
  };

  const handleCancel = () => {
    history.push(Routes.home().path);
  };

  return (
    <>
      {console.log(user)}
      <div className={containerOneOnOne}>
        <div className={card}>
          <section className="my-10 px-10">
            <DataRange setDateRangeInfo={setDateRangeInfo} />
          </section>
          <section className="my-10 px-10 pt-10 border-t-2 border-fuchsia-600">
            <Duration setMinutes={setMinutes} minutes={minutes} />
          </section>
          <section className="my-10 px-10 pt-10 border-t-2 border-fuchsia-600">
            <EventTypeAvailability />
          </section>
          <section className="my-10 px-10 pt-10 border-t-2 border-fuchsia-600">
            <div className={buttonContainer}>
              <Button name={`Cancel`} onClick={handleCancel} />
              <Button name={`Create`} className="ml-3" onClick={handleNext} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
