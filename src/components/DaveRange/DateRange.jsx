export default function DataRange() {
  return (
    <section>
      <div class="flex">
        <div class="w-40 flex-1">
          <p>Date range</p>
          <p>Invitees can schedule...</p>
        </div>
        <p class="w-80 flex-1 text-purple-400">
          Set a range of dates when you can accept meetings.
        </p>
      </div>
      <div class="block">
        <div class="mt-2">
          <div>
            <label class="inline-flex items-center">
              <input
                type="radio"
                class="form-radio"
                name="radio"
                value="1"
                checked
              />
              <input
                type="number"
                name="name"
                placeholder=" "
                required
                class="ml-2 w-16 rounded"
              />
              <div class="ml-2">
                <label class="block">
                  <select class="form-select block w-60 rounded">
                    <option>Calendar days</option>
                    <option>Business days</option>
                  </select>
                </label>
              </div>
              <span class="ml-2">into the future</span>
            </label>
          </div>
          <div>
            <label class="inline-flex items-center">
              <input type="radio" class="form-radio" name="radio" value="2" />
              <span class="ml-2">Within a date range</span>
            </label>
          </div>
          <div>
            <label class="inline-flex items-center">
              <input type="radio" class="form-radio" name="radio" value="3" />
              <span class="ml-2">Indefinitely into the future</span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
