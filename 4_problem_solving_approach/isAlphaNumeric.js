function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && //* Numeric (0-9)
    !(code > 64 && code < 91) && //* Upper Alpha (A-Z)
    !(code > 96 && code < 123) //* Lower Alpha (a-z)
  ) {
    return false;
  }
  return true;
}

export default isAlphaNumeric;
