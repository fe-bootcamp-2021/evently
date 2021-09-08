import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getEvent } from "../../services/event.services";

export default function Event() {
    const history = useHistory();
    const [event,setEvent] = useState({});

    useEffect(()=>{
        console.log(history)
        getEvent("UZcUYPDTQdheyWHy3HljV");
    })
  return <>Ebefnjv</>;
}
