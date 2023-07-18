// Extension

interface Name {
  name: string;
}

interface Person extends Name {
  age: number;
}

const person: Person = {
  name: '채귤',
  age: 26,
};

//

type TName = {
  name: string;
};

type TPerson = TName & {
  age: number;
};

const person2: TPerson = {
  name: '채귤',
  age: 26,
};

//

interface Person3 extends TName {
  age: number;
}

const person3: Person3 = {
  name: '채귤',
  age: 26,
};

//

type TPerson2 = Name & {
  age: number;
};

const person4: TPerson2 = {
  name: '채귤',
  age: 26,
};

// extending multiple
type NameType = {
  name: string;
};

type AgeType = {
  age: number;
};

type CountryType = {
  country: string;
};

type PersonType = NameType & AgeType & CountryType;

const person7: PersonType = {
  name: '채귤',
  age: 26,
  country: '서울',
};

//

interface CatName {
  name: string;
}

interface CatAge {
  age: number;
}

interface Cat extends CatName, CatAge {
  grooming: string;
}

const cat: Cat = {
  name: '킹캣',
  age: 3,
  grooming: 'need',
};

// Overrding
type THeight = {
  height: number;
};

type TRectangle = THeight & {
  height: string;
  width: number;
};

// const rectangle: TRectangle = {
//     height:,
//     width:100
// };

type TWidth = {
  width: number | string;
};

type TRectangle2 = TWidth & {
  width: number;
  height: number;
};

const rectangle: TRectangle2 = {
  width: 100,
  height: 200,
};

//

interface Height {
  height: number;
}
// interface Rectangle extends Height {
//   height: string;
//   width: number;
// }

interface Width {
  width: number | string;
}

interface Rectangle extends Width {
  width: number;
  height: number;
}
