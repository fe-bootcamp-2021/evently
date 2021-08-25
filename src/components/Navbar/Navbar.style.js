import classNames from "classnames/bind";

export const navContainer = classNames(
  "flex",
  "items-center",
  "justify-between",
  "flex-wrap",
  "pt-6",
  "pb-6",
  "w-9/12",
  "mx-auto"
);

export const logoContainer = classNames([
  "flex",
  "items-center",
  "flex-shrink-0",
  "mr-6",
  "cursor-pointer",
]);

export const menu = classNames([
  "flex",
  "justify-between",
  "w-full",
  "block",
  "flex-grow",
  "lg:flex",
  "lg:items-center",
  "lg:w-auto",
  "no-underline",
]);

export const titleHome = classNames([
  "no-underline",
  "text-blue-800",
  "text-xl",
  "cursor-pointer",
  "p-2",
]);

export const buttonOutline = classNames([
  "px-4",
  "py-1",
  "text-xl",
  "text-blue-900",
  "transition-colors",
  "duration-150",
  "border",
  "border-blue-900",
  "rounded-full",
  "cursor-pointer",
  "focus:shadow-outline",
  "hover:bg-blue-800",
  "hover:text-white",
]);
