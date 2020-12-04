// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

// Start
function countdown(initNum, step) {
  let decreasingNumber = initNum
  return function countingDown() {
    decreasingNumber -= step
    return decreasingNumber
  }
  console.log(decreasingNumber)
}

const countingDown = countdown(10, 2);

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());