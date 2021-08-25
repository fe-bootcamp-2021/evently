import React from "react";
import Main from "../src/components/LoginSign/LoginSign";
import Home from "./components/Home/Home";
import UnAuthenticatedApp from "./components/UnAuthenticatedApp/UnAuthenticatedApp";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <div className="App">
        {/* <UnAuthenticatedApp /> */}
        <Home />
        {/* <Main /> */}
      </div>
    </AuthProvider>
  );
}
