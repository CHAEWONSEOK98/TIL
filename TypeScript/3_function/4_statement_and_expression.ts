// Statement and Expression
// Expression의 경우 타입을 먼저 선언하여 사용하면 반복 작업을 피할 수 있다.

// statement (문장)
function addTwoNumbers(x: number, y: number) {
  return x + y;
}

// expression (표현식)
const addTwoNumbersExp = (x: number, y: number) => {
  return x + y;
};

// Statement
function add(x: number, y: number): number {
  return x + y;
}

function subtract(x: number, y: number): number {
  return x - y;
}

function multiply(x: number, y: number): number {
  return x * y;
}

function divide(x: number, y: number): number {
  return x / y;
}

// Expression
type CalculationType = (x: number, y: number) => number;

const add2: CalculationType = function (x, y) {
  return x + y;
};

const subtract2: CalculationType = function (x, y) {
  return x - y;
};

const multiply2: CalculationType = function (x, y) {
  return x * y;
};
