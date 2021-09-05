import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Routes } from "../../constants/routes";
import Layout from "./LoginSignLayout";
import { Child } from "./LoginSignChild";

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  return (
    <>
      <Layout child={<Child setIsLoggedIn={setIsLoggedIn} />} />
    </>
  );
}
