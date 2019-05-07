# 🌹 @sharyn/redis

[![npm](https://img.shields.io/npm/v/@sharyn/redis.svg)](https://www.npmjs.com/package/@sharyn/redis)

This package provides a convenient access to your Redis instance.

## 🌹 Install

```bash
yarn add @sharyn/redis
```

## 🌹 Usage

```js
import redis from '@sharyn/redis'

const main = async () => {
  await redis.setAsync('some-key', 'hi')
  await redis.getAsync('some-key') // hi
  await redis.delAsync('some-key')
}
```
