export default function Input({
  id,
  name,
  type,
  className,
  placeholder,
  onChange,
  required,
  checked,
  value
}) {
  return (
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        checked={checked}
      />
  );
}
