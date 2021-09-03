import { useState } from "react";
import Button from "../../components/Button/Button";
import {
  GROUP_EVENT_NAME,
  ONE_ON_ONE_EVENT_NAME,
} from "../../constants/constants";
import GroupEventScheduler from "./GroupEvent/GroupEvent";
import OneOnOneScheduler from "./OneOnOne/OneOnOne";

export default function Events() {
  const [isGroupShown, setIsGroupShown] = useState(true);

  const showGroupScheduler = () => {
    setIsGroupShown(true);
  };
  const showOneOnOneScheduler = () => {
    setIsGroupShown(false);
  };

  return (
    <>
      <p>Create your Event</p>
      <div>
        <Button name={GROUP_EVENT_NAME} onClick={showGroupScheduler} />
        <Button name={ONE_ON_ONE_EVENT_NAME} onClick={showOneOnOneScheduler} />
      </div>
      {isGroupShown ? <GroupEventScheduler /> : <OneOnOneScheduler />}
    </>
  );
}
