const arr = [4, 4, 2, 2, 1];
const arr2 = [4, 2, 1, 3, 5];

function flatArray(arr) {
  return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flatArray(curr) : curr);
  }, []);
}

console.log(Array.isArray(1, 2, 3));
console.log(Object.prototype.toString.call([]));

console.log(arr.filter((item) => item !== 3));
console.log(arr.find((num) => num % 2 !== 0));

let ae = new Set(arr);
console.log([...ae.add(3)]);
console.log([...ae.add(5)]);
console.log(ae.has(7));

ae.forEach((item) => console.log(item));
console.log(ae.values());

let sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(arr2.filter((num) => arr.includes(num)));

function swapFirstTwo([one, two, ...rest]) {
  return [two, one, ...rest];
}
console.log(swapFirstTwo(arr2));

console.log(arr2.reverse());
console.log([...arr2].reverse());

console.log([...arr2].sort((a, b) => a - b));
console.log(arr2);

console.log(arr2.slice().sort((a, b) => b - a));
console.log(Array.from(arr2).sort());

const strArr = [
  1,
  2,
  { a: 5 },
  [3, 4],
  (num) => {
    num;
  },
  "azAZ09",
];
console.log(Array.from(strArr));
// console.log(structuredClone(strArr)); // it creates deep copy of the array

console.log(JSON.parse(JSON.stringify(strArr)));

console.log(arr.map((num) => num * 2));
arr.forEach((item, idx) => (arr[idx] = item * 2));
console.log(arr);

console.log(
  arr.reduce((acc, curr) => {
    acc.push(curr * 2);
    return acc;
  }, [])
);

console.log(Object.prototype.toString.call("str") === "[object String]");
arr[10] = 10;
console.log(arr);

console.log(Number.isNaN(12));
console.log(!isNaN(12) && parseInt(12) === "12");
