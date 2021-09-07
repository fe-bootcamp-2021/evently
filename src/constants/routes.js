import AccountPage from "../pages/Account/Account.page";
import HomePage from "../pages/Home/Home.page";
import Login from "../components/LoginSign/LoginSign";
import SignUp from "../components/SignUp/SignUp";
import UnAuthenticatedApp from "../components/UnAuthenticatedApp/UnAuthenticatedApp";
import OneOnOne from "../components/OneOnOne/OneOnOne";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PageAboutUS from "../pages/AboutUS/PageAboutUS";

export const Routes = {
  login: () => ({
    path: "/login",
    text: "Log In",
    component: Login,
  }),

  signup: () => ({
    path: "/signup",
    text: "Sign Up",
    component: SignUp,
  }),

  unAuthenticated: () => ({
    path: "/",
    text: "Info",
    component: UnAuthenticatedApp,
  }),

  error: () => ({ path: "*", text: "", component: ErrorPage }),
};

export const NavRoutes = {
  home: () => ({
    path: "/home",
    text: "Home",
    component: HomePage,
  }),
  about: () => ({
    path: "/about",
    text: "About",
    component: PageAboutUS,
  }),

  account: () => ({
    path: "/account",
    text: "Account",
    component: AccountPage,
  }),
  oneOnOne: () => ({
    path: "/oneOnOne",
    text: "One On One",
    component: OneOnOne,
  }),
};
