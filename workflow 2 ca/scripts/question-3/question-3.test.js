import {
  getDiscountPercentage,
  formatDecimalSpaces,
  convertKrone,
  calculateTax,
} from "./question-3.js";

test("Discount percentage", () => {
  expect(getDiscountPercentage(100, 75)).toBe(25);
});

test("Format decimal spaces", () => {
  expect(formatDecimalSpaces(15.5555555)).toBe(15.56);
});

test("Convert to krone", () => {
  expect(convertKrone(10)).toBe(101.8);
});

test("Calculate tax", () => {
  expect(calculateTax(100)).toBe(125);
});
