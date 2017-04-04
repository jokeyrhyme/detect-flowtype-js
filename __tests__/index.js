/* @flow */
'use strict'

const lib = require('../index.js')

test('exports an object', () => {
  expect(lib).toBeTruthy()
  expect(typeof lib).toBe('object')
})
