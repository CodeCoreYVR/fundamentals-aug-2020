// localStorage and sessionStorage are key-value pairs
// They exist for a specific domain for a specific browser on your machine
// The values can only be strings, but if you want to use objects we can 
// use JSON.stringify() and JSON.parse()

// Set a key value
localStorage.setItem('key', 'value')

// Get an value from a key
localStorage.getItem('key') // value

// sessionStorage data gets delete when the browser tab closes
// localStorage data exists until we delete it using code:
localStorage.removeItem('key')

// Cookies are limited to 4KB for the whole object
// They exist until they expire (we set the expiration date)
// They are sent along with every request to the server
// The server also sends back cookies after modifying them
// e.g. a server can use cookies to authenticate
// cookies are specific for each domain and browser

// No easy way out of the box to use cookies:
// We would usually use an external library to handle them
document.cookie

