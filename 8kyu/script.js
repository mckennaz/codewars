// Given an array of integers, and a target integer, return the largest integer from the array that is less than or equal to the target.

// If there is no number that is less than or equal to the target number then return undefined.

// The array of integers may be empty, but will always be an array.

function priceIsRight(numbers, target) {
  if (target < Math.min(...numbers)) return undefined
  else return Math.max(...numbers.filter(item => item <= target))
}