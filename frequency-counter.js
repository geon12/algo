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
    
}

console.log(same([1,2,3],[1,9,4]))//true
console.log(same([1,2,5],[1,10,4]))//false