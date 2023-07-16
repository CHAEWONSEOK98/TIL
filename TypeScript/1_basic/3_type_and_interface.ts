// Type and Interface

// Type : 타입은 간단히하면 TS의 타입에 이름을 지어주는 역할

type NewStringType = string;

type NewNullType = null;

type NewNumberType = number;

const stringVar: NewStringType = 'test';

type PersonType = {
  name: string;
  year: number;
};

// const person: {
//   name: string;
//   year: number;
// } = {
//   name: '채귤',
//   year: 1998,
// };

const person: PersonType = {
  name: '채귤',
  year: 1998,
};

// Interface

interface PersonInterface {
  name: string;
  year: number;
}

const person2: PersonInterface = {
  name: '채귤',
  year: 1998,
};

interface PersonInterface2 {
  name: NewStringType;
  year: NewNumberType;
}

const person3: PersonInterface2 = {
  name: '채귤',
  year: 1998,
};

// Optional

interface PersonOptional {
  name: string;
  year?: number;
}

const person4: PersonOptional = {
  name: '채귤',
};
