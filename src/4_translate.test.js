const translate = require("./4_translate");

test("Translate (1)", () => {
  expect(
    translate(
      {
        je: "I",
        suis: "am",
        pere: "father",
        ton: "your",
      },
      "je suis ton pere"
    )
  ).toBe("I am your father");
});

test("Translate (2)", () => {
  expect(
    translate(
      {
        the: "le",
        cute: "mignon",
        your: "ton",
        dog: "chien",
        is: "est",
      },
      "the dog is cute"
    )
  ).toBe("le chien est mignon");
});

test("Translate (3)", () => {
  expect(
    translate(
      {
        the: "le",
        cute: "mignon",
        your: "ton",
        dog: "chien",
        is: "est",
      },
      "the dog is fluffy"
    )
  ).toBe("Error: missing value");
});
