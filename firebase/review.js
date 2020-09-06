// Log out 'Hello' every 1 second and stop after 10 seconds have passed 
const intervalId = setInterval(() => console.log('hello'), 1000);
setTimeout(() => clearInterval(intervalId), 10000)

let count = 1
const intervalId = setInterval(function() {
  console.log('Hello')
  if (count++ === 10) {
    clearInterval(intervalId)
  }
}, 1000)

console.log('This runs before the callback in setInterval')

// Change circle colours to value of input using jQuery
$('#form-1').on('submit', function(event) {
  $('.circle').css('background-color', $('input[type=text]').val())
})
