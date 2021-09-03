import AboutUsPage from "../pages/AboutUs/AboutUs.page";
import AccountPage from "../pages/Account/Account.page";
import EventsPage from "../pages/Events/Events.page";
import HomePage from "../pages/Home/Home.page";
import unAuthenticatedPage from "../pages/unAuthenticatedPage/unAuthenticated.page";


export const Routes = {
  // home: () => ({
  //   path: "/home",
  //   text: "Home",
  //   component: HomePage,
  // }),
  
  // unAuthenticated: () => ({
  //   path: "/info",
  //   text: "Info",
  //   component: unAuthenticatedPage
  // }),
  // account: () => ({ path: "/account", text: "Account", component: AccountPage }),
  // oneOnOne: () => ({
  //   path: "/oneOnOne",
  //   text: "One On One",
  //   component: OneOnOne,
  // }),

  // group: () => ({ path: "/group", text: "Group", component: GroupEventFirstPage }),
  // error: () => ({ path: "*", text: "", component: ErrorPage }),

};

export const NavRoutes = {
  home: () => ({
    path: "/",
    text: "Home",
    component: HomePage,
  }),
  about: () => ({
    path: "/about",
    text: "About",
    component: AboutUsPage
  }),
  events: () => ({
    path: "/events",
    text: "Events",
    component: EventsPage
  }),
  account: () => ({ path: "/account", text: "Account", component: AccountPage }),

  // login: () => ({
  //   path: "/",
  //   text: "Log Out",

  //   component: Login,
  // }),
};
