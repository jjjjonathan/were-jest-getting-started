const analyze = require("./analyze");

test("default test from Odin themself", () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("One from yourself", () => {
  expect(
    analyze([
      4,
      75,
      45,
      59,
      23,
      57,
      82,
      83,
      31,
      87,
      74,
      64,
      40,
      86,
      77,
      37,
      55,
      84,
      46,
      81,
    ])
  ).toEqual({
    average: 59.5,
    min: 4,
    max: 87,
    length: 20,
  });
});
