/**
 * Armstrong number is a number which is equal to the
 * sum of cubes of its digits
 * Eg. 371, 153, 1 are armstrong number
 */

function isArmstrongNum(armNum) {
  let sumOfCubes = 0;
  let originalNum = armNum;

  while (armNum !== 0) {
    let digit = armNum % 10;
    sumOfCubes += Math.pow(digit, 3);
    armNum = Math.floor(armNum / 10);
  }

  return sumOfCubes === originalNum
    ? "it is an Armstrong Number"
    : "it is NOT an armstrong number";
}

const armNum = 123;

console.log(isArmstrongNum(armNum));
