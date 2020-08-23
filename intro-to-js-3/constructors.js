function Vector(x = 0, y = 0) {
  // When a function is invoked with the "new" keyword, JS will know to use
  // this function as a constructor
  // When invoked, its "this" is like a new empty object
  // implicity ---> const this = {}
  
  // We build the object (instance) by assigning values to the properties of "this"
  this.x = x
  this.y = y

  // At the end of the function, "this" is returned
  // return this

  // This line below will be returned if the function is invoked without 
  // the 'new' keyword but will be ignored if 'new' is used
  return "I am a constructor"
}

let v1 = new Vector(4, 4) // returns an instance of a Vector {x: 4, y: 4}

// JS will treat the following function call as a regular function
// This is not good since it will set x and y to the global object
Vector(4, 4) // "I am a constructor"

// Counter constructor
function Counter(initialCount = 0, step = 1) {
  this.count = initialCount
  this.step = step

  // Setting methods directly on "this" below will create 
  // methods on each instance
  // Instead, we should set the methods on the prototype instead
  // and have all instances share them like on line 57

  // this.set = function(n) {
  //   this.count = n 
  // }
  // this.inc = function() {
  //     return this.count += this.step
  // }
  // this.dec = function() {
  //     return this.count -= this.step
  // }
  // this.now = function() {
  //     return this.count
  // }
  // this.setStep = function(n) {
  //     this.step = n 
  // }
  // this.reset = function() {
  //     this.count = 0
  // }
}

// Instances inherit from Counter.prototype 
// We can set methods on it to share methods/properties across all instances 
Counter.prototype.inc = function() {
  return this.count += this.step
}

// Classical syntax
class Counter {
  constructor(initialCount = 0, step = 1) {
    this.count = initialCount
    this.step = step
  }
  inc() {
    return this.count += this.step
  }
}
