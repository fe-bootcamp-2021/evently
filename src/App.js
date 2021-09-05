import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main/Main";
import AboutUsPage from "./pages/AboutUs/AboutUs.page";
import AccountPage from "./pages/Account/Account.page";
import EventsPage from "./pages/Events/Events.page";
import HomePage from "./pages/Home/Home.page";
import UnAuthenticatedPage from "./pages/UnAuthenticatedPage/UnAuthenticated.page";

export default function App() {
  return (
    <Router>
    <UnAuthenticatedPage/>
    </Router>
  );
}
