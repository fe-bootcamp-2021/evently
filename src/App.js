import React from "react";
import Main from "../src/components/LoginSign/LoginSign";
import Home from "./components/Home/Home";
import UnAuthenticatedApp from "./components/UnAuthenticatedApp/UnAuthenticatedApp";
import { AuthProvider } from "./contexts/AuthContext";

import BookingPage from "./components/BookingPage/BookingPage";

import GroupEventFirstPage from "./components/GroupEventPage/GroupEventFirstPage";
import Events from "./pages/Events/Events";


export default function App() {
  return (
    <AuthProvider>

    <div className="App">
     <Events/>
    </div>
  </AuthProvider>


  );
}
