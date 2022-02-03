const countOccurences = require("./6_count_occurences");

test("Count Occurences (1)", () => {
  expect(countOccurences("hello is it you hello hello")).toBe({
    1: ["is", "it", "you"],
    3: ["hello"],
  });
});

test("Count Occurences (2)", () => {
  expect(countOccurences("hey mama hey mama")).toBe({
    2: ["hey", "mama"],
  });
});
