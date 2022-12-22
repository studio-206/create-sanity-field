/**
 * quick field is for quick usage of the function nothing fancy.
 */

import { describe, expect, it, test } from "vitest";

import { field } from "../src";

describe("Quick Field Usage", () => {
  test("It should return the correct type given a default string (`title`)", () => {
    const result = field("title");
    expect(result).toStrictEqual({ name: "title", title: "Title", type: "string" });
  });

  test("It should return the correct type if we pass a fieldType (`string`)", () => {
    const result = field("test", "string");
    expect(result).toStrictEqual({ name: "test", title: "Test", type: "string" });
  });
});
