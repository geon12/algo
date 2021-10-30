function charCount(str) {
    const obj = {}
    for (let char of str) {
        char = char.toLowerCase()
        if (isAlphaNumeric(char)) {
            obj[char] = ++obj[char] || 1
        }
    }
    return obj
}

function isAlphaNumeric(char) {
    const code = char.charCodeAt(0)
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {

        return false
    }
    return true;
}

//Test cases

console.log(charCount("hello!"))
console.log(charCount("99 balloons, yo"))
