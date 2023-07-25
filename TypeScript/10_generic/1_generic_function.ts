// Generic 함수에서 사용

function whatValue(value: any) {
  return value;
}
const value = whatValue('test'); // any type

function genericWhatValue<T>(value: T): T {
  return value;
}
const genericResult1 = genericWhatValue<string>('test'); // string type

let genericResult2 = genericWhatValue(123); // number type

//

function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z) {
  return {
    x,
    y,
    z,
  };
}
// const multipleGenericResult = multipleGenerics<number, boolean, string>(
//   123,
//   true,
//   '123'
// );

const multipleGenericResult = multipleGenerics(123, true, '123');
// x : number type
// y : boolean type
// z : string type

//

function getTuple<X, Y>(value1: X, value2: Y) {
  return [value1, value2] as const;
}
const tuple = getTuple(true, 100);

//

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Car {
  brand: string;
  codeName: string;

  constructor(brand: string, codeName: string) {
    this.brand = brand;
    this.codeName = codeName;
  }
}

function instantiator<T extends { new (...args: any[]): {} }>(
  constructor: T,
  ...args: any[]
) {
  return new constructor(...args);
}

console.log(instantiator(Person, '채귤', 26)); // Person { name: '채귤', age: 26 }
console.log(instantiator(Car, 'BMW', 1111)); // Car { brand: 'BMW', codeName: 1111 }
