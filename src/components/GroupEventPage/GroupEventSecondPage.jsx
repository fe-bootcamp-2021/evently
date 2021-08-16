import DataRange from "../DaveRange/DateRange";
import Duration from "../Duration/Duration";
import EventTypeAvailability from "../EventTypeAvailability/EventTypeAvailability";

import {
  containerOneOnOne,
  card,
  title,
  eventItems,
  errorMessage,
  buttonContainer,
  button,
} from "./GroupEventPage.style";

export default function GroupEventSecondPage() {
  return (
    <div className={containerOneOnOne}>
      <div className={card}>
        <h2 className={title}>When can people book this event?</h2>
        <div className={eventItems}>
          <DataRange />
          <span className={errorMessage} id="error">
            Event name is required
          </span>
        </div>
        <div className={eventItems}>
          <Duration />
          <span className={errorMessage} id="error">
            Event name is required
          </span>
        </div>
        <div className={eventItems}>
          <EventTypeAvailability />
          <span className={errorMessage} id="error">
            Event name is required
          </span>
        </div>
        <div className={buttonContainer}>
          <button id="button" type="button" className={button}>
            Cancel {">>"}
          </button>
          <button id="button" type="button" className={button}>
            Next {">>"}
          </button>
        </div>
      </div>
    </div>
  );
}
