import React from "react";
import Main from "../src/components/LoginSign/LoginSign";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Main />
    </div>
  </AuthProvider>

  );
}
