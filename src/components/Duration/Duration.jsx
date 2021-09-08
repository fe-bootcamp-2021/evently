import { TYPE_NUMBER } from "../../constants/constants";
import Input from "../Input/Input";
import { durationContainer } from "./Duration.style";

export default function Duration({ minutes, setMinutes }) {
  return (
    <div className={durationContainer}>
      <div className="w-2/3">
        <span className="mt-2">Duration</span>
        <label className="block mt-2">
          <Input
            type={TYPE_NUMBER}
            name="name"
            placeholder=" "
            value={minutes}
            required
            className="ml-2 w-24 rounded"
            onChange={(ev) => setMinutes(ev.target.value)}
          />{" "}
          &nbsp; mins
        </label>
      </div>
      <div className="w-1/3">
        <p className="text-purple-400">
          Define how long your event will be. It can be as long as 12 hours.
        </p>
      </div>
    </div>
  );
}
