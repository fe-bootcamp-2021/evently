import { container } from "./Member.style";

export default function Member({ date, startTime, endTime }) {
  return (
    <div className={container}>
      <p><span className="text-blue-800 mr-2">Date:</span> {date}</p>
      <p><span className="text-blue-800 mr-2">Start time:</span> {startTime}</p>
      <p><span className="text-blue-800 mr-2">End time:</span> {endTime}</p>
    </div>
  );
}
