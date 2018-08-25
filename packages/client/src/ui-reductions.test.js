import { compose } from 'recompose'
import {
  activatePageLoading,
  deactivatePageLoading,
  activateComponentLoading,
  deactivateComponentLoading,
  addOneNotification,
} from './ui-reductions'

test('activatePageLoading', () => {
  expect(activatePageLoading({ foo: 'foo' })).toEqual({ foo: 'foo', isPageLoading: true })
  expect(compose(activatePageLoading)({ foo: 'foo' })).toEqual({ foo: 'foo', isPageLoading: true })
})

test('deactivatePageLoading', () => {
  expect(deactivatePageLoading({ foo: 'foo', isPageLoading: true })).toEqual({ foo: 'foo' })
  expect(compose(deactivatePageLoading)({ foo: 'foo', isPageLoading: true })).toEqual({
    foo: 'foo',
  })
})

test('activateComponentLoading', () => {
  expect(activateComponentLoading({ foo: 'foo' }, 'blep')).toEqual({
    foo: 'foo',
    loadingComponents: { blep: true },
  })
  expect(
    activateComponentLoading({ foo: 'foo', loadingComponents: { bar: true } }, 'blep'),
  ).toEqual({
    foo: 'foo',
    loadingComponents: { bar: true, blep: true },
  })
  expect(compose(activateComponentLoading('blep'))({ foo: 'foo' })).toEqual({
    foo: 'foo',
    loadingComponents: { blep: true },
  })
})

test('deactivateComponentLoading', () => {
  expect(
    deactivateComponentLoading({ foo: 'foo', loadingComponents: { blep: true } }, 'blep'),
  ).toEqual({ foo: 'foo' })
  expect(
    deactivateComponentLoading(
      { foo: 'foo', loadingComponents: { bar: true, blep: true } },
      'blep',
    ),
  ).toEqual({
    foo: 'foo',
    loadingComponents: { bar: true },
  })
  expect(
    compose(deactivateComponentLoading('blep'))({ foo: 'foo', loadingComponents: { blep: true } }),
  ).toEqual({
    foo: 'foo',
  })
})

test('addOneNotification', () => {
  expect(addOneNotification({ notifications: [] }, 'notif')).toEqual({
    notifications: [{ message: 'notif' }],
  })
  expect(compose(addOneNotification('notif'))({ notifications: [] })).toEqual({
    notifications: [{ message: 'notif' }],
  })
})
