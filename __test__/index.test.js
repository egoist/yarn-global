const isGlobal = require('../')

test('main', () => {
  expect(isGlobal(__dirname)).toBe(false)
})
