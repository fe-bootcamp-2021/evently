import { db } from "../base";

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


