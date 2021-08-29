import React from "react";
import Main from "../src/components/LoginSign/LoginSign";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./components/Home/Home";
import GroupEventFirstPage from "./components/GroupEventPage/GroupEventFirstPage";
import Events from "./pages/Events/Events";

export default function App() {
  return (
    <AuthProvider>
    <div className="App">
      {/* <Main/>
      <GroupEventFirstPage /> */}
     <Events/>
    </div>
  </AuthProvider>

  );
}
