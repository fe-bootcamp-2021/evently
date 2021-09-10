import React from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import { userId, serviceId, templateId } from "../../libs/emailjs.libs";
import Button from "../Button/Button";
import {
  content,
  header,
  headerContainer,
  headerText,
  modalBodyStyle,
  modalButtonStyle,
  modalContainer,
  modalFooterStyle,
} from "./Modal.style";

init(userId);

export default function Modal({
  showModal,
  setShowModal,
  title,
  body,
  email,
  link,
  userEmail
}) {
  const handleSendEmail = () => {
    const templateParams = {
      link,
      email,
      userEmail
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then(
        function (response) {
          setShowModal(false);
          //console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <>
      {showModal ? (
        <>
          <div className={modalContainer}>
            <div className={content}>
              {/*content*/}
              <div className={headerContainer}>
                {/*header*/}
                <div className={header}>
                  <h3 className={headerText}>{title}</h3>
                  <Button
                    variant="custom"
                    className={modalButtonStyle}
                    onClick={() => setShowModal(false)}
                    name={`×`}
                  />
                </div>
                {/*body*/}
                <div className={modalBodyStyle}>{body}</div>
                {/*footer*/}
                <div className={modalFooterStyle}>
                  <Button onClick={() => setShowModal(false)} name={`Close`} />
                  <Button
                    className="ml-2 px-5"
                    onClick={handleSendEmail}
                    name={`Send`}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
