// Type Inference - 타입 추론

let stringType = 'string';
let booleanType = true;
let numberType = 30;

booleanType = false;
// booleanType = 'false';

const constStringType = 'const string';
const constBooleanType = true;

let person = {
  name: '채귤',
  year: 1998,
};

const person2 = {
  name: '채귤',
  age: 1998,
};

person2.name = '귤채';
console.log(person2);

// 객체에서 각각의 프로퍼티를 좀더 구체화된 타입으로 유추되도록 하고싶을 때
// Casting : 특정 타입으로 지정한다.

const person3 = {
  name: '채귤' as const,
  age: 1998 as const,
};

// Array

let numbers = [1, 2, 3, 4, 5];
let numbersAndString = [1, 2, 3, '4', '5'];

const number = numbers[0]; // number
const numberOrString = numbersAndString[0]; // string | number
const numberOrString2 = numbersAndString[100]; // 없는 인덱스 에러 추론 못함

// tuple
const twoNumbers = [1, 3] as const;

twoNumbers[0] = 10; // x
twoNumbers.push(100); // x
const first = twoNumbers[0]; // 1
const random = twoNumbers[100]; // 없는 인덱스 에러 추론 가능
