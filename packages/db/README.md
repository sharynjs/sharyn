# 🌹 @sharyn/db

[![npm](https://img.shields.io/npm/v/@sharyn/db.svg)](https://www.npmjs.com/package/@sharyn/db)

This package provides database utilities and configs.

## 🌹 Install

```bash
yarn add @sharyn/db
```

## 🌹 Usage

### knex-config.js

A `knex-config.js` _knexfile_ is provided and is used automatically unless you have your own located at `src/_db/knex-config.js`

### `knex`

```js
import { knex } from '@sharyn/db'

export const findNoteById = (userId, id) =>
  knex('Note')
    .where({ id, userId })
    .first()
```

### `createQuery`

`createQuery` is higher-level than `knex`, the created query already contains the table name, and can pass a `userId` as a `.where({ userId })` clause.

```js
import { createQuery } from '@sharyn/db'

const query = createQuery('Note')

export const createNote = input => query().insert(input)

export const findNoteById = (userId, id) =>
  query(userId)
    .where({ id })
    .first()
```

### `createQuery` with a transaction

You can pass a transaction to `createQuery` as the second parameter:

```js
import { createQuery, knex } from '@sharyn/db'

const tableAQuery = createQuery('tableA')
const tableBQuery = createQuery('tableB')

export const somethingWithATransaction = userId =>
  knex.transaction(async trx => {
    await tableAQuery(userId, trx).something()
    await tableBQuery(null, trx).something()
  })
```

### Migration helpers

Two helpers are available to reduce bloat in your migration files, `standardCols` and `userIdCol`:

```js
  up: async knex => {
    await knex.schema.createTable('Note', t => {
    standardCols(knex, t)
    userIdCol(t)
    })
  }
```

They define your columns the following way:

```js
const standardCols = (knex, t) => {
  t.uuid('id').primary()
  t
    .timestamp('createdAt')
    .notNullable()
    .defaultTo(knex.fn.now())
  t
    .timestamp('updatedAt')
    .notNullable()
    .defaultTo(knex.fn.now())
}

const userIdCol = t =>
  t
    .uuid('userId')
    .references('User.id')
    .onUpdate('cascade')
    .onDelete('cascade')
    .notNullable()
```
