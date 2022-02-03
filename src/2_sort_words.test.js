const sortWords = require("./2_sort_words");

test("Sort Words (1)", () => {
  expect(sortWords([])).toBe({
    odd: [],
    even: [],
  });
});

test("Sort Words (2)", () => {
  expect(sortWords(["work", "hard", "mommy"])).toBe({
    odd: ["mommy"],
    even: ["work", "hard"],
  });
});

test("Sort Words (3)", () => {
  expect(sortWords(["oh!", "ah!", "hi", "my"])).toBe({
    odd: ["oh!", "ah!"],
    even: ["hi", "my"],
  });
});
