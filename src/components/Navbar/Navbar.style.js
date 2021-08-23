import classNames from "classnames/bind";

export const navContainer = classNames(
  "flex",
  "items-center",
  "justify-between",
  "flex-wrap",
  "p-6",
  "border-b-2",
  "border-blue-800"
);

export const logoContainer = classNames([
  "flex",
  "items-center",
  "flex-shrink-0",
  "mr-6",
  "cursor-pointer",
]);

export const menu = classNames([
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
  "text-2xl",
  "cursor-pointer",
]);
