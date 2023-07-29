// Generic Implementation

interface Identity<T, V> {
  id: T;
  check(name: V): void;
}

class Person implements Identity<number, string> {
  id: number;

  constructor(id: number) {
    this.id = id;
  }

  check(name: string): void {
    console.log(`${name} | ${this.id}`);
  }
}

const identity = new Person(77);
identity.check('chaegyul'); // chaegyul | 77

//

class Person2<T, V> implements Identity<T, V> {
  id: T;

  constructor(id: T) {
    this.id = id;
  }

  check(name: V): void {
    console.log(`${name} | ${this.id}`);
  }
}

const identity2 = new Person2<number, string>(88);
identity2.check('gyul'); // gyul | 88
