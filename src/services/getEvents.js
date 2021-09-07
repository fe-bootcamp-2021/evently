
import { db } from "../../../services/base";

export const getEvents = (eventName) => {
  let events = []
  let eventsRef = db.ref(eventName);
  console.log(eventsRef)
  eventsRef.on("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      let childData = childSnapshot.val();
      events.push(childData)
    });
  });
  return events
};

