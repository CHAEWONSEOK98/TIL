# Browser Critical Rendering Path

## Critical Rendering Path?

> 브라우저가 서버로부터 HTML 응답을 받아 화면을 그리기 위해 실행하는 과정

`requests/response > loading > scripting > rendering > layout > paint`

- requests/response : 브라우저와 서버 상호간의 HTML 파일 요청 및 응답

- loading : 서버에서 받은 HTML 파일 로딩

- scripting : HTML, CSS 파일이 DOM, CSSOM으로 변환

- rendering : DOM과 CSSOM을 병합하여 Render Tree 형성

- layout : 각 노드의 위치 및 크기 계산

- painting : 그리는 단계로 layer로 만들어진 것들을 픽셀로 변환하여 화면에 표현
