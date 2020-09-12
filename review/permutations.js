function permutation(a, b, c) {
  // arguments is an object you can access in functions
  // it is array-like and holds each argument passed to the function

  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      for (let k = 0; k <= 2; k++) {
        console.log(`${arguments[i]} ${arguments[j]} ${arguments[k]}`)
      }
    }
  }

}

permutation("a", "b", "c")
// a a a  
// a a b  
// a a c  
// a b a  
// a b b  
// a b c 
// a c a 
// a c b 
// a c c 
// b a a  
// b a b  
// b a c  
// b b a  
// b b b  
// b b c 
// b c a 
// b c b 
// b c c 
// c a a  
// c a b  
// c a c  
// c b a  
// c b b  
// c b c 
// c c a 
// c c b 
// c c c 

