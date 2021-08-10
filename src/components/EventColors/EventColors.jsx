import React, { useState } from "react";
import RadioColors from "../../constants/radioColors";

let classNames = require("classnames");

const containerRadioBtn = classNames(["flex"]);

const radio = classNames([
  "form-radio",
  "lg:h-9",
  "lg:w-9",
  "m-1",
  "border-none",
  "checked:border-transparent",
  "cursor-pointer",
  "h-4",
  "w-4",
]);

export default function EventColors() {
  const [isChecked, setIsChecked] = useState(1);

  const handleChange = (ev) => {
    setIsChecked(Number(ev.target.value));
  };

  return (
    <div className={containerRadioBtn}>
      {RadioColors().map((el) => {
        const checked = isChecked === el.value ? "checked" : "";
        return (
          <input
            key={Math.random()}
            type="radio"
            name={el?.name}
            value={el?.value}
            className={`${radio} ${el?.color} checked:${el?.color}`}
            onChange={handleChange}
            {...{ checked }}
          />
        );
      })}
    </div>
  );
}
