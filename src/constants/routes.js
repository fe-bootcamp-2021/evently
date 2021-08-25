import Home from "../components/Home/Home";
import Account from "../components/Account/Account";
import Login from "../components/LoginSign/LoginSign";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import OneOnOne from "../components/OneOnOne/OneOnOne";
import OneOnOneSecond from "../components/OneOnOne/OneOnOneSecond";
import GroupEventFirstPage from "../components/GroupEventPage/GroupEventFirstPage";
import GroupEventSecondPage from "../components/GroupEventPage/GroupEventSecondPage";

export const Routes = {
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
  logInSign: () => ({
    path: "/logInSign",
    text: "LogInSign",
    component: Login,
  }),
  account: () => ({ path: "/account", text: "Account", component: Account }),
  oneOnOne: () => ({
    path: "/oneOnOne",
    text: "One On One",
    component: OneOnOne,
  }),
  oneOnOne1: () => ({
    path: "/oneOnOne2",
    text: "One On One Second",
    component: OneOnOneSecond,
  }),
  group: () => ({
    path: "/group",
    text: "Group",
    component: GroupEventFirstPage,
  }),
  group2: () => ({
    path: "/group2",
    text: "Group Second",
    component: GroupEventSecondPage,
  }),
  error: () => ({ path: "*", text: "", component: ErrorPage }),
};

export const NavRoutes = {
  home: () => ({
    path: "/home",
    text: "Home",
    component: Home,
  }),
  account: () => ({ path: "/account", text: "Account", component: Account }),
  logInSign: () => ({
    path: "/logInSign",
    text: "LogIn",
    component: Login,
  }),
};
