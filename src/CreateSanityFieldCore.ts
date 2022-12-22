class CreateSanityFieldCore {
  constructor(args: any) {}

  field = (fieldName: string) => {
    return {
      name: fieldName,
      title: fieldName,
      type: "string",
    };
  };
}

export default CreateSanityFieldCore;
