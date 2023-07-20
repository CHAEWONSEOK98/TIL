// Loopholes of Any

let number: number;
number = 10;

// number.toUpperCase(); X
// (number as any).toUpperCase(); // O

//

const multiplyTwo = (x: number, y: number) => {
  return x * y;
};

let args1: any = '귤';
let args2: any = true;

// multiplyTwo('귤', true); X
multiplyTwo(args1, args2); // O

//

let person: any = { name: '채귤', age: 26 };
person; // any로 캐스팅하는 경우 자동완성 기능을 지원하지 않는다.

//

/*
- any 타입을 사용하는 경우 에러가 발생해도 알림을 받지 못한다.
- 코드를 리펙토링할 때 원래 코드에서 코드가 변경되어도 에러를 감지하지 못한다.
*/
const callbackRunner = (x: number, y: number, callback: any) => {
  return callback(x, y);
};

const callback = (x: number, y: number) => {
  return x * y;
};

console.log(callbackRunner(5, 4, callback));
