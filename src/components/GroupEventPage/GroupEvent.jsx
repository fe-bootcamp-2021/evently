import EventColors from "../EventColors/EventColors";
import InputCKEditor from "../InputCKEditor/InputCKEditor";
import classNames from "classnames/bind";

const containerOneOnOne = classNames([
  "min-h-screen",
  "bg-gray-100",
  "p-0",
  "sm:p-12",
]);

const card = classNames([
  "mx-auto",
  "w-2/3",
  "px-6",
  "py-12",
  "bg-custom-gray-1",
  "border-0",
  "shadow-lg",
  "sm:rounded-3xl",
]);

const title = classNames([
  "w-full",
  "flex",
  "justify-center",
  "text-2xl",
  "font-bold",
  "text-custom-purple-1",
  "mb-8",
]);

const eventItems = classNames(["relative", "z-0", "w-full", "mb-5"]);

const label = classNames(["text-gray-500"]);

const errorMessage = classNames(["text-sm", "text-red-600", "hidden"]);

const input = classNames([
  "pt-3",
  "pb-2",
  "block",
  "w-full",
  "px-0",
  "mt-0",
  "border-gray-500",
  "bg-transparent",
  "border-0",
  "border-b-2",
  "appearance-none",
  "focus:outline-none",
  "focus:ring-0",
  "focus:border-black",
  "border-gray-200",
]);

const buttonContainer = classNames([
  "flex",
  "justify-end",
  "z-0",
  "w-full",
  "mb-5",
]);

const button = classNames([
  "w-1/4",
  "px-6",
  "py-3",
  "mt-3",
  "lg:text-lg",
  "text-sm",
  "text-white",
  "transition-all",
  "duration-150",
  "ease-linear",
  "rounded-lg",
  "shadow",
  "outline-none",
  "bg-custom-purple-1",
  "hover:bg-pink-600",
  "hover:shadow-lg",
  "focus:outline-none",
]);

const maxInvites = classNames([
  "appearance-none",
  "block",
  "bg-gray-200",
  "text-gray-700",
  "border border-red-500",
  "rounded",
  "py-3",
  "px-4",
  "mb-3",
  "leading-tight",
  "focus:outline-none",
  "focus:bg-white",
]);

const description = classNames(["mt-2"]);

export default function GroupEventFirstPage() {
  return (
    <div className={containerOneOnOne}>
      <div className={card}>
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
