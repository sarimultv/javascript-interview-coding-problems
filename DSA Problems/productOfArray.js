

const productOfArray =(arr)=>{
    let ans=new Array(arr.length).fill(1);
    /*
    //Brute force approach O(n^2)
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(i !== j){
                ans[i] *= arr[j];
            }
        }
    }
*/
    // optimised approach - Time Complexity O(n) & Space Complexity O(n)
    // divide the array into 2 parts - left and Right
    // for further space complexity optimisation O(1) remove extra array like leftP[] and RightP[]

    //let leftP = new Array(arr.length).fill(1);
    for(let i=1; i<arr.length; i++){
        //leftP[i]= leftP[i-1] * arr[i-1];
        ans[i] = ans[i-1] * arr[i-1];
    }
    
    //let rightP = new Array(arr.length).fill(1);
    let rightP = 1;
    for(let i=arr.length-2; i>=0; i--){
        //rightP[i] = rightP[i+1] * arr[i+1];
        rightP *= arr[i+1];
        ans[i] *= rightP;
    }

    //calculate ans
    // for(let i=0; i<arr.length; i++){
    //     ans[i]= leftP[i] * rightP[i];
    // }

    return ans;
}

const arr=[1,2,3,4];

console.log(productOfArray(arr));