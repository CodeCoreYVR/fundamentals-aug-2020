// Primitive Data Types
// Number
// String
// Boolean
// null
// undefined

// Examples of numbers
5 
-5
-10.5439611
7.56
Infinity
-Infinity
NaN

// Strings
"This uses double quotes"
'I\'m a single quote string' // '\' escapes characters  
`This uses backticks`
"one" + "two" // "onetwo"
'4' + 5 // "45"
5 + '4' // "54"

// Only with backticks can you use string interpolation
`There are ${5 + 5} students in the room`

// Only backticks can be used for multiline strings
` 
  This is 
  a multiline
  string
`

// Get the length of a string
"abc".length // 3

// We can access characters in a string with bracket notation
"abc"[2] // "c"

// We cannot mutate a string with bracket notation
let s = 'bobbi'
s[4] = 'y'
s // 'bobbi'

// parse a string into a number
parseInt("123") // 123
parseInt("123abc") // 123
parseInt("foobar") // NaN
parseInt("abc123") // NaN
parseInt("10.28723642") // 10
parseInt("10.28723642") // 10.28723642

// Remove beginning and trailing spaces
"              Hello World            ".trim() // "Hello World"

// Booleans
true
false
