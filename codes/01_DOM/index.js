/**
 * 1.
 * DOM Element.children 으로 요소 취득
 *
 * @children-1depth [html]
 * @children-2depth [head, body]
 * @children-3depth [h1, ...]
 */

const childElementNode = document.children[0].children[1].children[0]
console.log('1. : ', childElementNode)

/**
 * 2.
 * DOM getElementById 로 요소 취득
 */

const elementByIdHello = document.getElementById('hello')
console.log('2. : ', elementByIdHello)