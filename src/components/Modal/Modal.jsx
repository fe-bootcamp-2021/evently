import React from "react";
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

export default function Modal({ showModal, setShowModal, title, body }) {
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
                    onClick={() => setShowModal(false)}
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
