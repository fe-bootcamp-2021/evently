import classNames from "classnames/bind";

const buttonContainer = classNames([
  "flex",
  "justify-end",
  "z-0",
  "w-full",
  "mb-5",
]);

const buttonStyle = classNames([
  "bg-blue-800",
  "hover:bg-blue-600",
  "text-white",
  "font-bold",
  "py-2",
  "px-4",
  "rounded-full",
]);

const Button = ({ name, onClick }) => {
  return (
    <div className={buttonContainer}>
      <button type="button" className={buttonStyle} onClick={onClick}>
        {name}
      </button>
    </div>
  );
};

export default Button;
