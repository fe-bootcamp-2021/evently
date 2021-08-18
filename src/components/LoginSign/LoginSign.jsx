import React from "react";
import Layout from "./LoginSignLayout";
import {Child} from './LoginSignChild'

export default function Login() {
  return <Layout child={<Child />} />;
}
