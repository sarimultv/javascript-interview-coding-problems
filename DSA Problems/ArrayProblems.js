
function majorityElement(arr){
  let freq=0;
  let majorElement=0;

//   arr.forEach(element => {
//     let freq=0;
//     arr.forEach(item =>{
//       if(item === element){
//         freq++;
//       }
//     })
//     if(freq > arr.length/2){
//       majorElement=element;
//       return majorElement;
//     }else {
//       majorElement= -1;
//     }
    
// });

  //Little optimisation - sorting- O(nlogn) + for loop- O(n) => O(nlogn)
  // for(let i=1; i<arr.length; i++){
  //   if(arr[i] === arr[i-1]){
  //     freq++;
  //     majorElement= arr[i];
  //   }else{
  //     freq=1;
  //     majorElement=arr[i];
  //   }

  //   if(freq >= arr.length/2){
  //     return majorElement;
  //   }else{
  //     majorElement=-1;
  //   }
  // }

  for(let i=0; i<arr.length; i++){
    if(freq === 0){
      majorElement= arr[i];
    }
    if(majorElement === arr[i]){
      freq++;
    }else{
      freq--;
    }
    //console.log(majorElement)
  }

  let count=0;

  for(let i=0; i<arr.length; i++){
    if(arr[i] === majorElement){
      count++;
    }
  }
  //console.log(majorElement)
  if(count > arr.length/2){
    return majorElement;
  }else{
    majorElement= -1;
  }
  return majorElement;
}

let arr = [18, 90 ,90 ,13 ,90 ,75, 90 ,8, 90, 43]; 
console.log(majorityElement(arr));
