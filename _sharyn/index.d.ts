import browser from '@sharyn/browser'
import clearCaches from '@sharyn/browser.clearcaches'
import getFormFields from '@sharyn/browser.getformfields'

import commands from '@sharyn/commands'
import env from '@sharyn/env'
import hooks from '@sharyn/hooks'
import prettier from '@sharyn/prettier'
import reactRouter from '@sharyn/react-router'
import scripts from '@sharyn/scripts'
import util from '@sharyn/util'

export {
  browser,
  clearCaches,
  getFormFields,
  commands,
  env,
  hooks,
  prettier,
  reactRouter,
  scripts,
  util,
}

declare const _default: {
  browser: typeof browser
  clearCaches: typeof clearCaches
  getFormFields: typeof getFormFields

  commands: typeof commands
  env: typeof env
  hooks: typeof hooks
  prettier: typeof prettier
  reactRouter: typeof reactRouter
  util: typeof util
}

export default _default
