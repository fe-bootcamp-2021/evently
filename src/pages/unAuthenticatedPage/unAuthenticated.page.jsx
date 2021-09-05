import { logIn, signUp } from "../../constants/constants";
import { Link, Switch, Route } from "react-router-dom";
import { Routes } from "../../constants/routes";
import Login from "../../components/LoginSign/LoginSign";
import Button from "../../components/Button/Button";
import UnAuthenticatedApp from "../../components/UnAuthenticatedApp/UnAuthenticatedApp";

export default function UnAuthenticatedPage() {
  return (
    <>
      <Link to={Routes.login().path}>
        <Button name={logIn} />
      </Link>
      <Link>
        <Button name={signUp} />
      </Link>
      <Switch>
        <Route exact path={Routes.unAuthenticated().path}>
          <UnAuthenticatedApp />
        </Route>
        <Route exact path={Routes.login().path}>
          <Login />
        </Route>
      </Switch>
    </>
  );
}
