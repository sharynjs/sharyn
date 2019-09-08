import browser, { clearCaches, getFormData } from '@sharyn/browser'
import commands from '@sharyn/commands'
import reactHooks, { useStateObject } from '@sharyn/react-hooks'
import reactRouter, { PrivateRoute, ServerOnlyRoute } from '@sharyn/react-router'
import scripts from '@sharyn/scripts'
import util, { between, cycle } from '@sharyn/util'

export {
  browser,
  clearCaches,
  getFormData,
  commands,
  reactHooks,
  useStateObject,
  reactRouter,
  PrivateRoute,
  ServerOnlyRoute,
  scripts,
  util,
  between,
  cycle,
}

declare const _default: {
  browser: typeof browser
  clearCaches: typeof clearCaches
  getFormData: typeof getFormData

  commands: typeof commands

  reactHooks: typeof reactHooks
  useStateObject: typeof useStateObject

  reactRouter: typeof reactRouter
  PrivateRoute: typeof PrivateRoute
  ServerOnlyRoute: typeof ServerOnlyRoute

  scripts: typeof scripts

  util: typeof util
  between: typeof between
  cycle: typeof cycle
}

export default _default
