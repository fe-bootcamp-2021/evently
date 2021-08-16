import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from "../../services/getEvents";

moment.locale("en-GB");

const localizer = momentLocalizer(moment);

const MyMonthlyCalendar = () => (
  <div style={{ height: 700 }}>
    <Calendar
      selectable
      onSelectSlot={(e) => alert(e)}
      events={events}
      step={60}
      defaultDate={new Date()}
      localizer={localizer}
    />
  </div>
);

export default MyMonthlyCalendar;
