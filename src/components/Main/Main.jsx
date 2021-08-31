import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Routes } from "../../constants/routes";

export default function Main() {
  const auth = useAuth();
  const history = useHistory();

  useEffect(() => {
    auth.user ? history.push(Routes.home().path) : history.push(Routes.login().path);
  }, []);

  return <></>;
}
