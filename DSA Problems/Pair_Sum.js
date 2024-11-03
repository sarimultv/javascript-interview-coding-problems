// brute force approach - O(n^2)
/*
function calculatePairSum(arr, finalArr, target){
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      if(arr[i] + arr[j] === target){
        finalArr.push(i);
        finalArr.push(j);
        console.log(finalArr);
        return finalArr;
      }
    }
  }
}*/

// 2 pointer approach - O(n) time complexity
function calculatePairSum(arr, finalArr, target) { 
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let pairSum = arr[i] + arr[j];

    if (pairSum > target) {
      j--;
    } else if (pairSum < target) {
      i++;
    } else {
      finalArr.push(i);
      finalArr.push(j);
      return finalArr;
    }
  }
}

let arr = [2, 7, 11, 15];

let finalArr = [];
let target = 26;

console.log(calculatePairSum(arr, finalArr, target));
