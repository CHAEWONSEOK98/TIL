# JavaScript Callback

## Callback?

> 콜백(Callback) 함수는 간단히 말하면 **매개변수로 함수 객체를 전달**해서 호출 **함수 내에서 매개변수 함수를 실행하는 것**을 말한다.

> 파라미터로 일반적인 변수나 값을 전달하는 것이 아닌 함수 자체를 전달하는 것

> 지금 당장 실행되지는 않지만 특정 작업이 끝난 후 다시 불리는 함수

<hr />

### 콜백 함수 사용 원칙

`익명의 함수 사용`

- 콜백 함수는 호출 함수에 일회용으로 사용하는 경우가 많아서 코드의 간결성을 위해 **익명의 함수**를 사용
- 함수 이름의 충돌 방지를 위한 이유

`화살표 함수 모양의 콜백`

- 익명 함수로 정의함으로써 얻었던 코드의 간결성에서 한단계 더 간결성을 얻기 위해 사용

`함수의 이름 넘기기`

- 자바스크립트는 일급 객체의 특성을 가지고 있기 때문에 null과 undefined 타입을 제외하고 모든 것을 객체로 다룬다.
- 매개변수에 일반적인 변수나 상수값 뿐만 아니라 함수 자체를 객체로서 전달 가능
- 콜백 함수가 일회용이 아닌 여러 호출 함수에 재활용으로 자주 이용될 경우, 벌도로 함수를 정의하고 함수의 이름만 호출 함수의 인자에 전달하는 식으로 이용 가능

<hr />

### 콜백 함수 활용 사례

`이벤트 리스너`

```
let button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log('button click');
});
```

`고차함수`

```
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = [];

numbers.forEach((currentValue, index, array) => {
  if (currentValue % 2 === 0) {
    evenNumbers.push(currentValue);
  }
});

console.log(evenNumbers); // [2, 4]
```

`Ajax 결과값을 받을 때`  
**서버와 데이터를 주고받을 때 사용하는 fetch 메서드의 서버 요청의 결과값을 처리하기 위해 콜백 함수 사용**

```
// fetch 메서드를 사용하여 서버로부터 JSON 데이터를 받아오고 콜백 함수로 화면에 출력
fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    // fetch 메서드가 성공하면 콜백 함수로 response 인자를 받음
    return response.json(); // response 객체의 json 메서드를 호출하여 JSON 데이터를 반환
  })
  .then(function (data) {
    // json 메서드가 성공하면 콜백 함수로 data 인자를 받음
	console.log(data);
  })
```

`타이터 실행 함수`  
**setTimeout, setInterval**

```
setTimeout(function () {
  console.log('Time');
}, 3000);
```

<hr />

### 콜백 지옥 - Callback Hell

`콜백 지옥이란 함수의 매개변수로 넘겨지는 콜백 함수가 반복되어 코드의 들여쓰기 수준이 감당하기 힘들어질 정도로 깊어지는 현상`

`코드를 받아들임에 있어 가독성이 좋지 않으며, 직관적이지 않다`

```
function waitAndRun() {
  setTimeout(() => {
    console.log('1번 콜백 끝');
    setTimeout(() => {
      console.log('2번 콜백 끝');
      setTimeout(() => {
        console.log('3번 콜백 끝');
      }, 2000);
    }, 2000);
  }, 2000);
}

waitAndRun();
// 1번 콜백 끝
// 2번 콜백 끝
// 3번 콜백 끝
```

<hr />

### 자바스크립트 비동기와 콜백

`자바스크립트에서 비동기 방식으로 작업을 처리하는 방법 중 하나는 - 콜백(Callback) 함수이다`
