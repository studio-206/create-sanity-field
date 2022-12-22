export enum SanityFieldTypes {
  boolean = "boolean",
  date = "date",
  image = "image",
  slug = "slug",
  string = "string",
  text = "text",
  url = "url",
}

type DefaultNameKeys = "active" | "date" | "description" | "title" | "name";

export const typeDefaults: Record<DefaultNameKeys, SanityFieldTypes> = {
  active: SanityFieldTypes.boolean,
  date: SanityFieldTypes.date,
  description: SanityFieldTypes.text,
  name: SanityFieldTypes.string,
  title: SanityFieldTypes.string,
};
