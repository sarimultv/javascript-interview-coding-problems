
const peakIndexOfArray = (arr) => {
    let st=1;
    let end= arr.length-2;

    while(st <= end){
        let mid= Math.floor(st + (end-st)/2);

        if(arr[mid-1] < arr[mid] && arr[mid] > arr[mid+1]) return mid;

        if( arr[mid-1] < arr[mid]){
            st= mid+1;
        }else{
            end= mid-1;
        }
    }
    return -1;
}

const arr=[0,3,4,15,20,2]

console.log(peakIndexOfArray(arr));