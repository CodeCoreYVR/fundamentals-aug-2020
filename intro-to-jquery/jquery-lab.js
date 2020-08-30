// jQuery Lab: http://bit.ly/jquery-lab

$('.shape') // Select all shapes
$('.shape.black') // Select all black shapes
$('.shape').length // Returns the count of all the shapes on the page
$('.shape.black').length // Returns the count of all the black shapes on the page
$('.shape.black, .shape.blue').length // count all black and blue shapes
$('h1') // select all h1 tags
$('.small.circle') // select all small circles

$('h1')[0] // returns the element node itself
$('h1').eq(0) // returns the element wrapped in a jquery set, so you can chain jquery methods on it like this:
$('h1').eq(0).hide()

// Select all shapes:
document.querySelector('.shape') // querySelector returns the single Node of the first element that matches the selector
document.querySelectorAll('.shape') // querySelectorAll returns a NodeList
document.getElementsByClassName('shape') // getElementsByClassName return returns an HTML collection
$('.shape') // $() returns a wrapped set

// passing only one argument to attr() returns us the value of the attribute
$('.shape').eq(0).attr('class') 
$('.shape')[0].getAttribute('class') // [] returns us the element in jQuery
document.querySelectorAll('.shape')[0].getAttribute('class') // getAttribute() can be called on DOM nodes

// passing a second argument to attr() will change the attribute value for all elements of the set
$('.shape').eq(0).attr('class', 'blue shape small')

// When reading an attribute, only the first element's attribute is returned
$('a').attr('href')

// Get all links in an array
const links = $('a')
const linksArray = []
links.each(index => {
  linksArray.push(links.eq(index).attr('href'))
})

// When setting attributes, every element in the collection will be set
$('a').attr('href', 'http://www.codecore.ca')

// Change all links class to highlight
$('a').attr('class', 'highlight')

document.querySelectorAll('a').forEach(node => {
  node.setAttribute('class', 'highlight')
})

// Change all shapes class to highlight
// This will override the previous value of the class and remove all previous classes
$('.shape').attr('class', 'highlight')

// Add or remove a class
$('.shape').addClass('highlight')
$('.shape').removeClass('highlight')
$('.shape').toggleClass('highlight')

document.querySelectorAll('.shape').forEach(node => {
  node.classList.add('highlight')
  node.classList.remove('highlight')
  node.classList.toggle('highlight')
})

// Remove all blue shapes
$('.blue.shape').remove() // remove all selected elements from the DOM
$('.blue.shape').hide() // change all selected elements display property to none
$('.blue.shape').eq(0).hide() // change first selected element display property to none

document.querySelectorAll('.blue.shape').forEach(node => {
  node.style.display = 'none' // hide
  node.remove() // remove
})

// Get inner HTML of first matched element
$('.container').html()
document.querySelector('.container').innerHTML

// Change innerHTML of every element in the set
$('.container').html('<h1>Hello Shapes</h1>')

document.querySelectorAll('.container').forEach(node => {
  node.innerHTML = "<h1>Hello Shapes</h1>"
})

$('.blue.shape').remove() // remove all blue shapes
$('#orange-container .shape').remove() // remove all shapes inside the orange container
$('.small.red.circle').remove() // remove all small red cirles

// Get the contents of the reset button
$('button#reset').html()
document.querySelector('button#reset').innerHTML

// Try to get the content of all the links on the page
$('a').html() // Only reads the first one

// One way to read all of them:
$('a').each(index => console.log($('a').eq(index).html()))

// Get the content of the reset button to say "Launch Missiles"
$('button#reset').html('Launch Missiles!')
document.querySelector('button#reset').innerHTML = "Launch Missiles!"

// Change all the h1 tags to say "[Your name] is cool!"
$('h1').html(prompt('What is your name?') + ' is cool!')

const name = prompt('What is your name?')
document.querySelectorAll('h1').forEach(node => {
  node.innerHTML = name + ' is cool!'
})

// Select all children of the purple container
$('#purple-container').children()
document.querySelector('#purple-container').children // returns HTML collection of child elements
document.querySelector('#purple-container').childNodes // returns Node List including text nodes

// Select all children of all containers
$('.container').children()
document.querySelectorAll('.container > *')

// children() will return a set so we can call jQuery methods on it
$('.container').children().hide()

// Get the parent of the purple container
// Returns a wrapped set
$('#purple-container').parent()

// Get all the parents of all the shapes
$('.shape').parent()

// Get the green container using parent()
$('.shape.medium.red.diamond').parent()

// Select all li tags with anchor tags in them
// closest returns the closest ancestor that matches the selector
$('li').slice(0, 6)
$('li a').closest('li')

// Effects
$('.container').slideUp()
$('.container').fadeOut()
$('.container').fadeIn()

// When a shape is clicked, log "shape clicked" to the console
$('.shape').on('click', function(e) {
  console.log('shape clicked')
})

document.querySelectorAll('.shape').forEach(node => {
  node.addEventListener('click', function(e) {
      console.log('shape clicked')
  })
})

// When our mouse enters a blue circle, log "blue circle go away"
$('.circle.blue').on('mouseenter', function(e) {
  console.log('blue circle go away!')
})

document.querySelectorAll('.circle.blue').forEach(node => {
  node.addEventListener('mouseenter', function(e) {
      console.log('blue circle go away!')
  })
})

// When our mouse leaves a blue circle, log "blue circle, goodbye"
$('.circle.blue').on('mouseleave', function(e) {
  console.log('blue circle, goodbye!')
})

document.querySelectorAll('.blue.circle').forEach(node => {
  node.addEventListener('mouseleave', function(e) {
    console.log('blue circle, goodbye!')
  })
})

// Set class to 'highlight' when mouse enters
$('tr').on('mouseenter', function(e) {
  $(this).attr('class', 'highlight')
})

document.querySelectorAll('tr').forEach(node => {
  node.addEventListener('mouseenter', function(e) {
    node.setAttribute('class', 'highlight')
  })
})

// event.target refers to the element that triggered the event
// event.currentTarget and 'this' always refer to the element that the event listener was attached to
$('tr').on('mouseenter', function(e) {
  console.log('target:', e.target) // the <td> that triggered the event

  // The <tr> that the event listener is attached to:
  console.log('current target:', e.currentTarget)
  console.log(this)
})

// Mouse leave
$('tr').on('mouseleave', function(e) {
  $(this).attr('class', '')
})

// Remove the container of the shape that was clicked
$('.shape').on('click', function(e) {
  $(this).parent().remove()
})

document.querySelectorAll('.shape').forEach(node => {
  node.addEventListener('click', function(e) {
    node.parentElement.remove()
  })
})

// When a container is clicked, remove all the shapes inside of it
$('.container').click(function(e) {
  $(this).children('.shape').remove()
})

document.querySelectorAll('.container').forEach(node => {
  node.addEventListener('click', function(e) {
    node.querySelectorAll('.shape').forEach(shape => {
        shape.remove()
    })
  })
})
