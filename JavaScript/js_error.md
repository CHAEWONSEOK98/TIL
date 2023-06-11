# JavaScript Error

## Error Handling

`try...catch...finally`

```
try {
  // 실행할 코드(에러가 발생할 가능성이 있는 코드)
} catch (error) {
  // try 코드 블록에서 에러가 발생하면 이 코드 블록의 코드가 실행된다.
  // error에는 try 코드 블록에서 발생한 Error 객체가 전달된다.
} finally {
  // 에러 발생과 상관없이 반드시 한 번 실행된다.
  // finally 키워드는 사용해도 되고, 사용하지 않아도 된다.
}
```

<hr />

## Error 객체

`const error = new Error('invalid');`

- Error 생성자 함수는 에러 객체를 생성한다.
- Error 생성자 함수가 생성한 에러 객체의 프로토타입은 모두 Error.prototype을 상속받는다.

<hr />

## throw

`throw 표현식`

- Error 생성자 함수로 에러 객체를 생성한다고 에러가 발생하는 것은 아니다. 즉, 에러 객체 생성과 에러 발생은 의미가 다르다.
- 에러를 발생시키려면 try 코드 블록에서 throw 문으로 에러 객체를 던져야 한다.
- throw 문의 표현식은 어떤 값이라도 상관없지만 일반적으로 에러 객체를 지정한다.
- 에러를 던지면 catch 문의 에러 변수가 생성되고 던져진 에러 객체가 할당된다. 그리고 catch 코드 블록이 실행된다.
<hr />

**에러가 발생하지 않는 코드를 작성하는 것은 불가능하다. 따라서 에러는 언제나 발생할 수 있다.**
