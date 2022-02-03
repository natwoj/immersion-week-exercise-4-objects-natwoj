const groupFamilies = require("./5_group_families");

test("Group Families (1)", () => {
  expect(
    groupFamilies([
      { name: "Barack", surname: "Obama" },
      { name: "Michelle", surname: "Obama" },
    ])
  ).toBe({ Obama: ["Barack", "Michelle"] });
});

test("Group Families (2)", () => {
  expect(
    groupFamilies([
      { name: "Barack", surname: "Obama" },
      { name: "Michelle", surname: "Obama" },
      { name: "Donald", surname: "Trump" },
    ])
  ).toBe({ Obama: ["Barack", "Michelle"], Trump: ["Donald"] });
});
