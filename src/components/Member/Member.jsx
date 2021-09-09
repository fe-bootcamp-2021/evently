import React, { useState, useEffect } from "react";

import { useAuth } from "../../contexts/AuthContext";
import { isEmptyString } from "../../helpers/validations";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { DeleteIcon, PlusIcon, MinusIcon } from "../Icons/Icons";
import Input from "../Input/Input";
import { container } from "./Member.style";

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
    const newMembers = members.map((el) => {
      if (memberId === el.id) {
        return {
          ...el,
          status: !el.status,
          memberFirstName: firstName,
          memberLastName: lastName,
        };
      }
      return el;
    });
    setMembers([...newMembers]);
  };

  return (
    <div className={`${container} ${isBusy ? "bg-red-100" : "bg-green-100"}`}>
      <div className="w-2/3">
        <p>
          <span className="text-blue-800 mr-2">Date:</span> {date}
        </p>
        <p>
          <span className="text-blue-800 mr-2">Start time:</span> {startTime}
        </p>
        <p>
          <span className="text-blue-800 mr-2">End time:</span> {endTime}
        </p>
        <p className="text-blue-800 mr-2">First Name:</p>
        {memberFirstName ? (
          memberFirstName
        ) : (
          <>
            <Input
              className="appearance-none block w-1/2 bg-grey-lighter text-grey-darker border border-red rounded  px-2 mb-3"
              type="text"
              onChange={handleFirstName}
              value={firstName}
            />
            <ErrorMessage
              message="First name is required"
              isValid={isValidFirstName}
            />
          </>
        )}

        <p className="text-blue-800 mr-2">Last Name:</p>
        {memberLastName ? (
          memberLastName
        ) : (
          <>
            <Input
              className="appearance-none block w-1/2 bg-grey-lighter text-grey-darker border border-red rounded px-2 mb-3"
              type="text"
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
      <div className="w-1/3 flex justify-end">
        {isBusy ? (
          <></>
        ) : (
          <div
            onClick={user ? onClick : chooseEvent(id, firstName, lastName)}
            className="w-4 mr-5 transform hover:text-purple-500 hover:scale-110 cursor-pointer"
          >
            {user ? <DeleteIcon /> : operation ? <MinusIcon /> : <PlusIcon />}
          </div>
        )}
      </div>
    </div>
  );
}
