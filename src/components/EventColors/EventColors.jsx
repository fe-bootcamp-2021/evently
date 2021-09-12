import React from "react";
import RadioColors from "../../constants/radioColors";
import Input from "../Input/Input";
import { containerRadioBtn, radio } from "./EventColors.style";

export default function EventColors({ selected, setSelected }) {
  const handleChange = (ev) => {
    setSelected(Number(ev.target.value));
  };

  return (
    <div className={containerRadioBtn}>
      {RadioColors().map(({ id, name, classNames }) => {
        const colorEvent = `${radio} ${classNames} checked:bg-${classNames}`;
        console.log(colorEvent)
        const checked = selected === id ? "checked" : "";
        return (
          <Input
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
