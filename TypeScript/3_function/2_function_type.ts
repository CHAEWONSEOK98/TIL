// Function Type

const runner = () => {
  return ['봄', '여름', '가을', '겨울'].map((x) => `계절: ${x}`);
};
console.log(runner());

// ⬇

type Mapper = (x: string) => string;

const runner2 = (callback: Mapper) => {
  return ['봄', '여름', '가을', '겨울'].map(callback);
};
console.log(runner2((x) => `계절: ${x}`));

// 함수 타입 선언 - type
type MultiplyTwoNumbers = (x: number, y: number) => number;

const multiplyTwoNumbers: MultiplyTwoNumbers = (x, y) => {
  return x + y;
};

// 함수 타입 선언 - interface
interface IMultiplyTwoNumbers {
  (x: number, y: number): number;
}

const multiplyTwoNumbers3: IMultiplyTwoNumbers = (x, y) => {
  return x * y;
};
