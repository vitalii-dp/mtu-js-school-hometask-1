// Problem 4 test file

const assert = require('assert')
const resolve = require('./app4')

assert.deepStrictEqual(resolve([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]), [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19])
assert.strictEqual(resolve('array1', 1), 'Input should be an array')
