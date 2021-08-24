import PropTypes from "prop-types";
import {
  buttonStyle,
  buttonOutline,
  buttonLink,
  buttonLink1,
} from "./Button.style";

const Button = ({ name, onClick, className, variant = buttonStyle }) => {
  let styleBtn = buttonStyle;
  if (variant === "custom") styleBtn = "";
  else if (variant === "buttonOutline") styleBtn = buttonOutline;
  else if (variant === "link") styleBtn = buttonLink;
  else if (variant === "link1") styleBtn = buttonLink1;

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
