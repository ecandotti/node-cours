// Step one

let number1 = "3"
let number2 = "2"

console.log(parseInt(number1) + parseInt(number2) + '')
console.log(typeof (parseInt(number1) + parseInt(number2) + ''))

// Step two

function add(num1 = 0, num2 = 0, num3 = 0) {
    return num1 + num2 + num3
}

console.log(add(2,4))