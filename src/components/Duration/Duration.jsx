export default function Duration({ minutes, setMinutes }) {
  return (
    <div className="flex flex-wrap w-full">
      <div className="w-2/3">
        <span classNameName="mt-2">Duration</span>
        <label className="block mt-2">
          <input
            type="number"
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
