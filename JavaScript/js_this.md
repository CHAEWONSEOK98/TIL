# JavaScript this

> 대부분의 경우 this의 값은 함수를 호출한 방법에 의해 결정된다

## this는 무엇을 가리키는가?

- 일반 함수 호출할 땐 this가 최상위 객체 (global 또는 window)를 가리킨다.
- 메서드로 호출할 땐 호출된 객체를 가리킨다.
- new 키워드를 사용해서 객체를 생성했을 땐 객체를 가리킨다.

```
let person = {
  fullname: '채귤',
  age: 26,
  printThis: function () {
    console.log(this); // person 객체
    console.log(this === person); // true
    console.log(this.fullname); // 채귤
    console.log(this.age); // 26
  },
};
person.printThis();
```

<hr />

```
let person = {
  fullname: '채귤',
  age: 26,
  printThis: function () {
    console.log(this); // window 객체
    console.log(this === person); // false
    console.log(this === window); // true
  },
};
let printThis = person.printThis();
printThis();
```

<hr />

```
function printThis() {
  console.log(this);
}
printThis(); // window 객체

let person1 = {
  name: '채귤1',
  printThis: printThis,
};
person1.printThis(); // person1 객체

let person2 = {
  name: '채귤2',
  printThis: printThis,
};
person2.printThis(); // person2 객체

let person3 = {
  name: '채귤3',
  printThis: printThis,
};
person3.printThis(); // person3 객체
```

<hr />

## Arrow Function this

- 화살표 함수(Arrow Function)가 나오기 전까지는 함수는 어떻게 호출되는지에 따라 자신의 this 값을 정의했다.
- 화살표 함수는 자신을 포함하고 있는 외부 Scope에서 this를 계승받는다.
- 화살표 함수에서 this는 자신을 감싼 정적 범위이다.

```
let person = {
  name: '채귤',
  age: 26,
  hello: function () {
    setTimeout(function () {
      console.log(this);
    }, 1000);
  },
};
person.hello(); // window 객체
```

```
let person = {
  name: '채귤',
  age: 26,
  hello: function () {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  },
};
person.hello(); // person 객체
```

<hr />

## Strict Mode this

- 기본값을 window 객체가 아닌 undefined으로 한다.

```
'use strict';
function printThis() {
  console.log(this);
}
printThis(); //undefined
```

<hr />

## addEventListener this

`addEventListener 함수의 콜백 함수에서 사용하는 this는 상위 컨텍스트를 가리킨다.`

- this : window 객체

```
let btn = document.querySelector('button');
btn.addEventListener('click', () => {
  console.log(this === window); // true
});
```

- this : button 요소

```
let btn = document.querySelector('button');
btn.addEventListener('click', function () {
  console.log(this === btn); // true
});
```

<hr />

## call, apply, bind

`원하는 함수에다 원하는 객체를 바인딩할 수 있다.`

**call**

```
function returnName() {
  return this.name;
}

const chaegyul = {
  name: '채귤',
};
console.log(returnName.call(chaegyul)); // 채귤
```

`매개변수로 인수를 전달할 때 ,를 기준으로 순서대로 넘겨준다`

```
const chaegyul = {
  name: '채귤',
};

function multiply(x, y, z) {
  return `${this.name} / 결과값 : ${x * y * z}`;
}

console.log(multiply.call(chaegyul, 3, 4, 5)); // 채귤 / 결과값 : 60
```

<hr />

**apply**

```
function returnName() {
  return this.name;
}

const chaegyul = {
  name: '채귤',
};
console.log(returnName.apply(chaegyul)); // 채귤
```

`매개변수로 인수를 전달할 때 array를 순서대로 넘겨준다`

```
const chaegyul = {
  name: '채귤',
};

function multiply(x, y, z) {
  return `${this.name} / 결과값 : ${x * y * z}`;
}

console.log(multiply.apply(chaegyul, [3,4,5])); // 채귤 / 결과값 : 60
```

<hr />

**bind**

`bind의 경우 bind를 한 다음에 바로 함수가 실행되지 않는다.`
`bind가 된 함수를 반환한다. 결과적으로 bind만 해놓고 나중에 실행할 수 있다.`

```
const chaegyul = {
  name: '채귤',
};

const laterFunc = multiply.bind(chaegyul, 3, 4, 5);
console.log(laterFunc); // function
console.log(laterFunc()); // 채귤 / 결과값 : 60
```
