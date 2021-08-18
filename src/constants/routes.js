import Home from "../components/Home/Home"
import Account from "../components/Account/Account"
import ErrorPage from "../components/ErrorPage/ErrorPage"

export const Routes = {
    home: () => ({
      path: "/home",
      text: "Home",
      component: Home,
    }),
    account: () => ({ path: "/account", text: "Account", component: Account }),
    error: () => ({ path: "*", text: "", component: ErrorPage }),
  };
  