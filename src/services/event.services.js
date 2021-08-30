import { db } from "../services/base";


export function addEvent({
  userId,
  eventId,
  title,
  location,
  link,
  description,
  color,
  dateRange,
  minutes,
}) {
  console.log(eventId, title, location, link, description, color);
  try {
    db.ref(`/event/${eventId}`).set({
      userId,
      title,
      location,
      link,
      description,
      color,
      dateRange,
      minutes,
    });
  } catch (err) {
    console.log(err);
  }
}

export function addOneOnOneEvent({
  eventId,
  startDate,
  endDate,
  startTime,
  endTime,
  firstName,
  lastName,
  phoneNumber,
}) {
  try {
    db.ref(`/event/oneonone/${eventId}`).set({
      eventId,
      startDate,
      endDate,
      startTime,
      endTime,
      firstName: null,
      lastName,
      phoneNumber,
    });
  } catch (err) {
    console.log(err);
  }
}




