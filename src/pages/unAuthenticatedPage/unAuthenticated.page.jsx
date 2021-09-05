import { logIn, signUp } from "../../constants/constants";
import { Link, Switch, Route } from "react-router-dom";
import { Routes } from "../../constants/routes";
import Login from "../../components/LoginSign/LoginSign";
import Button from "../../components/Button/Button";
import UnAuthenticatedApp from "../../components/UnAuthenticatedApp/UnAuthenticatedApp";

export default function UnAuthenticatedPage() {
  return (
    <Switch>
      <Route exact path="/">
        <UnAuthenticatedApp />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
}
