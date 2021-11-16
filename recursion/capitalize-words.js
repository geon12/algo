function capitalizeWords (words) {
    let newArr = [];
    if (words.length === 0) return newArr;
    newArr.push(words[0].toUpperCase());
    newArr = newArr.concat(capitalizeWords(words.slice(1)));
    
    return newArr;
  }
  
  // let words = ['i', 'am', 'learning', 'recursion'];
  // capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']