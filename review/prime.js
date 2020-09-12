function printPrime(x) {
  let num = 1
  for (let i = 1; i <= x; i++) { // loop through x number to print
    while (true) {
      // if num is 1 or 2, it's a prime number, log it to to console, and
      // break out of the while loop to go to the next iteration in the for loop
      if (num <= 2) {
        console.log(num)
        num++
        break
      }
      // check if any number between 2 and one minus itself is divisible
      // if it is, it's not a prime number, add one to num and do the while again
      for (let j = 2; j < num; j++) { 
        if (num % j === 0) {
          num++
          continue
        }
      }
      // if none of the number s were divisible, we don't, but instead we log to the console
      // because it's a prime number. We break out to go to the next iteration in the for loop
      // because we just printed the prime number to the console
      console.log(num)
      num++
      break
    }
  }
}
