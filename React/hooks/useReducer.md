# useReducer

## #dispatch

- state개념에서는 설정자함수와 같다.
- action이라고 하는 객체를 '전달'하는 역할

## #action

- 'type'이라고 하는, reducer에서 분기 처리를 할 때 필요한 문자열정보를 포함
- reducer에서 해당 명령 수행에 필요한 추가정보를 담은 일반객체

## #reducer

- action.type에 따라 분기를 나눈다.
- action객체에 담겨있는 여러 정보를 활용해서 새로운 state를 반환한다.
- 순수함수

`context랑 엮으면, redux처럼 활용 가능`

<hr />

## #redux

- component에서 '입력'발생 > eventHandler 등등에서 action을 dispatch함.
- reducer에서 새로운 state가 되어 redux store에 전파됨.
- 해당 reducer를 '구독'하고 있는 component들이 변경사항을 받아들임
- 새로 렌더링

`react의 철학 ... props를 통해 위에서 아래로만 전달 > redux와 궁합이 잘 맞음`
