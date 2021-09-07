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
  createdOn,
  eventType

}) {
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
      createdOn,
      eventType
    });
  } catch (err) {
    console.log(err);
  }
}

export async function getEvents(id) {
  try {
    return db.ref(`event`)
      .orderByChild("userId")
      .equalTo(id)
      .once("value").then((snapshot) => {
        return snapshot.val();
      }) ;
  } catch (err) {
    console.log(err);
  }
}
