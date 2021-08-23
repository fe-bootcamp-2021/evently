import Button from "../Button/Button";
import WeeklyHours from "../WeeklyHours/WeeklyHours";

const EventTypeAvailability = () => {
  return (
    <div>
      <div className="flex flew-wrap w-full">
        <div className="w-2/3">
          <p>How do you want to offer your availability for this event type?</p>
          <Button
            name={"Use an existing schedule"}
            variant="buttonOutline"
          />
          <Button
            name={"Set custom hours"}
            className="ml-3"
            variant="buttonOutline"
          />
          <p className="mt-8 mb-4"> Which schedule do you want to use?</p>

          <select className="form-select block w-60 rounded">
            <option>Working hours</option>
          </select>
        </div>
        <div className="w-1/3 text-purple-400">
          Select one of your schedules or define custom hours specific to this
          type of event.
        </div>
      </div>
      <div className="w-full flex justify-center">
       <WeeklyHours/>
      </div>
    </div>
  );
};

export default EventTypeAvailability;
