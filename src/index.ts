import CreateSanityFieldCore, { CreateSanityFieldCoreOptions } from "./CreateSanityFieldCore";
import { SanityFieldTypes } from "./typeDefaults";

/**
 * The main createSanityField to pass in config. I.E Your own dictionary of key/value pairs.
 */
const createSanityField = (args: CreateSanityFieldCoreOptions = {}) =>
  new CreateSanityFieldCore(args);

/**
 * Return the default field function with no dictionary arguments for quick usage.
 */
const field = (fieldName: string, fieldType?: SanityFieldTypes) =>
  createSanityField().field(fieldName, fieldType);

export { field, createSanityField };
