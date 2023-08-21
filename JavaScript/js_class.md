# JavaScript Class

## Getter & Setter

## #get

`getter: 값을 가져올 때 사용`

## #set

`setter: 데이터를 가공해서 새로운 데이터를 반환할 때 사용`

- 바꾸고싶은 프로퍼티의 이름과 동일하게 짓는 관례가 있음
- setter의 경우 파라미터를 하나 받아야함.
- 이뮤터블 프로그래밍을 구현하는 경우가 많아서 setter를 사용하는 경우가 빈번하지는 않음

```
class PersonModel {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get nameAndAge() {
    return `${this.name} - ${this.age}`;
  }

  set name(name) {
    this.name = name;
  }
}

const chaeGyul = new PersonModel('채귤', 26);
console.log(chaeGyul); // PersonModel { name: '채귤', age: 26 }
console.log(chaeGyul.nameAndAge); // 채귤 - 26

chaeGyul.name = '귤채';
console.log(chaeGyul); // PersonModel { name: '귤채', age: 26 }
```

## #private

`실제로 값을 저장하고 있지만 외부에서 엑세스하지 못하는 값`

- ES7부터 도입됨
- property를 private으로 만드는 경우 직접 엑세스가 불가능하다
  - getter와 setter는 프라이빗 값을 다룰 때 주로 사용

```
class PersonModel2 {
  #name;
  age;

  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

const chaeGyul2 = new PersonModel2('채귤2', 26);
console.log(chaeGyul2); // PersonModel2 { age: 26 }
console.log(chaeGyul2.name); // 채귤2

chaeGyul2.name = '귤채2';
console.log(chaeGyul2.name); // 귤채2
```
