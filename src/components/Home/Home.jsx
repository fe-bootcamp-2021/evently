import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { useAuth } from "../../contexts/AuthContext";
import { getEvents } from "../../services/event.services";
import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  const { user } = useAuth();
  const userId = user?.uid;
  const [events, setEvents] = useState({});
  const [isAccountVerified, setIsAccountVerified] = useState(
    user.emailVerified
  );

  useEffect(() => {
    getEvents(userId).then((result) => {
      setEvents(result);
    });
  }, []);

  return (
    <div className="h-screen">
      <div className="max-w-lm h-48 inline-block flex flex-col mx-auto bg-white shadow-md items-center ">
        <Navbar />
        <div className="w-9/12">
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-between items-left mb-4">
              <h1 className="text-2xl text-blue-900 mb-4">My Meetings</h1>
              <div className="flex mb-6">
                <Button name="Event Types" variant="link" />
                <Button name="Scheduled Events" variant="link" />
              </div>
            </div>

            <div className="h-36">
              <Dropdown buttonName="Create +" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-9/12 mt-6 mx-auto items-center">
          <div className="grid 2xl:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
            {isAccountVerified
              ? "Congratulations now you can create an Event!"
              : "Please verify your account to create an Event!"}
            {events ? (
              Object.keys(events).map((el) => {
                const { title, minutes, type, color, link } = events[el];
                return (
                  <Card
                    key={nanoid()}
                    title={title}
                    duration={minutes}
                    type={type}
                    color={color}
                    link={link}
                  />
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="-mt-24 w-9/12"></div>
      </div>
    </div>
  );
}
