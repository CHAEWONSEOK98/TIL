// readonly property

class Person {
  readonly name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const chaeGyul = new Person('채귤', 26);

chaeGyul.age = 27;
chaeGyul.name = '귤채'; // readonly property error
