const calculator = require("./calculator");

test("add 2 + 89", () => {
  expect(calculator.add(2, 89)).toBe(91);
});

test("subtract 3 - 89", () => {
  expect(calculator.subtract(3, 89)).toBe(-86);
});

test("multiply 4 x 89", () => {
  expect(calculator.multiply(4, 89)).toBe(356);
});

test("divide 45 / 9", () => {
  expect(calculator.divide(45, 9)).toBe(5);
});
