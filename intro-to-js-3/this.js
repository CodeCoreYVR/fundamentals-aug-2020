const can = {
  a: 1,
  b: 2,
  c: 3,
  touchThis() {
      return this
  },
}

can.touchThis() // returns can object

// "this" will refer to something else if the method is separated from its obj
// this is called implicit binding of "this"
// the rule of thumb is that "this" will refer to the left of the dot 
const cant = {}
cant.touchThis = can.touchThis
cant.touchThis() // return cant object

// Similarly, when we define a function, it doesn't know what arg is 
// until we invoke it and pass it an arg
function someFunc(arg) {
  console.log('this:', this)
  console.log('arg:', arg)
}

someFunc(200)
// this: global object
// arg: 200

const counter = {
  step: 1,
  set(n) {
      this.count = n 
  },
  inc() {
      return this.count += this.step
  },
  dec() {
      return this.count -= this.step
  },
  now() {
      return this.count
  },
  setStep(n) {
      this.step = n 
  },
  reset() {
      this.count = 0
  },
}

const car = {
  doors: 5,
  speed: 90,
  stop() {
    if (this.speed > 120) console.log('Screeetch')
    else if (this.speed > 80) console.log('RRch')
    else if (this.speed > 0) console.log('sh')
    else console.log("Yikes, I don't know how fast I'm going!!!")
  },
  stop2() {
    if (typeof this.speed !== 'number') return
    const repeatedE = 'e'.repeat(this.speed)
    console.log(`Scr${repeatedE}tch!!!`)
  },
}
