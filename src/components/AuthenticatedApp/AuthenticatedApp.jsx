import { Route, Switch } from "react-router-dom";
import { nanoid } from "nanoid";
import { NavRoutes } from "../../constants/routes";

export default function AuthenticatedApp() {
  return (
    <Switch>
      {Object.values(NavRoutes).map((fn) => {
        const { path, component } = fn();
        return <Route exact path={path} component={component} key={nanoid()} />;
      })}
    </Switch>
  );
}
