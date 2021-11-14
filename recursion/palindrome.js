// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(word){
    if (word.length === 1) return true;
    if (word.length === 2 && word[0] === word[1]) return true;
    
    if (word[0] !== word[word.length -1]) {
      return false;
    } else {
        return isPalindrome(word.slice(1,word.length-1));
    }
        
}

