import { describe, expect, test } from "vitest";

import { field as defaultField, createSanityField } from "../src";

const { field } = createSanityField();

describe("Default Tests", () => {
  test("Ensure defaultField is available", () => {
    expect(typeof defaultField).toBe("function");
  });

  test("It works", () => {
    const result = field("title");
    expect(result).toStrictEqual({
      name: "title",
      title: "title",
      type: "string",
    });
  });
});
