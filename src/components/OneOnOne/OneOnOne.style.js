import classNames from "classnames/bind";

export const containerOneOnOne = classNames(["min-h-screen", "p-0", "sm:p-12"]);

export const card = classNames([
  "mx-auto",
  "w-2/3",
  "bg-white",
  "max-w-5xl",
  "rounded-2xl",
  "border-t-8",
  "border-blue-800",
  "px-10",
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

export const eventItems = classNames(["relative", "z-0", "w-full", "mb-5"]);

export const label = classNames(["text-gray-500"]);

export const errorMessage = classNames(["text-sm", "text-red-600", "hidden"]);

export const input = classNames([
  "pt-3",
  "pb-2",
  "block",
  "w-full",
  "px-0",
  "mt-0",
  "border-gray-500",
  "bg-transparent",
  "border-0",
  "border-b-2",
  "appearance-none",
  "focus:outline-none",
  "focus:ring-0",
  "focus:border-black",
  "border-gray-200",
]);

export const buttonContainer = classNames([
  "flex",
  "justify-end",
  "z-0",
  "w-full",
  "mb-5",
]);

export const button = classNames([
  "w-1/4",
  "px-6",
  "py-3",
  "mt-3",
  "lg:text-lg",
  "text-sm",
  "text-white",
  "transition-all",
  "duration-150",
  "ease-linear",
  "rounded-lg",
  "shadow",
  "outline-none",
  "bg-custom-purple-1",
  "hover:bg-pink-600",
  "hover:shadow-lg",
  "focus:outline-none",
]);

export const description = classNames(["mt-2"]);
