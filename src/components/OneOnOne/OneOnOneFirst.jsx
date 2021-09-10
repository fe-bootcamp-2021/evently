import React, { useState, } from "react";
import { useHistory } from "react-router-dom";
import { nanoid } from "nanoid";
import { NavRoutes } from "../../constants/routes";
import RadioColors from "../../constants/radioColors";
import { next, cancel } from "../../constants/constants";
import { isValidEventName, isValidAddress } from "../../helpers/validation.helpers";
import EventColors from "../EventColors/EventColors";
import Button from "../Button/Button";
import InputCKEditor from "../InputCKEditor/InputCKEditor";
import Input from "../Input/Input";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {
  containerOneOnOne,
  card,
  title,
  eventItems,
  label,
  input,
  buttonContainer,
} from "./OneOnOne.style";

export default function OneOnOneFirst({ setFirstPageInfo, setPage }) {
  const history = useHistory();
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [eventColor, setEventColor] = useState(RadioColors()[0].id);

  const [isValidEvtName, setIsValidEvtName] = useState(true);
  const [isValidEvtLocation, setIsValidEvtLocation] = useState(true);
  const [isValidEvtLink, setIsValidEvtLink] = useState(true);

  const handleNext = () => {
    const isValidEvtName = isValidEventName(eventName);
    const isValidEvtAddress = isValidAddress(location);
    if (isValidEvtName && isValidEvtLink && isValidEvtAddress) {
      const eventId = nanoid();
      const newEventInfo = {
        eventId,
        description,
        location,
        title: eventName,
        color: eventColor,
      };
      setFirstPageInfo(newEventInfo);
      setPage(2);
    } else {
      isValidEvtName ? setIsValidEvtName(true) : setIsValidEvtName(false);
      isValidEvtLink ? setIsValidEvtLink(true) : setIsValidEvtLink(false);
      isValidEvtAddress
        ? setIsValidEvtLocation(true)
        : setIsValidEvtLocation(false);
    }
  };

  const handleEventName = (ev) => {
    const value = ev.target.value;
    isValidEventName(value)
      ? setIsValidEvtName(true)
      : setIsValidEvtName(false);
    setEventName(value);
  };

  const handleLocation = (ev) => {
    const value = ev.target.value;
    isValidAddress(value)
      ? setIsValidEvtLocation(true)
      : setIsValidEvtLocation(false);
    setLocation(value);
  };

  const handleCancel = () => {
    history.push(NavRoutes.home().path);
  };

  return (
    <>
      <div className={containerOneOnOne}>
        <div className={`${card} px-10`}>
          <h2 className={title}>Add One-on-One Event</h2>
          <div className={eventItems}>
            <label className={label}>Event name *</label>
            <Input
              type="text"
              placeholder={" "}
              required="required"
              className={input}
              onChange={handleEventName}
            />
            <ErrorMessage
              message="Event name is required"
              isValid={isValidEvtName}
            />
          </div>

          <div className={eventItems}>
            <label className={label}>Location *</label>
            <Input
              type="text"
              name="location"
              placeholder={" "}
              required="required"
              className={input}
              onChange={handleLocation}
            />
            <ErrorMessage
              message="Event location is required"
              isValid={isValidEvtLocation}
            />
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
          </div>
          <div className={buttonContainer}>
            <Button name={cancel} onClick={handleCancel} />
            <Button name={next} className="ml-3" onClick={handleNext} />
          </div>
        </div>
      </div>
    </>
  );
}
