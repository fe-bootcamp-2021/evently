import React from "react";
<<<<<<< HEAD
import Login from "./components/LoginSign/LoginSign";
import OneOnOne from "./components/OneOnOne/OneOnOne";
import GroupEventFirstPage from "./components/GroupEventPage/GroupEventFirstPage";
import Evently from "./components/Availability/ListView";

export default function App() {
  return (
    <div className="App">
      <Login />
      <OneOnOne />
      <GroupEventFirstPage />
      <Evently />
    </div>
=======
import { useAuth } from "./contexts/AuthContext";
import AuthenticatedApp from "./components/AuthenticatedApp/AuthenticatedApp";
import UnAuthenticatedPage from "./pages/UnAuthenticatedPage/UnAuthenticated.page";

export default function App() {
  const { isAuthenticated } = useAuth();

  return (
    <>{isAuthenticated ? <AuthenticatedApp /> : <UnAuthenticatedPage />}</>
>>>>>>> 618abd85ab6590427ce18cc3d6a64a92a0ce5909
  );
}
