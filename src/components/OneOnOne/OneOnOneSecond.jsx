import React, { useState } from "react";
import DataRange from "../DateRange/DateRange";
import Duration from "../Duration/Duration";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import EventTypeAvailability from "../EventTypeAvailability/EventTypeAvailability";
import { containerOneOnOne, card, buttonContainer } from "./OneOnOne.style";

export const DateSecondPageInfo = React.createContext();

export default function OneOnOneSecond() {
  const [pageInfo,setPageInfo] = useState({});

  return (
    <DateSecondPageInfo.Provider value={pageInfo}>
      <>
        <Navbar />
        <div className={containerOneOnOne}>
          <div className={card}>
            <section className="my-10 px-10">
              <DataRange setDateRange={setPageInfo}/>
            </section>
            <section className="my-10 px-10 pt-10 border-t-2 border-fuchsia-600">
              <Duration />
            </section>
            <section className="my-10 px-10 pt-10 border-t-2 border-fuchsia-600">
              <EventTypeAvailability />
            </section>
            <section className="my-10 px-10 pt-10 border-t-2 border-fuchsia-600">
              <div className={buttonContainer}>
                <Button name={`Cancel`} onClick={console.log(1)} />
                <Button
                  name={`Next >>`}
                  className="ml-3"
                  onClick={console.log(1)}
                />
              </div>
            </section>
          </div>
        </div>
      </>
    </DateSecondPageInfo.Provider>
  );
}
