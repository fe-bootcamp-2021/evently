import PropTypes from "prop-types";
import { buttonStyle, buttonOutline } from "./Button.style";

const Button = ({ name, onClick, className, variant = buttonStyle }) => {
  let styleBtn = buttonStyle;
  if (variant === "buttonOutline") styleBtn = buttonOutline;

  return (
    <button
      type="button"
      className={`${className} ${styleBtn}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

Button.protoTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
