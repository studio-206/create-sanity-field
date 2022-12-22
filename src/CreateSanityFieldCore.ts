import { capitalCase } from "change-case";

class CreateSanityFieldCore {
  constructor(args: any) {}

  field = (fieldName: string) => {
    return {
      name: fieldName,
      title: capitalCase(fieldName),
      type: "string",
    };
  };
}

export default CreateSanityFieldCore;
