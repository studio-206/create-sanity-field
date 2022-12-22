import { describe, expect, test } from "vitest";

import { createSanityField } from "../src";

const { field } = createSanityField();

describe("Default Tests", () => {
  test("It works", () => {
    const result = field("title");
    expect(result).toStrictEqual({
      name: "title",
      title: "title",
      type: "string",
    });
  });
});
