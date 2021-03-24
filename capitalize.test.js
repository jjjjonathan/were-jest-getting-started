const capitalize = require("./capitalize");

test("Capitalize lowercase one-word string", () => {
  expect(capitalize("abacus")).toBe("Abacus");
});

test("Capitalize lowercase multi-word string", () => {
  expect(capitalize("jonny the dog")).toBe("Jonny the dog");
});

test("No effect if string strings starts with number", () => {
  expect(capitalize("4chan")).toBe("4chan");
});
