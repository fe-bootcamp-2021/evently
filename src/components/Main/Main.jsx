import Login from "../LoginSign/LoginSign";
import { useAuth } from "../../contexts/AuthContext";
import Home from "../Navbar/Navbar";

export default function Main() {
  const auth = useAuth();
  return <>{auth.user ? <Home /> : <Login />}</>;
}
