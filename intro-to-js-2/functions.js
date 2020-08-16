// JS Functions:
// A container for a piece of code that can be executed whenever
// The arguments are the values that are passed to the function when called
// The parameters are the 'variables' that hold the values of the arguments
// that you can use within the function's code

// Function syntax:
// Function declaration/statement:
function functionName(param1, param2) {
  // code body of the function
  return // expression
}

// Function expression:
// A function without a name is called an anonmyous function
const functionExpression = function(param1, param2) {
  // code
  return // expression
}

// Invoke/call a function ()
functionName // return the function definition
functionName(1, 2) // returns the expression after the return statement
let a = functionName(1, 2) // save the returned value to a variable

// Any code after the return statement will not run
function afterReturnExample() {
  return "I'm returned"
  console.log("I will not run")
  return "This will not be returned"
}

// If you don't have a return statement, the function will return undefined when called
function returnUndefined(param1, param2) {
  alert('This function does something')
  // this will return undefined
}

// Arrow function (ES6+)
const arrow = (param1, param2) => {
  // code 
  return // expression
} 

// Exercises
function insult(name) {
  return `${name}, you doofus!`
}

const increment = function(num) {
  return num + 1
}

function repeat(string, number) {
  return string.repeat(number)
}
// or
function repeat(str, num) {
  let repeatedString = ''
  for (let i = 1; i <= num; i++) {
      repeatedString += str
  }
  return repeatedString
}
