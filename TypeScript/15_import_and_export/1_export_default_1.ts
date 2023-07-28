// export default

class PersonModel {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const number = 1;

//

// interface는 TypeScript의 type이라 객체에 넣을 수 없다. - 객체로 묶어서 export 불가능
interface Animal {
  name: string;
  age: number;
}

export default { PersonModel, number };
