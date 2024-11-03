const SearchInRotatedArray = (arr, tar) => {
  let st = 0;
  let end = arr.length - 1;
  while (st <= end) {
    let mid = Math.floor(st + (end - st) / 2);

    if (arr[mid] === tar) {
      return mid;
    }

    // find sorted half - left or right half
    if (arr[st] <= arr[mid]) {
      // left is sorted

      // apply binary search on sorted left
      if (arr[st] <= tar && tar <= arr[mid]) {
        // search in left or apply binary search
        end = mid - 1;
      } else {
        //search in right
        st = mid + 1;
      }
    } else {
      //right is sorted

      //apply binary search
      if (arr[mid] <= tar && tar <= arr[end]) {
        // search in right
        st = mid + 1;
      } else {
        //search in left
        end = mid - 1;
      }
    }
  }
  return -1;
};

const arr = [3, 4, 5, 6, 7, 0, 2];
const tar = 7;

console.log(SearchInRotatedArray(arr, tar));
