# 🌹 wait

**`wait`** is a `Promise`-based delay.

```js
import wait from '@sharyn/util/wait'
// or import { wait } from '@sharyn/util'

const main = async () => {
  console.log('Legen - wait for it...')
  await wait(3000)
  console.log('...dary!')
}

main()
```

**`wait`** is part of [`@sharyn/util`](https://github.com/sharynjs/sharyn-util/blob/master/README.md)
