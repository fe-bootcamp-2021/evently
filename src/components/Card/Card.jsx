import React, { useState, useEffect } from "react";
import { isValidEmail } from "../../helpers/validations";
import RadioColors from "../../constants/radioColors";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { COPY_LINK, SHARE, TEXT } from "../../constants/constants";
import {
  cardContainer,
  buttonContainer,
  titleStyle,
  copyLinkButton,
  infoButton,
  shareButton,
  modalWindowContainer,
} from "./Card.style";

export default function Card({ title,  type, color, link }) {
  // eslint-disable-next-line
  const [emailValue, setEmailValue] = useState(null);
  const [eventColor, setEventColor] = useState(RadioColors()[0].id);
  const [showModal, setShowModal] = React.useState(false);
  const [isValidEmailValue, setIsValidEmailValue] = useState(true);

  useEffect(() => {
    const evtColors = RadioColors().filter((el) => el.id === color);
    const evtColor = evtColors[0]?.classNames;
    setEventColor(evtColor);
    // eslint-disable-next-line
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(link);
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
          <h1 className={titleStyle}>{title}</h1>
          <Button
            name={`${type}`}
            className={infoButton}
            variant="custom"
          />
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
