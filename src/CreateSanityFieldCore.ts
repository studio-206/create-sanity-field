import { DefaultNameKeys, SanityFieldTypes, typeDefaults } from "./typeDefaults";
import { capitalCase } from "change-case";

export type CreateSanityFieldCoreOptions = {
  typeDictionary?: Record<string, SanityFieldTypes>;
};

class CreateSanityFieldCore<Config extends CreateSanityFieldCoreOptions> {
  constructor(options: Config) {
    this.typeDictionary = options.typeDictionary;
    this.typeDefaults = typeDefaults;
  }

  typeDictionary;
  typeDefaults;

  field = (
    fieldName: keyof Config["typeDictionary"] & DefaultNameKeys,
    fieldType?: SanityFieldTypes
  ) => {
    const makeTypes = {
      ...typeDefaults,
      ...this.typeDictionary,
    };

    const getType = makeTypes[fieldName];

    getType;

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
