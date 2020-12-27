// Problem 4
// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. 
// Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

module.exports = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return 'Input should be an array'
  }
  if (arr1.length === 0 || arr1.some(el => el < 0) || arr2.length > 1000 || arr2.some(el => el > 1000)) {
    return false
  }

  let uniquesChunk = []
  let outputArr = []
  
  for (let i = 0; i < arr2.length; i++) {
    for (let k = 0; k < arr1.length; k++) {
      if (arr2[i] === arr1[k]) {
        outputArr.push(arr1[k])
      }
    }
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if(!arr2.includes(arr1[i])) {
      uniquesChunk.push(arr1[i])
    }
  }

  uniquesChunk = uniquesChunk.sort((a, b) => a - b)
  outputArr = [...outputArr, ...uniquesChunk]
  return outputArr
}