# JavaScript Object

## 객체를 선언할 때 사용할 수 있는 방법

- 객체 리터럴 방식 사용 - { }

```
const chaeGyul = {
  name: '채귤',
  year: 1998,
};
```

- class를 인스턴스화해서 생성 - class와 OOP

```
class PersonModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
```

- function을 사용해서 객체 생성 - 생성자 함수

```
function PersonFunction(name, year) {
  this.name = name;
  this.year = year;
}
const kingGyul = new PersonFunction('킹귤', 1998);
```

## Property Attribute (프로퍼티 어트리뷰트)

- **Property** : 객체를 선언했을 때 안에 들어가는 값, 객체 안에 들어있는 값
- **Attribute** : 프로퍼티속성에 추가로 생성된 것, 자동으로 생성되는 속성들

<hr />

### 데이터 프로퍼티와 엑세서 프로퍼티

- 데이터 프로퍼티 : 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티

- 엑세서 프로퍼티
  - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나 설정할 때 호출되는 함수로 구성된 프로퍼티
  - 예를들면 getter와 setter

`데이터 프로퍼티와 엑세서 프로퍼티의 구분 방법`

- getOwnPropertyDescriptor를 실행한 후 어떤 형태로 프로퍼티 어트리뷰트가 나오는지 확인하면 알 수 있다.
- 엑세서 프로퍼티에는 value 프로퍼티 어트리뷰트가 없지만 게터, 세터 프로퍼티 어트리뷰트가 존재
  - 게터, 세터 프로퍼티 어트리뷰트는 실제 게터와 세터함수를 의미

```
const person2 = {
  name: '채귤',
  year: 1998,

  get age() {
    return new Date().getFullYear() - this.year + 1;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age + 1;
  },
};

console.log(Object.getOwnPropertyDescriptor(person2, 'age'));
{
  get: [Function: get age],
  set: [Function: set age],
  enumerable: true,
  configurable: true
}
```

<hr />

### value, writable, enumerable, configurable

```
const person1 = {
  name: '채귤',
  year: 1998,
};

console.log(Object.getOwnPropertyDescriptor(person1, 'name'));
{ value: '채귤', writable: true, enumerable: true, configurable: true }

console.log(Object.getOwnPropertyDescriptor(person1, 'year'));
{ value: 1998, writable: true, enumerable: true, configurable: true }

console.log(Object.getOwnPropertyDescriptors(person1));
{
    name: { value: '채귤', writable: true, enumerable: true, configurable: true },
    year: { value: 1998, writable: true, enumerable: true, configurable: true }
}
```

- value - 실제 프로퍼티의 값
- writable - 값을 수정할 수 있는지 여부. false로 설정하면 프로퍼티 값을 수정할 수 없다.
- enumerable - 열거가 가능한지 여부. for...in 루프 등을 사용할 수 있으면 true를 반환한다.
- configurable
  - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
  - false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다.
  - 단, writable이 true인 경우 값 변경과 writable을 변경하는 것은 가능하다.

<hr />

### key 추가 및 writable, enumerable, configurable의 값 설정

- key를 추가하는 간단한 방법 > person3.height = 175; | person3['height'] = 175;
- 위와 같이 키를 추가하는 경우 writable, enumerable, configurable의 값이 true로 설정됨.
- console.log(Object.getOwnPropertyDescriptor(person3, 'height'));

```
const person3 = {
    name: '채귤',
    year: 1998,
}

person3.height = 175
```

`writable, enumerable, configurable의 값들을 변경하면서 프로퍼티를 추가하고 싶은 경우`

```
const person3 = {
    name: '채귤',
    year: 1998,
}

Object.defineProperty(person3, 'height', {
value: 175,
writable: true,
enumerable: true,
configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(person3, 'height'));
```
