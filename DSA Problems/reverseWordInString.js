
const reverseWordInString= (str) => {
    let ans="";

   for(let i=str.length-1; i>=0; i--){
        let word = "";
        while(str[i] !== " " && i >= 0){
            word += str[i];
            i--;
        }
        if(word.length > 0){
            ans += " " + word.split('').reverse().join('');
        }
   }
   return ans.trim();
}

const str="i like her23";
console.log(reverseWordInString(str));