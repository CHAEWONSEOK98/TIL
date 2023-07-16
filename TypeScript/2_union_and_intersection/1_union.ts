// Union : 타입스크립트에서 타입을 병합할 수 있는 방법 중 하나

type StringOrBooleanType = string | boolean;

let stringOrBooleanType: StringOrBooleanType = '계절';
stringOrBooleanType = true;

// stringOrBooleanType = undefined  // x

type StringBooleanNullType = string | boolean | null;

type StateTypes = 'DONE' | 'LOADING' | 'ERROR';

let state: StateTypes = 'DONE';
state = 'LOADING';
// state = 'INITIAL'; // X

// list union

// string으로 구성된 리스트 또는 boolean으로 구성된 리스트

type StringListOrBooleanList = string[] | boolean[];

let stringListOrBooleanList: StringListOrBooleanList = ['봄', '여름', '가을'];

stringListOrBooleanList = [true, true, false, false];

// stringListOrBooleanList = [true, '봄']; // x

type StringOrNumber = (string | number)[];

let stringOrNumberList: StringOrNumber = [1, 2, 3, '봄', '여름', '가을'];

// Interface - union

interface Animal {
  name: string;
  age: number;
}

interface Human {
  name: string;
  age: number;
  address: string;
}

type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman = {
  name: '채귤',
  age: 26,
  address: '대한민국',
};

console.log(animalOrHuman); // Human 타입추론

animalOrHuman = {
  name: '고래',
  age: 7,
};

console.log(animalOrHuman); // Animal 타입추론

// 서로 관계가 없는 유니언을 선언하면 어떻게 되는가
// union - 합집합의 개념

type Person = {
  name: string;
  age: number;
};

type World = {
  country: string;
};

type PersonOrWorld = Person | World;

const personOrWorld: PersonOrWorld = {
  name: '채귤',
  age: 26,
  country: '미국',
};
