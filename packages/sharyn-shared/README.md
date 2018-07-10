# @sharyn/shared

## Install

```bash
yarn add @sharyn-shared
```

## API

### fetch

```js
import { fetchGraphql } from '@sharyn/shared'

// ...

const query = "query ($id: ID!) { getThing(id: $id) { id } }"
const variables = { id: 123 }

const resp = await fetchGraphql({ query, variables })

/*
  {
    data: {
      getThing: { id: 123 }
    },
    errors: [...]
  }
*/
```
