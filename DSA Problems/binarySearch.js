const searchIndex = (arr, tar) => {
  let st = 0,
    end = arr.length - 1;

  while (st <= end) {

    let mid = Math.floor(st + (end - st) / 2);

    if (tar > arr[mid]) {
      st = mid + 1;

    } else if (tar < arr[mid]) {
      end = mid - 1;

    } else {
      return mid;
    }
  }
  return -1;
};

const arr = [3,4,5,6,7,0,1,2];
const tar = 6;

console.log(searchIndex(arr, tar));
