import { db } from "../base";

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
        firstName,
        lastName,
        phoneNumber,
      });
    } catch (err) {
      console.log(err);
    }
  }