import React from "react";
import Login from "./components/LoginSign/LoginSign";
import OneOnOne from "./components/OneOnOne/OneOnOne";
import OneOnOneSecond from "./components/OneOnOne/OneOnOneSecond";
import Evently from "./components/Availability/ListView";
import GroupEventSecondPage from "./components/GroupEventPage/GroupEventSecondPage"

export default function App() {
  return (
    <div className="App">
      <Login />
      <OneOnOne />
      <Evently />
      <GroupEventSecondPage/>
      <OneOnOneSecond />
    </div>
  );
}
