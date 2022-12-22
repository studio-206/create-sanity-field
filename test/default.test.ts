import { describe, expect, test } from "vitest";

import { field as defaultField, createSanityField } from "../src";

const { field } = createSanityField({
  typeDictionary: {
    authorName: "string",
    longFieldName: "string",
    email: "email",
  },
});

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

  test("Error if type not specified and type not in default", () => {
    expect(() => {
      field("notInDictionary");
    }).toThrowError();
  });

  test("It takes a longer field name and returns the correct title with a fieldType passed", () => {
    const result = field("longFieldName", "string");

    expect(result).toStrictEqual({
      name: "longFieldName",
      title: "Long Field Name",
      type: "string",
    });
  });

  test("It works if I am using a value from the typeDictionary", () => {
    const result = field("authorName");
    expect(result).toStrictEqual({
      name: "authorName",
      title: "Author Name",
      type: "string",
    });
  });

  test.todo(
    "It should throw an error if we try and override with a type that is not in the dictionary"
  );
});
