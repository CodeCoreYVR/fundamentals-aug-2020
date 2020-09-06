// If $() takes in a callback, it waits for the document 
// to finish loading before firing
$(function() {
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
      taskList.append(`
        <button type="button" class="d-flex justify-content-between align-items-center list-group-item list-group-item-action">
          <span>${task}</span>
          <small>
            <a href="#" class="complete-link">Mark Complete</a>
            |
            <a href="#" class="delete-link">Delete</a>
          </small>
        </button>
      `)
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
  // "this" refers to the link that fired event, not the taskList
  $(taskList).on('click', '.delete-link', function(event) {
    // .closest() will traverse up in the DOM and give us the first ancestor
    // that matches the css selector 
    $(this).closest('button.list-group-item').remove()
  })

  $(taskList).on('click', '.complete-link', function(event) {
    const isComplete = $(this).text() === 'Mark Incomplete'

    if (isComplete) {
      $(this)
        .parent()
        .siblings()
        .css('text-decoration', 'none')

      $(this).text('Mark Complete')

    } else {
      $(this)
        .parent()
        .siblings()
        .css('text-decoration', 'line-through')

      $(this).text('Mark Incomplete')
      
    }
  })
})
