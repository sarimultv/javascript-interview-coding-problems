function isPrime(num) {
  if (num < 2) return false;

  // i <= Math.sqrt(num) -- for num=16, loop runs from i=2 to i=4
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const num = 16;

//console.log(isPrime(num));

// find all prime number less than N

function primeSeq(N) {
  let primeNums = [];
  for (let i = 1; i <= N; i++) {
    if (isPrime(i)) {
      primeNums.push(i);
    }
  }
  return primeNums;
}

let N = 100;
console.log(primeSeq(N));
