import React, { useState } from "react";
import Layout from "./LoginSignLayout";
import { Child } from "./LoginSignChild";

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Layout child={<Child setIsLoggedIn={setIsLoggedIn} />} />
    </>
  );
}
