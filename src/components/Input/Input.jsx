export default function Input({
  id,
  name,
  type,
  className,
  placeholder,
  onChange,
  onClick,
  required,
  checked,
  value,
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
      onClick={onClick}
      required={required}
      checked={checked}
    />
  );
}
