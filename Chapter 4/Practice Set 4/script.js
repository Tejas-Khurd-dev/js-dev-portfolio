// Q1
console.log("Q1")

function checkOddAndEven(num) {
    if (num % 2 == 0) {
        return `${num} is even`
    } else {
        return `${num} is even`
    }
}

console.log(checkOddAndEven(6));
console.log(checkOddAndEven(9));
console.log(checkOddAndEven(0.6));

console.log("Q2")

function checkGreaterNumber(num1, num2) {
    if (num1 == num2) {
        return `${num1} is equal to ${num2}`
    } else if (num1 > num2) {
        return `${num1} is greater than ${num2}`
    } else {
        return `${num2} is greater than ${num1}`
    }
    // OR
    // return num1 > num2 ? `${num1} is greater` : `${num2} is greater`
}

console.log(checkGreaterNumber(6, 7));
console.log(checkGreaterNumber(-9, -7));
console.log(checkGreaterNumber(0.6, 0.25));

console.log("Q3")

function toFahrenheit(celsius) {
    return (9/5) *celsius + 32
}

console.log(toFahrenheit(38));
console.log(toFahrenheit(0));
console.log(toFahrenheit(100));
