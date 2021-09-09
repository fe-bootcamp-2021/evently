import classNames from "classnames/bind";

export const container = classNames(["min-h-screen", "p-0", "sm:p-12"]);

export const card = classNames([
  "mx-auto",
  "w-2/3",
  "bg-white",
  "max-w-5xl",
  "rounded-2xl",
  "border-t-8",
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

export const buttonContainer = classNames([
  "flex",
  "justify-end",
  "z-0",
  "w-full",
  "mb-5",
]);

export const buttonSection = classNames([
  "my-10 px-10 pt-10 border-t-2 border-fuchsia-600",
]);
