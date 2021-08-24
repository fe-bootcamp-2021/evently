import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Routes } from "../../constants/routes";
import Layout from "./LoginSignLayout";
import { Child } from "./LoginSignChild";
import { Routes } from "../../constants/routes";

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  return (
    <>
      {isLoggedIn ? (
        history.push(Routes.home().path)
      ) : (
        <Layout child={<Child setIsLoggedIn={setIsLoggedIn} />} />
      )}
    </>
  );
}
