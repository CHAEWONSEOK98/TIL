# JavaScript load defer async

**HTML 파일에서 자바스크립트 파일을 효율적으로 불러오기**

- 브라우저에서 HTML 파일을 만나면 위에서부터 아래로 순차적으로 코드를 파싱한다.
- 파싱을 하다가 스크립트 파일을 만나면 하던 파싱 작업을 멈추고 스크립트 파일을 가져온다.
- 가져온 스크립트 파일을 실행한다.
- 스크립트 파일을 불러와 실행하는 방법으로는 스크립트 태그 위치 선정, event-load, defer & async 속성이 있다.

<hr />

**기본적인 스크립트 태그 불러오기**

`<head> 에서 스크립트를 사용하는 경우`

HTML Element가 파싱되어 DOM 요소가 생성되기 전에 스크립트 파일을 만나서 Element를 사용하는 경우 에러가 발생한다. 이때 발생하는 에러는 다음과 같았다.

`Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')`

```
  [html]
  <head>
    <script src="main.js"></script>
  </head>
  <body>
    <button id="btn">버튼</button>
  </body>

[script]
const button = document.querySelector('#btn');
button.addEventListener('click', () => {
  alert('클릭');
});
```

<hr />

**script load 해결방법**

`body 최 하단에서 script 로드`

- HTML 파싱을 한 후에 script 태그를 로드할 수 있도록 body태그 최 하단으로 script 태그 위치를 이동시키는 방법

- 스크립트 태그의 위치를 변경함으로써 HTML Element를 먼저 파싱한다.

```
  <head>
  </head>
  <body>
    <button id="btn">버튼</button>
    <script src="main.js"></script>
  </body>

[script]
const button = document.querySelector('#btn');
button.addEventListener('click', () => {
  alert('클릭');
});
```

`load 이벤트 리스너 등록`

- window.onload - HTML파싱 DOM생성 그리고 외부 콘텐츠(images,script,css,etc)가 로드된 후 발생하는 이벤트

```
  [html]
  <head>
    <script src="main.js"></script>
  </head>
  <body>
    <button id="btn">버튼</button>
  </body>

  [script]
  window.onload = () => {
  const button = document.querySelector('#btn');
  button.addEventListener('click', () => {
    alert('클릭');
  });
};
```

- DOMContentLoaded:
  - HTML파싱 DOM생성 후 발생하는 이벤트
  - 외부 콘텐츠는 기다리지 않음

```
  [html]
  <head>
    <script src="main.js"></script>
  </head>
  <body>
    <button id="btn">버튼</button>
  </body>

[script]
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#btn');
  button.addEventListener('click', () => {
    alert('클릭');
  });
});
```

`DOMContentLoaded 이벤트가 onload 이벤트보다 먼저 실행된다.`

<hr />

`HTML5에서 등장한 defer, async 속성은 HTML parsing을 시작할 때 스크립트 태그 또한 다운한다`

`defer속성`

- HTML 파싱과 함께, 비동기로 JavaScript 파일을 불러온다.
- HTML 파싱이 완료된 후, JavaScript 코드를 실행한다.

```
  [html]
  <head>
    <script src="main.js" defer></script>
  </head>
  <body>
    <button id="btn">버튼</button>
  </body>

[script]
const button = document.querySelector('#btn');
button.addEventListener('click', () => {
  alert('클릭');
});
```

`async 속성`

- HTML파싱과 함께 비동기로 JavaScript 파일을 불러온다.
- HTML 파싱이 완료되지 않았더라도, 먼저 로딩되는 JavaScript파일부터 실행이 시작된다.
- JavaScript 파일을 실행할 때는 HTML 파싱이 중단된다.

```
  [html]
  <head>
    <script src="main.js" async></script>
  </head>
  <body>
    <button id="btn">버튼</button>
  </body>

[script]
const button = document.querySelector('#btn');
button.addEventListener('click', () => {
  alert('클릭');
});
```

`일반적으로 스크립트 파일을 효적으로 불러올 땐 defer 속성을 사용`

`HTML5에서는 defer async 속성을 통해 비동기 script 로드가 가능해져 script 로드의 문제를 효율적으로 해결할 수 있다.`
