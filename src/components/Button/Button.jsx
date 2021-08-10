import classNames from "classnames/bind";

const buttonContainer = classNames([
  "flex",
  "justify-end",
  "z-0",
  "w-full",
  "mb-5",
]);

const button = classNames([
  "w-1/4",
  "px-6",
  "py-3",
  "mt-3",
  "lg:text-lg",
  "text-sm",
  "text-white",
  "transition-all",
  "duration-150",
  "ease-linear",
  "rounded-lg",
  "shadow",
  "outline-none",
  "bg-custom-purple-1",
  "hover:bg-pink-600",
  "hover:shadow-lg",
  "focus:outline-none",
]);

const Button = (props) => {
  return (
    <div className={buttonContainer}>
      <button id="button" type="button" className={button}>
        {props.name} {">>"}
      </button>
    </div>
  );
};

export default Button;
