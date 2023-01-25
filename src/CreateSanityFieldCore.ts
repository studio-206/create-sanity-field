import { capitalCase } from "change-case";
import { typeDefaults } from "./typeDefaults";

export type AllTypeDefinitions<T> = T & typeof typeDefaults;

class CreateSanityFieldCore<Config extends { typeDefinitions: Config["typeDefinitions"] }> {
  constructor(config?: Config) {
    this.allFieldTypes = {
      ...typeDefaults,
      ...(config ? config.typeDefinitions : {}),
    };
  }

  allFieldTypes: AllTypeDefinitions<Config["typeDefinitions"]>;

  field = <
    TFieldName extends keyof AllTypeDefinitions<Config["typeDefinitions"]>,
    TFieldType extends string
  >(
    fieldName: TFieldName,
    fieldType?: TFieldType
  ) => {
    const type = this.allFieldTypes[fieldName];

    if (!type && !fieldType) {
      throw new Error(
        `Undefined type for field name: ${
          fieldName as string
        }. Please add type or add to dictionary`
      );
    }

    return {
      name: fieldName,
      title: capitalCase(String(fieldName)),
      type: fieldType || type,
    };
  };
}

export default CreateSanityFieldCore;
