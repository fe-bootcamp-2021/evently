import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { NavRoutes } from "../../constants/routes";
import { isValidEmail } from "../../helpers/validation.helpers";
import { deleteEvent } from "../../services/event.services";
import RadioColors from "../../constants/radioColors";
import { getUrl } from "../../helpers/url.helpers";
import { COPY_LINK, TEXT, SHARE } from "../../constants/constants";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Input from "../Input/Input";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { DeleteIcon } from "../Icons/Icons";
import {
  cardContainer,
  buttonContainer,
  titleStyle,
  infoButton,
  shareButton,
  copyLinkButton,
  modalWindowContainer,
} from "./Card.style";

export default function Card({
  title,
  type,
  color,
  id,
  userEmail,
  homeState,
  setHomeState,
}) {
  const history = useHistory();
  // eslint-disable-next-line
  const [emailValue, setEmailValue] = useState(null);
  const [eventColor, setEventColor] = useState(RadioColors()[0].id);
  const [showModal, setShowModal] = React.useState(false);
  const [isValidEmailValue, setIsValidEmailValue] = useState(true);
  const [eventLink, setEventLink] = useState();

  useEffect(() => {
    const evtColors = RadioColors().filter((el) => el.id === color);
    const evtColor = evtColors[0]?.borderColor;
    setEventColor(evtColor);
    
    const url = getUrl();
    const eventUrl = `${url}${NavRoutes.event(id).path}`;
    setEventLink(eventUrl);
    // eslint-disable-next-line
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
  async function handleDelete() {
    await deleteEvent(id);
    setHomeState(homeState + 1);
  }

  return (
    <div>
      <div className={cardContainer(eventColor)}>
        <div className={buttonContainer}>
          <Button variant="custom" />
        </div>
        <div onClick={handleDelete}>
          <DeleteIcon />
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
              className={copyLinkButton}
              variant="custom"
              onClick={handleCopyLink}
            />
            <Button
              name={SHARE}
              className={shareButton}
              variant="custom"
              onClick={() => setShowModal(true)}
            />
          </div>
        </div>
      </div>
      <Modal
        showModal={showModal}
        body={
          <>
            <Input
              type={TEXT}
              placeholder=" "
              required="required"
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
        email={emailValue}
        link={eventLink}
        userEmail={userEmail}
      />
    </div>
  );
}
