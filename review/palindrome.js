function isPalinrome(string) {
  let lowerCaseString = string.toLowerCase()

  let reverseString = lowerCaseString
    .split("") // split() is called on strings, returns an array
    .reverse() // called on arrays, returns an array
    .join("") // join() called on arrays, returns a string
  
  // if (reverseString === string) {
  //   return true
  // }
  // return false

  return reverseString === lowerCaseString
}

function isPalinrome2(string) {
  let lowerCaseString = string.toLowerCase()
  let reverseString = ""

  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += lowerCaseString[i]
  }

  return reverseString === lowerCaseString
}
