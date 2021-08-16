import { Switch, Route } from "react-router-dom";
import Home from "./../Home/Home";

export default function Main(props) {
  return (
    <Switch>{<Route exact path={"/home"} component={() => <Home />} />}</Switch>
  );
}
