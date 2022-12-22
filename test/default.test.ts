import { field as defaultField, createSanityField } from "../src";
import { describe, expect, test } from "vitest";

const { field } = createSanityField();

describe("Default Tests", () => {
  test("Ensure defaultField is available", () => {
    expect(typeof defaultField).toBe("function");
  });

  test("It works", () => {
    const result = field("title");
    expect(result).toStrictEqual({
      name: "title",
      title: "Title",
      type: "string",
    });
  });

  test("It takes a longer field name and returns the correct title", () => {
    const result = field("longFieldName");
    expect(result).toStrictEqual({
      name: "longFieldName",
      title: "Long Field Name",
      type: "stringz",
    });
  });
});
