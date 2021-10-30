//Return first pair of elements in array that sum to zero

function sumZero(arr) {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        let sum = arr[left] + arr[right]

        if (sum === 0) {
            return [arr[left],arr[right]]
        } else if (sum > 0) {
            right--
        } else {
            left ++
        }
    }

}

console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10])) //[-3,3]

//Count Unique values - my solution
function countUniqueValues(arr){
    if (arr.length === 0) return 0;
    let i=0;
    for (let j=1;j < arr.length;j++) {
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
        }
    }
    
    return i+1;//add the one for the first value
}

