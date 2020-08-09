/*
  Increment/decrement operators
  ++ --
  pre increment/decrement operators
  post increment/decrement operators
*/

let num = 2
console.log(`num is initialize with a value of: ${num}`)
console.log(`When using preincrement, the value gets increased by one before printing it to the console, which changes its value to ${++num}`)
console.log(`current value: ${num}`)
console.log(`When using postincreament, the value gets increased by one, only returning the current value. So it displays the current value of num: ${num++}, before adding 1 to num`)
console.log(`current value: ${num}`)

// Compound assignment operators:
let num2 = 10

// The following is shorthand for num2 = num2 * 2
num2 *= 2 // 20

// The following is shorthand for num2 = num2 + 5
num2 += 5 // 25

// There are similar operators for all arithmetic operators and more
// += -= *= /= %= **=

