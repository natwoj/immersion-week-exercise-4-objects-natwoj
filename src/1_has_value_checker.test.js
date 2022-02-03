const hasValue = require("./1_has_value_checker");

test("Has Value (1)", () => {
  expect(hasValue({ hello: "bonjour", my: "mon" }, "bonjour")).toBe(true);
});

test("Has Value (2)", () => {
  expect(hasValue({ hello: "bonjour", my: "mon" }, "hello")).toBe(false);
});

test("Has Value (3)", () => {
  expect(hasValue({ hello: "bonjour", my: "mon" }, "tasty")).toBe(false);
});
