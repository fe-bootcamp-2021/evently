import React from "react";
import Layout from "./LoginLayout";
import { Child } from "./LoginChild";
// import { Link } from "react-router-dom";



  


export default function Login() {
  return (
    <Layout child={<Child/>}/>
  );
}
