function secondSmallestElement(arr) {
  let smallest = +Infinity;
  let secondSmallest = +Infinity;

  if (arr.length < 2) {
    return null;
  }

  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num > smallest && num < secondSmallest) {
      secondSmallest = num;
    }
  }

  return secondSmallest === +Infinity ? null : { secondSmallest, smallest };
}

// Using Higher Order Function - Reduce() method
function reduceFunc(arr) {
  let [smallest, secondSmallest] = arr.reduce(
    ([smallest, secondSmallest], num) => {
      if (num < smallest) {
        return [num, smallest];
      } else if (num > smallest && num < secondSmallest) {
        return [smallest, num];
      }
      return [smallest, secondSmallest];
    },
    [+Infinity, +Infinity]
  );

  return secondSmallest === +Infinity ? null : { secondSmallest, smallest };
}

const arr = [2, 3, 4, 5];
console.log(secondSmallestElement(arr));
console.log(reduceFunc(arr));

arr.reduce();
