let arr = [0, 1, 2, 3]

// .slice() returns a new array as a portion of the array that it was called on
// .slice(index1, index2)
// index1: The beginning index of the new array (inclusive)
// index2: The ending index of the new array (exclusive)
arr.slice(2, 3) // [2]
arr.slice(1, 3) // [1, 2]

// passing in a negative index is an offset from the end of the array
arr.slice(-2) // [2, 3]

// it doesn't mutate the underlying array
arr // [0, 1, 2, 3]

// .splice() mutates the underlying array
// .splice(index, deleteCount, item1, item2)
// it returns an array of the deleted items
arr.splice(-2) // [2, 3]
arr // [0, 1]

arr = [0, 1, 2, 3]
arr.splice(1, 2) // [1, 2]
arr // [0, 3]

arr = [0, 1, 2, 3]
arr.splice(1, 2, 5, 6) // [1, 2]
arr // [0, 5, 6, 3]

