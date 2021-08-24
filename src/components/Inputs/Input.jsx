export default function Input({
  autocomplete,
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
        autocomplete={autocomplete}
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
