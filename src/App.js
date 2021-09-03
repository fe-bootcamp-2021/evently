import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUsPage from "./pages/AboutUs/AboutUs.page";
import AccountPage from "./pages/Account/Account.page";
import EventsPage from "./pages/Events/Events.page";
import HomePage from "./pages/Home/Home.page";
// import unAuthenticatedPage from "./pages/unAuthenticatedPage/unAuthenticated.page";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        {/* <Route path="/info">
          <unAuthenticatedPage />
        </Route> */}
        <Route exact path="/events">
          <EventsPage />
        </Route>
        <Route exact path="/about">
          <AboutUsPage />
        </Route>
        <Route exact path="/account">
          <AccountPage />
        </Route>
      </Switch>
    </Router>
  );
}
