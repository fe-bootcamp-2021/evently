export default function Duration() {
  return (
    <div className="flex flex-wrap w-full">
      <div className="w-2/3">
        <span classNameName="mt-2">Duration</span>
        <label className="block mt-2">
          <select className="form-select block w-60 rounded">
            <option>15 min</option>
            <option>30 min</option>
            <option>45 min</option>
            <option>60 min</option>
            <option>Custom</option>
          </select>
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
