import classNames from "classnames/bind";

const buttonContainer = classNames([
  "flex",
  "justify-end",
  "z-0",
  "w-full",
  "mb-5",
]);

const button = classNames([
  "bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full",
]);

const Button = ({name}) => {
  return (
    <div className={buttonContainer}>
      <button id="button" type="button" className={button}>
        {name}
      </button>
    </div>
  );
};

export default Button;
