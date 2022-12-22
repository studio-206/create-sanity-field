import { describe, expect, test } from "vitest";
import { createSanityField } from "../src";

const { field } = createSanityField({
  typeDictionary: {
    authorName: "string",
    name: "number", // Obvious override.
  },
});

describe("typeDictionary Tests", () => {
  test("It works if I am using a value from the typeDictionary", () => {
    const result = field("authorName");
    expect(result).toStrictEqual({
      name: "authorName",
      title: "Author Name",
      type: "string",
    });
  });

  test("It works if I want to override a default type", () => {
    const result = field("name");

    console.log(result);

    expect(result).toStrictEqual({
      name: "name",
      title: "Name",
      type: "number",
    });
  });
});
