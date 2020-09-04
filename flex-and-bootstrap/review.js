// Higher order functions:

// The either:
// A function that takes in another function (callback) as an argument
// They return another function
// In JS, functions are first-class, they can returned from 
// other functions as values and also be passed as values to other functions

const runFunc = function(cb, arg) {
  return cb(arg)
}

function log(msg) {
  console.log(msg)
}

const isEven = (number) => {
  return number % 2 === 0
}

runFunc(log, 'hi there')
runFunc(isEven, 100)
runFunc(isEven, 1)
runFunc((number) => {
  return number + 1
}, 1)
