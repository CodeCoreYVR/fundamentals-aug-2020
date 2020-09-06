// If $() takes in a callback, it waits for the document 
// to finish loading before firing
// We'll put all of our code inside of this callback so that it won't 
// run until the DOM has loaded
$(function() {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAM3uaHayB-0x7oFr1nuD7Ut9FHWhSSbzE",
    authDomain: "todo-aug-2020.firebaseapp.com",
    databaseURL: "https://todo-aug-2020.firebaseio.com",
    projectId: "todo-aug-2020",
    storageBucket: "todo-aug-2020.appspot.com",
    messagingSenderId: "241665291243",
    appId: "1:241665291243:web:7e1cc5d6dff716058d9fae",
    measurementId: "G-N56FH3F9BC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const taskForm = $('#task-form')
  const taskInput = $('#task-input')
  const taskList = $('div.list-group')

  taskForm.on('submit', function(event) {
    // This will stop the default behaviour/action
    // of the form when submitted
    event.preventDefault()

    // trim() will turn an empty spaces string into "" 
    const task = taskInput.val().trim()

    // If task is an empty string, "", it's falsey and will not add another list-group-item
    if (task) {
      // add an object representing the task to firebase
      firebase  
        .database()
        .ref('/tasks')
        .push({
          name: task,
          isComplete: false,
        })
    }
    
    // Reset the form after adding to the list with either:
    this.reset()
    taskInput.val('')
  })

  // The following will only add event listeners to elements that 
  // already exist in the DOM when the DOM first loads
  $('.delete-link').on('click', function(event) {
    $(this).closest('button.list-group-item').remove()
  })

  // The second optional param in .on() is a selector string
  // to filter the descendants of the selected elements that trigger the event
  // The event handler doesn't get invoked unless if the element matches the selector
  // "this" refers to the link that fired the event, not the taskList
  $(taskList).on('click', '.delete-link', function(event) {
    // Remove the task from firebase on click
    // Get the key from the data-id attribute to know which task to remove
    const key = $(this).closest('button.list-group-item').data().id
    firebase
      .database()
      .ref('/tasks')
      .child(key)
      .remove()
  })

  $(taskList).on('click', '.complete-link', function(event) {
    const key = $(this).closest('button.list-group-item').data().id
    const taskRef = firebase.database().ref(`/tasks/${key}`)
                      
    taskRef
      .once('value') // read the value of tasks/key
      .then(record => {
        // Update the task object's complete status
        taskRef.update({
          isComplete: !record.val().isComplete
        })
      })
  })

  // When a task is added to firebase, append a task to the list
  // Set the key of the task to data-id to reference it later
  // The callback will run everytime the page first loads and reads from the database for every
  // task in the database, and also every time a new task is added
  // Access the record's key using record.key
  // Access values from record.val().keyName
  firebase
    .database()
    .ref('/tasks')
    .on('child_added', function(record) {
      taskList.append(`
        <button 
          data-id="${record.key}"
          type="button" 
          class="d-flex justify-content-between align-items-center list-group-item list-group-item-action"
        >
          <span>${record.val().name}</span>
          <small>
            <a href="#" class="complete-link">Mark Complete</a>
            |
            <a href="#" class="delete-link">Delete</a>
          </small>
        </button>
      `)
      changeComplete(record) // Update the CSS based on whether isComplete is true or not
    })

  // When a task is changed, update the CSS
  firebase
    .database()
    .ref('/tasks')
    .on('child_changed', function(record) {
      changeComplete(record)
    })

  // When a task is removed from firebase,
  // remove the task from the DOM 
  firebase
    .database()
    .ref('/tasks')
    .on('child_removed', function(record) {
      $(`button[data-id=${record.key}]`).remove()
    })

  function changeComplete(record) {
    // We can destructure values from objects like this:
    // const isComplete = record.val().isComplete
    const { isComplete } = record.val()

    $(`button[data-id=${record.key}]`)
      .children('span')
      .css('text-decoration', isComplete ? 'line-through' : 'none')

    $(`button[data-id=${record.key}] a.complete-link`)
      .text(isComplete ? 'Mark Incomplete' : 'Mark Complete')

    // if (!record.val().isComplete) {
    //   $(`button[data-id=${record.key}]`)
    //     .children('span')
    //     .css('text-decoration', 'none')

    //   $(`button[data-id=${record.key}] a.complete-link`)
    //     .text('Mark Complete')

    // } else {
    //   $(`button[data-id=${record.key}]`)
    //     .children('span')
    //     .css('text-decoration', 'line-through')

    //   $(`button[data-id=${record.key}] a.complete-link`)
    //     .text('Mark Incomplete')
    // }
  }
})
