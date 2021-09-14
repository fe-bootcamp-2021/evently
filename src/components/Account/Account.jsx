import React, { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import {
  DEFAULT_ACCOUNT_PICTURE_URL,
  EMAIL,
  PAGE_NOT_VERIFIED,
  PAGE_VERIFIED,
  PASSWORD,
  TEXT,
  UPLOAD,
} from "../../constants/constants";
import {
  getUser,
  addUser,
  getImage,
  addImage,
  getGmailUser,
} from "../../services/user.services";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";
import Input from "../Input/Input";
import {
  emailContainer,
  emailContent,
  emailText,
  fileInputField,
  firstNameContainer,
  firstNameText,
  fullNameContainer,
  imageAndButtonContainer,
  imageContainer,
  imageContent,
  inputFieldStyle,
  italicText,
  labelContainer,
  lastNameText,
  passwordContainer,
  passwordContent,
  passwordText,
  settingsText,
  settingsTextContainer,
} from "./Account.style";

export default function Account() {
  const [image, setImage] = useState();
  const [newUser, setNewUser] = useState({});
  const { user, gmailUser } = useAuth();
  const id = user?.uid;
  useEffect(() => {
    if (gmailUser) {
      getGmailUser(id).then((user) => {
        setNewUser(user[id]);
        setImage((prev) => ({ ...prev, preview: user[id].photoURL }));
      });
    } else {
      getUser(id).then((response) => {
        console.log(response[id]);
        let birthday = response[id].birthday.split(" ");
        response[id].birthday = birthday[0];
        setNewUser(response[id]);
      });
      getImage(id).then((url) => {
        if (url) {
          setImage((prev) => ({ ...prev, preview: url }));
        }
      });
    }
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleUpload = (e) => {
    addImage(id, image, setImage);
  };

  async function handleUpdateUser() {
    console.log(newUser);
    addUser(newUser);
  }

  return (
    <>
      <div className="shadow-md">
        <Navbar />
      </div>

      <div className={imageContainer}>
        <div>
          <div className={labelContainer}>
            <label>
              {image ? (
                <img className={imageContent} src={image.preview} alt="dummy" />
              ) : (
                <img
                  className={imageContent}
                  src={DEFAULT_ACCOUNT_PICTURE_URL}
                  alt="dummy"
                />
              )}
            </label>

            <div className={fileInputField}>
              <label className={imageAndButtonContainer}>
                <span className="text-base leading-normal">+</span>
                <Input type="file" onChange={handleChange} className="hidden" />
              </label>
            </div>
          </div>
          <Button name={UPLOAD} onClick={handleUpload} />
        </div>

        <div className={settingsTextContainer}>
          <h1 className={settingsText}>Account Settings</h1>
          <p className="px-4 my-4">
            Account:{" "}
            {newUser?.emailVerified ? PAGE_VERIFIED : PAGE_NOT_VERIFIED}
          </p>
          <div className={fullNameContainer}>
            <div className={firstNameContainer}>
              <label className={firstNameText}>
                First Name
              </label>
              <Input
                className={inputFieldStyle}
                id="grid-first-name"
                type={TEXT}
                value={newUser?.firstName}
                placeholder=""
                onChange={(ev) => {
                  return setNewUser({ ...newUser, firstName: ev.target.value });
                }}
              />
              <p className={italicText}>
                Please fill out this field.
              </p>
            </div>
            <div className="md:w-1/2 px-3">
              <label className={lastNameText}>
                Last Name
              </label>
              <Input
                className={inputFieldStyle}
                id="grid-last-name"
                type={TEXT}
                value={newUser?.lastName}
                placeholder=""
                onChange={(ev) => {
                  return setNewUser({ ...newUser, lastName: ev.target.value });
                }}
              />
            </div>
          </div>
          <Input
            className={inputFieldStyle}
            id="grid-first-name"
            type={TEXT}
            value={newUser?.birthday}
            placeholder=""
            onChange={(ev) => {
              return setNewUser({ ...newUser, birthday: ev.target.value });
            }}
          />
          <div className={passwordContainer}>
            <div className={passwordContent}>
              <label className={passwordText}>
                Password
              </label>
              <Input
                className={inputFieldStyle}
                id="grid-password"
                type={PASSWORD}
                placeholder="******************"
                value={newUser?.password}
                onChange={(ev) => {
                  return setNewUser({ ...newUser, password: ev.target.value });
                }}
              />
              <p className={italicText}>
                Make it as long and as crazy as you'd like
              </p>
            </div>
          </div>
          <div className={emailContainer}>
            <div className={emailContent}>
              <label className={emailText}>
                E-mail
              </label>
              <Input
                className={inputFieldStyle}
                type={EMAIL}
                value={newUser?.email}
                onChange={(ev) => {
                  return setNewUser({ ...newUser, email: ev.target.value });
                }}
              />
            </div>
          </div>

          <Button name="Save" onClick={handleUpdateUser} />
        </div>
      </div>
    </>
  );
}
