/*
Narrowing
Narrowing은 Union 타입에서 더욱 구체적인 타입으로
논리적으로 유추할 수 있게 되는 걸 의미한다.
*/

let numberOrString: number | string = 'chaegyul';
numberOrString; // string 타입

const decimal = 12.3278;
console.log(decimal.toFixed(2));
numberOrString.toFixed(); // x

/*
Narrowing 종류

1) Assignment Narrowing
2) Typeof Narrowing
3) Truthiness Narrowing
4) Equality Narrowing
5) In operator narrowing
6) Instanceof narrowing
7) Discrimated union narrowing
8) Exhaustiveness checking
*/

// 1) Assignment Narrowing : 특정 값을 할당해서 내로잉
let numberOrString2: number | string = '채귤';
numberOrString2.toString();

// 2) Typeof Narrowing
numberOrString2 = Math.random() > 0.5 ? 123 : '채귤';

if (typeof numberOrString2 === 'string') {
  numberOrString2; //string 타입
} else {
  numberOrString2; // number 타입
}

// 3) Truthiness Narrowing
let nullOrString: null | string[] = Math.random() > 0.5 ? null : ['봄', '가을'];

if (nullOrString) {
  nullOrString; // string[] 타입
} else {
  nullOrString; // null 타입
}

// 4) Equality Narrowing
let numberOrString3: number | string = Math.random() > 0.5 ? 123 : '채귤';
let stringOrBoolean3: string | boolean = Math.random() > 0.5 ? '채귤' : true;

if (numberOrString3 === stringOrBoolean3) {
  numberOrString3; // string
  stringOrBoolean3; // string
} else {
  numberOrString3; // string | number
  stringOrBoolean3; // string | true
}

// 5) In operator narrowing
interface Human {
  name: string;
  age: number;
}

interface Contact {
  phone: number;
  address: string;
}

let human: Human = {
  name: '채귤',
  age: 26,
};

let contact: Contact = {
  phone: 1012345678,
  address: '서울',
};

let humanOrCantact: Human | Contact = Math.random() > 0.5 ? human : contact;

console.log('name' in human);

if ('address' in humanOrCantact) {
  humanOrCantact; // Contact
} else {
  humanOrCantact; // Human
}

// 6) Instanceof narrowing
let dateOrString: Date | string = Math.random() > 0.5 ? new Date() : '채귤';

if (dateOrString instanceof Date) {
  dateOrString; // Date
} else {
  dateOrString; // string
}

// 7) Discrimated union narrowing
interface Human4 {
  type: 'human';
  height: number;
}

interface Season {
  type: 'season';
  now: string;
}

type HumanOrSeason = Human4 | Season;

let humanOrSeason: HumanOrSeason =
  Math.random() > 0.5
    ? {
        type: 'human',
        height: 175,
      }
    : {
        type: 'season',
        now: 'summer',
      };

if (humanOrSeason.type === 'human') {
  humanOrSeason; // Human4
} else {
  humanOrSeason; // Season
}

// 8) Exhaustiveness checking
switch (humanOrSeason.type) {
  case 'human':
    humanOrSeason; // Human4
    break;
  case 'season':
    humanOrSeason; // Season
    break;
  default:
    humanOrSeason; // never

    const _check: never = humanOrSeason; // 나중에 타입이 추가될 것을 대비
    break;
}
