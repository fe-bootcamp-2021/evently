import classNames from "classnames/bind";
import PropTypes from "prop-types";

const buttonStyle = classNames([
  "bg-blue-800",
  "hover:bg-blue-600",
  "text-white",
  "font-bold",
  "py-2",
  "px-4",
  "rounded-full",
]);

const buttonOutline = classNames([
  "px-5",
  "py-3",
  "mt-5",
  "text-gray-700",
  "transition-colors",
  "duration-150",
  "border",
  "border-gray-700",
  "rounded-lg",
  "focus:shadow-outline",
  "hover:bg-blue-800",
  "hover:text-white",
]);

const Button = ({ name, onClick,className, classNameType = buttonStyle}) => {
  return (
    <button type="button" className={`${className} ${classNameType === "buttonOutline"? buttonOutline:classNameType}`} onClick={onClick}>
      {name}
    </button>
  );
};

Button.protoTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
