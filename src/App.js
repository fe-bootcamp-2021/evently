import React from "react";
import { useAuth } from "./contexts/AuthContext";
import AuthenticatedApp from "./components/AuthenticatedApp/AuthenticatedApp";
import Loading from "./components/Loading/Loading";
import UnAuthenticatedApp from "./components/UnAuthenticatedApp/UnAuthenticatedApp";
import { addGmailUser } from "./services/user.services";

export default function App() {
  const { user, gmailUser } = useAuth();

  if (user === null) {
    return <Loading />;
  }
  if (gmailUser) {
    addGmailUser(user);
  }
  return <>{user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}</>;
}
