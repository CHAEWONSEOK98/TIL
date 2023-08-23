# JavaScript Class

## #Getter & Setter

## get

`getter: 값을 가져올 때 사용`

## set

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

## private

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

<hr />

## #Static Keyword

`static: 인스턴스에 귀속되는 것이 아닌 클래스 자체에 귀속된다.`

```
class PersonModel {
  name;
  age;
  static country = '한국';

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static returnCountry() {
    return '한국';
  }
}

const person1 = new PersonModel('채귤1', 26);
console.log(person1); // PersonModel { name: '채귤1', age: 26 }
console.log(PersonModel.country); // 한국
console.log(PersonModel.returnCountry()); // 한국
```

<hr />

## static 키워드를 어디에 어떻게 사용할지? - factory constructor

`static 메소드를 사용하여 factory constructor 형태를 구현하게되면, 하나의 컨스트럭터 형태로만 인스턴스를 반환하는 것이 아닌 미리 어떤 데이터를 받아서 인스턴스를 만들지 템플릿화하여 정의할 수 있다.`

```
class PersonModel2 {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static fromObject(object) {
    return new PersonModel(object.name, object.age);
  }

  static fromList(list) {
    return new PersonModel(list[0], list[1]);
  }
}

const person2 = PersonModel2.fromObject({
  name: '채귤2',
  age: 26,
});
console.log(person2); // PersonModel { name: '채귤2', age: 26 }

const person3 = PersonModel2.fromList(['귤채2', 26]);
console.log(person3); // PersonModel { name: '귤채2', age: 26 }
```

<hr />

## #Inheritance

> 상속(inheritance) : 은 객체들 간의 관계를 구축하는 방법이다.  
> 수퍼클래스, 또는 부모클래스 등의 기존의 클래스로부터 속성과 동작을 상속받을 수 있다.  
> 상속하는 경우 부모클래스의 모든 프로퍼티를 자식클래스가 받을 수 있지만, 반대의 경우는 성립하지 않는다.

```
class ParentModel {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class DaughterModel extends ParentModel {
  dance() {
    return `딸 - 춤`;
  }
}

class SonModel extends ParentModel {
  workout() {
    return `아들 - 운동`;
  }
}

const daughter = new DaughterModel('채별', 3);
console.log(daughter); // DaughterModel { name: '채별', age: 3 }
console.log(daughter.dance()); // 딸 - 춤
console.log(daughter.name); // 채별
console.log(daughter.workout()); // error

const son = new SonModel('채정', 7);
console.log(son); // SonModel { name: '채정', age: 7 }
console.log(son.workout()); // 아들 - 운동
console.log(son.age); // 7

const mother = new ParentModel('채윤', 55);
console.log(mother); // ParentModel { name: '채윤', age: 55 }
console.log(mother.workout()); // error

console.log(daughter instanceof ParentModel); // true
console.log(daughter instanceof DaughterModel); // true
console.log(daughter instanceof SonModel); // false
```
