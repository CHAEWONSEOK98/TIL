# JavaScript Hoisting

## Hoisting이란?

> 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미한다.
> 호이스팅을 설명할 땐 주로 "**변수의 선언과 초기화를 분리**한 후, 선언만 코드의 최상단으로 옮기는" 것으로 말할 수 있으며, 변수를 정의하는 코드보다 사용하는 코드가 앞서 등장할 수 있다.

`특정 변수를 선언하면 기본적으로 최상위에서 undefined 값으로 변수가 선언되어 있는 현상`

`JavaScript ES6에서 도입된 let, const 키워드가 존재하기 전 당연하게 사용되었던 동작원리`

<hr />

## Hoisting이 일어나는 이유?

Hoisting의 발생 이유는 JavaScript의 언어적 특성과 환경, 작동원리를 근거로 한다.

- 언어적 특성

  - JavaScript는 기본적으로 Single Thread Program이다.
  - Single Thread 안에는 하나의 Memory Heap과 하나의 Call Stack(Execution Context Stack)이 존재한다.

- 환경 (Execution Context Stack)

  - 실행하려는 JavaScript 코드와 코드를 실행할 때 필요한 정보를 담고있는 특수한 환경이다.
  - 코드 실행에 필요한 모든 데이터를 들고있는 환경

- 작동 : Call Stack (Execution Context Stack)이 생성될 때

  - Creation Phase

    - Global Object를 생성한다. window 또는 global 객체가 생성되고 함수에서는 arguments 객체가 생성된다.
    - this를 window 또는 global에 바인딩한다.
    - 변수와 함수를 Memory Heap에 배정하고 기본 값을 undefined로 저장한다.

  - Execution Phase
    - 코드를 실행한다.
    - 필요하다면 새로운 Execution Context를 생성한다.

Execution Context Stack은 Creation Phase가 먼저 실행되고, Execution Phase가 실행.

**_실제 실행은 Execution Phase에서 일어나는데 Creation Phase에서 변수와 함수를 미리 Memory Heap에 배정해놓기 때문에 hoisting이 일어난다._**

<hr />

## 그렇다면 왜? const, let을 사용할까?

**_JavaScript에서의 선언(var, let, const, function, class)은 hoisting이 일어나지만 ReferenceError를 반환하여 헷갈리지 않고 직관적인 코드를 작성할 수 있는 const, let 사용_**
