# JavaScript Event

**이벤트 전파 - Event Phase**

> Event 인터페이스의 eventPhase 읽기 전용 속성은 현재 평가 중인 이벤트 흐름 단계를 나타낸다.

`이벤트 전파과정에서 이벤트를 막고 싶을 때`

- stopPropagation()

  > Event 인터페이스의 stopPropagation() 메서드는 현재 이벤트가 캡처링/버블링 단계에서 더 이상 전파되지 않도록 방지
  > 전파를 방지해도 이벤트의 기본 동작은 실행되므로, stopPropagation()이 링크나 버튼의 클릭을 막는 것은 아니다. 이런 기본 동작을 방지하려면 preventDefault() 사용

- preventDefault()
  > Event 인터페이스의 preventDefault() 메서드는 어떤 이벤트를 명시적으로 처리하지 않은 경우, 해당 이벤트에 대한 사용자 에이전트의 기본 동작을 실행하지 않도록 지정
  - 보통 submit 이벤트와 앵커 태그의 기능을 막을 때 주로 사용

```
<a href="http://google.com">구글</a>

const $a = document.querySelector('a');
$a.addEventListener('click', (event) => {
  event.preventDefault();
});
```

<hr />

**Bubbling&Capturing**

```
<html>
  <body>
    <main>
      <div>
        <p>
          <span></span>
        </p>
      </div>
    </main>
  </body>
</html>
```

`위의 코드를 기준으로 이벤트 흐름을 파악하고자 span태그에 클릭 이벤트가 발생했다고 가정`

- 맨 처음에 이벤트 흐름은 최상위 요소인 html부터 자식 태그로 타고 내려가서
  타겟(span) 이벤트 요소까지 이벤트가 전파된다. 그리고 반대로 다시 부모요소로 타고 올라간다.

- 최상위 요소부터 타겟 요소까지 이벤트가 전달되는 과정 **(캡쳐링 - capturing)**

- 타겟 요소부터 최상위 요소까지 이벤트가 전될되는 과정 **(버블링 - bubbling)**

- 자바스크립트에서 클릭 이벤트를 등록할 때 addEventListener 메소드를 이용하여 이벤트를
  등록하는데 이때 addEventListener 기본 동작은 버블링으로 동작한다.

```
const $span = document.querySelector('span');
$span.addEventListener('click', () => {
  console.log('클릭');
});
```

- 이벤트 리스너의 3번째 파라미터는 기본적으로 false값으로 설정되어있다.
- 이 값을 true로 설정하면 캡쳐링으로 이벤트를 등록한다.

```
const $span = document.querySelector('span');
$span.addEventListener('click', () => {
  console.log('클릭');
}, true);
```
