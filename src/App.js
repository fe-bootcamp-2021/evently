import React from "react";
import { useAuth } from "./contexts/AuthContext";
import AuthenticatedApp from "./components/AuthenticatedApp/AuthenticatedApp";
import Loading from "./components/Loading/Loading";
import UnAuthenticatedPage from "./pages/UnAuthenticatedPage/UnAuthenticated.page"

export default function App() {
  const { user } = useAuth();

  if (user === null) {
    return <Loading />;
  }

  return <>{user ? <AuthenticatedApp /> : <UnAuthenticatedPage />}</>;
}
