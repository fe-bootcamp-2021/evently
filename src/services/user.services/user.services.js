import { db } from "../base";

<<<<<<< HEAD:src/services/user.services.js
export const addUser = ({
  email,
  password,
  uid,
  birthday,
  endHour,
  firstName,
  gender,
  lastName,
  startHour,
  weekDayAvailability,
}) => {
=======
export const addUser = ({ email, password, uid}) => {
>>>>>>> 7465d816d4305c0b5ce228866ca2e49f230f9eff:src/services/user.services/user.services.js
  return db.ref(`/users/${uid}`).set({
    email,
    password,
    uid,
    birthday,
    endHour,
    firstName,
    gender,
    lastName,
    startHour,
    weekDayAvailability,
  });
};

export const updateProfile = (uid, { description }) => {
  return db.ref("/users/").child(uid).update({
    description,
  });
};


