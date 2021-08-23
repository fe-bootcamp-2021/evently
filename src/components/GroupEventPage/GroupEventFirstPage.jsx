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
  maxInvites,
  buttonContainer,
  button,
} from "./GroupEventPage.style";

export default function GroupEventFirstPage() {
  return (
    <div className={containerOneOnOne}>
      <div className={`${card} px-10`}>
        <h2 className={title}>Add Group Event</h2>
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
          <label className={label}>Max invitees in a spot *</label>
          <input
            type="number"
            name="name"
            placeholder=" "
            required
            className={maxInvites}
          />
          <span className={errorMessage} id="error">
            Can`t be blank
          </span>
        </div>

        <div className="flex mt-6">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">
              Display remaining spots on booking page
            </span>
          </label>
        </div>

        <div className={eventItems}>
          <label className={label}>Event color *</label>
          <EventColors />
          <span className={errorMessage} id="error">
            Option has to be selected
          </span>
        </div>

        <div className={buttonContainer}>
          <Button name={`Cancel`} onClick={console.log(1)} />
          <Button name={`Next >>`} className="ml-3" onClick={console.log(1)} />
        </div>
      </div>
    </div>
  );
}
