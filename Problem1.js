// Small Calculator Which performs operations such as add, sub, multiply, division...

let a = 20;
let b = 7

// addition Function
function add(a, b) {
    return a + b
}
console.log(`Addition: ${add(a, b)}`);



// Subraction Function
function sub(a, b) {
    return a - b
}
console.log(`Subraction: ${sub(a, b)}`);


// Multiplication Function
function multiply(a, b) {
    return a * b
}
console.log(`Muliplication: ${multiply(a, b)}`);

// Division Function
function div(a, b) {
    if (b === 0) {
        return "Cannot Divide by zero"
    }else{
        return a / b
    }
}

// console.log(`Division: ${div(a, b)}`);
// If b value will be zero then we will use this one

console.log(`Division: ${div(a, b).toFixed(2)}`);
