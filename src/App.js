import React from "react";
import { useAuth } from "./contexts/AuthContext";
import AuthenticatedApp from "./components/AuthenticatedApp/AuthenticatedApp";
import Loading from "./components/Loading/Loading";
import UnAuthenticatedApp from "./components/UnAuthenticatedApp/UnAuthenticatedApp";


export default function App() {
  const { user } = useAuth();

  if (user === null) {
    return <Loading />;
  }

  return <>{user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}</>;
}
