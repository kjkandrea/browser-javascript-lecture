import './style.css'

/**
 * 1.
 * Promise 를 통해 약속을 반환하는 함수
 *
 * @returns {Promise<resolve>}
 */
function getPromise () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve('done')
    }, 1000)
  })
}

/**
 * 2.
 * 약속의 이행을 정의한다.
 */
// getPromise().
//   then(function displayData (data) {
//     alert(data)
//   })

/**
 * 3.
 * Promise 를 통해 실패를 반환하는 함수
 *
 * @returns {Promise<resolve>}
 */
function getPromise2 () {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('fail'))
    }, 2000)
  })
}

/**
 * 4.
 * 약속의 이행/실패 를 정의한다.
 */
// getPromise2().
//   then(function displayData (data) {
//     alert(data)
//   }).
//   catch(function loggingError (error) {
//     console.error(error)
//   })


/**
 * 5.
 * fetch
 *
 * httpRequest 에 대한 약속을 반환한다.
 */

const REQUEST_URL = 'http://jsonplaceholder.typicode.com'

const promise = fetch(REQUEST_URL + '/todos', {
  method: 'GET'
})
console.log(promise)
