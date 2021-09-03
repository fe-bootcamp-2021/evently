import React, { useContext, useState, useEffect, createContext } from "react";
import { auth, app } from "../services/base";
import { addUser } from "../services/user.services";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (email, password) => {
    return app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
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
        addUser({
          email,
          password,
          uid: response.user.uid,
          birthday,
          endHour,
          firstName,
          gender,
          lastName,
          startHour,
          weekDayAvailability,
        });
        setUser(response.user);
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
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
    signInWithGmail,
  };
}
