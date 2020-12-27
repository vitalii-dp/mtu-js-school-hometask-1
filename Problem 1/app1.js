// Problem 1
// Given a roman numeral, convert it to an integer.

module.exports = (str) => {
  str = str.toUpperCase()
  const romanRegexp1 = /[^IVXLCDM]|[LVI][CMDL]|X[DM]/
  const romanRegexp2 = /I{4,}|V{2,}|X{4,}|L{2,}|C{4,}|D{2,}|M{4,}|I{2}[XVL]|I[VXLC]I/

  if (str.match(romanRegexp1) || str.match(romanRegexp2)) {
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