export default function DataRange() {
  return (
    <section>
      <div className="flex w-full flex-wrap">
        <div className="w-2/3">
          <p>Date range</p>
          <p>Invitees can schedule...</p>
          <div className="mt-2">
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="radio"
                  value="1"
                  checked
                />
                <input
                  type="number"
                  name="name"
                  placeholder=" "
                  required
                  className="ml-2 w-16 rounded"
                />
                <div className="ml-2">
                  <label className="block">
                    <select className="form-select block w-60 rounded">
                      <option>Calendar days</option>
                      <option>Business days</option>
                    </select>
                  </label>
                </div>
                <span className="ml-2">into the future</span>
              </label>
            </div>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="radio"
                  value="2"
                />
                <span className="ml-2">Within a date range</span>
              </label>
            </div>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="radio"
                  value="3"
                />
                <span className="ml-2">Indefinitely into the future</span>
              </label>
            </div>
          </div>
        </div>
        <div className="w-1/3 text-purple-400">
          Set a range of dates when you can accept meetings.
        </div>
      </div>
    </section>
  );
}
