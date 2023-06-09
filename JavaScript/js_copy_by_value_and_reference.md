# JavaScript Copy by Value and Reference

## Copy by Value란?

**값에 의한 전달**

## Copy by Reference란?

**참조에 의한 전달**

`기본적으로 모든 원시 값(primitive)은 Copy by Value`

`객체는 Copy by Reference`

```
let original = '봄';
let clone = original;

console.log(original); // 봄
console.log(clone); // 봄

clone += ' 여름 가을 겨울';

console.log(original); // 봄
console.log(clone); // 봄 여름 가을 겨울

console.log(original === clone); // false
```

`메모리에서는 어떤 작업이 발생하는지`

- 봄이라는 값은 original 변수에 저장될 때 특정 메모리에 값이 저장된다. 예) 0x000001
- clone 변수에서 original 변수 값을 복사할 때 값은 그대로 복사되며 특정 메모리에 값이 저장된다. 예) 0x000002
- clone 변수에서 어떤 값을 더했을 때, clone 변수를 담은 메모리 주소에서만 변화가 일어난다.
- 값을 담고 있는 메모리 주소가 다르다.
<hr />

```
let originalObject = {
  month: '8월',
  season: '여름',
};

let cloneObject = originalObject;

console.log(originalObject); // {month: '8월', season: '여름'}
console.log(cloneObject); // {month: '8월', season: '여름'}

originalObject['season'] = '가을';
console.log(originalObject); // {month: '8월', season: '가을'}
console.log(cloneObject); // {month: '8월', season: '가을'}

console.log(originalObject === cloneObject); // true
```

`메모리에서는 어떤 작업이 발생하는지`

- month, season 키를 갖고 있는 originalObject 객체가 메모리 주소에 할당된다. 예) 0x000007
- originalObject 객체는 0x000007 메모리 주소에 담겨 있는 것이 아니다.
- originalObject 객체는 다른 주소 예) 0x000005 에서 0x000007 주소를 다시 가리킨다.
- cloneObject에서 originalObject 객체를 복사하면 originalObject 객체의 값이 아닌, originalObject 객체가 가리키는 주소를 복사한다.
- originalObject, cloneObject 모두 같은 메모리 주소를 가리키게 된다.
- 0x000007 메모리 주소에 있는 값을 변경하면 이 주소를 가리키는 originalObject, cloneObject 값이 바뀐다.
- 값을 가리키는 메모리 주소가 같다.
<hr />

```
let originalObject = {
  month: '8월',
  season: '여름',
};

let cloneObject = {
  month: '8월',
  season: '여름',
};

console.log(originalObject === cloneObject); // false
```

`Object 안의 값이 같아서 같은 값으로 인식하는 것이 아니다.`

<hr />

## Object - Spread Operator

```
const web = {
  language: 'JavaScript',
};

const web2 = {
  ...web,
};

console.log(web); // {language: 'JavaScript'}
console.log(web2); // {language: 'JavaScript'}

console.log(web === web2); // false

```

- Object에 Spread Operator를 사용하는 경우 **Copy by Value**
- Spread Operator 사용 > Object, Array를 똑같은 값을 갖고 있는 새로운 값으로 복사할 수 있다.

`Immutable Programming에서 Spread Operator는 중요하다.`
