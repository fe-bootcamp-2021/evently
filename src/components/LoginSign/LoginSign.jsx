import React, { useState } from "react";
import Layout from "./LoginSignLayout";
import {Child} from './LoginSignChild'

export default function Login() {
  const [login, setLogin] = useState()

  return <Layout child={<Child login={login} />}></Layout>;
}
