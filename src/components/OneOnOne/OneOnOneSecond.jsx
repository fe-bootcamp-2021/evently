import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { NavRoutes } from "../../constants/routes";
import { eventTypes } from "../../constants/constants";
import { addEvent } from "../../services/event.services";
import { useAuth } from "../../contexts/AuthContext";
import { formatDate } from "../../helpers/date";
import DataRange from "../DateRange/DateRange";
import Duration from "../Duration/Duration";
import Button from "../Button/Button";
import EventTypeAvailability from "../EventTypeAvailability/EventTypeAvailability";
import {
  containerOneOnOne,
  card,
  buttonContainer,
  sectionDuration,
  availability,
  buttonSection
} from "./OneOnOne.style";

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
      eventType: eventTypes.oneOnOne,
      userId: user.uid,
      createdOn: formatDate(new Date()),
    };

    const eventInfo = Object.assign(setFirstPageInfo, secondPageInfo, event);

    setSecondPageInfo(secondPageInfo);
    try {
      addEvent(eventInfo);
      history.push(NavRoutes.home().path);
    } catch (err) {
      alert(err);
    }
  };

  const handleCancel = () => {
    history.push(NavRoutes.home().path);
  };

  return (
    <>
      <div className={containerOneOnOne}>
        <div className={card}>
          <section className="my-10 px-10">
            <DataRange setDateRangeInfo={setDateRangeInfo} />
          </section>
          <section className={sectionDuration}>
            <Duration setMinutes={setMinutes} minutes={minutes} />
          </section>
          <section className={availability}>
            <EventTypeAvailability />
          </section>
          <section className={buttonSection}>
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
