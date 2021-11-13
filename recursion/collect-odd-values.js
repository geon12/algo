function collectOddValues(input) {
    oddArr = [];
    if (input.length === 0) return oddArr;
    function helper(values) {
        if (values.length === 0) return;

        if (values[0] % 2 !== 0) oddArr.push(values[0]);

        helper(values.slice(1))
    }

    helper(input);

    return oddArr; 
}

console.log(collectOddValues([1,2,3,4,5,6]));//[1,3,5]
console.log(collectOddValues([11,9,4,2,21,7,6]));//[11,9,21,7]

function collectOddValuesPure(arr) {
    newArr = [];
    if (arr.length === 0) return newArr;

    if (arr[0] % 2 !== 0) newArr.push(arr[0]);

    newArr = newArr.concat(collectOddValues(arr.slice(1)));

    return newArr;
}

console.log(collectOddValuesPure([1,2,3,4,5,6]));//[1,3,5]
console.log(collectOddValuesPure([11,9,4,2,21,7,6]));//[11,9,21,7]