function findGCD(a, b) {
  while (a > 0 && b > 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }

  if (a === 0) return b;
  return a;
}

const a = 20,
  b = 28;

console.log(findGCD(a, b));

// Lowest/Least Common Multiple (LCM)
/**
 * LCM(a, b)= (a * b)/ GCD(a, b);
 *
 * a * b = LCM(a, b) * GCD(a, b)
 */
const lcm = Math.floor((a * b) / findGCD(a, b));
const gcd = Math.floor((a * b) / lcm);
console.log("lcm of a & b is " + lcm);
console.log("gcd of a & b is " + gcd);
