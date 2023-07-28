// Export

export class PersonModel {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export const person = new PersonModel('채귤', 26);

export class FlowerModel {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export const flower = new FlowerModel('장미');
