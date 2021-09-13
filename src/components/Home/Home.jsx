import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { useAuth } from "../../contexts/AuthContext";
import { getEvents } from "../../services/event.services";
import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import Navbar from "../Navbar/Navbar";
import {
  headContainer,
  myMeeting,
  leftSide,
  subHeader,
  content,
  cardContainer,
  message,
} from "./Home.style";

export default function Home() {
  const { user } = useAuth();
  const userId = user?.uid;
  const [events, setEvents] = useState({});
  const [homeState, setHomeState] = useState(1);
  const isAccountVerified = user.emailVerified;

  useEffect(() => {
    getEvents(userId).then((result) => {
      setEvents(result);
    });
    // eslint-disable-next-line
  }, [homeState]);

  return (
    <div className="h-screen">
      <div className={headContainer}>
        <Navbar />
        <div className="w-9/12">
          <div className={subHeader}>
            <div className={leftSide}>
              <h2 className={myMeeting}>My Meetings</h2>
            </div>

            <div className="h-36">
              <Dropdown buttonName="Create +" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className={content}>
          {events ? (
            <div className={cardContainer}>
              {Object.keys(events).map((el) => {
                const { title, eventType, color, link } = events[el];
                return (
                  <Card
                    key={nanoid()}
                    title={title}
                    type={eventType}
                    color={color}
                    link={link}
                    id={el}
                    userEmail={user.email}
                    homeState={homeState}
                    setHomeState={setHomeState}
                  />
                );
              })}
            </div>
          ) : isAccountVerified ? (
            <div className={message}>
              Congratulations now you can create an Event!
            </div>
          ) : (
            <div className={message}>
              Please verify your account to create an Event!
            </div>
          )}
        </div>
        <div className="-mt-24 w-9/12"></div>
      </div>
    </div>
  );
}
