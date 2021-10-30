function validAnagram(word1,word2){
   
    if (word1.length !== word2.length) {
        return false;
    }
    
    const wordCount1 = {};
    const wordCount2 = {};
    
    for (let char of word1) {
        
      wordCount1[char] = (wordCount1[char] || 0) + 1;
      
    }
    
    for (let char of word2) {
      wordCount2[char] = (wordCount2[char] || 0) + 1;
    }
    
    for (let key in wordCount1) {
        if (!(key in wordCount1)) {
            return false;
        }
        
        if (wordCount1[key] !== wordCount2[key]) {
            return false;
        }
        
    }
    
    return true;
  }

  function validAnagram2(word1,word2){

    if(word1.length !== word2.length) {
        return false;
    }

    const lookup = {}
    for (let char of word1) {
        lookup[char] = lookup[char] ? lookup[char] + 1 : 1;
    }

    for (let char of word2) {
        if (!lookup[char]) {//if lookup[char] = 0 or is undefined it is falsy and not an anagram
            return false;
        }
        else {
            lookup[char] -= 1;
        }
        

    }

    return true;
  }

  console.log("anagram 1")
  console.log(validAnagram("",""))//true
  console.log(validAnagram("cinema","iceman"))//true
  console.log(validAnagram("aaz","zza"))//false

  console.log("anagram 2")
  console.log(validAnagram2("",""))//true
  console.log(validAnagram2("cinema","iceman"))//true
  console.log(validAnagram2("aaz","zza"))//false
  console.log(validAnagram2("anagram","nagaram"))//true
  console.log(validAnagram2("papac","caapc"))//false