const sharyn = require('sharyn')

const browser = require('@sharyn/browser')
const sharynBrowser = require('sharyn/browser')

const clearCaches = require('@sharyn/browser.clearcaches')
const browserClearCaches = require('@sharyn/browser/clearCaches')
const sharynBrowserClearCaches = require('sharyn/browser/clearCaches')

const getFormData = require('@sharyn/browser.getformdata')
const browserGetFormData = require('@sharyn/browser/getFormData')
const sharynBrowserGetFormData = require('sharyn/browser/getFormData')

const commands = require('@sharyn/commands')
const sharynCommands = require('sharyn/commands')

const prettier = require('@sharyn/prettier')

const reactHooks = require('@sharyn/react-hooks')
const sharynReactHooks = require('sharyn/react-hooks')

const useStateObject = require('@sharyn/react-hooks.usestateobject')
const reactHooksUseStateObject = require('@sharyn/react-hooks/useStateObject')
const sharynReactHooksUseStateObject = require('sharyn/react-hooks/useStateObject')

const reactRouter = require('@sharyn/react-router')
const sharynReactRouter = require('sharyn/react-router')

const PrivateRoute = require('@sharyn/react-router.privateroute')
const reactRouterPrivateRoute = require('@sharyn/react-router/PrivateRoute')
const sharynReactRouterPrivateRoute = require('sharyn/react-router/PrivateRoute')

const ServerOnlyRoute = require('@sharyn/react-router.serveronlyroute')
const reactRouterServerOnlyRoute = require('@sharyn/react-router/ServerOnlyRoute')
const sharynReactRouterServerOnlyRoute = require('sharyn/react-router/ServerOnlyRoute')

const scripts = require('@sharyn/scripts')
const sharynScripts = require('sharyn/scripts')

const util = require('@sharyn/util')
const sharynUtil = require('sharyn/util')

const between = require('@sharyn/util.between')
const utilBetween = require('@sharyn/util/between')
const sharynUtilBetween = require('sharyn/util/between')

const cycle = require('@sharyn/util.cycle')
const utilCycle = require('@sharyn/util/cycle')
const sharynUtilCycle = require('sharyn/util/cycle')

const defined = require('@sharyn/util.defined')
const utilDefined = require('@sharyn/util/defined')
const sharynUtilDefined = require('sharyn/util/defined')

const either = require('@sharyn/util.either')
const utilEither = require('@sharyn/util/either')
const sharynUtilEither = require('sharyn/util/either')

test('imports', () => {
  expect(typeof browser).toBe('object')
  expect(browser).toBe(sharynBrowser)

  expect(typeof clearCaches).toBe('function')
  expect(clearCaches).toBe(browserClearCaches)
  expect(clearCaches).toBe(sharynBrowserClearCaches)
  expect(clearCaches).toBe(browser.clearCaches)
  expect(clearCaches).toBe(sharynBrowser.clearCaches)

  expect(typeof getFormData).toBe('function')
  expect(getFormData).toBe(browserGetFormData)
  expect(getFormData).toBe(sharynBrowserGetFormData)
  expect(getFormData).toBe(browser.getFormData)
  expect(getFormData).toBe(sharynBrowser.getFormData)

  expect(typeof commands).toBe('object')
  expect(commands).toBe(sharynCommands)

  expect(typeof commands.DOCKER_COMPOSE_UP).toBe('string')
  expect(commands.DOCKER_COMPOSE_UP).toBe(sharynCommands.DOCKER_COMPOSE_UP)

  expect(typeof prettier.printWidth).toBe('number')

  expect(typeof reactHooks).toBe('object')
  expect(reactHooks).toBe(sharynReactHooks)

  expect(typeof useStateObject).toBe('function')
  expect(useStateObject).toBe(reactHooksUseStateObject)
  expect(useStateObject).toBe(sharynReactHooksUseStateObject)
  expect(useStateObject).toBe(reactHooks.useStateObject)
  expect(useStateObject).toBe(sharynReactHooks.useStateObject)

  expect(typeof reactRouter).toBe('object')
  expect(reactRouter).toBe(sharynReactRouter)

  expect(typeof PrivateRoute).toBe('function')
  expect(PrivateRoute).toBe(reactRouterPrivateRoute)
  expect(PrivateRoute).toBe(sharynReactRouterPrivateRoute)
  expect(PrivateRoute).toBe(reactRouter.PrivateRoute)
  expect(PrivateRoute).toBe(sharynReactRouter.PrivateRoute)

  expect(typeof ServerOnlyRoute).toBe('function')
  expect(ServerOnlyRoute).toBe(reactRouterServerOnlyRoute)
  expect(ServerOnlyRoute).toBe(sharynReactRouterServerOnlyRoute)
  expect(ServerOnlyRoute).toBe(reactRouter.ServerOnlyRoute)
  expect(ServerOnlyRoute).toBe(sharynReactRouter.ServerOnlyRoute)

  expect(typeof scripts).toBe('object')
  expect(scripts).toBe(sharynScripts)

  expect(typeof scripts.runSync).toBe('function')
  expect(scripts.runSync).toBe(sharynScripts.runSync)

  expect(typeof scripts.runAsync).toBe('function')
  expect(scripts.runAsync).toBe(sharynScripts.runAsync)

  expect(typeof scripts.parallel).toBe('function')
  expect(scripts.parallel).toBe(sharynScripts.parallel)

  expect(typeof scripts.series).toBe('function')
  expect(scripts.series).toBe(sharynScripts.series)

  expect(typeof scripts.scripts).toBe('function')
  expect(scripts.scripts).toBe(sharynScripts.scripts)

  expect(typeof util).toBe('object')
  expect(util).toBe(sharynUtil)

  expect(typeof between).toBe('function')
  expect(between).toBe(utilBetween)
  expect(between).toBe(sharynUtilBetween)
  expect(between).toBe(util.between)
  expect(between).toBe(sharynUtil.between)
  expect(between).toBe(sharyn.between)

  expect(typeof cycle).toBe('function')
  expect(cycle).toBe(utilCycle)
  expect(cycle).toBe(sharynUtilCycle)
  expect(cycle).toBe(util.cycle)
  expect(cycle).toBe(sharynUtil.cycle)
  expect(cycle).toBe(sharyn.cycle)

  expect(typeof defined).toBe('function')
  expect(defined).toBe(utilDefined)
  expect(defined).toBe(sharynUtilDefined)
  expect(defined).toBe(util.defined)
  expect(defined).toBe(sharynUtil.defined)
  expect(defined).toBe(sharyn.defined)

  expect(typeof either).toBe('function')
  expect(either).toBe(utilEither)
  expect(either).toBe(sharynUtilEither)
  expect(either).toBe(util.either)
  expect(either).toBe(sharynUtil.either)
  expect(either).toBe(sharyn.either)
})
