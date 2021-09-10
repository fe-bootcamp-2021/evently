import React from "react";
import RadioColors from "../../constants/radioColors";
import { containerRadioBtn, radio } from "./EventColors.style";

export default function EventColors({ selected, setSelected }) {
  const handleChange = (ev) => {
    setSelected(Number(ev.target.value));
  };

  return (
    <div className={containerRadioBtn}>
      {RadioColors().map(({ id, name, classNames }) => {
        const colorEvent = `${radio} bg-${classNames} checked:bg-${classNames}`;
        const checked = selected === id ? "checked" : "";
        return (
          <input
            key={id}
            type="radio"
            name={name}
            value={id}
            className={colorEvent}
            onChange={handleChange}
            checked={checked}
          />
        );
      })}
    </div>
  );
}
