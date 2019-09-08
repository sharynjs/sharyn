const sharyn = require('sharyn')

const browser = require('@sharyn/browser')

const clearCaches = require('@sharyn/browser.clearcaches')
const browserClearCaches = require('@sharyn/browser/clearCaches')
const sharynBrowserClearCaches = require('sharyn/browser/clearCaches')

const getFormData = require('@sharyn/browser.getformdata')
const browserGetFormData = require('@sharyn/browser/getFormData')
const sharynBrowserGetFormData = require('sharyn/browser/getFormData')

test('individual packages', () => {
  expect(typeof clearCaches).toBe('function')
  expect(typeof browserClearCaches).toBe('function')
  expect(typeof sharynBrowserClearCaches).toBe('function')
  expect(typeof browser.clearCaches).toBe('function')
  expect(typeof sharyn.browser.clearCaches).toBe('function')

  expect(typeof getFormData).toBe('function')
  expect(typeof browserGetFormData).toBe('function')
  expect(typeof sharynBrowserGetFormData).toBe('function')
  expect(typeof browser.getFormData).toBe('function')
  expect(typeof sharyn.browser.getFormData).toBe('function')
})
