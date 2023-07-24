// Interface

interface Animal {
  name: string;
  age: number;
  jump(): string;
}

class Dog implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  jump(): string {
    return `${this.name} jump`;
  }
}

const kingdog: any = new Dog('킹독', 3);

function instanceOfAnimal(object: any): object is Animal {
  return 'jump' in object;
}

if (instanceOfAnimal(kingdog)) kingdog; // Animal type

// 다중 인터페이스

interface Pet {
  legsCount: number;
  bark(): void;
}

class Cat implements Animal, Pet {
  // Animal
  name: string;
  age: number;

  // Pet
  legsCount: number;

  constructor(name: string, age: number, legsCount: number) {
    this.name = name;
    this.age = age;
    this.legsCount = legsCount;
  }

  jump(): string {
    return `${this.name} 점프`;
  }

  // Pet
  bark(): void {
    console.log('냐옹');
  }
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

interface PersonConstructor {
  new (name: string, age: number): Person;
}

function createPerson(
  constructor: PersonConstructor,
  name: string,
  age: number
) {
  return new constructor(name, age); // = return new Person(name, age);
}

console.log(createPerson(Person, '채귤', 26)); // Person { name: '채귤', age: 26 }
