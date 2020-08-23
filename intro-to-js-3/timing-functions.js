/*
  setTimeout is a higher order function that will execute
  a function AFTER X amount of milliseconds
  setInterval is a higher order function that will execute
  a function EVERY X amount of milliseconds

  The setTimeout/setInterval function receices 2 parameters
    1) a callback
    2) a number which represents milliseconds
*/

// Log out 'Hello World' after 5 seconds
setTimeout(() => {
  console.log('Hello World')
}, 5000) 

// Ready, Set, Go!
console.log('Ready')
setTimeout(() => console.log('Set'), 1000)
setTimeout(() => console.log('Go!'), 2000)

// or 

console.log('Ready')
setTimeout(() => {
    console.log('Set')
    setTimeout(() => console.log('Go!'), 1000)
}, 1000)

// setInterval returns an id which you can pass to clearInterval to cancel it
const id = setInterval(() => console.log('.'), 1000)
setTimeout(() => clearInterval(id), 10000)

// Dual odd and even timers:
let count = 0
setInterval(() => {
  count++
  if (count % 2 === 0) console.log(count)
}, 1000)
setInterval(() => {
  if (count % 2 !== 0) console.log(count)
}, 1000)

// Blast-off countdown
let count = 10
const id = setInterval(() => {
    if (count === 0) {
        console.log('Blast Off!')
        clearInterval(id)
    } else {
        console.log(count--)
    }
}, 1000)
