import React from "react";
import Layout from "./LoginLayout";
import { Child } from "./LoginChild";

export default function Login() {
  return <Layout child={<Child />} />;
}
