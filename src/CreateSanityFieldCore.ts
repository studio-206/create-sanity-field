import { capitalCase } from "change-case";
import { SanityFieldTypes, typeDefaults } from "./typeDefaults";

export type CreateSanityFieldCoreOptions = {
  typeDictionary?: Record<string, keyof typeof SanityFieldTypes>;
};

class CreateSanityFieldCore {
  constructor(options: CreateSanityFieldCoreOptions) {
    this.typeDictionary = options.typeDictionary;
    this.typeDefaults = typeDefaults;
  }

  typeDictionary;
  typeDefaults;

  field = <TFieldName extends string>(fieldName: TFieldName, fieldType?: string) => {
    const makeTypes = {
      ...typeDefaults,
      ...this.typeDictionary,
    } as Record<string, string>;

    const getType = makeTypes[fieldName] as string;

    if (!getType && !fieldType) {
      throw new Error(
        `Undefined type for field name: ${fieldName}. Please add type or add to dictionary`
      );
    }

    return {
      name: fieldName,
      title: capitalCase(fieldName),
      type: fieldType || getType,
    };
  };
}

export default CreateSanityFieldCore;
