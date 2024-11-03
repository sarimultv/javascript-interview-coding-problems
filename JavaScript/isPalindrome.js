function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

const str = "sarimul";

console.log(isPalindrome(str));
