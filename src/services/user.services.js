import { db } from "../libs/firebase.libs";

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

export const getUser = (id) => {
  console.log(id);
  try {
    return db
      .ref(`users`)
      .orderByChild("uid")
      .equalTo(id)
      .once("value")
      .then((snapshot) => {
        return snapshot.val();
      });
  } catch (err) {
    console.log(err);
  }
};
