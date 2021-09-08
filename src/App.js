import React from "react";
import Main from "../src/components/LoginSign/LoginSign";
import Home from "./components/Home/Home";
import UnAuthenticatedApp from "./components/UnAuthenticatedApp/UnAuthenticatedApp";
import { AuthProvider } from "./contexts/AuthContext";
import BookingPage from "./components/BookingPage/BookingPage";
import Account from "./components/Account/Account";
import OneOnOne from "./components/OneOnOne/OneOnOne";

export default function App() {
  return (
    <AuthProvider>
      <div className="App">
        {/* <UnAuthenticatedApp /> */}
        {/* <Home /> */}
        {/* <Main /> */}
        {/* <BookingPage /> */}
        <Account />
        {/* <OneOnOne /> */}
      </div>
    </AuthProvider>
  );
}
