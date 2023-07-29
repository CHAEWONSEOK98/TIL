// Method Generic

class Person<T> {
  id: T;
  name: string;

  constructor(id: T, name: string) {
    this.id = id;
    this.name = name;
  }

  sayHello<Time>(logTime: Time) {
    return `[${logTime}] | ${this.name} | ${this.id}`;
  }
}

const chaeGyul = new Person('aa98', '채귤');

console.log(chaeGyul.sayHello('2023')); // [2023] | 채귤 | aa98 // string type
console.log(chaeGyul.sayHello(1998)); // [1998] | 채귤 | aa98 // number type

//

class Message<T> {
  sayHello<Time>(logTime: Time, message: T) {
    console.log(`logTime: ${typeof logTime} / message: ${typeof message}`);
  }
}

const message = new Message<string>();
message.sayHello<number>(1998, '??'); // logTime: number / message: string

//

// 제네릭을 중복으로 사용할 경우
// class generic, method generic 중에서 method generic의 우선순위가 높다.
// 제네릭을 중복으로 사용하는 경우를 피하자.
class DuplicatedGenericName<T> {
  sayHello<T>(logTime: T) {
    console.log(`logTime: ${typeof logTime}`);
  }
}

const duplicate = new DuplicatedGenericName<string>();
duplicate.sayHello<number>(123); // logTime: number
