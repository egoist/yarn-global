const yarnGlobal = require('../')

test('no', () => {
  expect(yarnGlobal.inDirectory(__dirname))
    .toBe(false)
})
