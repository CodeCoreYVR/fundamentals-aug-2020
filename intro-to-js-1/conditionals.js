// if/else statement

// The syntax for an if statement:

// Can be stand-alone
// if ( expression / condition ) {
  // code block that will execute only if the condition is truthy
// }

// You can write it on one line if there's only one line of code in 
// the code block without the braces
// if ( expression / condition ) // single line of code 

// With an else clause:
// if ( expression / condition ) {
  // code block that will execute only if the condition is truthy
// } else {
  // code that will run if the condition is falsy
// }

// Whenever you have an else clause, a block of code will always run
// No more than one code block will run per if statement
// With an else if clause
// if ( expression / condition ) {
  // code block that will execute only if the condition is truthy
// } else if ( expression / condition ) {
  // code will only run if the else if condition is truthy
  // but it will not run if any previous if and else if conditions were truthy
// } else {
  // code that will run if all previous if and else if conditions were falsy
// }

const year = parseInt(prompt("What year is your car?"))

if (year < 1998) {
  console.log('Your car is very old')
} else if (year < 2010) {
  console.log('Your car is old')
} else if (year < 2020) {
  console.log('Your car is new')
} else {
  console.log('Your car is future')
}
