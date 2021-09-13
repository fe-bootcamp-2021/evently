import Account from "../components/Account/Account";
import Home from "../components/Home/Home";
import Login from "../components/LoginSign/LoginSign";
import SignUp from "../components/SignUp/SignUp";
import Event from "../components/Event/Event";
import UnAuthenticated from "../components/UnAuthenticated/UnAuthenticated";
import OneOnOne from "../components/OneOnOne/OneOnOne";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import About from "../components/About/About";

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

  event: (id=":id") => ({
    path: `/event/${id}`,
    text: "event",
    component: Event,
  }),

  unAuthenticated: () => ({
    path: "/",
    text: "Info",
    component: UnAuthenticated,
  }),

  error: () => ({ path: "*", text: "", component: ErrorPage }),
};

export const NavRoutes = {
  home: () => ({
    path: "/home",
    text: "Home",
    component: Home,
  }),
  about: () => ({
    path: "/about",
    text: "About",
    component: About,
  }),

  account: () => ({
    path: "/account",
    text: "Account",
    component: Account,
  }),
  oneOnOne: () => ({
    path: "/oneOnOne",
    text: "One On One",
    component: OneOnOne,
  }),
  event: (id=":id") => ({
    path: `/event/${id}`,
    text: "event",
    component: Event,
  }),
};
