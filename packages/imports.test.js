const sharyn = require('sharyn')

const browser = require('@sharyn/browser')

const clearCaches = require('@sharyn/browser.clearcaches')
const browserClearCaches = require('@sharyn/browser/clearCaches')
const sharynBrowserClearCaches = require('sharyn/browser/clearCaches')

const getFormData = require('@sharyn/browser.getformdata')
const browserGetFormData = require('@sharyn/browser/getFormData')
const sharynBrowserGetFormData = require('sharyn/browser/getFormData')

const commands = require('@sharyn/commands')
const prettier = require('@sharyn/prettier')

const reactHooks = require('@sharyn/react-hooks')

const useStateObject = require('@sharyn/react-hooks.usestateobject')
const reactHooksUseStateObject = require('@sharyn/react-hooks/useStateObject')
const sharynReactHooksUseStateObject = require('sharyn/react-hooks/useStateObject')

test('individual packages', () => {
  expect(typeof clearCaches).toBe('function')
  expect(typeof browserClearCaches).toBe('function')
  expect(typeof sharynBrowserClearCaches).toBe('function')
  expect(typeof browser.clearCaches).toBe('function')
  expect(typeof sharyn.browser.clearCaches).toBe('function')
  expect(typeof sharyn.clearCaches).toBe('function')

  expect(typeof getFormData).toBe('function')
  expect(typeof browserGetFormData).toBe('function')
  expect(typeof sharynBrowserGetFormData).toBe('function')
  expect(typeof browser.getFormData).toBe('function')
  expect(typeof sharyn.browser.getFormData).toBe('function')
  expect(typeof sharyn.getFormData).toBe('function')

  expect(typeof commands.DOCKER_COMPOSE_UP).toBe('string')
  expect(typeof sharyn.commands.DOCKER_COMPOSE_UP).toBe('string')

  expect(typeof prettier.printWidth).toBe('number')
  expect(sharyn.prettier).toBe(undefined)

  expect(typeof useStateObject).toBe('function')
  expect(typeof reactHooksUseStateObject).toBe('function')
  expect(typeof sharynReactHooksUseStateObject).toBe('function')
  expect(typeof reactHooks.useStateObject).toBe('function')
  expect(typeof sharyn.reactHooks.useStateObject).toBe('function')
  expect(typeof sharyn.useStateObject).toBe('function')
})
