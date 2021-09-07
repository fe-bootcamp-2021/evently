import classNames from "classnames/bind";

export const modalContainer = classNames([
  "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
]);
export const content = classNames(["relative w-auto my-6 mx-auto max-w-3xl"]);
export const headerContainer = classNames([
  "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
]);
export const header = classNames([
  "flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t",
]);
export const headerText = classNames([
  "text-3xl font-semibold text-custom-current",
]);
export const modalButtonStyle = classNames([
  "p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
]);
export const modalBodyStyle = classNames(["relative p-6 flex-auto"]);
export const modalFooterStyle = classNames([
  "flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b",
]);

