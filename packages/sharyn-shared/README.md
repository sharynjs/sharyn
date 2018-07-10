# @sharyn/shared

![npm](https://img.shields.io/npm/v/@sharyn/shared.svg)

This package provides _isomorphic_ / _universal_ utilities than can be used on both the client and the server.

## Install

```bash
yarn add @sharyn-shared
```

## Usage

### fetchGraphql

```js
import { fetchGraphql } from '@sharyn/shared/fetch'

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

## API

### fetchGraphql

`fetchGraphql(options, fetchOptions)`

- **options** is an object than can contain:
  - **query** (_required_): The GraphQL query.
  - **variables**: The object of your variables.
  - **host**: The host (`https://www.example.com:12345`). Leave this field empty for client-side fetches.
  - **path**: The GraphQL path (default is `/graphql`)
  - **cookie**: A cookie string (useful for server-side fetches).

- **fetchOptions** is the native options of `fetch` in case you need to override the defaults provided by `fetchGraphql`.
