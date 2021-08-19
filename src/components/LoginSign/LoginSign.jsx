import React from "react";
import { useState } from "react";
import Home from "../Home/Home";
import Layout from "./LoginSignLayout";
import { Child } from "./LoginSignChild";

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <Home />
      ) : (
        <Layout child={<Child setIsLoggedIn={setIsLoggedIn} />} />
      )}
    </>
  );
}
