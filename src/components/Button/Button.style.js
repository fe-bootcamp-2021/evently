import classNames from "classnames/bind";

export const buttonStyle = classNames([
  "bg-blue-800",
  "hover:bg-blue-600",
  "text-white",
  "py-2",
  "px-4",
  "rounded-full",
]);

export const buttonOutline = classNames([
  "px-5",
  "py-3",
  "mt-5",
  "text-gray-700",
  "transition-colors",
  "duration-150",
  "border",
  "border-gray-700",
  "rounded-lg",
  "focus:shadow-outline",
  "hover:bg-blue-800",
  "hover:text-white",
]);

export const buttonLink = classNames([
  "text-sm",
  "mr-4",
  "font-semibold",
  "text-blue-700",
  "hover:text-purple-700",
]);

export const buttonLink1 = classNames(["mt-4", "text-md", "text-blue-700"]);
