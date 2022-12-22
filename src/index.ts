import CreateSanityFieldCore from "./CreateSanityFieldCore";

/**
 * The main createSanityField to pass in config. I.E Your own dictionary of key/value pairs.
 */
const createSanityField = (args?: any[]) => new CreateSanityFieldCore(args);

/**
 * Return the default field function with no dictionary arguments for quick usage.
 */
const field = (...args: any) => createSanityField().field(args);

export { field, createSanityField };
