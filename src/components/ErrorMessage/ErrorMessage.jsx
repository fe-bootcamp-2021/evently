export default function ErrorMessage({ message, isValid }) {
  return (
    <p className={`text-sm text-red-600 ${isValid ? "hidden" : ""}`}>
      {message}
    </p>
  );
}
