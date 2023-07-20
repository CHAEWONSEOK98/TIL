// Unknown Type

let anyValue: any;

anyValue = 26;
anyValue = 'string';
anyValue = false;
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

/*
unKnown
- 어떤 타입의 값도 입력할 수 있다.
- any와 할당에서 차이가 생긴다.
    - unKnown타입은 any타입이나 unKnown타입의 변수에만 할당이 가능하다.
*/

let unknownValue: unknown;

unknownValue = 26;
unknownValue = 'string';
unknownValue = false;
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

//

// let anyType: any = anyValue;
// let unknownType: unknown = anyValue;
// let booleanType: boolean = anyValue;
// let arrayType: string[] = anyValue;
// let objectType: {} = anyValue;
// let nullType: null = anyValue;
// let undefinedType: undefined = anyValue;

let anyType: any = unknownValue;
let unknownType: unknown = unknownValue;
let booleanType: boolean = unknownValue;
let arrayType: string[] = unknownValue;
let objectType: {} = unknownValue;
let nullType: null = unknownValue;
let undefinedType: undefined = unknownValue;

//

// O
anyValue.toUpperCase();
anyValue.name;
new anyValue();

// X
// unknownValue.toUpperCase();
// unknownValue.name;
// new unknownValue();

// Type Perdicate
function isString(target: unknown): target is string {
  return typeof target === 'string';
}

let testValue: unknown;

if (isString(testValue)) testValue; // string type

// Union Type
type unionOrString = unknown | string; // unKnown type
type unionOrBoolean = unknown | boolean; // unKnown type
type unionOrNumber = unknown | number; // number type
type unionOrAny = unknown | any; // any type

// Intersection Type
type unionAndString = unknown & string; // string type
type unionAndBoolean = unknown & boolean; // boolean type
type unionAndNumber = unknown & number; // number type
type unionAndAny = any & unknown; // any type

// Operator
let number1: unknown = 10;
let number2: unknown = 20;

// X
number1 + number2;
number1 - number2;
number1 * number2;
number1 / number2;

// O
number1 === number2;
number1 == number2;
number1 !== number2;
number1 != number2;
