# JavaScript Closure

## Closure란?

> "A closure is the combination of a function and the lexical environment within which that function was declared."  
> 클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합이다.

> 클로저는 둘러싸여진 상태의 참조와 함께 다발로 묶여진 함수의 조합이다.  
> 클로저는 내부 함수로부터 외부함수에의 접근권한을 준다.  
> 클로저는 함수 생성 시점에 언제나 생긴다.

<hr />

```
const x = 1;

function outer() {
    const x = 10;
    const inner = function() {
        console.log(x);
    }
    return inner;
}

const innerFunc = outer();
innerFunc(); // 10

```

- outer 함수를 호출하면 outer 함수는 중첩 함수 inner를 반환하고 생명 주기를 마감한다.
- 즉, outer 함수의 실행이 종료되면 outer 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 제거된다.
  - 그러나 outer 함수의 렉시컬 환경까지 소멸하는 것은 아니다.
- 이때 outer 함수의 지역 변수 x 또한 생명 주기를 마감한다.
- 따라서 outer 함수의 지역 변수 x는 더는 유효하지 않게 되어 x 변수에 접근할 수 없는 것처럼 보인다.
- 그러나 코드의 실행 결과는 outer 함수의 지역 변수 x의 값인 10이다.

**외부 함수보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수는 이미 생명 주기가 종료한 외부 함수의 변수를 참조할 수 있다. 이러한 중첩 함수를 클로저라고 부른다.**

<hr />

```
function getNumber(){
    let number = 7;

    function innerGetNumber(){
        return number;
    }

    return innerGetNumber;
}

const runner = getNumber();

console.log(runner); // [Function: innerGetNumber]
console.log(runner()); // 7
```

- innerGetNumber를 실행한 상황은 언제인지? 이미 getNumber가 실행된 이후
- 이미 getNumber의 실행 컨텍스트가 끝나고 스택에서 사라진 이후
- 그 다음에 innerGetNumber를 실행하는 경우

**위와 같은 상황 또한 외부 함수보다 중첩 함수가 오래 살아있는 경우이며 클로저가 적용되었다고 할 수 있다.**

<hr />

## 클로저를 어디에 사용하는지?

### - 데이터 캐싱

```
function cacheFunction(newNumber) {
    let number = [계산 오래 걸리는 식으로 가정];
    return number * newNumber;
}

console.log(cacheFunction(10))
console.log(cacheFunction(20))
console.log(cacheFunction(30))
```

`위의 경우 실행시키는 횟수가 많아질수록 반복적인 작업으로 리소스를 많이 사용하게 될 것이다.`

```
function cacheFunction() {
    let number = [계산 오래 걸리는 식으로 가정];

    function innerCacheFunction(newNumber) {
        return number * newNumber;
    }

    return innerCacheFunction;
}

const runner = cacheFunction();
console.log(runner(10));
console.log(runner(20));
console.log(runner(30));
```

- cacheFunction 함수를 호출할 때 [계산 오래 걸리는 식] 한번만 실행
- 클로저를 사용했을 때 [계산 오래 걸리는 식]의 값을 저장, innerCacheFunction 안에서 새로운 값을 받았을 때 저장된 값을 곱한 후 반환

`계산이 오래 걸리고, 로직이 복잡할수록 훨씬 효율적으로 함수를 작성할 수 있다.`

<hr />

### - 정보 은닉

```
function My(name, year) {
    this.name = name;
    let _year = year;

    this.sayNameAndYear = function() {
        return `안녕하세요 저는 ${this.name}입니다 ${_year}에 태어났습니다.`;
    }
}

const wonseok = new My('채원석', 1998);
console.log(wonseok.sayNameAndYear()); // 안녕하세요 저는 채원석입니다. 1998년에 태어났습니다.

console.log(wonseok.name); // 채원석
console.log(wonseok._year); // undefined
```

- \_year 변수는 My 생성자 함수의 지역 변수이므로 My 생성자 함수 외부에서 참조하거나 변경할 수 없다.
- \_year 변수는 private하다.
- 하지만 객체가 생성된 후 sayNameAndYear 함수의 메소드 안에서 \_year값을 접근할 수 있다.
- 자바스크립트에서 private 프로퍼티가 사용된 것은 최근이다.
- 과거 자바스크립트 객체의 모든 프로퍼티와 메서드는 기본적으로 기본적으로 외부에 공개되어 있었다.
- 정보 은닉이 필요한 경우 클로저를 사용하였다.
<hr />

**외부 함수보다 중첩 함수가 더 오래 유지되는 경우를 *Closure*라고 한다.**
