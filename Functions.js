/* Functions */
function isEven(num) {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
}
// calling function
response = isEven(5)
console.log(response)

// function with default argument
function helloWorld(text='Hello Someone!') {
    return text
}
console.log(helloWorld('Hello Sam!'))
