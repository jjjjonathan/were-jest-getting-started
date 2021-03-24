const reverseString = require("./reverseString");

test("Capitalize lowercase one-word string", () => {
  expect(reverseString("abacus")).toBe("sucaba");
});

test("Capitalize lowercase multi-word string", () => {
  expect(reverseString("Jonny the dog")).toBe("god eht ynnoJ");
});

test("No effect if string strings starts with number", () => {
  expect(reverseString("4chan")).toBe("nahc4");
});
