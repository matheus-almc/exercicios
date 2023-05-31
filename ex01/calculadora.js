const number1 = prompt("Enter the first number")
const number2 = prompt("Inform the second number")

const x = parseFloat(number1)
const y = parseFloat(number2)

const sum = x + y 
const subtraction = x - y
const multiplicatiom = x * y
const division = x / y 

alert(
  "Result of operations\n" + 
  "\nSum: " + sum +
  "\nSubtraction: " + subtraction +
  "\nMultiplication: " + multiplicatiom +
  "\nDivision: " + division 

)