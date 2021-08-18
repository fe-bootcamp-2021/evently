import EventColors from "../EventColors/EventColors";
import InputCKEditor from "../InputCKEditor/InputCKEditor";
import Button from "../Button/Button";

import {
  containerOneOnOne,
  card,
  title,
  eventItems,
  label,
  input,
  errorMessage,
  description,
  buttonContainer,
  button,
} from "./OneOnOne.style";

export default function OneOnOne() {
  return (
    <div className={containerOneOnOne}>
      <div className={card}>
        <h2 className={title}>Add One-on-One Event</h2>
        <div className={eventItems}>
          <label className={label}>Event name *</label>
          <input
            type="text"
            name="name"
            placeholder=" "
            required
            className={input}
          />
          <span className={errorMessage} id="error">
            Event name is required
          </span>
        </div>

        <div className={eventItems}>
          <label className={label}>Location *</label>
          <select name="select" value="" className={input}>
            <option value=""></option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>

          <span className={errorMessage} id="error">
            Option has to be selected
          </span>
        </div>

        <div className={eventItems}>
          <label className={label}>Event link *</label>
          <input
            type="text"
            name="name"
            placeholder=" "
            required
            className={input}
          />
          <span className={errorMessage} id="error">
            Event link is required
          </span>
        </div>

        <div className={eventItems}>
          <label className={label}>Description/Instructions</label>
          <div className={description}>
            <InputCKEditor />
          </div>
        </div>

        <div className={eventItems}>
          <label className={label}>Event color *</label>
          <EventColors />
          <span className={errorMessage} id="error">
            Option has to be selected
          </span>
        </div>

        <div className={buttonContainer}>
          <Button name={`Next >>`} onClick={console.log(1)}/>
        </div>
      </div>
    </div>
  );
}
