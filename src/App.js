import React from "react";
import { useAuth } from "./contexts/AuthContext";
import AuthenticatedApp from "./components/AuthenticatedApp/AuthenticatedApp";
import UnAuthenticatedPage from "./pages/UnAuthenticatedPage/UnAuthenticated.page";
import EventCard from "./components/EventCard/EventCard";

export default function App() {
  const { user } = useAuth();

  if (user === null) {
    return <p>Loading...</p>;
  }

  return <>{user ? <EventCard /> : <EventCard />}</>;
}
