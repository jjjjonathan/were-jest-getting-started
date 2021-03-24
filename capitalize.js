module.exports = capitalize;

function capitalize(string) {
  const splitString = string.split("");
  splitString[0] = splitString[0].toUpperCase();
  return splitString.join("");
}
