import CreateSanityFieldCore from "./CreateSanityFieldCore";

/**
 * The main createSanityField to pass in config. I.E Your own dictionary of key/value pairs.
 */
const createSanityField = <T extends { typeDefinitions: T["typeDefinitions"] }>(config?: T) =>
  new CreateSanityFieldCore(config);

/**
 * Return the default field function with no dictionary arguments for quick usage.
 */
const field = <T extends string>(fieldName: T, fieldType?: string) =>
  createSanityField({
    typeDefinitions: {
      ...(fieldType ? { [fieldName]: fieldType } : {}),
    },
  }).field(fieldName, fieldType);

export { field, createSanityField };
