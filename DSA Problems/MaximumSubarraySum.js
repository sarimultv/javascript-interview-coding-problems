let arr = [1, 2, 3, 4, 5]; // edge cases in Kadane's algorithm

/*
let ans=0;

arr.forEach(item => ans = ans ^ item);

console.log(ans);
*/

let currSum = 0;
let maxSum = arr[arr.length-1];
let minSum = arr[0];

// Kadane's alogorithm use single loop

for (let i = 0; i < arr.length; i++) {
  
  currSum += arr[i];
  minSum = Math.min(currSum, minSum);
  maxSum = Math.max(currSum, maxSum);
  if (currSum < 0) {
    // edge cases in Kadane's algorithm, reset of currSum shoud be written at the end of for loop
    currSum = 0;
  }
  
}
console.log(currSum - minSum, currSum - maxSum);
