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

// const defined = require('@sharyn/util.defined')
// const utilDefined = require('@sharyn/util/defined')
// const sharynUtilDefined = require('sharyn/util/defined')

test('imports', () => {
  expect(typeof browser).toBe('object')
  expect(browser).toBe(sharynBrowser)
  expect(browser).toBe(sharyn.browser)

  expect(typeof clearCaches).toBe('function')
  expect(clearCaches).toBe(browserClearCaches)
  expect(clearCaches).toBe(sharynBrowserClearCaches)
  expect(clearCaches).toBe(browser.clearCaches)
  expect(clearCaches).toBe(sharynBrowser.clearCaches)
  expect(clearCaches).toBe(sharyn.browser.clearCaches)
  expect(clearCaches).toBe(sharyn.clearCaches)

  expect(typeof getFormData).toBe('function')
  expect(getFormData).toBe(browserGetFormData)
  expect(getFormData).toBe(sharynBrowserGetFormData)
  expect(getFormData).toBe(browser.getFormData)
  expect(getFormData).toBe(sharynBrowser.getFormData)
  expect(getFormData).toBe(sharyn.browser.getFormData)
  expect(getFormData).toBe(sharyn.getFormData)

  expect(typeof commands).toBe('object')
  expect(commands).toBe(sharynCommands)
  expect(commands).toBe(sharyn.commands)

  expect(typeof commands.DOCKER_COMPOSE_UP).toBe('string')
  expect(commands.DOCKER_COMPOSE_UP).toBe(sharynCommands.DOCKER_COMPOSE_UP)
  expect(commands.DOCKER_COMPOSE_UP).toBe(sharyn.commands.DOCKER_COMPOSE_UP)

  expect(typeof prettier.printWidth).toBe('number')
  expect(sharyn.prettier).toBe(undefined)

  expect(typeof reactHooks).toBe('object')
  expect(reactHooks).toBe(sharynReactHooks)
  expect(reactHooks).toBe(sharyn.reactHooks)

  expect(typeof useStateObject).toBe('function')
  expect(useStateObject).toBe(reactHooksUseStateObject)
  expect(useStateObject).toBe(sharynReactHooksUseStateObject)
  expect(useStateObject).toBe(reactHooks.useStateObject)
  expect(useStateObject).toBe(sharynReactHooks.useStateObject)
  expect(useStateObject).toBe(sharyn.reactHooks.useStateObject)
  expect(useStateObject).toBe(sharyn.useStateObject)

  expect(typeof reactRouter).toBe('object')
  expect(reactRouter).toBe(sharynReactRouter)
  expect(reactRouter).toBe(sharyn.reactRouter)

  expect(typeof PrivateRoute).toBe('function')
  expect(PrivateRoute).toBe(reactRouterPrivateRoute)
  expect(PrivateRoute).toBe(sharynReactRouterPrivateRoute)
  expect(PrivateRoute).toBe(reactRouter.PrivateRoute)
  expect(PrivateRoute).toBe(sharynReactRouter.PrivateRoute)
  expect(PrivateRoute).toBe(sharyn.reactRouter.PrivateRoute)
  expect(PrivateRoute).toBe(sharyn.PrivateRoute)

  expect(typeof ServerOnlyRoute).toBe('function')
  expect(ServerOnlyRoute).toBe(reactRouterServerOnlyRoute)
  expect(ServerOnlyRoute).toBe(sharynReactRouterServerOnlyRoute)
  expect(ServerOnlyRoute).toBe(reactRouter.ServerOnlyRoute)
  expect(ServerOnlyRoute).toBe(sharynReactRouter.ServerOnlyRoute)
  expect(ServerOnlyRoute).toBe(sharyn.reactRouter.ServerOnlyRoute)
  expect(ServerOnlyRoute).toBe(sharyn.ServerOnlyRoute)

  expect(typeof scripts).toBe('object')
  expect(scripts).toBe(sharynScripts)
  expect(scripts).toBe(sharyn.scripts)

  expect(typeof scripts.runSync).toBe('function')
  expect(scripts.runSync).toBe(sharynScripts.runSync)
  expect(scripts.runSync).toBe(sharyn.scripts.runSync)

  expect(typeof scripts.runAsync).toBe('function')
  expect(scripts.runAsync).toBe(sharynScripts.runAsync)
  expect(scripts.runAsync).toBe(sharyn.scripts.runAsync)

  expect(typeof scripts.parallel).toBe('function')
  expect(scripts.parallel).toBe(sharynScripts.parallel)
  expect(scripts.parallel).toBe(sharyn.scripts.parallel)

  expect(typeof scripts.series).toBe('function')
  expect(scripts.series).toBe(sharynScripts.series)
  expect(scripts.series).toBe(sharyn.scripts.series)

  expect(typeof scripts.scripts).toBe('function')
  expect(scripts.scripts).toBe(sharynScripts.scripts)
  expect(scripts.scripts).toBe(sharyn.scripts.scripts)

  expect(typeof util).toBe('object')
  expect(util).toBe(sharynUtil)
  expect(util).toBe(sharyn.util)

  expect(typeof between).toBe('function')
  expect(between).toBe(utilBetween)
  expect(between).toBe(sharynUtilBetween)
  expect(between).toBe(util.between)
  expect(between).toBe(sharynUtil.between)
  expect(between).toBe(sharyn.util.between)
  expect(between).toBe(sharyn.between)

  expect(typeof cycle).toBe('function')
  expect(cycle).toBe(utilCycle)
  expect(cycle).toBe(sharynUtilCycle)
  expect(cycle).toBe(util.cycle)
  expect(cycle).toBe(sharynUtil.cycle)
  expect(cycle).toBe(sharyn.util.cycle)
  expect(cycle).toBe(sharyn.cycle)

  // expect(typeof defined).toBe('function')
  // expect(defined).toBe(utilDefined)
  // expect(defined).toBe(sharynUtilDefined)
  // expect(defined).toBe(util.defined)
  // expect(defined).toBe(sharynUtil.defined)
  // expect(defined).toBe(sharyn.util.defined)
  // expect(defined).toBe(sharyn.defined)
})
