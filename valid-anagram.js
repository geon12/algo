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

  console.log(validAnagram("",""))//true
  console.log(validAnagram("cinema","iceman"))//true
  console.log(validAnagram("aaz","zza"))//false