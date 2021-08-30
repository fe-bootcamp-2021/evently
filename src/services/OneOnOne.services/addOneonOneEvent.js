import { db } from "../base";

export function addOneOnOneEvent(members, eventId) {
    try {
      db.ref(`/event/oneonone/${eventId}`).set(members);
    } catch (err) {
      console.log(err);
    }
  }