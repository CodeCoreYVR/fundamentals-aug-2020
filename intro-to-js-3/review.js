// const returnZero = number => 0
// const describeUser = ({name, age}) => console.log(`${name} is ${age} years old`)
// const getWordLengths = sentence =>
//   sentence
//     .split(' ')
//     .reduce((wordLengths, word) => ({...wordLengths, [word]: word.length}), {})

function returnZero(number) {
  return 0
}

function describeUser(user) {
  console.log(`${user.name} is ${user.age} years old`)
}

const getWordLengths = sentence => {
  const output = {}
  const words = sentence.split(' ')

  for (let word of words) {
    output[word] = word.length
  }

  return output
}
  