const todoListElement = document.createElement('ul')

function main () {
  document.body.append(todoListElement)

  bindCreateEvent()
}

function bindCreateEvent () {
  function onClickSubmit () {
    const inputValue = document.getElementById('work').value
    if (inputValue.trim()) {
      createTodoItem(inputValue)
    }
  }

  const submitElement = document.getElementsByTagName('button')[0]
  submitElement.addEventListener('click', onClickSubmit)
}

function createTodoItem (work) {
  const todoItem = document.createElement('li')
  todoItem.textContent = work
  todoListElement.append(todoItem)

  bindClickSelfRemoveEvent(todoItem)
}

function bindClickSelfRemoveEvent(element) {
  element.addEventListener('click', function () {
    element.remove()
  })
}

window.addEventListener('DOMContentLoaded', main)