import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Layout from "./LoginSignLayout";
import { Child } from "./LoginSignChild";

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  return (
    <>
      {isLoggedIn ? (
        history.push("/home")
      ) : (
        <Layout child={<Child setIsLoggedIn={setIsLoggedIn} />} />
      )}
    </>
  );
}
