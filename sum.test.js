const sum = require("./sum.js");

test("mytest", () => {
  expect(sum(2, 2)).toBe(4);
});

test("bad", () => {
  !expect(sum(2, 2)).toEqual(5);
});
