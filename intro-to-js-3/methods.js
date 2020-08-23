const car = {
  doors: 5,
  speed: 90,
  park: function() {
      console.log('Parking...')
  },
  drive: () => console.log('Driving...'),
  // ES6 shorthand:
  stop() {
      console.log('Stopping...')
  },
}

car.speed // 90
car.park // gives back method definition
car.drive() // 'Driving...'
