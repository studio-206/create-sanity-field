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

This is were a solid attempt at typesafety comes into play.

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
