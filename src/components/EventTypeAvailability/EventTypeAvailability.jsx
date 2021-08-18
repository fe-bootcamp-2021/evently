import Button from "../Button/Button";

const EventTypeAvailability = () => {
  return (
    <div>
      <div class="flex">
        <p class="flex-1">
          How do you want to offer your availability for this event type?
        </p>
        <div class="w-80">
          <p class="flex-1 text-purple-400">
            Select one of your schedules or define custom hours specific to this
            type of event.
          </p>
        </div>
      </div>
      <div class="flex">
        <div class="flex-initial">
          <Button name={"Use an existing schedule"} />
        </div>
        <div class="flex-initial">
          <Button name={"Set custom hours"} />
        </div>
      </div>
    </div>
  );
};

export default EventTypeAvailability;
