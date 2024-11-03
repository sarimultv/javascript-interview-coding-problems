/**
 * JS Interview Questions
 */
/*
const item = [2, 3];
console.log(item.concat(item)); // duplicate an array

// mul(x)(y)(z)

function mul(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}

console.log(mul(2)(3)(4));

// closure example

function createBase(baseNum) {
  return function (num) {
    return baseNum + num;
  };
}

const add10 = createBase(10);
//console.log(add10);
console.log(add10(34)); // this is possible only because of closure in JS

// all string chars presents in another string is known as anagrams
function checkIsAnagrams(str, str1) {
  //   let ans = false;

  //   for (let i = 0; i < str.length; i++) {
  //     ans = str1.toLowerCase().includes(str[i].toLowerCase());
  //   }
  //   return ans;

  str = str.toLowerCase().split("").sort().join("");
  str1 = str1.toLowerCase().split("").sort().join("");
  return str === str1;
}

let str = "THE eyes";
let str1 = "they SEE";

console.log(checkIsAnagrams(str, str1));


function counter() {
  let count = 0;

  return {
    add: function (num) {
      return (count += num);
    },
    readCount1: "value of count is " + count,
    readCount: function () {
      return "value of count is " + count;
    },
  };
}

let counter2 = counter();
counter2.add(5);
counter2.add(8);
console.log(counter2.readCount1);
console.log(counter2.readCount());
*/

// output of code
let y = 1;
if (function f() {}) {
  y += typeof f;
}

console.log(y);
