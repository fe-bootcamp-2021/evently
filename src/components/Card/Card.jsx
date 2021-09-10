import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { NavRoutes } from "../../constants/routes";
import { isValidEmail } from "../../helpers/validation.helpers";
import RadioColors from "../../constants/radioColors";
import { getUrl } from "../../helpers/url.helpers";
import { COPY_LINK, TEXT } from "../../constants/constants";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {
  cardContainer,
  buttonContainer,
  titleStyle,
  infoButton,
  shareButton,
  modalWindowContainer,
} from "./Card.style";

export default function Card({ title, type, color, id }) {
  const history = useHistory();
  // eslint-disable-next-line
  const [emailValue, setEmailValue] = useState(null);
  const [eventColor, setEventColor] = useState(RadioColors()[0].id);
  const [showModal, setShowModal] = React.useState(false);
  const [isValidEmailValue, setIsValidEmailValue] = useState(true);
  const [eventLink, setEventLink] = useState();

  useEffect(() => {
    const evtColors = RadioColors().filter((el) => el.id === color);
    const evtColor = evtColors[0]?.classNames;
    setEventColor(evtColor);
    // eslint-disable-next-line

    const url = getUrl();
    const eventUrl = `${url}${NavRoutes.event(id).path}`;
    setEventLink(eventUrl);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(eventLink);
  };

  const handleOpenEvent = () => {
    history.push(NavRoutes.event(id).path);
  };

  const handleEmail = (ev) => {
    const value = ev.target.value;
    isValidEmail(value)
      ? setIsValidEmailValue(true)
      : setIsValidEmailValue(false);
    setEmailValue(value);
  };

  return (
    <div>
      <div className={cardContainer(eventColor)}>
        <div className={buttonContainer}>
          <Button variant="custom" />
        </div>
        <div className="mt-4">
          <h1 className={titleStyle} onClick={handleOpenEvent}>
            {title}
          </h1>
          <span className={infoButton}>{type} </span>
          <hr className="mt-8 py-3" />
          <div className={buttonContainer}>
            <Button
              name={COPY_LINK}
              className={shareButton}
              variant="custom"
              onClick={handleCopyLink}
            />
          </div>
        </div>
      </div>
      <Modal
        showModal={showModal}
        body={
          <>
            <input
              type={TEXT}
              name="name"
              placeholder=" "
              required
              className={modalWindowContainer}
              onChange={handleEmail}
            />
            <ErrorMessage
              message="Invalid email address"
              isValid={isValidEmailValue}
            />
          </>
        }
        setShowModal={setShowModal}
        title="Input Email"
      />
    </div>
  );
}
