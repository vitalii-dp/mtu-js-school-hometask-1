// Problem 1 test file

const assert = require('assert')
const resolve = require('./app1')

assert.strictEqual(resolve('III'), 3)
assert.strictEqual(resolve('IV'), 4)
assert.strictEqual(resolve('IX'), 9)
assert.strictEqual(resolve('XIV'), 14)
assert.strictEqual(resolve('XIX'), 19)
assert.strictEqual(resolve('XL'), 40)
assert.strictEqual(resolve('LVIII'), 58)
assert.strictEqual(resolve('MCMXCIV'), 1994)
assert.strictEqual(resolve('IIII'), 'Wrong input. Try only Roman numerals or check if input does not have ill-formed or some identical letters in a row.')
assert.strictEqual(resolve('XM'), 'Wrong input. Try only Roman numerals or check if input does not have ill-formed or some identical letters in a row.')

