import React, { useContext, useState, useEffect } from "react";
import { auth } from "../services/base";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function userSignUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
    .then((response) => {
      response.user.sendEmailVerification();
    });
    
  }

  function verifyUser(email) {
    return auth.sendSignInLinkToEmail(email);
  }

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
    userSignUp,
    verifyUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
