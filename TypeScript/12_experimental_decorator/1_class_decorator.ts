// Class Decorator

@Test // Class위에 데코레이터를 입력하면 파라미터로 데코레이팅한 대상 Class를 받아볼 수 있다.
@Frozen
@LogTest('PROD')
@ChangeClass
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

function Test(constructor: Function) {
  console.log(constructor); // [class Person] : Person Class의 정의가 파라미터로 입력됨.
}

function Frozen(constructor: Function) {
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

const chaeGyul = new Person('채귤', 26);

console.log(Object.isFrozen(Object.getPrototypeOf(chaeGyul))); // true

//

// 데코레이터 함수를 실행할 때 파라미터를 넘겨주고 싶다면? - decorator factory
function LogTest(env: string) {
  return function (constructor: Function) {
    console.log(`[${env}] ${constructor} 실행`);

    // [PROD] class Person {
    //     constructor(name, age) {
    //         this.name = name;
    //         this.age = age;
    //     }
    // } 실행
  };
}

//

// 기본적으로 데코레이터는 한번 실행
const chaePeach = new Person('채피', 3);
console.log(chaePeach);

// 데코레이터에서 특정 Class를 반환할 때 해당 Class로 데코레이팅한 Class를 덮어쓸 수 있다.
function ChangeClass<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    country = '한국';

    constructor(...params: any[]) {
      super(...params);

      console.log('constructor instantiated');
    }
  };
}
