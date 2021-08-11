import React, { useState } from "react";
import RadioColors from "../../constants/radioColors";
import { containerRadioBtn, radio } from "./EventColors.style";

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
