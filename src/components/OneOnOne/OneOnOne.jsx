import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { nanoid } from "nanoid";
import { Routes } from "../../constants/routes";
import { isValidEventName, isValidEventLink, isValidAddress } from "../../helpers/validations";
import RadioColors from "../../constants/radioColors";
import { addEvent } from "../../services/event.services";
import EventColors from "../EventColors/EventColors";
import InputCKEditor from "../InputCKEditor/InputCKEditor";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import {
  containerOneOnOne,
  card,
  title,
  eventItems,
  label,
  input,
  errorMessage,
  buttonContainer,
} from "./OneOnOne.style";



export default function OneOnOne() {
  const history = useHistory();
  const [eventName, setEventName] = useState("");
  const [eventLink, setEventLink] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [eventColor, setEventColor] = useState(RadioColors()[0].id);




  const handleNext = () => {
    console.log(111111111111);
    if (isValidEventName(eventName) && isValidEventLink(eventLink) && isValidAddress(location)) {
    //   const eventId = nanoid();
    //   const eventInfo = {
    //     eventId,
    //     description,
    //     location,
    //     title: eventName,
    //     link: eventLink,
    //     color: eventColor,
    //   };
    //   addEvent(eventInfo);
    return history.push(Routes.oneOnOne1().path);
    }
  };

  return (
    <>
      <Navbar />
      <div className={containerOneOnOne}>
        <div className={`${card} px-10`}>
          <h2 className={title}>Add One-on-One Event</h2>
          <div className={eventItems}>
            <label className={label}>Event name *</label>
            <input
              type="text"
              name="name"
              placeholder=" "
              required
              className={input}
              onChange={(ev) => setEventName(ev.target.value)}
            />
            <span className={errorMessage} id="error">
              Event name is required
            </span>
          </div>

          <div className={eventItems}>
            <label className={label}>Location *</label>
            <input
              type="text"
              name="location"
              placeholder=" "
              required
              className={input}
              onChange={(ev) => setLocation(ev.target.value)}
            />
            <span className={errorMessage} id="error">
              Option has to be selected
            </span>
          </div>

          <div className={eventItems}>
            <label className={label}>Event link *</label>
            <input
              type="text"
              name="name"
              placeholder=" "
              required
              className={input}
              onChange={(ev) => setEventLink(ev.target.value)}
            />
            <span className={errorMessage} id="error">
              Event link is required
            </span>
          </div>

          <div className={eventItems}>
            <label className={label}>Description/Instructions</label>
            <div className={description}>
              <InputCKEditor setDescription={setDescription} />
            </div>
          </div>

          <div className={eventItems}>
            <label className={label}>Event color *</label>
            <EventColors selected={eventColor} setSelected={setEventColor} />
            <span className={errorMessage} id="error">
              Option has to be selected
            </span>
          </div>

          <div className={buttonContainer}>
            <Button
              name={`Next >>`}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </>
  );
}
