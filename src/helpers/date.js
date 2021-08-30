export function convertDateToString(date) {
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0");
  var yyyy = date.getFullYear();

  const newDate = dd + "/" + mm + "/" + yyyy;

  return newDate;
}
