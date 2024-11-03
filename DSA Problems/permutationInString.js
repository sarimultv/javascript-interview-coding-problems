
const isFreqSame =(freq, windFreq)=>{
    for(let i=0; i<26; i++){
        if(freq[i] !== windFreq[i]){
            return false;
        }
    }
    return true;    
}

const checkInclusion = (s1, s2) =>{

    let freq = new Array(26).fill(0);
    //calculate frequency
    for(let i=0; i<s1.length; i++){
        freq[s1[i] - 'a']++;
    }

    // window size
    let windowSize= s1.length;
    let windFreq = new Array(26).fill(0);

    for(let i=0; i<s2.length; i++){
        let windIdx=0;
        let idx =i;
        while(windIdx < windowSize && idx < s2.length){
            windFreq[s2[idx] - 'a']++;
            windIdx++; idx++;
        }
        if(isFreqSame(freq, windFreq)){
            return true;
        }
    }
    return false;
}

const s1 = "3as1b";
const s2 = "eidbaooo";

console.log(checkInclusion(s1, s2));