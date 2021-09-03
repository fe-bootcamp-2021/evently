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

export function getEvents() {
  try {
    const reference = db.ref(`event`);
    const referenceQuery = reference
      .orderByChild("userId")
      .equalTo("juAA3CLC3NNzFpyZK1PC7bmL2O23");
    referenceQuery.on("value", (snapshot) => {
      return snapshot.val();
    });
  } catch (err) {
    console.log(err);
  }
}
