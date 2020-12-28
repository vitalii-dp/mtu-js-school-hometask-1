// Problem 1
// Given a roman numeral, convert it to an integer.

module.exports = (str) => {
  str = str.toUpperCase()
  const romanRegexp = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/

  if (!str || !str.match(romanRegexp)) {
    return 'Wrong input. Try only Roman numerals or check if input does not have ill-formed or some identical letters in a row.'
  }

  let number = 0
  const romanValues = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  const arr = str.split('')
  arr.forEach(el => number += romanValues[el])
  
  if (str.includes('IV', 0) || str.includes('IX', 0)) {
    number -= 2
  }
  if (str.includes('XL', 0) || str.includes('XC', 0)) {
    number -= 20
  }
  if (str.includes('CD', 0) || str.includes('CM', 0)) {
    number -= 200
  }
  return number
}