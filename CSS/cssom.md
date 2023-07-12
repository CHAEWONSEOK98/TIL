# CSS CSSOM - CSS Object Model

## CSSOM ?

> CSS Object Model은 JavaScript에서 CSS를 조작할 수 있는 API 집합이다. HTML 대신 CSS가 대상인 DOM이라고 생각할 수 있으며, 사용자가 CSS 스타일을 동적으로 읽고 수정할 수 있는 방법이다.

- HTML을 DOM 트리로 만든 것처럼, CSS도 브라우저가 이해하고 처리할 수 있도록 변환하는 과정이 필요하다.

- 브라우저는 DOM 생성하는 동안 CSS 스타일 시트 링크 태그를 접하고 리소스에 대해 요청한다.

- DOM 트리를 만든 후 정의한 CSS 파일을 읽으며 전부 계산하여 확정된 CSS 트리를 만든다.

- DOM과 CSSOM을 합한 후 브라우저에 표기될 것들만 Render Tree에 선별한다.
