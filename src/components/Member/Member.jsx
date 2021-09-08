import { nanoid } from "nanoid";
import { useAuth } from "../../contexts/AuthContext";
import { DeleteIcon, PlusIcon, MinusIcon } from "../Icons/Icons";
import Input from "../Input/Input";
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
        <p className="text-blue-800 mr-2">
          First Name:
        </p>
        <Input
          className="appearance-none block w-1/2 bg-grey-lighter text-grey-darker border border-red rounded  px-2 mb-3"
          type="text"
        />
        <p className="text-blue-800 mr-2">
          Last Name:
        </p>
        <Input
          className="appearance-none block w-1/2 bg-grey-lighter text-grey-darker border border-red rounded px-2 mb-3"
          type="text"
        />
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
