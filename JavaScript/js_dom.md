# JavaScript Document Object Model - DOM

## DOM?

- DOM은 Document Object Model의 약어로서 html 요소를 제어할 수 있도록 웹 문서를 객체화 한 것을 말한다.

- DOM은 문서 객체 모델로 브라우저에서 자바스크립트로 HTML요소를 제어하기 위해 제공하는 API

- 트리 구조

## DOM 생성 과정

- 브라우저 내에는 웹 문서를 해석할 수 있는 렌더링 엔진이 존재한다.

- 브라우저로 HTML 파일을 열면 렌더링 엔진이 HTML로 작성된 문서를 해석한다.

- 해석이 끝나면 문서를 객체화 하여 자바스크립트로 접근할 수 있도록한다 - DOM

- 해석이 끝난 후 객체화 된 문서를 DOM 트리라고하며, 각각의 요소를 노드라고한다.

## DOM 접근 및 사용

`접근 및 제어`

- 웹 문서를 제어할 수 있도록 만들어진 DOM은 각각의 노드에 접근하여 제어할 수 있다.

`그렇다면 노드에 어떻게 접근할 수 있을까?`

- 웹 문서를 객체화 한 것을 DOM이라고 한다면, 브라우저 자체를 제어할 수 있도록 모델링 한 것을 브라우저 객체 모델(Browser Object Model)이라한다.

- BOM에는 웹 문서 영역을 제어할 수 있도록 하는 document 객체가 존재한다.

- document 객체는 웹 페이지 자체를 의미하며 DOM 트리의 최상위 노드이다.

- DOM 트리의 최상위 노드인 document 객체로 원하는 html 요소에 접근할 수 있으며, DOM 요소에 접근하기 위한 진입점이라고 볼 수 있다.

**document.getRootNode() >> 최상위 노드를 반환**

- document 객체를 시작으로 자식 노드에 접근할 수 있는데 보통 document.querySelector 선택자를 사용해서 document 객체에 접근하는 경우가 많다.

`사용`

- document.querySelector 선택자를 사용해 document 객체를 받아서 변수에 할당 후 사용
  - document.querySelector 선택자를 사용할 때 html tag, id, class 사용 가능
  ```
      const button = document.querySelector(.button);
  ```
- 받아온 document 객체에서 DOM 메서드를 이용하여 CRUD 작업을 다룬다.
- 이벤트 리스너를 등록하여 사용할 수 있다.
  ```
      const button = document.querySelector(.button);
      button.addEventListener('click', () => {
        code
      })
  ```
