// Problem 5
// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

module.exports = (arr, target) => {
  if (!Array.isArray(arr)) {
    return 'Input should be an array'
  } else if (arr.length === 0) {
    return 'Array should not be empty'
  } else if ((typeof target) !== 'number' || target < 0) {
    return 'Target value should be a positive number'
  }

  if (arr.includes(target)) {
    return arr.indexOf(target)
  } else {
    let newArr = [...arr, target]
    newArr = newArr.sort((a, b) => a - b)
    return newArr.indexOf(target)
  }
}