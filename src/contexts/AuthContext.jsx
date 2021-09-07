import React, { useContext, useState, useEffect, createContext } from "react";
import { auth, app } from "../services/base";
import { addUser } from "../services/user.services/user.services";

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};
// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email, password) => {
    return app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setIsAuthenticated(true)
        setUser(response.user);
        return response.user;
      });
  };

  const signInWithGmail = () => {
    return app.auth().signInWithEmailLink();
  };

  const signup = ({
    email,
    password,
    birthday,
    endHour,
    firstName,
    gender,
    lastName,
    startHour,
    weekDayAvailability,
  }) => {
    return app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        response.user.sendEmailVerification();
        addUser({ email, password, uid: response.user.uid,
          birthday,
          endHour,
          firstName,
          gender,
          lastName,
          startHour,
          weekDayAvailability, });
        setUser(response.user);
        setIsAuthenticated(true)
        return response.user;
      });
  };

  const signout = () => {
    return app
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };

  const sendPasswordResetEmail = (email) => {
    return app
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      });
  };

  const confirmPasswordReset = (code, password) => {
    return app
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true;
      });
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.

  useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
    user,
    isAuthenticated,
    setIsAuthenticated,
    setUser,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
    signInWithGmail,
  };
}