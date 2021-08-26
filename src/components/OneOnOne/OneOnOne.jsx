import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import OneOnOneFirst from "./OneOnOneFirst";
import OneOnOneSecond from "./OneOnOneSecond";
import { addEvent } from "../../services/event.services.js";

export default function OneOnOne() {
  const [page, setPage] = useState(1);

  const [firstPageInfo, setFirstPageInfo] = useState({});
  const [secondPageInfo, setSecondPageInfo] = useState({});

  return (
    <>
      <Navbar />
      {page === 2 ? (
        <OneOnOneSecond setSecondPageInfo={setSecondPageInfo} />
      ) : (
        <OneOnOneFirst setFirstPageInfo={setFirstPageInfo} setPage={setPage} />
      )}
    </>
  );
}
