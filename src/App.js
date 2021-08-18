import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Main />
      </Router>
    </div>
  );
}
