function reverseNumber(num) {
  let revNum = 0;

  while (num !== 0) {
    let dig = num % 10;

    /**
     * to check if revNum crossing the range of max_value or min_value
     * range for integer value [-2^31 to 2^31-1]
     * add an extra check here
     */

    if (
      revNum > Math.floor(Number.MAX_VALUE / 10) ||
      revNum < Math.floor(Number.MIN_VALUE / 10)
    ) {
      return 0;
    }

    revNum = revNum * 10 + dig;
    num = Math.floor(num / 10);
  }
  return revNum;
}

const num = 4537;
console.log(reverseNumber(num));
