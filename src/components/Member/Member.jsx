import { nanoid } from "nanoid";
import { container } from "./Member.style";

export default function Member({ date, startTime, endTime, id, deleteEvent }) {
  return (
    <div className={container} key={nanoid()}>
      <div className="w-2/3">
        <p>
          <span className="text-blue-800 mr-2">Date:</span> {date}
          {/* <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </div> */}
        </p>
        <p>
          <span className="text-blue-800 mr-2">Start time:</span> {startTime}
        </p>
        <p>
          <span className="text-blue-800 mr-2">End time:</span> {endTime}
        </p>
      </div>
      <div className="w-1/3 flex justify-end">
        <div
          onClick={deleteEvent(id)}
          className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </div>
      </div>
    </div>
  );
}
