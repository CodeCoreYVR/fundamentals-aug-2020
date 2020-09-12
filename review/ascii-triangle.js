// n = number of rows
// i = row 
// j = every trailing space before row starts
// k = number of circles 
function ascii(n) {
  for (let i = 1; i <= n; i++) {
    let row = ""
    for(let j = 1; j <= n - i; j++) {
      row += " "
    }
    for(let k = 1; k <= i; k++) {
      row += "0  "
    }
    console.log(row)
  }
}

function ascii2(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "0  ".repeat(i))
  }
}

// pseudo code
// 1. Log to the console n number of rows
// 2. Add trailing spaces to each row to make a pyramid
// 3. Add 0's to each row based on the row number
