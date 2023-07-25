// Readonly Type

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: '채귤',
  age: 26,
};

person.age = 27;

//

const person2: Readonly<Person> = {
  name: '채귤2',
  age: 28,
};

person2.age = 30; // X

// 자바스크립트에서 런타임에 Readonly 적용할 수 있는 키워드 - freeze
Object.freeze(person2);
