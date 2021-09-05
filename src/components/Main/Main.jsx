import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Routes } from "../../constants/routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUsPage from "../../pages/AboutUs/AboutUs.page";
import AccountPage from "../../pages/Account/Account.page";
import EventsPage from "../../pages/Events/Events.page";
import HomePage from "../../pages/Home/Home.page";

export default function Main() {
  // const auth = useAuth();
  // const history = useHistory();

  // useEffect(() => {
  //   auth.user ? history.push(Routes.home().path) : history.push(Routes.login().path);
  // }, []);

  return (
    <>
       <Switch>
        <Route exact path="/home">
          <HomePage />
        </Route>
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
    </>
  )
}
