// Generic Inheritance

class BaseCache<T> {
  data: T[] = [];
}

class StringCache extends BaseCache<string> {}

const stringCache = new StringCache();
stringCache.data; // data type : string[] type

//

class GenericChild<T, Message> extends BaseCache<T> {
  message?: Message;

  constructor(message?: Message) {
    super();
    this.message = message;
  }
}

const genericChild = new GenericChild<string, string>('error');
genericChild.data; // string[]
genericChild.message; // string | undefined

// [제네릭의 inheritance]
interface BaseGeneric {
  name: string;
}

class Person<T extends BaseGeneric> {
  information: T;

  constructor(information: T) {
    this.information = information;
  }
}

// name property가 입력되지 않는 경우 에러발생 - 구조를 강제함
const chaeGyul = new Person({
  name: '채귤',
  age: 26,
});

// [keyof 함께 사용하기]
const testObj = {
  a: 1,
  b: 2,
  c: 3,
};

function objectParser<O, K extends keyof O>(obj: O, key: K) {
  return obj[key];
}

const value = objectParser(testObj, 'a');

// Ternary
// 1 === 2 ? true : false

class Animal {
  type?: string;
}

class Dog extends Animal {
  type: 'Dog Animal' = 'Dog Animal';
}

class Cat extends Animal {
  type: 'Cat Animal' = 'Cat Animal';
}

type SpecificAnimal<T extends Animal> = T extends Dog ? Dog : Cat;

const animal: SpecificAnimal<Dog> = new Dog(); // Dog type
const animal: SpecificAnimal<Cat> = new Cat(); // Cat type
