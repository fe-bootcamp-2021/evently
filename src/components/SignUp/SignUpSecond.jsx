import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { nanoid } from "nanoid";
import { useAuth } from "../../contexts/AuthContext";
import { weekDays } from "../../constants/constants";
import { NavRoutes } from "../../constants/routes";
import { isValidHours, isValidMinutes } from "../../helpers/validation.helpers";
import Button from "../Button/Button";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {
  containerSignUp,
  card,
  title,
  items,
  label,
  input,
  buttonContainer,
} from "./SignUp.style";

export default function SignUpSecond({ firstPageInfo }) {
  const history = useHistory();
  const { signup} = useAuth();

  const [weekDayValue, setWeekDayValue] = useState({
    0: false,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: false,
  });
  const [startHours, setStartHours] = useState("09:00");
  const [endHours, setEndHours] = useState("17:00");

  const [isValidStartHours, setIsValidStartHours] = useState(true);
  const [isValidEndHours, setIsValidEndHours] = useState(true);
  const [isValidHoursValue, setIsValidHoursValue] = useState(true);

  const handleStartHours = (ev) => {
    const value = ev.target.value;
    if (value.length === 5) {
      const hours = value.slice(0, 2);
      const minutes = value.slice(3);

      if (isValidHours(hours) && isValidMinutes(minutes) && value[2] === ":") {
        setStartHours(value);
        setIsValidStartHours(true);
        isValidStartAndEndHours(value, endHours)
          ? setIsValidHoursValue(true)
          : setIsValidHoursValue(false);
      } else {
        setIsValidStartHours(false);
      }
    } else {
      setIsValidStartHours(false);
    }
  };

  const handleEndHours = (ev) => {
    const value = ev.target.value;
    if (value.length === 5) {
      const hours = value.slice(0, 2);
      const minutes = value.slice(3);

      if (isValidHours(hours) && isValidMinutes(minutes) && value[2] === ":") {
        setEndHours(value);
        setIsValidEndHours(true);
        isValidStartAndEndHours(startHours, value)
          ? setIsValidHoursValue(true)
          : setIsValidHoursValue(false);
      } else {
        setIsValidEndHours(false);
      }
    } else {
      setIsValidEndHours(false);
    }
  };

  const handleCheckbox = (ev) => {
    const value = ev.target.value;
    setWeekDayValue({ ...weekDayValue, [value]: !weekDayValue[value] });
  };

  const isValidStartAndEndHours = (start, end) => {
    const startHours = start.slice(0, 2);
    const startMinutes = start.slice(3);
    const endHours = end.slice(0, 2);
    const endMinutes = end.slice(3);
    const startInMinutes = Number(startHours) * 60 + Number(startMinutes);
    const endInMinutes = Number(endHours) * 60 + Number(endMinutes);

    if (startInMinutes > endInMinutes) return false;
    return true;
  };

  const handleSignUp = () => {
    const user = Object.assign({}, firstPageInfo, {
      weekDayAvailability: weekDayValue,
      startHour: startHours,
      endHour: endHours,
    });

    return signup(user)
      .then(() => {
        history.push(NavRoutes.home().path);
      })
      .catch((e) => alert(e.message));
  };

  return (
    <>
      <div className={containerSignUp}>
        <div className={`${card} px-10`}>
          <h2 className={title}>Registration</h2>
          <div className={items}>
            <label className={label}>Working Days *</label>
            <div className="flex flex-wrap justify-center">
              {Object.keys(weekDays).map((key) => {
                return (
                  <div className="m-5" key={nanoid()}>
                    <p>{weekDays[key]}</p>
                    <input
                      type="checkbox"
                      className="m-3"
                      value={key}
                      onChange={handleCheckbox}
                      checked={weekDayValue[key] ? "checked" : ""}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap justify-center mt-10">
              <div className="flex flex-wrap">
                <div className="h-22">
                  <p className={label}>Start hours *</p>
                  <input
                    type="text"
                    placeholder="hh:mm"
                    required
                    className="w-80px"
                    onChange={handleStartHours}
                  />
                  <ErrorMessage
                    message="Invalid start hours"
                    isValid={isValidStartHours}
                  />
                </div>
              </div>
              <div className="flex h-22 items-center mx-4 font-bold text-4xl">
                {" "}
                -{" "}
              </div>
              <div className="flex flex-wrap">
                <div className="h-22">
                  <p className={label}>End Hours *</p>
                  <input
                    type="text"
                    placeholder="hh:mm"
                    required
                    className="w-80px"
                    onChange={handleEndHours}
                  />
                  <ErrorMessage
                    message="Invalid end hours"
                    isValid={isValidEndHours}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center mt-1">
              <ErrorMessage
                message="End hour should be greater then start hour"
                isValid={isValidHoursValue}
              />
            </div>
          </div>
          <div className={buttonContainer}>
            <Button name={`Register`} onClick={handleSignUp} />
          </div>
        </div>
      </div>
    </>
  );
}
