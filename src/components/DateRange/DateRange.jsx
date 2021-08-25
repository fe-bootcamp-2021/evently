import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { convertDateToString } from "../../helpers/date";
import Button from "../Button/Button";

export default function DataRange({ setDateRange }) {
  const [isShowRange, setIsShowRange] = useState(false);
  const [startValue, setStartValue] = useState({ selectedDate: new Date() });
  const [endValue, setEndValue] = useState({ selectedDate: new Date() });
  const [isShowCalendar, setIsShowCalendar] = useState(false);
  const [calendarValue, setCalendarValue] = useState({
    selectedDate: new Date(),
  });
  const [calendarType, setCalendarType] = useState(1);
  const [days, setDays] = useState(60);
  const [rangeType, setRangeType] = useState(1);
  const [eventDayType, setEventDayType] = useState(1);

  const handleDate = (date) => {
    calendarType === 1
      ? setStartValue({ selectedDate: date })
      : setEndValue({ selectedDate: date });
    setIsShowCalendar(false);
  };

  const handleDateRange = (ev) => {
    setIsShowCalendar(false);
    setRangeType(ev.target.value);
    // let dateRangeValues = {};
    // dateRangeValues.type = 1;
    // dateRangeValues.value = { days, type: eventDayType };
    // console.log(dateRangeValues)
    if (ev.target.value === "1") {
      setIsShowRange(false);
    } else if (ev.target.value === "2") {
      setIsShowRange(true);
    } else if (ev.target.value === "3") {
      setIsShowRange(false);
    }
  };

  const handleRange = (val) => (ev) => {
    setIsShowCalendar(true);
    setCalendarType(val);
    if (val === 1) {
      setCalendarValue(startValue);
    } else {
      setCalendarValue(endValue);
    }
  };

  return (
    <section>
      <div className="flex w-full flex-wrap">
        <div className="w-2/3">
          <p>Date range</p>
          <p>Invitees can schedule...</p>
          <div className="mt-2">
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="dateRange"
                  value="1"
                  onChange={handleDateRange}
                  checked={rangeType === 1 ? "checked" : ""}
                />
                <input
                  type="number"
                  name="name"
                  placeholder=" "
                  value={days}
                  required
                  className="ml-2 w-16 rounded"
                  onChange={(ev) => setDays(ev.target.value)}
                />
                <div className="ml-2">
                  <label className="block">
                    <select className="form-select block w-60 rounded">
                      <option onClick={() => setEventDayType(1)}>
                        Calendar days
                      </option>
                      <option onClick={() => setEventDayType(2)}>
                        Business days
                      </option>
                    </select>
                  </label>
                </div>
                <span className="ml-2">into the future</span>
              </label>
            </div>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="dateRange"
                  value="2"
                  onChange={handleDateRange}
                  checked={rangeType === 2 ? "checked" : ""}
                />
                <span className="ml-2">Within a date range</span>
                {isShowRange ? (
                  <>
                    <Button
                      name={`${convertDateToString(startValue.selectedDate)}`}
                      variant="buttonOutline"
                      onClick={handleRange(1)}
                      className="ml-5 mt-0 p-1"
                    />
                    <Button
                      name={`${convertDateToString(endValue.selectedDate)}`}
                      variant="buttonOutline"
                      onClick={handleRange(2)}
                      className="ml-5 mt-0 p-1"
                    />
                    {isShowCalendar ? (
                      <Calendar
                        onChange={handleDate}
                        value={calendarValue.selectedDate}
                      />
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </label>
            </div>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="dateRange"
                  value="3"
                  onChange={handleDateRange}
                  checked={rangeType === 3 ? "checked" : ""}
                />
                <span className="ml-2">Indefinitely into the future</span>
              </label>
            </div>
          </div>
        </div>
        <div className="w-1/3 text-purple-400">
          Set a range of dates when you can accept meetings.
        </div>
      </div>
    </section>
  );
}
