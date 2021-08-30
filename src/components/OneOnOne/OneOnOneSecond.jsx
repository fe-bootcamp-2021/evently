import React, { useState } from "react";
import DataRange from "../DateRange/DateRange";
import Duration from "../Duration/Duration";
import Button from "../Button/Button";
import EventTypeAvailability from "../EventTypeAvailability/EventTypeAvailability";
import { containerOneOnOne, card, buttonContainer } from "./OneOnOne.style";
import { addEvent } from "../../services/event.services";

export default function OneOnOneSecond({setFirstPageInfo, setSecondPageInfo }) {
  const [dateRangeInfo, setDateRangeInfo] = useState({});
  const [minutes, setMinutes] = useState(60);

  const handleNext = () => {
    setSecondPageInfo({ dateRange: dateRangeInfo, minutes });
    const eventInfo = Object.assign(setFirstPageInfo,{ dateRange: dateRangeInfo, minutes ,userId:""});
    
    addEvent(eventInfo);
  };

  return (
    <>
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
              <Button name={`Cancel`} onClick={console.log(1)} />
              <Button name={`Next >>`} className="ml-3" onClick={handleNext} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
