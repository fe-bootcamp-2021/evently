import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Account from "./components/Account/Account";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/account" component={Account} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
