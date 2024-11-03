
const removeAllOccurrences=(str, part)=>{
    let arr = str.split('');
    while(str.search(part) !== -1 && str.length>0){
        arr.splice(str.search(part), part.length);
        str = arr.join('');
    }
    return arr.join('');
}

const str="abcabcabcabc";

const part= "abc";
console.log(removeAllOccurrences(str, part));
