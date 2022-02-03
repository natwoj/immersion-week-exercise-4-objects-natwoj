const hasValueDepth = require("./7_has_deep_checker");

const obj = {
  hello: "world",
  goDeeper: {
    1961: "Barack Obama",
    1964: "Michelle Obama",
    1935: "Elvis Presley",
    1984: {
      author: "George Orwell",
      genre: "dystopia",
    },
  },
};

test("Has Value Chckeer (1)", () => {
  expect(hasValueDepth(obj, "hello")).toBe(false);
});

test("Has Value Chckeer (2)", () => {
  expect(hasValueDepth(obj, "Elvis Presley")).toBe(true);
});

test("Has Value Chckeer (3)", () => {
  expect(hasValueDepth(obj, "author")).toBe(false);
});

test("Has Value Chckeer (4)", () => {
  expect(hasValueDepth(obj, "dystopia")).toBe(true);
});
