import { db } from "../libs/firebase.libs";
import { storage } from "../libs/firebase.libs";

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
  try {
    return db
      .ref(`users`)
      .orderByChild("uid")
      .equalTo(id)
      .once("value")
      .then((snapshot) => {
        console.log(snapshot);
        return snapshot.val();
      });
  } catch (err) {
    console.log(err);
  }
};

export const addImage = (id, image, setImage) => {
  const ref = storage.ref(`/${id}/${image.raw.name}`);
  const uploadTask = ref.put(image.raw);
  uploadTask.on("state_changed", console.log, console.error, () => {
    ref.getDownloadURL().then((url) => {
      setImage((prevObject) => ({ ...prevObject, preview: url }));
    });
  });
};
export const getImage = (id) => {
  return (
    storage
      .ref(`/${id}/photo.jpg`)
      .getDownloadURL()
      .then((url) => {
        return url;
      })
  );
};
