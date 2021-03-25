function caesar(input) {
  const caesarArray = input.split("").map((char) => {
    const code = char.charCodeAt(0);
    if (code === 32) {
      return char;
    } else if ((code >= 97 && code <= 109) || (code >= 65 && code <= 77)) {
      return String.fromCharCode(code + 13);
    } else {
      return String.fromCharCode(code - 13);
    }
  });

  return caesarArray.join("");
}

module.exports = caesar;
