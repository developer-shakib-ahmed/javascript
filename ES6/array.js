/**
 * Array.prototype.reduce
 */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = numbers.reduce((prevValue, currentValue, currentIndex, array) => {
  
  return currentValue + prevValue;

}, 0);

console.log('Sum of 1 - 10: ', sum);