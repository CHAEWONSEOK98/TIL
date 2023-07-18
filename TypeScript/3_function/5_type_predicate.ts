// Type Predicate
// "변수 is type"

function isNumber(input: any): input is number {
  return typeof input === 'number';
}
console.log(isNumber(10));

function isNumberBoolean(input: any): boolean {
  return typeof input === 'number';
}

let number: any = 5;

if (isNumberBoolean(number)) {
  number; // any type
}

if (isNumber(number)) {
  number; // number type
}

interface Doge {
  name: string;
  age: number;
}

interface Cat {
  name: string;
  grooming: string;
}

type DogeOrCat = Doge | Cat;

function isDoge(animal: DogeOrCat): animal is Doge {
  return (animal as Doge).age !== undefined;
}

const doge: DogeOrCat =
  Math.random() > 0.5
    ? {
        name: '도지',
        age: 26,
      }
    : {
        name: '킹캣',
        grooming: 'yes',
      };

if (isDoge(doge)) {
  doge; // Doge type
} else {
  doge; // Cat type
}
