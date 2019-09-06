const React = require('react')

const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

const useStateObject = require('./useStateObject')

Enzyme.configure({ adapter: new Adapter() })

const e = React.createElement

const { shallow } = Enzyme

const TestCmp = () => {
  const {
    get,
    getAll,
    set,
    setAll,
    merge,
    assign,
    del,
    clear,
  } = useStateObject()
  return e('div', null, [
    e('a', {
      key: 'setAll',
      id: 'setAll',
      onClick: () => setAll({ a: 1, b: 2 }),
    }),
    e('a', {
      key: 'deleteB',
      id: 'deleteB',
      onClick: () => del('b'),
    }),
    e('a', {
      key: 'setC',
      id: 'setC',
      onClick: () => set('c', 3),
    }),
    e('a', {
      key: 'clear',
      id: 'clear',
      onClick: () => clear(),
    }),
    e('a', {
      key: 'prepareMerge',
      id: 'prepareMerge',
      onClick: () => setAll({ d: { da: 1, db: 2 } }),
    }),
    e('a', {
      key: 'merge',
      id: 'merge',
      onClick: () => merge({ d: { da: 5, dc: 5 } }),
    }),
    e('a', {
      key: 'prepareAssign',
      id: 'prepareAssign',
      onClick: () => setAll({ e: { ea: 1, eb: 2 } }),
    }),
    e('a', {
      key: 'assign',
      id: 'assign',
      onClick: () => assign({ e: { ea: 5, ec: 5 } }),
    }),
    e('div', { key: 'a', id: 'a' }, JSON.stringify(get('a'))),
    e('div', { key: 'b', id: 'b' }, JSON.stringify(get('b'))),
    e('div', { key: 'c', id: 'c' }, JSON.stringify(get('c'))),
    e('div', { key: 'all', id: 'all' }, JSON.stringify(getAll())),
  ])
}

test('useStateObject', () => {
  const wrapper = shallow(e(TestCmp, null))
  const expectResult = (id, expected) =>
    expect(wrapper.find(`#${id}`).text()).toEqual(expected)
  const click = id => wrapper.find(`#${id}`).simulate('click')

  expectResult('all', JSON.stringify({}))

  click('setAll')
  expectResult('all', JSON.stringify({ a: 1, b: 2 }))
  expectResult('a', '1')
  expectResult('b', '2')
  expectResult('c', '')

  click('deleteB')
  expectResult('all', JSON.stringify({ a: 1 }))
  expectResult('a', '1')
  expectResult('b', '')
  expectResult('c', '')

  click('setC')
  expectResult('all', JSON.stringify({ a: 1, c: 3 }))
  expectResult('a', '1')
  expectResult('b', '')
  expectResult('c', '3')

  click('clear')
  expectResult('all', JSON.stringify({}))
  expectResult('a', '')
  expectResult('b', '')
  expectResult('c', '')

  click('prepareMerge')
  expectResult('all', JSON.stringify({ d: { da: 1, db: 2 } }))
  click('merge')
  expectResult('all', JSON.stringify({ d: { da: 5, db: 2, dc: 5 } }))

  click('clear')

  click('prepareAssign')
  expectResult('all', JSON.stringify({ e: { ea: 1, eb: 2 } }))
  click('assign')
  expectResult('all', JSON.stringify({ e: { ea: 5, ec: 5 } }))
})
