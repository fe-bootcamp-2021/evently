import { db } from "../services/base";

export function addEvent({
  userId,
  eventId,
  title,
  location,
  description,
  color,
  createdOn,
  member,
  eventType
}) {
  try {
    db.ref(`/event/${eventId}`).set({
      userId,
      title,
      location,
      description,
      color,
      createdOn,
      member,
      eventType
    });
  } catch (err) {
    console.log(err);
  }
}

export async function getEvents(id) {
  try {
    return db
      .ref(`event`)
      .orderByChild("userId")
      .equalTo(id)
      .once("value")
      .then((snapshot) => {
        return snapshot.val();
      });
  } catch (err) {
    console.log(err);
  }
}


export async function getEvent(id) {
  try {
    return db
      .ref(`event/${id}`)
      .once("value")
      .then((snapshot) => {
        return snapshot.val();
      });
  } catch (err) {
    console.log(err);
  }
}