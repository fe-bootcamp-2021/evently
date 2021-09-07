import { BUTTON_OUTLINE, CUSTOM_HOURS, EXISTING_SCHEDULE } from "../../constants/constants";
import Button from "../Button/Button";
import WeeklyHours from "../WeeklyHours/WeeklyHours";
import { availabilityContainer, scheduleContainer, scheduleTitle, weeklyHoursContainer } from "./EventTypeAvailability.style";

const EventTypeAvailability = () => {
  return (
    <div>
      <div className={availabilityContainer}>
        <div className="w-2/3">
          <p>How do you want to offer your availability for this event type?</p>
          <Button
            name={EXISTING_SCHEDULE}
            variant={BUTTON_OUTLINE}
          />
          <Button
            name={CUSTOM_HOURS}
            className="ml-3"
            variant={BUTTON_OUTLINE}
          />
          <p className="mt-8 mb-4"> Which schedule do you want to use?</p>

          <select className={scheduleContainer}>
            <option>Working hours</option>
          </select>
        </div>
        <div className={scheduleTitle}>
          Select one of your schedules or define custom hours specific to this
          type of event.
        </div>
      </div>
      <div className={weeklyHoursContainer}>
       <WeeklyHours/>
      </div>
    </div>
  );
};

export default EventTypeAvailability;
