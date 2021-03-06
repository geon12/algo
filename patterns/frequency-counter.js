//naive solution
function same(arr1,arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    for (let i=0;i<arr1.length;i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if  (correctIndex === -1) {
            return false
        }
        arr2.splice(correctIndex,1)
    }
    return true
}

function sameRefactored(arr1,arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (!(frequencyCounter1[key] === frequencyCounter2[key ** 2])) {
            return false
        }

        
    }

    return true

}

console.log(same([1,2,3],[1,9,4]))//true
console.log(same([1,2,5],[1,10,4]))//false

console.log(sameRefactored([1,2,3],[1,9,4]))//true
console.log(sameRefactored([1,2,5],[1,10,4]))//false