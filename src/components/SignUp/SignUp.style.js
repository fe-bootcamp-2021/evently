import classNames from "classnames/bind";

export const containerSignUp = classNames(["min-h-screen", "p-0", "sm:p-12"]);
export const nav = classNames(["shadow-md flex w-full justify-end"]);
export const card = classNames([
  "mx-auto",
  "w-2/3",
  "bg-white",
  "max-w-5xl",
  "rounded-2xl",
  "border-t-8",
  "border-blue-800",
  "py-8",
  "shadow-lg",
  "hover:shadow-2xl",
  "transition",
  "duration-500",
]);

export const title = classNames([
  "w-full",
  "flex",
  "justify-center",
  "font-bold",
  "mb-8",
  "text-2xl",
  "text-blue-900",
]);

export const items = classNames(["relative", "z-0", "w-full", "mb-5"]);

export const label = classNames(["text-gray-500"]);

export const input = classNames([
  "appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3",
]);

export const buttonContainer = classNames([
  "flex",
  "justify-end",
  "z-0",
  "w-full",
  "mb-5",
]);
