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

test('individual packages', () => {
  expect(typeof clearCaches).toBe('function')
  expect(typeof browserClearCaches).toBe('function')
  expect(typeof sharynBrowserClearCaches).toBe('function')
  expect(typeof browser.clearCaches).toBe('function')
  expect(typeof sharynBrowser.clearCaches).toBe('function')
  expect(typeof sharyn.browser.clearCaches).toBe('function')
  expect(typeof sharyn.clearCaches).toBe('function')

  expect(typeof getFormData).toBe('function')
  expect(typeof browserGetFormData).toBe('function')
  expect(typeof sharynBrowserGetFormData).toBe('function')
  expect(typeof browser.getFormData).toBe('function')
  expect(typeof sharynBrowser.getFormData).toBe('function')
  expect(typeof sharyn.browser.getFormData).toBe('function')
  expect(typeof sharyn.getFormData).toBe('function')

  expect(typeof commands.DOCKER_COMPOSE_UP).toBe('string')
  expect(typeof sharynCommands.DOCKER_COMPOSE_UP).toBe('string')
  expect(typeof sharyn.commands.DOCKER_COMPOSE_UP).toBe('string')

  expect(typeof prettier.printWidth).toBe('number')
  expect(sharyn.prettier).toBe(undefined)

  expect(typeof useStateObject).toBe('function')
  expect(typeof reactHooksUseStateObject).toBe('function')
  expect(typeof sharynReactHooksUseStateObject).toBe('function')
  expect(typeof reactHooks.useStateObject).toBe('function')
  expect(typeof sharynReactHooks.useStateObject).toBe('function')
  expect(typeof sharyn.reactHooks.useStateObject).toBe('function')
  expect(typeof sharyn.useStateObject).toBe('function')

  expect(typeof PrivateRoute).toBe('function')
  expect(typeof reactRouterPrivateRoute).toBe('function')
  expect(typeof sharynReactRouterPrivateRoute).toBe('function')
  expect(typeof reactRouter.PrivateRoute).toBe('function')
  expect(typeof sharynReactRouter.PrivateRoute).toBe('function')
  expect(typeof sharyn.reactRouter.PrivateRoute).toBe('function')
  expect(typeof sharyn.PrivateRoute).toBe('function')

  expect(typeof ServerOnlyRoute).toBe('function')
  expect(typeof reactRouterServerOnlyRoute).toBe('function')
  expect(typeof sharynReactRouterServerOnlyRoute).toBe('function')
  expect(typeof reactRouter.ServerOnlyRoute).toBe('function')
  expect(typeof sharynReactRouter.ServerOnlyRoute).toBe('function')
  expect(typeof sharyn.reactRouter.ServerOnlyRoute).toBe('function')
  expect(typeof sharyn.ServerOnlyRoute).toBe('function')

  expect(typeof scripts.runSync).toBe('function')
  expect(typeof sharynScripts.runSync).toBe('function')
  expect(typeof sharyn.scripts.runSync).toBe('function')

  expect(typeof scripts.runAsync).toBe('function')
  expect(typeof sharynScripts.runAsync).toBe('function')
  expect(typeof sharyn.scripts.runAsync).toBe('function')

  expect(typeof scripts.parallel).toBe('function')
  expect(typeof sharynScripts.parallel).toBe('function')
  expect(typeof sharyn.scripts.parallel).toBe('function')

  expect(typeof scripts.series).toBe('function')
  expect(typeof sharynScripts.series).toBe('function')
  expect(typeof sharyn.scripts.series).toBe('function')

  expect(typeof scripts.scripts).toBe('function')
  expect(typeof sharynScripts.scripts).toBe('function')
  expect(typeof sharyn.scripts.scripts).toBe('function')
})
