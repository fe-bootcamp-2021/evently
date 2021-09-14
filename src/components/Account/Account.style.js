import classNames from "classnames/bind";

export const imageContainer = classNames([
  "w-8/12 mx-auto h-screen flex justify-around my-12",
]);
export const labelContainer = classNames([
  "border border-blue-900 relative rounded-full",
]);
export const imageContent = classNames([
  "w-56 h-56 rounded-full object-cover object-center",
]);
export const fileInputField = classNames(["absolute top-0 right-3 "]);
export const imageAndButtonContainer = classNames([
  "flex flex-col items-center w-8 h-8 absolute top-0 right-4 rounded-full bg-white text-blue-900 border border-blue-900 cursor-pointer hover:bg-blue-700 hover:text-white",
]);
export const settingsTextContainer = classNames([" flex flex-col my-2 ml-2"]);
export const settingsText = classNames(["text-3xl mb-6 text-blue-900"]);
export const fullNameContainer = classNames(["-mx-3 md:flex mb-6"]);
export const firstNameContainer = classNames(["md:w-1/2 px-3 mb-6 md:mb-0"]);
export const firstNameText = classNames([
  "block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",
]);
export const inputFieldStyle = classNames([
  "appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3",
]);
export const italicText = classNames(["text-red text-xs italic"]);
export const lastNameText = classNames([
  "block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",
]);
export const passwordContainer = classNames(["-mx-3 md:flex mb-6"]);
export const passwordContent = classNames(["md:w-full px-3"]);
export const passwordText = classNames([
  "block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",
]);
export const emailContainer = classNames(["-mx-3 md:flex mb-6"]);
export const emailContent = classNames(["md:w-full px-3"]);
export const emailText = classNames([
  "block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",
]);
