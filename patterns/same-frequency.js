//Given two positive integers, find out if they have same frequency of integers

function sameFrequency(num1,num2) {
    num1 = num1.toString();
    num2 = num2.toString();
    if (num1.length !== num2.length) return false;
    const lookup = {};
    for (let digit of num1) {
        lookup[digit] = lookup[digit] ? lookup[digit] + 1 : 1;
    }

    for (let digit of num2) {
        if (!lookup[digit]) {
            return false;
        } else {
            lookup[digit] -= 1;
        }


    }

    return true;
}