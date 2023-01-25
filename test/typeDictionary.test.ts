import { describe, expect, test } from "vitest";
import { createSanityField } from "../src";

const { field } = createSanityField({
  typeDefinitions: {
    authorName: "string",
    name: "number", // override the default type
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

    console.log({ result });

    expect(result).toStrictEqual({
      name: "name",
      title: "Name",
      type: "number",
    });
  });

  test("It should error because 'hello' is not in the typeDefinition", () => {
    expect(() => {
      // @ts-expect-error
      field("hello");
    }).toThrowError();
  });
});
