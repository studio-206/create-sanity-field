/**
 * quick field is for quick usage of the function nothing fancy.
 */

import { describe, expect, test } from "vitest";

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

  test("It should return the correct type if we pass a fieldType (`slug`)", () => {
    const result = field("slug");
    expect(result).toStrictEqual({ name: "slug", title: "Slug", type: "slug" });
  });
});
