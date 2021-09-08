import React from "react";
import { useAuth } from "./contexts/AuthContext";
import AuthenticatedApp from "./components/AuthenticatedApp/AuthenticatedApp";
import UnAuthenticatedPage from "./pages/UnAuthenticatedPage/UnAuthenticated.page";

export default function App() {
  const { user } = useAuth();

  if (user === null) {
    return <p>Loading...</p>;
  }

  return <>{user ? <AuthenticatedApp /> : <UnAuthenticatedPage />}</>;

}
