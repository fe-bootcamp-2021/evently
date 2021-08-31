import classNames from "classnames/bind";

export const containerLogin = classNames([
  "min-h-screen",
  "bg-gray-100",
  "py-6",
  "flex",
  "flex-col",
  "justify-center",
  "sm:py-12",
]);
export const containerBg = classNames([
  "w-1/2",
  "relative",
  "py-3",
  "sm:max-w-xl",
  "sm:mx-auto",
]);
export const containerBg2 = classNames([
  "absolute",
  "inset-0",
  "bg-gradient-to-r",
  "from-blue-300",
  "to-blue-600",
  "shadow-lg",
  " transform",
  "-skew-y-6",
  "sm:skew-y-0",
  "sm:-rotate-6",
  "sm:rounded-3xl",
]);
export const containerBg3 = classNames([
  "relative",
  "px-8",
  "py-25",
  "bg-white",
  "shadow-lg",
  "sm:rounded-3xl",
  "sm:p-20",
]);
export const containerForm = classNames(["max-w-lg", "mx-auto"]);
export const titleLogin = classNames([
  "text-2xl",
  "font-semibold",
  "justify-center",
  "flex",
]);
export const inputWrapper = classNames(["divide-y", "divide-gray-200"]);
export const emailInput = classNames([
  "py-8",
  "text-base",
  "leading-6",
  "space-y-6",
  "text-gray-700",
  "sm:text-lg",
  "sm:leading-10",
]);
export const emailPassword = classNames(["relative"]);
export const emailPassStyle = classNames([
  "peer",
  "placeholder-transparent",
  "h-10",
  "w-full",
  "border-b-2",
  "border-gray-300",
  "text-gray-900",
  "focus:outline-none",
  "focus:borer-rose-600",
]);
export const emailPassLabel = classNames([
  "absolute",
  "left-0",
  "-top-3.5",
  "text-gray-600",
  "text-sm",
  " peer-placeholder-shown:text-base",
  "peer-placeholder-shown:text-gray-440",
  "peer-placeholder-shown:top-2",
  "transition-all",
  "peer-focus:-top-3.5",
  "peer-focus:text-gray-600",
  "peer-focus:text-sm",
]);
export const signStyle = classNames([
  "bg-blue-500",
  "text-white",
  "rounded-md",
  "px-2",
  "py-1",
]);

export const buttonContainer = classNames([
  "flex",
  "justify-end",
  "z-0",
  "w-full",
  "mb-5",
]);