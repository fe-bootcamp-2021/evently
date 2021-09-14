import {loadingContainer } from "./Loading.style";


export default function Loading() {
  return (
    <div className={loadingContainer}>
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-700"></div>
    </div>
  );
}
