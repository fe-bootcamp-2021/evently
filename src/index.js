import React from "react";
import ReactDOM from "react-dom";
import { nanoid } from "nanoid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from "./constants/routes";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProvideAuth } from "./contexts/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
