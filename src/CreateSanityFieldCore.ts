import { capitalCase } from "change-case";
import { SanityFieldTypes, typeDefaults } from "./typeDefaults";

class CreateSanityFieldCore {
  constructor(args: any) {}

  field = <TFieldName extends string>(fieldName: TFieldName, fieldType?: string) => {
    // @ts-ignore
    const getType = typeDefaults[fieldName] as string;

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
