function secondLargestElement(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  if (arr.length < 2) {
    return null;
  }
  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      secondLargest = num;
    }
  }
  return secondLargest === -Infinity ? null : { secondLargest, largest };
}

function reduaceFunc(arr) {
  if (arr.length < 2) {
    return null;
  }

  let [largest, secondLargest] = arr.reduce(
    ([largest, secondLargest], num) => {
      if (num > largest) {
        return [num, largest];
      } else if (num > secondLargest && num < largest) {
        return [largest, num];
      }
      return [largest, secondLargest];
    },
    [-Infinity, -Infinity]
  );

  return secondLargest === -Infinity ? null : { secondLargest, largest };
}

const arr = [2, 2];

console.log(secondLargestElement(arr));
console.log(reduaceFunc(arr));
