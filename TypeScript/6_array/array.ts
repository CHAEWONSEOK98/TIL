// Problems with Array in JS

const number = [1, '2', 3, '4', 5];

let strings: string[] = ['1', '2', '3'];

let stringsOrNumbersArray: (string | number)[] = [1, '2', 3, '4'];

let stringArrayNumberArray: string[] | number[] = [1, 2, 3];
stringArrayNumberArray = ['1', '2', '3'];

let stringOrNumberArray: string | number[] = [1, 2, 3];
stringOrNumberArray = '3';

let booleanArray = [true, true, false];

const numbers = [1, 2, 3];
let numbers2 = numbers[9]; // number type | 인덱스의 길이를 신경쓰지 않음

// Spread Operator
const onlyString = ['1', '2', '3', '4'];
const onlyNumbers = [1, 2, 3, 4];

const arr1 = [...onlyString]; // string[] type

const arr2 = [...onlyString, ...onlyNumbers]; // (string | number)[] type

// Multi Dimension Array
const number2DArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

const string2DArr = [
  ['1', '2', '3'],
  ['4', '5', '6'],
];

const stringAndNumberArr: (number | string)[][] = [
  [1, '2', 3],
  ['4', 5, '6'],
];

let stringArrOrNumberArr: string[][] | number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
stringArrOrNumberArr = [['1'], ['2']];
