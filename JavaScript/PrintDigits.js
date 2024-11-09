//Digits in a Number n

/**
 * we can find
 *  1. count of digits
 *  2. sum of digits
 *  3. print digits
 */

function printDigit(n) {
  let count = 0;
  let sum = 0;

  while (n !== 0) {
    let digit = n % 10;
    sum += digit;
    count++;
    console.log(digit);
    n = Math.floor(n / 10);
  }
  return { count, sum };
}

const n = 3586;

console.log(printDigit(n));
