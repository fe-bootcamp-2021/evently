import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { nanoid } from "nanoid";
import { Routes } from "./constants/routes";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProvideAuth } from "./contexts/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <ProvideAuth>
      <Router>
        <App />
        <Switch>
          {Object.values(Routes).map((fn) => {
            const { path, component } = fn();
            return (
              <Route exact path={path} component={component} key={nanoid()} />
            );
          })}
        </Switch>
      </Router>
    </ProvideAuth>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
