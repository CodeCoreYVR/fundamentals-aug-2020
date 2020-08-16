// JS: Objects

// key/property - value pairs
// keys are strings
// values can be any data-type
const myObj = {
  a: 5,
  b: 6 + 6,
  aProperty: "string"
}

// Using dot notation
myObj.a // 5
myObj.b // 12

const car = {
  doors: 5, 
  colour: 'blue',
  // pre ES6:
  run: function() {
    console.log("running...")
  },
  // post ES6 shorthand
  openTrunk() {
    console.log('Trunk opened')
  },
}

// Using dot notaion:
car.run // gives us the definition of the method
car.run() // "running..."

// Using bracket notation
car["doors"] // 5
car["openTrunk"]() // "Trunk opened"

// Trying to access a property that doesn't exist gives us undefined
car.driver // undefined

// Exercises

// Count characters in a string with an object
function countChars(str) {
  const output = {}

  for (let i = 0; i < str.length; i++) {
    if (output[str[i]]) {
      output[str[i]]++
    } else {
      output[str[i]] = 1
    }
  }

  return output
}

function printPerson(person){
  console.log(`${person.name} is ${person.age} years old`)
}

// for..in syntax will loop through every key/property in the object
for (let key in car) {
  console.log(`${key} : ${car[key]}`)
}

// Shallow copy an object
const car2 = {...car}
const car3 = Object.assign({}, car)

// Return an array of an object's keys or values
Object.keys(car)
Object.values(car)

// Delete a key/value pair by using the 'delete' keyword
delete car.doors
// Verify if the key exists in the object:
car.hasOwnProperty('doors') // false
car.hasOwnProperty('colour') // true

typeof {} // "object"
typeof [] // "object"
Array.isArray({}) // false
Array.isArray([]) // true

// object keys have to be unique
const obj = {
  a: 1,
  b: 2,
  a: 3,
}
obj // {a: 3, b: 2}
