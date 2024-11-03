
const calculateMiniMaxSum =(arr)=>{
    const minVal= Math.min(...arr);
    const maxVal= Math.max(...arr);

    let totalSum =0;

    for(let i=0; i<arr.length; i++){
        totalSum += arr[i];
    }

    console.log(minVal);
    console.log(maxVal);
    console.log(totalSum - maxVal, totalSum - minVal);
}

const arr= [1,2,3,4,5];

calculateMiniMaxSum(arr);

let s= "07:05:45AM";
console.log(s.includes("PM"))