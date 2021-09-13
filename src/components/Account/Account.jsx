import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useAuth } from "../../contexts/AuthContext";
import {
  getUser,
  addUser,
  getImage,
  addImage,
} from "../../services/user.services";
import { UPLOAD } from "../../constants/constants";

export default function Account() {
  const [image, setImage] = useState();
  const [newUser, setNewUser] = useState({});
  const { user } = useAuth();
  const id = user?.uid;
  useEffect(() => {
    getUser(id).then((response) => {
      let birthday = response[id].birthday.split(" ");
      response[id].birthday = birthday[0];
      setNewUser(response[id]);
    });
    getImage(id).then((url) => setImage((prev) => ({ ...prev, preview: url })));
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
    addUser(newUser);
  }

  return (
    <>
      <div className="shadow-md">
        <Navbar />
      </div>

      <div className="w-8/12 mx-auto h-screen flex justify-around my-12">
        <div>
          <div className="border border-blue-900 relative rounded-full">
            <label>
              {image ? (
                <img
                  className="w-56 h-56 rounded-full object-cover object-center"
                  src={image.preview}
                  alt="dummy"
                />
              ) : (
                <img
                  className="w-56 h-56 rounded-full object-cover object-center"
                  src="https://static.wixstatic.com/media/b17c62_326cef80bf1b44dd956aca581b0530f7~mv2.jpg/v1/crop/x_235,y_0,w_1069,h_1069/fill/w_544,h_544,al_c,q_80,usm_0.66_1.00_0.01/kemptons-blank-profile-picture.webp"
                  alt="dummy"
                />
              )}
            </label>

            <div className="absolute top-0 right-3 ">
              <label className="flex flex-col items-center w-8 h-8 absolute top-0 right-4 rounded-full bg-white text-blue-900 border border-blue-900 cursor-pointer hover:bg-blue-700 hover:text-white">
                <span className="text-base leading-normal">+</span>
                <Input type="file" onChange={handleChange} className="hidden" />
              </label>
            </div>
          </div>
          <Button name={UPLOAD} onClick={handleUpload} />
        </div>

        <div className=" flex flex-col my-2 ml-2">
          <h1 className="text-3xl mb-6 text-blue-900">Account Settings</h1>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                First Name
              </label>
              <Input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="grid-first-name"
                type="text"
                value={newUser?.firstName}
                placeholder=""
                onChange={(ev) => {
                  return setNewUser({ ...newUser, firstName: ev.target.value });
                }}
              />
              <p className="text-red text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                Last Name
              </label>
              <Input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="grid-last-name"
                type="text"
                value={newUser?.lastName}
                placeholder=""
                onChange={(ev) => {
                  return setNewUser({ ...newUser, lastName: ev.target.value });
                }}
              />
            </div>
          </div>
          <Input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            id="grid-first-name"
            type="text"
            value={newUser?.birthday}
            placeholder=""
            onChange={(ev) => {
              return setNewUser({ ...newUser, birthday: ev.target.value });
            }}
          />
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                Password
              </label>
              <Input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                id="grid-password"
                type="password"
                placeholder="******************"
                value={newUser?.password}
                onChange={(ev) => {
                  return setNewUser({ ...newUser, password: ev.target.value });
                }}
              />
              <p className="text-grey-dark text-xs italic">
                Make it as long and as crazy as you'd like
              </p>
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                E-mail
              </label>
              <Input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                type="email"
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
