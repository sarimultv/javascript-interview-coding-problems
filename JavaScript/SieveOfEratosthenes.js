//Sieve of Eratosthenes is an ancient algorithm that is used to find all the primes
//numbers less than the given number T.
// number of operations- TC- O(nlog(logn))
//we can eliminate all the nos. which are not prime & those that are less than given T

/**
 * Steps    1. consider all numbers less than T as prime number
 *          2. Discard all numbers which are multiple of i less than T
 *          3. remaining numbers are Prime number
 */

function primeNumber(n) {
  let ans = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      //calculate true
      ans++;
      for (let j = i * 2; j < n; j = j + i) {
        isPrime[j] = false; // discarding all numbers multiple of i
      }
    }
  }
  return ans;
}

let n = 50;
let isPrime = new Array(n + 1).fill(true);

console.log(primeNumber(n));
