/**
 * 1.
 * DOM createElement : ElementNode 생성
 */

const paragraph = document.createElement('p')
console.log('1. : ', paragraph)

/**
 * 2.
 * TextNode 추가
 */

paragraph.textContent = '안녕하세요, DOM!'
console.log('2. : ', paragraph)

/**
 * 3.
 * paragraph 를 document.body 내에 추가
 */

document.body.append(paragraph)

/**
 * 4.
 * 배열을 UI LI Element 로 변환하여 출력
 */

const fruits = ['🍎', '🍊', '🍋', '🍐']

const ulElement = document.createElement('ul')

fruits.forEach(function (fruit) {
  const liElement = document.createElement('li')
  liElement.textContent = fruit
  ulElement.append(liElement)
})

document.body.append(ulElement)

/**
 * 5.
 * paragraph 제거
 */

paragraph.remove()

/**
 * 6.
 * ulElement 의 첫번째 요소 제거
 */

ulElement.children[0].remove()