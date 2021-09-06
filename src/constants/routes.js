
import AboutUsPage from "../pages/AboutUs/AboutUs.page";
import AccountPage from "../pages/Account/Account.page";
import HomePage from "../pages/Home/Home.page";
import Login from "../components/LoginSign/LoginSign"
import UnAuthenticatedPage from "../pages/UnAuthenticatedPage/UnAuthenticated.page";
import SignUp from '../components/SignUp/SignUp'
import UnAuthenticatedApp from "../components/UnAuthenticatedApp/UnAuthenticatedApp";
import OneOnOne from "../components/OneOnOne/OneOnOne"



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

  // about: () => ({
  //   path: "/about",
  //   text: "About",
  //   component: About,

  // }), 
  unAuthenticated: () => ({
    path: "/",
    text: "Info",
    component: UnAuthenticatedApp
  }),

  // group: () => ({
  //   path: "/group",
  //   text: "Group",
  //   component: GroupEventFirstPage,
  // }),

  // error: () => ({ path: "*", text: "", component: ErrorPage }),


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
    component: AboutUsPage
  }),

  account: () => ({ path: "/account", text: "Account", component: AccountPage }),
  oneOnOne: () => ({
    path: "/oneOnOne",
    text: "One On One",
    component: OneOnOne
  }),
};
