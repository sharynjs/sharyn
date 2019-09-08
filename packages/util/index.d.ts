import between from '@sharyn/util.between'
import cycle from '@sharyn/util.cycle'
import defined from '@sharyn/util.defined'
import either from '@sharyn/util.either'
import exists from '@sharyn/util.exists'
import html from '@sharyn/util.html'
import ifs from '@sharyn/util.ifs'
import invoke from '@sharyn/util.invoke'
import inlineThrow from '@sharyn/util.inlinethrow'
import swit from '@sharyn/util.swit'
import toggle from '@sharyn/util.toggle'
import tryCatch from '@sharyn/util.trycatch'
import wait from '@sharyn/util.wait'
import { getGlobal, setGlobal, getAllGlobal, deleteGlobal, clearGlobal } from '@sharyn/util.global'

export {
  between,
  cycle,
  defined,
  either,
  exists,
  html,
  ifs,
  invoke,
  inlineThrow,
  swit,
  toggle,
  tryCatch,
  wait,
  getGlobal,
  setGlobal,
  getAllGlobal,
  deleteGlobal,
  clearGlobal,
}

declare const _default: {
  between: typeof between
  cycle: typeof cycle
  defined: typeof defined
  either: typeof either
  exists: typeof exists
  html: typeof html
  ifs: typeof ifs
  invoke: typeof invoke
  inlineThrow: typeof inlineThrow
  swit: typeof swit
  toggle: typeof toggle
  tryCatch: typeof tryCatch
  wait: typeof wait
  getGlobal: typeof getGlobal
  setGlobal: typeof setGlobal
  getAllGlobal: typeof getAllGlobal
  deleteGlobal: typeof deleteGlobal
  clearGlobal: typeof clearGlobal
}

export default _default
