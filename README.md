# Create Sanity Field

Magic sanity field creator.

## Usage

### Import `field` for quick usage.

Import `field` from `@studio206/create-sanity-field`. This is the barebones field function. Doesn't give you typesafety but does speed things up.

```ts
import { field } from "@studio206/create-sanity-field";

field("title");
// {
//   name: 'title',
//   title: 'Title',
//   type: 'string'
// }
```

If the `type` does _not_ exist within `src/typeDefaults.ts`, you will have to pass it.

```ts
import { field } from "@studio206/create-sanity-field";

field("fubar"); // ❌
// Error: Undefined type for field name: fubar. Please add type or add to dictionary

field("fubar", "boolean"); // ✅
// {
//   name: 'fubar',
//   title: 'Fubar',
//   type: 'boolean'
// }
```

### Configure createSanityField and add your own type definitions 🪄 ⭐️

This is where a solid attempt at typesafety comes into play.

Import `createSanityField` from `@studio206/create-sanity-field`.

```ts
// createSanityField.config.ts
import { createSanityField } from "@studio206/create-sanity-field";

export { field } = createSanityField({
  typeDefinitions: {
    authorName: "string",
  },
});
```

#### Import this `field` function from `createSanityField.config.ts`

```ts
import { field } from "path-to/createSanityField.config";

field("authorName");
// {
//   name: 'authorName',
//   title: 'Author Name',
//   type: 'string'
// }
```

You will also get an intellisense member list:

<img width="384" alt="Screenshot 2023-01-25 at 22 23 10" src="https://user-images.githubusercontent.com/6763109/214706643-d339baa7-f40a-4183-ae17-97666f87de78.png">

