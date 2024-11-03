
const BinarySearchUsingRecursion =(arr, tar, st, end)=>{

    if(st <= end){
        let mid= Math.floor(st + (end-st)/2);
        if(tar > arr[mid]){
            return BinarySearchUsingRecursion(arr, tar, mid+1, end);
        }else if(tar < arr[mid]){
            return BinarySearchUsingRecursion(arr, tar, st, mid-1);
        }else{
            return mid;
        }
    }
    return -1;
}

const arr = [-1, 0, 3, 4, 5, 9, 12];
const tar = 10;
let st= 0;
let end= arr.length-1;

console.log(BinarySearchUsingRecursion(arr, tar, st, end));