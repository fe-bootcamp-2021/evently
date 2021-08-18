export default function Duration() {
  return (
    <div class="flex pt-4">
      <span>Duration</span>
      <div class="flex-1 ml-2">
        <label class="block">
          <select class="form-select block w-60 rounded">
            <option>15 min</option>
            <option>30 min</option>
            <option>45 min</option>
            <option>60 min</option>
            <option>Custom</option>
          </select>
        </label>
      </div>
      <p class="w-80 flex-1 text-purple-400">
        Define how long your event will be. It can be as long as 12 hours.
      </p>
    </div>
  );
}
