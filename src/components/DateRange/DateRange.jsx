import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { convertDateToString } from "../../helpers/date";
import { formatDate } from "../../helpers/date";
import Button from "../Button/Button";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Input from "../Input/Input";

export default function DataRange({ setDateRangeInfo }) {
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
  const [isValidDateDifference, setIsValidDateDifference] = useState(true);

  useEffect(() => {
    let dateRangeValues = { days, type: eventDayType };
    setDateRangeInfo(dateRangeValues);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    startValue.selectedDate > endValue.selectedDate
      ? setIsValidDateDifference(false)
      : setIsValidDateDifference(true);
  }, [startValue, endValue]);

  useEffect(() => {
    let dateRangeValues = {};
    const rangeVal = Number(rangeType);
    dateRangeValues.type = rangeType;

    if (rangeVal === 1) {
      dateRangeValues.value = { days, type: eventDayType };

      setIsShowRange(false);
    } else if (rangeVal === 2) {
      dateRangeValues.value = {
        start: formatDate(startValue.selectedDate),
        end: formatDate(endValue.selectedDate),
      };
      setIsShowRange(true);
    } else if (rangeVal === 3) {
      setIsShowRange(false);
    }

    setDateRangeInfo(dateRangeValues);
  }, [rangeType, days, setDateRangeInfo, eventDayType, startValue, endValue]);

  const handleDate = (date) => {
    calendarType === 1
      ? setStartValue({ selectedDate: date })
      : setEndValue({ selectedDate: date });
    setIsShowCalendar(false);
  };

  const handleDateRange = (ev) => {
    setIsShowCalendar(false);
    setRangeType(ev.target.value);
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
                <Input
                  type="radio"
                  name="dateRange"
                  value="1"
                  required="required"
                  onChange={handleDateRange}
                  checked={rangeType === 1 ? "checked" : ""}
                />
                <Input
                  type="number"
                  placeholder=" "
                  required="required"
                  onChange={(ev) => setDays(ev.target.value)}
                  className="ml-2 w-16 rounded"
                />

                <div className="ml-2">
                  <label className="block">
                    <select
                      className="form-select block w-60 rounded"
                      onChange={(ev) => setEventDayType(ev.target.value)}
                    >
                      <option value="1">Calendar days</option>
                      <option value="2">Business days</option>
                    </select>
                  </label>
                </div>
                <span className="ml-2">into the future</span>
              </label>
            </div>
            <div className="mt-2 flex">
              <Input
                type="radio"
                name="dateRange"
                value="2"
                required="required"
                onChange={handleDateRange}
                checked={rangeType === 2 ? "checked" : ""}
              />
              <div className="ml-2">Within a date range</div>
              {isShowRange ? (
                <div>
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
                  <ErrorMessage
                    message="End date should be greater from start date."
                    isValid={isValidDateDifference}
                  />
                  {isShowCalendar ? (
                    <Calendar
                      onChange={handleDate}
                      value={calendarValue.selectedDate}
                      className="mt-2"
                    />
                  ) : (
                    <></>
                  )}
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <Input
                  type="radio"
                  name="dateRange"
                  value="3"
                  required="required"
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
