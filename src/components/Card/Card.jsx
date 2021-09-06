import React, { useState, useEffect } from "react";
import { isValidEmail } from "../../helpers/validations";
import RadioColors from "../../constants/radioColors";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function Card({ title, duration, type, color, link }) {
  const [emailValue, setEmailValue] = useState(null);
  const [eventColor, setEventColor] = useState(RadioColors()[0].id);
  const [showModal, setShowModal] = React.useState(false);

  const [isValidEmailValue, setIsValidEmailValue] = useState(true);

  useEffect(() => {
    const evtColors = RadioColors().filter((el) => el.id === color);
    const evtColor = evtColors[0]?.classNames;
    setEventColor(evtColor);
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
      <div
        className={`bg-white max-w-7xl rounded-2xl border-t-8 px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500 border-${eventColor}`}
      >
        <div className="flex justify-between items-center">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <Button
            variant="custom"
            name={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
          />
        </div>
        <div className="mt-4">
          <h1 className="text-lg text-gray-700 font-semibold">{title}</h1>
          <Button
            name={`${duration} mins, ${type}`}
            className="text-sm mr-4 font-semibold text-blue-700 hover:text-purple-700"
            variant="custom"
          />
          <hr className="mt-8 py-3" />
          <div className=" flex justify-between items-center">
            <Button
              name="Copy Link"
              className="text-sm font-semibold text-blue-700"
              variant="custom"
              onClick={handleCopyLink}
            />
            <Button
              name="Share"
              className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
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
              type="text"
              name="name"
              placeholder=" "
              required
              className={`pt-3 pb-2 block w-96 px-0 mt-0 border-gray-500 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200`}
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
