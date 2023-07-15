// JS의 문제점 - dynamically typed

// 모든 함수의 시그니쳐를 기억하기 어려움

// 해결방안

/*
1. 코멘트 사용

- var1 - number; var2 - number;

한계
- 실제로 jsdoc같은 타입핑, 시그니쳐, 함수의 기능에 대해 설명하는 유용한 툴들이 개발
- 함수를 변경하고 타입을 다르게 받고 싶을 때 코멘트도 같이 변경해줘야 하는데 이 변경하는 과정이 자동이 아님
- 코멘트를 작성하더라도 해당하지 않는 타입의 값을 넘겨줄 수 있다
*/
function add(var1, var2) {
  return var1 + var2;
}

console.log(add(1, 2));
console.log(add(1, '2'));
console.log(add('1', '2'));

/*
  2. typeof runtime - 체크

  - 실행을 했을 때 원하는 타입이 아닌 경우는 막을 수 있다.
  
  한계
  - 실제 원하는 코드는 숫자 2개를 더하는 코드인데 파라미터를 확인하기 위해 함수가 길어진다.
  - 실행 전이 아닌 실행한 후 에러를 확인할 수 있다.
  - 실행 전에는 원하는 타입이 들어가는지 아닌지 확인할 수 없다.
  */

function addTypeSafe(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  } else {
    throw Error('숫자만 파라미터에 입력해주세요.');
  }
}

console.log(addTypeSafe(1, 2));
console.log(addTypeSafe(1, '2'));
