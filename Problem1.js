// Small Calculator Which performs operations such as add, sub, multiply, division...

let num1 = 20;
let num2 = 7

// addition Function
function add(num1, num2) {
    return num1 + num2
}
console.log(`Addition: ${add(num1, num2)}`);



// Subraction Function
function sub(num1, num2) {
    return num1 - num2
}
console.log(`Subraction: ${sub(num1, num2)}`);


// Multiplication Function
function multiply(num1, num2) {
    return num1 * num2
}
console.log(`Muliplication: ${multiply(num1, num2)}`);

// Division Function
function div(num1, num2) {
    if (num2 === 0) {
        return "Cannot Divide by zero"
    }else{
        return num1 / num2
    }
}

// console.log(`Division: ${div(num1, num2)}`);
// If num2 value will be zero then we will use this one

console.log(`Division: ${div(num1, num2).toFixed(2)}`);
