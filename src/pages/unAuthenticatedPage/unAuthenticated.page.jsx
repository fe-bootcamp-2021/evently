import { logIn, signUp } from "../../constants/constants";
import { Link, Switch, Route } from "react-router-dom";
import { nanoid } from "nanoid";
import { Routes } from "../../constants/routes";
import Login from "../../components/LoginSign/LoginSign";
import Button from "../../components/Button/Button";
import UnAuthenticatedApp from "../../components/UnAuthenticatedApp/UnAuthenticatedApp";

export default function UnAuthenticatedPage() {
  return (
    <Switch>
        {Object.values(Routes).map((fn) => {
          const { path, component } = fn();
          return (
            <Route exact path={path} component={component} key={nanoid()} />
          );
        })}
      </Switch>
  );
}
