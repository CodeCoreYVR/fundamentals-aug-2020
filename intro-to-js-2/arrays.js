// JS Arrays:
// Arrays are ordered collections of data

// Use square brackets [] to define an array
// Each element is separated by a comma
[1, 'string', true, [3, 4, 5]]

// You can also nest arrays
[1, [2, [3, [4, null]]]]

// Ways to work with arrays:
const arr = [1, 2, 3, 4, 5]
arr.length // 5
arr[0] // 1

// Append elements:
// .push() appends values/elements to the end of the array
// returns the new array length
arr.push(6, 7)
arr // [1, 2, 3, 4, 5, 6, 7]

// Remove last element:
// .pop() does not take in any arguments and it removes the last element
// returns the element that was removed
arr.pop() // returns 7 (the element that was removed)
arr // [1, 2, 3, 4, 5, 6]

// Remove first element:
// .shift() does not take in any arguments and it removes the first element
// returns the element that was removed
arr.shift() // returns 1 (the element that was removed)
arr // [2, 3, 4, 5, 6]

// Add to the beginning of the array:
// .unshift() adds elements to the beginning 
// returns the new array length
arr.unshift(1)
arr // [1, 2, 3, 4, 5, 6]

// .slice() returns a new array as a portion of the array that it was called on
// .slice(index1, index2)
// index1: The beginning index of the new array (inclusive)
// index2: The ending index of the new array (exclusive)
arr.slice(2, 3) // [3]
arr.slice(1, 3) // [2, 3]

// It does not mutute the array that it was called on
arr // [1, 2, 3, 4, 5, 6]

// Exercises

const numbers = [0, 5, 6, -12]
let sum = 0
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}

const words = ["apple", "dog", "computer", "cup"]
for (let word of words) {
  console.log(`${word} has ${word.length} characters`)
}

// .join() (array method) joins together all elements in an array,
// separated by the argument that you pass in 
// and returns a string
// it does not mutate the array that it was called on
words.join(" | ") // "apple | dog | computer | cup"

// .split() (string method) returns an array of strings
// split by the argument string that you pass in
"split can only be called on strings".split(" ")
// ["split", "can", "only", "be", "called", "on", "strings"]

// Get the count of words in a sentence
let count = prompt('Enter a sentence').split(' ').length
alert(`There are ${count} words in that sentence`)

// Make a string containing all the numbers from 0-99 using join()
const digitsArr = []
for (let i = 0; i <= 99 ; i++) {
    digitsArr.push(i)
}
digitsArr.join('')

// Palindrome
const word = 'racecar'
word.split('').reverse().join('') === word // true

let compareWord = ''
for (let i = word.length - 1; i >= 0; i++) {
  compareWord += word[i]
}

word === compareWord
