import React, { useState } from "react";
import RadioColors from "../../constants/radioColors";
import { containerRadioBtn, radio } from "./EventColors.style";

export default function EventColors() {
  const [isChecked, setIsChecked] = useState(RadioColors()[0].id);

  const handleChange = (ev) => {
    setIsChecked(Number(ev.target.value));
  };

  return (
    <div className={containerRadioBtn}>
      {RadioColors().map(({ id, name, classNames }) => {
        const checked = isChecked === id ? "checked" : "";
        return (
          <input
            key={id}
            type="radio"
            name={name}
            value={id}
            className={`${radio} ${classNames} checked:${classNames}`}
            onChange={handleChange}
            checked={checked}
          />
        );
      })}
    </div>
  );
}
