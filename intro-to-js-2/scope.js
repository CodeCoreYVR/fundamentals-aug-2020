let a = 1
const b = 2

function func(a) {
  if (true) {
    let b = 20
    console.log(`Within if block: a:${a}, b:${b}`) // `Within if block: a:10, b:20`
  }
  console.log(`Within function block: a:${a}, b:${b}`) // `Within function block: a:10, b:2`
}

func(10)
console.log(`In global scope: a:${a}, b:${b}`) //`In global scope: a:1, b:2`


//  With var

var a = 1
var b = 2

function func(a) {
  if (true) {
    var b = 20
    console.log(`Within if block: a:${a}, b:${b}`) // `Within if block: a:10, b:20`
  }
  console.log(`Within function block: a:${a}, b:${b}`) // `Within function block: a:10, b:20`
}

func(10)
console.log(`In global scope: a:${a}, b:${b}`) 
