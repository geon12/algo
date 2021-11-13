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

console.log(collectOddValues([1,2,3,4,5,6]))//[1,3,5]