// Problem 2
// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

module.exports = (input) => {
  if (isNaN(input) || Array.isArray(input) || input === null || input === '') {
    return 'Input is not a number'
  } else if (input < (-2) ** 31 || input > 2 ** 31 - 1) {
    return 'Input is out of range'
  }

  const reversedInput = input.toString().split('').reverse().join('')
  return reversedInput === input.toString()
}