/*
let str= "racecar";
for(let i=str.length-1; i>=0; i--){
    console.log(str[i]);
}

// reverse a string using split method
let reverseStr = str.split('').reverse().join('');

// reverse a string using spread operator
let reverseStr = [...str].reverse().join('');

// reverse a tring using loops

let reverseStr="";
for(let i=str.length-1; i>=0; i--){
    reverseStr += str[i];
}
// console.log(str);
console.log(reverseStr);
*/

const isAlphaNum =(ch)=>{
    
    // if((ch >= 0 && ch <= 9) || (ch.toLowerCase() >= 'a' && ch.toLowerCase() <= 'z')){
    //     return true;
    // }
    //return false;

    return /^[a-zA-Z0-9]+$/.test(ch);
}

// two pointer approach - O(n) time complexity
const isPalindrome = (str) => {
    let start=0, end=str.length-1;
    while(start < end){
        if(!isAlphaNum(str[start])){ 
            start++;
            continue;
        }
        if(!isAlphaNum(str[end])){ 
            end--;
            continue;
        }

        if(str[start].toLowerCase() !== str[end].toLowerCase()){
            return false;
        }
        start++;
        end--;
    }
    return true;
}

let str= "ma?@$da&&m";
console.log(isPalindrome(str));

//console.log(str[1].toLowerCase() )
