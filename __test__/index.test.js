const yarnGlobal = require('../')

test('no', () => {
  expect(yarnGlobal.inDirectory(__dirname))
    .toBe(false)
})

test('getDependencies', () => {
  expect(Array.isArray(yarnGlobal.getDependencies()))
    .toBe(true)
})


test('hasDependency', () => {
  expect(yarnGlobal.hasDependency('what-the-duck'))
    .toBe(false)
})
