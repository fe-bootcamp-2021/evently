import { db } from "../base";

export const addUser = ({ email, password, uid}) => {
  return db.ref(`/users/${uid}`).set({
    email,
    password,
    uid,
  });
};

export const updateProfile = (uid, { description }) => {
  return db.ref("/users/").child(uid).update({
    description,
  });
};


