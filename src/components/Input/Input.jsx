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
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        checked={checked}
        value={value}
      />
  );
}
