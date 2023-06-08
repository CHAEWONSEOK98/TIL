# JavaScript Scope

## Scope란?

**유효범위**

`JavaScript => Lexical Scope, Static Scope => 정적 스코프`

> 자바스크립트는 렉시컬 스코프를 따르므로 함수를 어디서 **호출**했는지가 아니라 함수를 어디서 **정의**했느지에 따라 상위 스코프를 결정한다.  
> 함수가 호출된 위치는 상위 스코프 결정에 어떠한 영향도 주지 않는다.

```
var numberThree = 3;

function functionOne(){
    var numberThree = 100;

    functionTwo();
}

function functionTwo(){
    console.log(numberThree);
}

functionOne();
```

- Lexical Scope를 따라서 선언된 위치가 상위 스코프를 결정한다. 결과값은 3
- Dynamic Scope의 경우 실행한 위치로부터 상위 스코프를 결정하여 결과값이 100
- var 키워드는 학습까지만, 좀더 직관적인 코드를 위해서는 const, let 키워드 사용 필수

<hr />

```
var i = 999;

for(var i = 0; i < 10; i++) {
    console.log(i);
}

console.log(`i : ${i}`) // 10
```

```
let i = 999;

for(let i = 0; i < 10; i++) {
    console.log(i);
}

console.log(`i in global scope : ${i}`) // 999
```

`var 키워드로 선언한 변수는 오로지 함수의 코드 블록만 지역 스코프로 인정하는 함수 레벨 스코프를 따름.`

`let, const 키워드로 선언한 변수는 모든 코드 블록(함수, if 문, for 문, while 문, try/catch 문 등)을 지역 스코프로 인정하는 블록 레벨 스코프를 따름.`
