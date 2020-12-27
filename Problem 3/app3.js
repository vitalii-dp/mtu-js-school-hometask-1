// Problem 3
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

module.exports = (str) => {
  const regexp = /[^\(\)\[\]\{\}]/

  if (str.match(regexp)) {
    return 'Input should only have these characters "(", ")", "{", "}", "[", and "]"'
  } else if (str.length === 0 || str.length % 2 !== 0 || str.length > 104) {
    return false
  }

  const characters = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  let arr = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      arr.push(str[i])
    } else if (arr[arr.length - 1] === characters[str[i]]) {
      arr.pop()
    }
  } 
  return arr.length === 0
}