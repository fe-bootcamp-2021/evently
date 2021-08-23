import React, { useContext, useState, useEffect } from "react";
import { auth } from "../services/base";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function userSignUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function verifyUser(email) {
    return auth.sendSignInLinkToEmail(email);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userSignUp,
    verifyUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
