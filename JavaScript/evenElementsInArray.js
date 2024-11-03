function findEvenItems(arr) {
  let finalArr = [];

  // this is traditional code
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 === 0) {
  //       finalArr.push(arr[i]);
  //     }
  //   }

  //finalArr = arr.filter((num) => num % 2 === 0);

  //deleting an item from array using filter
  let item = 2;

  finalArr = arr.filter((num) => num !== item);

  return finalArr;
}

const arr = [2, 3, 4, 5, 6];

console.log(findEvenItems(arr));
