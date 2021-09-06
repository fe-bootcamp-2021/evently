import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { nanoid } from "nanoid";
import { useAuth } from "../../contexts/AuthContext";
import { NavRoutes } from "../../constants/routes";
import RadioColors from "../../constants/radioColors";
import { getUrl } from "../../helpers/url.helpers";
import {
  isValidEventName,
  isValidEventLink,
  isValidAddress,
} from "../../helpers/validations";
import EventColors from "../EventColors/EventColors";
import Button from "../Button/Button";
import InputCKEditor from "../InputCKEditor/InputCKEditor";
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
  const { user } = useAuth();
  const history = useHistory();
  const [eventName, setEventName] = useState("");
  const [eventLink, setEventLink] = useState("");
  const [userprofile, setUserprofile] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [eventColor, setEventColor] = useState(RadioColors()[0].id);

  const [isValidEvtName, setIsValidEvtName] = useState(true);
  const [isValidEvtLocation, setIsValidEvtLocation] = useState(true);
  const [isValidEvtLink, setIsValidEvtLink] = useState(true);

  useEffect(() => {
    const url = getUrl();
    const userName = user.email.slice(0,user.email.indexOf("@"));
    const eventUrl = `${url}/${userName}/`;
    setUserprofile(eventUrl)
  },[]);


  const handleNext = () => {
    const isValidEvtName = isValidEventName(eventName);
    const isValidEvtLink = isValidEventLink(eventLink);
    const isValidEvtAddress = isValidAddress(location);
    if (isValidEvtName && isValidEvtLink && isValidEvtAddress) {
      const eventId = nanoid();
      const newEventInfo = {
        eventId,
        description,
        location,
        title: eventName,
        link: userprofile + eventLink,
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

  const handleLink = (ev) => {
    const value = ev.target.value;
    isValidEventLink(value)
      ? setIsValidEvtLink(true)
      : setIsValidEvtLink(false);
    setEventLink(value);
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
            <input
              type="text"
              name="name"
              placeholder=" "
              required
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
            <input
              type="text"
              name="location"
              placeholder=" "
              required
              className={input}
              onChange={handleLocation}
            />
            <ErrorMessage
              message="Event location is required"
              isValid={isValidEvtLocation}
            />
          </div>

          <div className={eventItems}>
            <label className={label}>Event link *</label>
            <p className={`${label} mt-3`}>{userprofile}</p>
            <input
              type="text"
              name="name"
              placeholder=" "
              required
              className={input}
              onChange={handleLink}
            />
            <ErrorMessage
              message="Event link is required"
              isValid={isValidEvtLink}
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
            <Button name={`Cancel`} onClick={handleCancel} />
            <Button name={`Next >>`} className="ml-3" onClick={handleNext} />
          </div>
        </div>
      </div>
    </>
  );
}
