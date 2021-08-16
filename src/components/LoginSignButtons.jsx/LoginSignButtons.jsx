export default function Button({ onClick, value, name }) {
  return (
    <div>
      <button onClick={onClick} value={value} name={name}>
        {name}
      </button>
    </div>
  );
}
