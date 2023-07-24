// Inheritance

class Parent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  dance() {
    console.log(`parent ${this.name}`);
  }
}

class Child extends Parent {
  age: number;

  constructor(name: string, age: number) {
    super(name);

    this.age = age;
  }

  sing() {
    console.log(`child ${this.name}`);
  }
}

const parent = new Parent('부모');
const child = new Child('자식', 3);

parent.dance();

child.dance();
child.sing();

// 상속받으면 자식은 부모 타입이 될 수 있다.
let person: Parent;
person = parent;
person = child;

// 자식은 부모 타입이 될 수 있지만, 부모는 자식 타입이 될 수 없다.
let person2: Child;
person2: child;
// person2 = parent // X

// [optional property 유의]
// 자식은 부모 타입이 될 수 있지만, 부모는 자식 타입이 될 수 없지만,
// optional perperty인 경우 구조가 비슷해져서 가능해진다.
class Parent2 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Child2 extends Parent2 {
  age?: number;

  constructor(name: string, age?: number) {
    super(name);

    this.age = age;
  }
}

const parent2 = new Parent2('부모2');
const child2 = new Child2('자식2');

let child10: Child2;
child10 = child2;
child10 = parent2;
