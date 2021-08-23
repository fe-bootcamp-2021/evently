export default function WeeklyHours() {
  return (
    <div className="flex flex-wrap w-11/12 mt-10">
      <div className="w-7/12 border-2 border-fuchsia-600 p-3">
      <span className="font-semibold">WEEKLY HOURS</span>
      <div className="flex w-full flex-wrap pt-3">
          <div className="w-1/4 p-2 font-semibold">SUN</div>
          <div className="w-3/4 p-2 text-gray-500">Unavailable</div>
          <div className="w-1/4 p-2 font-semibold">MON</div>
          <div className="w-3/4 p-2">09:00 – 17:00</div>
          <div className="w-1/4 p-2 font-semibold">TUE</div>
          <div className="w-3/4 p-2">09:00 – 17:00</div>
          <div className="w-1/4 p-2 font-semibold">WED</div>
          <div className="w-3/4 p-2">09:00 – 17:00</div>
          <div className="w-1/4 p-2 font-semibold">THU</div>
          <div className="w-3/4 p-2">09:00 – 17:00</div>
          <div className="w-1/4 p-2 font-semibold">FRI</div>
          <div className="w-3/4 p-2">09:00 – 17:00</div>
          <div className="w-1/4 p-2 font-semibold">SAT</div>
          <div className="w-3/4 p-2 text-gray-500">Unavailable</div>
      </div>
      </div>
      <div className="w-5/12 border-l-0 border-2 border-fuchsia-600 p-3">
        <span className="font-semibold">DATE OVERRIDES</span>
        <p className="mt-3">
          To override your hours on specific dates, update your schedule under
          Availability
        </p>
      </div>
    </div>
  );
}
