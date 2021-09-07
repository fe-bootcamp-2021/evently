import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import OneOnOneFirst from "./OneOnOneFirst";
import OneOnOneSecond from "./OneOnOneSecond";

export default function OneOnOne() {
  const [page, setPage] = useState(1);

  const [firstPageInfo, setFirstPageInfo] = useState({});
  const [secondPageInfo, setSecondPageInfo] = useState({});

  return (
    <>
      <Navbar />
      {page === 2 ? (
        <OneOnOneSecond
          setSecondPageInfo={setSecondPageInfo}
          setFirstPageInfo={firstPageInfo}
        />
      ) : (
        <OneOnOneFirst setFirstPageInfo={setFirstPageInfo} setPage={setPage} />
      )}
    </>
  );
}
