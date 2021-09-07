import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { useAuth } from "../../contexts/AuthContext";
import { getUser } from "../../services/user.services/user.services";
import { weekDays } from "../../constants/constants";
import {
  container,
  weeklyHoursContainer,
  availability,
  dateOverride,
} from "./WeeklyHours.style";

export default function WeeklyHours() {
  const { user } = useAuth();
  const userId = user?.uid;
  const [start, setStart] = useState("09:00");
  const [end, setEnd] = useState("17:00");
  const [weekDaysAvailability, setWeekDaysAvailability] = useState([]);

  useEffect(() => {
    getUser(userId).then((res) => {
      const { startHour, endHour, weekDayAvailability } = res[userId];
      setStart(startHour);
      setEnd(endHour);
      setWeekDaysAvailability(weekDayAvailability);
    });
  }, []);

  return (
    <div className={container}>
      <div className={weeklyHoursContainer}>
        <span className="font-semibold">WEEKLY HOURS</span>
        <div className={availability}>
          {weekDaysAvailability ? (
            weekDaysAvailability.map((el, ind) => {
              return (
                <React.Fragment key={nanoid()}>
                  <div className="w-1/4 p-2 font-semibold">{weekDays[ind]}</div>
                  {el ? (
                    <div className="w-3/4 p-2">{`${start} - ${end}`}</div>
                  ) : (
                    <div className="w-3/4 p-2 text-gray-500">Unavailable</div>
                  )}
                </React.Fragment>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={dateOverride}>
        <span className="font-semibold">DATE OVERRIDES</span>
        <p className="mt-3">
          To override your hours on specific dates, update your schedule under
          Availability
        </p>
      </div>
    </div>
  );
}
