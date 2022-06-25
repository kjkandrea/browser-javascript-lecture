/**
 * 1.
 * window event listening
 */

window.addEventListener('DOMContentLoaded', function () {
  console.log('DOM Loaded')
})

/**
 * 2.
 * click event listening
 */

const buttonElement = document.getElementsByTagName('button')[0]

function handleClick() {
  console.log('clicked : ', buttonElement)
}

buttonElement.addEventListener('click', handleClick)

/**
 * 3.
 * remove event listener
 */

buttonElement.removeEventListener('click', handleClick)

/**
 * 4.
 * click event 가 일어났을때 인풋 값 읽어들이기
 */

const inputElement = document.getElementById('your-name')

function handleClick2 () {
  console.log('Your name : ', inputElement.value)
}

buttonElement.addEventListener('click', handleClick2)
