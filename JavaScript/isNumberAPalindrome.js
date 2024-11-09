function reverseANumber(num) {
  let revNum = 0;

  while (num !== 0) {
    let digit = num % 10;

    if (
      revNum > Math.floor(Number.MAX_VALUE / 10) ||
      revNum < Math.floor(Number.MIN_VALUE / 10)
    ) {
      return 0;
    }

    revNum = revNum * 10 + digit;
    num = Math.floor(num / 10);
  }
  return revNum;
}

function isNumberPalindrome(num) {
  if (num < 0) return false;

  const revNum = reverseANumber(num);

  return num === revNum;
}

const num = 343;

console.log(isNumberPalindrome(num));
