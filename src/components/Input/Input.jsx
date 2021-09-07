export default function Input({
  id,
  name,
  type,
  className,
  placeholder,
  onChange,
  required
}) {
  return (
      <input
        id={id}
        name={name}
        type={type}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
  );
}
