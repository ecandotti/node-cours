// Step one

let number1 = "3"
let number2 = "2"

console.log(parseInt(number1) + parseInt(number2) + "")
console.log(typeof (parseInt(number1) + parseInt(number2) + ""))

// Step two

function add(numbers) {
    if (numbers.length === 0) return "0"

    const arrNumber = numbers.split(",")
    let result = 0

    for (let i = 0; i < arrNumber.length; i++) {
        result += parseInt(arrNumber[i])
        
    }
    
    return (result + "")
}

console.log(add("23,33,1"))