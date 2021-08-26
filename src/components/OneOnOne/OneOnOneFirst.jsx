import React, { useState } from "react";
import { nanoid } from "nanoid";
import {
  isValidEventName,
  isValidEventLink,
  isValidAddress,
} from "../../helpers/validations";
import EventColors from "../EventColors/EventColors";
import Button from "../Button/Button";
import InputCKEditor from "../InputCKEditor/InputCKEditor";
import RadioColors from "../../constants/radioColors";
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

export default function OneOnOneFirst({ setFirstPageInfo, setPage }) {
  const [eventName, setEventName] = useState("");
  const [eventLink, setEventLink] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [eventColor, setEventColor] = useState(RadioColors()[0].id);

  const handleNext = () => {
    if (
      isValidEventName(eventName) &&
      isValidEventLink(eventLink) &&
      isValidAddress(location)
    ) {
      const eventId = nanoid();
      const newEventInfo = {
        eventId,
        description,
        location,
        title: eventName,
        link: eventLink,
        color: eventColor,
      };
      setFirstPageInfo(newEventInfo);
      setPage(2);
    }
  };

  return (
    <>
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
            <Button name={`Next >>`} onClick={handleNext} />
          </div>
        </div>
      </div>
    </>
  );
}
