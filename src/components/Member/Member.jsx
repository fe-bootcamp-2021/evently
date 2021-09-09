import { nanoid } from "nanoid";
import { useAuth } from "../../contexts/AuthContext";
import { DeleteIcon, PlusIcon, MinusIcon } from "../Icons/Icons";
import { container } from "./Member.style";

export default function Member({
  date,
  startTime,
  endTime,
  onClick,
  operation = false,
  isBusy = false,
}) {
  const { user } = useAuth();

  return (
    <div
      className={`${container} ${isBusy ? "bg-red-100" : "bg-green-100"}`}
      key={nanoid()}
    >
      <div className="w-2/3">
        <p>
          <span className="text-blue-800 mr-2">Date:</span> {date}
        </p>
        <p>
          <span className="text-blue-800 mr-2">Start time:</span> {startTime}
        </p>
        <p>
          <span className="text-blue-800 mr-2">End time:</span> {endTime}
        </p>
      </div>
      <div className="w-1/3 flex justify-end">
        {isBusy ? (
          <></>
        ) : (
          <div
            onClick={onClick}
            className="w-4 mr-5 transform hover:text-purple-500 hover:scale-110 cursor-pointer"
          >
            {user ? <DeleteIcon /> : operation ? <MinusIcon /> : <PlusIcon />}
          </div>
        )}
      </div>
    </div>
  );
}
