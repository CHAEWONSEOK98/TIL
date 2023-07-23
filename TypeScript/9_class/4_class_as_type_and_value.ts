// Class as Type and Value

class Dog {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  bark() {
    return `${this.name} 짖는다`;
  }
}

// class는 그 자체로 값이 되는 경우도 있고, 타입이 되는 경우도 있다.
let kingDog = new Dog('킹독'); // Dog type

// class도 결국 객체다
kingDog = {
  name: '킹도그',
  bark() {
    return `${this.name} 짖느다.`;
  },
};
console.log(kingDog); // { name: '킹도그', bark: [Function: bark] }
