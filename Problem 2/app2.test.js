// Problem 2 test file

const assert = require('assert')
const resolve = require('./app2')

assert.strictEqual(resolve(152), false)
assert.strictEqual(resolve(-17), false)
assert.strictEqual(resolve(484), true)
assert.strictEqual(resolve(0), true)
assert.strictEqual(resolve('15'), false)
assert.strictEqual(resolve([15]), 'Input is not a number')
assert.strictEqual(resolve({}), 'Input is not a number')
assert.strictEqual(resolve(), 'Input is not a number')
assert.strictEqual(resolve(2 ** 31), 'Input is out of range')
assert.strictEqual(resolve(null), 'Input is not a number')
assert.strictEqual(resolve(undefined), 'Input is not a number')