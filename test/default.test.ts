import field, { equal } from "../src";
import { describe, test, expect } from "vitest";

describe("Default Tests", () => {
  test("It works", () => {
    field();
  });
});

describe("Test", () => {
  test("add", () => {
    expect(equal(5, 5)).toBe(true);
    expect(equal(5, 1)).toBe(false);
    expect(equal(5, 4)).toBe(false);
  });
});
