export enum SanityFieldTypes {
  boolean = "boolean",
  date = "date",
  image = "image",
  slug = "slug",
  string = "string",
  text = "text",
  url = "url",
}

export const typeDefaults = {
  active: SanityFieldTypes.boolean,
  date: SanityFieldTypes.date,
  description: SanityFieldTypes.text,
  name: SanityFieldTypes.string,
  title: SanityFieldTypes.string,
};
