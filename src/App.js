import React from "react";
import Login from "./components/LoginSign/LoginSign";
import OneOnOne from "./components/OneOnOne/OneOnOne";
import Evently from "./components/Availability/ListView";

export default function App() {
  return (
    <div className="App">
      <Login />
      <OneOnOne />
      <Evently />
    </div>
  );
}
