function binaryExponential(x, n) {
  let ans = 1;

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  while (n > 0) {
    if (n % 2 === 1) {
      ans = ans * x;
    }
    x = x * x;
    n = Math.floor(n / 2);
  }
  return ans;
}

let x = -1;
let n = 2;
console.log(binaryExponential(x, n));
