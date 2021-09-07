export default function Input({
  id,
  name,
  type,
  className,
  placeholder,
  onChange
}) {
  return (
    <div>
      <input
        id={id}
        name={name}
        type={type}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
