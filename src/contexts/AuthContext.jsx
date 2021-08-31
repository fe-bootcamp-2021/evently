import React, { useContext, useState, useEffect } from "react";
import { auth } from "../services/base";
import { addUser } from "../services/user.services/user.services";
import Home from "../components/Home/Home";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  const signin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password).then((response) => {
      setCurrentUser(response.user);
      return response.user;
    });
  };

  const signup = (email, password) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        response.user.sendEmailVerification()
        console.log(response.user)
        setCurrentUser(response.user)
        addUser({ email, password, uid: response.user.uid});
        return response.user;
      });
  };
  const signout = () => {
    return auth.signOut().then(() => {
      setCurrentUser(false);
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(false);
      }

    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    signout,
    signin
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
