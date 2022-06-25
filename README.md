# 브라우저 환경에서의 JavaScript

* 본디 웹페이지에 보조적인 기능을 수행하기 위해 탄생한 프로그래밍 언어
* 브라우저 환경 제어를 위해 호스트 객체 를 제공한다.

![objects.png](/images/objects.png)

## 호스트 객체

호스트 객체(Host object)는 브라우저 환경에서 호스트 환경에 정의된 객체를 말한다.
호스트 객체는 DOM 과 BOM 으로 분리될 수 있다.

* 문서 객체 모델(Document Object Model) :
  자바스크립트를 통해 동적으로 문서를 변경할 수 있게하는 인터페이스
* 브라우저 객체 모델(Browser Object Model) :
  브라우저 창에 접근하고 조작할 수 있게 하는 인터페이스

## Document Object Model

* 트리구조로 문서의 구조화된 표현을 제공
* 이를 제어할 수 있는 DOM API 를 제공

### DOM Tree

HTML 문서를 브라우저 렌더링 엔진이 파싱하여 DOM Tree 를 생성한다.

```html
<html lang="en">
 <head>
   <title>My first web page</title>
  </head>
 <body>
    <h1 id="hello">Hello, world!</h1>
    <p>How are you?</p>
  </body>
</html>
```

위 문서는 다음과 같이 DOM Tree 로 변환된다.

![tree.png](./images/tree.png)

h1 에 접근하고자 할 경우 `Element.children` API 를 통해 다음과 같이 접근할 수 있다.

```js
document.children[0].children[1].children[0] // <h1>Hello, world!</h1>
```

### Element Node 취득

### Element Node 내의 하위 Node 취득

### Element 생성

### 생성된 Element 문서내에 추가하기

### 이벤트 리스너

### 동적인 문서 제어 : input - click - append

## Browser Object Model

## Ajax