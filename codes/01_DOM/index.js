/**
 * DOM Tree 의 트리구조를 통하여 다음과 같이 h1 에 접근할 수 있다.
 *
 * @children-1depth [html]
 * @children-2depth [head, body]
 * @children-3depth [h1, ...]
 */

const h1 = document.children[0].children[1].children[0]
console.log('1 : ', h1)