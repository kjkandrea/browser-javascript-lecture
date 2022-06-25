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