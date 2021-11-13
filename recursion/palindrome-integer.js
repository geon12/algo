//check if integer is palindrome

function isPalindrome(x) {
    
    if (typeof x === 'number') {
      x = x.toString();
    }
    
    if (x.length === 0 || x.length === 1) {
        return true;
    }
    
    if (x[0] !== x.slice(-1)) {
        return false;
    }
    
    return isPalindrome(x.substring(1,x.length-1));
};

console.log(isPalindrome(121)) //true
console.log(isPalindrome(23456))//false
console.log(isPalindrome(3443))//true
console.log(isPalindrome(-100))//false
console.log(isPalindrome(1000021))//false