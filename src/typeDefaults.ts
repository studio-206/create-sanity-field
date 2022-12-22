export enum SanityFieldTypes {
  boolean = "boolean",
  date = "date",
  image = "image",
  slug = "slug",
  string = "string",
  text = "text",
  url = "url",
}

type DefaultNameKeys = "active" | "date" | "description" | "title";

export const typeDefaults: Record<DefaultNameKeys, SanityFieldTypes> = {
  active: SanityFieldTypes.boolean,
  date: SanityFieldTypes.date,
  description: SanityFieldTypes.text,
  title: SanityFieldTypes.string,
};
