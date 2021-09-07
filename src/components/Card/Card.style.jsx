import classNames from "classnames/bind";

export const cardContainer = (eventColor) =>
  classNames([
    `bg-white max-w-7xl rounded-2xl border-t-8 px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500 border-${eventColor}`,
  ]);
export const buttonContainer = classNames([
  "flex justify-between items-center",
]);
export const titleStyle = classNames(["text-lg text-gray-700 font-semibold"]);
export const copyLinkButton = classNames([
  "text-sm font-semibold text-blue-700",
]);
export const infoButton = classNames([
  "text-sm mr-4 font-semibold text-blue-700 hover:text-purple-700",
]);
export const shareButton = classNames([
  "bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full",
]);
export const modalWindowContainer = classNames([
  "pt-3 pb-2 block w-96 px-0 mt-0 border-gray-500 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200",
]);
