import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProvideAuth } from "./contexts/AuthContext";
import { useAuth } from "./contexts/AuthContext";
import { Routes } from "./constants/routes";
import { nanoid } from "nanoid";
import AuthenticatedApp from "./components/AuthenticatedApp/AuthenticatedApp";
import AboutUsPage from "./pages/AboutUs/AboutUs.page";
import AccountPage from "./pages/Account/Account.page";
import HomePage from "./pages/Home/Home.page";
import UnAuthenticatedPage from "./pages/UnAuthenticatedPage/UnAuthenticated.page";
// import Main from "../src/components/Main/Main";

export default function App() {
  const { isAuthenticated } = useAuth();

  return <>{isAuthenticated ? <AuthenticatedApp /> : <UnAuthenticatedPage />}</>;
}
