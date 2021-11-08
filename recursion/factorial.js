//factorial iterative situation

function factorialIter(num) {
    let total = 1;
    for (let i=num;i > 1 ;i--) {
        total *= i;
    }

    return total;
}
console.log(factorialIter(4))//24

//factorial recursive solutioon

function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1)
}

console.log(factorial(4))//24