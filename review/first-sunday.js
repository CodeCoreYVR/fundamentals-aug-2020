let firstSunday

for (let i = 2014; i <= 2050 ; i++) {
  const day = new Date(i, 0)
  
  if (day.getDay() === 0) {
    firstSunday = day
    break 
  }
}

console.log(firstSunday)
