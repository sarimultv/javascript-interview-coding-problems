// Greatest Common Divisor(GCD) or Highest Common Factor(HCF)

/**
 *  20= 2*2*5*1
 *  28= 2*2*7*1
 * common divisor is 4
 * so gcd=4
 *
 * why loop is limited to min(a,b)
 * let a=6, b=12 in this case
 * gcd=6 and greater number cannot be gcd for two numbers
 */

function findGCD(a, b) {
  // Base case
  if (a === 0) {
    return b;
  } else if (b === 0) {
    return a;
  }

  let gcd = 1;

  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

let a = 20,
  b = 20;

console.log(findGCD(a, b));
