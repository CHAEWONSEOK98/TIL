/*
타입스크립트
- 함수, 변수, 클래스정의 등등 정의를 명확하게 할 수 있다.
- 처음에 설계되었던 것으로 사용하도록 강제할 수 있다.
*/

function add(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add(1, 2));
console.log(add(1, '2'));
