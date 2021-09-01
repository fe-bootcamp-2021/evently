export function isValidEventName(value) {
  if (value.replace(/\s/g, "") === "" || value.length > 500) return false;
  return true;
}

export function isValidEventLink(value) {
  if (value.replace(/\s/g, "") === "" || value.length > 20) return false;
  return true;
}

export function isValidAddress(value) {
  if (value.replace(/\s/g, "") === "" || value.length > 200) return false;
  return true;
}

export function isValidEmail(email) {
  const emailCheckReg =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailCheckReg.test(email)) return true;
  return false;
}

export function isValidPassword(password) {
  // Minimum eight characters, at least one letter and one number:
  const passwordCheckReg =
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (passwordCheckReg.test(password)) return true;
  return false;
}

export function isEmptyString(value){
  if (value.replace(/\s/g, "") === "") return false;
  return true;
}