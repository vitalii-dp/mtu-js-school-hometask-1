// Problem 3 test file

const assert = require('assert')
const resolve = require('./app3')

assert.strictEqual(resolve('())'), false)
assert.strictEqual(resolve('))(('), false)
assert.strictEqual(resolve('()'), true)
assert.strictEqual(resolve('()[]{}'), true)
assert.strictEqual(resolve('(]'), false)
assert.strictEqual(resolve('([)]'), false)
assert.strictEqual(resolve('{[]}'), true)
assert.strictEqual(resolve('()()[][]{}{}'), true)
assert.strictEqual(resolve('()[{()()}][]{[()()]}'), true)
assert.strictEqual(resolve(''), false)
assert.strictEqual(resolve('string'), 'Input should only have these characters "(", ")", "{", "}", "[", and "]"')