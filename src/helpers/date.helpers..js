export function convertDateToString(date) {
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0");
  var yyyy = date.getFullYear();

  const newDate = dd + "/" + mm + "/" + yyyy;

  return newDate;
}

export function formatDate(dateValue) {
  let date = ("0" + dateValue.getDate()).slice(-2);
  let month = ("0" + (dateValue.getMonth() + 1)).slice(-2);
  let year = dateValue.getFullYear();
  let hours = dateValue.getHours();
  let minutes = dateValue.getMinutes();
  let seconds = dateValue.getSeconds();

  const formattedDate =
    year +
    "-" +
    month +
    "-" +
    date +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;

    return formattedDate;
}
