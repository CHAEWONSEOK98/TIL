// Defining Function

function printNumber(n: number) {
  console.log(n);
}

function returnSum(n1: number, n2: number) {
  return n1 + n2;
}
console.log(returnSum(1, 2));
// console.log(returnSum(1, 'summer')); // x

// Optional Parameter
function multiplyOrReturn(x: number, y?: number) {
  if (y) {
    return x * y;
  } else {
    return x;
  }
}
console.log(multiplyOrReturn(10, 20));
console.log(multiplyOrReturn(10));

function multiplyOrReturn2(x: number, y: number = 20) {
  return x * y;
}
console.log(multiplyOrReturn2(10));
console.log(multiplyOrReturn2(10, 30));

// 나머지 매개변수
function getInfiniteParameters(...args: string[]) {
  return args.map((x) => `계절: ${x}`);
}
console.log(getInfiniteParameters('봄', '여름', '가을', '겨울'));

// Return Type
function addTwoNumbers(x: number, y: number) {
  return x + y;
}
addTwoNumbers(10, 20);

function randomNumber() {
  return Math.random() > 0.5 ? 10 : '랜덤';
}
randomNumber();

function subtractTwoNumbers(x: number, y: number): number {
  return x - y;
}

const subtractTwoNumbersArrow = (x: number, y: number): number => {
  return x - y;
};

// 특수 반환 타입 - void | never
function doNotReturn(): void {
  console.log('반환 x');
}
doNotReturn();

// 함수가 끝나지 않는 경우를 만든 경우
function neverEndingLoop(): never {
  while (true) {}
}

function throwError2(): never {
  throw Error();
}
