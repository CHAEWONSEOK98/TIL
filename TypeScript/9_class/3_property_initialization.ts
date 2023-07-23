// Property Initialization

class Person {
  // 일반적인 필수값 선언법
  name: string;

  // 초기값 제공 선언법
  age: number = 26;

  // optional 값 선언법
  country?: string;

  // type of undefined 선언법
  sex: string | undefined;

  constructor(name: string, country?: string) {
    this.name = name;
    this.country = country;
  }
}

// 무조건 실행하는 값인 경우 초기화 보장 => !

class RouteStack {
  stack!: string[];

  constructor() {
    this.initialize();
  }

  initialize() {
    this.stack = [];
  }
}

const routeStack = new RouteStack(); // RouteStack { stack: []}
