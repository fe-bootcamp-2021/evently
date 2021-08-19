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

const Button = ({ name, onClick, style = buttonStyle }) => {
  return (
    <button type="button" className={style} onClick={onClick}>
      {name}
    </button>
  );
};


Button.protoTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
export default Button;
