// Constructor Parameter

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// type ConstructorParamType = [name: string, age: number]
type ConstructorParamType = ConstructorParameters<typeof Person>;
