import Home from "../components/Home/Home";
import Account from "../components/Account/Account";
import Login from "../components/LoginSign/LoginSign";
import SignUp from "../components/SignUp/SignUp";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import OneOnOne from "../components/OneOnOne/OneOnOne";
import GroupEventFirstPage from "../components/GroupEventPage/GroupEventFirstPage";

export const Routes = {
  login: () => ({
    path: "/",
    text: "Login",
    component: Login,
  }),
  signup: () => ({
    path: "/signup",
    text: "Sign Up",
    component: SignUp,
  }),
  home: () => ({
    path: "/home",
    text: "Home",
    component: Home,
  }),
  // about: () => ({
  //   path: "/about",
  //   text: "About",
  //   component: About,
  // }),
  account: () => ({ path: "/account", text: "Account", component: Account }),
  oneOnOne: () => ({
    path: "/oneOnOne",
    text: "One On One",
    component: OneOnOne,
  }),
  group: () => ({ path: "/group", text: "Group", component: GroupEventFirstPage }),
  error: () => ({ path: "*", text: "", component: ErrorPage }),
};

export const NavRoutes = {
  home: () => ({
    path: "/home",
    text: "Home",
    component: Home,
  }),
  account: () => ({ path: "/account", text: "Account", component: Account }),
  login: () => ({
    path: "/",
    text: "Log Out",
    component: Login,
  }),
};
