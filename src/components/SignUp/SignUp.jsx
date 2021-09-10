import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../constants/routes";
import { home } from "../../constants/constants";
import Button from "../Button/Button";
import SignUpFirst from "./SignUpFirst";
import SignUpSecond from "./SignUpSecond";
import { nav } from "./SignUp.style";

export default function SignUp() {
  const [page, setPage] = useState(1);
  const [firstPageInfo, setFirstPageInfo] = useState(1);
  return (
    <>
      <div className={nav}>
        <Link to={Routes.unAuthenticated().path}>
          <Button name={home} variant="buttonOutline" className="m-1 mr-5" />
        </Link>
      </div>
      {page === 1 ? (
        <SignUpFirst setFirstPageInfo={setFirstPageInfo} setPage={setPage} />
      ) : (
        <SignUpSecond firstPageInfo={firstPageInfo} />
      )}
    </>
  );
}
