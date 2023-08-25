# useState

> useState는 컴포넌트에 state 변수를 추가할 수 있게 해주는 React 훅

> 컴포넌트의 최상위 레벨에서 useState를 호출하여 state 변수를 선언

> 배열 구조 분해를 사용하여 [something, setSomething]과 같은 state 변수의 이름을 지정하는 것이 관례

<hr />

- set 함수는 다음 렌더링에 대한 state 변수만 업데이트한다.

  - set 함수를 호출한 후에도 state 변수에는 여전히 호출 전 화면에 있던 이전 값이 담겨 있다.
  - set 함수를 호출해도 이미 실행 중인 코드의 현재 state는 변경되지 않는다
  - set함수는 다음 렌더링에서 반환할 useState에만 영향을 준다.

  > 그 이유는 state가 스냅샷처럼 동작하기 때문이다. state를 업데이트하면 새로운 state 값으로 다른 렌더링을 요청하지만 이미 실행 중인 이벤트 핸들러의 변수에는 영향을 미치지 않는다.

```
function handleClick() {
setName('Robin');
console.log(name); // Still "Taylor"!
// 아직 "Taylor"입니다!
}
```

<hr />

> 사용자가 제공한 새로운 값이 Object.is에 의해 현재 state와 동일하다고 판정되면, React는 컴포넌트와 그 자식들을 리렌더링하지 않는다. >> 최적화

> React는 state 업데이트를 일괄처리한다. 모든 이벤트 핸들러가 실행되고 set 함수를 호출한 후에 화면을 업데이트한다. 이렇게 하면 단일 이벤트 중에 여러 번 리렌더링 되는 것을 방지할 수 있다. 드물지만 DOM에 접근하기 위해 React가 화면을 더 일찍 업데이트하도록 강제해야 하는 경우, flushSync를 사용할 수 있다.

<hr />

> key로 state 재설정하기

- 목록을 렌더링할 때 key 속성을 자주 접하게 됩다. 하지만 key 속성은 다른 용도로도 사용된다.

- 컴포넌트에 다른 key를 전달하여 컴포넌트의 state를 재설정할 수 있다.

- key가 변경되면 React는 컴포넌트 및 그 모든 자식을 처음부터 다시 생성하므로 state가 초기화된다.
