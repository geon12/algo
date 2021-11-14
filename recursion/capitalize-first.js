function capitalizeFirst (stringArr) {
    // given an array of strings
    // capitalize the first letter of each string in the array
    let newArr = [];
    if (stringArr.length === 0) return newArr;
    
    let capitalWord = stringArr[0];
    capitalWord = capitalWord[0].toUpperCase() + capitalWord.slice(1);
    newArr.push(capitalWord);
    newArr = newArr.concat(capitalizeFirst(stringArr.slice(1)));
    
    return newArr;
  }
  
  // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']