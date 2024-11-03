const maxAmountOfWaterStored = (height) => {
  let maxWater = 0;

  //brute force approach
  /*
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let wt = j - i;
      let ht = Math.min(height[i], height[j]);
      let currWater = wt * ht;

      maxWater = Math.max(maxWater, currWater);
    }
  }*/

  // 2 pointer approach
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  while(leftPointer < rightPointer) {
    let wt = rightPointer - leftPointer;
    let ht = Math.min(height[leftPointer], height[rightPointer]);
    let currWater = wt * ht;

    maxWater = Math.max(maxWater, currWater);

    //main logic lies here
    height[leftPointer] < height[rightPointer] ? leftPointer++ : rightPointer--;
  }

  return maxWater;
};

const height = [1, 1, 6, 2, 5, 4, 8, 3, 7];

console.log(maxAmountOfWaterStored(height));
