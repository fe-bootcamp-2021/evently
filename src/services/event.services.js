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






