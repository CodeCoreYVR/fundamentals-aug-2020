for (let i = 65; i <= 90; i++) {
  let string = ""
  for (let j = 65; j <= i; j++) {
    string += String.fromCharCode(i)
  }

  console.log(string)
}

for (let i = 97; i < 123; i++) {
  console.log(String.fromCharCode(i).repeat(i-96));
}
