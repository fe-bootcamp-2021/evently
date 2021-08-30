export default function Member({ date, startTime, endTime }) {
  return (
    <div>
      <li>
        <p>{date}</p>
        <p>{startTime}</p>
        <p>{endTime}</p>
      </li>
    </div>
  );
}
