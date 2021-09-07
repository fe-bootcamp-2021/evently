import { Switch, Route } from "react-router-dom";
import { nanoid } from "nanoid";
import { Routes } from "../../constants/routes";

export default function UnAuthenticatedPage() {
  return (
    <Switch>
      {Object.values(Routes).map((fn) => {
        const { path, component } = fn();
        
        return <Route exact path={path} component={component} key={nanoid()} />;
      })}
    </Switch>
  );
}
