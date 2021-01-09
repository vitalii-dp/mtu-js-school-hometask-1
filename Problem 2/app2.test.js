// Problem 2 test file

const assert = require('assert')
const resolve = require('./app2')

assert.strictEqual(resolve(152), false)
assert.strictEqual(resolve(-17), false)
assert.strictEqual(resolve(484), true)
assert.strictEqual(resolve(0), true)
assert.strictEqual(resolve('15'), false)
assert.strictEqual(resolve('1123211'), true)
assert.throws(() => resolve([15]))
assert.throws(() => resolve({}))
assert.throws(() => resolve())
assert.throws(() => resolve(2 ** 31))
assert.throws(() => resolve(null))
assert.throws(() => resolve(undefined))
assert.throws(() => resolve(NaN))
assert.throws(() => resolve(true))
assert.throws(() => resolve(Infinity))
assert.throws(() => resolve(() => {}))
assert.throws(() => resolve(1n))
