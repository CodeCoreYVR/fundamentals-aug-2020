window.open('http://www.google.com') // Open the url in a new webpage

document.body // Gives us the body node
document.body.childNodes // returns a Node List of the body's direct children
document.getElementById('viewport') // returns the element with the id of viewport

// returns an HTML Collection of all elements on the document with a class of 'ctr-p'
// HTML Collections don't include nodes like text nodes which exist on Node Lists
document.getElementsByClassName('ctr-p') 

// Change all links on a page to red
for (let i = 0; i < document.links.length; i++) {
  document.links[i].style.color = "red"
}
