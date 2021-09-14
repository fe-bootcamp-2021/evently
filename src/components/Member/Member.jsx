import React, { useState } from "react";
import { FIRST_NAME, LAST_NAME, TEXT } from "../../constants/constants";

import { useAuth } from "../../contexts/AuthContext";
import { isEmptyString } from "../../helpers/validation.helpers";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { DeleteIcon, PlusIcon, MinusIcon } from "../Icons/Icons";
import Input from "../Input/Input";
import {
  container,
  red,
  green,
  memberContainer,
  firstNameInputField,
} from "./Member.style";

export default function Member({
  date,
  startTime,
  endTime,
  memberFirstName,
  memberLastName,
  onClick,
  operation = false,
  isBusy = false,
  id,
  members,
  setMembers,
}) {
  const { user } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isValidFirstName, setIsValidFirstName] = useState(true);
  const [isValidLastName, setIsValidLastName] = useState(true);

  const handleFirstName = (ev) => {
    const value = ev.target.value;
    isEmptyString(value)
      ? setIsValidFirstName(true)
      : setIsValidFirstName(false);
    setFirstName(value);
  };

  const handleLastName = (ev) => {
    const value = ev.target.value;
    isEmptyString(value) ? setIsValidLastName(true) : setIsValidLastName(false);
    setLastName(value);
  };

  const chooseEvent = (memberId, firstName, lastName) => (ev) => {
    ev.stopPropagation();
    if (firstName !== "" && lastName !== "") {
      const newMembers = members.map((el) => {
        const currentStatus = el.status;

        if (memberId === el.id) {
          return {
            ...el,
            status: !el.status,
            memberFirstName: currentStatus ? "" : firstName,
            memberLastName: currentStatus ? "" : lastName,
          };
        } else {
          if (!currentStatus) {
            return {
              ...el,
              memberFirstName: "",
              memberLastName: "",
            };
          }
        }
        return el;
      });
      setMembers([...newMembers]);
    } else {
      isEmptyString(firstName)
        ? setIsValidFirstName(true)
        : setIsValidFirstName(false);
      isEmptyString(lastName)
        ? setIsValidLastName(true)
        : setIsValidLastName(false);
    }
  };

  return (
    <>
      <div className={`${container} ${isBusy ? red : green}`}>
        <div className="flex justify-between">
          <div className="text-blue-900">
            <div>
              <p>Date: {date}</p>
            </div>
            <div>
              <p>Start Time: {startTime}</p>
            </div>
            <div>
              <p>End Time: {endTime}</p>
            </div>
          </div>
          <div className="w-5 h-5 ">
            {isBusy ? (
              <></>
            ) : (
              <div
                onClick={user ? onClick : chooseEvent(id, firstName, lastName)}
                className={memberContainer}
              >
                {user ? (
                  <DeleteIcon />
                ) : operation ? (
                  <MinusIcon />
                ) : (
                  <PlusIcon />
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col ">
          <div className="mt-4 flex flex-col">
            {memberFirstName && isBusy ? (
              <span className="text-blue-900">{`First Name: ${memberFirstName}`}</span>
            ) : (
              <>
                <Input
                  className={firstNameInputField}
                  placeholder={FIRST_NAME}
                  type={TEXT}
                  onChange={handleFirstName}
                  value={firstName}
                />
                <ErrorMessage
                  message="First name is required"
                  isValid={isValidFirstName}
                />
              </>
            )}
          </div>
          <div className="mt-4 flex flex-col">
            {memberLastName && isBusy ? (
              <span className="text-blue-900">{`Last Name: ${memberLastName}`}</span>
            ) : (
              <>
                <Input
                  className={firstNameInputField}
                  placeholder={LAST_NAME}
                  type={TEXT}
                  onChange={handleLastName}
                  value={lastName}
                />
                <ErrorMessage
                  message="Last name is required"
                  isValid={isValidLastName}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
