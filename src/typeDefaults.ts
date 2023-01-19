export type SanityFieldTypes = "boolean" | "date" | "image" | "slug" | "string" | "text" | "url";

export type DefaultNameKeys = "active" | "date" | "description" | "title" | "name";

export const typeDefaults: Record<DefaultNameKeys, SanityFieldTypes> = {
  active: "boolean",
  date: "date",
  description: "image",
  name: "text",
  title: "text",
};

console.log(typeDefaults);
