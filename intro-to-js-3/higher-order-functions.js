// A higher order function is a function that either:
// - takes in a function as a parameter
// - returns a function

const runThree = func => {
  func()    
  func()
  func()
} 

const sayHi = () => {
  console.log('Hi!')
}

runThree(sayHi) 
// Hi!
// Hi!
// Hi!

const doubleIt = x => 2 * x
const call = (num, func) => func(num)
call(10, doubleIt) // 20

// function call(num, func) {
//   return func(num)
// }

// Stretch: Make call take in the number of times to call the function
// func is a function that is passed in as an argument
// it is known as a callback
const call2 = (num, func, times) => {
  for (let i = 1; i <= times; i++) {
       num = func(num)
  }
  return num
} 

// Anonymous functions are typically passed as an argument
// to other higher order functions
call(10, function(x) {
    return 2 * x
})
call2(10, (x) => 2 * x, 4)
call2(10, (x) => {
  // some other code
  return 2 * x
}, 4)

// Built in array map() method
[1, 2, 3, 4].map(function(num) {
  return num * 2
})

// or 

[1, 2, 3, 4].map(num => num * 2) // [2, 4, 6, 8]

// Implementing map
function map(arr, cb) {
  const output = []
  for (let element of arr) {
      output.push(cb(element))
  }
  return output
}

map([1, 2, 3, 4], doubleIt) // [2, 4, 6, 8]
map([1, 2, 3, 4], (n) => n ** 2) // [1, 4, 9, 16]

// Stretch: Array of functions
function map(arr, arrayOfFuncs) {
  const output = []

  for (let element of arr) {
      for (let func of arrayOfFuncs) {
          element = func(element)
      }
      output.push(element)
  }
  
  return output
}

// Array of squares
map([1, 2, 3, 4, 5], n => n ** 2)

// Get word lengths
map(['hello', 'data', 'eat cheese', 'walking'], word => word.length)

// rewrite using forEach
function map(arr, cb) {
  const output = []
  
  arr.forEach(function(element) {
      output.push(cb(element))
  })
  
  return output
}
