import { NavRoutes } from "../constants/routes";

export function getUrl() {
  const url = window.location.href;
  const urlName = url.replace(NavRoutes.home().path, "");

  return urlName;
}
